import Link from "next/link";

const plans = [
  {
    name: "個別指導 週1回プラン",
    price: "¥44,000",
    unit: "/ 月",
    description: "週1回（月4回）の個別指導。特定科目の強化・受験対策の入口として最適です。",
    features: [
      "個別授業 月4回（各60〜90分）",
      "オンライン・対面どちらも選択可",
      "完全オーダーメイドカリキュラム",
      "月次学習レポート",
      "LINE質問対応（平日）",
    ],
    highlighted: false,
    cta: "このプランで相談する",
  },
  {
    name: "個別指導 週2回プラン",
    price: "¥82,000",
    unit: "/ 月",
    description: "週2回（月8回）の個別指導。受験学年の総合力強化・弱点克服に最適なメインプランです。",
    features: [
      "個別授業 月8回（各60〜90分）",
      "オンライン・対面どちらも選択可",
      "完全オーダーメイドカリキュラム",
      "月次学習レポート",
      "LINE質問対応（平日）",
      "模試分析・フィードバック",
    ],
    highlighted: true,
    cta: "このプランで相談する",
  },
  {
    name: "小論文 特訓プラン",
    price: "¥33,000",
    unit: "/ 月",
    description: "月2回の小論文指導＋添削サービス。個別指導コースとの併用もおすすめです。",
    features: [
      "小論文指導 月2回（各60分）",
      "オンライン・対面どちらも選択可",
      "無制限添削（月4本まで）",
      "医療倫理テーマ解説資料",
    ],
    highlighted: false,
    cta: "このプランで相談する",
  },
  {
    name: "面接対策 集中プラン",
    price: "¥27,500",
    unit: "/ 回",
    description: "試験直前の集中面接対策。模擬面接＋フィードバック付きのスポット受講も可能。",
    features: [
      "模擬面接（90分）",
      "オンライン・対面どちらも選択可",
      "大学別傾向レポート",
      "改善ポイントフィードバック",
    ],
    highlighted: false,
    cta: "このプランで相談する",
  },
];

export default function PricingTable() {
  return (
    <section className="section-padding" style={{ backgroundColor: "#F8F7F4" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C9A84C" }}>
            Pricing
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0A1628" }}>
            料金プラン
          </h2>
          <p className="text-sm" style={{ color: "#6B6560" }}>
            全プラン入塾金・教材費込み。オンライン・対面どちらも同料金でご受講いただけます。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden flex flex-col"
              style={{
                border: plan.highlighted ? "2px solid #C9A84C" : "1px solid #E2DDD4",
                backgroundColor: "white",
                position: "relative",
              }}
            >
              {plan.highlighted && (
                <div className="text-center py-1.5 text-xs font-bold" style={{ backgroundColor: "#C9A84C", color: "#0A1628" }}>
                  おすすめ
                </div>
              )}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-bold text-base mb-2" style={{ color: "#0A1628" }}>
                  {plan.name}
                </h3>
                <div className="mb-3 flex items-baseline gap-1">
                  <span className="font-playfair text-3xl font-bold" style={{ color: plan.highlighted ? "#C9A84C" : "#0A1628" }}>
                    {plan.price}
                  </span>
                  <span className="text-sm" style={{ color: "#6B6560" }}>{plan.unit}</span>
                </div>
                <p className="text-xs leading-relaxed mb-5" style={{ color: "#6B6560" }}>
                  {plan.description}
                </p>
                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs" style={{ color: "#2D2A24" }}>
                      <span style={{ color: "#C9A84C" }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="block text-center py-2.5 text-xs font-semibold rounded-lg"
                  style={
                    plan.highlighted
                      ? { backgroundColor: "#C9A84C", color: "#0A1628" }
                      : { border: "1px solid #C9A84C", color: "#C9A84C" }
                  }
                >
                  {plan.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-10 rounded-xl p-6 text-center"
          style={{ backgroundColor: "#0A1628", border: "1px solid #C9A84C30" }}
        >
          <p className="text-white/80 text-sm mb-1">料金・プランについてご不明な点は、まずお気軽にご相談ください。</p>
          <p className="text-white/50 text-xs mb-4">複数コースの組み合わせや、長期割引プランも別途ご相談いただけます。</p>
          <Link href="/contact" className="btn-gold inline-flex items-center gap-2 px-6 py-3 font-bold rounded-lg text-sm">
            無料相談はこちら →
          </Link>
        </div>

        <p className="text-center text-xs mt-6" style={{ color: "#6B6560" }}>
          ※ 料金は税込表示です。
        </p>
      </div>
    </section>
  );
}
