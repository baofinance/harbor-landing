"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Navigation() {
  const navLinks = [
    { href: "/", label: "Governance" },
    { href: "https://docs.zhenglong.finance", label: "Docs" },
    { href: "https://discord.com/invite/BW3P62vJXT", label: "Discord" },
    { href: "https://immunefi.com/bounty/zhenglong/", label: "Bug Bounty" },
    { href: "https://x.com/ZhenglongFi", label: "X" },
    { href: "https://docs.zhenglong.finance/litepaper", label: "Litepaper" },
  ];

  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto max-w-[1300px] px-6">
        <div className="flex items-center justify-between h-16 border-b border-emerald-500/20">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 flex items-center justify-center">
                <Image
                  src="/logo.svg"
                  alt="Zhenglong Protocol"
                  width={32}
                  height={32}
                  className="w-full h-full"
                />
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive =
                  link.href === pathname ||
                  (link.href !== "/" && pathname.startsWith(link.href));

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : "_self"}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : ""}
                    className={clsx(
                      "text-sm font-medium font-geo transition-colors",
                      isActive
                        ? "text-emerald-300"
                        : "text-white/70 hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <Link
              href="/ido"
              className="relative group inline-flex items-center justify-center px-5 py-2 text-sm font-bold uppercase bg-zinc-900/50 outline outline-1 outline-emerald-500/30 text-emerald-300/80 hover:text-emerald-300 hover:outline-emerald-500/50 transition-all duration-300 font-geo"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-teal-500/5 to-emerald-600/10 blur-xl rounded-lg" />
              <span className="relative">Go to App</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
