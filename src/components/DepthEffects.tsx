"use client";

import { useEffect, useState } from "react";

export default function DepthEffects() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate depth based on scroll position
  const maxDepth = 0.6; // Maximum darkness (60% darker)
  const depth = Math.min(scrollY / 1500, maxDepth); // Reach max depth at 1500px scroll

  // Create progressive darkening effect
  const baseR = 30;
  const baseG = 71;
  const baseB = 117;

  const darkenAmount = Math.floor(255 * depth);
  const darkerR = Math.max(0, baseR - darkenAmount);
  const darkerG = Math.max(0, baseG - darkenAmount);
  const darkerB = Math.max(0, baseB - darkenAmount);

  const darkerColor = `rgb(${darkerR}, ${darkerG}, ${darkerB})`;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: `linear-gradient(180deg, #1e4775 0%, ${darkerColor} 100%)`,
        opacity: 0.9,
        transition: "background 0.1s ease-out",
      }}
    />
  );
}
