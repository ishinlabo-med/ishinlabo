import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { findImage } from "@/lib/imageHelper";
import ConsultationBanner from "@/components/ConsultationBanner";

export const metadata: Metadata = {
  title: "医進ラボについて｜慶應医学部生が設立した医学部受験塾",
  description:
    "医進ラボは、塾なしで慶應医学部特待・私立医学部全勝を果たした2名の現役慶應医学部生が設立した医学部受験専門の個別指導塾です。設立の背景・指導理念・講師プロフィールを紹介します。",
  alternates: {
    canonical: "https://ishinlabo.com/about",
  },
  openGraph: {
    title: "医進ラボについて｜慶應医学部生が設立した医学部受験塾",
    description:
      "塾なしで慶應医学部特待・私立医学部全勝を果たした現役医学生が設立。完全個別指導で医学部合格を実現する塾の理念と講師プロフィールをご紹介します。",
    url: "https://ishinlabo.com/about",
  },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "医進ラボ",
  alternateName: "ISHIN LABO",
  url: "https://ishinlabo.com",
  logo: "https://ishinlabo.com/icon.png",
  description:
    "現役慶應医学部生による医学部受験専門のオンライン個別指導塾。完全オーダーメイドカリキュラムで医学部合格をサポート。",
  educationalCredentialAwarded: "医学部合格支援",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "医進ラボ コース一覧",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "個別指導コース",
          description: "完全1対1の個別授業。オーダーメイドカリキュラムで医学部合格を目指す。",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "小論文特訓コース",
          description: "医学部入試の小論文・総合問題に特化した指導。",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "面接対策コース",
          description: "現役医学生による模擬面接と大学別傾向分析。",
        },
      },
    ],
  },
  founder: [
    {
      "@type": "Person",
      name: "講師A",
      jobTitle: "慶應義塾大学医学部（特待生）在籍",
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "慶應義塾大学医学部",
      },
    },
    {
      "@type": "Person",
      name: "講師B",
      jobTitle: "慶應義塾大学医学部 在籍",
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "慶應義塾大学医学部",
      },
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    url: "https://ishinlabo.com/contact",
    availableLanguage: "Japanese",
  },
};

