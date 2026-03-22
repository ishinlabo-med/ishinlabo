import Link from "next/link";

const LINE_URL = "https://lin.ee/AJiB8h6";

const lineIcon = (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.630 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.070 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
  </svg>
);

interface BlogCtaBannerProps {
  variant?: "inline" | "bottom";
}

export default function BlogCtaBanner({ variant = "inline" }: BlogCtaBannerProps) {
  if (variant === "inline") {
    return (
      <div
        className="my-10 rounded-2xl p-6 sm:p-8"
        style={{
          background: "linear-gradient(135deg, #0A1628 0%, #112040 100%)",
          border: "1px solid rgba(201,168,76,0.3)",
        }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-5">
          <div className="flex-1">
            <p className="text-xs font-semibold tracking-widest uppercase mb-1.5" style={{ color: "#C9A84C" }}>
              無料相談受付中
            </p>
            <p className="text-white font-bold text-base sm:text-lg leading-snug mb-1">
              この記事の内容、実際に自分に合った形で教えてほしい方へ
            </p>
            <p className="text-white/50 text-xs leading-relaxed">
              現役慶應医学部生が、あなたの志望校・現状に合わせた具体的な勉強法を無料でアドバイスします。勧誘は一切なし。
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-shrink-0">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm"
              style={{ backgroundColor: "#06C755", color: "#ffffff" }}
            >
              {lineIcon}
              LINE無料相談
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-semibold text-xs"
              style={{ border: "1px solid rgba(201,168,76,0.5)", color: "#C9A84C" }}
            >
              フォームで相談
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="rounded-2xl p-8 text-center"
      style={{
        background: "linear-gradient(135deg, #0A1628 0%, #112040 100%)",
        border: "1px solid rgba(201,168,76,0.3)",
      }}
    >
      <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C9A84C" }}>
        無料相談受付中
      </p>
      <h3 className="text-xl font-bold text-white mb-3">
        医学部合格を目指すなら、まずは無料相談へ
      </h3>
      <p className="text-white/60 text-sm mb-6 max-w-md mx-auto leading-relaxed">
        現役医学生・医師があなたの状況をヒアリングし、最適な学習プランをご提案します。勧誘は一切行いません。
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg font-bold text-sm"
          style={{ backgroundColor: "#06C755", color: "#ffffff" }}
        >
          {lineIcon}
          LINE無料相談
        </a>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-7 py-3 rounded-lg font-semibold text-sm btn-gold"
        >
          無料相談を申し込む →
        </Link>
      </div>
    </div>
  );
}
