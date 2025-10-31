"use client";

import BoosterProgramSection from "@/components/BoosterProgramSection";
import DepthEffects from "@/components/DepthEffects";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MaidenVoyageSection from "@/components/MaidenVoyageSection";
import SecuritySection from "@/components/SecuritySection";
import TideSection from "@/components/TideSection";
import { AllOutYieldSection } from "@/components/TokenCarousel";
import UseCasesSection from "@/components/UseCasesSection";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <DepthEffects />
      <main className="relative z-10 bg-nautical-blue-light">
        <div className="bg-nautical-blue-light">
          <Reveal delayMs={0}>
            <HeroSection />
          </Reveal>
          <Reveal delayMs={60}>
            <AllOutYieldSection />
          </Reveal>
          <Reveal delayMs={120}>
            <UseCasesSection />
          </Reveal>
          <Reveal delayMs={180}>
            <MaidenVoyageSection />
          </Reveal>
          <Reveal delayMs={240}>
            <TideSection />
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
