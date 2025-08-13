"use client";
import Image from "next/image";
import ComingSoonOverlay from "./ComingSoonOverlay";

export default function StabilityPoolsSection() {
  return (
    <section className="relative z-10">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-10 py-20">
        {/* Header */}
        <div className="bg-zinc-900/50 outline outline-1 outline-white/10 p-6 mb-6 reveal text-center">
          <h2 className="text-2xl md:text-3xl font-geo uppercase tracking-wider text-white">
            Stability Pools
          </h2>
          <p className="mt-2 text-white/70 max-w-[72ch] mx-auto">
            Deposit into protocol stability pools to secure the market during
            stress and earn sustainable rewards.
          </p>
        </div>

        {/* Two-column content */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Market Solvency */}
          <div className="bg-zinc-900/50 outline outline-1 outline-white/10 p-6 flex flex-col gap-4 card-hover reveal">
            <h3 className="text-xl md:text-2xl font-geo uppercase tracking-wider text-white">
              Market Solvency
            </h3>
            <p className="text-white/70">
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

            <p className="text-white/60 italic">
              No margin calls, no liquidation cascades — purpose-built
              stability.
            </p>
          </div>

          {/* Yield Generation */}
          <div className="bg-zinc-900/50 outline outline-1 outline-white/10 p-6 flex flex-col gap-4 card-hover reveal reveal-del-1">
            <h3 className="text-xl md:text-2xl font-geo uppercase tracking-wider text-white">
              Yield Generation
            </h3>
            <p className="text-white/70">
              Depositors receive protocol rewards that compound stability with
              aligned incentives.
            </p>

            <div className="flex flex-col gap-4">
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

        {/* CTA */}
        <div className="text-center reveal">
          <ComingSoonOverlay className="inline-block">
            <button className="px-6 py-2 bg-zinc-900/50 outline outline-1 outline-white/10 text-white/70 hover:text-white transition-colors font-geo uppercase tracking-wider cursor-not-allowed card-hover">
              Explore Stability Pools
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
    <div className="flex items-start gap-3 bg-zinc-900/50 outline outline-1 outline-white/10 p-3 card-hover reveal">
      <Image src={icon} alt={title} width={20} height={20} />
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
      <div className="h-8 w-8 rounded-md bg-white/5 outline outline-1 outline-white/10 flex items-center justify-center">
        <Image src={icon} alt={title} width={16} height={16} />
      </div>
      <div>
        <p className="text-sm text-white font-medium">{title}</p>
        <p className="text-xs text-white/70">{desc}</p>
      </div>
    </div>
  );
}
