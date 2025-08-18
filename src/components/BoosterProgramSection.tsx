"use client";
import Link from "next/link";
import { PenSquare, MessageSquare, Code, Users } from "lucide-react";

const boosterActivities = [
    {
        icon: PenSquare,
        title: "Content Creation",
        desc: "Produce videos, tutorials, articles, and educational content to share the benefits of Zhenglong."
    },
    {
        icon: MessageSquare,
        title: "Social Engagement",
        desc: "Create X threads, engage in discussions, and share insights about the protocol on social media."
    },
    {
        icon: Code,
        title: "Development & Integrations",
        desc: "Build on top of Zhenglong, create tools, or integrate the protocol into other DeFi applications."
    },
    {
        icon: Users,
        title: "Community Building",
        desc: "Organize events, foster discussions, and help grow the Zhenglong community in your local network."
    }
]

const BoosterProgramSection = () => {
  return (
    <section className="relative z-10 bg-zinc-950">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-10 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-geo uppercase tracking-wider text-white">
                    Community Booster Program
                </h2>
                <p className="mt-4 text-white/70 max-w-[60ch] mx-auto md:mx-0">
                    Join our community of boosters and earn a share of the STEAM token supply for meaningful contributions that help grow the Zhenglong Protocol.
                </p>
                <div className="mt-8">
                    <p className="text-white/70">
                        <span className="block text-5xl font-geo tracking-wider text-emerald-300">
                            3%
                        </span>
                        <span className="block mt-1 text-sm">
                            of total STEAM supply is reserved for community boosters.
                        </span>
                    </p>
                </div>
                <div className="mt-8">
                    <Link
                        href="https://discord.com/invite/BW3P62vJXT"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group inline-flex items-center justify-center px-8 py-3 text-sm font-bold uppercase bg-emerald-500/90 hover:bg-emerald-500 text-black transition-all duration-300"
                    >
                        Become a Booster
                    </Link>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {boosterActivities.map((activity) => (
                    <div key={activity.title} className="relative group h-full bg-zinc-900/50 outline outline-1 outline-emerald-500/10 p-6 hover:outline-emerald-500/30 transition-all duration-300">
                        <div className="flex items-center gap-4 mb-3">
                            <div className="w-10 h-10 bg-emerald-500/10 flex items-center justify-center ring-1 ring-emerald-500/20">
                                <activity.icon className="w-5 h-5 text-emerald-400" />
                            </div>
                            <h3 className="text-md font-bold text-white tracking-wide">{activity.title}</h3>
                        </div>
                        <p className="text-xs text-white/60">{activity.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default BoosterProgramSection;
