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

const siteUrl = "https://zhenglong.finance";
const title = "Zhenglong Protocol";
const description =
  "A decentralized protocol for creating synthetic assets pegged to any real-world data feed.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Zhenglong",
    "DeFi",
    "synthetic assets",
    "yield",
    "leverage",
    "crypto",
    "blockchain",
    "STEAM token",
  ],
  authors: [{ name: "Zhenglong Protocol" }],
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: title,
    images: [
      {
        url: "/demo.png",
        width: 1200,
        height: 630,
        alt: description,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@ZhenglongFi",
    site: "@ZhenglongFi",
    images: [`${siteUrl}/demo.png`],
  },
  alternates: {
    canonical: siteUrl,
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
