"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "ホーム" },
  { href: "/courses", label: "コース・料金" },
  { href: "/blog", label: "ブログ" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{ backgroundColor: "#0A1628", borderBottom: "1px solid #C9A84C33" }}
      className="sticky top-0 z-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span
              className="font-playfair text-2xl font-bold"
              style={{ color: "#C9A84C" }}
            >
              医進ラボ
            </span>
            <span className="text-xs text-white/50 hidden sm:block tracking-widest uppercase">
              Ishin Labo
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-5 py-2 text-sm font-semibold rounded transition-all duration-200"
              style={{
                backgroundColor: "#C9A84C",
                color: "#0A1628",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#D4B86A")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#C9A84C")
              }
            >
              無料相談
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニューを開く"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-white transition-transform duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-white transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-white transition-transform duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{ backgroundColor: "#112040", borderTop: "1px solid #C9A84C33" }}
          className="md:hidden"
        >
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white py-2 text-base font-medium transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-center px-5 py-2.5 text-sm font-semibold rounded"
              style={{ backgroundColor: "#C9A84C", color: "#0A1628" }}
              onClick={() => setMenuOpen(false)}
            >
              無料相談はこちら
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
