"use client";

import React, { useState } from "react";
import {
  Anchor,
  TrendingUp,
  RotateCw,
  DollarSign,
  Coins,
  Shield,
} from "lucide-react";

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
    <section className="relative z-10 bg-nautical-blue-light px-3 sm:px-4 md:px-5 pb-3 sm:pb-4 md:pb-5 pt-0">
      <div className="flex flex-col xl:flex-row gap-3 sm:gap-4 md:gap-5 items-stretch">
        {/* All Out Yield */}
        <div className="flex-1 bg-nautical-blue p-6 sm:p-10 md:p-12 lg:p-14 flex flex-col xl:flex-row gap-6">
          <div className="xl:w-[38%] flex flex-col justify-center">
            <h2 className="leading-none text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold text-white tracking-tight">
              <span className="block whitespace-nowrap">All</span>
              <span className="block whitespace-nowrap">Out</span>
              <span className="block whitespace-nowrap">Yield</span>
            </h2>
          </div>
          <div className="flex-1 flex flex-col justify-between gap-5 sm:gap-6">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.35em] text-white/70 mb-4">
                Harbor Anchor Tokens (haTOKEN)
              </p>
              <YieldSection />
            </div>
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-3 md:gap-4">
              <a
                href="https://docs.harborfinance.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[140px] sm:w-[150px] md:w-[160px] lg:w-[170px] xl:w-[190px] flex-shrink-0 px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-3.5 text-xs sm:text-sm md:text-base font-semibold bg-white text-nautical-blue border-2 border-white rounded-full hover:bg-white/90 transition-colors text-center whitespace-nowrap"
              >
                Learn more
              </a>
              <button
                className="w-[140px] sm:w-[150px] md:w-[160px] lg:w-[170px] xl:w-[190px] flex-shrink-0 px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-3.5 text-xs sm:text-sm md:text-base font-semibold border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors whitespace-nowrap"
                onMouseEnter={() => setIsEarnHovered(true)}
                onMouseLeave={() => setIsEarnHovered(false)}
              >
                {isEarnHovered ? "Coming soon" : "Earn"}
              </button>
            </div>
          </div>
        </div>

        {/* Stress Free Leverage */}
        <div className="flex-1 bg-white p-6 sm:p-10 md:p-12 lg:p-14 flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10 xl:gap-6">
          <div className="lg:w-[38%] flex flex-col justify-center">
            <h2 className="leading-none text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold text-nautical-blue tracking-tight">
              <span className="block whitespace-nowrap">Stress</span>
              <span className="block whitespace-nowrap">Free</span>
              <span className="block whitespace-nowrap">Leverage</span>
            </h2>
          </div>
          <div className="flex-1 flex flex-col justify-between gap-5 sm:gap-6 lg:pl-6 xl:pl-8">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.35em] text-nautical-blue/70 mb-4">
                Harbor Sail Tokens (hsTOKEN)
              </p>
              <RebalanceSection />
            </div>
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-3 md:gap-4">
              <a
                href="https://docs.harborfinance.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[140px] sm:w-[150px] md:w-[160px] lg:w-[170px] xl:w-[190px] flex-shrink-0 px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-3.5 text-xs sm:text-sm md:text-base font-semibold bg-nautical-blue text-white border-2 border-nautical-blue rounded-full hover:bg-nautical-blue/90 transition-colors text-center whitespace-nowrap"
              >
                Learn more
              </a>
              <button
                className="w-[140px] sm:w-[150px] md:w-[160px] lg:w-[170px] xl:w-[190px] flex-shrink-0 px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-3.5 text-xs sm:text-sm md:text-base font-semibold border-2 border-nautical-blue text-nautical-blue rounded-full hover:bg-nautical-blue/10 transition-colors whitespace-nowrap"
                onMouseEnter={() => setIsTradeHovered(true)}
                onMouseLeave={() => setIsTradeHovered(false)}
              >
                {isTradeHovered ? "Coming soon" : "Trade"}
              </button>
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
    <div className="space-y-3">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
          <Anchor className="w-4 h-4 text-nautical-blue" />
        </div>
        <p className="text-white text-sm sm:text-base">
          Pegged to assets like ETH, BTC and more
        </p>
      </div>
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
          <TrendingUp className="w-4 h-4 text-nautical-blue" />
        </div>
        <p className="text-white text-sm sm:text-base">
          Earn yield from collateral and protocol trading fees
        </p>
      </div>
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
          <RotateCw className="w-4 h-4 text-nautical-blue" />
        </div>
        <p className="text-white text-sm sm:text-base">Redeemable any time</p>
      </div>
    </div>
  );
}

function RebalanceSection() {
  return (
    <div className="space-y-3">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 bg-nautical-blue flex items-center justify-center flex-shrink-0 mt-0.5">
          <Coins className="w-4 h-4 text-white" />
        </div>
        <p className="text-nautical-blue text-sm sm:text-base">
          Composable: Use in defi
        </p>
      </div>
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 bg-nautical-blue flex items-center justify-center flex-shrink-0 mt-0.5">
          <RotateCw className="w-4 h-4 text-white" />
        </div>
        <p className="text-nautical-blue text-sm sm:text-base">
          Fee-free, automatic rebalancing
        </p>
      </div>
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 bg-nautical-blue flex items-center justify-center flex-shrink-0 mt-0.5">
          <DollarSign className="w-4 h-4 text-white" />
        </div>
        <p className="text-nautical-blue text-sm sm:text-base">
          No funding fees
        </p>
      </div>
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
