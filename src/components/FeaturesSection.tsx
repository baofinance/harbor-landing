"use client";
import Image from "next/image";
import React from "react";

export default function FeaturesSection() {
  return (
    <section className="relative z-10">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-10 py-20">
        {/* Header and overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 bg-zinc-900/50 outline outline-1 outline-white/10 p-6 flex flex-col gap-4 reveal">
            <span className="text-xs uppercase tracking-widest text-white/50">
              Overview
            </span>
            <h2 className="text-3xl font-geo uppercase tracking-wider text-white">
              Engineered Tokens
            </h2>
            <p className="text-white/70">
              Two complementary primitives designed for composability and
              clarity: pegged, yield-bearing ZHE tokens and
              liquidation-protected, variable-leverage STEAMED tokens.
            </p>
            <ul className="mt-2 space-y-2">
              <Bullet
                icon="/pricefeed.svg"
                text="Transparent price feed integrations"
              />
              <Bullet
                icon="/stability.svg"
                text="Protocol-native stability pools"
              />
              <Bullet
                icon="/rebalance.svg"
                text="Automated rebalancing and guardrails"
              />
            </ul>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* ZHE Card */}
            <div className="bg-zinc-900/50 outline outline-1 outline-white/10 p-6 card-hover reveal reveal-del-1">
              <div className="flex items-center justify-between">
                <Chip>zhe</Chip>
              </div>
              <h3 className="mt-3 text-2xl font-geo uppercase tracking-wider text-white">
                ZHE Tokens
              </h3>
              <p className="mt-2 text-white/70 max-w-[60ch]">
                Pegged assets that aim to track price feeds 1:1 while accruing
                protocol yield via stability pools.
              </p>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Tile
                  icon="/peg.svg"
                  title="Pegged 1:1"
                  desc="Oracle-aligned targets"
                />
                <Tile
                  icon="/yield.svg"
                  title="Real Yield"
                  desc="Pool-based accrual"
                />
                <Tile
                  icon="/community.svg"
                  title="Composable"
                  desc="Integrates across DeFi"
                />
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <Tag>zheETH</Tag>
                <Tag>zheBTC</Tag>
                <Tag>More soon</Tag>
              </div>
            </div>

            {/* STEAMED Card */}
            <div className="bg-zinc-900/50 outline outline-1 outline-white/10 p-6 card-hover reveal reveal-del-2">
              <div className="flex items-center justify-between">
                <Chip>steamed</Chip>
              </div>
              <h3 className="mt-3 text-2xl font-geo uppercase tracking-wider text-white">
                STEAMED Tokens
              </h3>
              <p className="mt-2 text-white/70 max-w-[60ch]">
                Liquidation-protected, variable leverage with automated
                rebalancing and clear directional exposure.
              </p>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Tile
                  icon="/leverage.svg"
                  title="Leverage"
                  desc="Variable exposure"
                />
                <Tile
                  icon="/rebalance.svg"
                  title="Auto-Rebalance"
                  desc="Manage drift & risk"
                />
                <Tile
                  icon="/defi.svg"
                  title="Defined Payoff"
                  desc="Transparent mechanics"
                />
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <Tag>USD/ETH</Tag>
                <Tag>USD/BTC</Tag>
                <Tag>ETH/BTC</Tag>
              </div>
            </div>
          </div>
        </div>

        {/* Capability strip */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Strip icon="/stability.svg" text="Protocol Stability Pools" />
          <Strip icon="/rebalance.svg" text="Automated Rebalancing" />
          <Strip icon="/yield.svg" text="Yield-Oriented Design" />
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .reveal {
          opacity: 0;
          animation: fadeUp 700ms ease forwards;
        }
        .reveal-del-1 {
          animation-delay: 100ms;
        }
        .reveal-del-2 {
          animation-delay: 200ms;
        }
        .card-hover {
          transition: transform 200ms ease, filter 200ms ease;
        }
        .card-hover:hover {
          transform: translateY(-2px);
          filter: brightness(1.05);
        }
      `}</style>
    </section>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center uppercase tracking-wider text-xs text-white/70 outline outline-1 outline-white/10 bg-white/5 px-2 py-1">
      {children}
    </span>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center text-xs text-white/70 outline outline-1 outline-white/10 bg-white/5 px-2 py-1">
      {children}
    </span>
  );
}

function Bullet({ icon, text }: { icon: string; text: string }) {
  return (
    <li className="flex items-center gap-3 text-white/80">
      <Image src={icon} alt="" width={18} height={18} />
      <span className="text-sm">{text}</span>
    </li>
  );
}

function Tile({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-3 bg-zinc-900/50 outline outline-1 outline-white/10 p-3 card-hover reveal">
      <Image src={icon} alt={title} width={20} height={20} />
      <div>
        <p className="text-sm text-white font-medium">{title}</p>
        <p className="text-xs text-white/70">{desc}</p>
      </div>
    </div>
  );
}

function Strip({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center gap-3 bg-zinc-900/50 outline outline-1 outline-white/10 px-4 py-3 card-hover reveal">
      <Image src={icon} alt={text} width={20} height={20} />
      <span className="text-sm text-white/70">{text}</span>
    </div>
  );
}
