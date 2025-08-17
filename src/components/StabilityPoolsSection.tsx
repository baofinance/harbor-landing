"use client";
import Image from "next/image";
import ComingSoonOverlay from "./ComingSoonOverlay";

export default function StabilityPoolsSection() {
  return (
    <section className="relative z-10">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-10 py-20">
        {/* Header with enhanced styling */}
        <div className="relative group mb-8 reveal text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-teal-500/5 to-emerald-600/10 blur-2xl rounded-2xl" />
          <div className="relative bg-zinc-900/50 outline outline-1 outline-emerald-500/20 p-6 hover:outline-emerald-500/40 transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-geo uppercase tracking-wider text-white">
              Stability Pools
            </h2>
            <p className="mt-2 text-white/70 max-w-[72ch] mx-auto">
              Deposit into protocol stability pools to secure the market during
              stress and earn sustainable rewards.
            </p>
          </div>
        </div>

        {/* Two-column content with enhanced styling */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Market Solvency */}
          <div className="relative group h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-teal-500/5 to-emerald-600/10 blur-2xl rounded-2xl" />
            <div className="relative bg-zinc-900/50 outline outline-1 outline-emerald-500/20 p-6 flex flex-col gap-4 card-hover reveal hover:outline-emerald-500/40 transition-all duration-300 h-full">
              <h3 className="text-xl md:text-2xl font-geo uppercase tracking-wider text-white">
                Market Solvency
              </h3>
              <p className="text-white/70 flex-grow">
                When a market approaches its minimum collateral ratio (e.g. 130%),
                stability pools step in to rebalance.
              </p>

              <div className="grid grid-cols-1 gap-3">
                <Tile
                  icon="/collateral.svg"
                  title="Controlled Redemption"
                  desc="Redeem collateral at market value when needed to restore ratios."
                />
                <Tile
                  icon="/leverage.svg"
                  title="Strategic Swaps"
                  desc="Swap to steamed tokens at market value during stability actions."
                />
                <Tile
                  icon="/peg.svg"
                  title="Raise Ratios"
                  desc="Actions are targeted to improve the overall collateral ratio."
                />
              </div>

              <p className="text-emerald-300/80 italic mt-auto pt-4">
                No margin calls, no liquidation cascades — purpose-built
                stability.
              </p>
            </div>
          </div>

          {/* Yield Generation */}
          <div className="relative group h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-teal-500/5 to-emerald-600/10 blur-2xl rounded-2xl" />
            <div className="relative bg-zinc-900/50 outline outline-1 outline-emerald-500/20 p-6 flex flex-col gap-4 card-hover reveal reveal-del-1 hover:outline-emerald-500/40 transition-all duration-300 h-full">
              <h3 className="text-xl md:text-2xl font-geo uppercase tracking-wider text-white">
                Yield Generation
              </h3>
              <p className="text-white/70 flex-grow">
                Depositors receive protocol rewards that compound stability with
                aligned incentives.
              </p>

              <div className="flex flex-col gap-4 mt-auto">
                <FeatureLine
                  icon="/stability.svg"
                  title="Collateral Yield"
                  desc="Earn from yield-bearing collateral (e.g. stETH) used by the protocol."
                />
                <FeatureLine
                  icon="/rocket.svg"
                  title="STEAM Rewards"
                  desc="Receive STEAM as additional incentives for participation."
                />
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced CTA */}
        <div className="text-center reveal">
          <ComingSoonOverlay className="inline-block">
            <button className="relative group px-6 py-2 bg-zinc-900/50 outline outline-1 outline-emerald-500/30 text-emerald-300/80 hover:text-emerald-300 hover:outline-emerald-500/50 transition-all duration-300 font-geo uppercase tracking-wider cursor-not-allowed card-hover">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 via-teal-500/3 to-emerald-600/5 blur-xl rounded-lg" />
              <span className="relative">Explore Stability Pools</span>
            </button>
          </ComingSoonOverlay>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .reveal {
          opacity: 0;
          animation: fadeUp 700ms ease forwards;
        }
        .reveal-del-1 {
          animation-delay: 120ms;
        }
        .card-hover {
          transition: transform 200ms ease, filter 200ms ease;
        }
        .card-hover:hover {
          transform: translateY(-2px);
          filter: brightness(1.05);
        }
      `}</style>
    </section>
  );
}

function Tile({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-3 bg-zinc-900/50 outline outline-1 outline-emerald-500/20 p-3 card-hover reveal hover:outline-emerald-500/40 transition-all duration-300">
      <div className="w-5 h-5 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
        <Image src={icon} alt={title} width={20} height={20} />
      </div>
      <div>
        <p className="text-sm text-white font-medium">{title}</p>
        <p className="text-xs text-white/70">{desc}</p>
      </div>
    </div>
  );
}

function FeatureLine({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="h-8 w-8 rounded-md bg-emerald-500/20 outline outline-1 outline-emerald-500/30 flex items-center justify-center flex-shrink-0">
        <Image src={icon} alt={title} width={16} height={16} />
      </div>
      <div>
        <p className="text-sm text-white font-medium">{title}</p>
        <p className="text-xs text-white/70">{desc}</p>
      </div>
    </div>
  );
}
