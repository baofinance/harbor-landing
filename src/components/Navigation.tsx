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
    { href: "https://docs.harborfinance.io/", label: "Docs" },
    { href: "https://x.com/0xHarborFi", label: "X" },
    { href: "https://discord.com/invite/BW3P62vJXT", label: "Discord" },
  ];

  const pathname = usePathname();

  return (
    <>
      {/* Centered glassmorphic pill nav */}
      <nav className={clsx(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-opacity duration-300",
        mobileMenuOpen ? "hidden" : "block"
      )}>
        <div
          className={clsx(
            "flex items-center gap-3 md:gap-6 rounded-full border px-2 md:px-3 py-2 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.20)] w-[600px] max-w-[92vw] justify-between",
            "border-2 border-white/60",
            scrolled ? "bg-nautical-blue/90" : "bg-nautical-blue/70"
          )}
        >
          <Link href="/" className="inline-flex justify-center items-center flex-shrink-0">
            <Image
              src="/WhiteHarborLogo.svg"
              alt="Harbor"
              width={28}
              height={28}
              className="h-6 w-6 object-contain"
            />
            <span className="ml-2 text-xl font-medium text-white">Harbor</span>
          </Link>
          {/* Desktop links */}
          <div className="hidden md:flex items-center flex-1 justify-center">
            <div className="flex items-center gap-6 md:gap-8">
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
                        ? "bg-sunrise-coral/30 text-white"
                        : "text-white/80 hover:text-white hover:bg-sunrise-coral/20"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
          <Link
            href="https://app.harborfinance.io/genesis"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block flex-shrink-0 px-5 md:px-6 py-1 rounded-full text-[15px] font-semibold bg-sunrise-coral text-white hover:bg-sunrise-coral/90 transition-colors"
          >
            App
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center justify-center w-9 h-9 text-white transition-colors"
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
          className="absolute inset-0 bg-nautical-blue/60 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={clsx(
            "fixed top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-lg p-6 transition-transform duration-300",
            mobileMenuOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
          )}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Image src="/WhiteHarborLogo.svg" alt="Harbor" width={28} height={28} className="h-6 w-6 object-contain" />
              <span className="ml-2 text-xl font-medium text-white">Harbor</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center w-9 h-9 text-white transition-colors"
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
                    "w-full px-5 py-3.5 rounded-full text-lg font-medium transition-colors text-center border border-white/30",
                    isActive
                      ? "bg-sunrise-coral/30 text-white border-sunrise-coral/50"
                      : "bg-white/10 text-white hover:bg-white/20 hover:border-white/50"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="https://app.harborfinance.io/genesis"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-5 py-3.5 rounded-full text-lg font-semibold bg-sunrise-coral text-white hover:bg-sunrise-coral/90 transition-colors text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              App
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
