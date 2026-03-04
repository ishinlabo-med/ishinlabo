# Notionページのテンプレート

同期スクリプト (`node scripts/sync-from-notion.mjs`) がNotionページを正しく読み込むために、
以下の形式でNotionページを作成してください。

---

## コース紹介ページ (`NOTION_COURSES_PAGE_ID`)

各コースを `---`（区切り線）で区切ります。

```
## 個別指導コース
subtitle: Medical Individual Coaching | badge: メインコース | highlight: true

医進ラボの核となるコースです。（説明テキスト）

### こんな方におすすめ
- 今年度・来年度の受験を目指している方
- 苦手科目を集中的に克服したい方

### 含まれる内容
- 完全1対1の個別授業（週1〜複数回）
- オンライン（Zoom）・対面どちらも選択可

note: まずは無料相談で現状をお聞かせください。

---

## 小論文特訓コース
subtitle: Essay Intensive | badge: オプション | highlight: false

（説明テキスト）

### こんな方におすすめ
- 小論文で差をつけたい方

### 含まれる内容
- 医療系テーマに特化した論文指導

---
```

### フィールドの説明

| フィールド | 説明 | 例 |
|-----------|------|-----|
| subtitle  | 英語のサブタイトル | `Medical Individual Coaching` |
| badge     | バッジテキスト | `メインコース` / `オプション` |
| highlight | 強調表示するか | `true` / `false` |
| note      | 補足テキスト（段落の先頭に `note:` をつける） | `note: 無料相談...` |

---

## 料金プランページ (`NOTION_PRICING_PAGE_ID`)

各プランを `---`（区切り線）で区切ります。

```
## 個別指導 週1回プラン
price: ¥44,000 | unit: / 月 | highlight: false | cta: このプランで相談する

週1回（月4回）の個別指導。（説明テキスト）

### 含まれる内容
- 個別授業 月4回（各60〜90分）
- オンライン・対面どちらも選択可

---

## 個別指導 週2回プラン
price: ¥82,000 | unit: / 月 | highlight: true | cta: このプランで相談する

（説明テキスト）

### 含まれる内容
- 個別授業 月8回（各60〜90分）

---
```

### フィールドの説明

| フィールド | 説明 | 例 |
|-----------|------|-----|
| price     | 料金 | `¥44,000` |
| unit      | 単位 | `/ 月` / `/ 回` |
| highlight | 「おすすめ」バッジをつけるか | `true` / `false` |
| cta       | ボタンのテキスト | `このプランで相談する` |

---

## 法的ページ（特商法・PP・利用規約）

これらのページは自由なフォーマットで書けます。
見出し（H1〜H3）、本文、箇条書き、テーブルなどが使えます。

ページタイトルは自動的にページのタイトルから取得されます。

---

## NotionページIDの確認方法

1. Notionでページを開く
2. URLをコピー: `https://www.notion.so/ページタイトル-**xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx**`
3. 末尾の32文字（ハイフンなし）または `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx` 形式がPageID
4. `.env.local` に貼り付ける

## Integration（連携）の設定方法

1. https://www.notion.so/my-integrations にアクセス
2. 「新しいインテグレーション」を作成
3. APIキーをコピーして `.env.local` の `NOTION_API_KEY` に設定
4. 各Notionページを開き、右上「...」→「コネクト」→ 作成したインテグレーションを追加
