import Link from "next/link";

const rows = [
  {
    feature: "指導者の合格経験",
    other1: "なし（プロ講師）",
    other2: "まちまち",
    ours: "全員・慶應医学部合格者",
    oursBest: true,
  },
  {
    feature: "カリキュラムの個別化",
    other1: "全員同じ",
    other2: "部分的",
    ours: "完全オーダーメイド",
    oursBest: true,
  },
  {
    feature: "担当講師の固定",
    other1: "なし（複数担当）",
    other2: "場合による",
    ours: "専任1名が一貫担当",
    oursBest: true,
  },
  {
    feature: "授業外の質問対応",
    other1: "なし・有料オプション",
    other2: "限定的",
    ours: "LINE平日対応（無料）",
    oursBest: true,
  },
  {
    feature: "小論文・面接対策",
    other1: "別途追加料金",
    other2: "別コース",
    ours: "プランに含む",
    oursBest: true,
  },
  {
    feature: "オンライン対応",
    other1: "対面中心",
    other2: "△",
    ours: "全国完全オンライン対応",
    oursBest: true,
  },
  {
    feature: "料金（月額目安）",
    other1: "20万〜40万円",
    other2: "30万〜60万円",
    ours: "8万円〜",
    oursBest: true,
  },
  {
    feature: "無料相談・体験",
    other1: "なし・有料",
    other2: "なし",
    ours: "無料（勧誘なし）",
    oursBest: true,
  },
];

export default function ComparisonSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: "#F8F7F4" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C9A84C" }}>
            Comparison
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0A1628" }}>
            他の塾・予備校との<span style={{ color: "#C9A84C" }}>徹底比較</span>
          </h2>
          <p className="text-sm leading-relaxed max-w-xl mx-auto" style={{ color: "#6B6560" }}>
            医進ラボは「実際に合格した人が、完全個別指導で教える」という
            当たり前を実現した唯一の医学部専門塾です。
          </p>
        </div>

        {/* Comparison table */}
        <div className="rounded-2xl overflow-hidden shadow-lg animate-fade-in-up" style={{ border: "1px solid #E2DDD4" }}>
          {/* Table header */}
          <div className="grid grid-cols-4 text-center text-xs font-bold" style={{ backgroundColor: "#0A1628" }}>
            <div className="p-4 text-left" style={{ color: "#FFFFFF60" }}>比較項目</div>
            <div className="p-4" style={{ color: "#FFFFFF60" }}>大手予備校</div>
            <div className="p-4" style={{ color: "#FFFFFF60" }}>医学部専門予備校</div>
            <div
              className="p-4 relative"
              style={{ backgroundColor: "#C9A84C15", color: "#C9A84C" }}
            >
              医進ラボ
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ backgroundColor: "#C9A84C" }}
              />
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-4 text-center text-xs"
              style={{
                backgroundColor: i % 2 === 0 ? "#FFFFFF" : "#F8F7F4",
                borderTop: "1px solid #E2DDD4",
              }}
            >
              <div className="p-4 text-left font-semibold" style={{ color: "#0A1628" }}>
                {row.feature}
              </div>
              <div className="p-4 flex items-center justify-center" style={{ color: "#9B8B7A" }}>
                <span className="flex items-center gap-1.5">
                  <span style={{ color: "#E05D5D" }}>✕</span>
                  {row.other1}
                </span>
              </div>
              <div className="p-4 flex items-center justify-center" style={{ color: "#9B8B7A" }}>
                <span className="flex items-center gap-1.5">
                  <span style={{ color: "#E0A85D" }}>△</span>
                  {row.other2}
                </span>
              </div>
              <div
                className="p-4 flex items-center justify-center font-bold"
                style={{
                  backgroundColor: "#C9A84C08",
                  color: "#0A1628",
                }}
              >
                <span className="flex items-center gap-1.5">
                  <span style={{ color: "#C9A84C" }}>◎</span>
                  {row.ours}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-xs mt-4 mb-10" style={{ color: "#9B8B7A" }}>
          ※ 各社公開情報をもとに医進ラボが調査・作成。料金は目安です。2025年3月時点。
        </p>

        {/* CTA */}
        <div
          className="rounded-2xl p-8 text-center animate-fade-in-up"
          style={{ backgroundColor: "#0A1628", border: "1px solid #C9A84C30" }}
        >
          <p className="text-white font-bold text-lg mb-2">
            まずは<span style={{ color: "#C9A84C" }}>無料相談</span>で違いを実感してください
          </p>
          <p className="text-white/50 text-sm mb-6">
            勧誘なし・完全無料。現役慶應医学部生が直接ご相談に乗ります。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://lin.ee/AJiB8h6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-line inline-flex items-center justify-center gap-2 px-8 py-3.5 font-bold rounded-xl text-sm"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.070 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              LINE無料相談
            </a>
            <Link
              href="/contact"
              className="btn-outline-white inline-flex items-center justify-center px-8 py-3.5 font-semibold rounded-xl text-sm"
            >
              フォームで相談
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
