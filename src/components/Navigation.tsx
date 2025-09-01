"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "https://docs.zhenglong.finance", label: "Docs" },
    { href: "https://litepaper.zhenglong.finance/docs/", label: "Litepaper" },
  ];

  const pathname = usePathname();

  return (
    <>
      <nav
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-black/50 backdrop-blur-md border-b border-white/10"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center">
                <Image
                  src="/logo.svg"
                  alt="Zhenglong Protocol"
                  width={32}
                  height={32}
                  className="w-full h-full"
                />
              </div>
              <span className="text-2xl uppercase font-geo text-white">
                Zhenglong
              </span>
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
                    rel={
                      link.href.startsWith("http") ? "noopener noreferrer" : ""
                    }
                    className={clsx(
                      "text-sm font-medium transition-colors",
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
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="text-white"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "fixed inset-0 z-[100] bg-black/80 backdrop-blur-lg transition-opacity duration-300",
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className={clsx(
            "fixed top-0 right-0 h-full w-72 bg-zinc-950/90 p-6 transition-transform duration-300",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => {
              const isActive =
                link.href === pathname ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    link.href.startsWith("http") ? "noopener noreferrer" : ""
                  }
                  className={clsx(
                    "text-lg font-medium transition-colors",
                    isActive
                      ? "text-emerald-300"
                      : "text-white/70 hover:text-white"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
