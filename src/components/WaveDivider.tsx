"use client";

export default function WaveDivider() {
  return (
    <div className="relative w-screen select-none" aria-hidden>
      <svg
        viewBox="0 0 1440 120"
        xmlns="http://www.w3.org/2000/svg"
        className="block w-screen h-[110px] sm:h-[140px]"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="dividerBlue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#1E4775" />
            <stop offset="1" stopColor="#1E4775" />
          </linearGradient>
        </defs>

        {/* Mint band (soft) */}
        <path
          d="M0,58 C210,118 470,8 720,50 C970,92 1200,32 1440,74 L1440,120 L0,120 Z"
          fill="#B8EBD5"
          fillOpacity="0.16"
        />

        {/* Coral band (very light) */}
        <path
          d="M0,72 C220,128 480,20 720,62 C980,104 1210,44 1440,84 L1440,120 L0,120 Z"
          fill="#FF8A7A"
          fillOpacity="0.10"
        />

        {/* White foam highlight (subtle) */}
        <path
          d="M0,52 C240,112 500,6 720,44 C950,82 1200,26 1440,64 L1440,120 L0,120 Z"
          fill="#FFFFFF"
          fillOpacity="0.06"
        />
        {/* Base wave matching the next section color (drawn last, on top) */}
        <path
          d="M0,40 C240,120 480,0 720,40 C960,80 1200,20 1440,60 L1440,120 L0,120 Z"
          fill="url(#dividerBlue)"
        />
      </svg>
    </div>
  );
}
