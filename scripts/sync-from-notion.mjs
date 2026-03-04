/**
 * 医進ラボ Notion 同期スクリプト
 * 使い方: node scripts/sync-from-notion.mjs
 *
 * 必要な環境変数 (.env.local):
 *   NOTION_API_KEY          - NotionのAPIキー (secret_xxx...)
 *   NOTION_COURSES_PAGE_ID  - コース紹介ページのID
 *   NOTION_PRICING_PAGE_ID  - 料金プランページのID
 *   NOTION_TOKUSHOHO_PAGE_ID - 特定商取引法ページのID
 *   NOTION_PRIVACY_PAGE_ID  - プライバシーポリシーページのID
 *   NOTION_TERMS_PAGE_ID    - 利用規約ページのID
 *
 * Notionページの書き方:
 *   → docs/notion-template.md を参照してください
 */

import { Client } from "@notionhq/client";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

// .env.local を読み込む
function loadEnv() {
  const envPath = path.join(ROOT, ".env.local");
  if (!fs.existsSync(envPath)) {
    console.error("❌ .env.local が見つかりません。.env.local.example をコピーして設定してください。");
    process.exit(1);
  }
  const lines = fs.readFileSync(envPath, "utf-8").split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const [key, ...rest] = trimmed.split("=");
    if (key && rest.length > 0) {
      process.env[key.trim()] = rest.join("=").trim().replace(/^["']|["']$/g, "");
    }
  }
}

loadEnv();

const NOTION_API_KEY = process.env.NOTION_API_KEY;
if (!NOTION_API_KEY) {
  console.error("❌ NOTION_API_KEY が設定されていません。");
  process.exit(1);
}

const notion = new Client({ auth: NOTION_API_KEY });

// ========== Notionブロック → テキスト変換ヘルパー ==========

/** リッチテキスト配列からプレーンテキストを取得 */
function richTextToPlain(richTexts) {
  return richTexts.map((t) => t.plain_text).join("");
}

/** リッチテキスト配列からMarkdownテキストを取得 */
function richTextToMd(richTexts) {
  return richTexts
    .map((t) => {
      let text = t.plain_text;
      if (t.annotations.bold) text = `**${text}**`;
      if (t.annotations.italic) text = `*${text}*`;
      if (t.annotations.code) text = `\`${text}\``;
      if (t.href) text = `[${text}](${t.href})`;
      return text;
    })
    .join("");
}

/** ページのすべてのブロックを取得（ページネーション対応） */
async function getAllBlocks(blockId) {
  const blocks = [];
  let cursor;
  do {
    const res = await notion.blocks.children.list({
      block_id: blockId,
      start_cursor: cursor,
      page_size: 100,
    });
    blocks.push(...res.results);
    cursor = res.has_more ? res.next_cursor : undefined;
  } while (cursor);
  return blocks;
}

// ========== Notion → Markdown 変換（法的ページ用） ==========

async function notionPageToMarkdown(pageId) {
  const blocks = await getAllBlocks(pageId);
  const lines = [];

  for (const block of blocks) {
    switch (block.type) {
      case "heading_1":
        lines.push(`# ${richTextToMd(block.heading_1.rich_text)}`);
        break;
      case "heading_2":
        lines.push(`## ${richTextToMd(block.heading_2.rich_text)}`);
        break;
      case "heading_3":
        lines.push(`### ${richTextToMd(block.heading_3.rich_text)}`);
        break;
      case "paragraph": {
        const text = richTextToMd(block.paragraph.rich_text);
        lines.push(text || "");
        break;
      }
      case "bulleted_list_item":
        lines.push(`- ${richTextToMd(block.bulleted_list_item.rich_text)}`);
        break;
      case "numbered_list_item":
        lines.push(`1. ${richTextToMd(block.numbered_list_item.rich_text)}`);
        break;
      case "divider":
        lines.push("---");
        break;
      case "table": {
        // テーブルは子ブロックが必要
        const tableRows = await getAllBlocks(block.id);
        for (const row of tableRows) {
          if (row.type === "table_row") {
            const cells = row.table_row.cells.map((c) => richTextToMd(c));
            lines.push(`| ${cells.join(" | ")} |`);
          }
        }
        break;
      }
      default:
        break;
    }
  }

  return lines.join("\n");
}

// ========== Notion → JSON 変換（コース・料金用） ==========

/**
 * コースページのパース
 *
 * Notionページの構造（各コースを --- で区切る）:
 *   ## コース名
 *   subtitle: English Name | badge: バッジ名 | highlight: true/false
 *
 *   説明テキスト（複数段落OK）
 *
 *   ### こんな方におすすめ
 *   - 項目1
 *   - 項目2
 *
 *   ### 含まれる内容
 *   - 機能1
 *   - 機能2
 *
 *   note: 補足テキスト
 *   ---
 */
async function parseCourses(pageId) {
  const blocks = await getAllBlocks(pageId);
  const courses = [];
  let current = null;
  let section = null; // "targetStudents" | "features" | "description"

  function commitCurrent() {
    if (current) {
      courses.push(current);
      current = null;
      section = null;
    }
  }

  for (const block of blocks) {
    if (block.type === "divider") {
      commitCurrent();
      continue;
    }

    if (block.type === "heading_2") {
      commitCurrent();
      const title = richTextToPlain(block.heading_2.rich_text).trim();
      current = {
        id: title.replace(/\s+/g, "-").toLowerCase(),
        title,
        subtitle: "",
        badge: "",
        badgeHighlight: false,
        description: "",
        features: [],
        targetStudents: [],
        note: "",
      };
      section = "description";
      continue;
    }

    if (!current) continue;

    if (block.type === "heading_3") {
      const heading = richTextToPlain(block.heading_3.rich_text).trim();
      if (heading.includes("おすすめ") || heading.includes("対象")) {
        section = "targetStudents";
      } else if (heading.includes("含まれる") || heading.includes("内容") || heading.includes("feature")) {
        section = "features";
      } else {
        section = "description";
      }
      continue;
    }

    if (block.type === "paragraph") {
      const text = richTextToPlain(block.paragraph.rich_text).trim();
      if (!text) continue;

      // note: で始まる行はnoteフィールド
      if (text.startsWith("note:")) {
        current.note = text.replace(/^note:\s*/, "").trim();
        continue;
      }

      // subtitle: / badge: / highlight: を含む行はメタデータ
      if (text.includes("subtitle:") || text.includes("badge:") || text.includes("highlight:")) {
        const parts = text.split("|").map((p) => p.trim());
        for (const part of parts) {
          const [key, ...rest] = part.split(":").map((s) => s.trim());
          const val = rest.join(":").trim();
          if (key === "subtitle") current.subtitle = val;
          if (key === "badge") current.badge = val;
          if (key === "highlight") current.badgeHighlight = val.toLowerCase() === "true";
          if (key === "id") current.id = val;
        }
        continue;
      }

      if (section === "description") {
        current.description = current.description
          ? `${current.description}\n${text}`
          : text;
      }
      continue;
    }

    if (block.type === "bulleted_list_item") {
      const text = richTextToPlain(block.bulleted_list_item.rich_text).trim();
      if (!text) continue;
      if (section === "targetStudents") {
        current.targetStudents.push(text);
      } else if (section === "features") {
        current.features.push(text);
      }
      continue;
    }
  }

  commitCurrent();
  return courses;
}

/**
 * 料金ページのパース
 *
 * Notionページの構造（各プランを --- で区切る）:
 *   ## プラン名
 *   price: ¥44,000 | unit: / 月 | highlight: false | cta: このプランで相談する
 *
 *   説明テキスト
 *
 *   ### 含まれる内容
 *   - 機能1
 *   ---
 */
async function parsePricing(pageId) {
  const blocks = await getAllBlocks(pageId);
  const plans = [];
  let current = null;
  let section = null;

  function commitCurrent() {
    if (current) {
      plans.push(current);
      current = null;
      section = null;
    }
  }

  for (const block of blocks) {
    if (block.type === "divider") {
      commitCurrent();
      continue;
    }

    if (block.type === "heading_2") {
      commitCurrent();
      const name = richTextToPlain(block.heading_2.rich_text).trim();
      current = {
        name,
        price: "",
        unit: "/ 月",
        description: "",
        features: [],
        highlighted: false,
        cta: "このプランで相談する",
      };
      section = "description";
      continue;
    }

    if (!current) continue;

    if (block.type === "heading_3") {
      const heading = richTextToPlain(block.heading_3.rich_text).trim();
      if (heading.includes("含まれる") || heading.includes("内容")) {
        section = "features";
      } else {
        section = "description";
      }
      continue;
    }

    if (block.type === "paragraph") {
      const text = richTextToPlain(block.paragraph.rich_text).trim();
      if (!text) continue;

      // price: / unit: / highlight: / cta: を含む行はメタデータ
      if (text.includes("price:") || text.includes("unit:") || text.includes("highlight:") || text.includes("cta:")) {
        const parts = text.split("|").map((p) => p.trim());
        for (const part of parts) {
          const [key, ...rest] = part.split(":").map((s) => s.trim());
          const val = rest.join(":").trim();
          if (key === "price") current.price = val;
          if (key === "unit") current.unit = val;
          if (key === "highlight") current.highlighted = val.toLowerCase() === "true";
          if (key === "cta") current.cta = val;
        }
        continue;
      }

      if (section === "description") {
        current.description = current.description
          ? `${current.description}\n${text}`
          : text;
      }
      continue;
    }

    if (block.type === "bulleted_list_item" && section === "features") {
      const text = richTextToPlain(block.bulleted_list_item.rich_text).trim();
      if (text) current.features.push(text);
      continue;
    }
  }

  commitCurrent();
  return plans;
}

// ========== ページタイトル取得 ==========

async function getPageTitle(pageId) {
  const page = await notion.pages.retrieve({ page_id: pageId });
  const titleProp = Object.values(page.properties || {}).find(
    (p) => p.type === "title"
  );
  if (titleProp) return richTextToPlain(titleProp.title);
  return "";
}

// ========== ファイル保存ヘルパー ==========

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + "\n", "utf-8");
}

