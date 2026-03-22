import Link from "next/link";

const stats = [
  { value: "慶應", label: "医学部特待合格", sub: "私立医学部全勝" },
  { value: "全国", label: "47都道府県対応", sub: "完全オンライン受講" },
  { value: "1対1", label: "完全個別指導", sub: "専任講師が担当" },
  { value: "無料", label: "相談・体験授業", sub: "勧誘なし・返金保証" },
];

const voices = [
  {
    text: "地方の高校から受験しましたが、オンラインで全く問題なかったです。先生が弱点を徹底分析してくれて、苦手だった数学が本番の武器になりました。志望していた医学部に合格できて本当に感謝しています。",
    name: "A.S. さん",
    result: "私立医学部合格",
    type: "高3・現役合格",
  },
  {
    text: "浪人2年目まで独学でやってきましたが、どこかで詰まっている感覚がありました。医進ラボに相談してから勉強の方向性が一気に変わり、3ヶ月後の模試で偏差値が大幅に上がりました。戦略の大切さを実感しました。",
    name: "K.T. さん",
    result: "私立医学部合格",
    type: "浪人生",
  },
  {
    text: "完全オーダーメイドで志望校に特化した対策をしてもらえたのが決め手でした。他の塾では全員同じ授業で不満でしたが、ここは自分の課題だけに集中できる。小論文・面接まで一貫して見てもらえました。",
    name: "R.M. さん",
    result: "私立医学部合格",
    type: "高3・現役合格",
  },
];

const universities = [
  "慶應義塾大学医学部",
  "東京医科歯科大学",
  "日本医科大学",
  "順天堂大学医学部",
  "昭和大学医学部",
  "東京慈恵会医科大学",
];

export default function ResultsSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: "#0A1628" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14 animate-fade-in-up">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C9A84C" }}>
            Results & Voices
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            合格実績と<span style={{ color: "#C9A84C" }}>受講生の声</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-sm leading-relaxed">
            医進ラボは「本当に合格できる環境」を提供し続けています。
            受講生一人ひとりに向き合った結果が、合格という成果につながっています。
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 text-center card-hover-dark animate-fade-in-up"
              style={{
                backgroundColor: "#112040",
                border: "1px solid #C9A84C25",
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <div className="stat-number mb-1">{s.value}</div>
              <div className="text-white font-bold text-sm mb-1">{s.label}</div>
              <div className="text-white/40 text-xs">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* University row */}
        <div
          className="rounded-2xl p-6 mb-14 animate-fade-in-up"
          style={{ backgroundColor: "#112040", border: "1px solid #C9A84C20" }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-5 text-center" style={{ color: "#C9A84C" }}>
            合格実績（一部）
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {universities.map((u, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full text-xs font-semibold text-white/70"
                style={{ backgroundColor: "#0A1628", border: "1px solid #C9A84C30" }}
              >
                {u}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {voices.map((v, i) => (
            <div
              key={i}
              className="rounded-2xl p-7 flex flex-col card-hover-dark animate-fade-in-up"
              style={{
                backgroundColor: "#112040",
                border: "1px solid #C9A84C25",
                animationDelay: `${i * 0.15}s`,
              }}
            >
              {/* Quote mark */}
              <div className="text-5xl leading-none mb-3" style={{ color: "#C9A84C40", fontFamily: "Georgia, serif" }}>
                &ldquo;
              </div>
              <p className="text-white/75 text-sm leading-relaxed flex-1 mb-6">
                {v.text}
              </p>
              <div className="pt-4" style={{ borderTop: "1px solid #C9A84C20" }}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-white text-sm">{v.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: "#C9A84C" }}>{v.result}</p>
                  </div>
                  <span
                    className="text-xs px-3 py-1 rounded-full font-semibold"
                    style={{ backgroundColor: "#C9A84C15", color: "#C9A84C80", border: "1px solid #C9A84C30" }}
                  >
                    {v.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-white/25 text-xs mb-10">
          ※掲載の声はプライバシーに配慮し、一部内容を要約・改変しています。
        </p>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/contact"
            className="btn-gold inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl text-sm"
          >
            無料相談で合格戦略を聞く
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
