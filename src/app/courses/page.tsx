import type { Metadata } from "next";
import Link from "next/link";
import PricingTable from "@/components/PricingTable";
import ConsultationBanner from "@/components/ConsultationBanner";
import courseDetails from "@/content/courses.json";

export const metadata: Metadata = {
  title: "コース・料金",
  description: "医進ラボのコース一覧と料金表。個別指導コースをメインに、小論文・面接対策も対応。オンライン・対面両対応の医学部受験専門個別指導塾。",
  alternates: {
    canonical: "https://ishinlabo.com/courses",
  },
  openGraph: {
    title: "コース・料金 | 医進ラボ",
    description: "医進ラボのコース一覧と料金表。個別指導コースをメインに、小論文・面接対策も対応。オンライン・対面両対応の医学部受験専門個別指導塾。",
    url: "https://ishinlabo.com/courses",
  },
};

const coursesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "医進ラボ コース一覧",
  url: "https://ishinlabo.com/courses",
  itemListElement: courseDetails.map((course, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    item: {
      "@type": "Course",
      name: course.title,
      description: course.description,
      url: `https://ishinlabo.com/courses#${course.id}`,
      provider: {
        "@type": "Organization",
        name: "医進ラボ",
        url: "https://ishinlabo.com",
      },
      courseMode: ["online", "onsite"],
      inLanguage: "ja",
    },
  })),
};

export default function CoursesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesJsonLd) }}
      />
      <div className="py-16 md:py-24" style={{ backgroundColor: "#0A1628" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C9A84C" }}>
            Our Courses
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            コース・料金
          </h1>
          <p className="text-white/60 text-base max-w-xl mx-auto mb-8">
            個別指導コースをメインに、小論文・面接対策もオプションで対応。オンライン・対面どちらも選択できます。
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/50">
            <span className="flex items-center gap-1.5">
              <span style={{ color: "#C9A84C" }}>✓</span> オンライン対応（全国）
            </span>
            <span className="flex items-center gap-1.5">
              <span style={{ color: "#C9A84C" }}>✓</span> 対面対応（首都圏）
            </span>
            <span className="flex items-center gap-1.5">
              <span style={{ color: "#C9A84C" }}>✓</span> 入塾金・教材費込み
            </span>
          </div>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {courseDetails.map((course, idx) => (
              <div key={course.id} id={course.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                  <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C9A84C" }}>
                        {course.subtitle}
                      </span>
                      {course.badge && (
                        <span
                          className="text-xs font-bold px-2.5 py-0.5 rounded-full"
                          style={
                            course.badgeHighlight
                              ? { backgroundColor: "#C9A84C", color: "#0A1628" }
                              : { backgroundColor: "#E2DDD4", color: "#6B6560" }
                          }
                        >
                          {course.badge}
                        </span>
                      )}
                    </div>
                    <h2 className="text-3xl font-bold mb-5" style={{ color: "#0A1628" }}>
                      {course.title}
                    </h2>
                    <p className="text-base leading-relaxed mb-6" style={{ color: "#6B6560" }}>
                      {course.description}
                    </p>
                    <div className="mb-6">
                      <h3 className="text-sm font-bold mb-3" style={{ color: "#0A1628" }}>こんな方におすすめ</h3>
                      <ul className="space-y-1.5">
                        {course.targetStudents.map((s, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm" style={{ color: "#6B6560" }}>
                            <span style={{ color: "#C9A84C" }}>→</span>{s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {course.note && (
                      <div
                        className="rounded-xl px-5 py-4 text-sm"
                        style={{ backgroundColor: "#F8F7F4", borderLeft: "3px solid #C9A84C", color: "#6B6560" }}
                      >
                        {course.note}
                      </div>
                    )}
                  </div>
                  <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="rounded-2xl p-8" style={{ backgroundColor: "#F8F7F4", border: "1px solid #E2DDD4" }}>
                      <h3 className="font-bold text-base mb-5" style={{ color: "#0A1628" }}>含まれる内容</h3>
                      <ul className="space-y-3 mb-8">
                        {course.features.map((f, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "#2D2A24" }}>
                            <span
                              className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                              style={{ backgroundColor: "#0A1628", color: "#C9A84C" }}
                            >
                              ✓
                            </span>
                            {f}
                          </li>
                        ))}
                      </ul>
                      <Link href="/contact" className="btn-gold block text-center py-3 text-sm font-semibold rounded-lg">
                        無料相談を申し込む →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PricingTable />

      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold" style={{ color: "#0A1628" }}>よくある質問</h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "オンラインと対面、どちらが多いですか？",
                a: "どちらも対応しています。全国どこからでも受講できるオンライン（Zoom）が多いですが、首都圏にお住まいの方は対面指導もお選びいただけます。ご希望に合わせて柔軟に対応します。",
              },
              {
                q: "講師はどのような方ですか？",
                a: "塾なしで慶應医学部（特待）・医科歯科大・私立医学部全勝を果たした現役慶應医学部生2名が創設者兼講師です。受験経験が直近のため、最新の入試傾向や効果的な勉強法を熟知しています。",
              },
              {
                q: "授業の形式はどのようなものですか？",
                a: "完全1対1の個別授業です。オンラインはZoomを使用し、画面共有・ホワイトボード機能を活用します。対面の場合は別途ご相談ください。授業内容は毎回レポートとしてお渡しします。",
              },
              {
                q: "途中でコースを変更することはできますか？",
                a: "はい、可能です。学習状況や志望校の変化に応じて、柔軟にコース変更や組み合わせが可能です。また、個別指導コースに小論文・面接コースをオプションとして追加することもできます。",
              },
              {
                q: "入塾前に相談はできますか？",
                a: "はい、無料相談を随時受け付けています。現状の課題・志望校・学習方針などをお聞きし、最適なプランをご提案します。勧誘は一切行いませんのでお気軽にご連絡ください。",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-xl p-6" style={{ border: "1px solid #E2DDD4" }}>
                <h3 className="font-bold mb-2 text-base" style={{ color: "#0A1628" }}>
                  <span style={{ color: "#C9A84C" }}>Q. </span>{item.q}
                </h3>
                <p className="text-sm leading-relaxed pl-6" style={{ color: "#6B6560" }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationBanner />
    </>
  );
}
