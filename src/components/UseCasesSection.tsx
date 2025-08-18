"use client";
import { DollarSign, Cpu, LandPlot } from "lucide-react";

const useCaseCategories = [
  {
    title: "Real-World & Financial Assets",
    description: "Bridge traditional finance with DeFi by tokenizing real-world assets, enabling new forms of liquidity and investment.",
    icon: DollarSign,
    examples: [
        "Equity Indices & Stocks",
        "Precious Metals & Commodities",
        "Carbon Credits & ESG Tokens",
        "Foreign Exchange (FX) & EM Currencies"
    ]
  },
  {
    title: "Digital & Crypto-Native Markets",
    description: "Create decentralized markets for on-chain assets, hedging against volatility and speculating on ecosystem growth.",
    icon: Cpu,
    examples: [
        "NFT Floor Price Tokens",
        "ETH Gas Fee Derivatives",
        "Crypto Adoption Rate Indices",
        "Tokenized Royalties (Music, Art)"
    ]
  },
  {
    title: "Novel & Esoteric Data",
    description: "If there's a reliable data feed, it can be tokenized. Explore new frontiers of finance with verifiable, data-driven assets.",
    icon: LandPlot,
    examples: [
        "Weather & Climate Derivatives",
        "Athlete & Team Performance",
        "AI Model Performance",
        "Economic Data (Inflation, GDP)"
    ]
  },
];

export default function UseCasesSection() {
  return (
    <section className="relative z-10 bg-black border-y border-zinc-800/50">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-10 py-32">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-geo uppercase tracking-wider text-white">
                Infinite Markets, One Protocol
            </h2>
            <p className="mt-4 text-white/70 max-w-[72ch] mx-auto">
                Zhenglong can tokenize any real-world asset or data feed, opening up limitless possibilities for decentralized finance.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCaseCategories.map((category, idx) => (
            <div
              key={category.title}
              className="relative group h-full bg-zinc-900/50 outline outline-1 outline-emerald-500/10 p-8 hover:outline-emerald-500/30 transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-emerald-500/10 flex items-center justify-center ring-1 ring-emerald-500/20">
                    <category.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-wide">{category.title}</h3>
                </div>
                <p className="text-sm text-white/70 mb-6 flex-grow">
                  {category.description}
                </p>
                <div>
                    <h4 className="text-sm font-semibold text-white/90 mb-3">Examples:</h4>
                    <ul className="space-y-2">
                        {category.examples.map((example) => (
                            <li key={example} className="flex items-center gap-3 text-xs text-white/60">
                                <div className="w-1 h-1 bg-emerald-500/50" />
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
