import Link from "next/link";

export default function Founders() {
  return (
    <section className="section-padding" style={{ backgroundColor: "#0A1628" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C9A84C" }}>
            Our Story
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
            医進ラボについて
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-base leading-relaxed">
            私たちは「塾なし」で難関医学部に合格した2人の現役慶應医学部生です。
            多くの生徒への指導経験を通じて確立した「医進ラボ式勉強法」を広めるために、医進ラボを設立しました。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Founder 1 */}
          <div
            className="rounded-2xl p-8 relative overflow-hidden"
            style={{ backgroundColor: "#112040", border: "1px solid #C9A84C33" }}
          >
            <div
              className="absolute top-0 right-0 w-32 h-32 opacity-5"
              style={{
                backgroundImage: "radial-gradient(circle, #C9A84C 0%, transparent 70%)",
              }}
            />
            <div
              className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-6"
              style={{ backgroundColor: "#C9A84C20", color: "#C9A84C", border: "1px solid #C9A84C50" }}
            >
              講師 A
            </div>
            <h3 className="font-playfair text-2xl font-bold text-white mb-3">
              塾なしで<span style={{ color: "#C9A84C" }}>慶應医学部特待</span>合格
            </h3>
            <p className="text-white/50 text-sm mb-1">慶應義塾大学医学部（特待生）</p>
            <p className="text-white/50 text-sm mb-6">東京医科歯科大学医学部 合格</p>
            <p className="text-white/70 text-sm leading-relaxed">
              高校時代、一切の予備校・塾を使わず独学で医学部受験に挑み、慶應医学部に特待生として合格。
              「正しい方法さえ知れば、才能に関係なく誰でも医学部に合格できる」という信念のもと、
              これまで数多くの受験生を指導してきました。
            </p>
          </div>

          {/* Founder 2 */}
          <div
            className="rounded-2xl p-8 relative overflow-hidden"
            style={{ backgroundColor: "#112040", border: "1px solid #C9A84C33" }}
          >
            <div
              className="absolute top-0 right-0 w-32 h-32 opacity-5"
              style={{
                backgroundImage: "radial-gradient(circle, #C9A84C 0%, transparent 70%)",
              }}
            />
            <div
              className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-6"
              style={{ backgroundColor: "#C9A84C20", color: "#C9A84C", border: "1px solid #C9A84C50" }}
            >
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
              多くの生徒への指導を通じて、そのメソッドをさらに磨き上げてきました。
            </p>
          </div>
        </div>

        {/* Philosophy */}
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
            私たちは2人とも、一般的に「地頭がいい」とされる環境ではなく、
            正しい学習法と明確な戦略によって難関医学部合格を実現しました。
            その経験から確信しています。医学部合格に必要なのは才能ではなく、
            「何を、どの順番で、どのように勉強するか」という方法論と、
            それを実行し続ける意志です。
          </p>
          <Link
            href="/contact"
            className="btn-gold inline-flex items-center gap-2 px-8 py-4 font-bold rounded-lg text-sm"
          >
            無料相談で話を聞く
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
