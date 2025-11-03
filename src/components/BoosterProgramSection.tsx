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
    <section className="relative z-10 bg-nautical-blue-light px-3 sm:px-4 md:px-5 pb-3 sm:pb-4 md:pb-5 pt-0">
      <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 md:gap-5 items-stretch">
        {/* Left 2/3: Community Marketers Content */}
        <div className="lg:w-2/3 bg-white p-6 sm:p-10 md:p-12 lg:p-14">
          <div className="flex flex-row gap-1.5 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-10 h-full">
            <div className="w-5/12 flex flex-col justify-center text-left min-w-0">
              <h2 className="leading-none text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold text-nautical-blue tracking-tight">
                <span className="block whitespace-nowrap">Community</span>
                <span className="block whitespace-nowrap">Marketers</span>
              </h2>
            </div>

            <div className="w-7/12 flex flex-col justify-center text-left gap-4 sm:gap-5 md:gap-6 pl-1.5 sm:pl-2 md:pl-4 lg:pl-6 xl:pl-10 min-w-0">
              <div className="space-y-3">
                <p className="text-nautical-blue text-sm sm:text-base">
                  Earn a share of 3% of the TIDE supply, distributed monthly
                  based on your contributions.
                </p>
                <p className="text-nautical-blue text-sm sm:text-base">
                  Simply start creating and post a link in the #booster channel
                  on discord to become one of our community marketers
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-2 md:gap-3 lg:gap-4 min-w-0">
                <a
                  href="https://docs.harborfinance.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[140px] sm:w-[150px] md:w-[160px] lg:w-[170px] xl:w-[190px] flex-shrink-0 px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-3.5 text-xs sm:text-sm md:text-base font-semibold border-2 border-nautical-blue text-nautical-blue rounded-full hover:bg-nautical-blue/10 transition-colors text-center whitespace-nowrap"
                >
                  Learn more
                </a>
                <Link
                  href="https://discord.com/invite/BW3P62vJXT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-[140px] sm:w-[150px] md:w-[160px] lg:w-[170px] xl:w-[190px] flex-shrink-0 px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-3.5 text-xs sm:text-sm md:text-base font-semibold bg-nautical-blue text-white border-2 border-nautical-blue rounded-full hover:bg-nautical-blue/90 transition-colors text-center whitespace-nowrap"
                >
                  Discord
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right 1/3: Ways to Contribute */}
        <div className="lg:w-1/3 bg-nautical-blue p-6 sm:p-10 md:p-12 lg:p-14">
          <h3 className="text-sm font-semibold text-white/70 mb-4 uppercase tracking-wider">
            Ways to Contribute
          </h3>
          <div className="space-y-3">
            {boosterActivities.map((activity) => (
              <div key={activity.title} className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <activity.icon className="w-4 h-4 text-nautical-blue" />
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
