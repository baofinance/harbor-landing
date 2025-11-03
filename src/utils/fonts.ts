import localFont from "next/font/local";

export const chillax = localFont({
  src: [
    {
      path: "../../public/fonts/Chillax.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/Chillax.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Chillax.ttf",
  weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Chillax.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Chillax.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Chillax.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-chillax",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});
