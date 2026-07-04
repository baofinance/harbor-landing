"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check } from "lucide-react";

type Product = {
  name: string;
  headline: string;
  supportingText: string;
  chips: string[];
  footnote: string;
  cta: string;
  href: string;
  variant: "earn" | "sail";
};

const PRODUCTS: Product[] = [
  {
    name: "Earn",
    headline: "Pegged Assets With Real Yield",
    supportingText:
      "Earn yield while maintaining exposure to stable assets backed by productive collateral.",
    chips: ["USD", "Gold", "Euros", "Redeem Anytime"],
    footnote: "Designed for investors seeking stable returns.",
    cta: "Explore Earn",
    href: "https://app.harborfinance.io/anchor",
    variant: "earn",
  },
  {
    name: "Sail",
    headline: "Liquidation-Protected Leverage",
    supportingText:
      "Stay invested through market volatility without liquidations or funding fees.",
    chips: ["No Liquidations", "No Funding Fees", "Composable"],
    footnote: "Designed for long-term directional exposure.",
    cta: "Explore Sail",
    href: "https://app.harborfinance.io/sail",
    variant: "sail",
  },
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

function EarnBackgroundGraphic() {
  return (
    <svg
      viewBox="0 0 120 120"
      className="pointer-events-none absolute -right-2 -top-2 h-32 w-32 opacity-[0.08] sm:h-36 sm:w-36"
      aria-hidden="true"
    >
      <circle cx="60" cy="60" r="48" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="60" cy="60" r="32" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="60" cy="60" r="16" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="44" cy="44" r="8" fill="currentColor" opacity="0.35" />
      <circle cx="72" cy="52" r="6" fill="currentColor" opacity="0.25" />
      <circle cx="56" cy="72" r="5" fill="currentColor" opacity="0.2" />
    </svg>
  );
}

function SailBackgroundGraphic() {
  return (
    <svg
      viewBox="0 0 120 120"
      className="pointer-events-none absolute -right-1 -top-1 h-32 w-32 opacity-[0.09] sm:h-36 sm:w-36"
      aria-hidden="true"
    >
      <path
        d="M60 16 L92 32 V58 C92 76 78 94 60 104 C42 94 28 76 28 58 V32 Z"
        fill="currentColor"
        fillOpacity="0.06"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M36 78 H84"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.45"
      />
      <path
        d="M38 70 L50 56 L62 62 L74 40 L86 28"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="86" cy="28" r="4" fill="currentColor" opacity="0.35" />
    </svg>
  );
}

function FeatureChips({
  chips,
  variant,
}: {
  chips: string[];
  variant: "earn" | "sail";
}) {
  const isEarn = variant === "earn";

  return (
    <div className="flex flex-wrap gap-2">
      {chips.map((chip) => (
        <span
          key={chip}
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium sm:text-sm ${
            isEarn
              ? "border border-white/15 bg-white/10 text-white/90"
              : "border border-nautical-blue/10 bg-nautical-blue/[0.04] text-nautical-blue/80"
          }`}
        >
          <Check
            className={`h-3 w-3 shrink-0 ${isEarn ? "text-sunrise-coral" : "text-nautical-blue"}`}
            strokeWidth={2.5}
            aria-hidden="true"
          />
          {chip}
        </span>
      ))}
    </div>
  );
}

function ProductCard({
  product,
  visible,
  delayMs,
  direction,
}: {
  product: Product;
  visible: boolean;
  delayMs: number;
  direction: "left" | "right";
}) {
  const isEarn = product.variant === "earn";

  return (
    <AnimatedReveal
      visible={visible}
      delayMs={delayMs}
      direction={direction}
      className="h-full"
    >
      <div
        className={`group relative flex h-full min-h-[24rem] flex-col overflow-hidden rounded-2xl border p-8 transition-all duration-300 ease-out motion-reduce:transition-none motion-reduce:hover:translate-y-0 hover:-translate-y-1 sm:min-h-[26rem] sm:p-10 ${
          isEarn
            ? "border-nautical-blue/20 bg-nautical-blue text-white shadow-[0_12px_40px_rgba(30,71,117,0.18)] hover:shadow-[0_20px_50px_rgba(30,71,117,0.28)]"
            : "border-nautical-blue/10 bg-white text-nautical-blue shadow-[0_12px_40px_rgba(30,71,117,0.06)] hover:shadow-[0_20px_50px_rgba(30,71,117,0.12)]"
        }`}
      >
        {isEarn ? <EarnBackgroundGraphic /> : <SailBackgroundGraphic />}

        <div className="relative flex flex-1 flex-col gap-6 sm:gap-7">
          <div className="flex flex-col gap-4 sm:gap-5">
            <p
              className={`text-[10px] font-semibold uppercase tracking-[0.28em] ${
                isEarn ? "text-white/50" : "text-nautical-blue/45"
              }`}
            >
              {product.name}
            </p>

            <div className="flex flex-col gap-3 sm:gap-4">
              <h3
                className={`text-xl font-bold tracking-tight sm:text-2xl md:text-[1.75rem] ${
                  isEarn ? "text-white" : "text-nautical-blue"
                }`}
              >
                {product.headline}
              </h3>

              <p
                className={`max-w-md text-sm leading-relaxed sm:text-base ${
                  isEarn ? "text-white/75" : "text-nautical-blue/65"
                }`}
              >
                {product.supportingText}
              </p>
            </div>

            <FeatureChips chips={product.chips} variant={product.variant} />
          </div>

          <div className="mt-auto flex flex-col gap-5 pt-2">
            <p
              className={`text-xs sm:text-sm ${
                isEarn ? "text-white/55" : "text-nautical-blue/50"
              }`}
            >
              {product.footnote}
            </p>

            <a
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group/btn inline-flex h-12 w-full items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition-all sm:text-base ${
                isEarn
                  ? "bg-white text-nautical-blue hover:bg-white/95"
                  : "bg-nautical-blue text-white hover:bg-nautical-blue/90"
              }`}
            >
              {product.cta}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1 motion-reduce:transition-none"
                strokeWidth={2.25}
              />
            </a>
          </div>
        </div>
      </div>
    </AnimatedReveal>
  );
}

export default function ProductsSection() {
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
      id="products"
      ref={sectionRef}
      className="relative z-10 bg-nautical-blue-light px-3 sm:px-4 md:px-5 pb-3 sm:pb-4 md:pb-5 pt-0"
    >
      <div className="bg-white p-6 sm:p-10 md:p-12 lg:p-14">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 lg:gap-12">
          <AnimatedReveal visible={show} delayMs={0}>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-nautical-blue/50">
                Products
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-nautical-blue sm:text-3xl md:text-4xl">
                Choose Your Strategy
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-nautical-blue/65 sm:text-base">
                Choose between earning yield on stable assets or gaining
                leveraged exposure with liquidation protection.
              </p>
            </div>
          </AnimatedReveal>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:items-stretch md:gap-6">
            <ProductCard
              product={PRODUCTS[0]}
              visible={show}
              delayMs={200}
              direction="left"
            />
            <ProductCard
              product={PRODUCTS[1]}
              visible={show}
              delayMs={350}
              direction="right"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
