"use client";

const Footer = () => {
  const links = [
    { name: "X", url: "https://x.com/ZhenglongFi" },
    { name: "Discord", url: "https://discord.com/invite/BW3P62vJXT" },
    { name: "Docs", url: "https://docs.zhenglong.finance" },
  ];

  return (
    <footer className="relative z-10 mt-12">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-10 py-10">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-teal-500/5 to-emerald-600/10 blur-2xl rounded-2xl" />
          <div className="relative bg-zinc-900/50 outline outline-1 outline-emerald-500/20 p-6 flex items-center justify-center gap-8 hover:outline-emerald-500/40 transition-all duration-300">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-emerald-300/80 hover:text-emerald-300 transition-colors font-geo"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
