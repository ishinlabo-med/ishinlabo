import Link from "next/link";

const LINE_URL = "https://lin.ee/XXXXXXX"; // TODO: 実際のLINE URLに変更

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
        <p className="text-white/60 mb-3 max-w-xl mx-auto text-sm leading-relaxed">
          現状の課題・志望校・学習状況をお聞きし、医進ラボ式アプローチが合うかどうかを一緒に確認します。
          勧誘は一切行いませんので、お気軽にご連絡ください。
        </p>
        <p className="text-white/40 mb-8 text-xs">
          📩 LINEまたはフォームからお気軽にどうぞ。1営業日以内にご返信します。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 font-bold rounded-lg text-base shadow-xl"
            style={{ backgroundColor: "#06C755", color: "#FFFFFF" }}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.630 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.070 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
            </svg>
            LINEで無料相談する
          </a>
          <Link
            href="/contact"
            className="btn-outline-white inline-flex items-center justify-center px-8 py-4 font-semibold rounded-lg text-sm"
          >
            フォームで相談する
          </Link>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/40 text-xs">
          <span>✓ 完全無料・勧誘なし</span>
          <span>✓ LINE・フォームどちらも対応</span>
          <span>✓ 1営業日以内にご返信</span>
        </div>
      </div>
    </section>
  );
}
