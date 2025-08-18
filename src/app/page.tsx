"use client";

// Remove unused imports to satisfy lint
import AnimatedSmokeBackground from "@/components/AnimatedSmokeBackground";
import BoosterProgramSection from "@/components/BoosterProgramSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SecuritySection from "@/components/SecuritySection";
import TokenCarousel from "@/components/TokenCarousel";
import UseCasesSection from "@/components/UseCasesSection";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <AnimatedSmokeBackground />
      <main className="relative z-10">
        <div>
          <Reveal delayMs={0}>
            <HeroSection />
          </Reveal>
          <Reveal delayMs={60}>
            <TokenCarousel />
          </Reveal>
          <Reveal delayMs={120}>
            <UseCasesSection />
          </Reveal>
          <Reveal delayMs={300}>
            <BoosterProgramSection />
          </Reveal>
          <Reveal delayMs={360}>
            <SecuritySection />
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
