import type { Metadata } from "next";
import "./globals.css";
import { TransactionProvider } from "@/contexts/Transactions";
import NotificationWrapper from "@/components/NotificationWrapper";
import { Analytics } from "@vercel/analytics/next";
import Navigation from "@/components/Navigation";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { geo, spaceGrotesk } from "@/utils/fonts";
import AnimatedSmokeBackground from "@/components/AnimatedSmokeBackground";

export const metadata: Metadata = {
  title: "Zhenglong Protocol",
  description: "Create tokens pegged to real-world data feeds",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geo.variable} ${spaceGrotesk.variable}`}>
      <body
        className={`antialiased font-sans bg-zinc-950 text-zinc-100 ${GeistSans.variable} ${GeistMono.variable} relative`}
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
