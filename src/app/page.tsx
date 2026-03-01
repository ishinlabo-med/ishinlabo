import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Courses from "@/components/Courses";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Courses />

      <section
        className="py-20"
        style={{
          background: "linear-gradient(135deg, #0A1628 0%, #112040 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
            合格への第一歩を、今すぐ踏み出す
          </h2>
          <p className="text-white/70 mb-10 text-base leading-relaxed">
            無料相談では、現状の課題整理から志望校別の戦略まで丁寧にお話しします。
            まずはお気軽にご連絡ください。
          </p>
          <Link
            href="/contact"
            className="btn-gold inline-flex items-center gap-2 px-10 py-4 font-bold rounded-lg text-base shadow-xl"
          >
            無料相談を申し込む
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <p className="text-white/40 text-xs mt-4">
            お返事は通常1営業日以内にお送りします
          </p>
        </div>
      </section>
    </>
  );
}
