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
        chip: "zhe",
        title: "ZHE Tokens",
        description:
          "Pegged assets that aim to track price feeds 1:1 while accruing protocol yield via stability pools.",
        bullets: [
          "Pegged 1:1 to oracle-aligned targets",
          "Earns real yield via pool-based accrual",
          "Composable and integrates across DeFi",
        ],
      },
      {
        chip: "steamed",
        title: "STEAMED Tokens",
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
  return (
    <section className="relative z-10">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {slides.map((slide, slideIndex) => (
            <React.Fragment key={slideIndex}>
              {/* Section header tile */}
              <div className="md:col-span-12">
                <div className="px-2 py-2">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl uppercase tracking-wide font-semibold text-indigo-300 drop-shadow-[0_0_12px_rgba(99,102,241,0.35)] text-center">
                    {slide.title}
                  </h2>
                  <div className="mx-auto mt-2 h-px w-20 bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
                  <p className="mt-3 sm:mt-4 text-white/80 text-sm sm:text-base max-w-[72ch] mx-auto text-center">
                    {slide.description}
                  </p>
                </div>
              </div>

              {/* Cards for this section */}
              {slide.cards.map((card, cardIndex) => (
                <div key={cardIndex} className="md:col-span-6">
                  <BentoCard card={card} />
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function BentoCard({ card }: { card: Card }) {
  return (
    <div className="relative group h-full hover-lift">
      {/* blue glow backdrop */}
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-indigo-400/25 via-sky-300/15 to-indigo-400/25 blur-lg opacity-10 group-hover:opacity-25 transition duration-300" />
      <div className="relative bg-zinc-900/30 backdrop-blur-lg border border-indigo-500/20 rounded-2xl p-6 sm:p-8 transition-all duration-300 h-full flex flex-col">
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
        <p className="text-white/80 flex-grow mb-5 sm:mb-6">
          {card.description}
        </p>
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
    <span className="inline-flex items-center uppercase tracking-wider text-xs text-indigo-300 border border-indigo-500/30 bg-indigo-500/10 px-2.5 py-1 rounded-full">
      {children}
    </span>
  );
}

function Bullet({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-white/85">
      <span className="mt-2 h-2 w-2 rounded-full bg-indigo-300/90 flex-shrink-0" />
      <span className="text-sm">{text}</span>
    </li>
  );
}
