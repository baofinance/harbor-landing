"use client";

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
}: {
  card: ParticipationCard;
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

  return (
    <a
      href={card.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex h-full flex-col gap-4 border p-6 transition-colors sm:p-8 ${styles.card} hover:opacity-95`}
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
  return (
    <section className="relative z-10 bg-nautical-blue-light px-3 sm:px-4 md:px-5 pb-3 sm:pb-4 md:pb-5 pt-0">
      <div className="bg-white p-6 sm:p-10 md:p-12 lg:p-14">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10 xl:gap-14">
          <div className="lg:w-[34%] xl:w-[32%]">
            <h2 className="leading-none text-3xl font-bold tracking-tight text-nautical-blue sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl">
              <span className="block whitespace-nowrap">Own.</span>
              <span className="block whitespace-nowrap">Earn.</span>
              <span className="block whitespace-nowrap">Leverage.</span>
            </h2>
            <p className="mt-4 text-lg font-semibold text-nautical-blue sm:text-xl">
              One protocol.
            </p>
            <p className="mt-1 text-sm text-nautical-blue/70 sm:text-base">
              Three ways to participate.
            </p>
          </div>

          <div className="grid flex-1 grid-cols-1 gap-3 sm:gap-4 md:grid-cols-3 md:items-stretch">
            {PARTICIPATION_CARDS.map((card) => (
              <ParticipationCardPanel key={card.title} card={card} />
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
