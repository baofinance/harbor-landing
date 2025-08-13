"use client";

const SecuritySection = () => {
  return (
    <section className="relative z-10">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-10 py-20">
        {/* Header */}
        <div className="bg-zinc-900/50 outline outline-1 outline-white/10 p-6 mb-6 text-center">
          <h2 className="text-2xl md:text-3xl font-geo uppercase tracking-wider text-white">
            Institutional-Grade Security & Testing
          </h2>
          <p className="mt-2 text-white/70 max-w-[72ch] mx-auto">
            Standards rooted in banking software and rigorous testing practices.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-zinc-900/50 outline outline-1 outline-white/10 p-6">
            <h3 className="text-lg font-geo uppercase tracking-wider text-white mb-2">
              Third-Party Audited
            </h3>
            <p className="text-white/70 text-sm">
              Smart contracts will undergo independent audits by leading firms
              before mainnet launch.
            </p>
          </div>
          <div className="bg-zinc-900/50 outline outline-1 outline-white/10 p-6">
            <h3 className="text-lg font-geo uppercase tracking-wider text-white mb-2">
              Banking Experience
            </h3>
            <p className="text-white/70 text-sm">
              Built by professionals with 30+ years in banking software and risk
              management.
            </p>
          </div>
          <div className="bg-zinc-900/50 outline outline-1 outline-white/10 p-6">
            <h3 className="text-lg font-geo uppercase tracking-wider text-white mb-2">
              Comprehensive Testing
            </h3>
            <ul className="list-disc list-inside text-white/70 text-sm space-y-1">
              <li>Unit & integration tests</li>
              <li>Scenario stress testing</li>
              <li>Real-time monitoring</li>
              <li>Continuous risk assessment</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
