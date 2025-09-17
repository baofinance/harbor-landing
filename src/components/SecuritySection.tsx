"use client";

import { ShieldCheck, Landmark, Microscope } from "lucide-react";

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
    <section className="relative z-10">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-10 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl uppercase tracking-wide font-semibold text-indigo-300 drop-shadow-[0_0_12px_rgba(99,102,241,0.35)]">
              Institutional-Grade Security
            </h2>
            <div className="mx-auto md:mx-0 mt-2 h-px w-20 bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
            <p className="mt-3 text-white/80 max-w-[60ch] mx-auto md:mx-0">
              Our protocol is built on a foundation of rigorous, bank-grade
              security standards and comprehensive testing to ensure your assets
              are always protected.
            </p>
          </div>
          <div className="space-y-6">
            {securityFeatures.map((feature) => (
              <div
                key={feature.title}
                className="relative group h-full hover-lift"
              >
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-indigo-400/25 via-sky-300/15 to-indigo-400/25 blur-lg opacity-10 group-hover:opacity-25 transition duration-300" />
                <div className="relative bg-zinc-900/30 backdrop-blur-lg border border-indigo-500/20 rounded-2xl p-6 sm:p-7 transition-all duration-300 h-full flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center ring-1 ring-indigo-500/30 flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-indigo-300" />
                  </div>
                  <div>
                    <h3 className="text-md font-bold text-white tracking-wide">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-white/75 mt-1">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
