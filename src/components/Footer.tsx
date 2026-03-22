import Link from "next/link";

const LINE_URL = "https://lin.ee/AJiB8h6";

const lineIcon = (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.630 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.070 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#0A1628" }} className="text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-black" style={{ color: "#C9A84C" }}>
                医進ラボ
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              医学部受験専門のオンライン個別指導塾。
              現役医学生・医師があなたの合格を全力でサポートします。
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">
              サービス
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "医進ラボについて" },
                { href: "/courses", label: "コース・料金" },
                { href: "/blog", label: "ブログ・お知らせ" },
                { href: "/contact", label: "お問い合わせ・無料相談" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">
              お問い合わせ
            </h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li>対応時間: 平日 10:00〜20:00</li>
              <li>
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#06C755", color: "#ffffff" }}
                >
                  {lineIcon}
                  LINE無料相談
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                  style={{ color: "#C9A84C" }}
                >
                  お問い合わせフォーム →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <p className="text-white/40 text-xs">
            © {currentYear} 医進ラボ. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6 text-xs text-white/40">
            <Link href="/tokushoho" className="hover:text-white/70 transition-colors">特定商取引法</Link>
            <Link href="/privacy" className="hover:text-white/70 transition-colors">プライバシーポリシー</Link>
            <Link href="/terms" className="hover:text-white/70 transition-colors">利用規約</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
