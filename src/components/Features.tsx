const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    title: "合格した現役医学生が直接指導",
    description:
      "塾なしで慶應医学部特待・私立医学部全勝を果たした現役慶應医学部生が直接指導。受験の最前線にいるからこそ伝えられる、リアルな合格戦略と勉強法をあなたに届けます。",
    accent: "実績",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    title: "完全オーダーメイドカリキュラム",
    description:
      "市販カリキュラムに生徒を合わせるのではなく、あなたの現状・志望校・弱点に完全対応した学習計画を設計。医進ラボ式勉強法の3ステップで最短最速の合格を目指します。",
    accent: "個別",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "全国どこでもオンライン対応",
    description:
      "Zoomを使った完全オンライン個別指導で全国47都道府県から受講可能。ホワイトボード機能で数学・理科の解法も対面と遜色なく指導。地方在住でも最高水準の指導を受けられます。",
    accent: "全国",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "LINE平日質問対応（無料）",
    description:
      "授業外の疑問はLINEで平日いつでも質問できます。授業が終わるたびに次回までの課題・注意点をまとめたレポートも送付。学習の空白時間をなくし、常に前進できる環境です。",
    accent: "質問",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "模試分析でカリキュラムを最適化",
    description:
      "模試や定期テストの結果を一緒に徹底分析し、カリキュラムを随時アップデート。「やりっぱなし」にせず、データに基づいて学習計画を常に最適化することで、着実に実力を伸ばします。",
    accent: "分析",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "小論文・面接まで一貫サポート",
    description:
      "学科試験だけでなく、医学部特有の小論文・面接対策も一貫して対応。医療倫理・時事問題の解説から模擬面接まで、現役医学生ならではの視点で実践的に指導します。",
    accent: "総合",
  },
];

export default function Features() {
  return (
    <section className="section-padding" style={{ backgroundColor: "#F8F7F4" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 animate-fade-in-up">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C9A84C" }}>
            Why Ishin Labo
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0A1628" }}>
            医進ラボが<span style={{ color: "#C9A84C" }}>選ばれる理由</span>
          </h2>
          <p className="text-sm leading-relaxed max-w-xl mx-auto" style={{ color: "#6B6560" }}>
            他の予備校・塾では実現できない「合格者が直接指導する完全個別指導」を提供しています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-2xl p-8 card-hover animate-fade-in-up"
              style={{
                border: "1px solid #E2DDD4",
                animationDelay: `${idx * 0.08}s`,
              }}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-8 right-8 h-0.5 rounded-full"
                style={{ background: "linear-gradient(90deg, #C9A84C, #D4B86A)" }}
              />

              {/* Number + accent tag */}
              <div className="flex items-start justify-between mb-6">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #0A1628 0%, #1a2d4a 100%)", color: "#C9A84C" }}
                >
                  {feature.icon}
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: "#C9A84C15", color: "#C9A84C", border: "1px solid #C9A84C40" }}
                  >
                    {feature.accent}
                  </span>
                  <span
                    className="text-4xl font-black opacity-8 leading-none"
                    style={{ color: "#C9A84C" }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              <h3 className="font-bold text-lg mb-3 leading-snug" style={{ color: "#0A1628" }}>
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
