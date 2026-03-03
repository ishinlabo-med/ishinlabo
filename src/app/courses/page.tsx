import type { Metadata } from "next";
import Link from "next/link";
import PricingTable from "@/components/PricingTable";
import ConsultationBanner from "@/components/ConsultationBanner";

export const metadata: Metadata = {
  title: "コース・料金",
  description: "医進ラボのコース一覧と料金表。個別指導コースをメインに、小論文・面接対策も対応。オンライン・対面両対応の医学部受験専門個別指導塾。",
};

const courseDetails = [
  {
    id: "individual",
    title: "個別指導コース",
    subtitle: "Medical Individual Coaching",
    badge: "メインコース",
    badgeHighlight: true,
    description: "医進ラボの核となるコースです。塾なしで慶應医学部特待・私立医学部全勝を果たした現役慶應医学部生2名が、完全1対1で個別指導を行います。あなたの学力・志望校・スケジュールを徹底分析したうえで、完全オーダーメイドのカリキュラムを設計。医進ラボ式勉強法の3ステップで、合格まで伴走します。",
    features: [
      "完全1対1の個別授業（週1〜複数回）",
      "オンライン（Zoom）・対面どちらも選択可",
      "全科目対応（英語・数学・理科・国語・社会）",
      "現状分析・弱点の徹底洗い出し",
      "完全オーダーメイドカリキュラム設計",
      "志望校別の過去問演習・傾向分析",
      "模試の結果分析と対策フィードバック",
      "毎回の授業後レポート・質問対応",
    ],
    targetStudents: [
      "今年度・来年度の受験を目指している方",
      "苦手科目を集中的に克服したい方",
      "大手予備校では物足りないと感じている方",
      "地方在住でオンライン受講を希望する方",
      "首都圏で対面指導を希望する方",
    ],
    note: "まずは無料相談で現状をお聞かせください。最適なカリキュラムをご提案します。",
  },
  {
    id: "essay",
    title: "小論文特訓コース",
    subtitle: "Essay Intensive",
    badge: "オプション",
    badgeHighlight: false,
    description: "医学部入試で年々重視されている小論文・総合問題に特化したコースです。医療倫理・時事問題・論述構成力を体系的にトレーニングします。個別指導コースとの併用もおすすめです。オンライン・対面どちらでも受講いただけます。",
    features: [
      "オンライン・対面どちらも選択可",
      "医療系テーマに特化した論文指導",
      "構成力・論理展開力のトレーニング",
      "最新時事・医療倫理問題の解説",
      "過去問（志望校別）の演習と添削",
      "添削済み答案の詳細フィードバック",
    ],
    targetStudents: [
      "小論文で差をつけたい方",
      "医療倫理・時事問題の知識を深めたい方",
      "論理的な文章を書くのが苦手な方",
    ],
    note: "個別指導コースとの併用で、筆記・論述の両方を強化できます。",
  },
  {
    id: "interview",
    title: "面接対策コース",
    subtitle: "Interview Prep",
    badge: "オプション",
    badgeHighlight: false,
    description: "医学部面接を実際に経験した現役医学生が、面接の本質から指導します。志望動機の深掘りから実践的な模擬面接まで徹底サポート。オンライン・対面どちらにも対応しています。",
    features: [
      "オンライン・対面どちらも選択可",
      "現役医学生による模擬面接",
      "大学別の面接傾向と頻出テーマ分析",
      "志望動機・自己PRの磨き込み",
      "医療問題・倫理問題への答え方指導",
      "フィードバック資料の提供",
    ],
    targetStudents: [
      "面接に強い苦手意識がある方",
      "志望動機を上手く言語化できない方",
      "MMI形式の面接がある大学を受験する方",
    ],
    note: "受験直前の集中特訓も承ります。スポット受講も可能です。",
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
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
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
                    <h2 className="font-playfair text-3xl font-bold mb-5" style={{ color: "#0A1628" }}>
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
            <h2 className="font-playfair text-3xl font-bold" style={{ color: "#0A1628" }}>よくある質問</h2>
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
