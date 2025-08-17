"use client";

const SecuritySection = () => {
  return (
    <section className="relative z-10">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-10 py-20">
        {/* Header with enhanced styling */}
        <div className="relative group mb-6 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-teal-500/5 to-emerald-600/10 blur-2xl rounded-2xl" />
          <div className="relative bg-zinc-900/50 outline outline-1 outline-emerald-500/20 p-6 hover:outline-emerald-500/40 transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-geo uppercase tracking-wider text-white">
              Institutional-Grade Security & Testing
            </h2>
            <p className="mt-2 text-white/70 max-w-[72ch] mx-auto">
              Standards rooted in banking software and rigorous testing practices.
            </p>
          </div>
        </div>

        {/* Cards with enhanced styling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative group h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-teal-500/5 to-emerald-600/10 blur-2xl rounded-2xl" />
            <div className="relative bg-zinc-900/50 outline outline-1 outline-emerald-500/20 p-6 hover:outline-emerald-500/40 transition-all duration-300 h-full flex flex-col">
              <h3 className="text-lg font-geo uppercase tracking-wider text-white mb-2">
                Third-Party Audited
              </h3>
              <p className="text-white/70 text-sm flex-grow">
                Smart contracts will undergo independent audits by leading firms
                before mainnet launch.
              </p>
            </div>
          </div>
          <div className="relative group h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-teal-500/5 to-emerald-600/10 blur-2xl rounded-2xl" />
            <div className="relative bg-zinc-900/50 outline outline-1 outline-emerald-500/20 p-6 hover:outline-emerald-500/40 transition-all duration-300 h-full flex flex-col">
              <h3 className="text-lg font-geo uppercase tracking-wider text-white mb-2">
                Banking Experience
              </h3>
              <p className="text-white/70 text-sm flex-grow">
                Built by professionals with 30+ years in banking software and risk
                management.
              </p>
            </div>
          </div>
          <div className="relative group h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-teal-500/5 to-emerald-600/10 blur-2xl rounded-2xl" />
            <div className="relative bg-zinc-900/50 outline outline-1 outline-emerald-500/20 p-6 hover:outline-emerald-500/40 transition-all duration-300 h-full flex flex-col">
              <h3 className="text-lg font-geo uppercase tracking-wider text-white mb-2">
                Comprehensive Testing
              </h3>
              <ul className="list-disc list-inside text-white/70 text-sm space-y-1 flex-grow">
                <li>Unit & integration tests</li>
                <li>Scenario stress testing</li>
                <li>Real-time monitoring</li>
                <li>Continuous risk assessment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
