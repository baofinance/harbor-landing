"use client";

import React from "react";

interface PortholeProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "glass" | "brass" | "steel";
  opacity?: number;
  className?: string;
  children?: React.ReactNode;
}

const sizeClasses = {
  sm: "w-16 h-16",
  md: "w-24 h-24",
  lg: "w-32 h-32",
  xl: "w-48 h-48",
};

const variantStyles = {
  glass: "bg-white/10 border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.1)]",
  brass:
    "bg-gradient-to-br from-yellow-400/20 to-yellow-600/30 border-yellow-400/40 shadow-[0_0_20px_rgba(251,191,36,0.2)]",
  steel:
    "bg-gradient-to-br from-gray-300/20 to-gray-500/30 border-gray-400/40 shadow-[0_0_20px_rgba(156,163,175,0.2)]",
};

export default function Porthole({
  size = "md",
  variant = "glass",
  opacity = 1,
  className = "",
  children,
}: PortholeProps) {
  return (
    <div
      className={`${sizeClasses[size]} ${variantStyles[variant]} rounded-full border-2 backdrop-blur-sm relative overflow-hidden ${className}`}
      style={{ opacity }}
    >
      {/* Inner rim */}
      <div className="absolute inset-2 rounded-full border border-white/20" />

      {/* Center content area */}
      <div className="absolute inset-4 rounded-full flex items-center justify-center">
        {children}
      </div>

      {/* Bolt holes around the rim */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full"
            style={{
              top: "50%",
              left: "50%",
              transform: `translate(-50%, -50%) rotate(${
                i * 45
              }deg) translateY(-${
                size === "sm"
                  ? "28px"
                  : size === "md"
                  ? "42px"
                  : size === "lg"
                  ? "56px"
                  : "84px"
              })`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

// Decorative porthole for backgrounds
export function PortholeDecoration({
  size = "lg",
  variant = "glass",
  position = "top-right",
  className = "",
}: Omit<PortholeProps, "children"> & {
  position?:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "center";
}) {
  const positionClasses = {
    "top-left": "top-8 left-8",
    "top-right": "top-8 right-8",
    "bottom-left": "bottom-8 left-8",
    "bottom-right": "bottom-8 right-8",
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  };

  return (
    <div
      className={`absolute ${positionClasses[position]} pointer-events-none ${className}`}
    >
      <Porthole size={size} variant={variant} opacity={0.3}>
        <div className="w-1/2 h-1/2 bg-gradient-to-br from-nautical-blue/20 to-transparent rounded-full" />
      </Porthole>
    </div>
  );
}
