import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollingStrip } from "@/components/scrolling-strip";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const siteName = "Seachios Marine Services (Brazil)";
const description =
  "Seachios Marine Services delivers cargo hold cleaning, underwater support, and voyage repairs across Brazilian ports with ANTAQ-compliant teams.";

export const metadata: Metadata = {
  title: {
    default: `${siteName}`,
    template: `%s | ${siteName}`,
  },
  description,
  metadataBase: new URL("https://seachios-placeholder.com"),
  openGraph: {
    title: siteName,
    description,
    url: "https://seachios-placeholder.com",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-slate-100 text-slate-900">
        <ScrollingStrip />
        <SiteHeader />
        <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-12 lg:pt-16">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
