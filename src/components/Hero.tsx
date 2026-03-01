import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      style={{ backgroundColor: "#0A1628" }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #C9A84C 0%, transparent 50%), radial-gradient(circle at 80% 20%, #C9A84C 0%, transparent 40%)",
        }}
      />
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-8"
            style={{ border: "1px solid #C9A84C", color: "#C9A84C" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            医学部受験専門 オンライン個別指導
          </div>

          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            医学部合格への
            <br />
            <span style={{ color: "#C9A84C" }}>最短距離</span>を、
            <br />
            ともに歩む。
          </h1>

          <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            現役医学生・医師による完全オンライン個別指導。
            あなたの弱点を徹底分析し、合格までの道筋を二人三脚で切り拓きます。
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="btn-gold inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded shadow-lg"
            >
              無料相談を申し込む
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/courses"
              className="btn-outline-white inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded"
            >
              コース・料金を見る
            </Link>
          </div>

          <div className="mt-14 flex flex-col sm:flex-row gap-8 sm:gap-12">
            {[
              { value: "95%", label: "志望校合格率" },
              { value: "100+", label: "指導実績（生徒数）" },
              { value: "完全", label: "オンライン対応" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-playfair text-3xl font-bold" style={{ color: "#C9A84C" }}>
                  {stat.value}
                </div>
                <div className="text-white/50 text-sm mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
