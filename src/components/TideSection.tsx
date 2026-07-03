"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  Flame,
  Sparkles,
  TrendingUp,
  Vault,
  Waves,
} from "lucide-react";

const TIDE_PHASES = [
  {
    title: "Treasury Warchest",
    description:
      "Protocol revenue purchases TIDE from the open market and builds Harbor's long-term treasury reserves.",
    phase: "Phase 1",
    icon: Vault,
  },
  {
    title: "Permanent Liquidity",
    description:
      "Once the treasury target is reached, purchased TIDE is paired with productive Ethereum assets to build Protocol-Owned Liquidity.",
    supporting: "Liquidity owned forever by the protocol.",
    phase: "Phase 2",
    icon: Waves,
  },
  {
    title: "Burn Supply",
    description:
      "After treasury and liquidity targets are achieved, future purchases permanently reduce the circulating supply.",
    phase: "Phase 3",
    icon: Flame,
  },
];

const CLOSING_LINE =
  "Harbor doesn't distribute protocol revenue—it continuously reinvests it to grow both the protocol and TIDE over time.";

function AnimatedReveal({
  visible,
  delayMs,
  children,
  className = "",
}: {
  visible: boolean;
  delayMs: number;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`transition-all duration-700 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-5 opacity-0"
      } ${className}`}
      style={{ transitionDelay: visible ? `${delayMs}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

function VerticalConnector({
  visible,
  delayMs,
  className = "h-8 sm:h-10",
}: {
  visible: boolean;
  delayMs: number;
  className?: string;
}) {
  return (
    <div
      className={`relative w-0.5 overflow-hidden bg-nautical-blue/15 ${className}`}
      aria-hidden="true"
    >
      <div
        className={`absolute inset-x-0 top-0 bg-nautical-blue transition-all duration-700 ease-out ${
          visible ? "h-full" : "h-0"
        }`}
        style={{ transitionDelay: visible ? `${delayMs}ms` : "0ms" }}
      />
    </div>
  );
}

function PhaseBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex shrink-0 items-center border border-nautical-blue/15 bg-nautical-blue/5 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-nautical-blue/70">
      {label}
    </span>
  );
}

function EthereumSparkleIcon() {
  return (
    <div className="relative flex h-11 w-11 shrink-0 items-center justify-center bg-nautical-blue text-white">
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 2 4.5 12.25 12 16l7.5-3.75L12 2Zm0 14.5-7.5 3.25L12 22l7.5-2.25-7.5-3.25Z" />
      </svg>
      <Sparkles
        className="absolute -right-1 -top-1 h-3.5 w-3.5 text-sunrise-coral"
        strokeWidth={2.25}
        aria-hidden="true"
      />
    </div>
  );
}

export default function TideSection() {
  const [visible, setVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReduceMotion(mediaQuery.matches);
    updateMotion();
    mediaQuery.addEventListener("change", updateMotion);
    return () => mediaQuery.removeEventListener("change", updateMotion);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setVisible(true);
      return;
    }

    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [reduceMotion]);

  const show = reduceMotion || visible;

  return (
    <section
      id="ecosystem"
      ref={sectionRef}
      className="relative z-10 bg-nautical-blue-light px-3 sm:px-4 md:px-5 pb-3 sm:pb-4 md:pb-5 pt-0"
    >
      <div className="bg-white p-6 sm:p-10 md:p-12 lg:p-14">
        <div className="mx-auto flex max-w-5xl flex-col gap-12 lg:gap-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-nautical-blue/50">
              Ecosystem
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-nautical-blue sm:text-3xl md:text-4xl">
              Every Dollar Has A Job.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-nautical-blue/70 sm:text-base">
              Every Harbor market generates protocol revenue. That revenue is
              permanently reinvested to grow the protocol and strengthen TIDE.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <AnimatedReveal visible={show} delayMs={0}>
              <div className="border border-nautical-blue/20 bg-nautical-blue/5 px-6 py-4 text-center sm:px-8 sm:py-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-nautical-blue/50">
                  Source
                </p>
                <p className="mt-1 text-lg font-bold text-nautical-blue sm:text-xl">
                  Protocol Revenue
                </p>
              </div>
            </AnimatedReveal>

            <VerticalConnector visible={show} delayMs={300} className="h-8 sm:h-10" />

            <AnimatedReveal visible={show} delayMs={450} className="w-full max-w-3xl">
              <div className="relative mx-auto h-6 w-full sm:h-8" aria-hidden="true">
                <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-nautical-blue/15">
                  <div
                    className={`absolute inset-x-0 top-0 bg-nautical-blue transition-all duration-700 ease-out ${
                      show ? "h-full" : "h-0"
                    }`}
                    style={{ transitionDelay: show ? "450ms" : "0ms" }}
                  />
                </div>
                <div className="absolute left-[12.5%] right-[12.5%] top-1/2 h-0.5 -translate-y-1/2 overflow-hidden bg-nautical-blue/15 sm:left-[15%] sm:right-[15%]">
                  <div
                    className={`h-full bg-nautical-blue transition-all duration-700 ease-out ${
                      show ? "w-full" : "w-0"
                    }`}
                    style={{ transitionDelay: show ? "550ms" : "0ms" }}
                  />
                </div>
                <div className="absolute left-[12.5%] top-1/2 h-6 w-0.5 -translate-y-0 bg-nautical-blue/15 sm:left-[15%]">
                  <div
                    className={`absolute inset-x-0 top-0 bg-nautical-blue transition-all duration-700 ease-out ${
                      show ? "h-full" : "h-0"
                    }`}
                    style={{ transitionDelay: show ? "650ms" : "0ms" }}
                  />
                </div>
                <div className="absolute right-[12.5%] top-1/2 h-6 w-0.5 -translate-y-0 bg-nautical-blue/15 sm:right-[15%]">
                  <div
                    className={`absolute inset-x-0 top-0 bg-nautical-blue transition-all duration-700 ease-out ${
                      show ? "h-full" : "h-0"
                    }`}
                    style={{ transitionDelay: show ? "650ms" : "0ms" }}
                  />
                </div>
              </div>
            </AnimatedReveal>

            <div className="grid w-full gap-10 md:grid-cols-2 md:gap-8 lg:gap-12">
              <div className="flex flex-col items-center">
                <AnimatedReveal visible={show} delayMs={700}>
                  <p className="text-3xl font-bold tracking-tight text-nautical-blue sm:text-4xl">
                    75%
                  </p>
                </AnimatedReveal>

                <VerticalConnector visible={show} delayMs={850} />

                <AnimatedReveal visible={show} delayMs={950} className="w-full">
                  <div className="flex h-full min-h-[18rem] flex-col border border-nautical-blue/20 bg-nautical-blue p-6 sm:min-h-[20rem] sm:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50">
                          Reinvest
                        </p>
                        <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                          Grow Harbor
                        </h3>
                      </div>
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-white/15 text-white">
                        <TrendingUp className="h-5 w-5" strokeWidth={2.25} />
                      </div>
                    </div>

                    <p className="mt-5 text-sm leading-relaxed text-white/80 sm:text-base">
                      The majority of protocol revenue is reinvested into
                      growing Harbor markets through incentives, liquidity
                      programs and ecosystem expansion.
                    </p>

                    <div className="mt-auto flex flex-col gap-4 pt-8">
                      <div
                        className="flex items-end justify-center gap-2 text-white/25"
                        aria-hidden="true"
                      >
                        <div
                          className={`h-6 w-3 bg-white/20 transition-all duration-700 ease-out sm:h-8 sm:w-4 ${
                            show ? "opacity-100" : "opacity-0"
                          }`}
                          style={{ transitionDelay: show ? "1100ms" : "0ms" }}
                        />
                        <div
                          className={`h-10 w-3 bg-white/35 transition-all duration-700 ease-out sm:h-12 sm:w-4 ${
                            show ? "opacity-100" : "opacity-0"
                          }`}
                          style={{ transitionDelay: show ? "1200ms" : "0ms" }}
                        />
                        <div
                          className={`h-14 w-3 bg-white/50 transition-all duration-700 ease-out sm:h-16 sm:w-4 ${
                            show ? "opacity-100" : "opacity-0"
                          }`}
                          style={{ transitionDelay: show ? "1300ms" : "0ms" }}
                        />
                        <div
                          className={`h-[4.5rem] w-3 bg-sunrise-coral/80 transition-all duration-700 ease-out sm:h-20 sm:w-4 ${
                            show ? "opacity-100" : "opacity-0"
                          }`}
                          style={{ transitionDelay: show ? "1400ms" : "0ms" }}
                        />
                      </div>
                      <p className="text-center text-xs font-medium tracking-wide text-white/60 sm:text-sm">
                        More TVL → More Usage → More Revenue
                      </p>
                    </div>
                  </div>
                </AnimatedReveal>
              </div>

              <div className="flex flex-col items-center">
                <AnimatedReveal visible={show} delayMs={700}>
                  <p className="text-3xl font-bold tracking-tight text-nautical-blue sm:text-4xl">
                    25%
                  </p>
                </AnimatedReveal>

                <VerticalConnector visible={show} delayMs={850} />

                <AnimatedReveal visible={show} delayMs={950} className="w-full">
                  <p className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-nautical-blue/50">
                    Strengthen TIDE
                  </p>
                </AnimatedReveal>

                <div className="flex w-full flex-col">
                  {TIDE_PHASES.map((phase, index) => {
                    const Icon = phase.icon;
                    const cardDelay = 1000 + index * 350;

                    return (
                      <div key={phase.title} className="flex flex-col items-center">
                        <AnimatedReveal visible={show} delayMs={cardDelay} className="w-full">
                          <div className="flex flex-col gap-3 border border-nautical-blue/15 bg-nautical-blue/[0.03] p-5 sm:p-6">
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex items-start gap-3">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-nautical-blue text-white">
                                  <Icon className="h-4 w-4" strokeWidth={2.25} />
                                </div>
                                <div>
                                  <h3 className="text-base font-bold text-nautical-blue sm:text-lg">
                                    {phase.title}
                                  </h3>
                                </div>
                              </div>
                              <PhaseBadge label={phase.phase} />
                            </div>
                            <p className="text-xs leading-relaxed text-nautical-blue/70 sm:text-sm">
                              {phase.description}
                            </p>
                            {phase.supporting ? (
                              <p className="text-[11px] font-medium text-nautical-blue/55 sm:text-xs">
                                {phase.supporting}
                              </p>
                            ) : null}
                          </div>
                        </AnimatedReveal>

                        {index < TIDE_PHASES.length - 1 ? (
                          <AnimatedReveal visible={show} delayMs={cardDelay + 175}>
                            <ArrowDown
                              className="my-2 h-4 w-4 text-nautical-blue/30"
                              strokeWidth={2.25}
                              aria-hidden="true"
                            />
                          </AnimatedReveal>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <AnimatedReveal visible={show} delayMs={2100}>
            <div className="border border-seafoam-mint-dark/30 bg-seafoam-mint/20 p-6 sm:p-8 md:p-10">
              <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-6">
                <EthereumSparkleIcon />
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-nautical-blue sm:text-xl">
                    Productive Reserves
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-nautical-blue/70 sm:text-base">
                    Harbor&apos;s Protocol-Owned Liquidity is paired with
                    productive Ethereum assets so that even the protocol&apos;s
                    reserves continue compounding over time.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedReveal>

          <AnimatedReveal visible={show} delayMs={2300}>
            <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-nautical-blue/70 sm:text-base">
              {CLOSING_LINE}
            </p>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}
