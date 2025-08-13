"use client";
import Image from "next/image";

const useCases = [
  {
    title: "Weather Derivatives",
    description:
      "Farmers hedge against drought or rainfall; insurers offer coverage without centralized providers.",
    icon: "/weather.svg",
  },
  {
    title: "Carbon Credit & ESG Tokens",
    description:
      "Offset carbon exposure via DeFi, incentivizing green initiatives.",
    icon: "/content.svg",
  },
  {
    title: "Equity Indices",
    description: "Gain exposure to equities without leaving crypto ecosystems.",
    icon: "/file.svg",
  },
  {
    title: "Individual Stock Tokens",
    description:
      "Access popular stocks globally, even in restricted jurisdictions.",
    icon: "/rocket.svg",
  },
  {
    title: "Athlete Performance",
    description:
      "Fans gain exposure to athlete performance, boosting engagement.",
    icon: "/social.svg",
  },
  {
    title: "Music & Royalties",
    description: "Artists tokenize future royalties for direct fan investment.",
    icon: "/content.svg",
  },
  {
    title: "Inflation & CPI",
    description: "Hedge inflation risk on-chain to protect purchasing power.",
    icon: "/pricefeed.svg",
  },
  {
    title: "GDP Growth",
    description: "Hedge or speculate on economic growth data.",
    icon: "/funding.svg",
  },
  {
    title: "AI Performance",
    description: "Gain exposure to AI advancements, rewarding R&D success.",
    icon: "/automated.svg",
  },
  {
    title: "Crypto Adoption",
    description: "Speculate on adoption growth without single-asset risk.",
    icon: "/community.svg",
  },
  {
    title: "Precious Metals",
    description:
      "Hedge/store value with fully backed crypto-collateral markets.",
    icon: "/collateral.svg",
  },
  {
    title: "Energy Commodities",
    description: "Hedge energy exposure via DeFi.",
    icon: "/leverage.svg",
  },
  {
    title: "FX Pegged Tokens",
    description: "Decentralized FX markets, 24/7.",
    icon: "/globe.svg",
  },
  {
    title: "EM Currencies",
    description: "Manage risk on volatile emerging market currencies.",
    icon: "/institution.svg",
  },
  {
    title: "ETH Gas Tokens",
    description: "Hedge transaction fee exposure or speculate on congestion.",
    icon: "/yield.svg",
  },
  {
    title: "NFT Floor Tokens",
    description: "Speculate or hedge NFT floors without direct holdings.",
    icon: "/art.svg",
  },
];

export default function UseCasesSection() {
  return (
    <section className="relative z-10">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-10 py-20">
        {/* Header */}
        <div className="bg-zinc-900/50 outline outline-1 outline-white/10 p-6 mb-6 text-center reveal">
          <h2 className="text-2xl md:text-3xl font-geo uppercase tracking-wider text-white">
            Use Cases
          </h2>
          <p className="mt-2 text-white/70 max-w-[72ch] mx-auto">
            Examples of markets and assets that can be built with Zhenglong.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {useCases.map((c, idx) => (
            <div
              key={c.title}
              className={`bg-zinc-900/50 outline outline-1 outline-white/10 p-4 card-hover reveal ${
                idx % 4 === 0
                  ? "reveal-del-1"
                  : idx % 4 === 1
                  ? "reveal-del-2"
                  : idx % 4 === 2
                  ? "reveal-del-3"
                  : "reveal-del-4"
              }`}
            >
              <div className="flex items-start gap-3">
                <Image src={c.icon} alt={c.title} width={20} height={20} />
                <div>
                  <h3 className="text-sm text-white font-medium">{c.title}</h3>
                  <p className="text-xs text-white/70">{c.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer copy */}
        <div className="mt-6 bg-zinc-900/50 outline outline-1 outline-white/10 p-6 text-center reveal">
          <p className="text-white/70 max-w-[72ch] mx-auto text-sm">
            As long as there is reliable price data and market demand, Zhenglong
            can tokenize it.
          </p>
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
          animation-delay: 60ms;
        }
        .reveal-del-2 {
          animation-delay: 120ms;
        }
        .reveal-del-3 {
          animation-delay: 180ms;
        }
        .reveal-del-4 {
          animation-delay: 240ms;
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
