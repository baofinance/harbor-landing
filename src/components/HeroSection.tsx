"use client";

import Link from "next/link";
import Plasma from "./Plasma";

export default function HeroSection() {
  return (
    <>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ width: "100%", height: "600px" }}
      >
        <Plasma
          color="#4C19F5"
          speed={1}
          direction="forward"
          scale={1}
          opacity={1}
          mouseInteractive={false}
        />
      </div>
      <section className="relative flex items-center justify-center py-20 sm:py-28 overflow-hidden mb-5">
        <div className="text-center relative z-10 mx-auto max-w-[1100px] px-6">
          <div className="relative inline-flex flex-col items-center mx-auto rounded-3xl px-6 sm:px-8 py-6 sm:py-8]">
            <div className="inline-block mb-3 sm:mb-4 animate-[fadeUp_800ms_ease_forwards] opacity-0">
              <div className="relative px-4 py-2 mt-12">
                <div className="flex items-center justify-center gap-3 sm:gap-4">
                  <span className="inline-flex items-center bg-indigo-500/10 px-2.5 py-1 text-[10px] sm:text-xs rounded-full font-medium text-indigo-300 ring-1 ring-inset ring-indigo-500/20">
                    Genesis
                  </span>
                  <p className="text-[11px] sm:text-sm text-white/80">
                    <span className="font-semibold">
                      Airdrop for genesis depositors coming soon.
                    </span>
                    <span className="hidden sm:inline-block ml-2">
                      Follow for updates.
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="relative inline-block">
              <h1 className="text-3xl sm:text-4xl md:text-5xl uppercase font-semibold tracking-wide text-indigo-300 drop-shadow-[0_0_12px_rgba(99,102,241,0.35)]">
                Supercharge Your Crypto Yield
              </h1>
              <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-indigo-400/20 via-sky-300/15 to-indigo-400/20 blur-3xl pulse-glow" />
            </div>
            <p className="mt-3 text-sm sm:text-base text-white/80 max-w-2xl mx-auto animate-[fadeUp_800ms_ease_250ms_forwards] opacity-0">
              Harbor offers protected leverage tokens and high-yield stability
              pools for decentralized, sustainable returns.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-[fadeUp_800ms_ease_250ms_forwards] opacity-0">
              <Link
                href="https://twitter.com/harborfi"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 text-[13px] sm:text-sm font-bold uppercase bg-indigo-500/90 hover:bg-indigo-500 text-black transition-all duration-300 rounded-full"
              >
                Follow on X
              </Link>
              <Link
                href="https://discord.com/invite/BW3P62vJXT"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 text-[13px] sm:text-sm font-bold uppercase bg-zinc-900/50 outline outline-1 outline-indigo-500/30 text-indigo-300/80 hover:text-indigo-300 hover:outline-indigo-500/50 transition-all duration-300 rounded-full"
              >
                Join Discord
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
