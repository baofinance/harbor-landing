"use client";

import { useEffect, useRef, useState } from "react";

const MARKET_EXAMPLES = [
  "ETH/USD",
  "BTC/USD",
  "Gold/USD",
  "EUR/USD",
  "Oil/USD",
  "S&P 500",
  "AI Index",
  "Weather",
  "Carbon Credits",
  "TSLA/USD",
  "Silver/USD",
  "MAG7",
  "Rainfall Index",
  "NFT Floor",
  "stETH/BTC",
  "PAXG/USD",
];

function ScrollingMarkets() {
  const items = [...MARKET_EXAMPLES, ...MARKET_EXAMPLES];

  return (
    <div className="relative h-full min-h-0 overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-8 bg-gradient-to-b from-white to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-8 bg-gradient-to-t from-white to-transparent" />

      <div className="market-scroll-track flex flex-col gap-3 py-3">
        {items.map((market, index) => (
          <div
            key={`${market}-${index}`}
            className="border-4 border-nautical-blue bg-white px-4 py-3 text-center"
          >
            <p className="text-base font-semibold text-nautical-blue sm:text-lg">
              {market}
            </p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .market-scroll-track {
          animation: market-scroll 28s linear infinite;
        }

        @keyframes market-scroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .market-scroll-track {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}

export default function UseCasesSection() {
  const marketsPanelRef = useRef<HTMLDivElement | null>(null);
  const [marketsPanelHeight, setMarketsPanelHeight] = useState<number | null>(
    null
  );

  useEffect(() => {
    const panel = marketsPanelRef.current;
    if (!panel) return;

    const updateHeight = () => {
      setMarketsPanelHeight(panel.getBoundingClientRect().height);
    };

    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(panel);

    window.addEventListener("resize", updateHeight);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <section className="relative z-10 bg-nautical-blue-light px-3 sm:px-4 md:px-5 pb-3 sm:pb-4 md:pb-5 pt-0">
      <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:flex-row lg:items-start">
        <div
          className="order-2 overflow-hidden bg-white lg:order-1 lg:w-1/3"
          style={
            marketsPanelHeight
              ? { height: `${marketsPanelHeight}px` }
              : undefined
          }
        >
          <ScrollingMarkets />
        </div>

        <div
          ref={marketsPanelRef}
          className="order-1 flex flex-col bg-nautical-blue p-6 sm:p-10 md:p-12 lg:order-2 lg:w-2/3 lg:p-14"
        >
          <div className="flex flex-row gap-1.5 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-10">
            <div className="flex w-6/12 min-w-0 flex-col justify-center gap-4 pr-1.5 text-left sm:gap-5 md:gap-6 sm:pr-2 md:pr-4 lg:pr-6 xl:pr-10">
              <div className="space-y-3">
                <p className="text-sm text-white sm:text-base">
                  Harbor can tokenize any real-world asset or data feed, opening
                  up limitless possibilities for new markets.
                </p>
                <p className="text-sm text-white sm:text-base">
                  Reach out to us to collaborate or integrate your token as
                  collateral.
                </p>
              </div>

              <div className="min-w-0">
                <a
                  href="https://discord.com/invite/BW3P62vJXT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-[140px] flex-shrink-0 whitespace-nowrap rounded-full border border-white px-2 py-2 text-center text-[10px] font-semibold text-white transition-colors hover:bg-white/10 sm:w-[150px] sm:px-3 sm:py-2.5 sm:text-xs md:w-[160px] md:px-4 md:text-sm lg:w-[170px]"
                >
                  Reach Out
                </a>
              </div>
            </div>

            <div className="flex w-6/12 min-w-0 flex-col justify-center pl-2 text-left sm:pl-3 md:pl-4 lg:pl-5">
              <h2 className="text-3xl font-bold leading-none tracking-tight text-white break-words sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl">
                Infinite Markets from any price feed.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