function FounderPhoto({ basename, label }: { basename: string; label: string }) {
  const src = findImage(basename);
  return (
    <div className="w-28 h-28 rounded-full overflow-hidden flex-shrink-0"
      style={{ border: "3px solid #C9A84C50" }}>
      {src ? (
        <Image src={src} alt={label} width={112} height={112}
          className="w-full h-full object-cover object-top" />
      ) : (
        <div className="w-full h-full flex items-center justify-center"
          style={{ backgroundColor: "#0A1628" }}>
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="#C9A84C40">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
      )}
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />

      {/* Hero */}
      <div className="py-20 md:py-28" style={{ backgroundColor: "#0A1628" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#C9A84C" }}>
            About ISHIN LABO
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            医進ラボについて
          </h1>
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            塾なしで慶應医学部特待・私立医学部全勝を果たした2名の現役慶應医学部生が、
            「実際に合格した経験のある人が教える」という当たり前を実現するために設立した
            医学部受験専門個別指導塾です。
          </p>
        </div>
      </div>

      {/* 数字で見る医進ラボ */}
      <section className="py-14" style={{ backgroundColor: "#F8F7F4" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "2名", label: "現役慶應医学部生講師", sub: "全員が医学部合格経験者" },
              { value: "1対1", label: "完全個別指導", sub: "講師と生徒のマンツーマン" },
              { value: "全国", label: "オンライン受講可能", sub: "地方・海外からも受講OK" },
              { value: "無料", label: "入塾前体験授業", sub: "相談・体験は完全無料" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid #E2DDD4" }}>
                <div className="text-4xl font-black mb-1" style={{ color: "#C9A84C" }}>{item.value}</div>
                <div className="font-bold text-sm mb-1" style={{ color: "#0A1628" }}>{item.label}</div>
                <div className="text-xs" style={{ color: "#6B6560" }}>{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 設立の背景 */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C9A84C" }}>
              Why We Started
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0A1628" }}>
              医進ラボが生まれた理由
            </h2>
          </div>

          <div className="space-y-8 text-base leading-relaxed" style={{ color: "#2D2A24" }}>
            <p>
              医学部受験は日本で最も難しい受験のひとつです。合格するためには、効率的な学習戦略と質の高い指導が不可欠です。しかし私たちが受験生として経験した現実は、それとは大きくかけ離れていました。
            </p>
            <div className="rounded-2xl p-6 sm:p-8" style={{ backgroundColor: "#F8F7F4", borderLeft: "4px solid #FF6B6B" }}>
              <h3 className="font-bold text-lg mb-3" style={{ color: "#0A1628" }}>大手予備校の問題</h3>
              <p style={{ color: "#6B6560" }}>
                大手予備校では数百人が同じ授業を受けます。自分の弱点・志望校に関係なく、全員が同じ進度・同じ教材で学びます。医学部合格に本当に必要な「個別化された戦略」は期待できません。
              </p>
            </div>
            <div className="rounded-2xl p-6 sm:p-8" style={{ backgroundColor: "#F8F7F4", borderLeft: "4px solid #FF6B6B" }}>
              <h3 className="font-bold text-lg mb-3" style={{ color: "#0A1628" }}>医学部専門予備校（医専）の問題</h3>
              <p style={{ color: "#6B6560" }}>
                「個別対応」「医学部専門」を謳っていても、実態は参考書と自習室の提供のみという塾が多数あります。さらに重大な問題として、実際に医学部を受験し合格した経験がある講師が指導していないケースが目立ちます。合格戦略が現実的でなく、生徒に寄り添った指導ができていないのです。
              </p>
            </div>
            <div className="rounded-2xl p-6 sm:p-8" style={{ backgroundColor: "#C9A84C08", borderLeft: "4px solid #C9A84C" }}>
              <h3 className="font-bold text-lg mb-3" style={{ color: "#0A1628" }}>医進ラボの誕生</h3>
              <p style={{ color: "#2D2A24" }}>
                この現状を変えるために、私たちは医進ラボを設立しました。「実際に医学部に合格した経験のある人が、完全個別化カリキュラムで指導する」という当たり前を実現する塾です。私たち自身が、正しい学習法と明確な戦略によって難関医学部合格を実現しました。その経験を余すことなく伝えることが、私たちの使命です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 講師プロフィール */}
      <section className="section-padding" style={{ backgroundColor: "#0A1628" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C9A84C" }}>
              Our Instructors
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              講師プロフィール
            </h2>
            <p className="text-white/60 max-w-xl mx-auto text-sm leading-relaxed">
              医進ラボの全講師は、現役の医学生または医師です。自らの受験経験と指導経験の両方を持つ、実績ある指導者が直接担当します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 講師A */}
            <div className="rounded-2xl p-8" style={{ backgroundColor: "#112040", border: "1px solid #C9A84C33" }}>
              <div className="flex items-start gap-5 mb-6">
                <FounderPhoto basename="founder-a" label="講師A" />
                <div>
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-2"
                    style={{ backgroundColor: "#C9A84C20", color: "#C9A84C", border: "1px solid #C9A84C50" }}>
                    講師 A / 共同設立者
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    塾なしで慶應医学部<span style={{ color: "#C9A84C" }}>特待合格</span>
                  </h3>
                  <p className="text-white/50 text-xs">慶應義塾大学医学部（特待生）</p>
                  <p className="text-white/50 text-xs">東京医科歯科大学医学部 合格</p>
                </div>
              </div>
              <div className="space-y-3 text-sm leading-relaxed" style={{ color: "#FFFFFF80" }}>
                <p>
                  高校時代、一切の予備校・塾を使わず独学で医学部受験に挑み、慶應医学部に特待生として合格。合格後、複数の医学部受験生を指導する中で「合格をつかみ取れる環境が整っていない」という問題を痛感し、医進ラボを設立。
                </p>
                <p>
                  「正しい方法さえ知れば、才能に関係なく誰でも医学部に合格できる」という信念のもと、数多くの受験生を合格に導いてきました。英語・数学・理科全科目を担当。
                </p>
              </div>
              <div className="mt-5 pt-5 space-y-2" style={{ borderTop: "1px solid #C9A84C20" }}>
                <div className="flex items-center gap-2 text-xs" style={{ color: "#C9A84C" }}>
                  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  慶應義塾大学医学部（特待生）合格
                </div>
                <div className="flex items-center gap-2 text-xs" style={{ color: "#C9A84C" }}>
                  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  東京医科歯科大学医学部合格
                </div>
                <div className="flex items-center gap-2 text-xs" style={{ color: "#C9A84C" }}>
                  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  塾・予備校一切なしの独学で合格
                </div>
              </div>
            </div>

            {/* 講師B */}
            <div className="rounded-2xl p-8" style={{ backgroundColor: "#112040", border: "1px solid #C9A84C33" }}>
              <div className="flex items-start gap-5 mb-6">
                <FounderPhoto basename="founder-b" label="講師B" />
                <div>
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-2"
                    style={{ backgroundColor: "#C9A84C20", color: "#C9A84C", border: "1px solid #C9A84C50" }}>
                    講師 B / 共同設立者
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    <span style={{ color: "#C9A84C" }}>私立医学部全勝</span>・慶應医学部合格
                  </h3>
                  <p className="text-white/50 text-xs">慶應義塾大学医学部</p>
                  <p className="text-white/50 text-xs">私立医学部 全校合格</p>
                </div>
              </div>
              <div className="space-y-3 text-sm leading-relaxed" style={{ color: "#FFFFFF80" }}>
                <p>
                  塾・予備校なしで慶應医学部をはじめ、受験したすべての私立医学部に合格。「戦略的な受験勉強」を体系化し、限られた時間で最大限の結果を出す方法論を確立。
                </p>
                <p>
                  自身の指導経験を通じ、「実際に合格した経験がある人が指導しなければ、合格戦略は現実的にならない」という確信から医進ラボを共同設立。特に小論文・面接指導を得意とする。
                </p>
              </div>
              <div className="mt-5 pt-5 space-y-2" style={{ borderTop: "1px solid #C9A84C20" }}>
                <div className="flex items-center gap-2 text-xs" style={{ color: "#C9A84C" }}>
                  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  慶應義塾大学医学部合格
                </div>
                <div className="flex items-center gap-2 text-xs" style={{ color: "#C9A84C" }}>
                  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  私立医学部 受験校全勝
                </div>
                <div className="flex items-center gap-2 text-xs" style={{ color: "#C9A84C" }}>
                  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  塾・予備校なしの独学で全勝
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 指導理念 */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C9A84C" }}>
              Philosophy
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0A1628" }}>
              指導理念
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "合格経験者が教える",
                body: "医進ラボの講師は全員、医学部入試を実際に突破した現役医学生・医師です。「合格した経験のある人が教える」という当たり前を徹底します。机上の空論ではない、実体験に基づく合格戦略を提供します。",
              },
              {
                num: "02",
                title: "完全個別化カリキュラム",
                body: "同じカリキュラムを全員に押し付けません。あなたの現在の学力・志望校・スケジュール・学習スタイルを徹底的に分析し、あなただけのカリキュラムを設計します。最大効率で合格に近づきます。",
              },
              {
                num: "03",
                title: "伴走型のサポート",
                body: "授業だけで終わりにしません。LINEでの質問対応、定期的な学習進捗のレビュー、模試結果の分析まで、合格まで伴走します。一人で悩まず、常にプロのサポートを受けながら学習を進められます。",
              },
            ].map((item) => (
              <div key={item.num} className="rounded-2xl p-6" style={{ backgroundColor: "#F8F7F4", border: "1px solid #E2DDD4" }}>
                <div className="text-4xl font-black mb-4" style={{ color: "#C9A84C20" }}>{item.num}</div>
                <h3 className="font-bold text-lg mb-3" style={{ color: "#0A1628" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6560" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 他塾との比較 */}
      <section className="section-padding" style={{ backgroundColor: "#F8F7F4" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#0A1628" }}>
              他の医学部受験塾との違い
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl" style={{ border: "1px solid #E2DDD4" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "#0A1628" }}>
                  <th className="text-left px-5 py-4 text-white font-semibold">比較項目</th>
                  <th className="px-5 py-4 font-bold" style={{ color: "#C9A84C" }}>医進ラボ</th>
                  <th className="px-5 py-4 text-white/60 font-normal">大手予備校</th>
                  <th className="px-5 py-4 text-white/60 font-normal">医専（医学部専門）</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {[
                  ["講師の医学部合格経験", "全員あり（現役医学生）", "基本なし", "一部のみ"],
                  ["指導形式", "完全1対1個別指導", "集団授業", "集団 or 映像"],
                  ["カリキュラム", "完全オーダーメイド", "固定カリキュラム", "固定 or セット販売"],
                  ["小論文・面接対応", "全コース対応", "別料金・限定的", "オプション"],
                  ["オンライン対応", "全国対応", "校舎中心", "限定的"],
                  ["授業外のサポート", "LINEで随時対応", "なし/限定的", "自習室のみ"],
                  ["料金の透明性", "明確な料金体系", "複雑な追加料金あり", "追加費用多い"],
                ].map(([item, ishin, taiko, isen], i) => (
                  <tr key={i} style={{ borderTop: "1px solid #E2DDD4" }}>
                    <td className="px-5 py-3.5 font-medium" style={{ color: "#0A1628" }}>{item}</td>
                    <td className="px-5 py-3.5 text-center font-semibold" style={{ color: "#C9A84C" }}>{ishin}</td>
                    <td className="px-5 py-3.5 text-center" style={{ color: "#6B6560" }}>{taiko}</td>
                    <td className="px-5 py-3.5 text-center" style={{ color: "#6B6560" }}>{isen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ナビゲーション */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/courses" className="rounded-2xl p-6 text-center transition-colors hover:border-opacity-100"
              style={{ border: "1px solid #E2DDD4", backgroundColor: "#F8F7F4" }}>
              <div className="font-bold mb-1" style={{ color: "#0A1628" }}>コース・料金</div>
              <div className="text-xs" style={{ color: "#6B6560" }}>個別指導・小論文・面接対策コースの詳細</div>
            </Link>
            <Link href="/blog" className="rounded-2xl p-6 text-center"
              style={{ border: "1px solid #E2DDD4", backgroundColor: "#F8F7F4" }}>
              <div className="font-bold mb-1" style={{ color: "#0A1628" }}>ブログ</div>
              <div className="text-xs" style={{ color: "#6B6560" }}>医学部受験の勉強法・対策情報</div>
            </Link>
            <Link href="/contact" className="rounded-2xl p-6 text-center"
              style={{ border: "1px solid #C9A84C", backgroundColor: "#C9A84C10" }}>
              <div className="font-bold mb-1" style={{ color: "#C9A84C" }}>無料相談</div>
              <div className="text-xs" style={{ color: "#6B6560" }}>まずはお気軽にご相談ください</div>
            </Link>
          </div>
        </div>
      </section>

      <ConsultationBanner />
    </>
  );
}
