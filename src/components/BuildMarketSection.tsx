"use client";
import Link from "next/link";

const BuildMarketSection = () => {
  return (
    <section className="relative z-10">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-10 py-20">
        {/* Header */}
        <div className="bg-zinc-900/50 outline outline-1 outline-white/10 p-6 mb-6 text-center">
          <h2 className="text-2xl md:text-3xl font-geo uppercase tracking-wider text-white">
            Collaborate on a New Market
          </h2>
          <p className="mt-2 text-white/70 max-w-[72ch] mx-auto">
            Launch your own market. If you have a collateral token and a price
            feed, you’re ready to go.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-zinc-900/50 outline outline-1 outline-white/10 p-6">
            <h3 className="text-lg font-geo uppercase tracking-wider text-white mb-2">
              Collateral Token
            </h3>
            <p className="text-white/70 text-sm">
              Any ERC20 token can serve as collateral. Common choices include
              stablecoins and major cryptocurrencies.
            </p>
          </div>
          <div className="bg-zinc-900/50 outline outline-1 outline-white/10 p-6">
            <h3 className="text-lg font-geo uppercase tracking-wider text-white mb-2">
              Price Feed
            </h3>
            <p className="text-white/70 text-sm">
              Connect any data source through Chainlink oracles — from
              traditional markets to novel data streams.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-6 text-center">
          <Link
            href="https://discord.com/invite/BW3P62vJXT"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2 bg-zinc-900/50 outline outline-1 outline-white/10 text-white/80 hover:text-white transition-colors font-geo uppercase tracking-wider"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BuildMarketSection;
