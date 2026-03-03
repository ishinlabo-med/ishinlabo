export default function Methodology() {
  const steps = [
    {
      number: "01",
      title: "徹底的な現状分析",
      subtitle: "Diagnosis",
      description:
        "まず現在の学力・理解度・学習習慣を詳細に分析します。科目別・単元別に弱点を洗い出し、志望校合格までに必要なギャップを明確化。「何が足りないか」を正確に把握することが、最短合格への第一歩です。",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "完全オーダーメイドカリキュラム",
      subtitle: "Strategy",
      description:
        "分析結果をもとに、あなただけの学習計画を設計します。市販の教材・カリキュラムに生徒を合わせるのではなく、生徒に合わせた教材・進度・指導方法を選定。「今のあなた」に最適な勉強法で、無駄なく合格に近づきます。",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "伴走型・継続的なPDCA",
      subtitle: "Execution",
      description:
        "毎回の授業後にフィードバックを行い、模試・定期テストの結果を分析してカリキュラムを随時改善します。受験直前まで「今何をすべきか」を常に最適化。合格まで二人三脚で伴走し続けます。",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: "#F8F7F4" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C9A84C" }}>
            Our Method
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0A1628" }}>
            医進ラボ式勉強法
          </h2>
          <p className="text-sm max-w-2xl mx-auto leading-relaxed" style={{ color: "#6B6560" }}>
            2人の創設者が自身の合格体験と豊富な指導経験から確立した、医学部受験専用の学習メソッド。
            「才能ではなく方法論」を徹底的に追求した3ステップです。
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start bg-white shadow-sm"
              style={{ border: "1px solid #E2DDD4" }}
            >
              <div className="flex-shrink-0 flex items-center gap-4">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "#0A1628", color: "#C9A84C" }}
                >
                  {step.icon}
                </div>
                <div className="md:hidden">
                  <p className="font-playfair text-3xl font-bold opacity-20" style={{ color: "#C9A84C" }}>
                    {step.number}
                  </p>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C9A84C" }}>
                    Step {step.number} — {step.subtitle}
                  </span>
                </div>
                <h3 className="font-bold text-xl mb-3" style={{ color: "#0A1628" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6560" }}>
                  {step.description}
                </p>
              </div>
              <div className="hidden md:block flex-shrink-0">
                <p className="font-playfair text-6xl font-bold opacity-10" style={{ color: "#C9A84C" }}>
                  {step.number}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
