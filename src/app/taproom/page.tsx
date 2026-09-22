import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site-config";
import { formatHour } from "@/lib/hours";

const DESCRIPTION =
  "Visit Crabtree Brewing's taproom at 2961 29th St in Greeley, CO. Hours, directions, and everything you need to plan your visit to Greeley's original brewery.";

export const metadata: Metadata = {
  title: "Taproom & Hours in Greeley, CO",
  description: DESCRIPTION,
  alternates: { canonical: "/taproom" },
  openGraph: {
    title: "Taproom & Hours | Crabtree Brewing Company",
    description: DESCRIPTION,
    url: "/taproom",
    images: [{ url: "/gallery/taphouse-02.jpg", width: 900, height: 600, alt: "The main bar and taproom seating at Crabtree Brewing in Greeley, CO" }],
  },
  twitter: {
    title: "Taproom & Hours | Crabtree Brewing Company",
    description: DESCRIPTION,
    images: ["/gallery/taphouse-02.jpg"],
  },
};

const FAQS = [
  {
    question: "What are Crabtree Brewing's taproom hours?",
    answer:
      "We're open every day except Monday — Tuesday, Wednesday, Thursday, and Sunday from 2 PM, and Friday and Saturday from noon. See the full schedule above for closing times.",
  },
  {
    question: "Where is Crabtree Brewing located?",
    answer:
      "Our taproom is at 2961 29th St, Greeley, CO 80631 — Greeley's original production brewery, pouring since 2006.",
  },
  {
    question: "Is Crabtree Brewing dog and family friendly?",
    answer:
      "You bet — the whole family is welcome throughout the taproom. Good dogs are welcome too, out on the patio: leash on, best behavior on, tail wags encouraged.",
  },
  {
    question: "Does Crabtree Brewing have events?",
    answer:
      "Yes — trivia night is every Wednesday at 7 PM and poker night is every Thursday at 6 PM, plus seasonal one-off releases. See the full events calendar for what's coming up.",
  },
  {
    question: "How many beers does Crabtree Brewing have on tap?",
    answer:
      "20+ beers across blondes, pilsners, IPAs, sours, ambers, and stouts, plus seasonal releases like our fall pumpkin beer. See the full beer menu for what's pouring now.",
  },
];

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
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
        subtitle="Good beer. Good company."
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

      <section className="border-t border-ink-3 bg-ink-2">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="font-display text-3xl tracking-wide text-cream uppercase">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 flex flex-col divide-y divide-ink-3 border-t border-b border-ink-3">
            {FAQS.map((faq) => (
              <div key={faq.question} className="py-6">
                <h3 className="font-sans text-base font-bold text-cream">{faq.question}</h3>
                <p className="mt-2 font-sans text-sm text-cream/60">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
    </>
  );
}
