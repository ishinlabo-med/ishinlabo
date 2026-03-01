const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "現役医学生・医師による個別指導",
    description:
      "実際に医学部を突破した経験を持つ講師が、受験の最前線の情報と自身の成功体験をもとに指導します。形式的な授業ではなく、あなたに合わせたオーダーメイドの指導を提供します。",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "弱点を徹底分析・可視化",
    description:
      "科目別・単元別の理解度を詳細に分析し、優先すべき学習課題を明確化。限られた受験期間を最大限に活用するための戦略的な学習計画を立案します。",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "完全オンラインで場所を選ばない",
    description:
      "Zoomを使ったオンライン指導で、全国どこからでも受講可能。移動時間ゼロで自分の部屋から最高品質の指導を受けられます。録画機能で復習も万全です。",
  },
];

export default function Features() {
  return (
    <section className="section-padding" style={{ backgroundColor: "#F8F7F4" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#C9A84C" }}
          >
            Why Ishin Labo
          </p>
          <h2
            className="font-playfair text-3xl md:text-4xl font-bold"
            style={{ color: "#0A1628" }}
          >
            医進ラボが選ばれる3つの理由
          </h2>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ border: "1px solid #E2DDD4" }}
            >
              {/* Number */}
              <div
                className="absolute top-6 right-6 font-playfair text-5xl font-bold opacity-10"
                style={{ color: "#C9A84C" }}
              >
                {String(idx + 1).padStart(2, "0")}
              </div>

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: "#0A1628", color: "#C9A84C" }}
              >
                {feature.icon}
              </div>

              <h3
                className="font-bold text-lg mb-3 leading-snug"
                style={{ color: "#0A1628" }}
              >
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#6B6560" }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
