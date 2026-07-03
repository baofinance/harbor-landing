"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowRight, Coins, LineChart } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const MARKET_TOKEN_OUTPUTS = [
  {
    label: "haUSD",
    subtitle: "Stable token, earns yield from stability pools",
  },
  {
    label: "hsETHUSD",
    subtitle: "Leverage token with liquidation protection and no funding fees",
  },
];

const MARKET_REVENUE_OUTPUT = {
  label: "Revenue",
  subtitle: "Mint & redeem fees + collateral yield.",
};

const MARKET_EXAMPLES = [
  "wstETH + USD → haUSD + hsETHUSD",
  "BTC + USD → haUSD + hsBTCUSD",
  "wstETH + GOLD → haGOLD + hsETHGOLD",
  "ETH + EUR → haEUR + hsETHEUR",
];

function AnimatedReveal({
  visible,
  delayMs,
  children,
  className = "",
  direction = "up",
}: {
  visible: boolean;
  delayMs: number;
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
}) {
  const hiddenClass = {
    up: "translate-y-6 opacity-0",
    left: "-translate-x-8 opacity-0",
    right: "translate-x-8 opacity-0",
  }[direction];

  return (
    <div
      className={`transition-all duration-700 ease-out ${
        visible ? "translate-x-0 translate-y-0 opacity-100" : hiddenClass
      } ${className}`}
      style={{ transitionDelay: visible ? `${delayMs}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

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
    <div className="flex min-w-0 flex-col gap-2 border border-white/15 bg-white/10 px-4 py-4 sm:px-5 sm:py-5">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#FF8A7A] text-white">
          <Icon className="h-4 w-4" strokeWidth={2.25} />
        </div>
        <div className="min-w-0">
          <p className="text-lg font-semibold leading-tight text-white sm:text-xl">
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/60">
              {label}
            </span>{" "}
            {example}
          </p>
        </div>
      </div>
      <p className="text-xs leading-relaxed text-white/75 sm:text-sm">
        {description}
      </p>
    </div>
  );
}

function OutputTile({
  label,
  subtitle,
  fullWidth = false,
}: {
  label: string;
  subtitle: string;
  fullWidth?: boolean;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center border border-nautical-blue/10 bg-nautical-blue/5 px-3 py-3 text-center sm:px-4 sm:py-4 ${
        fullWidth ? "sm:col-span-2" : ""
      }`}
    >
      <p className="text-sm font-semibold text-nautical-blue sm:text-base">{label}</p>
      <p className="mt-1 text-xs leading-relaxed text-nautical-blue/70 sm:text-sm">
        {subtitle}
      </p>
    </div>
  );
}

export default function BuildMarketsSection() {
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
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [reduceMotion]);

  const show = reduceMotion || visible;

  return (
    <section
      id="harbor-markets"
      ref={sectionRef}
      className="relative z-10 bg-nautical-blue-light px-3 sm:px-4 md:px-5 pb-3 sm:pb-4 md:pb-5 pt-0"
    >
      <div className="bg-nautical-blue px-6 py-10 sm:px-10 sm:py-14 md:px-12 md:py-16 lg:px-14 lg:py-20">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 lg:gap-12">
          <AnimatedReveal visible={show} delayMs={0}>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50">
                Harbor Markets
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
                Build Any Financial Market.
              </h2>
              <p className="mt-3 text-sm text-white/75 sm:text-base">
                Every Harbor market combines collateral with a price feed to
                create new tokens, trading opportunities, yield, and revenue.
              </p>
            </div>
          </AnimatedReveal>

          <div className="mx-auto flex w-full max-w-4xl flex-col gap-4 md:flex-row md:items-stretch md:gap-5">
            <div className="flex min-w-0 flex-col gap-3 md:w-[38%] lg:w-[34%]">
              <AnimatedReveal visible={show} delayMs={150} direction="left">
                <InputCard
                  label="Collateral"
                  example="wstETH"
                  description="Productive asset backing the market"
                  icon={Coins}
                />
              </AnimatedReveal>

              <AnimatedReveal visible={show} delayMs={300}>
                <p
                  className="text-center text-2xl font-semibold text-sunrise-coral"
                  aria-hidden="true"
                >
                  +
                </p>
              </AnimatedReveal>

              <AnimatedReveal visible={show} delayMs={450} direction="left">
                <InputCard
                  label="Price Feed"
                  example="USD"
                  description="The asset the market tracks"
                  icon={LineChart}
                />
              </AnimatedReveal>
            </div>

            <AnimatedReveal
              visible={show}
              delayMs={600}
              className="flex items-center justify-center md:w-8 lg:w-10"
            >
              <ArrowDown
                className="h-6 w-6 text-white/40 md:hidden"
                strokeWidth={2.25}
                aria-hidden="true"
              />
              <ArrowRight
                className="hidden h-6 w-6 text-white/40 md:block"
                strokeWidth={2.25}
                aria-hidden="true"
              />
            </AnimatedReveal>

            <AnimatedReveal
              visible={show}
              delayMs={750}
              direction="right"
              className="min-w-0 flex-1"
            >
              <div className="flex h-full min-w-0 flex-col border border-nautical-blue/10 bg-white p-5 sm:p-6 md:p-8">
                <p className="text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-nautical-blue/50">
                  Harbor Market
                </p>
                <div className="mt-4 grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                  {MARKET_TOKEN_OUTPUTS.map((output, index) => (
                    <AnimatedReveal
                      key={output.label}
                      visible={show}
                      delayMs={900 + index * 120}
                      direction="up"
                    >
                      <OutputTile
                        label={output.label}
                        subtitle={output.subtitle}
                      />
                    </AnimatedReveal>
                  ))}
                  <AnimatedReveal visible={show} delayMs={1140} direction="up">
                    <OutputTile
                      label={MARKET_REVENUE_OUTPUT.label}
                      subtitle={MARKET_REVENUE_OUTPUT.subtitle}
                      fullWidth
                    />
                  </AnimatedReveal>
                </div>
              </div>
            </AnimatedReveal>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex w-full max-w-4xl flex-wrap justify-center gap-2 sm:gap-3">
              {MARKET_EXAMPLES.map((example, index) => (
                <AnimatedReveal
                  key={example}
                  visible={show}
                  delayMs={1400 + index * 80}
                  direction="up"
                >
                  <div className="border border-white/15 bg-white/10 px-3 py-2 text-center text-[11px] font-medium text-white sm:px-4 sm:text-xs">
                    {example}
                  </div>
                </AnimatedReveal>
              ))}
            </div>
            <AnimatedReveal visible={show} delayMs={1750}>
              <p className="max-w-2xl text-center text-sm text-white/75 sm:text-base">
                If a reliable price feed exists, Harbor can create a market around
                it.
              </p>
            </AnimatedReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
