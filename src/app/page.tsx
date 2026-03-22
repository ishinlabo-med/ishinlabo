import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Founders from "@/components/Founders";
import Methodology from "@/components/Methodology";
import InstructorsSection from "@/components/InstructorsSection";
import FlowSection from "@/components/FlowSection";
import FaqSection from "@/components/FaqSection";
import Courses from "@/components/Courses";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import ConsultationBanner from "@/components/ConsultationBanner";

export const metadata: Metadata = {
  title: "医進ラボ | 医学部受験専門オンライン個別指導塾",
  description:
    "現役医学生・医師による完全オンライン個別指導で医学部合格へ。弱点を徹底分析し最短距離を伴走。個別指導・小論文・面接対策コース提供。無料相談受付中。",
  alternates: {
    canonical: "https://ishinlabo.com",
  },
  openGraph: {
    title: "医進ラボ | 医学部受験専門オンライン個別指導塾",
    description:
      "現役医学生・医師による完全オンライン個別指導で医学部合格へ。弱点を徹底分析し最短距離を伴走。無料相談受付中。",
    url: "https://ishinlabo.com",
  },
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
      name: "他の医専や大手予備校との一番の違いは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "学習環境を与えるだけではなく、実際に最難関医学部に合格した実績のある現役医大生が、自らの経験に基づいた「リアルな合格戦略」を直接指導する点です。「合格した経験のある人が教える」という当たり前を実現しています。",
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
      name: "質問や学習相談はいつでもできますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、LINEでの質問対応体制を整えています（平日対応）。勉強中の疑問点や進路の悩みなど、いつでも気軽に現役医大生講師に相談できる環境です。授業以外でも学習が止まらないようサポートします。",
      },
    },
    {
      "@type": "Question",
      name: "オンライン授業で本当に理解できますか？",
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
      <Hero />
      <Features />
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
