"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
      title: "STEAM Token",
      description: "The governance and incentive token of Zhenglong Protocol. Shape the roadmap, direct rewards, and participate in protocol economics.",
      cards: [
        {
          title: "Revenue Share",
          description: "Earn a share of protocol revenue from market operations and fees by staking your STEAM tokens.",
          bullets: [
            "Stake STEAM to earn real yield",
            "Revenue distributed in stablecoins",
            "Directly benefit from protocol growth"
          ]
        },
        {
          title: "Governance Rights",
          description: "Vote on key protocol parameters, direct STEAM emissions to specific markets, and shape the future of Zhenglong.",
          bullets: [
            "One token, one vote",
            "Control over treasury and emissions",
            "Decentralized, community-led governance"
          ]
        }
      ]
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

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};


export default function TokenCarousel() {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([(page + newDirection + slides.length) % slides.length, newDirection]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
        paginate(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [page]);
  
  const activeIndex = page;

  return (
    <section className="relative z-10 overflow-hidden">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-12 py-32">
        <div className="relative h-[600px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute w-full h-full"
            >
              <SlideContent slide={slides[activeIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
            <button
                onClick={() => paginate(-1)}
                className="w-10 h-10 flex items-center justify-center bg-zinc-800/50 hover:bg-zinc-700/50 text-white transition-colors"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-2">
                {slides.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setPage([index, index > page ? 1 : -1])}
                    className={`w-3 h-3 transition-colors ${
                    index === activeIndex ? "bg-emerald-400" : "bg-zinc-600 hover:bg-zinc-500"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                />
                ))}
            </div>
            <button
                onClick={() => paginate(1)}
                className="w-10 h-10 flex items-center justify-center bg-zinc-800/50 hover:bg-zinc-700/50 text-white transition-colors"
                aria-label="Next slide"
            >
                <ChevronRight className="w-6 h-6" />
            </button>
        </div>
      </div>
    </section>
  );
}

function SlideContent({ slide }: { slide: Slide }) {
    return (
        <div>
            <div className="relative mb-12 text-center">
                <h2 className="text-3xl md:text-4xl text-white font-geo uppercase font-medium">
                {slide.title}
                </h2>
                <p className="mt-4 text-white/70 max-w-[72ch] mx-auto">
                {slide.description}
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {slide.cards.map((card, cardIndex) => (
                    <Card key={cardIndex} card={card} />
                ))}
            </div>
        </div>
    )
}

function Card({ card }: { card: Card }) {
    return (
        <div className="relative group h-full">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600/50 to-teal-500/50 blur-lg opacity-20 group-hover:opacity-40 transition duration-300" />
            <div className="relative bg-zinc-900/50 outline outline-1 outline-emerald-500/20 p-8 hover:outline-emerald-500/40 transition-all duration-300 h-full flex flex-col">
                {card.chip && (
                <div className="flex items-center gap-4 mb-4">
                    <Chip>{card.chip}</Chip>
                    <h3 className="text-2xl font-geo uppercase font-bold text-white">
                    {card.title}
                    </h3>
                </div>
                )}
                {!card.chip && (
                <h3 className="text-2xl font-geo uppercase text-white font-bold mb-4">
                    {card.title}
                </h3>
                )}
                <p className="text-white/70 flex-grow mb-6">
                {card.description}
                </p>
                <ul className="space-y-3">
                {card.bullets.map((bullet, bulletIndex) => (
                    <Bullet key={bulletIndex} text={bullet} />
                ))}
                </ul>
                <div className="mt-auto pt-6">
                <a
                    href="#"
                    className="text-sm text-emerald-300/80 hover:text-emerald-300 transition-colors inline-flex items-center gap-2"
                >
                    Learn More
                    <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                    </svg>
                </a>
                </div>
            </div>
        </div>
    )
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center uppercase tracking-wider text-xs text-emerald-300/80 outline outline-1 outline-emerald-500/30 bg-emerald-500/10 px-2 py-1">
      {children}
    </span>
  );
}

function Bullet({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-white/80">
      <svg
        className="w-5 h-5 mt-0.5 text-emerald-400 flex-shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
      <span className="text-sm">{text}</span>
    </li>
  );
}
