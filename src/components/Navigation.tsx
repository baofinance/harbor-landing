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
    { href: "https://docs.harbor.finance", label: "Docs" },
    { href: "https://litepaper.harbor.finance/docs/", label: "Litepaper" },
  ];

  const pathname = usePathname();

  return (
    <>
      {/* Centered glassmorphic pill nav */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
        <div
          className={clsx(
            "flex items-center gap-3 md:gap-6 rounded-full border px-2 md:px-3 py-2 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.30)]",
            "border-white/15",
            scrolled ? "bg-zinc-900/50" : "bg-white/5"
          )}
        >
          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
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
                    "px-3.5 md:px-3 py-1 rounded-full text-[15px] font-medium transition-colors",
                    isActive
                      ? "bg-white/15 text-white"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/15 text-white transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile glassmorphic overlay menu */}
      <div
        className={clsx(
          "fixed inset-0 z-[100] transition-opacity duration-300",
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={clsx(
            "fixed top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-lg rounded-3xl border border-white/10",
            "bg-zinc-900/80 backdrop-blur-xl p-6 transition-transform duration-300",
            mobileMenuOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
          )}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Image src="/logo.svg" alt="Harbor" width={28} height={28} />
              <span className="text-lg uppercase text-white/95">Harbor</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/15 text-white transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex flex-col gap-3">
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
                    "w-full px-5 py-3.5 rounded-2xl text-lg font-medium transition-colors",
                    isActive
                      ? "bg-white/15 text-white"
                      : "text-white/90 hover:text-white hover:bg-white/10"
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
