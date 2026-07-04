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
import type { LucideIcon } from "lucide-react";
import {
  formatPercent,
  getTideMetricDisplay,
  LANDING_SUMMARY_URL,
  parseTideEconomics,
  progressFillPercent,
  type LandingSummaryResponse,
  type TideEconomicsSummary,
} from "@/lib/landingSummary";

type TideStep = {
  title: string;
  description: string;
  supporting?: string;
  icon: LucideIcon;
  metric?: "treasury" | "pol";
};

const TIDE_STEPS: TideStep[] = [
  {
    title: "Treasury Warchest",
    description:
      "Maintains long-term protocol reserves through market buybacks.",
    icon: Vault,
    metric: "treasury",
  },
  {
    title: "Permanent Liquidity",
    description:
      "Creates protocol-owned liquidity paired with productive Ethereum assets.",
    icon: Waves,
    metric: "pol",
  },
  {
    title: "Burn Supply",
    description:
      "Permanently reduces circulating supply after treasury goals are met.",
    icon: Flame,
  },
];

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
      className={`relative w-0.5 overflow-hidden bg-white/15 ${className}`}
      aria-hidden="true"
    >
      <div
        className={`absolute inset-x-0 top-0 bg-white transition-all duration-700 ease-out ${
          visible ? "h-full" : "h-0"
        }`}
        style={{ transitionDelay: visible ? `${delayMs}ms` : "0ms" }}
      />
    </div>
  );
}

function MetricProgressBar({
  label,
  currentPercent,
  targetPercent,
  animate,
  isLoading,
  isLiveData,
}: {
  label: string;
  currentPercent: number;
  targetPercent: number;
  animate: boolean;
  isLoading: boolean;
  isLiveData: boolean;
}) {
  const fillPercent = progressFillPercent(currentPercent, targetPercent);
  const exceedsTarget = currentPercent > targetPercent;

  return (
    <div className="flex flex-col gap-2.5 border-t border-nautical-blue/10 pt-4">
      <div className="flex items-end justify-between gap-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-nautical-blue/50">
          {label}
        </p>
        {isLoading ? (
          <div className="h-4 w-24 animate-pulse bg-nautical-blue/10" />
        ) : (
          <p className="text-sm font-semibold tabular-nums text-nautical-blue">
            {exceedsTarget && !isLiveData ? "30%+" : formatPercent(currentPercent)}
            <span className="font-normal text-nautical-blue/45">
              {" "}
              / {formatPercent(targetPercent)} target
            </span>
          </p>
        )}
      </div>
      <div
        className="relative h-3 overflow-hidden rounded-sm bg-nautical-blue/10"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={targetPercent}
        aria-valuenow={currentPercent}
        aria-label={`${label}: ${formatPercent(currentPercent)} of ${formatPercent(targetPercent)} target`}
      >
        <div
          className={`absolute inset-y-0 left-0 rounded-sm transition-[width] duration-1000 ease-out ${
            exceedsTarget ? "bg-seafoam-mint-dark" : "bg-nautical-blue"
          }`}
          style={{ width: animate && !isLoading ? `${fillPercent}%` : "0%" }}
        />
      </div>
    </div>
  );
}

function RotatingEthIcon() {
  return (
    <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/20 bg-nautical-blue-dark shadow-[0_6px_24px_rgba(0,0,0,0.22)] sm:h-20 sm:w-20">
      <svg
        viewBox="0 0 256 417"
        className="h-9 w-auto animate-[spin_24s_linear_infinite] motion-reduce:animate-none sm:h-11"
        aria-hidden="true"
      >
        <path
          fill="white"
          fillOpacity="0.55"
          d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z"
        />
        <path
          fill="white"
          fillOpacity="0.9"
          d="M127.961 0L0 212.32l127.961 75.639V154.158z"
        />
        <path
          fill="white"
          fillOpacity="0.6"
          d="M127.961 312.187l-2.795 2.798v97.459l2.795 8.276 127.962-180.315z"
        />
        <path
          fill="white"
          fillOpacity="0.9"
          d="M127.961 416.52V312.187L0 236.173z"
        />
        <path
          fill="white"
          fillOpacity="0.45"
          d="M127.961 287.958l127.939-75.638L127.961 154.158z"
        />
        <path
          fill="white"
          fillOpacity="0.7"
          d="M0 212.32l127.961 75.638V154.158z"
        />
      </svg>
      <Sparkles
        className="absolute -right-0.5 -top-0.5 h-4 w-4 text-sunrise-coral sm:h-5 sm:w-5"
        strokeWidth={2.25}
        aria-hidden="true"
      />
    </div>
  );
}

