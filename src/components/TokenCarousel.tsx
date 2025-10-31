"use client";

import React, { useState } from "react";

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
  const [isEarnHovered, setIsEarnHovered] = useState(false);
  const [isTradeHovered, setIsTradeHovered] = useState(false);

  return (
    <section className="relative z-10 bg-nautical-blue-light p-2 sm:p-3">
      <div className="relative w-full flex flex-col lg:flex-row items-stretch gap-2 sm:gap-3">
        {/* All Out Yield - Left 50% - Blue background */}
        <div className="relative z-10 flex-1 bg-nautical-blue p-6 sm:p-10 md:p-12 lg:p-14">
          <div className="flex flex-row gap-1.5 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-10 h-full">
            <div className="w-5/12 flex flex-col justify-center text-left min-w-0">
              <h2 className="leading-none text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold text-white tracking-tight">
                <span className="block whitespace-nowrap">All</span>
                <span className="block whitespace-nowrap">Out</span>
                <span className="block whitespace-nowrap">Yield</span>
              </h2>
            </div>

            <div className="w-7/12 flex flex-col justify-center text-left gap-4 sm:gap-5 md:gap-6 pl-1.5 sm:pl-2 md:pl-4 lg:pl-6 xl:pl-10 min-w-0">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.35em] text-white/70 mb-4">
                  Harbor Anchor Tokens (haTOKEN)
                </p>
                <YieldSection />
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                <a
                  href="https://docs.harbor.finance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold bg-white text-nautical-blue border-2 border-white rounded-full hover:bg-white/90 transition-colors text-center"
                >
                  Learn more
                </a>
                <button
                  className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors"
                  onMouseEnter={() => setIsEarnHovered(true)}
                  onMouseLeave={() => setIsEarnHovered(false)}
                >
                  {isEarnHovered ? "Coming soon" : "Earn"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stress Free Leverage - Right 50% - White background (inverted) */}
        <div className="relative z-10 flex-1 bg-white p-6 sm:p-10 md:p-12 lg:p-14">
          <div className="flex flex-row gap-1.5 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-10 h-full">
            <div className="w-5/12 flex flex-col justify-center text-left min-w-0">
              <h2 className="leading-none text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold text-nautical-blue tracking-tight">
                <span className="block whitespace-nowrap">Stress</span>
                <span className="block whitespace-nowrap">Free</span>
                <span className="block whitespace-nowrap">Leverage</span>
              </h2>
            </div>

            <div className="w-7/12 flex flex-col justify-center text-left gap-4 sm:gap-5 md:gap-6 pl-1.5 sm:pl-2 md:pl-4 lg:pl-6 xl:pl-10 min-w-0">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.35em] text-nautical-blue/70 mb-4">
                  Harbor Sail Tokens (hsTOKEN)
                </p>
                <RebalanceSection />
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                <a
                  href="https://docs.harbor.finance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold bg-nautical-blue text-white border-2 border-nautical-blue rounded-full hover:bg-nautical-blue/90 transition-colors text-center"
                >
                  Learn more
                </a>
                <button
                  className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold border-2 border-nautical-blue text-nautical-blue rounded-full hover:bg-nautical-blue/10 transition-colors"
                  onMouseEnter={() => setIsTradeHovered(true)}
                  onMouseLeave={() => setIsTradeHovered(false)}
                >
                  {isTradeHovered ? "Coming soon" : "Trade"}
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
