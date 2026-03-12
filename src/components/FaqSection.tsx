"use client";

import { useState } from "react";

const faqs = [
  {
    question: "他の医専や大手予備校との一番の違いは何ですか？",
    answer:
      "学習環境を与えるだけではなく、実際に最難関医学部に合格した実績のある現役医大生が、自らの経験に基づいた「リアルな合格戦略」を直接指導する点です。「合格した経験のある人が教える」という当たり前を実現しています。",
  },
  {
    question: "完全個別化カリキュラムとは具体的にどのようなものですか？",
    answer:
      "生徒の現在の学力、得意・苦手科目、志望校の出題傾向などを総合的に分析し、取り組むべき参考書から日々の学習ペースまでを1人ひとりに合わせて設計します。市販のカリキュラムに生徒を合わせるのではなく、生徒に合わせてカリキュラムを設計します。",
  },
  {
    question: "質問や学習相談はいつでもできますか？",
    answer:
      "はい、LINEでの質問対応体制を整えています（平日対応）。勉強中の疑問点や進路の悩みなど、いつでも気軽に現役医大生講師に相談できる環境です。授業以外でも学習が止まらないようサポートします。",
  },
  {
    question: "オンライン授業で本当に理解できますか？",
    answer:
      "Zoomを使ったオンライン指導ではホワイトボード機能も活用し、数学・理科の解法も対面と遜色なく指導できます。全国の生徒が受講しており、地方在住の方にも好評をいただいています。",
  },
  {
    question: "入塾前に相談だけすることはできますか？",
    answer:
      "もちろんです。LINE無料相談またはお問い合わせフォームから、勧誘なしで現状のご相談が可能です。「どんな勉強法が向いているか」「今の成績から合格できるか」など、気軽にお聞きください。",
  },
  {
    question: "小論文・面接対策も対応していますか？",
    answer:
      "はい、対応しています。医学部特有の面接や小論文の傾向を熟知した講師が、医療倫理・時事問題の解説から模擬面接まで一貫してサポートします。学科試験だけでなく二次試験まで完全対応です。",
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: "1px solid #E2DDD4" }}>
      <button
        className="w-full text-left py-5 flex items-center justify-between gap-4"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-sm md:text-base" style={{ color: "#0A1628" }}>
          Q. {question}
        </span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200"
          style={{ backgroundColor: open ? "#0A1628" : "#E2DDD4", color: open ? "#C9A84C" : "#0A1628" }}
        >
          <svg className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-45" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="pb-5">
          <p className="text-sm leading-relaxed" style={{ color: "#6B6560" }}>
            A. {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FaqSection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C9A84C" }}>
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0A1628" }}>
            よくあるご質問
          </h2>
          <p className="text-sm max-w-xl mx-auto leading-relaxed" style={{ color: "#6B6560" }}>
            お問い合わせの前にご確認ください。解決しない場合はLINEまたはフォームからお気軽にどうぞ。
          </p>
        </div>

        <div style={{ border: "1px solid #E2DDD4", borderRadius: "16px", padding: "0 32px" }}>
          {faqs.map((faq, idx) => (
            <FaqItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
