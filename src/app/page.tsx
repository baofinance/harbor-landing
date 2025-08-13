"use client";

// Remove unused imports to satisfy lint
import IdoBanner from "@/components/IdoBanner";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import StabilityPoolsSection from "@/components/StabilityPoolsSection";
import SteamTokenSection from "@/components/SteamTokenSection";
import BoosterProgramSection from "@/components/BoosterProgramSection";
import UseCasesSection from "@/components/UseCasesSection";
import BuildMarketSection from "@/components/BuildMarketSection";
import SecuritySection from "@/components/SecuritySection";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        {/* Main Content */}
        <main className="relative z-10 pt-16">
          <Reveal>
            <IdoBanner />
          </Reveal>
          <Reveal delayMs={60}>
            <HeroSection />
          </Reveal>
          <Reveal delayMs={100}>
            <FeaturesSection />
          </Reveal>
          <Reveal delayMs={120}>
            <StabilityPoolsSection />
          </Reveal>
          <Reveal delayMs={140}>
            <SteamTokenSection />
          </Reveal>
          <Reveal delayMs={160}>
            <BoosterProgramSection />
          </Reveal>
          <Reveal delayMs={180}>
            <UseCasesSection />
          </Reveal>
          <Reveal delayMs={200}>
            <BuildMarketSection />
          </Reveal>
          <Reveal delayMs={220}>
            <SecuritySection />
          </Reveal>
        </main>
        <Footer />
      </div>
    </>
  );
}
