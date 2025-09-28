"use client";

import React from "react";

// Types matching previous data structure
type Card = {
  chip?: string;
  title: string;
  description: string;
  bullets: string[];
};

type Slide = {
  title: string;
  description: string;
  cards: Card[];
};

// Previous slides data, kept but re-styled to blue accents
const slides: Slide[] = [
  {
    title: "Engineered Tokens",
    description:
      "Two complementary primitives designed for composability and clarity.",
    cards: [
      {
        chip: "anchor",
        title: "Anchor Tokens",
        description:
          "Pegged assets that aim to track price feeds 1:1 while accruing protocol yield via stability pools.",
        bullets: [
          "Pegged 1:1 to oracle-aligned targets",
          "Earns real yield via pool-based accrual",
          "Composable and integrates across DeFi",
        ],
      },
      {
        chip: "sail",
        title: "Sail Tokens",
        description:
          "Liquidation-protected, variable leverage with automated rebalancing and clear directional exposure.",
        bullets: [
          "Variable leverage for directional exposure",
          "Automated rebalancing to manage drift & risk",
          "Defined payoff with transparent mechanics",
        ],
      },
    ],
  },
  {
    title: "Stability Pools",
    description:
      "Deposit into protocol stability pools to secure the market during stress and earn sustainable rewards.",
    cards: [
      {
        title: "Market Solvency",
        description:
          "When a market approaches its minimum collateral ratio, stability pools step in to rebalance without liquidations.",
        bullets: [
          "Redeem collateral at market value to restore ratios",
          "Swap to steamed tokens during stability actions",
          "Actions are targeted to improve collateral ratios",
        ],
      },
      {
        title: "Yield Generation",
        description:
          "Depositors receive protocol rewards that compound stability with aligned incentives.",
        bullets: [
          "Earn from yield-bearing collateral used by the protocol",
          "Receive STEAM as additional incentives for participation",
          "Capture a share of protocol revenue and fees",
        ],
      },
    ],
  },
];

export default function TokenCarousel() {
  const combinedTitle = "Tokens & Stability";
  const combinedDescription = `${slides[0].description} ${slides[1].description}`;
  const combinedCards = [...slides[0].cards, ...slides[1].cards];

  return (
    <section className="relative z-10">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-12 py-24">
        <div className="px-2 py-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl uppercase tracking-wide font-semibold text-white text-center">
            {combinedTitle}
          </h2>
          <div className="mx-auto mt-2 h-px w-20 bg-gradient-to-r from-transparent via-[#00df82]/40 to-transparent" />
          <p className="mt-3 sm:mt-4 text-white/70 text-sm sm:text-base max-w-[68ch] mx-auto text-center">
            {combinedDescription}
          </p>
        </div>

        {/* Token cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <BentoCard card={combinedCards[0]} />
          <BentoCard card={combinedCards[1]} />
        </div>

        {/* Stability subheading */}
        <div className="mt-10 px-2 text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl uppercase tracking-wide font-semibold text-white">
            Market Solvency & Yield Generation
          </h3>
          <div className="mx-auto mt-2 h-px w-20 bg-gradient-to-r from-transparent via-[#00df82]/40 to-transparent" />
        </div>

        {/* Stability cards */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <BentoCard card={combinedCards[2]} />
          <BentoCard card={combinedCards[3]} />
        </div>
      </div>
    </section>
  );
}

function BentoCard({ card }: { card: Card }) {
  return (
    <div className="relative group h-full hover-lift">
      <div className="relative border border-white/15 bg-white/5 backdrop-blur-md rounded-lg p-6 transition-all duration-300 h-full flex flex-col shadow-[0_8px_30px_rgba(0,0,0,0.30)] hover:bg-white/10 hover:border-white/25">
        {card.chip && (
          <div className="flex items-center gap-4 mb-4">
            <Chip>{card.chip}</Chip>
            <h3 className="text-xl sm:text-2xl uppercase font-bold text-white">
              {card.title}
            </h3>
          </div>
        )}
        {!card.chip && (
          <h3 className="text-xl sm:text-2xl uppercase text-white font-bold mb-4">
            {card.title}
          </h3>
        )}
        <p className="text-white/70 flex-grow mb-4">{card.description}</p>
        <ul className="space-y-2.5 sm:space-y-3">
          {card.bullets.map((bullet, bulletIndex) => (
            <Bullet key={bulletIndex} text={bullet} />
          ))}
        </ul>
        <div className="mt-auto pt-5 sm:pt-6 text-sm text-indigo-200/80">
          &nbsp;
        </div>
      </div>
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center uppercase tracking-wider text-[10px] text-white/85 border border-white/15 bg-white/5 backdrop-blur-md px-2.5 py-0.5 rounded-full">
      {children}
    </span>
  );
}

function Bullet({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-white/85">
      <span className="mt-2 h-2 w-2 rounded bg-[#00df82]/70 flex-shrink-0" />
      <span className="text-sm">{text}</span>
    </li>
  );
}
