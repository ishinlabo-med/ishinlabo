import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Founders from "@/components/Founders";
import Methodology from "@/components/Methodology";
import InstructorsSection from "@/components/InstructorsSection";
import FlowSection from "@/components/FlowSection";
import VoiceSection from "@/components/VoiceSection";
import FaqSection from "@/components/FaqSection";
import Courses from "@/components/Courses";
import ConsultationBanner from "@/components/ConsultationBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Founders />
      <Methodology />
      <InstructorsSection />
      <FlowSection />
      <VoiceSection />
      <FaqSection />
      <Courses />
      <ConsultationBanner />
    </>
  );
}
