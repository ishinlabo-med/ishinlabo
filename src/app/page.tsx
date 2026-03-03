import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Courses from "@/components/Courses";
import Founders from "@/components/Founders";
import Methodology from "@/components/Methodology";
import ConsultationBanner from "@/components/ConsultationBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Founders />
      <Methodology />
      <Courses />
      <ConsultationBanner />
    </>
  );
}
