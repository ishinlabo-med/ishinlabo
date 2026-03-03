import Link from "next/link";

export default function Courses() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C9A84C" }}>
            Our Courses
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0A1628" }}>
            コース紹介
          </h2>
          <p className="text-sm" style={{ color: "#6B6560" }}>
            個別指導コースをメインに、小論文・面接対策もオプションで対応します
          </p>
        </div>

        {/* Main Course - Individual Coaching */}
        <div
          className="rounded-2xl overflow-hidden mb-8 shadow-md"
          style={{ border: "2px solid #C9A84C" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="px-10 py-10 flex flex-col justify-center" style={{ backgroundColor: "#0A1628" }}>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{ backgroundColor: "#C9A84C", color: "#0A1628" }}
                >
                  メインコース
                </span>
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{ backgroundColor: "#C9A84C20", color: "#C9A84C", border: "1px solid #C9A84C50" }}
                >
                  人気No.1
                </span>
              </div>
              <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#C9A84C80" }}>
                Medical Individual Coaching
              </p>
              <h3 className="font-playfair text-3xl font-bold text-white mb-4">
                個別指導コース
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                医進ラボの核となるコース。現役慶應医学部生が1対1で完全個別指導を行います。
                あなたの現状を徹底分析し、志望校合格に向けた完全オーダーメイドカリキュラムを設計。
                毎回の授業で弱点を潰し、合格まで伴走します。
              </p>
              <div className="flex gap-3">
                <span
                  className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-medium"
                  style={{ backgroundColor: "#1a3a6e", color: "#C9A84C" }}
                >
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  オンライン対応
                </span>
                <span
                  className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-medium"
                  style={{ backgroundColor: "#1a3a6e", color: "#C9A84C" }}
                >
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  対面対応
                </span>
              </div>
            </div>
            <div className="px-10 py-10 bg-white flex flex-col justify-center">
              <h4 className="font-semibold text-sm mb-4" style={{ color: "#0A1628" }}>含まれる内容</h4>
              <ul className="space-y-3 mb-8">
                {[
                  "現状分析・弱点の徹底洗い出し",
                  "完全オーダーメイドカリキュラム設計",
                  "1対1の個別授業（週1〜複数回）",
                  "全科目対応（英数理・小論文・面接）",
                  "志望校別の傾向・対策",
                  "模試分析・フィードバック",
                  "毎回の授業後レポート",
                  "授業外の質問対応",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#0A1628" }}>
                    <span className="mt-0.5 font-bold" style={{ color: "#C9A84C" }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="btn-gold block text-center py-4 text-sm font-bold rounded-lg"
              >
                無料相談を申し込む →
              </Link>
              <Link
                href="/courses"
                className="block text-center py-3 text-xs font-medium mt-2"
                style={{ color: "#6B6560" }}
              >
                料金・詳細を見る
              </Link>
            </div>
          </div>
        </div>

        {/* Sub Courses */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "小論文特訓コース",
              subtitle: "Essay Intensive",
              description: "医学部特有の小論文・総合問題に特化したコース。医療倫理・時事論述・構成力を集中トレーニングします。個別指導コースとの併用も可能です。",
              features: ["医療系テーマ特化", "添削・解説指導", "過去問演習", "オンライン・対面両対応"],
            },
            {
              title: "面接対策コース",
              subtitle: "Interview Prep",
              description: "医学部面接の本質を知る現役医学生が直接指導。志望動機から倫理問題まで、本番さながらの練習を繰り返します。個別指導コースとの併用も可能です。",
              features: ["現役医学生による指導", "大学別傾向分析", "模擬面接", "オンライン・対面両対応"],
            },
          ].map((course, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
              style={{ border: "1px solid #E2DDD4" }}
            >
              <div className="px-8 py-6" style={{ backgroundColor: "#112040" }}>
                <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "#C9A84C80" }}>
                  {course.subtitle}
                </p>
                <h3 className="font-playfair text-xl font-bold text-white">{course.title}</h3>
              </div>
              <div className="px-8 py-6 flex flex-col flex-1 bg-white">
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#6B6560" }}>
                  {course.description}
                </p>
                <ul className="space-y-2 mb-6 flex-1">
                  {course.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm" style={{ color: "#0A1628" }}>
                      <span style={{ color: "#C9A84C" }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/courses"
                  className="btn-outline-gold block text-center py-3 text-sm font-semibold rounded-lg"
                >
                  詳細を見る →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm mb-4" style={{ color: "#6B6560" }}>
            どのコースが合うか分からない方は、まず無料相談でご相談ください
          </p>
          <Link
            href="/contact"
            className="btn-navy inline-flex items-center gap-2 px-8 py-4 font-bold rounded-lg text-sm shadow-md"
          >
            無料相談はこちら
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
