"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  Anchor,
  TrendingUp,
  RotateCw,
  DollarSign,
  Coins,
  Shield,
} from "lucide-react";

// Types for the new two-sided layout
type AnchorMarket = {
  marketId: string;
  name: string;
  symbol: string;
  bestApr: number;
};

type SailMarket = {
  marketId: string;
  name: string;
  longSide: string;
  shortSide: string;
  leverageRatio: number;
};

type LandingSummaryResponse = {
  generatedAt: string;
  anchorMarkets: AnchorMarket[];
  sailMarkets: SailMarket[];
};

const LANDING_SUMMARY_URL = "https://app.harborfinance.io/api/landing/summary";
const LANDING_SUMMARY_FALLBACK_URL = "/api/landing/summary";
const APP_URL = "https://app.harborfinance.io/genesis";

export function AllOutYieldSection() {
  const [anchorMarkets, setAnchorMarkets] = useState<AnchorMarket[]>([]);
  const [sailMarkets, setSailMarkets] = useState<SailMarket[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const loadSummary = async () => {
      try {
        setIsLoading(true);
        setLoadError(false);
        let response = await fetch(LANDING_SUMMARY_URL, {
          headers: { Accept: "application/json" },
          cache: "no-store",
        });

        if (!response.ok) {
          response = await fetch(LANDING_SUMMARY_FALLBACK_URL, {
            headers: { Accept: "application/json" },
            cache: "no-store",
          });
        }

        if (!response.ok) {
          throw new Error(`Landing summary request failed: ${response.status}`);
        }

        const data = (await response.json()) as LandingSummaryResponse;

        if (!isMounted) return;

        setAnchorMarkets(Array.isArray(data.anchorMarkets) ? data.anchorMarkets : []);
        setSailMarkets(Array.isArray(data.sailMarkets) ? data.sailMarkets : []);
      } catch (error) {
        if (isMounted) {
          setLoadError(true);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadSummary();

    return () => {
      isMounted = false;
    };
  }, []);

  const liveAnchorMarkets = useMemo(() => anchorMarkets, [anchorMarkets]);

  return (
    <section className="relative z-10 bg-nautical-blue-light px-3 sm:px-4 md:px-5 pb-3 sm:pb-4 md:pb-5 pt-0">
      <div className="flex flex-col xl:flex-row gap-3 sm:gap-4 md:gap-5 items-stretch">
        {/* All Out Yield */}
        <div className="flex-1 bg-nautical-blue p-6 sm:p-10 md:p-12 lg:p-14 flex flex-col xl:flex-row gap-6">
          <div className="xl:w-[38%] flex flex-col justify-center gap-4">
            <h2 className="leading-none text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold text-white tracking-tight">
              <span className="block whitespace-nowrap">All</span>
              <span className="block whitespace-nowrap">Out</span>
              <span className="block whitespace-nowrap">Yield</span>
            </h2>
            <YieldSection />
          </div>
          <div className="flex-1 flex flex-col gap-5 sm:gap-6">
            <div className="flex-1 flex flex-col gap-2">
              <div className="mt-auto">
                <LiveAnchorMarkets
                  markets={liveAnchorMarkets}
                  isLoading={isLoading}
                  hasError={loadError}
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-3 md:gap-4">
              <a
                href="https://docs.harborfinance.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[140px] sm:w-[150px] md:w-[160px] lg:w-[170px] flex-shrink-0 px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 text-[10px] sm:text-xs md:text-sm font-semibold bg-white text-nautical-blue border border-white rounded-full hover:bg-white/90 transition-colors text-center whitespace-nowrap"
              >
                Learn more
              </a>
              <a
                href="https://app.harborfinance.io/anchor"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[140px] sm:w-[150px] md:w-[160px] lg:w-[170px] flex-shrink-0 px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 text-[10px] sm:text-xs md:text-sm font-semibold border border-white text-white rounded-full hover:bg-white/10 transition-colors whitespace-nowrap text-center"
              >
                Earn
              </a>
            </div>
          </div>
        </div>

        {/* Stress Free Leverage */}
        <div className="flex-1 bg-white p-6 sm:p-10 md:p-12 lg:p-14 flex flex-col xl:flex-row gap-6">
          <div className="xl:w-[38%] flex flex-col justify-center gap-4">
            <h2 className="leading-none text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold text-nautical-blue tracking-tight">
              <span className="block whitespace-nowrap">Stress</span>
              <span className="block whitespace-nowrap">Free</span>
              <span className="block whitespace-nowrap">Leverage</span>
            </h2>
            <RebalanceSection />
          </div>
          <div className="flex-1 flex flex-col gap-5 sm:gap-6">
            <div className="flex-1 flex flex-col gap-2">
              <div className="mt-auto">
                <LiveSailMarkets
                  markets={sailMarkets}
                  isLoading={isLoading}
                  hasError={loadError}
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-3 md:gap-4">
              <a
                href="https://docs.harborfinance.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[140px] sm:w-[150px] md:w-[160px] lg:w-[170px] flex-shrink-0 px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 text-[10px] sm:text-xs md:text-sm font-semibold bg-nautical-blue text-white border border-nautical-blue rounded-full hover:bg-nautical-blue/90 transition-colors text-center whitespace-nowrap"
              >
                Learn more
              </a>
              <a
                href="https://app.harborfinance.io/sail"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[140px] sm:w-[150px] md:w-[160px] lg:w-[170px] flex-shrink-0 px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 text-[10px] sm:text-xs md:text-sm font-semibold border border-nautical-blue text-nautical-blue rounded-full hover:bg-nautical-blue/10 transition-colors whitespace-nowrap text-center"
              >
                Trade
              </a>
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
    <div className="space-y-2">
      <div className="flex items-start gap-3">
        <div className="w-6 h-6 bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
          <Anchor className="w-3.5 h-3.5 text-nautical-blue" />
        </div>
        <p className="text-white text-xs sm:text-sm">
          Pegged to assets like ETH, BTC and more
        </p>
      </div>
      <div className="flex items-start gap-3">
        <div className="w-6 h-6 bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
          <TrendingUp className="w-3.5 h-3.5 text-nautical-blue" />
        </div>
        <p className="text-white text-xs sm:text-sm">
          Earn yield from collateral and protocol trading fees
        </p>
      </div>
      <div className="flex items-start gap-3">
        <div className="w-6 h-6 bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
          <RotateCw className="w-3.5 h-3.5 text-nautical-blue" />
        </div>
        <p className="text-white text-xs sm:text-sm">Redeemable any time</p>
      </div>
    </div>
  );
}

function RebalanceSection() {
  return (
    <div className="space-y-2">
      <div className="flex items-start gap-3">
        <div className="w-6 h-6 bg-nautical-blue flex items-center justify-center flex-shrink-0 mt-0.5">
          <Coins className="w-3.5 h-3.5 text-white" />
        </div>
        <p className="text-nautical-blue text-xs sm:text-sm">
          Composable: Use in defi
        </p>
      </div>
      <div className="flex items-start gap-3">
        <div className="w-6 h-6 bg-nautical-blue flex items-center justify-center flex-shrink-0 mt-0.5">
          <RotateCw className="w-3.5 h-3.5 text-white" />
        </div>
        <p className="text-nautical-blue text-xs sm:text-sm">
          Fee-free, automatic rebalancing
        </p>
      </div>
      <div className="flex items-start gap-3">
        <div className="w-6 h-6 bg-nautical-blue flex items-center justify-center flex-shrink-0 mt-0.5">
          <DollarSign className="w-3.5 h-3.5 text-white" />
        </div>
        <p className="text-nautical-blue text-xs sm:text-sm">
          No funding fees
        </p>
      </div>
    </div>
  );
}

function LiveAnchorMarkets({
  markets,
  isLoading,
  hasError,
}: {
  markets: AnchorMarket[];
  isLoading: boolean;
  hasError: boolean;
}) {
  const bestAprBySymbol = markets.reduce<Record<string, AnchorMarket>>(
    (acc, market) => {
      const current = acc[market.symbol];
      if (!current || Number(market.bestApr) > Number(current.bestApr)) {
        acc[market.symbol] = market;
      }
      return acc;
    },
    {}
  );
  const uniqueMarkets = Object.values(bestAprBySymbol);

  return (
    <div className="mt-2 border border-white/10 bg-white/5 px-4 py-3">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.35em] text-white/60">
          Live Anchor Markets
        </p>
        <Chip>Live</Chip>
      </div>
      <div className="mt-3 space-y-2">
        {isLoading && (
          <p className="text-xs text-white/70">Loading live APRs...</p>
        )}
        {!isLoading && hasError && (
          <p className="text-xs text-white/70">
            Live APRs unavailable right now.
          </p>
        )}
        {!isLoading && !hasError && uniqueMarkets.length === 0 && (
          <p className="text-xs text-white/70">
            No live Anchor markets yet.
          </p>
        )}
        {!isLoading &&
          !hasError &&
          uniqueMarkets.map((market) => (
            <div
              key={market.symbol}
              className="flex items-center justify-between gap-3 border border-white/10 bg-white/5 px-3 py-2"
            >
              <div>
                <p className="text-sm text-white font-semibold">
                  {market.symbol}
                </p>
              </div>
              <div className="text-right">
                {Number(market.bestApr) > 0 ? (
                  <p className="text-base font-semibold text-white">
                    <span className="text-xs font-medium text-white/60">
                      Up to{" "}
                    </span>
                    {Number(market.bestApr).toFixed(2)}%{" "}
                    <span className="text-xs font-medium text-white/60">
                      APR
                    </span>
                  </p>
                ) : (
                  <p className="text-xs font-semibold text-white">
                    Pre-deposits live
                  </p>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

function LiveSailMarkets({
  markets,
  isLoading,
  hasError,
}: {
  markets: SailMarket[];
  isLoading: boolean;
  hasError: boolean;
}) {
  return (
    <div className="mt-2 border border-nautical-blue/10 bg-nautical-blue/5 px-4 py-3">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.35em] text-nautical-blue/60">
          Live Sail Markets
        </p>
        <span className="inline-flex items-center uppercase tracking-wider text-[10px] text-nautical-blue border border-nautical-blue/30 bg-white px-2.5 py-0.5 rounded-full">
          Live
        </span>
      </div>
      <div className="mt-3 space-y-2">
        {isLoading && (
          <p className="text-xs text-nautical-blue/70">
            Loading live leverage...
          </p>
        )}
        {!isLoading && hasError && (
          <p className="text-xs text-nautical-blue/70">
            Live leverage unavailable right now.
          </p>
        )}
        {!isLoading && !hasError && markets.length === 0 && (
          <p className="text-xs text-nautical-blue/70">
            No live Sail markets yet.
          </p>
        )}
        {!isLoading && !hasError && markets.length > 0 && (
          <div className="space-y-2">
            {markets.map((market) => (
              <div
                key={market.marketId}
                className="flex items-center justify-between gap-3 border border-nautical-blue/10 bg-white px-3 py-2"
              >
                <div>
                  <p className="text-sm text-nautical-blue font-semibold">
                    Long {market.longSide.toUpperCase()} vs{" "}
                    {market.shortSide.toUpperCase()}
                  </p>
                </div>
                <div className="text-right">
                  {Number(market.leverageRatio) >= 20 ? (
                    <p className="text-xs font-semibold text-nautical-blue">
                      Pre-deposits live
                    </p>
                  ) : (
                    <p className="text-base font-semibold text-nautical-blue">
                      <span className="text-xs font-medium text-nautical-blue/60">
                        v.leverage{" "}
                      </span>
                      {Number(market.leverageRatio).toFixed(2)}x
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
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
