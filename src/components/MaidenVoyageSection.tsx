"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowDownToLine, Gift, Trophy } from "lucide-react";
import { getPreDepositMarketIds } from "@/lib/landingMarkets";

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

type AnchorMarket = {
  marketId: string;
  bestApr: number;
};

type SailMarket = {
  marketId: string;
  leverageRatio?: number | null;
};

type LandingSummaryResponse = {
  maidenVoyages?: MaidenVoyageGroup[];
  anchorMarkets?: AnchorMarket[];
  sailMarkets?: SailMarket[];
};

const LANDING_SUMMARY_URL = "/api/landing/summary";

export default function MaidenVoyageSection() {
  const [maidenVoyages, setMaidenVoyages] = useState<MaidenVoyageGroup[]>([]);
  const [anchorMarkets, setAnchorMarkets] = useState<AnchorMarket[]>([]);
  const [sailMarkets, setSailMarkets] = useState<SailMarket[]>([]);
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

        setMaidenVoyages(
          Array.isArray(data.maidenVoyages) ? data.maidenVoyages : []
        );
        setAnchorMarkets(
          Array.isArray(data.anchorMarkets) ? data.anchorMarkets : []
        );
        setSailMarkets(Array.isArray(data.sailMarkets) ? data.sailMarkets : []);
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

  const visibleMaidenVoyages = useMemo(() => {
    const preDepositMarketIds = getPreDepositMarketIds(
      anchorMarkets,
      sailMarkets
    );

    return maidenVoyages
      .map((voyage) => ({
        ...voyage,
        markets: voyage.markets.filter(
          (market) => !preDepositMarketIds.has(market.marketId)
        ),
      }))
      .filter((voyage) => voyage.markets.length > 0);
  }, [anchorMarkets, maidenVoyages, sailMarkets]);

  const hasLiveMaidenVoyages = visibleMaidenVoyages.some((voyage) =>
    voyage.markets.some((market) => market.phase === "live")
  );
  const shouldShowMarketsPanel = isLoading || loadError || hasLiveMaidenVoyages;

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
                Maiden Voyages
              </h2>
              <div className="space-y-4 mt-4">
                <p className="text-white text-sm sm:text-base">
                  Each market begins with a Maiden Voyage. Deposit once during
                  launch to earn a share of market revenue for life.
                </p>
                <p className="text-white text-sm sm:text-base">
                  5% of market revenue is reserved for Maiden Voyage
                  participants, including all mint and redeem fees plus all
                  collateral yield.
                </p>
              </div>
              <div className="mt-4 border border-white/30 bg-white/10 p-3 sm:p-4">
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/80">
                  First relaunch voyage
                </p>
                <p className="mt-1 text-white text-base sm:text-lg font-semibold">
                  ETH vs USD
                </p>
                <p className="mt-1 text-white/90 text-xs sm:text-sm">
                  Earn yield on USD, get leveraged ETH exposure, and avoid
                  liquidations.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-2 md:gap-3 lg:gap-4 min-w-0 mt-6">
                <a
                  href="https://app.harborfinance.io/genesis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[140px] sm:w-[150px] md:w-[160px] lg:w-[170px] flex-shrink-0 px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 text-[10px] sm:text-xs md:text-sm font-semibold bg-white text-nautical-blue border border-white rounded-full hover:bg-white/90 transition-colors text-center whitespace-nowrap"
                >
                  Join First Voyage
                </a>
                <Link
                  href="https://docs.harborfinance.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-[140px] sm:w-[150px] md:w-[160px] lg:w-[170px] flex-shrink-0 px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 text-[10px] sm:text-xs md:text-sm font-semibold border border-white text-white rounded-full hover:bg-white/10 transition-colors text-center whitespace-nowrap"
                >
                  How it works
                </Link>
              </div>
            </div>

            {shouldShowMarketsPanel && (
              <div className="mt-4 pt-4 border-t border-white/25">
                <LiveMaidenVoyageMarkets
                  voyages={visibleMaidenVoyages}
                  isLoading={isLoading}
                  hasError={loadError}
                />
              </div>
            )}
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
                    Deposit once during Maiden Voyage
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#FF8A7A] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Gift className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-nautical-blue text-sm sm:text-base">
                    5% of market revenue is shared with voyage participants
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#FF8A7A] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Trophy className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-nautical-blue text-sm sm:text-base">
                    You keep lifetime participation even after withdrawing;
                    remaining deposits receive a yield-share boost
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
  const pageSize = 2;
  const [sectionIndex, setSectionIndex] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);

  const allMarkets = voyages.flatMap((voyage) =>
    voyage.markets.map((market) => ({
      ...market,
      voyageTitle: voyage.title,
    }))
  );

  const liveMarkets = allMarkets.filter((market) => market.phase === "live");
  const plannedMarkets = allMarkets.filter((market) => market.phase !== "live");
  const sections = [
    { id: "live", title: "Live", markets: liveMarkets },
    { id: "coming", title: "Coming soon", markets: plannedMarkets },
  ].filter((section) => section.markets.length > 0);

  const activeSection = sections[sectionIndex] ?? sections[0];
  const totalPages = activeSection
    ? Math.ceil(activeSection.markets.length / pageSize)
    : 0;

  useEffect(() => {
    if (!activeSection || totalPages <= 1) return;
    const interval = setInterval(() => {
      setPageIndex((prev) => (prev + 1) % totalPages);
    }, 7000);
    return () => clearInterval(interval);
  }, [activeSection, totalPages]);

  useEffect(() => {
    setPageIndex(0);
  }, [sectionIndex]);

  const pageStart = pageIndex * pageSize;
  const visibleMarkets = activeSection
    ? activeSection.markets.slice(pageStart, pageStart + pageSize)
    : [];

  const renderMarketRow = (market: MaidenVoyageMarket & { voyageTitle: string }) => (
    <div
      key={market.marketId}
      className="border border-nautical-blue/10 bg-white px-3 py-2"
    >
      <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.2fr)_minmax(0,0.9fr)] items-center gap-3 text-sm text-nautical-blue">
        <span className="text-[10px] uppercase tracking-[0.25em] text-nautical-blue/50">
          Deposit{" "}
          <span className="font-semibold text-sm tracking-normal text-nautical-blue">
            {market.collateralSymbol}
          </span>
        </span>
        <span className="text-[10px] uppercase tracking-[0.25em] text-nautical-blue/50">
          Get{" "}
          <span className="font-semibold text-sm tracking-normal text-nautical-blue">
            {market.symbol}
          </span>
        </span>
        <span className="flex items-center gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-nautical-blue/60">
            Long {market.longSide} / Short {market.shortSide}
          </span>
        </span>
        <span className="flex items-center gap-1 font-semibold text-nautical-blue justify-end">
          Lifetime yield share
        </span>
      </div>
    </div>
  );

  return (
    <div className="border border-nautical-blue/10 bg-nautical-blue/5 px-4 py-3">
      <div className="space-y-3">
        {isLoading && (
          <p className="text-xs text-nautical-blue/70">
            Loading Maiden Voyage markets...
          </p>
        )}
        {!isLoading && hasError && (
          <p className="text-xs text-nautical-blue/70">
            Maiden Voyage markets unavailable right now.
          </p>
        )}
        {!isLoading && !hasError && activeSection && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-nautical-blue/50">
                {activeSection.title}
              </p>
              {sections.length > 1 && (
                <div className="flex items-center gap-2">
                  {sections.map((section, index) => (
                    <button
                      key={`maiden-section-${section.id}`}
                      type="button"
                      aria-label={`Show ${section.title.toLowerCase()} markets`}
                      onClick={() => setSectionIndex(index)}
                      className={`h-2 w-2 rounded-full border transition-colors ${
                        index === sectionIndex
                          ? "border-nautical-blue bg-nautical-blue"
                          : "border-nautical-blue/40 bg-transparent hover:border-nautical-blue/70"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
            <div className="space-y-2">
              {visibleMarkets.map((market) => renderMarketRow(market))}
            </div>
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 pt-1">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={`maiden-page-${index}`}
                    type="button"
                    aria-label={`Show page ${index + 1}`}
                    onClick={() => setPageIndex(index)}
                    className={`h-2 w-2 rounded-full border transition-colors ${
                      index === pageIndex
                        ? "border-nautical-blue bg-nautical-blue"
                        : "border-nautical-blue/40 bg-transparent hover:border-nautical-blue/70"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
