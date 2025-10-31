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
    <section className="relative z-10 bg-nautical-blue-light px-2 sm:px-3 pb-2 sm:pb-3 pt-0">
      <div className="flex flex-col lg:flex-row gap-2 sm:gap-3 items-stretch">
        {/* Left 50%: Institutional-Grade Security Content */}
        <div className="flex-1 bg-[#E67A68] p-6 sm:p-10 md:p-12 lg:p-14">
          <div className="flex flex-col md:flex-row gap-6 lg:gap-10 h-full">
            <div className="md:w-5/12 flex flex-col justify-center text-left">
              <h2 className="leading-none text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-white tracking-tight">
                <span className="block">Institutional-Grade</span>
                <span className="block">Security</span>
              </h2>
            </div>

            <div className="md:w-7/12 flex flex-col justify-center text-left gap-6 md:pl-6 lg:pl-10"></div>
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
