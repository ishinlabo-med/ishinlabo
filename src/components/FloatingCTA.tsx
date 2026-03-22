"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const LINE_URL = "https://lin.ee/AJiB8h6";

const lineIcon = (
  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.630 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.070 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
  </svg>
);

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300"
      style={{ transform: visible ? "translateY(0)" : "translateY(100%)" }}
    >
      {/* Desktop bar */}
      <div
        className="hidden md:flex items-center justify-between px-8 py-3"
        style={{ backgroundColor: "#0A1628", borderTop: "1px solid rgba(201,168,76,0.3)" }}
      >
        <p className="text-white text-sm font-semibold">
          <span style={{ color: "#C9A84C" }}>無料相談受付中</span>
          　　現役慶應医学部生が医学部合格まで伴走します
        </p>
        <div className="flex items-center gap-3">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-bold"
            style={{ backgroundColor: "#06C755", color: "#fff" }}
          >
            {lineIcon}
            LINE無料相談
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 px-5 py-2 rounded-lg text-sm font-semibold"
            style={{ border: "1px solid rgba(201,168,76,0.6)", color: "#C9A84C" }}
          >
            フォームで相談
          </Link>
        </div>
      </div>

      {/* Mobile bar */}
      <div
        className="md:hidden grid grid-cols-2"
        style={{ borderTop: "2px solid #C9A84C" }}
      >
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-4 text-sm font-bold text-white"
          style={{ backgroundColor: "#06C755" }}
        >
          {lineIcon}
          LINE無料相談
        </a>
        <Link
          href="/contact"
          className="flex items-center justify-center gap-1 py-4 text-sm font-bold"
          style={{ backgroundColor: "#0A1628", color: "#C9A84C" }}
        >
          フォームで相談 →
        </Link>
      </div>
    </div>
  );
}
