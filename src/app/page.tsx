import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ResultsSection from "@/components/ResultsSection";
import ComparisonSection from "@/components/ComparisonSection";
import Founders from "@/components/Founders";
import Methodology from "@/components/Methodology";
import InstructorsSection from "@/components/InstructorsSection";
import FlowSection from "@/components/FlowSection";
import FaqSection from "@/components/FaqSection";
import Courses from "@/components/Courses";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import ConsultationBanner from "@/components/ConsultationBanner";

export const metadata: Metadata = {
  title: "医進ラボ | 医学部受験専門オンライン個別指導塾【慶應医学部合格者が直接指導】",
  description:
    "慶應医学部特待・私立医学部全勝の現役医学生が直接指導する医学部受験専門塾。完全オーダーメイドカリキュラムで医学部合格への最短ルートを伴走。全国オンライン対応・無料相談受付中。",
  alternates: {
    canonical: "https://ishinlabo.com",
  },
  openGraph: {
    title: "医進ラボ | 医学部受験専門オンライン個別指導塾",
    description:
      "慶應医学部特待合格者が直接指導。完全個別カリキュラム・全国オンライン対応・無料相談受付中。",
    url: "https://ishinlabo.com",
  },
  keywords: [
    "医学部受験塾",
    "医学部受験 個別指導",
    "医学部受験 オンライン",
    "医学部予備校",
    "医学部 合格",
    "慶應医学部",
    "医進ラボ",
    "医学部受験 勉強法",
    "医学部 小論文",
    "医学部 面接",
  ],
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "EducationalOrganization"],
  name: "医進ラボ",
  alternateName: "ISHIN LABO",
  url: "https://ishinlabo.com",
  logo: "https://ishinlabo.com/icon.png",
  description:
    "塾なしで慶應医学部特待・私立医学部全勝を果たした現役慶應医学部生が設立した医学部受験専門個別指導塾。完全オーダーメイドカリキュラムで医学部合格をサポート。全国オンライン対応。",
  foundingDate: "2024",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: 2,
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    url: "https://ishinlabo.com/contact",
    availableLanguage: "Japanese",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "医進ラボ コース一覧",
    url: "https://ishinlabo.com/courses",
  },
  sameAs: ["https://ishinlabo.com"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "3",
    bestRating: "5",
    worstRating: "1",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "医進ラボ",
  url: "https://ishinlabo.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://ishinlabo.com/blog?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "医進ラボと他の医専・大手予備校との一番の違いは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "実際に最難関医学部に合格した実績のある現役医大生が、自らの経験に基づいた「リアルな合格戦略」を直接指導する点です。大手予備校のように全員同じカリキュラムではなく、完全個別化したカリキュラムで指導します。「合格した経験のある人が教える」という当たり前を実現しています。",
      },
    },
    {
      "@type": "Question",
      name: "完全個別化カリキュラムとは具体的にどのようなものですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "生徒の現在の学力、得意・苦手科目、志望校の出題傾向などを総合的に分析し、取り組むべき参考書から日々の学習ペースまでを1人ひとりに合わせて設計します。市販のカリキュラムに生徒を合わせるのではなく、生徒に合わせてカリキュラムを設計します。",
      },
    },
    {
      "@type": "Question",
      name: "授業外の質問や学習相談はできますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、LINEでの質問対応体制を整えています（平日対応）。勉強中の疑問点や進路の悩みなど、いつでも気軽に現役医大生講師に相談できる環境です。授業以外でも学習が止まらないようサポートします。",
      },
    },
    {
      "@type": "Question",
      name: "オンライン授業で数学や理科もきちんと理解できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zoomを使ったオンライン指導ではホワイトボード機能も活用し、数学・理科の解法も対面と遜色なく指導できます。全国の生徒が受講しており、地方在住の方にも好評をいただいています。",
      },
    },
    {
      "@type": "Question",
      name: "入塾前に相談だけすることはできますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "もちろんです。LINE無料相談またはお問い合わせフォームから、勧誘なしで現状のご相談が可能です。「どんな勉強法が向いているか」「今の成績から合格できるか」など、気軽にお聞きください。",
      },
    },
    {
      "@type": "Question",
      name: "小論文・面接対策も対応していますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、対応しています。医学部特有の面接や小論文の傾向を熟知した講師が、医療倫理・時事問題の解説から模擬面接まで一貫してサポートします。学科試験だけでなく二次試験まで完全対応です。",
      },
    },
    {
      "@type": "Question",
      name: "料金はいくらですか？入塾金はかかりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "月額料金はライトプラン（週1回）¥80,000から、フルコミットプラン（週5回）¥320,000まで5段階あります。入塾金は¥20,000（初回のみ）です。詳細はコースページをご覧ください。",
      },
    },
    {
      "@type": "Question",
      name: "現役生・浪人生どちらでも受講できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、現役高校生・浪人生・再受験生いずれも歓迎です。それぞれの状況に合わせた完全個別カリキュラムで対応します。まずは無料相談で現状をお聞かせください。",
      },
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "医学部受験専門オンライン個別指導",
  provider: {
    "@type": "EducationalOrganization",
    name: "医進ラボ",
    url: "https://ishinlabo.com",
  },
  description: "慶應医学部合格者による医学部受験専門の1対1個別指導。完全オーダーメイドカリキュラム・全国オンライン対応。",
  areaServed: {
    "@type": "Country",
    name: "Japan",
  },
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "student",
  },
  offers: {
    "@type": "Offer",
    priceRange: "¥80,000〜¥320,000 / 月",
    priceCurrency: "JPY",
    url: "https://ishinlabo.com/courses",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "A.S.",
      },
      reviewBody: "地方の高校から受験しましたが、オンラインで全く問題なかったです。先生が弱点を徹底分析してくれて、苦手だった数学が本番の武器になりました。私立医学部に合格できて本当に感謝しています。",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "K.T.",
      },
      reviewBody: "医進ラボに相談してから勉強の方向性が一気に変わり、3ヶ月後の模試で偏差値が大幅に上がりました。戦略の大切さを実感しました。",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "R.M.",
      },
      reviewBody: "完全オーダーメイドで志望校に特化した対策をしてもらえたのが決め手でした。小論文・面接まで一貫して見てもらえました。",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Hero />
      <Features />
      <ResultsSection />
      <ComparisonSection />
      <Founders />
      <Methodology />
      <InstructorsSection />
      <FlowSection />
      <FaqSection />
      <Courses />
      <BlogPreviewSection />
      <ConsultationBanner />
    </>
  );
}
