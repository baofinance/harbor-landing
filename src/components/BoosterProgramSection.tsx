"use client";
import Link from "next/link";
import { PenSquare, MessageSquare, Code, Users } from "lucide-react";

const boosterActivities = [
  {
    icon: PenSquare,
    title: "Content Creation",
    desc: "Produce videos, tutorials, articles, and educational content to share the benefits of Harbor.",
  },
  {
    icon: MessageSquare,
    title: "Social Engagement",
    desc: "Create X threads, engage in discussions, and share insights about the protocol on social media.",
  },
  {
    icon: Code,
    title: "Development & Integrations",
    desc: "Build on top of Harbor, create tools, or integrate the protocol into other DeFi applications.",
  },
  {
    icon: Users,
    title: "Community Building",
    desc: "Organize events, foster discussions, and help grow the Harbor community in your local network.",
  },
];

const BoosterProgramSection = () => {
  return (
    <section className="relative z-10">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-10 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl uppercase tracking-wide font-semibold text-white">
              Community Booster Program
            </h2>
            <div className="mx-auto md:mx-0 mt-2 h-px w-20 bg-gradient-to-r from-transparent via-[#00df82]/40 to-transparent" />
            <p className="mt-3 text-white/80 max-w-[60ch] mx-auto md:mx-0">
              Join our community of boosters and earn a share of the STEAM token
              supply for meaningful contributions that help grow the Harbor
              Protocol.
            </p>
            <div className="mt-8">
              <p className="text-white/80">
                <span className="block text-5xl tracking-wider text-white">
                  3%
                </span>
                <span className="block mt-1 text-sm text-white/70">
                  of total STEAM supply is reserved for community boosters.
                </span>
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="https://discord.com/invite/BW3P62vJXT"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group inline-flex items-center justify-center px-8 py-3 text-sm font-medium uppercase text-white border border-white/15 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/25 transition-all duration-300 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.30)]"
              >
                Become a Booster
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {boosterActivities.map((activity) => (
              <div
                key={activity.title}
                className="relative group h-full hover-lift"
              >
                <div className="relative border border-white/15 bg-white/5 backdrop-blur-md rounded-lg p-6 transition-all duration-300 h-full shadow-[0_8px_30px_rgba(0,0,0,0.30)] hover:bg-white/10 hover:border-white/25">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center ring-1 ring-white/10">
                      <activity.icon className="w-5 h-5 text-white/90" />
                    </div>
                    <h3 className="text-md font-bold text-white tracking-wide">
                      {activity.title}
                    </h3>
                  </div>
                  <p className="text-xs text-white/70">{activity.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoosterProgramSection;
