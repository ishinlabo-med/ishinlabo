import Link from "next/link";

const LINE_URL = "https://lin.ee/AJiB8h6";

const lineIcon = (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.630 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.070 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
  </svg>
);

const consultationBenefits = [
  {
    title: "現状の学習状況ヒアリングと課題の洗い出し",
    description:
      "今の成績や勉強方法をお聞きし、医学部合格に向けて何がボトルネックになっているかをプロの視点で分析します。",
  },
  {
    title: "合格までの最短ルートのご提案",
    description:
      "志望校と現状のギャップを埋めるための、具体的な参考書ルートや学習スケジュールを無料でアドバイスします。",
  },
  {
    title: "医進ラボ式勉強法の解説",
    description:
      "暗記に頼らない、本質的な理解を深めるための勉強法や、正しい復習のタイミングなどをお伝えします。",
  },
];

export default function ConsultationBanner() {
  return (
    <section
      className="py-20 md:py-28"
      style={{ background: "linear-gradient(135deg, #0A1628 0%, #112040 100%)" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6"
            style={{ border: "1px solid #C9A84C50", color: "#C9A84C" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            無料相談受付中
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            まずは<span style={{ color: "#C9A84C" }}>無料相談</span>から
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-sm leading-relaxed">
            「何から始めればいいか分からない」「自分の勉強法が正しいか不安」<br />
            現状の課題・志望校・学習状況をお聞きし、現役の慶應医学部生が無料でご相談に乗ります。<br className="hidden sm:block" />
            勧誘は一切行いませんので、お気軽にご連絡ください。
          </p>
        </div>

        {/* Benefits + CTA grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14 items-start">

          {/* LINE benefits list */}
          <div
            className="rounded-2xl p-8"
            style={{ backgroundColor: "#FFFFFF08", border: "1px solid #C9A84C30" }}
          >
            <h3 className="font-semibold text-white mb-6 flex items-center gap-2">
              {lineIcon}
              LINE無料相談でできること
            </h3>
            <ul className="space-y-6">
              {consultationBenefits.map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: "#06C755", color: "white" }}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold text-sm text-white mb-1">{item.title}</p>
                    <p className="text-xs leading-relaxed" style={{ color: "#FFFFFF80" }}>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Form method info */}
          <div
            className="rounded-2xl p-8"
            style={{ backgroundColor: "#FFFFFF08", border: "1px solid #C9A84C30" }}
          >
            <h3 className="font-semibold text-white mb-6 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              フォーム相談・資料請求でできること
            </h3>
            <ul className="space-y-6">
              {[
                {
                  title: "入塾相談・面談希望",
                  description: "現在の学習状況や志望校をフォームにまとめてお送りください。1営業日以内にメールでご返信します。",
                },
                {
                  title: "資料請求（PDF）",
                  description: "ご入力いただいたメールアドレス宛に、PDF形式の資料をすぐにお送りいたします。郵送物は不要です。",
                },
                {
                  title: "無料体験授業の申し込み",
                  description: "ご入塾前に1回の無料体験授業を実施しています。フォームから気軽にお申し込みください。",
                },
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: "#C9A84C", color: "#0A1628" }}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold text-sm text-white mb-1">{item.title}</p>
                    <p className="text-xs leading-relaxed" style={{ color: "#FFFFFF80" }}>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 font-bold rounded-lg text-base shadow-xl"
            style={{ backgroundColor: "#06C755", color: "#FFFFFF" }}
          >
            {lineIcon}
            LINE無料相談はこちらから
          </a>
          <Link
            href="/contact"
            className="btn-outline-white inline-flex items-center justify-center px-8 py-4 font-semibold rounded-lg text-sm"
          >
            フォーム・資料請求はこちら
          </Link>
        </div>

        {/* Reassurance */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/40 text-xs">
          <span>✓ 完全無料・勧誘なし</span>
          <span>✓ LINE・フォームどちらも対応</span>
          <span>✓ 1営業日以内にご返信</span>
          <span>✓ 入塾前無料体験授業あり</span>
          <span>✓ 返金保証あり</span>
        </div>
      </div>
    </section>
  );
}
