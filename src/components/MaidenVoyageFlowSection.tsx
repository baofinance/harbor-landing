"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import {
  ArrowDownToLine,
  CircleCheck,
  Rocket,
  Sparkles,
  Trophy,
  Wallet,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type FlowStepData = {
  label: string;
  subtitle: string;
  icon: LucideIcon;
  isReward?: boolean;
};

const FLOW_STEPS: FlowStepData[] = [
  {
    label: "Deposit",
    subtitle: "Support the market before launch.",
    icon: ArrowDownToLine,
  },
  {
    label: "Market Launches",
    subtitle: "Trading begins.",
    icon: Rocket,
  },
  {
    label: "Own Part of the Market",
    subtitle: "Receive your share of market fees.",
    icon: Wallet,
  },
  {
    label: "Keep Your Share Forever",
    subtitle: "Continue earning forever.",
    icon: Trophy,
    isReward: true,
  },
];

const CLOSING_LINE =
  "Unlike traditional liquidity mining, your participation doesn't disappear when your deposit does.";

function ProgressDot({ active }: { active: boolean }) {
  return (
    <div
      className={`h-3 w-3 shrink-0 rounded-full border-2 transition-colors duration-500 ${
        active
          ? "border-sunrise-coral bg-sunrise-coral"
          : "border-nautical-blue/20 bg-nautical-blue/10"
      }`}
      aria-hidden="true"
    />
  );
}

function ProgressSegment({
  filled,
  orientation,
}: {
  filled: boolean;
  orientation: "vertical" | "horizontal";
}) {
  const isVertical = orientation === "vertical";

  return (
    <div
      className={`relative overflow-hidden ${
        isVertical ? "my-1 w-0.5 flex-1 min-h-6" : "mx-1 h-0.5 flex-1"
      }`}
      aria-hidden="true"
    >
      <div
        className={`absolute bg-nautical-blue/15 ${
          isVertical ? "inset-0" : "inset-0 rounded-full"
        }`}
      />
      <div
        className={`absolute bg-nautical-blue transition-all duration-700 ease-out ${
          isVertical
            ? `left-0 right-0 top-0 origin-top ${filled ? "h-full" : "h-0"}`
            : `bottom-0 top-0 left-0 rounded-full ${filled ? "w-full" : "w-0"}`
        }`}
      />
    </div>
  );
}

function HorizontalProgressTimeline({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="flex w-full items-center px-[calc(12.5%-0.375rem)]">
      {FLOW_STEPS.map((step, index) => (
        <Fragment key={step.label}>
          <ProgressDot active={index <= activeIndex} />
          {index < FLOW_STEPS.length - 1 && (
            <ProgressSegment
              filled={index < activeIndex}
              orientation="horizontal"
            />
          )}
        </Fragment>
      ))}
    </div>
  );
}

