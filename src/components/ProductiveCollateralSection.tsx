import { ArrowRight } from "lucide-react";

const IDLE_FLOW = ["Idle ETH", "Nothing"] as const;

const PRODUCTIVE_FLOW = [
  "Productive ETH",
  "Yield",
  "Users + Markets + TIDE",
] as const;

function FlowStrip({
  steps,
  variant,
}: {
  steps: readonly string[];
  variant: "idle" | "productive";
}) {
  const isProductive = variant === "productive";

  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-2 border px-4 py-4 sm:gap-3 sm:px-5 sm:py-5 ${
        isProductive
          ? "border-white/25 bg-white/15 shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
          : "border-white/15 bg-white/10"
      }`}
    >
      {steps.map((step, index) => (
        <div key={step} className="flex items-center gap-2 sm:gap-3">
          <span
            className={`rounded-full px-3 py-1.5 text-xs font-semibold sm:px-4 sm:text-sm ${
              isProductive
                ? index === steps.length - 1
                  ? "bg-nautical-blue text-white"
                  : "border border-white/20 bg-white text-nautical-blue"
                : "border border-white/20 bg-white/80 text-nautical-blue/55"
            }`}
          >
            {step}
          </span>
          {index < steps.length - 1 ? (
            <ArrowRight
              className={`h-4 w-4 shrink-0 ${
                isProductive ? "text-white/80" : "text-white/40"
              }`}
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
  return (
    <section
      id="productive-collateral"
      className="relative z-10 bg-nautical-blue-light px-3 sm:px-4 md:px-5 pb-3 sm:pb-4 md:pb-5 pt-0"
    >
      <div className="border border-sunrise-coral-dark/40 bg-sunrise-coral p-6 shadow-[0_12px_40px_rgba(255,138,122,0.22)] sm:p-10 md:p-12 lg:p-14">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 sm:gap-8">
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

          <div className="flex flex-col gap-3 sm:gap-4">
            <FlowStrip steps={IDLE_FLOW} variant="idle" />
            <FlowStrip steps={PRODUCTIVE_FLOW} variant="productive" />
          </div>
        </div>
      </div>
    </section>
  );
}
