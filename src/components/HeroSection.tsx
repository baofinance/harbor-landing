"use client";

export default function HeroSection() {
  return (
    <section className="relative mx-auto max-w-[1300px] px-6 pt-36 pb-24 md:pt-48 md:pb-32">
      {/* Enhanced background glow + floating orbs with IDO banner aesthetic */}
      <div className="absolute inset-0 -z-10">
        {/* Main gradient background */}
        <div className="mx-auto max-w-[1000px] h-72 bg-gradient-to-r from-emerald-600/30 via-teal-500/20 to-emerald-600/30 blur-3xl" />
        
        {/* Enhanced floating orbs with emerald glow */}
        <div className="absolute top-10 left-1/4 w-40 h-40 bg-emerald-500/20 rounded-full blur-2xl hero-float-a animate-pulse" />
        <div className="absolute bottom-8 right-1/5 w-52 h-52 bg-teal-400/20 rounded-full blur-2xl hero-float-b animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-32 h-32 bg-white/8 rounded-full blur-xl hero-float-c" />
        
        {/* Additional glowing elements */}
        <div className="absolute top-20 right-1/3 w-24 h-24 bg-emerald-400/15 rounded-full blur-xl hero-float-d" />
        <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-teal-300/15 rounded-full blur-xl hero-float-e" />
      </div>

      <div className="text-center relative z-10">
        {/* Enhanced title with glowing effect */}
        <div className="relative">
          <h1 className="text-7xl md:text-8xl font-normal uppercase bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hero-gradient hero-fade">
            ZHENGLONG
          </h1>
          {/* Glow effect behind text */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-teal-300/20 to-emerald-400/20 blur-3xl -z-10 hero-glow" />
        </div>
        
        {/* Enhanced line with glow */}
        <div className="mx-auto mt-4 h-px w-0 bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent hero-line" />
        
        {/* Enhanced subtitle with better contrast */}
        <p className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl mx-auto hero-fade-delayed">
          Freshly steamed protected leverage tokens, paired with high-yield
          pegged stability.
        </p>
        
        {/* Add some floating accent elements */}
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
        <div className="absolute top-3/4 right-10 w-2 h-2 bg-teal-400 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
      </div>

      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(12px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes lineGrow {
          0% {
            width: 0;
            opacity: 0;
          }
          40% {
            opacity: 1;
          }
          100% {
            width: 12rem;
            opacity: 1;
          }
        }
        @keyframes floatA {
          0% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-12px) scale(1.04);
          }
          100% {
            transform: translateY(0) scale(1);
          }
        }
        @keyframes floatB {
          0% {
            transform: translateY(0) translateX(0) scale(1);
          }
          50% {
            transform: translateY(10px) translateX(-6px) scale(1.03);
          }
          100% {
            transform: translateY(0) translateX(0) scale(1);
          }
        }
        @keyframes floatC {
          0% {
            transform: translateY(-6px) scale(1);
          }
          50% {
            transform: translateY(6px) scale(1.02);
          }
          100% {
            transform: translateY(-6px) scale(1);
          }
        }
        @keyframes floatD {
          0% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-8px) scale(1.02);
          }
          100% {
            transform: translateY(0) scale(1);
          }
        }
        @keyframes floatE {
          0% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(8px) scale(1.02);
          }
          100% {
            transform: translateY(0) scale(1);
          }
        }
        .hero-gradient {
          background-size: 200% 200%;
          animation: gradientShift 16s ease-in-out infinite;
        }
        .hero-fade {
          animation: fadeUp 800ms ease forwards;
        }
        .hero-line {
          animation: lineGrow 1000ms ease 200ms forwards;
        }
        .hero-fade-delayed {
          opacity: 0;
          animation: fadeUp 800ms ease 250ms forwards;
        }
        .hero-float-a {
          animation: floatA 10s ease-in-out infinite;
        }
        .hero-float-b {
          animation: floatB 12s ease-in-out infinite;
        }
        .hero-float-c {
          animation: floatC 14s ease-in-out infinite;
        }
        .hero-float-d {
          animation: floatD 8s ease-in-out infinite;
        }
        .hero-float-e {
          animation: floatE 9s ease-in-out infinite;
        }
        .hero-glow {
          animation: gradientShift 16s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
