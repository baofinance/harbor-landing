"use client";
import Link from "next/link";

const BuildMarketSection = () => {
  return (
    <section className="relative z-10">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-10 py-20">
        {/* Header with enhanced styling */}
        <div className="relative group mb-6 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-teal-500/5 to-emerald-600/10 blur-2xl rounded-2xl" />
          <div className="relative bg-zinc-900/50 outline outline-1 outline-emerald-500/20 p-6 hover:outline-emerald-500/40 transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-geo uppercase tracking-wider text-white">
              Collaborate on a New Market
            </h2>
            <p className="mt-2 text-white/70 max-w-[72ch] mx-auto">
              Launch your own market. If you have a collateral token and a price
              feed, you're ready to go.
            </p>
          </div>
        </div>

        {/* Steps with enhanced styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative group h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-teal-500/5 to-emerald-600/10 blur-2xl rounded-2xl" />
            <div className="relative bg-zinc-900/50 outline outline-1 outline-emerald-500/20 p-6 hover:outline-emerald-500/40 transition-all duration-300 h-full flex flex-col">
              <h3 className="text-lg font-geo uppercase tracking-wider text-white mb-2">
                Collateral Token
              </h3>
              <p className="text-white/70 text-sm flex-grow">
                Any ERC20 token can serve as collateral. Common choices include
                stablecoins and major cryptocurrencies.
              </p>
            </div>
          </div>
          <div className="relative group h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-teal-500/5 to-emerald-600/10 blur-2xl rounded-2xl" />
            <div className="relative bg-zinc-900/50 outline outline-1 outline-emerald-500/20 p-6 hover:outline-emerald-500/40 transition-all duration-300 h-full flex flex-col">
              <h3 className="text-lg font-geo uppercase tracking-wider text-white mb-2">
                Price Feed
              </h3>
              <p className="text-white/70 text-sm flex-grow">
                Connect any data source through Chainlink oracles — from
                traditional markets to novel data streams.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced CTA */}
        <div className="pt-6 text-center">
          <Link
            href="https://discord.com/invite/BW3P62vJXT"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group inline-flex items-center justify-center px-6 py-2 bg-zinc-900/50 outline outline-1 outline-emerald-500/30 text-emerald-300/80 hover:text-emerald-300 hover:outline-emerald-500/50 transition-all duration-300 font-geo uppercase tracking-wider"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 via-teal-500/3 to-emerald-600/5 blur-xl rounded-lg" />
            <span className="relative">Contact Us</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BuildMarketSection;
