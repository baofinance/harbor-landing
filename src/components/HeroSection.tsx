"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { PortholeDecoration } from "./Porthole";

export default function HeroSection() {
  return (
    <>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/HeroBG.jpeg')",
        }}
      />

      {/* Dark overlay to soften brightness */}
      <div className="absolute inset-0 bg-[rgba(15,36,63,0.55)]" />

      <section className="hero-section relative h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 max-w-[1400px] w-full px-4 sm:px-8 lg:px-14 translate-y-4 sm:translate-y-6 md:translate-y-8 lg:translate-y-10 text-center">
          <div className="inline-flex flex-col items-center px-2 sm:px-6 py-4 sm:py-6 md:py-8">
            <div className="relative">
              <h1 className="text-[1.75rem] sm:text-[2.25rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem] 2xl:text-[5.5rem] font-bold tracking-tight text-harbor-white drop-shadow-[0_35px_90px_rgba(5,18,38,0.75)] leading-tight">
                <span className="block whitespace-nowrap">
                  A Safer Harbor For Leverage,
                </span>
                <span className="block whitespace-nowrap">
                  Uncharted Waters For Yield.
                </span>
              </h1>
              <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-nautical-blue/30 to-transparent blur-3xl" />
            </div>

            {/* Launch Announcement */}
            <div className="mt-8 sm:mt-10 md:mt-12 space-y-3 sm:space-y-4">
              <div className="inline-block px-4 py-2 bg-sunrise-coral border-2 border-sunrise-coral rounded-full">
                <p className="text-xs sm:text-sm md:text-base text-white font-semibold text-center">
                  Maiden voyage coming soon: Participate to qualify for a TIDE
                  airdrop. Follow for updates
                </p>
              </div>
              <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <a
                  href="https://docs.harbor.finance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold bg-white text-nautical-blue border-2 border-white rounded-full hover:bg-white/90 transition-colors text-center"
                >
                  Learn more
                </a>
                <a
                  href="https://twitter.com/harborfi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors text-center"
                >
                  Follow on X
                </a>
                <a
                  href="https://discord.com/invite/BW3P62vJXT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors text-center"
                >
                  Follow on Discord
                </a>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
          aria-label="Scroll for more"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-harbor-white/70 hover:text-harbor-white transition-colors"
        >
          <ChevronDown className="w-5 h-5 animate-bounce" />
          <span className="mt-1 text-xs">Scroll for more</span>
        </button>
      </section>
    </>
  );
}