function writeMd(filePath, title, content) {
  const frontmatter = `---\ntitle: ${title}\n---\n\n`;
  fs.writeFileSync(filePath, frontmatter + content + "\n", "utf-8");
}

// ========== メイン ==========

async function main() {
  console.log("=== 医進ラボ Notion 同期スクリプト ===\n");

  const tasks = [
    {
      label: "コース紹介",
      envKey: "NOTION_COURSES_PAGE_ID",
      type: "courses",
      output: path.join(ROOT, "src/content/courses.json"),
    },
    {
      label: "料金プラン",
      envKey: "NOTION_PRICING_PAGE_ID",
      type: "pricing",
      output: path.join(ROOT, "src/content/pricing.json"),
    },
    {
      label: "特定商取引法",
      envKey: "NOTION_TOKUSHOHO_PAGE_ID",
      type: "legal",
      output: path.join(ROOT, "src/content/legal/tokushoho.md"),
    },
    {
      label: "プライバシーポリシー",
      envKey: "NOTION_PRIVACY_PAGE_ID",
      type: "legal",
      output: path.join(ROOT, "src/content/legal/privacy.md"),
    },
    {
      label: "利用規約",
      envKey: "NOTION_TERMS_PAGE_ID",
      type: "legal",
      output: path.join(ROOT, "src/content/legal/terms.md"),
    },
  ];

  let successCount = 0;

  for (const task of tasks) {
    const pageId = process.env[task.envKey];
    if (!pageId) {
      console.log(`⚠️  ${task.label}: ${task.envKey} が未設定のためスキップ`);
      continue;
    }

    process.stdout.write(`同期中: ${task.label} ... `);

    try {
      if (task.type === "courses") {
        const courses = await parseCourses(pageId);
        if (courses.length === 0) throw new Error("コースが見つかりませんでした。Notionページの構造を確認してください。");
        writeJson(task.output, courses);
        console.log(`✓ ${courses.length}件 → ${path.relative(ROOT, task.output)}`);
      } else if (task.type === "pricing") {
        const plans = await parsePricing(pageId);
        if (plans.length === 0) throw new Error("プランが見つかりませんでした。Notionページの構造を確認してください。");
        writeJson(task.output, plans);
        console.log(`✓ ${plans.length}件 → ${path.relative(ROOT, task.output)}`);
      } else if (task.type === "legal") {
        const title = await getPageTitle(pageId);
        const content = await notionPageToMarkdown(pageId);
        writeMd(task.output, title || task.label, content);
        console.log(`✓ → ${path.relative(ROOT, task.output)}`);
      }
      successCount++;
    } catch (e) {
      console.log(`✗ 失敗: ${e.message}`);
    }
  }

  console.log(`\n${successCount}/${tasks.filter((t) => process.env[t.envKey]).length} 件を同期しました。`);

  if (successCount > 0) {
    console.log("\n次のコマンドでサイトをビルド・確認してください:");
    console.log("  npm run dev");
    console.log("  npm run build");
  }
}

main().catch((e) => {
  console.error("予期しないエラー:", e.message);
  process.exit(1);
});
