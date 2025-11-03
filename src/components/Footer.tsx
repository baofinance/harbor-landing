"use client";

import Link from "next/link";
import Image from "next/image";
import type { SVGProps } from "react";
import { Twitter } from "lucide-react";

const Footer = () => {
  const protocolLinks = [
    { name: "Docs", url: "https://docs.harborfinance.io/" },
  ];

  const communityLinks = [
    { name: "Booster Program", url: "https://discord.com/invite/BW3P62vJXT" },
  ];

  const contributors = [
    {
      name: "chickn",
      avatarUrl: "/chickn.jpg" as string | null,
      twitter: "BaoChickn",
    },

    {
      name: "fabiaz",
      avatarUrl: "/fabiaz.jpg" as string | null,
      twitter: "faBaozi84",
    },
    { name: "root", avatarUrl: "/root.webp" as string | null, twitter: "" },
    {
      name: "haruxe",
      avatarUrl: "/haruxe.jpg" as string | null,
      twitter: "haruxeETH",
    },
    {
      name: "baowolf",
      avatarUrl: "/baowolf.jpg" as string | null,
      twitter: "BaoWolf_eth",
    },
    {
      name: "Bob",
      avatarUrl: "/bob.jpg" as string | null,
      twitter: "bobtherebuilt",
    },
    {
      name: "Daizze",
      avatarUrl: "/Daizze.webp" as string | null,
      twitter: "",
    },
    {
      name: "Givn",
      avatarUrl: "/Givn.jpg" as string | null,
      twitter: "0xGivn",
    },
    {
      name: "hop",
      avatarUrl: "/hop.webp" as string | null,
      twitter: "hopnothip",
    },
    {
      name: "kronflux",
      avatarUrl: "/kronflux.jpg" as string | null,
      twitter: "Kronflux1",
    },
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
      url: "https://x.com/HarborFi",
      icon: <Twitter className="w-5 h-5" />,
    },
    {
      name: "Discord",
      url: "https://discord.com/invite/BW3P62vJXT",
      icon: <DiscordOutlineIcon className="w-5 h-5" />,
    },
  ];

  return (
    <footer className="relative z-10 bg-nautical-blue">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex justify-start mb-3">
              <Image
                src="/WhiteHarborLogo.svg"
                alt="Harbor"
                width={28}
                height={28}
                className="h-6 w-6 opacity-60 mt-1 object-contain"
              />
              <span className="ml-1 text-2xl opacity-60 font-medium text-white">
                Harbor
              </span>
            </Link>
            <p className="text-sm text-white/60 max-w-xs">
              A decentralized protocol for creating synthetic assets pegged to
              any real-world data feed.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 md:col-span-3 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">
                Protocol
              </h4>
              <ul className="space-y-3">
                {protocolLinks.map((link) => {
                  return (
                    <li key={link.name}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white/70 hover:text-sunrise-coral transition-colors text-left"
                      >
                        {link.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">
                Community
              </h4>
              <ul className="space-y-3">
                {communityLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.url}
                      className="text-sm text-white/70 hover:text-sunrise-coral transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Socials</h4>
              <ul className="flex items-center gap-4">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-sunrise-coral transition-colors"
                    >
                      {link.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">
                Contributors
              </h4>
              <ul className="grid grid-cols-5 gap-x-4 gap-y-3">
                {contributors.map((person) => {
                  const hasTwitter =
                    typeof person.twitter === "string" &&
                    person.twitter.trim().length > 0;
                  return (
                    <li key={person.name}>
                      {hasTwitter ? (
                        <a
                          href={`https://x.com/${person.twitter}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col items-center gap-1 p-1 group"
                          aria-label={`${person.name} on X`}
                        >
                          <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded ring-1 ring-sunrise-coral/20 group-hover:ring-sunrise-coral/30">
                            <Image
                              src={person.avatarUrl || ""}
                              alt={person.name}
                              fill
                              sizes="32px"
                              className="object-cover"
                            />
                          </div>
                          <span className="mt-1 text-[10px] leading-none text-white/60 group-hover:text-sunrise-coral max-w-[4rem] truncate text-center">
                            {person.name}
                          </span>
                        </a>
                      ) : (
                        <div
                          className="flex flex-col items-center gap-1 p-1 group"
                          aria-label={person.name}
                        >
                          <div className="relative h-8 w-8 shrink-0 rounded overflow-hidden ring-1 ring-sunrise-coral/20 group-hover:ring-sunrise-coral/30">
                            <Image
                              src={person.avatarUrl || ""}
                              alt={person.name}
                              fill
                              sizes="32px"
                              className="object-cover"
                            />
                          </div>
                          <span className="mt-1 text-[10px] leading-none text-white/60 group-hover:text-sunrise-coral max-w-[4rem] truncate text-center">
                            {person.name}
                          </span>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-xs text-white/50">
          <p>
            &copy; {new Date().getFullYear()} Harbor Protocol. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
