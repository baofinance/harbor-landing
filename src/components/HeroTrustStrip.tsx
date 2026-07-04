"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

const TRUST_ITEMS = [
  "Audited by Sherlock",
  "Live on Ethereum",
  "Productive Collateral",
  "No Liquidations",
  "Revenue Generating",
] as const;

function TrustItem({ item }: { item: string }) {
  return (
    <li className="inline-flex shrink-0 items-center gap-1.5 px-3 text-[11px] font-medium text-white/90 sm:px-4 sm:text-xs md:text-sm">
      <Check
        className="h-3.5 w-3.5 shrink-0 text-sunrise-coral sm:h-4 sm:w-4"
        strokeWidth={2.5}
        aria-hidden="true"
      />
      {item}
    </li>
  );
}

export default function HeroTrustStrip() {
  const [inView, setInView] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const marqueeItems = [...TRUST_ITEMS, ...TRUST_ITEMS];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReduceMotion(mediaQuery.matches);
    updateMotion();
    mediaQuery.addEventListener("change", updateMotion);
    return () => mediaQuery.removeEventListener("change", updateMotion);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setInView(true);
      return;
    }

    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [reduceMotion]);

  const show = reduceMotion || inView;

  return (
    <section
      ref={sectionRef}
      aria-label="Protocol highlights"
      className="relative z-10 bg-nautical-blue-light px-3 sm:px-4 md:px-5 pb-3 sm:pb-4 md:pb-5 pt-0"
    >
      <div
        className={`overflow-hidden border-y border-white/10 bg-nautical-blue py-2.5 transition-all duration-700 ease-out sm:py-3 ${
          show ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
      >
        {reduceMotion ? (
          <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-5 gap-y-2 px-4 sm:gap-x-8 sm:px-6 md:gap-x-10">
            {TRUST_ITEMS.map((item) => (
              <TrustItem key={item} item={item} />
            ))}
          </ul>
        ) : (
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-nautical-blue to-transparent sm:w-16" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-nautical-blue to-transparent sm:w-16" />
            <ul
              className={`trust-scroll-track flex w-max items-center gap-6 sm:gap-10 ${
                show ? "trust-scroll-track--active" : ""
              }`}
            >
              {marqueeItems.map((item, index) => (
                <TrustItem key={`${item}-${index}`} item={item} />
              ))}
            </ul>
          </div>
        )}
      </div>

      <style jsx>{`
        .trust-scroll-track--active {
          animation: trust-marquee 32s linear infinite;
        }

        @keyframes trust-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
