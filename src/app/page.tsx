"use client";

import DepthEffects from "@/components/DepthEffects";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MaidenVoyageFlowSection from "@/components/MaidenVoyageFlowSection";
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
          <HeroSection />
          <Reveal delayMs={30}>
            <MaidenVoyageFlowSection />
          </Reveal>
          <Reveal delayMs={60}>
            <AllOutYieldSection />
          </Reveal>
          <Reveal delayMs={120}>
            <UseCasesSection />
          </Reveal>
          <Reveal delayMs={180}>
            <TideSection />
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
