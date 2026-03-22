import Link from "next/link";
import Image from "next/image";
import { findImage } from "@/lib/imageHelper";

const LINE_URL = "https://lin.ee/AJiB8h6";

export default function Hero() {
  const heroImage = findImage("hero-bg");
  const campusImage = findImage("campus-future");

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: "#0A1628" }}>
      {/* Background image */}
      {(heroImage || campusImage) && (
        <div className="absolute inset-0">
          <Image
            src={(heroImage || campusImage)!}
            alt="医進ラボ 医学部受験専門オンライン個別指導"
            fill
            className="object-cover"
            style={{ objectPosition: "center top" }}
            priority
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(110deg, rgba(10,22,40,0.97) 0%, rgba(10,22,40,0.82) 55%, rgba(10,22,40,0.60) 100%)" }} />
        </div>
      )}

      {/* Layered background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Gold radial glow */}
        <div className="absolute" style={{
          left: "-5%", top: "20%",
          width: "50%", height: "70%",
          background: "radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 65%)",
        }} />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-3" style={{
          backgroundImage: "linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        {/* Right side accent */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20" style={{
          background: "linear-gradient(to left, rgba(201,168,76,0.05), transparent)",
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left: main content */}
          <div className="lg:col-span-7">

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider"
                style={{ border: "1px solid #C9A84C60", color: "#C9A84C", backgroundColor: "#C9A84C0A" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                医学部受験専門 個別指導塾
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{ backgroundColor: "#FFFFFF08", color: "#FFFFFF60", border: "1px solid #FFFFFF15" }}>
                オンライン・対面 両対応
              </div>
            </div>

            {/* Pre-headline */}
            <p className="text-white/60 text-sm md:text-base font-medium mb-4 tracking-wide animate-fade-in-up delay-100">
              慶應医学部特待合格者が直接指導
            </p>

            {/* Main headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[1.05] mb-6 animate-fade-in-up delay-200"
              style={{ letterSpacing: "-0.01em" }}>
              現役医学生が導く<br />
              <span className="text-shimmer">圧倒的合格</span>へ。
            </h1>

            {/* Description */}
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-3 max-w-lg animate-fade-in-up delay-300">
              塾なしで<span className="text-white font-bold">慶應医学部特待・私立医学部全勝</span>を果たした
              現役慶應医学部生2名が設立。
            </p>
            <p className="text-white/50 text-sm md:text-base leading-relaxed mb-10 max-w-lg animate-fade-in-up delay-300">
              完全オーダーメイドカリキュラムと1対1指導で、
              あなたの医学部合格への最短ルートを伴走します。
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-14 animate-fade-in-up delay-400">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-line inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold rounded-xl shadow-xl"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.070 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
                LINE無料相談はこちら
              </a>
              <Link
                href="/courses"
                className="btn-outline-white inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl"
              >
                コース・料金を見る
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Stats */}
            <div
              className="flex flex-wrap gap-6 pt-8 animate-fade-in-up delay-500"
              style={{ borderTop: "1px solid rgba(201,168,76,0.2)" }}
            >
              {[
                { value: "1対1", label: "完全個別指導" },
                { value: "全国", label: "オンライン対応" },
                { value: "全科目", label: "英数理・小論文・面接" },
                { value: "無料", label: "相談・体験授業" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl font-black" style={{ color: "#C9A84C" }}>{stat.value}</span>
                  <span className="text-white/45 text-xs mt-0.5">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: achievement card */}
          <div className="hidden lg:block lg:col-span-5 animate-fade-in-up delay-300">
            <div className="relative">
              {/* Main card */}
              <div
                className="rounded-2xl p-8"
                style={{
                  backgroundColor: "#112040",
                  border: "1px solid #C9A84C30",
                  boxShadow: "0 32px 64px rgba(0,0,0,0.4), 0 0 0 1px #C9A84C15",
                }}
              >
                <div className="text-xs font-bold tracking-widest uppercase mb-6" style={{ color: "#C9A84C" }}>
                  創設者の実績
                </div>

                <div className="space-y-5">
                  {[
                    {
                      icon: "🏆",
                      title: "慶應義塾大学医学部",
                      sub: "特待生合格（塾なし・独学）",
                    },
                    {
                      icon: "🎯",
                      title: "私立医学部 全校合格",
                      sub: "受験したすべての医学部に合格",
                    },
                    {
                      icon: "📚",
                      title: "東京医科歯科大学",
                      sub: "国公立医学部合格",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex gap-4 items-start p-4 rounded-xl"
                      style={{ backgroundColor: "#0A1628", border: "1px solid #C9A84C15" }}
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <p className="font-bold text-white text-sm">{item.title}</p>
                        <p className="text-xs mt-0.5" style={{ color: "#FFFFFF60" }}>{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom CTA in card */}
                <div
                  className="mt-6 pt-6"
                  style={{ borderTop: "1px solid #C9A84C20" }}
                >
                  <p className="text-white/50 text-xs mb-3">無料相談実施中 · 勧誘なし</p>
                  <a
                    href={LINE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold w-full flex items-center justify-center gap-2 py-3 font-bold rounded-xl text-sm"
                  >
                    今すぐ無料相談する →
                  </a>
                </div>
              </div>

              {/* Floating badge */}
              <div
                className="absolute -top-4 -right-4 px-4 py-2 rounded-full text-xs font-bold shadow-lg"
                style={{ backgroundColor: "#C9A84C", color: "#0A1628" }}
              >
                現役慶應医学部生が直接指導
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-700">
        <span className="text-white/25 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 animate-pulse" style={{ background: "linear-gradient(to bottom, #C9A84C60, transparent)" }} />
      </div>
    </section>
  );
}
