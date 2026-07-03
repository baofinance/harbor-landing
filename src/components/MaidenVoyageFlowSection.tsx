"use client";

import { Fragment } from "react";
import {
  ArrowDown,
  ArrowDownToLine,
  Infinity,
  Rocket,
  RotateCw,
  TrendingUp,
  Wallet,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const FLOW_STEPS: { label: string; icon: LucideIcon }[] = [
  { label: "Deposit", icon: ArrowDownToLine },
  { label: "Market Launches", icon: Rocket },
  { label: "Receive Revenue Share", icon: Wallet },
  { label: "Earn Market Revenue", icon: TrendingUp },
  { label: "Withdraw Anytime", icon: RotateCw },
  { label: "Keep Your Lifetime Share", icon: Infinity },
];

function FlowStep({
  label,
  icon: Icon,
  index,
}: {
  label: string;
  icon: LucideIcon;
  index: number;
}) {
  return (
    <div className="flex flex-col items-center text-center gap-2.5 min-w-0 xl:flex-1 border border-nautical-blue/10 bg-nautical-blue/5 px-4 py-5 w-full xl:w-auto">
      <div className="flex h-10 w-10 items-center justify-center bg-[#FF8A7A] text-white">
        <Icon className="h-4 w-4" strokeWidth={2.25} />
      </div>
      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-nautical-blue/45">
        Step {index + 1}
      </p>
      <p className="text-sm sm:text-base font-semibold text-nautical-blue leading-snug max-w-[11rem] xl:max-w-[8.5rem] 2xl:max-w-[10rem]">
        {label}
      </p>
    </div>
  );
}

function VerticalConnector() {
  return (
    <div className="flex justify-center py-1.5 xl:hidden" aria-hidden="true">
      <ArrowDown className="h-4 w-4 text-nautical-blue/35" strokeWidth={2} />
    </div>
  );
}

function HorizontalConnector() {
  return (
    <div
      className="hidden xl:flex items-center self-center px-0.5 2xl:px-1 shrink-0"
      aria-hidden="true"
    >
      <div className="h-px w-3 2xl:w-5 bg-nautical-blue/15" />
      <ArrowDown
        className="h-3 w-3 -rotate-90 text-nautical-blue/35 shrink-0"
        strokeWidth={2}
      />
      <div className="h-px w-3 2xl:w-5 bg-nautical-blue/15" />
    </div>
  );
}

export default function MaidenVoyageFlowSection() {
  return (
    <section
      id="maiden-voyage-flow"
      className="relative z-10 bg-nautical-blue-light px-3 sm:px-4 md:px-5 pb-3 sm:pb-4 md:pb-5 pt-0"
    >
      <div className="bg-white p-6 sm:p-10 md:p-12 lg:p-14">
        <div className="flex flex-col gap-8 lg:gap-10">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-nautical-blue/50">
              Maiden Voyages
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-nautical-blue tracking-tight">
              Deposit once. Earn forever.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-nautical-blue/70">
              Each new market starts with a Maiden Voyage. Join at launch to
              receive a permanent share of that market&apos;s revenue.
            </p>
          </div>

          <div className="flex flex-col items-center xl:flex-row xl:items-start xl:justify-between max-w-md xl:max-w-none mx-auto w-full">
            {FLOW_STEPS.map((step, index) => (
              <Fragment key={step.label}>
                <FlowStep
                  label={step.label}
                  icon={step.icon}
                  index={index}
                />
                {index < FLOW_STEPS.length - 1 && (
                  <>
                    <VerticalConnector />
                    <HorizontalConnector />
                  </>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
