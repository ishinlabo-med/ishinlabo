/**
 * 医進ラボ 画像自動生成スクリプト
 * 使い方: node scripts/download-images.mjs
 *
 * Pollinations.ai (無料・APIキー不要) で画像を生成して保存します。
 * 生成された画像は public/images/ に保存されます。
 */

import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { URL } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(__dirname, "../public/images");
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

// ---------- HTTP ダウンロード（リダイレクト対応）----------

function downloadUrl(urlStr, dest, timeoutMs = 120000) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("Timeout")), timeoutMs);

    function request(urlStr, redirectCount = 0) {
      if (redirectCount > 15) return reject(new Error("Too many redirects"));
      const url = new URL(urlStr);
      const opts = {
        hostname: url.hostname,
        path: url.pathname + url.search,
        headers: { "User-Agent": "Mozilla/5.0" },
      };
      https.get(opts, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          res.resume();
          const loc = res.headers.location;
          const next = loc.startsWith("http") ? loc : `https://${url.hostname}${loc}`;
          request(next, redirectCount + 1);
          return;
        }
        if (res.statusCode !== 200) {
          res.resume();
          clearTimeout(timer);
          return reject(new Error(`HTTP ${res.statusCode}`));
        }
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on("finish", () => { file.close(); clearTimeout(timer); resolve(); });
        file.on("error", (e) => { clearTimeout(timer); fs.unlink(dest, () => {}); reject(e); });
      }).on("error", (e) => { clearTimeout(timer); reject(e); });
    }

    request(urlStr);
  });
}

// Pollinations.ai の疎通確認
async function checkPollinations() {
  return new Promise((resolve) => {
    const opts = { hostname: "image.pollinations.ai", path: "/prompt/test?width=64&height=64&nologo=true" };
    const req = https.get(opts, (res) => { res.resume(); resolve(res.statusCode === 200); });
    req.setTimeout(10000, () => { req.destroy(); resolve(false); });
    req.on("error", () => resolve(false));
  });
}

// ---------- 生成する画像の定義 ----------

const images = [
  {
    name: "hero-bg.jpg",
    label: "Hero背景",
    prompt: "Japanese male medical student studying at wooden desk, medical textbooks open, warm desk lamp glow, night atmosphere, bokeh background, cinematic photography, realistic, vertical 4:5",
    width: 480,
    height: 600,
    seed: 42,
  },
  {
    name: "founder-a.jpg",
    label: "講師A",
    prompt: "Young Japanese male doctor age 22, wearing white coat, professional portrait photo, confident gentle smile, hospital corridor background, soft natural lighting, square format, photorealistic",
    width: 400,
    height: 400,
    seed: 101,
  },
  {
    name: "founder-b.jpg",
    label: "講師B",
    prompt: "Young Japanese male doctor age 23, white coat, professional headshot portrait, warm sincere expression, university campus background, natural light, square format, photorealistic",
    width: 400,
    height: 400,
    seed: 202,
  },
];

// ---------- メイン ----------

async function main() {
  console.log("=== 医進ラボ 画像生成スクリプト ===\n");

  // Pollinations.ai の状態確認
  process.stdout.write("Pollinations.ai の状態を確認中 ... ");
  const isUp = await checkPollinations();

  if (!isUp) {
    console.log("✗ 現在サービスが停止中です。\n");
    console.log("しばらく経ってから再度実行してください:");
    console.log("  node scripts/download-images.mjs\n");
    console.log("Pollinations.ai の状態: https://status.pollinations.ai");
    process.exit(1);
  }

  console.log("✓ オンラインです。画像生成を開始します。\n");

  let successCount = 0;

  for (const img of images) {
    const dest = path.join(outputDir, img.name);
    const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(img.prompt)}?width=${img.width}&height=${img.height}&nologo=true&seed=${img.seed}`;

    process.stdout.write(`生成中: ${img.label} (${img.width}x${img.height}) ... `);
    try {
      await downloadUrl(url, dest);
      const size = (fs.statSync(dest).size / 1024).toFixed(1);
      console.log(`✓ 完了 (${size} KB) → public/images/${img.name}`);
      successCount++;
    } catch (e) {
      console.log(`✗ 失敗: ${e.message}`);
    }
  }

  console.log(`\n${successCount}/${images.length} 枚の画像を生成しました。`);

  if (successCount > 0) {
    console.log("\n画像を確認して問題なければ以下を実行してデプロイします:");
    console.log("  node scripts/deploy.mjs");
    console.log("\nまたは画像を確認してからClaudeに「デプロイして」と伝えてください。");
  }
}

main().catch(console.error);
