import Link from "next/link";

export default function ConsultationBanner() {
  return (
    <section
      className="py-16"
      style={{ background: "linear-gradient(135deg, #0A1628 0%, #112040 100%)" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6"
          style={{ border: "1px solid #C9A84C50", color: "#C9A84C" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          無料相談受付中
        </div>
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
          まずは<span style={{ color: "#C9A84C" }}>無料相談</span>から
        </h2>
        <p className="text-white/60 mb-8 max-w-xl mx-auto text-sm leading-relaxed">
          現状の課題・志望校・学習状況をお聞きし、医進ラボ式アプローチが合うかどうかを一緒に確認します。
          勧誘は一切行いませんので、お気軽にご連絡ください。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="btn-gold inline-flex items-center justify-center gap-2 px-10 py-4 font-bold rounded-lg text-base shadow-xl"
          >
            無料相談はこちら
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/courses"
            className="btn-outline-white inline-flex items-center justify-center px-8 py-4 font-semibold rounded-lg text-sm"
          >
            コース・料金を見る
          </Link>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/40 text-xs">
          <span>✓ 完全無料・勧誘なし</span>
          <span>✓ オンライン・対面どちらも対応</span>
          <span>✓ 1営業日以内にご返信</span>
        </div>
      </div>
    </section>
  );
}
