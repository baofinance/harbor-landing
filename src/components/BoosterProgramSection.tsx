"use client";
import Link from "next/link";
import Image from "next/image";

const BoosterProgramSection = () => {
  return (
    <section className="relative z-10">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-10 py-20">
        {/* Header with enhanced styling */}
        <div className="relative group mb-6 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-teal-500/5 to-emerald-600/10 blur-2xl rounded-2xl" />
          <div className="relative bg-zinc-900/50 outline outline-1 outline-emerald-500/20 p-6 hover:outline-emerald-500/40 transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-geo uppercase tracking-wider text-white">
              Community Booster Program
            </h2>
            <p className="mt-2 text-white/70 max-w-[72ch] mx-auto">
              Join our community of boosters and earn STEAM for meaningful
              contributions that help grow Zhenglong Protocol.
            </p>
          </div>
        </div>

        {/* Four Boxes Grid with enhanced styling */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <BoosterCard
            icon="/social.svg"
            title="Social Media"
            desc="Create X threads, engage in discussions, and share insights about the protocol."
          />
          <BoosterCard
            icon="/content.svg"
            title="Content Creation"
            desc="Produce videos, tutorials, articles, and educational content."
          />
          <BoosterCard
            icon="/art.svg"
            title="Art & Memes"
            desc="Design artwork, memes, and visual content to promote Zhenglong."
          />
          <BoosterCard
            icon="/community.svg"
            title="Community Building"
            desc="Organize events and foster discussions in your local network."
          />
        </div>

        {/* Token Supply with enhanced styling */}
        <div className="relative group mt-8 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-teal-500/5 to-emerald-600/10 blur-2xl rounded-2xl" />
          <div className="relative bg-zinc-900/50 outline outline-1 outline-emerald-500/20 p-6 hover:outline-emerald-500/40 transition-all duration-300">
            <p className="text-white/70">
              <span className="block text-5xl font-geo tracking-wider text-emerald-300">
                3%
              </span>
              <span className="block mt-1">
                of STEAM token supply is distributed to our community of boosters
              </span>
            </p>
          </div>
        </div>

        {/* Become a Booster with enhanced styling */}
        <div className="relative group mt-6 max-w-2xl mx-auto text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-teal-500/5 to-emerald-600/10 blur-2xl rounded-2xl" />
          <div className="relative bg-zinc-900/50 outline outline-1 outline-emerald-500/20 p-6 hover:outline-emerald-500/40 transition-all duration-300">
            <h3 className="text-xl md:text-2xl font-geo uppercase tracking-wider text-white">
              Become a Booster
            </h3>
            <p className="mt-2 text-white/70">
              Help grow the Zhenglong ecosystem and earn rewards for your
              contributions.
            </p>
            <div className="pt-4">
              <Link
                href="https://discord.com/invite/BW3P62vJXT"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group inline-flex items-center justify-center px-6 py-2 bg-zinc-900/50 outline outline-1 outline-emerald-500/30 text-emerald-300/80 hover:text-emerald-300 hover:outline-emerald-500/50 transition-all duration-300 font-geo uppercase tracking-wider"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 via-teal-500/3 to-emerald-600/5 blur-xl rounded-lg" />
                <span className="relative">Join Program</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function BoosterCard({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="relative group h-full">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-teal-500/5 to-emerald-600/10 blur-2xl rounded-2xl" />
      <div className="relative bg-zinc-900/50 outline outline-1 outline-emerald-500/20 p-6 hover:outline-emerald-500/40 transition-all duration-300 h-full flex flex-col">
        <div className="flex items-center justify-center mb-3">
          <div className="h-10 w-10 rounded-md bg-emerald-500/20 outline outline-1 outline-emerald-500/30 flex items-center justify-center">
            <Image src={icon} alt={title} width={20} height={20} />
          </div>
        </div>
        <h3 className="text-lg font-geo uppercase tracking-wider text-white text-center">
          {title}
        </h3>
        <p className="mt-2 text-white/70 text-sm text-center flex-grow">{desc}</p>
      </div>
    </div>
  );
}

export default BoosterProgramSection;
