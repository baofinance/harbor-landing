"use client";
import ComingSoonOverlay from "./ComingSoonOverlay";
import Image from "next/image";

export default function SteamTokenSection() {
  return (
    <section className="relative z-10">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-10 py-20">
        {/* Header with enhanced styling */}
        <div className="relative group mb-8 reveal text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-teal-500/5 to-emerald-600/10 blur-2xl rounded-2xl" />
          <div className="relative bg-zinc-900/50 outline outline-1 outline-emerald-500/20 p-6 hover:outline-emerald-500/40 transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-geo uppercase tracking-wider text-white">
              STEAM Token
            </h2>
            <p className="mt-2 text-white/70 max-w-[72ch] mx-auto">
              The governance and incentive token of Zhenglong Protocol. Shape
              roadmap, direct rewards, and participate in protocol economics.
            </p>
          </div>
        </div>

        {/* Benefits with enhanced styling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            title="Revenue Share"
            icon="/community.svg"
            desc="Earn a share of protocol revenue from market operations and fees."
          />
          <Card
            title="Boost Rewards"
            icon="/yield.svg"
            desc="Increase earnings from stability pools and AMM liquidity provision."
          />
          <Card
            title="Governance Rights"
            icon="/governance.svg"
            desc="Vote and direct STEAM emissions to where they matter most."
          />
        </div>

        {/* Enhanced CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center reveal">
          <ComingSoonOverlay>
            <button className="relative group px-6 py-2 bg-zinc-900/50 outline outline-1 outline-emerald-500/30 text-emerald-300/80 hover:text-emerald-300 hover:outline-emerald-500/50 transition-all duration-300 font-geo uppercase tracking-wider cursor-not-allowed card-hover">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 via-teal-500/3 to-emerald-600/5 blur-xl rounded-lg" />
              <span className="relative">Get STEAM</span>
            </button>
          </ComingSoonOverlay>
          <ComingSoonOverlay>
            <button className="relative group px-6 py-2 bg-zinc-900/50 outline outline-1 outline-emerald-500/30 text-emerald-300/80 hover:text-emerald-300 hover:outline-emerald-500/50 transition-all duration-300 font-geo uppercase tracking-wider cursor-not-allowed card-hover">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 via-teal-500/3 to-emerald-600/5 blur-xl rounded-lg" />
              <span className="relative">Earn STEAM</span>
            </button>
          </ComingSoonOverlay>
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

function Card({
  title,
  icon,
  desc,
}: {
  title: string;
  icon: string;
  desc: string;
}) {
  return (
    <div className="relative group h-full">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-teal-500/5 to-emerald-600/10 blur-2xl rounded-2xl" />
      <div className="relative bg-zinc-900/50 outline outline-1 outline-emerald-500/20 p-6 card-hover reveal hover:outline-emerald-500/40 transition-all duration-300 h-full flex flex-col">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-emerald-500/20 outline outline-1 outline-emerald-500/30 flex items-center justify-center flex-shrink-0">
            <Image src={icon} alt={title} width={16} height={16} />
          </div>
          <h3 className="text-lg font-geo uppercase tracking-wider text-white">
            {title}
          </h3>
        </div>
        <p className="mt-3 text-white/70 text-sm flex-grow">{desc}</p>
      </div>
    </div>
  );
}
