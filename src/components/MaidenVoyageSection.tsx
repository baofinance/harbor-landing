"use client";

import Link from "next/link";
import { ArrowDownToLine, Gift, Trophy } from "lucide-react";

export default function MaidenVoyageSection() {
  return (
    <section
      id="maiden-voyage"
      className="relative z-10 bg-nautical-blue-light px-2 sm:px-3 pb-2 sm:pb-3 pt-0"
    >
      <div className="flex flex-col lg:flex-row gap-2 sm:gap-3 items-stretch">
        {/* Left: Maiden Voyage Content */}
        <div className="lg:w-2/3 bg-[#E67A68] p-6 sm:p-10 md:p-12 lg:p-14">
          <div className="flex flex-row gap-1.5 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-10 h-full">
            <div className="w-5/12 flex flex-col justify-center text-left min-w-0">
              <h2 className="leading-none text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold text-white tracking-tight">
                <span className="block whitespace-nowrap">Maiden</span>
                <span className="block whitespace-nowrap">Voyage</span>
              </h2>
            </div>

            <div className="w-7/12 flex flex-col justify-center text-left gap-4 sm:gap-5 md:gap-6 pl-1.5 sm:pl-2 md:pl-4 lg:pl-6 xl:pl-10 min-w-0">
              <div className="space-y-4">
                <p className="text-white text-sm sm:text-base">
                  We will launch with 3 markets. Pre-deposits will open before
                  launch to provide liquidity for their maiden voyage.
                </p>

                <p className="text-white text-sm sm:text-base">
                  To find out more, read the maiden voyage page in the docs, or
                  ask questions on discord
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                <a
                  href="https://docs.harbor.finance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold bg-white text-nautical-blue border-2 border-white rounded-full hover:bg-white/90 transition-colors text-center"
                >
                  Learn more
                </a>
                <Link
                  href="https://discord.com/invite/BW3P62vJXT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full sm:w-auto px-8 py-3.5 text-base font-semibold border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors text-center"
                >
                  Discord
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right: How it works */}
        <div className="lg:w-1/3 bg-white p-6 sm:p-10 md:p-12 lg:p-14">
          <div className="flex flex-col justify-center h-full">
            <h3 className="text-lg sm:text-xl font-bold text-nautical-blue mb-6">
              How it works:
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#FF8A7A] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ArrowDownToLine className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-nautical-blue text-sm sm:text-base">
                    Deposit fxSAVE or wstETH
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#FF8A7A] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Gift className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-nautical-blue text-sm sm:text-base">
                    At launch you receive ha & hs tokens equal in value to your
                    deposit
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#FF8A7A] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Trophy className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-nautical-blue text-sm sm:text-base">
                    Qualify for a TIDE airdrop
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
