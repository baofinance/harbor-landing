"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

import AnimatedWaveBackground from "./AnimatedWaveBackground";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReduceMotion(mediaQuery.matches);
    updateMotion();
    mediaQuery.addEventListener("change", updateMotion);
    return () => mediaQuery.removeEventListener("change", updateMotion);
  }, []);

  useEffect(() => {
    // Trigger fade-in animation after mount
    const timer = setTimeout(() => setIsLoaded(true), 100);

    // Handle scroll for parallax
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const show = isLoaded;
  const lineDelay = (ms: number) =>
    reduceMotion || show ? (reduceMotion ? 0 : ms) : 0;
  const lineVisible = () =>
    reduceMotion || show
      ? "translate-y-0 opacity-100"
      : "translate-y-5 opacity-0";

  return (
    <>
      <section 
        className="hero-section relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Wave Background with scroll parallax */}
        <div 
          className="absolute inset-0 overflow-hidden transition-transform duration-100"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <AnimatedWaveBackground />
        </div>

        <div 
          className={`relative z-10 max-w-[1400px] w-full px-4 sm:px-8 lg:px-14 text-center pt-4 sm:pt-6 md:pt-8 transition-all duration-1000 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        >
          <div className="inline-flex flex-col items-center px-2 sm:px-6 py-2 sm:py-4 md:py-6">
            {/* Launch Announcement */}
            <div 
              className={`mb-4 sm:mb-5 md:mb-6 transition-all duration-1000 delay-100 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="inline-block px-4 sm:px-6 md:px-8 py-1 sm:py-1.5 bg-sunrise-coral border border-sunrise-coral rounded-full">
                <p className="text-[10px] sm:text-xs md:text-sm text-white text-center">
                  <span className="font-semibold">
                    $TIDE airdrop live!
                  </span>
                </p>
              </div>
            </div>

            <div className="relative px-2 sm:px-4">
              <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
                <div className="absolute left-1/2 top-[28%] h-20 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/25 blur-3xl sm:h-28 sm:w-72" />
                <div className="absolute left-1/2 top-[72%] h-20 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sunrise-coral/30 blur-3xl sm:h-28 sm:w-72" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-nautical-blue/25 to-transparent blur-3xl" />
              </div>

              <h1 className="flex flex-col items-center font-black leading-[1.05] tracking-[-0.02em] sm:leading-[1.02]">
                <span
                  className={`text-[1.75rem] transition-all duration-700 ease-out motion-reduce:transition-none sm:text-[2.25rem] md:text-[3rem] lg:text-[3.75rem] xl:text-[4.5rem] ${lineVisible()}`}
                  style={{ transitionDelay: `${lineDelay(200)}ms` }}
                >
                  <span className="text-white drop-shadow-[0_0_32px_rgba(255,255,255,0.4)]">
                    Earn
                  </span>
                  <span className="font-bold text-white/70"> More.</span>
                </span>
                <span
                  className={`text-[1.75rem] transition-all duration-700 ease-out motion-reduce:transition-none sm:text-[2.25rem] md:text-[3rem] lg:text-[3.75rem] xl:text-[4.5rem] ${lineVisible()}`}
                  style={{ transitionDelay: `${lineDelay(450)}ms` }}
                >
                  <span className="text-white drop-shadow-[0_0_28px_rgba(255,255,255,0.3)]">
                    Risk
                  </span>
                  <span className="font-bold text-sunrise-coral drop-shadow-[0_0_40px_rgba(255,138,122,0.5)]">
                    {" "}
                    Less.
                  </span>
                </span>
              </h1>
            </div>

            <p
              className={`mx-auto mt-4 max-w-2xl text-xs leading-relaxed text-white/70 transition-all duration-700 ease-out motion-reduce:transition-none sm:mt-5 sm:text-sm md:max-w-3xl ${
                lineVisible()
              }`}
              style={{ transitionDelay: `${lineDelay(650)}ms` }}
            >
              A protocol for yield-bearing stable assets and
              liquidation-protected leverage.
            </p>

            <div
              className={`mt-3 space-y-3 transition-all duration-700 ease-out motion-reduce:transition-none sm:mt-4 md:mt-5 sm:space-y-4 ${lineVisible()}`}
              style={{ transitionDelay: `${lineDelay(800)}ms` }}
            >
              <div
                className={`flex flex-col items-center justify-center gap-2 pt-2 min-w-0 transition-all duration-700 ease-out motion-reduce:transition-none sm:flex-row sm:gap-2 md:gap-3 lg:gap-4 ${lineVisible()}`}
                style={{ transitionDelay: `${lineDelay(950)}ms` }}
              >
                <button
                  onClick={() => {
                    const buildMarketsSection =
                      document.getElementById("harbor-markets");
                    if (buildMarketsSection) {
                      const elementPosition =
                        buildMarketsSection.getBoundingClientRect().top;
                      const offsetPosition =
                        elementPosition + window.scrollY - 200;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      });
                    }
                  }}
                  className="w-[120px] sm:w-[130px] md:w-[140px] lg:w-[150px] flex-shrink-0 px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 text-[10px] sm:text-xs md:text-sm font-semibold border border-white text-white rounded-full hover:bg-white/10 transition-all text-center whitespace-nowrap"
                >
                  Claim TIDE
                </button>
                <a
                  href="https://app.harborfinance.io/genesis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[120px] sm:w-[130px] md:w-[140px] lg:w-[150px] flex-shrink-0 px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 text-[10px] sm:text-xs md:text-sm font-semibold bg-white text-nautical-blue border border-white rounded-full hover:bg-white/90 transition-all text-center whitespace-nowrap shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                >
                  Launch App
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
          className={`absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-harbor-white/70 hover:text-harbor-white transition-all duration-1000 delay-1000 ease-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <ChevronDown className="w-5 h-5 animate-gentle-float" />
          <span className="mt-1 text-xs">Scroll for more</span>
        </button>

        <style jsx>{`
          @keyframes gentle-float {
            0%, 100% {
              transform: translateY(0);
              opacity: 0.7;
            }
            50% {
              transform: translateY(6px);
              opacity: 1;
            }
          }

          :global(.animate-gentle-float) {
            animation: gentle-float 3s ease-in-out infinite;
          }
        `}</style>
      </section>
    </>
  );
}
