"use client";

import DepthEffects from "@/components/DepthEffects";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import MaidenVoyageFlowSection from "@/components/MaidenVoyageFlowSection";
import BuildMarketsSection from "@/components/BuildMarketsSection";
import TideSection from "@/components/TideSection";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <DepthEffects />
      <main className="relative z-10 bg-nautical-blue-light">
        <div className="bg-nautical-blue-light">
          <HeroSection />
          <Reveal delayMs={30}>
            <ProductsSection />
          </Reveal>
          <Reveal delayMs={45}>
            <BuildMarketsSection />
          </Reveal>
          <Reveal delayMs={60}>
            <MaidenVoyageFlowSection />
          </Reveal>
          <Reveal delayMs={90}>
            <TideSection />
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
