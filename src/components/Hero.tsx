import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-[95vh] flex items-center overflow-hidden"
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

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 w-full">
        <div className="max-w-3xl">
          {/* Badges */}
          <div className="flex flex-wrap gap-3 mb-8">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase"
              style={{ border: "1px solid #C9A84C", color: "#C9A84C" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              医学部受験専門 個別指導塾
            </div>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold"
              style={{ backgroundColor: "#C9A84C20", color: "#C9A84C80", border: "1px solid #C9A84C30" }}
            >
              オンライン・対面 両対応
            </div>
          </div>

          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            医学部合格は、
            <br />
            <span style={{ color: "#C9A84C" }}>才能ではなく</span>
            <br />
            方法論で決まる。
          </h1>

          <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-4 max-w-xl">
            塾なしで慶應医学部特待・私立医学部全勝を果たした
            <span className="text-white font-semibold">2名の現役慶應医学部生</span>が創設。
          </p>
          <p className="text-white/60 text-base leading-relaxed mb-10 max-w-xl">
            医進ラボ式勉強法と完全オーダーメイドカリキュラムで、
            あなたの医学部合格への最短ルートを共に切り拓きます。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <Link
              href="/contact"
              className="btn-gold inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded shadow-lg"
            >
              無料相談はこちら
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

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 pt-8" style={{ borderTop: "1px solid #C9A84C20" }}>
            {[
              { value: "1対1", label: "完全個別指導" },
              { value: "全国", label: "オンライン受講対応" },
              { value: "全科目", label: "英数理・小論文・面接" },
              { value: "無料", label: "相談・入塾前体験" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-playfair text-3xl font-bold" style={{ color: "#C9A84C" }}>
                  {stat.value}
                </div>
                <div className="text-white/50 text-xs mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
