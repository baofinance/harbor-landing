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
        <div className="relative z-10 flex-1 bg-nautical-blue p-6 sm:p-10 md:p-12 lg:p-14">
          <div className="flex flex-col md:flex-row gap-6 lg:gap-10 h-full">
            <div className="md:w-5/12 flex flex-col justify-center text-left">
              <h2 className="leading-none text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-white tracking-tight">
                <span className="block">All</span>
                <span className="block">Out</span>
                <span className="block">Yield</span>
              </h2>
            </div>

            <div className="md:w-7/12 flex flex-col justify-center text-left gap-6 md:pl-6 lg:pl-10">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.35em] text-white/70 mb-4">
                  Harbor Anchor Tokens (haTOKEN)
                </p>
                <YieldSection />
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                <button className="w-full sm:w-auto px-6 sm:px-8 py-3 text-sm sm:text-base bg-white text-nautical-blue font-semibold rounded-full hover:bg-white/90 transition-colors">
                  Learn more
                </button>
                <button className="w-full sm:w-auto px-6 sm:px-8 py-3 text-sm sm:text-base border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
                  Earn
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stress Free Leverage - Right 50% - White background (inverted) */}
        <div className="relative z-10 flex-1 bg-white p-6 sm:p-10 md:p-12 lg:p-14">
          <div className="flex flex-col md:flex-row gap-6 lg:gap-10 h-full">
            <div className="md:w-5/12 flex flex-col justify-center text-left">
              <h2 className="leading-none text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-nautical-blue tracking-tight">
                <span className="block">Stress</span>
                <span className="block">Free</span>
                <span className="block">Leverage</span>
              </h2>
            </div>

            <div className="md:w-7/12 flex flex-col justify-center text-left gap-6 md:pl-6 lg:pl-10">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.35em] text-nautical-blue/70 mb-4">
                  Harbor Sail Tokens (hsTOKEN)
                </p>
                <RebalanceSection />
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                <button className="w-full sm:w-auto px-6 sm:px-8 py-3 text-sm sm:text-base bg-nautical-blue text-white font-semibold rounded-full hover:bg-nautical-blue/90 transition-colors">
                  Learn more
                </button>
                <button className="w-full sm:w-auto px-6 sm:px-8 py-3 text-sm sm:text-base border-2 border-nautical-blue text-nautical-blue font-semibold rounded-full hover:bg-nautical-blue/10 transition-colors">
                  Trade
                </button>
              </div>
            </div>
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
