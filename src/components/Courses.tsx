import Link from "next/link";

const courses = [
  {
    title: "個別指導コース",
    subtitle: "Medical Individual",
    description:
      "1対1の完全個別指導。科目・進度・弱点に完全対応したカリキュラムで、合格への最短ルートを構築します。",
    features: ["週1〜複数回対応", "全科目対応", "志望校別対策", "模試分析・フィードバック"],
    color: "#0A1628",
    badge: "人気No.1",
  },
  {
    title: "小論文特訓コース",
    subtitle: "Essay Intensive",
    description:
      "医学部特有の小論文・総合問題に特化。医療倫理・時事論述・構成力を集中トレーニングします。",
    features: ["医療系テーマ特化", "添削・解説指導", "過去問演習", "模擬試験対応"],
    color: "#112040",
    badge: null,
  },
  {
    title: "面接対策コース",
    subtitle: "Interview Prep",
    description:
      "医学部面接の本質を知る現役医師が直接指導。志望動機から倫理問題まで、本番さながらの練習を行います。",
    features: ["現役医師による指導", "大学別傾向分析", "模擬面接", "フィードバック資料提供"],
    color: "#112040",
    badge: "新設",
  },
];

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
            目標・状況に合わせて最適なコースをお選びいただけます
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
              style={{ border: "1px solid #E2DDD4" }}
            >
              <div className="px-8 py-8 relative" style={{ backgroundColor: course.color }}>
                {course.badge && (
                  <span
                    className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full"
                    style={{ backgroundColor: "#C9A84C", color: "#0A1628" }}
                  >
                    {course.badge}
                  </span>
                )}
                <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#C9A84C80" }}>
                  {course.subtitle}
                </p>
                <h3 className="font-playfair text-xl font-bold text-white">{course.title}</h3>
              </div>

              <div className="px-8 py-6 flex flex-col flex-1" style={{ backgroundColor: "white" }}>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#6B6560" }}>
                  {course.description}
                </p>
                <ul className="space-y-2 mb-8 flex-1">
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

        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="btn-navy inline-flex items-center gap-2 px-8 py-4 font-bold rounded-lg transition-all duration-200 text-sm shadow-md"
          >
            まずは無料相談で話を聞く
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
