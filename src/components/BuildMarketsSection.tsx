"use client";

import { ArrowDown, ArrowRight, Coins, LineChart } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const MARKET_OUTPUTS = [
  { label: "haUSD", subtitle: "Stable token" },
  { label: "hsETHUSD", subtitle: "Leveraged token" },
  { label: "Yield", subtitle: "Collateral + fees" },
  { label: "Revenue", subtitle: "Funds incentives and TIDE" },
];

const MARKET_EXAMPLES = [
  "wstETH + USD → haUSD + hsETHUSD",
  "BTC + USD → haUSD + hsBTCUSD",
  "wstETH + GOLD → haGOLD + hsETHGOLD",
  "ETH + EUR → haEUR + hsETHEUR",
];

function InputCard({
  label,
  example,
  description,
  icon: Icon,
}: {
  label: string;
  example: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <div className="flex min-w-0 flex-col gap-3 border border-nautical-blue/10 bg-nautical-blue/5 px-4 py-5 sm:px-5 sm:py-6">
      <div className="flex h-10 w-10 items-center justify-center bg-[#FF8A7A] text-white">
        <Icon className="h-4 w-4" strokeWidth={2.25} />
      </div>
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-nautical-blue/45">
          {label}
        </p>
        <p className="mt-1 text-lg font-semibold text-nautical-blue sm:text-xl">
          {example}
        </p>
        <p className="mt-1.5 text-xs leading-relaxed text-nautical-blue/65 sm:text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}

function OutputTile({
  label,
  subtitle,
}: {
  label: string;
  subtitle: string;
}) {
  return (
    <div className="border border-white/15 bg-white/10 px-3 py-3 sm:px-4 sm:py-4">
      <p className="text-sm font-semibold text-white sm:text-base">{label}</p>
      <p className="mt-1 text-xs text-white/75 sm:text-sm">{subtitle}</p>
    </div>
  );
}

export default function BuildMarketsSection() {
  return (
    <section
      id="harbor-markets"
      className="relative z-10 bg-nautical-blue-light px-3 sm:px-4 md:px-5 pb-3 sm:pb-4 md:pb-5 pt-0"
    >
      <div className="bg-white px-6 py-10 sm:px-10 sm:py-14 md:px-12 md:py-16 lg:px-14 lg:py-20">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 lg:gap-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-nautical-blue/50">
              Harbor Markets
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-nautical-blue sm:text-3xl md:text-4xl">
              Build Any Financial Market.
            </h2>
            <p className="mt-3 text-sm text-nautical-blue/70 sm:text-base">
              Every Harbor market combines collateral with a price feed to
              create new tokens, trading opportunities, yield, and revenue.
            </p>
          </div>

          <div className="mx-auto flex w-full max-w-4xl flex-col gap-4 md:flex-row md:items-stretch md:gap-5">
            <div className="flex min-w-0 flex-col gap-3 md:w-[38%] lg:w-[34%]">
              <InputCard
                label="Collateral"
                example="wstETH"
                description="Productive asset backing the market"
                icon={Coins}
              />
              <p
                className="text-center text-2xl font-semibold text-sunrise-coral"
                aria-hidden="true"
              >
                +
              </p>
              <InputCard
                label="Price Feed"
                example="USD"
                description="The asset the market tracks"
                icon={LineChart}
              />
            </div>

            <div className="flex items-center justify-center md:w-8 lg:w-10">
              <ArrowDown
                className="h-6 w-6 text-nautical-blue/40 md:hidden"
                strokeWidth={2.25}
                aria-hidden="true"
              />
              <ArrowRight
                className="hidden h-6 w-6 text-nautical-blue/40 md:block"
                strokeWidth={2.25}
                aria-hidden="true"
              />
            </div>

            <div className="flex min-w-0 flex-1 flex-col border border-nautical-blue/20 bg-nautical-blue p-5 sm:p-6 md:p-8">
              <p className="text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-white/60">
                Harbor Market
              </p>
              <div className="mt-4 grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                {MARKET_OUTPUTS.map((output) => (
                  <OutputTile
                    key={output.label}
                    label={output.label}
                    subtitle={output.subtitle}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex w-full max-w-4xl flex-wrap justify-center gap-2 sm:gap-3">
              {MARKET_EXAMPLES.map((example) => (
                <div
                  key={example}
                  className="border border-nautical-blue/10 bg-nautical-blue/5 px-3 py-2 text-center text-[11px] font-medium text-nautical-blue sm:px-4 sm:text-xs"
                >
                  {example}
                </div>
              ))}
            </div>
            <p className="max-w-2xl text-center text-sm text-nautical-blue/70 sm:text-base">
              If a reliable price feed exists, Harbor can create a market around
              it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
