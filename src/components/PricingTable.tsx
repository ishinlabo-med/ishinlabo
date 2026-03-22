import Link from "next/link";
import plansData from "@/content/pricing.json";

const plans = plansData as Array<typeof plansData[0] & { subtitle?: string }>;

export default function PricingTable() {
  return (
    <section className="section-padding" style={{ backgroundColor: "#F8F7F4" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C9A84C" }}>
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0A1628" }}>
            料金プラン
          </h2>
          <p className="text-sm" style={{ color: "#6B6560" }}>
            オンライン・対面どちらも同料金でご受講いただけます。
          </p>
          <div className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-full text-xs font-semibold"
            style={{ backgroundColor: "#0A162810", color: "#0A1628", border: "1px solid #0A162820" }}>
            入塾金 ¥20,000（初回のみ）／ 教材費込み
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
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
              <div className="p-5 flex-1 flex flex-col">
                <p className="text-xs font-semibold mb-0.5" style={{ color: "#C9A84C" }}>
                  {"subtitle" in plan ? String(plan.subtitle) : ""}
                </p>
                <h3 className="font-bold text-base mb-2" style={{ color: "#0A1628" }}>
                  {plan.name}
                </h3>
                <div className="mb-3 flex items-baseline gap-1">
                  <span className="text-2xl font-black" style={{ color: plan.highlighted ? "#C9A84C" : "#0A1628" }}>
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
          ※ 料金は税込表示です。入塾金¥20,000は初回のみ発生します。
        </p>
      </div>
    </section>
  );
}
