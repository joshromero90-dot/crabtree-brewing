import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site-config";
import { formatHour } from "@/lib/hours";

export const metadata: Metadata = {
  title: "Taproom | Crabtree Brewing Company",
};

export default function TaproomPage() {
  const mapQuery = encodeURIComponent(
    `${site.address.line1}, ${site.address.city}, ${site.address.state} ${site.address.zip}`,
  );

  return (
    <>
      <PageHero
        eyebrow="Greeley's Destination Brewery"
        title="The Taproom"
        subtitle="Come for the brew, stay for the vibes. Family and dog friendly, always pouring something new."
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="font-sans text-base text-cream/60">
            Seasonal beers, special releases, and an endless supply of great people — that&rsquo;s
            what you&rsquo;ll find in the taphouse.
          </p>
          <h2 className="mt-8 font-display text-2xl tracking-wide text-gold-dim uppercase">
            Hours
          </h2>
          <ul className="mt-5 flex flex-col divide-y divide-ink-3 border-t border-b border-ink-3">
            {site.hours.map((h) => (
              <li key={h.day} className="flex justify-between py-3 font-sans text-sm">
                <span className="text-cream/70">{h.day}</span>
                <span className="font-semibold text-cream">
                  {h.open === null ? "Closed" : `${formatHour(h.open)} – ${formatHour(h.close)}`}
                </span>
              </li>
            ))}
          </ul>

          <h2 className="mt-12 font-display text-2xl tracking-wide text-gold-dim uppercase">
            Find Us
          </h2>
          <address className="mt-5 font-sans text-base text-cream/70 not-italic">
            {site.address.line1}
            <br />
            {site.address.city}, {site.address.state} {site.address.zip}
            <br />
            <a href={site.phoneHref} className="mt-2 inline-block hover:text-gold-dim">
              {site.phone}
            </a>
          </address>
          <div className="mt-6 flex flex-wrap gap-4">
            <Button href={site.address.mapsHref} external>
              Get Directions
            </Button>
            <Button href={site.phoneHref} variant="outline">
              Call the Taproom
            </Button>
          </div>
        </div>

        <div className="h-80 w-full overflow-hidden border border-ink-3 lg:h-full">
          <iframe
            title="Map to Crabtree Brewing Company"
            src={`https://maps.google.com/maps?q=${mapQuery}&z=15&output=embed`}
            className="h-full w-full"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}
