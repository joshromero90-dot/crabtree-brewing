import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { QuickInfo } from "@/components/home/QuickInfo";
import { TapListPreview } from "@/components/home/TapListPreview";
import { EventsTeaser } from "@/components/home/EventsTeaser";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { MerchBanner } from "@/components/home/MerchBanner";

const DESCRIPTION =
  "Greeley, Colorado's original production brewery since 2006 — 20+ beers on tap, weekly trivia & poker nights, and a leashed-dog-friendly patio at 2961 29th St.";

export const metadata: Metadata = {
  title: "Brewery in Greeley, CO | Crabtree Brewing Company",
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Crabtree Brewing Company | Brewery in Greeley, CO",
    description: DESCRIPTION,
    url: "/",
    images: [{ url: "/gallery/hero-beers.jpg", width: 1600, height: 1067, alt: "Crabtree Brewing Company beers on tap" }],
  },
  twitter: {
    title: "Crabtree Brewing Company | Brewery in Greeley, CO",
    description: DESCRIPTION,
    images: ["/gallery/hero-beers.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <QuickInfo />
      <TapListPreview />
      <EventsTeaser />
      <AboutTeaser />
      <MerchBanner />
    </>
  );
}
