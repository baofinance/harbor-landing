"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowDownToLine, Gift, Trophy } from "lucide-react";

type MaidenVoyageMarket = {
  marketId: string;
  name: string;
  symbol: string;
  collateralSymbol: string;
  projectedApr: number;
  longSide: string;
  shortSide: string;
  phase?: string;
};

type MaidenVoyageGroup = {
  title: string;
  markets: MaidenVoyageMarket[];
};

type LandingSummaryResponse = {
  maidenVoyages?: MaidenVoyageGroup[];
};

const LANDING_SUMMARY_URL = "/api/landing/summary";

export default function MaidenVoyageSection() {
  const [maidenVoyages, setMaidenVoyages] = useState<MaidenVoyageGroup[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    let retryTimeout: ReturnType<typeof setTimeout> | null = null;

    const loadSummary = async (attempt = 0) => {
      try {
        setIsLoading(true);
        setLoadError(false);
        const response = await fetch(LANDING_SUMMARY_URL, {
          headers: { Accept: "application/json" },
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error(`Landing summary request failed: ${response.status}`);
        }

        const data = (await response.json()) as LandingSummaryResponse;

        if (!isMounted) return;

        setMaidenVoyages(Array.isArray(data.maidenVoyages) ? data.maidenVoyages : []);
      } catch (error) {
        if (isMounted) {
          if (attempt < 2) {
            retryTimeout = setTimeout(() => {
              loadSummary(attempt + 1);
            }, 600);
            return;
          }
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
      if (retryTimeout) {
        clearTimeout(retryTimeout);
      }
    };
  }, []);

  return (
    <section
      id="maiden-voyage"
      className="relative z-10 bg-nautical-blue-light px-3 sm:px-4 md:px-5 pb-3 sm:pb-4 md:pb-5 pt-0"
    >
      <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 md:gap-5 items-stretch">
        {/* Left: Maiden Voyage Content */}
        <div className="lg:w-2/3 bg-[#E67A68] p-6 sm:p-10 md:p-12 lg:p-14">
          <div className="flex flex-col gap-6 h-full">
            <div className="flex flex-col text-left min-w-0">
              <h2 className="leading-none text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold text-white tracking-tight whitespace-nowrap">
                Maiden Voyage
              </h2>
              <div className="space-y-4 mt-4">
                <p className="text-white text-sm sm:text-base">
                  Earn 10x Marks per dollar per day, plus 100 Marks bonus per $ deposited at the end of maiden voyage. Early depositors get an additional 100 Marks/$ bonus.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-2 md:gap-3 lg:gap-4 min-w-0 mt-6">
                <a
                  href="https://app.harborfinance.io/genesis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[140px] sm:w-[150px] md:w-[160px] lg:w-[170px] flex-shrink-0 px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 text-[10px] sm:text-xs md:text-sm font-semibold bg-white text-nautical-blue border border-white rounded-full hover:bg-white/90 transition-colors text-center whitespace-nowrap"
                >
                  Launch App
                </a>
                <Link
                  href="https://docs.harborfinance.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-[140px] sm:w-[150px] md:w-[160px] lg:w-[170px] flex-shrink-0 px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 text-[10px] sm:text-xs md:text-sm font-semibold border border-white text-white rounded-full hover:bg-white/10 transition-colors text-center whitespace-nowrap"
                >
                  Learn more
                </Link>
              </div>
            </div>

            <LiveMaidenVoyageMarkets
              voyages={maidenVoyages}
              isLoading={isLoading}
              hasError={loadError}
            />
          </div>
        </div>

        {/* Right: How it works */}
        <div className="lg:w-1/3 bg-white p-6 sm:p-10 md:p-12 lg:p-14">
          <div className="flex flex-col justify-center h-full">
            <h3 className="text-lg sm:text-xl font-bold text-nautical-blue mb-4">
              How it works:
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#FF8A7A] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ArrowDownToLine className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-nautical-blue text-sm sm:text-base">
                    Deposit any token via ParaSwap
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#FF8A7A] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Gift className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-nautical-blue text-sm sm:text-base">
                    Earn Ledger Marks
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#FF8A7A] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Trophy className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-nautical-blue text-sm sm:text-base">
                    After maiden voyage: claim ha & hs tokens and earn real yield
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LiveMaidenVoyageMarkets({
  voyages,
  isLoading,
  hasError,
}: {
  voyages: MaidenVoyageGroup[];
  isLoading: boolean;
  hasError: boolean;
}) {
  const allMarkets = voyages.flatMap((voyage) =>
    voyage.markets.map((market) => ({
      ...market,
      voyageTitle: voyage.title,
    }))
  );

  const liveMarkets = allMarkets.filter((market) => market.phase === "live");
  const plannedMarkets = allMarkets.filter((market) => market.phase !== "live");

  const renderMarketRow = (market: MaidenVoyageMarket & { voyageTitle: string }) => (
    <div
      key={market.marketId}
      className="border border-nautical-blue/10 bg-white px-3 py-2"
    >
      <div className="flex items-center justify-between gap-3 text-sm text-nautical-blue">
        <span className="text-xs uppercase tracking-[0.25em] text-nautical-blue/60">
          Deposit{" "}
          <span className="font-semibold text-sm tracking-normal text-nautical-blue">
            {market.collateralSymbol}
          </span>
        </span>
        <span className="flex flex-wrap items-center gap-2">
          <span className="text-xs uppercase tracking-[0.25em] text-nautical-blue/60">
            Get{" "}
            <span className="font-semibold text-sm tracking-normal text-nautical-blue">
              {market.symbol}
            </span>
          </span>
          <span className="text-nautical-blue/50">+</span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-nautical-blue/70">
            Long {market.longSide} / Short {market.shortSide}
          </span>
        </span>
        <span className="flex items-center gap-1 font-semibold text-nautical-blue">
          Earn Ledger Marks
          <img src="/marks.png" alt="Marks" className="w-4 h-4" />
        </span>
      </div>
    </div>
  );

  return (
    <div className="border border-nautical-blue/10 bg-nautical-blue/5 px-4 py-3">
      <div className="space-y-4">
        {isLoading && (
          <p className="text-xs text-nautical-blue/70">
            Loading maiden voyage markets...
          </p>
        )}
        {!isLoading && hasError && (
          <p className="text-xs text-nautical-blue/70">
            Maiden voyage markets unavailable right now.
          </p>
        )}
        {!isLoading && !hasError && allMarkets.length === 0 && (
          <p className="text-xs text-nautical-blue/70">
            No maiden voyage markets yet.
          </p>
        )}
        {!isLoading && !hasError && liveMarkets.length > 0 && (
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-nautical-blue/60">
              Live
            </p>
            <div className="space-y-2">
              {liveMarkets.map((market) => renderMarketRow(market))}
            </div>
          </div>
        )}
        {!isLoading && !hasError && plannedMarkets.length > 0 && (
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-nautical-blue/60">
              Coming soon
            </p>
            <div className="space-y-2">
              {plannedMarkets.map((market) => renderMarketRow(market))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
