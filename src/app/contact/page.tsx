import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ・無料相談",
  description: "医進ラボへの無料相談はLINE・フォームから。1営業日以内にご返答。医学部受験に関するどんなご質問もお気軽にどうぞ。",
};

const LINE_URL = "https://lin.ee/AJiB8h6";

const contactMethods = [
  {
    id: "line",
    primary: true,
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.630 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.070 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
      </svg>
    ),
    label: "おすすめ",
    title: "LINEで相談する",
    subtitle: "最も手軽・最速で返信",
    description: "気軽にメッセージを送るだけでOK。「どんなことを相談すればいいか分からない」という方も、まずはLINEで一言どうぞ。",
    points: ["返信が早い", "気軽に話せる", "追加質問もしやすい"],
    cta: "LINEを開く",
    href: LINE_URL,
    external: true,
    bg: "#06C755",
    color: "#FFFFFF",
  },
  {
    id: "form",
    primary: false,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    label: null,
    title: "フォームで相談する",
    subtitle: "詳細な情報をまとめて送りたい方に",
    description: "現状・志望校・ご質問内容を整理してお送りいただける方はフォームが便利です。1営業日以内にメールでご返信します。",
    points: ["詳しい情報をまとめて送れる", "メールで記録が残る", "1営業日以内に返信"],
    cta: "フォームで送る",
    href: "#form",
    external: false,
    bg: "#C9A84C",
    color: "#0A1628",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <div className="py-16 md:py-24" style={{ backgroundColor: "#0A1628" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C9A84C" }}>
            Contact
          </p>
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            無料相談・お問い合わせ
          </h1>
          <p className="text-white/60 text-base max-w-xl mx-auto mb-8 leading-relaxed">
            医学部受験に関することなら、どんな些細なことでもお気軽にご相談ください。
            勧誘は一切しません。
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/50">
            <span className="flex items-center gap-1.5"><span style={{ color: "#C9A84C" }}>✓</span> 完全無料</span>
            <span className="flex items-center gap-1.5"><span style={{ color: "#C9A84C" }}>✓</span> 勧誘なし</span>
            <span className="flex items-center gap-1.5"><span style={{ color: "#C9A84C" }}>✓</span> 1営業日以内に返信</span>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <section className="section-padding" style={{ backgroundColor: "#F8F7F4" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C9A84C" }}>
              How to Contact
            </p>
            <h2 className="font-playfair text-2xl md:text-3xl font-bold" style={{ color: "#0A1628" }}>
              相談方法を選ぶ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {contactMethods.map((method) => (
              <div
                key={method.id}
                className="rounded-2xl overflow-hidden"
                style={{
                  border: method.primary ? "2px solid #06C755" : "1px solid #E2DDD4",
                  backgroundColor: "white",
                }}
              >
                {method.primary && (
                  <div className="py-1.5 text-center text-xs font-bold" style={{ backgroundColor: "#06C755", color: "white" }}>
                    ★ おすすめ — 一番手軽で返信が早い
                  </div>
                )}
                <div className="p-8">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: method.primary ? "#06C75520" : "#0A162810", color: method.primary ? "#06C755" : "#0A1628" }}
                  >
                    {method.icon}
                  </div>
                  <h3 className="font-playfair text-xl font-bold mb-1" style={{ color: "#0A1628" }}>{method.title}</h3>
                  <p className="text-xs mb-4" style={{ color: "#6B6560" }}>{method.subtitle}</p>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "#6B6560" }}>{method.description}</p>
                  <ul className="space-y-2 mb-6">
                    {method.points.map((pt, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm" style={{ color: "#0A1628" }}>
                        <span style={{ color: method.primary ? "#06C755" : "#C9A84C" }}>✓</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                  {method.external ? (
                    <a
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm"
                      style={{ backgroundColor: method.bg, color: method.color }}
                    >
                      {method.icon && (
                        <span className="w-5 h-5 flex-shrink-0">{method.icon}</span>
                      )}
                      {method.cta}
                    </a>
                  ) : (
                    <a
                      href={method.href}
                      className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm"
                      style={{ backgroundColor: method.bg, color: method.color }}
                    >
                      {method.cta}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
            {[
              { title: "返答時間", text: "1営業日以内（平日10:00〜20:00）" },
              { title: "無料体験授業", text: "ご入塾前に1回の無料体験授業を実施" },
              { title: "返金保証", text: "入塾から1ヶ月以内のご解約は全額返金" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl p-5 bg-white" style={{ border: "1px solid #E2DDD4" }}>
                <h3 className="font-semibold text-sm mb-1.5" style={{ color: "#0A1628" }}>{item.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#6B6560" }}>{item.text}</p>
              </div>
            ))}
          </div>

          {/* Form */}
          <div id="form">
            <div className="text-center mb-8">
              <h2 className="font-playfair text-2xl font-bold" style={{ color: "#0A1628" }}>フォームで送る</h2>
              <p className="text-sm mt-2" style={{ color: "#6B6560" }}>詳細をまとめてお送りいただく場合はこちら</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm" style={{ border: "1px solid #E2DDD4" }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
