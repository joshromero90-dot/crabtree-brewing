import { site } from "@/lib/site-config";

// Keep in sync with the SITE_URL in src/app/layout.tsx, sitemap.ts, and robots.ts.
const SITE_URL = "https://crabtreebrewing.com";

const DAY_URIS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function toTimeString(hour: number): string {
  const h = Math.floor(hour);
  const m = Math.round((hour - h) * 60);
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

export function StructuredData() {
  const openingHours = site.hours
    .filter((h) => h.open !== null && h.close !== null)
    .map((h, i) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${DAY_URIS[site.hours.indexOf(h)]}`,
      opens: toTimeString(h.open as number),
      closes: toTimeString(h.close as number),
    }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Brewery",
    "@id": `${SITE_URL}/#business`,
    name: site.name,
    description: site.description,
    image: `${SITE_URL}/gallery/hero-beers.jpg`,
    logo: `${SITE_URL}/logo.png`,
    url: SITE_URL,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "US",
    },
    openingHoursSpecification: openingHours,
    sameAs: [site.social.instagram, site.social.facebook, site.social.untappd],
    servesCuisine: "Beer",
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
