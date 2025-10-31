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
        <div className="relative z-10 ml-auto max-w-[1400px] w-full px-4 sm:pr-8 sm:pl-10 lg:pl-14 translate-y-4 sm:translate-y-2 md:translate-y-0 text-right">
          <div className="inline-flex flex-col items-end px-2 sm:px-6 py-4 sm:py-6 md:py-8">
            <div className="relative">
              <h1 className="text-[3.2rem] sm:text-[4.5rem] md:text-[6.25rem] lg:text-[6rem] xl:text-[7rem] font-bold tracking-tight text-harbor-white drop-shadow-[0_35px_90px_rgba(5,18,38,0.75)] leading-none">
                A Safer Harbor
                <br />
                For Leverage,
                <br />
                Uncharted Waters
                <br />
                For Yield.
              </h1>
              <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-nautical-blue/30 to-transparent blur-3xl" />
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
