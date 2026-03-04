import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#0A1628" }} className="text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="font-playfair text-2xl font-bold" style={{ color: "#C9A84C" }}>
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
                { href: "/courses", label: "コース・料金" },
                { href: "/blog", label: "ブログ・お知らせ" },
                { href: "/contact", label: "お問い合わせ" },
                { href: "/contact", label: "無料相談申込" },
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
            <ul className="space-y-2 text-sm text-white/60">
              <li>対応時間: 平日 10:00〜20:00</li>
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
