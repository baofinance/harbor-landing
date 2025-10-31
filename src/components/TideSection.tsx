"use client";

import { TrendingUp, Vault, Flame } from "lucide-react";

const tideFeatures = [
  {
    icon: TrendingUp,
    title: "Grow Protocol Owned Liquidity",
    desc: "Until the treasury owns 15% of the circulating supply in liquidity pools, TIDE will be purchased and added to protocol owned liquidity.",
  },
  {
    icon: Vault,
    title: "Maintain Treasury Warchest",
    desc: "If the treasury's ownership of the TIDE supply drops below 30%, TIDE will be purchased and added to the treasury.",
  },
  {
    icon: Flame,
    title: "Burn Supply",
    desc: "If the treasury owns enough protocol owned liquidity and has 30%+ of TIDE in its warchest, TIDE will be purchased and burned, increasing the claim on revenue for every remaining token.",
  },
];

export default function TideSection() {
  return (
    <section className="relative z-10 bg-nautical-blue-light px-3 sm:px-4 md:px-5 pb-3 sm:pb-4 md:pb-5 pt-0">
      <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 md:gap-5 items-stretch">
        {/* Left: TIDE Token Content */}
        <div className="lg:w-2/3 bg-nautical-blue p-6 sm:p-10 md:p-12 lg:p-14">
          <div className="flex flex-row gap-1.5 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-10 h-full">
            <div className="w-5/12 flex flex-col justify-center text-left min-w-0">
              <h2 className="leading-none text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold text-white tracking-tight">
                <span className="block whitespace-nowrap">TIDE</span>
                <span className="block whitespace-nowrap">Token</span>
              </h2>
            </div>

            <div className="w-7/12 flex flex-col justify-center text-left gap-4 sm:gap-5 md:gap-6 pl-1.5 sm:pl-2 md:pl-4 lg:pl-6 xl:pl-10 min-w-0">
              <p className="text-white text-sm sm:text-base">
                The TIDE token is Harbor's governance and value accrual token.
                Up to 25% of Harbor's revenue is used to buy TIDE from the open
                market.
              </p>
            </div>
          </div>
        </div>

        {/* Right: TIDE Features Stacked */}
        <div className="flex-1 flex flex-col gap-3 sm:gap-4 md:gap-5">
          {tideFeatures.map((feature) => (
            <div
              key={feature.title}
              className="bg-white border-4 border-white p-6 sm:p-10 md:p-12 lg:p-14 flex-1"
            >
              <div className="flex items-start gap-3 sm:gap-4 h-full">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FF8A7A] flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-nautical-blue font-semibold text-base sm:text-lg mb-1 sm:mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-nautical-blue/70 text-xs sm:text-sm">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

