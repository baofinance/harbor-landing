/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-chillax)", "system-ui", "sans-serif"],
        chillax: ["var(--font-chillax)", "system-ui", "sans-serif"],
      },
      keyframes: {
        gradientShift: {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(12px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        lineGrow: {
          "0%": {
            width: "0",
            opacity: "0",
          },
          "40%": {
            opacity: "1",
          },
          "100%": {
            width: "12rem",
            opacity: "1",
          },
        },
        floatA: {
          "0%, 100%": {
            transform: "translateY(0) scale(1)",
          },
          "50%": {
            transform: "translateY(-12px) scale(1.04)",
          },
        },
        floatB: {
          "0%, 100%": {
            transform: "translateY(0) translateX(0) scale(1)",
          },
          "50%": {
            transform: "translateY(10px) translateX(-6px) scale(1.03)",
          },
        },
        floatC: {
          "0%, 100%": {
            transform: "translateY(-6px) scale(1)",
          },
          "50%": {
            transform: "translateY(6px) scale(1.02)",
          },
        },
        floatD: {
          "0%, 100%": {
            transform: "translateY(0) scale(1)",
          },
          "50%": {
            transform: "translateY(-8px) scale(1.02)",
          },
        },
        floatE: {
          "0%, 100%": {
            transform: "translateY(0) scale(1)",
          },
          "50%": {
            transform: "translateY(8px) scale(1.02)",
          },
        },
        "steam-1": {
          "0%": {
            transform: "translateX(0)",
            opacity: "0.05",
          },
          "50%": {
            transform: "translateX(100px)",
            opacity: "0.1",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "0.05",
          },
        },
        "steam-2": {
          "0%": {
            transform: "translateX(0)",
            opacity: "0.05",
          },
          "50%": {
            transform: "translateX(150px)",
            opacity: "0.1",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "0.05",
          },
        },
        "steam-3": {
          "0%": {
            transform: "translateX(0)",
            opacity: "0.05",
          },
          "50%": {
            transform: "translateX(200px)",
            opacity: "0.1",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "0.05",
          },
        },
        "fade-out": {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
        backgroundMove: {
          "0%": {
            transform: "translate(0, 0)",
          },
          "100%": {
            transform: "translate(40px, 40px)",
          },
        },
        "circuit-1": {
          "0%": {
            transform: "translateY(-50%)",
          },
          "100%": {
            transform: "translateY(0%)",
          },
        },
        "circuit-2": {
          "0%": {
            transform: "translateY(-30%)",
          },
          "100%": {
            transform: "translateY(20%)",
          },
        },
        "circuit-3": {
          "0%": {
            transform: "translateY(0%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        "float-1": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
        "float-2": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-15px)",
          },
        },
        "float-3": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-25px)",
          },
        },
        "float-4": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        "pulse-width": {
          "0%, 100%": {
            width: "100%",
          },
          "50%": {
            width: "130%",
          },
        },
        "pulse-width-mirror": {
          "0%, 100%": {
            width: "100%",
          },
          "50%": {
            width: "130%",
          },
        },
        "scale-pulse": {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.2)",
          },
        },
        "scale-pulse-mirror": {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.2)",
          },
        },
        "flip-token": {
          "0%, 80%": {
            transform: "rotateX(0deg)",
          },
          "90%": {
            transform: "rotateX(180deg)",
          },
          "100%": {
            transform: "rotateX(180deg)",
          },
        },
      },
      animation: {
        "steam-1": "steam-1 15s ease-in-out infinite",
        "steam-2": "steam-2 20s ease-in-out infinite",
        "steam-3": "steam-3 25s ease-in-out infinite",
        "fade-out": "fade-out 0.5s ease-out forwards 2s",
        "background-move": "backgroundMove 20s linear infinite",
        "circuit-1": "circuit-1 15s linear infinite",
        "circuit-2": "circuit-2 20s linear infinite",
        "circuit-3": "circuit-3 18s linear infinite",
        "float-1": "float-1 6s ease-in-out infinite",
        "float-2": "float-2 8s ease-in-out infinite",
        "float-3": "float-3 7s ease-in-out infinite",
        "float-4": "float-4 9s ease-in-out infinite",
        "pulse-width": "pulse-width 2s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        "pulse-width-mirror":
          "pulse-width-mirror 2s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        "scale-pulse": "scale-pulse 2s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        "scale-pulse-mirror":
          "scale-pulse-mirror 2s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        "flip-token": "flip-token 3s linear infinite",
        gradientShift: "gradientShift 16s ease-in-out infinite",
        fadeUp: "fadeUp 800ms ease forwards",
        lineGrow: "lineGrow 1000ms ease 200ms forwards",
        floatA: "floatA 10s ease-in-out infinite",
        floatB: "floatB 12s ease-in-out infinite",
        floatC: "floatC 14s ease-in-out infinite",
        floatD: "floatD 8s ease-in-out infinite",
        floatE: "floatE 9s ease-in-out infinite",
      },
      transitionProperty: {
        opacity: "opacity",
      },
      transitionDuration: {
        2000: "2000ms",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        // Harbor Brand Colors
        "nautical-blue": "#1E4775",
        "nautical-blue-light": "#2B5E99",
        "nautical-blue-surface": "#4F83BF",
        "nautical-blue-dark": "#142E4A",
        "nautical-deep": "#0D1F36",
        "seafoam-mint": "#B8EBD5",
        "seafoam-mint-light": "#D4F4E6",
        "seafoam-mint-dark": "#91D9BF",
        "sunrise-coral": "#FF8A7A",
        "sunrise-coral-light": "#FFB3A9",
        "sunrise-coral-dark": "#FF6C57",
        charcoal: "#2E2E2E",
        "charcoal-light": "#404040",
        "charcoal-dark": "#1A1A1A",
        "harbor-white": "#FFFFFF",

        // Legacy support
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};
