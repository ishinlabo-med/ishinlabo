import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import path from "path";

// 画像ファイルが存在するか確認（存在しない場合はプレースホルダーを表示）
function heroImageExists() {
  try {
    return fs.existsSync(path.join(process.cwd(), "public/images/hero-bg.jpg"));
  } catch {
    return false;
  }
}

export default function Hero() {
  const hasImage = heroImageExists();

  return (
    <section
      className="relative min-h-[95vh] flex items-center overflow-hidden"
      style={{ backgroundColor: "#0A1628" }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #C9A84C 0%, transparent 50%), radial-gradient(circle at 80% 20%, #C9A84C 0%, transparent 40%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text */}
          <div>
            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase"
                style={{ border: "1px solid #C9A84C", color: "#C9A84C" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                医学部受験専門 個別指導塾
              </div>
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold"
                style={{ backgroundColor: "#C9A84C20", color: "#C9A84C80", border: "1px solid #C9A84C30" }}
              >
                オンライン・対面 両対応
              </div>
            </div>

            {/* Headline */}
            <h1 className="font-klee text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight mb-6">
              医学部合格は、<br />
              <span style={{ color: "#C9A84C" }}>才能ではなく</span><br />
              方法論で決まる。
            </h1>

            <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-4 max-w-lg">
              塾なしで慶應医学部特待・私立医学部全勝を果たした
              <span className="text-white font-semibold">2名の現役慶應医学部生</span>が創設。
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-10 max-w-lg">
              医進ラボ式勉強法と完全オーダーメイドカリキュラムで、
              あなたの医学部合格への最短ルートを共に切り拓きます。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <a
                href="https://lin.ee/AJiB8h6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold rounded-lg shadow-lg"
                style={{ backgroundColor: "#06C755", color: "#FFFFFF" }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.630 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.070 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
                LINEで無料相談する
              </a>
              <Link
                href="/courses"
                className="btn-outline-white inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg"
              >
                コース・料金を見る
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8" style={{ borderTop: "1px solid #C9A84C20" }}>
              {[
                { value: "1対1", label: "完全個別指導" },
                { value: "全国", label: "オンライン受講対応" },
                { value: "全科目", label: "英数理・小論文・面接" },
                { value: "無料", label: "相談・入塾前体験" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-klee text-3xl font-semibold" style={{ color: "#C9A84C" }}>
                    {stat.value}
                  </div>
                  <div className="text-white/50 text-xs mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative ring */}
              <div
                className="absolute -inset-4 rounded-3xl opacity-20"
                style={{ border: "1px solid #C9A84C" }}
              />
              <div
                className="absolute -inset-8 rounded-3xl opacity-10"
                style={{ border: "1px solid #C9A84C" }}
              />

              {hasImage ? (
                <Image
                  src="/images/hero-bg.jpg"
                  alt="医進ラボ 学習風景"
                  width={480}
                  height={560}
                  className="rounded-2xl object-cover w-full"
                  style={{ aspectRatio: "4/5" }}
                  priority
                />
              ) : (
                /* 画像プレースホルダー — hero-bg.jpg を追加すると自動で差し替わります */
                <div
                  className="rounded-2xl flex flex-col items-center justify-center text-center p-10"
                  style={{
                    aspectRatio: "4/5",
                    background: "linear-gradient(145deg, #112040 0%, #0A1628 100%)",
                    border: "1px dashed #C9A84C40",
                  }}
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "#C9A84C15" }}>
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#C9A84C40">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-xs" style={{ color: "#C9A84C40" }}>
                    public/images/hero-bg.jpg<br />を追加すると表示されます
                  </p>
                </div>
              )}

              {/* Floating badge */}
              <div
                className="absolute -bottom-4 -left-4 px-4 py-3 rounded-xl shadow-xl"
                style={{ backgroundColor: "#0A1628", border: "1px solid #C9A84C40" }}
              >
                <p className="text-xs font-semibold" style={{ color: "#C9A84C" }}>現役慶應医学部生が</p>
                <p className="text-white text-sm font-bold">完全1対1で指導</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
