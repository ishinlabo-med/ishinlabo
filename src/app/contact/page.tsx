import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "医進ラボへのお問い合わせ・無料相談はこちら。お気軽にご連絡ください。",
};

export default function ContactPage() {
  return (
    <>
      <div className="py-16 md:py-24" style={{ backgroundColor: "#0A1628" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C9A84C" }}>
            Contact
          </p>
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            お問い合わせ
          </h1>
          <p className="text-white/60 mt-4 text-base max-w-xl mx-auto">
            ご質問・無料相談のお申し込みはこちらから。1営業日以内にご返答いたします。
          </p>
        </div>
      </div>

      <section className="section-padding" style={{ backgroundColor: "#F8F7F4" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-playfair text-2xl font-bold mb-4" style={{ color: "#0A1628" }}>
                  まずはご相談を
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6560" }}>
                  医学部受験に関するどんな些細なご質問でも構いません。
                  現在の状況をお聞きした上で、最適なアドバイスをお伝えします。
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { title: "返答時間", text: "1営業日以内（平日10:00〜20:00）" },
                  { title: "無料体験授業", text: "ご入塾前に1回の無料体験授業を実施しています" },
                  { title: "返金保証", text: "ご入塾から1ヶ月以内のご解約は全額返金いたします" },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl p-4" style={{ backgroundColor: "white", border: "1px solid #E2DDD4" }}>
                    <h3 className="font-semibold text-sm mb-1" style={{ color: "#0A1628" }}>{item.title}</h3>
                    <p className="text-xs leading-relaxed" style={{ color: "#6B6560" }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 shadow-sm" style={{ border: "1px solid #E2DDD4" }}>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
