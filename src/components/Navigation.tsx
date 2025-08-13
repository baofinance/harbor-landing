"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Navigation() {
  const navLinks = [
    { href: "/", label: "Governance" },
    { href: "https://docs.zhenglong.finance", label: "Docs" },
    { href: "", label: "Discord" },
    { href: "", label: "Bug Bounty" },
    { href: "", label: "X" },
    { href: "", label: "Litepaper" },
  ];

  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 mx-auto max-w-[1300px] font-sans bg-zinc-950">
      <div className="w-screen h-full bg-zinc-950" />
      <div className="px-6">
        <div className="flex items-center justify-between h-16 border-b border-white/10">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center">
                <Image
                  src="/logo.svg"
                  alt="Zhenglong Protocol"
                  width={28}
                  height={28}
                  className="w-full h-full"
                />
              </div>
            </Link>

            <div className="flex items-center gap-4">
              {navLinks.map((link) => {
                const isActive =
                  link.href === pathname ||
                  (link.href !== "/" && pathname.startsWith(link.href));

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={clsx(
                      "text-xl font-medium font-geo transition-colors",
                      isActive
                        ? " text-white"
                        : " hover:text-white/80 text-white/60 "
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
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-bold uppercase bg-zinc-900/50 outline outline-1 outline-white/10 text-white/80 hover:text-white transition-colors"
            >
              Go to App
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
