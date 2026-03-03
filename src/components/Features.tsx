const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    title: "塾なし難関医学部合格の現役医学生が直接指導",
    description:
      "塾なしで慶應医学部特待・私立医学部全勝を果たした現役慶應医学部生2名が直接指導します。受験の最前線にいる講師だからこそ伝えられる、リアルな合格戦略と勉強法をあなたに届けます。",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    title: "医進ラボ式・完全オーダーメイドカリキュラム",
    description:
      "市販教材や既製カリキュラムに生徒を合わせるのではなく、あなたの現状・志望校・弱点に完全対応したカリキュラムを設計。医進ラボ式勉強法の3ステップで、最短最速の合格を目指します。",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "オンライン・対面どちらも対応",
    description:
      "Zoomを使ったオンライン指導と、対面指導の両方に対応しています。全国どこからでも受講でき、首都圏の方は対面での指導も選択可能。あなたのライフスタイルに合わせて柔軟に対応します。",
  },
];

export default function Features() {
  return (
    <section className="section-padding" style={{ backgroundColor: "#F8F7F4" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ border: "1px solid #E2DDD4" }}
            >
              <div
                className="absolute top-6 right-6 font-playfair text-5xl font-bold opacity-10"
                style={{ color: "#C9A84C" }}
              >
                {String(idx + 1).padStart(2, "0")}
              </div>
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
