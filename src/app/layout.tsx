import type { Metadata } from "next";
import "./globals.css";
import { TransactionProvider } from "@/contexts/Transactions";
import NotificationWrapper from "@/components/NotificationWrapper";
import { Analytics } from "@vercel/analytics/next";
import Navigation from "@/components/Navigation";
import { chillax } from "@/utils/fonts";
import FadeContent from "@/components/FadeContent";

const siteUrl = "https://harbor.finance";
const title = "Harbor Protocol";
const description =
  "A decentralized protocol for creating synthetic assets pegged to any real-world data feed.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Harbor",
    "DeFi",
    "synthetic assets",
    "yield",
    "leverage",
    "crypto",
    "blockchain",
    "STEAM token",
  ],
  authors: [{ name: "Harbor Protocol" }],
  icons: {
    icon: "/WhiteHarborLogo.svg",
    shortcut: "/WhiteHarborLogo.svg",
    apple: "/WhiteHarborLogo.svg",
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
    creator: "@HarborFi",
    site: "@HarborFi",
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
    <html lang="en">
      <body
        className={`antialiased font-sans bg-nautical-blue text-white ${chillax.variable} relative scroll-smooth`}
      >
        <TransactionProvider>
          <Navigation />
          <NotificationWrapper />
          <FadeContent
            blur={false}
            duration={500}
            easing="ease-out"
            initialOpacity={0}
          >
            {children}
          </FadeContent>
          <Analytics />
        </TransactionProvider>
      </body>
    </html>
  );
}
