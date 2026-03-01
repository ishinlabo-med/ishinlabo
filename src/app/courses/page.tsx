import type { Metadata } from "next";
import Link from "next/link";
import PricingTable from "@/components/PricingTable";

export const metadata: Metadata = {
  title: "コース・料金",
  description: "医進ラボのコース一覧と料金表。個別指導コース・小論文特訓・面接対策など、医学部受験に特化したプログラムをご用意しています。",
};

const courseDetails = [
  {
    id: "individual",
    title: "個別指導コース",
    subtitle: "Medical Individual",
    badge: "人気No.1",
    description: "医学部受験に特化した完全1対1の個別指導コース。あなたの学力・目標・スケジュールに合わせてオーダーメイドのカリキュラムを構築します。",
    features: ["完全1対1のオンライン授業（Zoom使用）","全科目対応（英語・数学・理科・国語・社会）","週1回〜週複数回のプランから選択","毎月の学習進捗レポート提供","志望校別の過去問演習・傾向分析","模試の結果分析と対策フィードバック","授業録画データの提供（復習用）","LINEでの質問対応（平日）"],
    targetStudents: ["今年度・来年度の受験を目指している方","苦手科目を集中的に克服したい方","大手予備校では物足りないと感じている方","地方在住で通塾が難しい方"],
  },
  {
    id: "essay",
    title: "小論文特訓コース",
    subtitle: "Essay Intensive",
    badge: null,
    description: "医学部入試で年々重視されている小論文・総合問題に特化したコースです。医療倫理・時事問題・論述構成力を体系的にトレーニングします。",
    features: ["医療系テーマに特化した論文指導","構成力・論理展開力のトレーニング","最新時事・医療倫理問題の解説","過去問（志望校別）の演習と添削","模擬試験の実施と詳細フィードバック","添削済み答案の返却（翌週まで）"],
    targetStudents: ["小論文で差をつけたい方","医療倫理・時事問題の知識を深めたい方","論理的な文章を書くのが苦手な方"],
  },
  {
    id: "interview",
    title: "面接対策コース",
    subtitle: "Interview Prep",
    badge: "新設",
    description: "医学部面接を実際に経験した現役医師・医学生が、面接の本質から指導します。志望動機の深掘りから実践的な模擬面接まで徹底サポートします。",
    features: ["現役医師・医学生による模擬面接","大学別の面接傾向と頻出テーマ分析","志望動機・自己PRの磨き込み","医療問題・倫理問題への答え方指導","MMI（複数面接）対策","フィードバック資料の提供"],
    targetStudents: ["面接に強い苦手意識がある方","志望動機を上手く言語化できない方","MMI形式の面接がある大学を受験する方"],
  },
];

export default function CoursesPage() {
  return (
    <>
      <div className="py-16 md:py-24" style={{ backgroundColor: "#0A1628" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C9A84C" }}>
            Our Courses
          </p>
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            コース・料金
          </h1>
          <p className="text-white/60 mt-4 text-base max-w-xl mx-auto">
            あなたの目標と状況に合わせて、最適なコースをお選びください
          </p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {courseDetails.map((course, idx) => (
              <div key={course.id} id={course.id} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C9A84C" }}>
                      {course.subtitle}
                    </span>
                    {course.badge && (
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full" style={{ backgroundColor: "#C9A84C", color: "#0A1628" }}>
                        {course.badge}
                      </span>
                    )}
                  </div>
                  <h2 className="font-playfair text-3xl font-bold mb-5" style={{ color: "#0A1628" }}>
                    {course.title}
                  </h2>
                  <p className="text-base leading-relaxed mb-8" style={{ color: "#6B6560" }}>
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
                </div>
                <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="rounded-2xl p-8" style={{ backgroundColor: "#F8F7F4", border: "1px solid #E2DDD4" }}>
                    <h3 className="font-bold text-base mb-5" style={{ color: "#0A1628" }}>含まれる内容</h3>
                    <ul className="space-y-3">
                      {course.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "#2D2A24" }}>
                          <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5" style={{ backgroundColor: "#0A1628", color: "#C9A84C" }}>
                            ✓
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-6" style={{ borderTop: "1px solid #E2DDD4" }}>
                      <Link href="/contact" className="btn-gold block text-center py-3 text-sm font-semibold rounded-lg">
                        このコースについて相談する
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
            <h2 className="font-playfair text-3xl font-bold" style={{ color: "#0A1628" }}>よくある質問</h2>
          </div>
          <div className="space-y-6">
            {[
              { q: "授業の形式はどのようなものですか？", a: "Zoomを使ったオンライン個別授業です。画面共有・ホワイトボード機能を使い、対面授業と遜色ない指導を行います。授業は録画され、後から見返すことが可能です。" },
              { q: "講師はどのような方ですか？", a: "全講師が医学部在学中の医学生または医師免許を持つ医師です。受験経験が直近のため、最新の入試傾向や効果的な勉強法を熟知しています。" },
              { q: "途中でコースを変更することはできますか？", a: "はい、可能です。学習状況や志望校の変化に応じて、柔軟にコース変更や組み合わせが可能です。まずはご相談ください。" },
              { q: "入塾前に体験授業はありますか？", a: "はい、無料体験授業を1回実施しています。実際の指導スタイルを体験いただいた上でご入塾をご検討ください。" },
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
    </>
  );
}
