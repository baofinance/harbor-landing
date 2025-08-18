"use client";

import { ShieldCheck, Landmark, Microscope } from "lucide-react";

const securityFeatures = [
    {
        icon: ShieldCheck,
        title: "Third-Party Audited",
        desc: "Smart contracts will undergo independent audits by leading security firms before mainnet launch to ensure integrity and safety."
    },
    {
        icon: Landmark,
        title: "Banking Experience",
        desc: "Built by a team with over 30 years of combined experience in institutional banking software and risk management systems."
    },
    {
        icon: Microscope,
        title: "Comprehensive Testing",
        desc: "Our protocol is rigorously tested through unit, integration, and scenario-based stress tests, plus continuous real-time monitoring."
    }
]

const SecuritySection = () => {
  return (
    <section className="relative z-10 bg-black border-y border-zinc-800/50">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-10 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-geo uppercase tracking-wider text-white">
                    Institutional-Grade Security
                </h2>
                <p className="mt-4 text-white/70 max-w-[60ch] mx-auto md:mx-0">
                    Our protocol is built on a foundation of rigorous, bank-grade security standards and comprehensive testing to ensure your assets are always protected.
                </p>
            </div>
            <div className="space-y-6">
                {securityFeatures.map((feature) => (
                    <div key={feature.title} className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-emerald-500/10 flex items-center justify-center ring-1 ring-emerald-500/20 flex-shrink-0">
                            <feature.icon className="w-6 h-6 text-emerald-400" />
                        </div>
                        <div>
                            <h3 className="text-md font-bold text-white tracking-wide">{feature.title}</h3>
                            <p className="text-sm text-white/60 mt-1">{feature.desc}</p>
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
