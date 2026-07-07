export default function FooterCTASection() {
  return (
    <section
      aria-label="Get started"
      className="relative z-10 bg-nautical-blue-light px-3 sm:px-4 md:px-5 pb-3 sm:pb-4 md:pb-5 pt-0"
    >
      <div className="bg-white px-6 py-12 text-center sm:px-10 sm:py-14 md:py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-nautical-blue sm:text-3xl md:text-4xl">
            Ready to Explore Harbor?
          </h2>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="https://app.harborfinance.io/genesis"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[200px] rounded-full bg-nautical-blue px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-nautical-blue/90 sm:w-auto sm:px-6 sm:text-base"
            >
              Launch App
            </a>
            <a
              href="https://docs.harborfinance.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[200px] rounded-full border border-nautical-blue px-5 py-2.5 text-sm font-semibold text-nautical-blue transition-all hover:bg-nautical-blue/5 sm:w-auto sm:px-6 sm:text-base"
            >
              Read Docs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
