"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

type Product = {
  emoji: string;
  name: string;
  headline: string;
  features: string[];
  cta: string;
  href: string;
  variant: "earn" | "sail";
};

const PRODUCTS: Product[] = [
  {
    emoji: "🌊",
    name: "Earn",
    headline: "Pegged Assets With Real Yield",
    features: [
      "Earn yield on USD, Gold, Euros and more.",
      "Backed by productive collateral.",
      "Redeem anytime.",
    ],
    cta: "Explore Earn",
    href: "https://app.harborfinance.io/anchor",
    variant: "earn",
  },
  {
    emoji: "⛵",
    name: "Sail",
    headline: "Liquidation-Protected Leverage",
    features: [
      "No liquidations.",
      "No funding fees.",
      "Composable DeFi tokens.",
    ],
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
        className={`flex h-full min-h-[22rem] flex-col border p-6 sm:min-h-[24rem] sm:p-8 ${
          isEarn
            ? "border-nautical-blue/20 bg-nautical-blue text-white"
            : "border-nautical-blue/15 bg-white text-nautical-blue"
        }`}
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl leading-none" aria-hidden="true">
              {product.emoji}
            </span>
            <p
              className={`text-[10px] font-semibold uppercase tracking-[0.28em] ${
                isEarn ? "text-white/50" : "text-nautical-blue/50"
              }`}
            >
              {product.name}
            </p>
          </div>

          <h3
            className={`text-xl font-bold tracking-tight sm:text-2xl md:text-[1.75rem] ${
              isEarn ? "text-white" : "text-nautical-blue"
            }`}
          >
            {product.headline}
          </h3>

          <ul
            className={`mt-1 flex flex-col gap-2.5 text-sm leading-relaxed sm:text-base ${
              isEarn ? "text-white/80" : "text-nautical-blue/70"
            }`}
          >
            {product.features.map((feature) => (
              <li key={feature} className="flex gap-2.5">
                <span
                  className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                    isEarn ? "bg-sunrise-coral" : "bg-nautical-blue"
                  }`}
                  aria-hidden="true"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <a
          href={product.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-8 inline-flex w-full items-center justify-center gap-2 px-5 py-3 text-sm font-semibold transition-all sm:text-base ${
            isEarn
              ? "bg-white text-nautical-blue hover:bg-white/90"
              : "bg-nautical-blue text-white hover:bg-nautical-blue/90"
          }`}
        >
          {product.cta}
          <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
        </a>
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
        <div className="mx-auto flex max-w-5xl flex-col gap-8 lg:gap-10">
          <AnimatedReveal visible={show} delayMs={0}>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-nautical-blue/50">
                Products
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-nautical-blue sm:text-3xl md:text-4xl">
                Choose Your Strategy
              </h2>
            </div>
          </AnimatedReveal>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-stretch md:gap-5">
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
