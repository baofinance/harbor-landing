"use client";

import Link from "next/link";
import Image from "next/image";
import type { SVGProps } from "react";
import { Twitter } from "lucide-react";

const Footer = () => {
  const protocolLinks = [
    { name: "Docs", url: "https://docs.zhenglong.finance" },
    { name: "Bug Bounty", url: "https://immunefi.com/bounty/zhenglong/" },
    { name: "Litepaper", url: "https://docs.zhenglong.finance/litepaper" },
  ];

  const communityLinks = [
    { name: "Governance (Coming Soon)", url: "/" },
    { name: "Booster Program", url: "https://discord.com/invite/BW3P62vJXT" },
  ];

  const DiscordOutlineIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M20.317 4.369a19.79 19.79 0 00-4.885-1.515c-.211.375-.444.864-.608 1.249-1.844-.277-3.68-.277-5.486 0-.164-.395-.406-.874-.617-1.249A19.736 19.736 0 002.836 4.396C.533 9.045-.32 13.58.099 18.057a19.9 19.9 0 005.993 3.03c.461-.63.873-1.295 1.226-1.994-.652-.247-1.27-.548-1.862-.902.125-.094.25-.19.37-.287 3.927 1.793 8.18 1.793 12.061 0 .12.098.245.193.37.287-.591.361-1.21.662-1.862.902.36.698.772 1.362 1.226 1.993a19.876 19.876 0 005.993-3.03c.5-5.177-.838-9.673-3.548-13.661z" />
      <circle cx="9" cy="12.5" r="1.2" />
      <circle cx="15" cy="12.5" r="1.2" />
    </svg>
  );

  const socialLinks = [
    {
      name: "X",
      url: "https://x.com/ZhenglongFi",
      icon: <Twitter className="w-5 h-5" />,
    },
    {
      name: "Discord",
      url: "https://discord.com/invite/BW3P62vJXT",
      icon: <DiscordOutlineIcon className="w-5 h-5" />,
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
                      {link.icon}
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
