"use client";
import Link from "next/link";
import { PenSquare, MessageSquare, Code, Users } from "lucide-react";
import { PortholeDecoration } from "./Porthole";

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
    <section className="relative z-10 bg-white px-3 pb-3 pt-0">
      <div className="flex flex-col lg:flex-row gap-3 items-stretch">
        {/* Left 2/3: Community Marketers Content */}
        <div className="lg:w-2/3 bg-white p-10 sm:p-12 lg:p-14">
          <div className="flex flex-col gap-8 justify-center h-full">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-wide font-bold text-nautical-blue mb-6">
                Join Our Community Marketers
              </h2>
              <p className="text-nautical-blue text-sm sm:text-base mb-4">
                Earn a share of 3% of the token supply, distributed monthly
                based on your contributions.
              </p>
              <p className="text-nautical-blue text-sm sm:text-base">
                Simply start creating and post a link in the #booster channel on
                discord
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button className="px-8 py-3 text-base border-2 border-nautical-blue text-nautical-blue font-semibold rounded-full hover:bg-nautical-blue/10 transition-colors">
                Learn more
              </button>
              <Link
                href="https://discord.com/invite/BW3P62vJXT"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 text-base bg-nautical-blue text-white font-semibold rounded-full hover:bg-nautical-blue/90 transition-colors text-center"
              >
                Discord
              </Link>
            </div>
          </div>
        </div>

        {/* Right 1/3: Ways to Contribute */}
        <div className="lg:w-1/3 bg-nautical-blue p-10 sm:p-12 lg:p-14 border-4 border-white">
          <h3 className="text-sm font-semibold text-white/70 mb-4 uppercase tracking-wider">
            Ways to Contribute
          </h3>
          <div className="space-y-3">
            {boosterActivities.map((activity) => (
              <div key={activity.title} className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#FF8A7A] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <activity.icon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">
                    {activity.title}
                  </h4>
                  <p className="text-white/70 text-xs">{activity.desc}</p>
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
