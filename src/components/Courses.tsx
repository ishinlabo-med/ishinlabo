import Link from "next/link";
import coursesData from "@/content/courses.json";

export default function Courses() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C9A84C" }}>
            Our Courses
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0A1628" }}>
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
              <h3 className="text-3xl font-bold text-white mb-4">
                {coursesData[0].title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                {coursesData[0].description}
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
                {coursesData[0].features.map((item, i) => (
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
          {coursesData.slice(1).map((course, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
              style={{ border: "1px solid #E2DDD4" }}
            >
              <div className="px-8 py-6" style={{ backgroundColor: "#112040" }}>
                <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "#C9A84C80" }}>
                  {course.subtitle}
                </p>
                <h3 className="text-xl font-bold text-white">{course.title}</h3>
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
