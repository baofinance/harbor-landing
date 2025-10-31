"use client";

import { ShieldCheck, Landmark, Microscope } from "lucide-react";
import { PortholeDecoration } from "./Porthole";

const securityFeatures = [
  {
    icon: ShieldCheck,
    title: "Third-Party Audited",
    desc: "Smart contracts will undergo independent audits by leading security firms before mainnet launch to ensure integrity and safety.",
  },
  {
    icon: Landmark,
    title: "Banking Experience",
    desc: "Built by a team with over 30 years of combined experience in institutional banking software and risk management systems.",
  },
  {
    icon: Microscope,
    title: "Comprehensive Testing",
    desc: "Our protocol is rigorously tested through unit, integration, and scenario-based stress tests, plus continuous real-time monitoring.",
  },
];

const SecuritySection = () => {
  return (
    <section className="relative z-10 px-2 sm:px-3 pb-2 sm:pb-3 pt-0">
      <div className="flex flex-col lg:flex-row gap-2 sm:gap-3 items-stretch">
        {/* Left 50%: Institutional-Grade Security Content */}
        <div className="flex-1 bg-[#E67A68] p-6 sm:p-10 md:p-12 lg:p-14">
          <div className="flex flex-col gap-6 sm:gap-8 justify-center h-full">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wide font-bold text-white mb-4 sm:mb-6">
                Institutional-Grade Security
              </h2>
              <p className="text-white text-sm sm:text-base">
                Security is our number one priority. We use bank-grade security
                standards and comprehensive testing to ensure your assets are
                always protected.
              </p>
            </div>
          </div>
        </div>

        {/* Right 50%: Security Features Stacked */}
        <div className="flex-1 flex flex-col gap-2 sm:gap-3">
          {securityFeatures.map((feature) => (
            <div
              key={feature.title}
              className="bg-white border-4 border-white p-6 sm:p-10 md:p-12 lg:p-14 flex-1"
            >
              <div className="flex items-start gap-3 sm:gap-4 h-full">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FF8A7A] flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-nautical-blue font-semibold text-base sm:text-lg mb-1 sm:mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-nautical-blue/70 text-xs sm:text-sm">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
