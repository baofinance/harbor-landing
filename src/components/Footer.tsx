"use client";

import Link from "next/link";
import Image from "next/image";
import { Twitter, Youtube, Twitch, DiscIcon } from "lucide-react";

const Footer = () => {
  const protocolLinks = [
    { name: "Docs", url: "https://docs.zhenglong.finance" },
    { name: "Bug Bounty", url: "https://immunefi.com/bounty/zhenglong/" },
    { name: "Litepaper", url: "https://docs.zhenglong.finance/litepaper" },
  ];

  const communityLinks = [
    { name: "Governance", url: "/" },
    { name: "Booster Program", url: "#" },
  ];

  const socialLinks = [
    { name: "X", url: "https://x.com/ZhenglongFi", icon: Twitter },
    {
      name: "Discord",
      url: "https://discord.com/invite/BW3P62vJXT",
      icon: DiscIcon,
    },
  ];

  return (
    <footer className="relative z-10 border-t border-zinc-800/50 bg-zinc-950">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.svg"
                alt="Zhenglong Protocol"
                width={32}
                height={32}
              />
              <span className="text-2xl font-geo uppercase text-white">
                Zhenglong
              </span>
            </Link>
            <p className="text-sm text-white/60 max-w-xs">
              A decentralized protocol for creating synthetic assets pegged to
              any real-world data feed.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-3 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-white/90 mb-4">
                Protocol
              </h4>
              <ul className="space-y-3">
                {protocolLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white/90 mb-4">
                Community
              </h4>
              <ul className="space-y-3">
                {communityLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.url}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white/90 mb-4">
                Socials
              </h4>
              <ul className="flex items-center gap-4">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      <link.icon className="w-5 h-5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-zinc-800/50 text-center text-xs text-white/40">
          <p>
            &copy; {new Date().getFullYear()} Zhenglong Protocol. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
