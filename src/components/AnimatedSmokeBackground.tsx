"use client";

import React, { useState, useEffect } from "react";

type ParticleStyle = {
  left: string;
  bottom: string;
  width: string;
  height: string;
  animationDelay: string;
  animationDuration: string;
};

const AnimatedSmokeBackground = () => {
  const [particles, setParticles] = useState<ParticleStyle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 50 }).map(() => {
        const size = `${Math.random() * 100 + 50}px`;
        return {
          left: `${Math.random() * 100}%`,
          bottom: `-${size}`,
          width: size,
          height: size,
          animationDelay: `${Math.random() * 30}s`,
          animationDuration: `${Math.random() * 30 + 20}s`,
        } as ParticleStyle;
      })
    );
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {particles.map((style, i) => (
        <div key={i} className="smoke-particle-el" style={style} />
      ))}
    </div>
  );
};

export default AnimatedSmokeBackground;
