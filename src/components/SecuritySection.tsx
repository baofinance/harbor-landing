"use client";

import { ShieldCheck, Landmark, Microscope } from "lucide-react";
import Link from "next/link";
import { PortholeDecoration } from "./Porthole";

const securityFeatures = [
  {
    icon: ShieldCheck,
    title: "Third-Party Audited",
    desc: "Our smart contracts have been independently audited by Sherlock, one of the top audit firms in the industry, having run audits for Arbitrum, Optimism, Ethereum, Aave, Maker, and many more.",
    link: "/2025_10_21_Final_Harbor_Collaborative_Audit_Report_1761050317.pdf",
    linkText: "View audit report",
  },
  {
    icon: Landmark,
    title: "Banking and Crypto Experience",
    desc: "Built by a team with over 30 years of combined experience in institutional banking software and risk management systems, plus over 25 years combined experience building in crypto.",
  },
  {
    icon: Microscope,
    title: "Comprehensive Testing",
    desc: "Our protocol is rigorously tested through unit, integration, and scenario-based stress tests, plus continuous real-time monitoring.",
  },
];

const SecuritySection = () => {
  return (
    <section className="relative z-10 bg-nautical-blue-light px-3 sm:px-4 md:px-5 pb-3 sm:pb-4 md:pb-5 pt-0">
      <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 md:gap-5 items-stretch">
        {/* Left 50%: Institutional-Grade Security Content */}
        <div className="flex-1 bg-[#E67A68] p-6 sm:p-10 md:p-12 lg:p-14">
          <div className="flex flex-row gap-1.5 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-10 h-full">
            <div className="w-5/12 flex flex-col justify-center text-left min-w-0">
              <h2 className="leading-none text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold text-white tracking-tight">
                <span className="block whitespace-nowrap">
                  Institutional-Grade
                </span>
                <span className="block whitespace-nowrap">Security</span>
              </h2>
            </div>

            <div className="w-7/12 flex flex-col justify-center text-left gap-4 sm:gap-5 md:gap-6 pl-1.5 sm:pl-2 md:pl-4 lg:pl-6 xl:pl-10 min-w-0"></div>
          </div>
        </div>

        {/* Right 50%: Security Features Stacked */}
        <div className="flex-1 flex flex-col gap-3 sm:gap-4 md:gap-5">
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
                  <p className="text-nautical-blue/70 text-xs sm:text-sm mb-2">
                    {feature.desc}
                  </p>
                  {feature.link && (
                    <Link
                      href={feature.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-nautical-blue text-xs sm:text-sm font-semibold hover:underline inline-flex items-center gap-1"
                    >
                      {feature.linkText}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="inline"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </Link>
                  )}
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
