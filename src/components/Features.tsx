const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
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
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "毎回の授業後レポートと質問対応",
    description:
      "授業が終わるたびに、その日の内容・次回までの課題・注意点をまとめたレポートを送付します。授業外の疑問はLINEで平日いつでも質問でき、学習の空白時間をなくします。",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "模試・定期テストの結果分析と改善",
    description:
      "模試や定期テストの結果を一緒に分析し、カリキュラムを随時アップデートします。「やりっぱなし」にせず、データに基づいて学習計画を常に最適化することで、着実に実力を伸ばします。",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "小論文・面接まで一貫サポート",
    description:
      "学科試験だけでなく、医学部特有の小論文・面接対策も一貫して対応します。医療倫理・時事問題の解説から模擬面接まで、現役医学生ならではの視点で実践的に指導します。",
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
            className="text-3xl md:text-4xl font-bold"
            style={{ color: "#0A1628" }}
          >
            医進ラボが選ばれる理由
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ border: "1px solid #E2DDD4" }}
            >
              <div
                className="absolute top-6 right-6 text-5xl font-bold opacity-10"
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
