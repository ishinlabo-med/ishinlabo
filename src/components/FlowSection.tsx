const steps = [
  {
    number: "01",
    title: "無料相談（30分）",
    subtitle: "Free Consultation",
    description:
      "まずはお気軽にお問い合わせください。現在の学習状況・志望校・お悩みをざっくばらんにお聞きします。勧誘は一切なく、相談だけで終わっても構いません。",
    note: "オンライン（Zoom）・対面どちらも対応",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "現状分析・プラン提案",
    subtitle: "Diagnosis & Proposal",
    description:
      "相談内容をもとに、現状の学力・弱点・志望校とのギャップを整理します。どのコース・プランが最適かをご提案し、カリキュラムの方向性をすり合わせます。",
    note: "強引な入塾案内はしません",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "オーダーメイドカリキュラム設計",
    subtitle: "Curriculum Design",
    description:
      "入塾後、最初の授業でさらに詳しくヒアリングを行い、あなただけのカリキュラムを設計します。教材・進度・指導方法をすべてあなたに合わせて最適化します。",
    note: "既製カリキュラムは使いません",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "授業スタート・継続サポート",
    subtitle: "Start & Support",
    description:
      "週1回〜複数回の個別授業が始まります。毎回の授業後にフィードバックレポートを送付。模試・定期テスト結果をもとにカリキュラムを随時改善し、受験本番まで伴走します。",
    note: "LINE質問対応あり（平日）",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function FlowSection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C9A84C" }}>
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0A1628" }}>
            入塾までの流れ
          </h2>
          <p className="text-sm max-w-xl mx-auto leading-relaxed" style={{ color: "#6B6560" }}>
            無料相談から授業開始まで、最短1週間で始められます。
            まずはお気軽にご連絡ください。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col">
              {/* Connector line */}
              {idx < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-10 left-[calc(100%+0px)] w-6 h-px z-10"
                  style={{ backgroundColor: "#C9A84C40", transform: "translateX(-50%)" }}
                />
              )}
              <div
                className="rounded-2xl p-7 flex flex-col flex-1"
                style={{ border: "1px solid #E2DDD4", backgroundColor: "#F8F7F4" }}
              >
                {/* Step number + icon */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: "#0A1628", color: "#C9A84C" }}
                  >
                    {step.icon}
                  </div>
                  <span
                    className="text-4xl font-bold"
                    style={{ color: "#C9A84C20" }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Label */}
                <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#C9A84C" }}>
                  Step {step.number} — {step.subtitle}
                </p>

                {/* Title */}
                <h3 className="font-bold text-base mb-3" style={{ color: "#0A1628" }}>
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs leading-relaxed mb-4 flex-1" style={{ color: "#6B6560" }}>
                  {step.description}
                </p>

                {/* Note */}
                <div
                  className="text-xs px-3 py-2 rounded-lg"
                  style={{ backgroundColor: "#0A162810", color: "#0A1628", borderLeft: "2px solid #C9A84C" }}
                >
                  {step.note}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
