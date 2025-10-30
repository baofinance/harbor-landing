"use client";

import React from "react";

// Types for the new two-sided layout
type SideCard = {
  chip: string;
  title: string;
  description: string;
};

const sideCards: SideCard[] = [
  {
    chip: "anchor",
    title: "Yield",
    description:
      "Harbor Anchor Tokens (haTOKEN) are pegged to assets like ETH, BTC, and more.\n\nStability pools earn boosted yield from assets like fxSAVE and wstETH and redeemable anytime.",
  },
  {
    chip: "sail",
    title: "Rebalancing Leverage",
    description:
      "Harbor Sail (hs) tokens are composable, variable-leverage tokens that automatically rebalance to keep you afloat.\n\nEach hsTOKEN has a long and a short side; for example, hsUSDETH is long USD vs ETH (or short ETH).",
  },
];

export function AllOutYieldSection() {
  return (
    <section className="relative z-10 bg-white p-3">
      <div className="relative w-full flex items-stretch gap-3">
        <div className="relative z-10 flex-1 bg-nautical-blue p-10 sm:p-12 lg:p-14 flex flex-col items-center justify-center text-center border-4 border-white">
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-wide font-bold text-white mb-6">
            All Out Yield
          </h2>
          <YieldSection />
          <div className="flex items-center justify-center gap-4 mt-8">
            <button className="px-14 py-5 text-xl bg-white text-nautical-blue font-semibold rounded-full hover:bg-white/90 transition-colors">
              Learn more
            </button>
            <button className="px-14 py-5 text-xl border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
              Earn
            </button>
          </div>
        </div>
        {/* Anchor image matching box height */}
        <div className="relative flex-shrink-0 w-[280px] sm:w-[360px] lg:w-[440px] self-stretch border-4 border-white overflow-hidden">
          <img
            src="/Anchor.png"
            alt="Harbor Anchor"
            aria-hidden
            className="pointer-events-none w-full h-full object-cover opacity-90"
          />
        </div>
      </div>
    </section>
  );
}

export function StressFreeLeverageSection() {
  return (
    <section className="relative z-10 bg-white px-3 pb-3 pt-0">
      <div className="relative w-full flex items-stretch gap-3">
        {/* Sail image matching box height */}
        <div className="relative flex-shrink-0 w-[280px] sm:w-[360px] lg:w-[440px] self-stretch border-4 border-white overflow-hidden">
          <img
            src="/sail.png"
            alt="Harbor Sail Token"
            aria-hidden
            className="pointer-events-none w-full h-full object-cover opacity-90"
          />
        </div>
        <div className="relative z-10 flex-1 bg-nautical-blue p-10 sm:p-12 lg:p-14 flex flex-col items-center justify-center text-center border-4 border-white">
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-wide font-bold text-white mb-6">
            Stress Free Leverage
          </h2>
          <RebalanceSection />
          <div className="flex items-center justify-center gap-4 mt-8">
            <button className="px-14 py-5 text-xl bg-white text-nautical-blue font-semibold rounded-full hover:bg-white/90 transition-colors">
              Learn more
            </button>
            <button className="px-14 py-5 text-xl border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
              Trade
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Keep default export for backward compatibility
export default function TokenCarousel() {
  return (
    <>
      <AllOutYieldSection />
      <StressFreeLeverageSection />
    </>
  );
}

function YieldSection() {
  return (
    <div className="text-white text-sm sm:text-base leading-relaxed space-y-3">
      {sideCards[0].description.split("\n\n").map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}

function RebalanceSection() {
  return (
    <div className="text-white text-sm sm:text-base leading-relaxed space-y-3">
      {sideCards[1].description.split("\n\n").map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}

function SailPorthole() {
  return (
    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-[14px] border-[#1E4775] bg-nautical-blue overflow-hidden shadow-[0_16px_32px_rgba(0,0,0,0.35)] flex items-center justify-center">
      <img
        src="/sail.png"
        alt="Harbor Sail Token"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center uppercase tracking-wider text-[10px] text-white border border-[#FF8A7A]/60 bg-[#FF8A7A] backdrop-blur-md px-2.5 py-0.5 rounded-full">
      {children}
    </span>
  );
}
