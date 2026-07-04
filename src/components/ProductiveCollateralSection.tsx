"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const IDLE_FLOW = ["Idle ETH", "Nothing"] as const;

const PRODUCTIVE_FLOW = [
  "Productive ETH",
  "Yield",
  "Users + Markets + TIDE",
] as const;

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
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        visible ? "translate-x-0 translate-y-0 opacity-100" : hiddenClass
      } ${className}`}
      style={{ transitionDelay: visible ? `${delayMs}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

function FlowStrip({
  steps,
  variant,
  visible,
  baseDelayMs,
}: {
  steps: readonly string[];
  variant: "idle" | "productive";
  visible: boolean;
  baseDelayMs: number;
}) {
  const isProductive = variant === "productive";

  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-2 border px-4 py-4 transition-all duration-700 ease-out sm:gap-3 sm:px-5 sm:py-5 motion-reduce:transition-none ${
        isProductive
          ? "border-white/25 bg-white/15 shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
          : "border-white/15 bg-white/10"
      } ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
      style={{ transitionDelay: visible ? `${baseDelayMs}ms` : "0ms" }}
    >
      {steps.map((step, index) => (
        <div key={step} className="flex items-center gap-2 sm:gap-3">
          <span
            className={`rounded-xl px-3 py-2 text-xs font-semibold transition-all duration-500 ease-out sm:px-4 sm:py-2.5 sm:text-sm motion-reduce:transition-none ${
              isProductive
                ? index === steps.length - 1
                  ? "bg-nautical-blue text-white shadow-[0_2px_10px_rgba(0,0,0,0.12)]"
                  : "border border-white/20 bg-white text-nautical-blue shadow-[0_2px_10px_rgba(0,0,0,0.06)]"
                : "border border-white/20 bg-white/80 text-nautical-blue/55 shadow-[0_2px_10px_rgba(0,0,0,0.04)]"
            } ${visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}
            style={{
              transitionDelay: visible ? `${baseDelayMs + 120 + index * 140}ms` : "0ms",
            }}
          >
            {step}
          </span>
          {index < steps.length - 1 ? (
            <ArrowRight
              className={`h-4 w-4 shrink-0 transition-all duration-500 ease-out motion-reduce:transition-none ${
                isProductive ? "text-white/80" : "text-white/40"
              } ${visible ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}`}
              style={{
                transitionDelay: visible ? `${baseDelayMs + 180 + index * 140}ms` : "0ms",
              }}
              strokeWidth={2.25}
              aria-hidden="true"
            />
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default function ProductiveCollateralSection() {
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
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [reduceMotion]);

  const show = reduceMotion || visible;

  return (
    <section
      id="productive-collateral"
      ref={sectionRef}
      className="relative z-10 bg-nautical-blue-light px-3 sm:px-4 md:px-5 pb-3 sm:pb-4 md:pb-5 pt-0"
    >
      <div
        className={`border border-sunrise-coral-dark/40 bg-sunrise-coral p-6 shadow-[0_12px_40px_rgba(255,138,122,0.22)] transition-shadow duration-700 ease-out sm:p-10 md:p-12 lg:p-14 motion-reduce:transition-none ${
          show
            ? "shadow-[0_12px_40px_rgba(255,138,122,0.22)]"
            : "shadow-[0_4px_20px_rgba(255,138,122,0.1)]"
        }`}
      >
        <div className="mx-auto flex max-w-4xl flex-col gap-6 sm:gap-8">
          <AnimatedReveal visible={show} delayMs={0}>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl md:text-3xl">
                Why Productive Collateral?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-base">
                Instead of sitting idle, Harbor markets are backed by assets that
                generate yield.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/85 sm:text-base">
                That yield helps support stable assets, market participants and
                long-term protocol growth.
              </p>
            </div>
          </AnimatedReveal>

          <div className="flex flex-col gap-3 sm:gap-4">
            <FlowStrip
              steps={IDLE_FLOW}
              variant="idle"
              visible={show}
              baseDelayMs={200}
            />
            <FlowStrip
              steps={PRODUCTIVE_FLOW}
              variant="productive"
              visible={show}
              baseDelayMs={450}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
