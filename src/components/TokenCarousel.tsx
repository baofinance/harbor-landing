"use client";

import { useEffect, useRef, useState } from "react";
import { Anchor, Coins, Ship } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ParticipationCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  variant: "coral" | "blue" | "light";
};

const PARTICIPATION_CARDS: ParticipationCard[] = [
  {
    title: "Own",
    description:
      "Provide liquidity for new market launches and get rewarded with a lifetime of yield.",
    icon: Ship,
    href: "https://app.harborfinance.io/genesis",
    variant: "coral",
  },
  {
    title: "Earn",
    description: "Earn yield with haBTC, haETH, haEUR, haUSD, and more.",
    icon: Anchor,
    href: "https://app.harborfinance.io/anchor",
    variant: "blue",
  },
  {
    title: "Leverage",
    description:
      "Earn amplified returns with no funding fees and liquidation protection.",
    icon: Coins,
    href: "https://app.harborfinance.io/sail",
    variant: "light",
  },
];

function ParticipationCardPanel({
  card,
  index,
  isVisible,
}: {
  card: ParticipationCard;
  index: number;
  isVisible: boolean;
}) {
  const Icon = card.icon;

  const styles = {
    coral: {
      card: "border-sunrise-coral-dark/30 bg-sunrise-coral text-white",
      icon: "bg-white/20 text-white",
      body: "text-white/85",
    },
    blue: {
      card: "border-nautical-blue/20 bg-nautical-blue text-white",
      icon: "bg-white/15 text-white",
      body: "text-white/80",
    },
    light: {
      card: "border-nautical-blue/15 bg-nautical-blue/5 text-nautical-blue",
      icon: "bg-nautical-blue text-white",
      body: "text-nautical-blue/70",
    },
  }[card.variant];

  const visibilityClass = isVisible
    ? "translate-x-0 opacity-100"
    : "translate-x-10 opacity-0";

  return (
    <a
      href={card.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex h-full flex-col gap-4 border p-6 transition-all duration-700 ease-out sm:p-8 ${visibilityClass} ${styles.card} hover:opacity-95`}
      style={{ transitionDelay: isVisible ? `${index * 300}ms` : "0ms" }}
    >
      <div
        className={`flex h-10 w-10 items-center justify-center ${styles.icon}`}
      >
        <Icon className="h-4 w-4" strokeWidth={2.25} />
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
          {card.title}
        </h3>
        <p className={`text-sm leading-relaxed sm:text-base ${styles.body}`}>
          {card.description}
        </p>
      </div>
    </a>
  );
}

export function AllOutYieldSection() {
  const [sectionVisible, setSectionVisible] = useState(false);
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
      setSectionVisible(true);
      return;
    }

    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setSectionVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [reduceMotion]);

  const cardsVisible = reduceMotion || sectionVisible;

  return (
    <section
      ref={sectionRef}
      className="relative z-10 bg-nautical-blue-light px-3 sm:px-4 md:px-5 pb-3 sm:pb-4 md:pb-5 pt-0"
    >
      <div className="bg-white p-6 sm:p-10 md:p-12 lg:p-14">
        <div className="flex flex-col gap-8 lg:gap-10">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-nautical-blue sm:text-3xl md:text-4xl">
              One protocol. Three ways to participate.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-3 md:items-stretch">
            {PARTICIPATION_CARDS.map((card, index) => (
              <ParticipationCardPanel
                key={card.title}
                card={card}
                index={index}
                isVisible={cardsVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function StressFreeLeverageSection() {
  return null;
}

export default function TokenCarousel() {
  return <AllOutYieldSection />;
}
