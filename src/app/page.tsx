import { Hero } from "@/components/home/Hero";
import { QuickInfo } from "@/components/home/QuickInfo";
import { TapListPreview } from "@/components/home/TapListPreview";
import { EventsTeaser } from "@/components/home/EventsTeaser";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { MerchBanner } from "@/components/home/MerchBanner";

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
