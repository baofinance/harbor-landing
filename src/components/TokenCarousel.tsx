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
      "• Pegged to assets like ETH, BTC and more\n• Earn yield from collateral and protocol trading fees\n• Redeemable any time",
  },
  {
    chip: "sail",
    title: "Rebalancing Leverage",
    description:
      "• Composable: Use in defi\n• Fee-free, automatic rebalancing\n• No funding fees",
  },
];

export function AllOutYieldSection() {
  return (
    <section className="relative z-10 bg-nautical-blue-light p-2 sm:p-3">
      <div className="relative w-full flex flex-col md:flex-row items-stretch gap-2 sm:gap-3">
        {/* All Out Yield - Left 50% - Blue background */}
        <div className="relative z-10 flex-1 bg-nautical-blue p-6 sm:p-10 md:p-12 lg:p-14 flex flex-col items-center justify-center text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wide font-bold text-white mb-2">
            All Out Yield
          </h2>
          <div className="mb-4 sm:mb-6">
            <span className="inline-flex items-center tracking-wider text-xs text-white border border-[#FF8A7A] bg-white/10 backdrop-blur-md px-3 py-1 rounded-full">
              Harbor Anchor Tokens (haTOKEN)
            </span>
          </div>
          <YieldSection />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 w-full sm:w-auto">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 text-sm sm:text-base bg-white text-nautical-blue font-semibold rounded-full hover:bg-white/90 transition-colors">
              Learn more
            </button>
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 text-sm sm:text-base border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
              Earn
            </button>
          </div>
        </div>

        {/* Stress Free Leverage - Right 50% - White background (inverted) */}
        <div className="relative z-10 flex-1 bg-white p-6 sm:p-10 md:p-12 lg:p-14 flex flex-col items-center justify-center text-center border-2 border-nautical-blue-light">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wide font-bold text-nautical-blue mb-2">
            Stress Free Leverage
          </h2>
          <div className="mb-4 sm:mb-6">
            <span className="inline-flex items-center tracking-wider text-xs text-nautical-blue border border-[#FF8A7A] bg-nautical-blue/10 backdrop-blur-md px-3 py-1 rounded-full">
              Harbor Sail Tokens (hsTOKEN)
            </span>
          </div>
          <RebalanceSection />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 w-full sm:w-auto">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 text-sm sm:text-base bg-nautical-blue text-white font-semibold rounded-full hover:bg-nautical-blue/90 transition-colors">
              Learn more
            </button>
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 text-sm sm:text-base border-2 border-nautical-blue text-nautical-blue font-semibold rounded-full hover:bg-nautical-blue/10 transition-colors">
              Trade
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function StressFreeLeverageSection() {
  // This component is no longer used separately
  return null;
}

// Keep default export for backward compatibility
export default function TokenCarousel() {
  return <AllOutYieldSection />;
}

function YieldSection() {
  return (
    <div className="text-white text-sm sm:text-base leading-relaxed space-y-2 text-left">
      {sideCards[0].description.split("\n").map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
}

function RebalanceSection() {
  return (
    <div className="text-nautical-blue text-sm sm:text-base leading-relaxed space-y-2 text-left">
      {sideCards[1].description.split("\n").map((line, index) => (
        <p key={index}>{line}</p>
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
