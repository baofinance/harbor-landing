"use client";
import Link from "next/link";
import Image from "next/image";

const BoosterProgramSection = () => {
  return (
    <section className="relative z-10">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-10 py-20">
        {/* Header */}
        <div className="bg-zinc-900/50 outline outline-1 outline-white/10 p-6 mb-6 text-center">
          <h2 className="text-2xl md:text-3xl font-geo uppercase tracking-wider text-white">
            Community Booster Program
          </h2>
          <p className="mt-2 text-white/70 max-w-[72ch] mx-auto">
            Join our community of boosters and earn STEAM for meaningful
            contributions that help grow Zhenglong Protocol.
          </p>
        </div>

        {/* Four Boxes Grid */}
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

        {/* Token Supply */}
        <div className="mt-8 bg-zinc-900/50 outline outline-1 outline-white/10 p-6 text-center">
          <p className="text-white/70">
            <span className="block text-5xl font-geo tracking-wider text-white">
              3%
            </span>
            <span className="block mt-1">
              of STEAM token supply is distributed to our community of boosters
            </span>
          </p>
        </div>

        {/* Become a Booster */}
        <div className="mt-6 max-w-2xl mx-auto bg-zinc-900/50 outline outline-1 outline-white/10 p-6 text-center">
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
              className="inline-flex items-center justify-center px-6 py-2 bg-zinc-900/50 outline outline-1 outline-white/10 text-white/80 hover:text-white transition-colors font-geo uppercase tracking-wider"
            >
              Join Program
            </Link>
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
    <div className="bg-zinc-900/50 outline outline-1 outline-white/10 p-6">
      <div className="flex items-center justify-center mb-3">
        <div className="h-10 w-10 rounded-md bg-white/5 outline outline-1 outline-white/10 flex items-center justify-center">
          <Image src={icon} alt={title} width={20} height={20} />
        </div>
      </div>
      <h3 className="text-lg font-geo uppercase tracking-wider text-white text-center">
        {title}
      </h3>
      <p className="mt-2 text-white/70 text-sm text-center">{desc}</p>
    </div>
  );
}

export default BoosterProgramSection;
