"use client";
import { DollarSign, Cpu, LandPlot } from "lucide-react";

const useCaseCategories = [
  {
    title: "Real-World & Financial Assets",
    description:
      "Bridge traditional finance with DeFi by tokenizing real-world assets, enabling new forms of liquidity and investment.",
    icon: DollarSign,
    examples: [
      "Equity Indices & Stocks",
      "Precious Metals & Commodities",
      "Carbon Credits & ESG Tokens",
      "Foreign Exchange (FX) & EM Currencies",
    ],
  },
  {
    title: "Digital & Crypto-Native Markets",
    description:
      "Create decentralized markets for on-chain assets, hedging against volatility and speculating on ecosystem growth.",
    icon: Cpu,
    examples: [
      "NFT Floor Price Tokens",
      "ETH Gas Fee Derivatives",
      "Crypto Adoption Rate Indices",
      "Tokenized Royalties (Music, Art)",
    ],
  },
  {
    title: "Novel & Esoteric Data",
    description:
      "If there's a reliable data feed, it can be tokenized. Explore new frontiers of finance with verifiable, data-driven assets.",
    icon: LandPlot,
    examples: [
      "Weather & Climate Derivatives",
      "Athlete & Team Performance",
      "AI Model Performance",
      "Economic Data (Inflation, GDP)",
    ],
  },
];

export default function UseCasesSection() {
  return (
    <section className="relative z-10">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-10 py-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl uppercase tracking-wide font-semibold text-indigo-300 drop-shadow-[0_0_12px_rgba(99,102,241,0.35)]">
            Infinite Markets, One Protocol
          </h2>
          <div className="mx-auto mt-2 h-px w-20 bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
          <p className="mt-3 text-white/80 max-w-[72ch] mx-auto">
            Harbor can tokenize any real-world asset or data feed, opening up
            limitless possibilities for decentralized finance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCaseCategories.map((category) => (
            <div
              key={category.title}
              className="relative group h-full hover-lift"
            >
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-indigo-400/25 via-sky-300/15 to-indigo-400/25 blur-lg opacity-10 group-hover:opacity-25 transition duration-300" />
              <div className="relative bg-zinc-900/30 backdrop-blur-lg border border-indigo-500/20 rounded-2xl p-8 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center ring-1 ring-indigo-500/30">
                    <category.icon className="w-6 h-6 text-indigo-300" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    {category.title}
                  </h3>
                </div>
                <p className="text-sm text-white/80 mb-6 flex-grow">
                  {category.description}
                </p>
                <div>
                  <h4 className="text-sm font-semibold text-white/90 mb-3">
                    Examples:
                  </h4>
                  <ul className="space-y-2">
                    {category.examples.map((example) => (
                      <li
                        key={example}
                        className="flex items-center gap-3 text-xs text-white/70"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-300/90" />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
