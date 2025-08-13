"use client";

export default function HeroSection() {
  return (
    <section className="relative mx-auto max-w-[1300px] px-6 pt-32 pb-20 md:pt-44 md:pb-28">
      {/* Subtle background glow + floating orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="mx-auto max-w-[1000px] h-72 bg-gradient-to-r from-emerald-600/20 via-teal-500/10 to-emerald-600/20 blur-3xl" />
        <div className="absolute top-10 left-1/4 w-40 h-40 bg-emerald-500/12 rounded-full blur-2xl hero-float-a" />
        <div className="absolute bottom-8 right-1/5 w-52 h-52 bg-teal-400/12 rounded-full blur-2xl hero-float-b" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-32 h-32 bg-white/6 rounded-full blur-xl hero-float-c" />
      </div>

      <div className="text-center">
        <h1 className="text-7xl md:text-8xl font-normal uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#4A7C59] to-[#6B9E76] hero-gradient hero-fade">
          ZHENGLONG
        </h1>
        <div className="mx-auto mt-4 h-px w-0 bg-white/20 hero-line" />
        <p className="mt-6 text-lg md:text-xl text-white/70 max-w-3xl mx-auto hero-fade-delayed">
          Freshly steamed protected leverage tokens, paired with high-yield
          pegged stability.
        </p>
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
      `}</style>
    </section>
  );
}
