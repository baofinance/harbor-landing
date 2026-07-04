import { Check } from "lucide-react";

const TRUST_ITEMS = [
  "Audited by Sherlock",
  "Live on Ethereum",
  "Productive Collateral",
  "No Liquidations",
  "Revenue Generating",
] as const;

export default function HeroTrustStrip() {
  return (
    <section
      aria-label="Protocol highlights"
      className="relative z-10 bg-nautical-blue-light px-3 sm:px-4 md:px-5 pb-3 sm:pb-4 md:pb-5 pt-0"
    >
      <div className="border-y border-white/10 bg-nautical-blue py-2.5 sm:py-3">
        <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-5 gap-y-2 px-4 sm:gap-x-8 sm:px-6 md:gap-x-10">
          {TRUST_ITEMS.map((item) => (
            <li
              key={item}
              className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white/90 sm:text-xs md:text-sm"
            >
              <Check
                className="h-3.5 w-3.5 shrink-0 text-sunrise-coral sm:h-4 sm:w-4"
                strokeWidth={2.5}
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
