import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AgeGate } from "@/components/layout/AgeGate";
import { StructuredData } from "@/components/layout/StructuredData";
import { site } from "@/lib/site-config";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const SITE_URL = "https://crabtreebrewing.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Crabtree Brewing",
    "Greeley brewery",
    "Greeley taproom",
    "Colorado craft beer",
    "Greeley Colorado beer",
    "brewery near me",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    images: [
      {
        url: "/gallery/hero-beers.jpg",
        width: 1600,
        height: 1067,
        alt: "Crabtree Brewing Company beers on tap",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    images: ["/gallery/hero-beers.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ink text-cream">
        <StructuredData />
        <AgeGate />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
