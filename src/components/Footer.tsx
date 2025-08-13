"use client";

const Footer = () => {
  const links = [
    { name: "X", url: "https://x.com/ZhenglongFi" },
    { name: "Discord", url: "https://discord.com/invite/BW3P62vJXT" },
    { name: "Docs", url: "https://docs.zhenglong.finance" },
  ];

  return (
    <footer className="relative z-10 mt-10">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-10 py-8">
        <div className="bg-zinc-900/50 outline outline-1 outline-white/10 p-4 flex items-center justify-center gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/70 hover:text-white transition-colors font-geo"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
