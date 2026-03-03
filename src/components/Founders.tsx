import Link from "next/link";

const LINE_URL = "https://lin.ee/XXXXXXX"; // TODO: 実際のLINE URLに変更

const problems = [
  {
    label: "大手予備校の問題",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
    title: "全員に同じカリキュラム",
    description:
      "大手予備校では数百人が同じ授業を受けます。自分の弱点・志望校に関係なく同じ進度・同じ教材。個別化は期待できません。",
  },
  {
    label: "医学部専門予備校（医専）の問題",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
    title: "個別化と言いつつ、自習室と参考書だけ",
    description:
      "医専は「個別対応」を謳っていても、実態は参考書と自習室の提供のみという塾が多数。さらに、実際に医学部に合格した経験がある講師が指導していないことが多く、合格戦略が現実的でないケースが目立ちます。",
  },
  {
    label: "医進ラボの誕生",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    title: "「合格をつかみ取れる環境」をつくるために",
    description:
      "医学部受験と指導の両方を経験した2人の慶應医学部生が、この現状を変えるために医進ラボを設立。「実際に合格した講師が、完全個別化カリキュラムで指導する」という当たり前をつくりました。",
    highlight: true,
  },
];

export default function Founders() {
  return (
    <section className="section-padding" style={{ backgroundColor: "#0A1628" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C9A84C" }}>
            Our Story
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
            医進ラボについて
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-base leading-relaxed">
            私立医学部全勝・塾なし慶應医学部特待・医科歯科に合格した2人の現役慶應医学部生が、
            豊富な指導経験と合格実績から確立した「医進ラボ式勉強法」をもとに設立した医学部受験塾です。
          </p>
        </div>

        {/* Founder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div
            className="rounded-2xl p-8 relative overflow-hidden"
            style={{ backgroundColor: "#112040", border: "1px solid #C9A84C33" }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5"
              style={{ backgroundImage: "radial-gradient(circle, #C9A84C 0%, transparent 70%)" }} />
            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-6"
              style={{ backgroundColor: "#C9A84C20", color: "#C9A84C", border: "1px solid #C9A84C50" }}>
              講師 A
            </div>
            <h3 className="font-playfair text-2xl font-bold text-white mb-3">
              塾なしで<span style={{ color: "#C9A84C" }}>慶應医学部特待</span>合格
            </h3>
            <p className="text-white/50 text-sm mb-1">慶應義塾大学医学部（特待生）</p>
            <p className="text-white/50 text-sm mb-6">東京医科歯科大学医学部 合格</p>
            <p className="text-white/70 text-sm leading-relaxed">
              高校時代、一切の予備校・塾を使わず独学で医学部受験に挑み、慶應医学部に特待生として合格。
              医学部受験の指導を重ねる中で「合格をつかみ取れる環境が整っていない」という問題を痛感し、
              医進ラボの設立へ。「正しい方法さえ知れば、才能に関係なく誰でも医学部に合格できる」という
              信念のもと、数多くの受験生を指導してきました。
            </p>
          </div>

          <div
            className="rounded-2xl p-8 relative overflow-hidden"
            style={{ backgroundColor: "#112040", border: "1px solid #C9A84C33" }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5"
              style={{ backgroundImage: "radial-gradient(circle, #C9A84C 0%, transparent 70%)" }} />
            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-6"
              style={{ backgroundColor: "#C9A84C20", color: "#C9A84C", border: "1px solid #C9A84C50" }}>
              講師 B
            </div>
            <h3 className="font-playfair text-2xl font-bold text-white mb-3">
              <span style={{ color: "#C9A84C" }}>私立医学部全勝</span>・慶應医学部合格
            </h3>
            <p className="text-white/50 text-sm mb-1">慶應義塾大学医学部</p>
            <p className="text-white/50 text-sm mb-6">私立医学部 全校合格</p>
            <p className="text-white/70 text-sm leading-relaxed">
              塾・予備校なしで慶應医学部をはじめ受験したすべての私立医学部に合格。
              「戦略的な受験勉強」を体系化し、限られた時間で最大限の結果を出す方法論を確立。
              自身の指導経験を通じ、「実際に合格した経験がある人が指導しなければ、
              合格戦略は現実的にならない」という確信から医進ラボを共同設立しました。
            </p>
          </div>
        </div>

        {/* 設立の背景 */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C9A84C" }}>
              Why We Started
            </p>
            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-white mb-4">
              医進ラボが生まれた理由
            </h3>
            <p className="text-white/60 max-w-2xl mx-auto text-sm leading-relaxed">
              医学部受験と指導の両方を経験してわかった、「合格できる環境が整っていない」という現実。
              既存の予備校・塾の問題を解決するために、私たちは医進ラボを設立しました。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problems.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-7"
                style={{
                  backgroundColor: item.highlight ? "#C9A84C15" : "#112040",
                  border: item.highlight ? "1px solid #C9A84C60" : "1px solid #C9A84C20",
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: item.highlight ? "#C9A84C" : "#FF4D4D20",
                      color: item.highlight ? "#0A1628" : "#FF6B6B",
                    }}
                  >
                    {item.icon}
                  </div>
                  <span
                    className="text-xs font-bold tracking-wide"
                    style={{ color: item.highlight ? "#C9A84C" : "#FF6B6B" }}
                  >
                    {item.label}
                  </span>
                </div>
                <h4 className="font-bold text-base text-white mb-3">{item.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: "#FFFFFF80" }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy + LINE CTA */}
        <div
          className="rounded-2xl p-10 text-center"
          style={{ backgroundColor: "#112040", border: "1px solid #C9A84C33" }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#C9A84C" }}>
            Our Philosophy
          </p>
          <h3 className="font-playfair text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
            医学部合格は、<span style={{ color: "#C9A84C" }}>才能ではなく</span><br />
            「正しい方法・戦略」と「合格への熱意」で掴み取るもの。
          </h3>
          <p className="text-white/60 max-w-2xl mx-auto text-sm leading-relaxed mb-8">
            私たちは2人とも、正しい学習法と明確な戦略によって難関医学部合格を実現しました。
            何としても医学部に合格したいという生徒に寄り添い、実際に合格した経験から
            合格への道を共に切り拓きます。医進ラボの講師は「医学部受験を勝ち抜いた実績」と
            「豊富な指導経験で生徒を合格させた実力」、その両方を兼ね備えています。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold rounded-lg text-sm shadow-lg"
              style={{ backgroundColor: "#06C755", color: "#FFFFFF" }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.070 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              LINEで無料相談する
            </a>
            <Link
              href="/contact"
              className="btn-gold inline-flex items-center gap-2 px-8 py-4 font-bold rounded-lg text-sm"
            >
              フォームで相談する
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
