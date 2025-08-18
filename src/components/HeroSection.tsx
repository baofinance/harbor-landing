"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="mx-auto max-w-[1000px] h-72 bg-gradient-to-r from-emerald-600/30 via-teal-500/20 to-emerald-600/30 blur-3xl" />
        <div className="absolute top-10 left-1/4 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl animate-[floatA_10s_ease-in-out_infinite] pulse" />
        <div className="absolute bottom-8 right-1/5 w-52 h-52 bg-teal-400/20 rounded-full blur-3xl animate-[floatB_12s_ease-in-out_infinite] pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-32 h-32 bg-white/8 rounded-full blur-3xl animate-[floatC_14s_ease-in-out_infinite]" />
        <div className="absolute top-20 right-1/3 w-24 h-24 bg-emerald-400/15 rounded-full blur-3xl animate-[floatD_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-teal-300/15 rounded-full blur-3xl animate-[floatE_9s_ease-in-out_infinite]" />
      </div>

      <div className="text-center relative z-10 mx-auto max-w-[1300px] px-6">
        <div className="inline-block mb-6 sm:mb-8 animate-[fadeUp_800ms_ease_forwards] opacity-0">
            <div className="relative bg-zinc-900/50 border border-zinc-800/50 rounded-full px-4 py-2">
                <div className="flex items-center justify-center gap-3 sm:gap-4">
                    <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
                    Coming Soon
                    </span>
                    <p className="text-xs sm:text-sm text-white/80">
                    <span className="font-semibold">Zhenglong is launching soon.</span>
                    <span className="hidden sm:inline-block ml-2">Follow for updates.</span>
                    </p>
                </div>
            </div>
        </div>
        
        <div className="relative inline-block">
          <h1 className="text-5xl sm:text-6xl font-geo uppercase md:text-7xl font-normal bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 animate-[gradientShift_16s_ease-in-out_infinite] bg-[size:200%_200%] [animation-fill-mode:forwards]">
            Supercharge Your Crypto Yield
          </h1>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-teal-300/20 to-emerald-400/20 blur-3xl -z-10 animate-[gradientShift_16s_ease-in-out_infinite]" />
        </div>
        <p className="mt-4 text-sm sm:text-base md:text-lg text-white/80 max-w-3xl mx-auto animate-[fadeUp_800ms_ease_250ms_forwards] opacity-0">
          Zhenglong offers protected leverage tokens and high-yield stability
          pools for decentralized, sustainable returns.
        </p>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-[fadeUp_800ms_ease_250ms_forwards] opacity-0">
          <Link
            href="https://twitter.com/zhenglongfi"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-bold uppercase bg-emerald-500/90 hover:bg-emerald-500 text-black transition-all duration-300"
          >
            Follow on X
          </Link>
          <Link
            href="https://discord.gg/your-discord"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-bold uppercase bg-zinc-900/50 outline outline-1 outline-emerald-500/30 text-emerald-300/80 hover:text-emerald-300 hover:outline-emerald-500/50 transition-all duration-300"
          >
            Join Discord
          </Link>
        </div>

        <div className="absolute top-1/4 left-10 w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
        <div
          className="absolute top-3/4 right-10 w-2 h-2 bg-teal-400 rounded-full animate-ping [animation-delay:1s]"
        />
      </div>
    </section>
  );
}
