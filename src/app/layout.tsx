import type { Metadata } from "next";
import "./globals.css";
import { TransactionProvider } from "@/contexts/Transactions";
import NotificationWrapper from "@/components/NotificationWrapper";
import { Analytics } from "@vercel/analytics/next";
import Navigation from "@/components/Navigation";
import { GeistSans } from "geist/font/sans";
import { Geo } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import AnimatedSmokeBackground from "@/components/AnimatedSmokeBackground";

const geo = Geo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-geo",
});

export const metadata: Metadata = {
  title: "Zhenglong Protocol",
  description: "Create tokens pegged to real-world data feeds",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased font-sans bg-zinc-950 text-zinc-100 ${GeistSans.variable} ${GeistMono.variable} ${geo.variable} relative`}
      >
        <TransactionProvider>
          <Navigation />
          <AnimatedSmokeBackground />
          <NotificationWrapper />
          {children}
          <Analytics />
        </TransactionProvider>
      </body>
    </html>
  );
}