export default function TideSection() {
  const [visible, setVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [tideEconomics, setTideEconomics] = useState<TideEconomicsSummary | null>(
    null
  );
  const [isLoadingMetrics, setIsLoadingMetrics] = useState(true);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReduceMotion(mediaQuery.matches);
    updateMotion();
    mediaQuery.addEventListener("change", updateMotion);
    return () => mediaQuery.removeEventListener("change", updateMotion);
  }, []);

  useEffect(() => {
    let isMounted = true;
    let retryTimeout: ReturnType<typeof setTimeout> | null = null;

    const loadSummary = async (attempt = 0) => {
      try {
        setIsLoadingMetrics(true);
        const response = await fetch(LANDING_SUMMARY_URL, {
          headers: { Accept: "application/json" },
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error(`Landing summary request failed: ${response.status}`);
        }

        const data = (await response.json()) as LandingSummaryResponse;
        if (!isMounted) return;

        setTideEconomics(parseTideEconomics(data));
      } catch {
        if (isMounted && attempt < 2) {
          retryTimeout = setTimeout(() => {
            loadSummary(attempt + 1);
          }, 600);
          return;
        }
      } finally {
        if (isMounted) {
          setIsLoadingMetrics(false);
        }
      }
    };

    loadSummary();

    return () => {
      isMounted = false;
      if (retryTimeout) {
        clearTimeout(retryTimeout);
      }
    };
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
      id="sustainable-by-design"
      ref={sectionRef}
      className="relative z-10 bg-nautical-blue-light px-3 sm:px-4 md:px-5 pb-3 sm:pb-4 md:pb-5 pt-0"
    >
      <div className="bg-nautical-blue px-6 py-10 sm:px-10 sm:py-14 md:px-12 md:py-16 lg:px-14 lg:py-20">
        <div className="mx-auto flex max-w-5xl flex-col gap-12 lg:gap-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
              Sustainable By Design
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">
              Revenue allocation.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <AnimatedReveal visible={show} delayMs={0}>
              <div className="rounded-2xl border border-white/15 bg-white/10 px-6 py-4 text-center shadow-[0_4px_18px_rgba(0,0,0,0.14)] sm:px-8 sm:py-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50">
                  Source
                </p>
                <p className="mt-1 text-lg font-bold text-white sm:text-xl">
                  Protocol Revenue
                </p>
              </div>
            </AnimatedReveal>

            <VerticalConnector visible={show} delayMs={300} className="h-8 sm:h-10" />

            <AnimatedReveal visible={show} delayMs={450} className="w-full max-w-3xl">
              <div className="relative mx-auto h-6 w-full sm:h-8" aria-hidden="true">
                <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-white/15">
                  <div
                    className={`absolute inset-x-0 top-0 bg-white transition-all duration-700 ease-out ${
                      show ? "h-full" : "h-0"
                    }`}
                    style={{ transitionDelay: show ? "450ms" : "0ms" }}
                  />
                </div>
                <div className="absolute left-[12.5%] right-[12.5%] top-1/2 h-0.5 -translate-y-1/2 overflow-hidden bg-white/15 sm:left-[15%] sm:right-[15%]">
                  <div
                    className={`h-full bg-white transition-all duration-700 ease-out ${
                      show ? "w-full" : "w-0"
                    }`}
                    style={{ transitionDelay: show ? "550ms" : "0ms" }}
                  />
                </div>
                <div className="absolute left-[12.5%] top-1/2 h-6 w-0.5 -translate-y-0 bg-white/15 sm:left-[15%]">
                  <div
                    className={`absolute inset-x-0 top-0 bg-white transition-all duration-700 ease-out ${
                      show ? "h-full" : "h-0"
                    }`}
                    style={{ transitionDelay: show ? "650ms" : "0ms" }}
                  />
                </div>
                <div className="absolute right-[12.5%] top-1/2 h-6 w-0.5 -translate-y-0 bg-white/15 sm:right-[15%]">
                  <div
                    className={`absolute inset-x-0 top-0 bg-white transition-all duration-700 ease-out ${
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
                  <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    75%
                  </p>
                </AnimatedReveal>

                <VerticalConnector visible={show} delayMs={850} />

                <AnimatedReveal visible={show} delayMs={950} className="w-full">
                  <p className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50">
                    Reinvest
                  </p>
                </AnimatedReveal>

                <AnimatedReveal visible={show} delayMs={1000} className="w-full">
                  <div className="flex h-full min-h-[18rem] flex-col rounded-2xl border border-sunrise-coral-dark/40 bg-sunrise-coral p-6 shadow-[0_8px_28px_rgba(255,138,122,0.22)] sm:min-h-[20rem] sm:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-white sm:text-2xl">
                          Grow Markets
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
                          className={`h-[4.5rem] w-3 bg-white transition-all duration-700 ease-out sm:h-20 sm:w-4 ${
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
                  <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    25%
                  </p>
                </AnimatedReveal>

                <VerticalConnector visible={show} delayMs={850} />

                <AnimatedReveal visible={show} delayMs={950} className="w-full">
                  <p className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50">
                    Strengthen TIDE
                  </p>
                </AnimatedReveal>

                <div className="flex w-full flex-col">
                  {TIDE_STEPS.map((step, index) => {
                    const Icon = step.icon;
                    const cardDelay = 1000 + index * 350;
                    const metricDisplay = step.metric
                      ? getTideMetricDisplay(step.metric, tideEconomics)
                      : null;

                    return (
                      <div key={step.title} className="flex flex-col items-center">
                        <AnimatedReveal visible={show} delayMs={cardDelay} className="w-full">
                          <div className="flex flex-col gap-3 rounded-2xl border border-nautical-blue/10 bg-white p-5 shadow-[0_8px_24px_rgba(0,0,0,0.12)] sm:p-6">
                            <div className="flex items-start gap-3">
                              <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-nautical-blue text-white">
                                <Icon className="h-4 w-4" strokeWidth={2.25} />
                              </div>
                              <div className="min-w-0 flex-1">
                                <h3 className="text-base font-bold text-nautical-blue sm:text-lg">
                                  {step.title}
                                </h3>
                                <p className="mt-2 text-xs leading-relaxed text-nautical-blue/70 sm:text-sm">
                                  {step.description}
                                </p>
                                {step.supporting ? (
                                  <p className="mt-2 text-[11px] font-medium text-nautical-blue/55 sm:text-xs">
                                    {step.supporting}
                                  </p>
                                ) : null}
                              </div>
                            </div>

                            {metricDisplay ? (
                              <MetricProgressBar
                                label={metricDisplay.label}
                                currentPercent={metricDisplay.currentPercent}
                                targetPercent={metricDisplay.targetPercent}
                                animate={show}
                                isLoading={isLoadingMetrics && !metricDisplay.isLiveData}
                                isLiveData={metricDisplay.isLiveData}
                              />
                            ) : null}
                          </div>
                        </AnimatedReveal>

                        {index < TIDE_STEPS.length - 1 ? (
                          <AnimatedReveal visible={show} delayMs={cardDelay + 175}>
                            <ArrowDown
                              className="my-2 h-4 w-4 text-white/30"
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
            <div className="mx-auto max-w-4xl rounded-2xl border border-white/25 bg-gradient-to-br from-white/15 via-white/10 to-white/[0.04] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.2)] sm:p-8 md:p-10">
              <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-center sm:gap-8 sm:text-left">
                <RotatingEthIcon />
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">
                    Uniquely Harbor
                  </p>
                  <h3 className="mt-1.5 text-lg font-bold text-white sm:text-xl md:text-2xl">
                    Productive Reserves
                  </h3>
                  <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/80 sm:mx-0 sm:text-base md:text-lg">
                    Harbor&apos;s Protocol-Owned Liquidity is paired with
                    productive Ethereum assets so that even the protocol&apos;s
                    reserves continue compounding over time.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}