function FlowStepCard({
  step,
  index,
  isLit,
  isVisible,
  stepRef,
}: {
  step: FlowStepData;
  index: number;
  isLit: boolean;
  isVisible: boolean;
  stepRef: (el: HTMLDivElement | null) => void;
}) {
  const Icon = step.icon;
  const visibilityClass = isVisible
    ? "translate-y-0 opacity-100"
    : "translate-y-6 opacity-0";
  const litClass = isVisible && !isLit ? "opacity-50" : "";

  if (step.isReward) {
    return (
      <div
        ref={stepRef}
        className={`flex h-full min-h-[9.5rem] flex-col gap-3 rounded-2xl border px-4 py-5 transition-all duration-700 ease-out sm:px-5 sm:py-6 ${visibilityClass} ${litClass} ${
          isLit
            ? "border-sunrise-coral-dark/40 bg-sunrise-coral"
            : "border-sunrise-coral-dark/20 bg-sunrise-coral/80"
        }`}
        style={{ transitionDelay: isVisible ? `${index * 500}ms` : "0ms" }}
      >
        <div className="flex h-10 shrink-0 items-center gap-2">
          <CircleCheck
            className="h-5 w-5 text-seafoam-mint-light"
            strokeWidth={2.25}
          />
          <Trophy className="h-5 w-5 text-white" strokeWidth={2.25} />
          <Sparkles
            className="h-4 w-4 text-white/90"
            strokeWidth={2.25}
          />
        </div>
        <div className="flex flex-1 flex-col text-left">
          <p className="text-sm font-semibold leading-snug text-white sm:text-base">
            {step.label}
          </p>
          <p className="mt-1.5 text-xs leading-relaxed text-white/75 sm:text-sm">
            {step.subtitle}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={stepRef}
      className={`flex h-full min-h-[9.5rem] flex-col gap-3 rounded-2xl border px-4 py-5 transition-all duration-700 ease-out sm:px-5 sm:py-6 ${visibilityClass} ${litClass} ${
        isLit
          ? "border-nautical-blue/20 bg-nautical-blue"
          : "border-nautical-blue/10 bg-nautical-blue/80"
      }`}
      style={{ transitionDelay: isVisible ? `${index * 500}ms` : "0ms" }}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-white/15 text-white">
        <Icon className="h-4 w-4" strokeWidth={2.25} />
      </div>
      <div className="flex flex-1 flex-col text-left">
        <p className="text-sm font-semibold leading-snug text-white sm:text-base">
          {step.label}
        </p>
        <p className="mt-1.5 text-xs leading-relaxed text-white/75 sm:text-sm">
          {step.subtitle}
        </p>
      </div>
    </div>
  );
}

export default function MaidenVoyageFlowSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReduceMotion(mediaQuery.matches);
    updateMotion();
    mediaQuery.addEventListener("change", updateMotion);
    return () => mediaQuery.removeEventListener("change", updateMotion);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setSectionVisible(true);
      return;
    }

    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
        } else {
          setSectionVisible(false);
          setActiveIndex(0);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [reduceMotion]);

  useEffect(() => {
    if (reduceMotion) {
      setActiveIndex(FLOW_STEPS.length - 1);
      return;
    }

    const visible = new Set<number>();
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((element, index) => {
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            visible.add(index);
          } else {
            visible.delete(index);
          }

          const highestVisible =
            visible.size > 0 ? Math.max(...Array.from(visible)) : 0;
          setActiveIndex(highestVisible);
        },
        { threshold: 0.4 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [reduceMotion]);

  const setStepRef = (index: number) => (el: HTMLDivElement | null) => {
    stepRefs.current[index] = el;
  };

  return (
    <section
      id="maiden-voyage-flow"
      ref={sectionRef}
      className="relative z-10 bg-nautical-blue-light px-3 sm:px-4 md:px-5 pb-3 sm:pb-4 md:pb-5 pt-0"
    >
      <div className="bg-white p-6 sm:p-10 md:p-12 lg:p-14">
        <div className="flex flex-col gap-8 lg:gap-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-nautical-blue/50">
              Maiden Voyages
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-nautical-blue sm:text-3xl md:text-4xl">
              Launch model.
            </h2>
          </div>

          <div className="mx-auto w-full max-w-md xl:max-w-none">
            <div className="mb-0 hidden xl:mb-6 xl:block">
              <HorizontalProgressTimeline activeIndex={activeIndex} />
            </div>

            <div className="flex flex-col xl:grid xl:grid-cols-4 xl:items-stretch xl:gap-4">
              {FLOW_STEPS.map((step, index) => {
                const isLit = reduceMotion || index <= activeIndex;

                return (
                  <div key={step.label} className="flex gap-4 xl:h-full">
                    <div className="flex w-3 shrink-0 flex-col items-center pt-6 xl:hidden">
                      <ProgressDot active={isLit} />
                      {index < FLOW_STEPS.length - 1 && (
                        <ProgressSegment
                          filled={index < activeIndex || reduceMotion}
                          orientation="vertical"
                        />
                      )}
                    </div>
                    <div className="min-w-0 flex-1 pb-4 xl:h-full xl:pb-0">
                      <FlowStepCard
                        step={step}
                        index={index}
                        isLit={isLit}
                        isVisible={sectionVisible}
                        stepRef={setStepRef(index)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <p className="mx-auto max-w-xl text-center text-sm leading-relaxed text-nautical-blue/70">
            {CLOSING_LINE}
          </p>
        </div>
      </div>
    </section>
  );
}
