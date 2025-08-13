"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function IdoBanner() {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("idoBannerDismissed");
      if (stored === "true") setIsVisible(false);
    } catch {
      /* empty */
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div>
      <div className="relative mx-auto max-w-[1300px] px-4 sm:px-10 mt-2">
        <div className="absolute inset-0 -z-10 blur-2xl opacity-60 bg-gradient-to-r from-emerald-600/20 via-teal-500/10 to-emerald-600/20" />

        <div className="p-[1px] bg-gradient-to-r from-emerald-500/30 via-teal-400/30 to-emerald-500/30">
          <div className=" bg-[#121212]/80 backdrop-blur-sm">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 px-5 sm:px-6 py-4">
              <div className="flex items-start sm:items-center gap-4">
                <div className="relative shrink-0">
                  <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />
                  <div className="h-10 w-10 rounded-lg bg-emerald-500/15 flex items-center justify-center ring-1 ring-emerald-500/30">
                    <Image src="/rocket.svg" alt="IDO" width={20} height={20} />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-500/30 px-2.5 py-1 text-xs font-semibold tracking-wide text-emerald-300">
                      Community Sale
                    </span>
                    <span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-2.5 py-1 text-xs font-semibold tracking-wide text-white/80">
                      Live now
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-geo tracking-wider text-white">
                    Participate in the STEAM IDO
                  </h3>
                  <p className="text-sm text-white/70 max-w-[60ch]">
                    Deposit USDC during the sale period. Claim will be enabled
                    after TGE. Read the docs for complete details and
                    eligibility.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 w-full lg:w-auto">
                <Link
                  href="/ido"
                  className="inline-flex items-center justify-center rounded-lg bg-emerald-500/90 hover:bg-emerald-500 text-black px-4 sm:px-5 py-2.5 text-sm sm:text-base font-geo tracking-wider transition-colors"
                  aria-label="Participate in IDO"
                >
                  Participate Now
                </Link>
                <Link
                  href="https://docs.zhenglong.finance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-white px-4 sm:px-5 py-2.5 text-sm sm:text-base font-geo tracking-wider transition-colors"
                  aria-label="Read IDO docs"
                >
                  Read Docs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
