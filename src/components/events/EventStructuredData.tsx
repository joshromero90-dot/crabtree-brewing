import type { BrewEvent } from "@/lib/site-config";
import { site } from "@/lib/site-config";

// Keep in sync with the SITE_URL in src/app/layout.tsx, sitemap.ts, robots.ts, and StructuredData.tsx.
const SITE_URL = "https://crabtreebrewing.com";

const WEEKDAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// The taproom's actual timezone. Netlify's build runner has no TZ set (it
// builds in UTC), so event hours must be computed against this explicitly
// rather than the build machine's local time — otherwise "7:00 PM" would
// get stamped as 7 PM UTC (1 PM Mountain) in the deployed structured data.
const TIME_ZONE = "America/Denver";

function parseHour(time: string): number {
  const match = time.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!match) return 0;
  let hour = parseInt(match[1], 10);
  const isPM = match[3].toUpperCase() === "PM";
  if (isPM && hour !== 12) hour += 12;
  if (!isPM && hour === 12) hour = 0;
  return hour;
}

// Minutes to add to UTC to get wall-clock time in `timeZone` at `date`
// (e.g. -360 during MDT, -420 during MST) — handles the DST transition.
function timeZoneOffsetMinutes(date: Date, timeZone: string): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  })
    .formatToParts(date)
    .reduce<Record<string, string>>((acc, p) => {
      if (p.type !== "literal") acc[p.type] = p.value;
      return acc;
    }, {});
  const asUTC = Date.UTC(
    Number(parts.year),
    Number(parts.month) - 1,
    Number(parts.day),
    Number(parts.hour),
    Number(parts.minute),
    Number(parts.second),
  );
  return (asUTC - date.getTime()) / 60000;
}

// Computes the next upcoming occurrence of a weekly recurring event, in
// America/Denver wall-clock time. This page is statically prerendered, so
// the date is fixed at build time and refreshes on the next deploy.
function nextOccurrenceISO(weekday: string, time: string): string | null {
  const targetDay = WEEKDAYS.indexOf(weekday);
  if (targetDay === -1) return null;
  const hour = parseHour(time);

  const now = new Date();
  const nowOffset = timeZoneOffsetMinutes(now, TIME_ZONE);
  const nowDenver = new Date(now.getTime() + nowOffset * 60000);
  const diff = (targetDay - nowDenver.getUTCDay() + 7) % 7;
  const candidate = new Date(
    Date.UTC(
      nowDenver.getUTCFullYear(),
      nowDenver.getUTCMonth(),
      nowDenver.getUTCDate() + diff,
      hour,
      0,
      0,
    ),
  );

  const candidateOffset = timeZoneOffsetMinutes(candidate, TIME_ZONE);
  const utcInstant = new Date(candidate.getTime() - candidateOffset * 60000);
  if (utcInstant.getTime() < now.getTime()) {
    utcInstant.setUTCDate(utcInstant.getUTCDate() + 7);
  }
  return utcInstant.toISOString();
}

export function EventStructuredData({ events }: { events: BrewEvent[] }) {
  const items = events
    .filter((event) => event.recurring && event.date.startsWith("Every "))
    .map((event) => {
      const weekday = event.date.replace("Every ", "");
      const startDate = nextOccurrenceISO(weekday, event.time);
      if (!startDate) return null;

      return {
        "@context": "https://schema.org",
        "@type": "Event",
        name: `${event.title} Night at Crabtree Brewing`,
        startDate,
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        description: event.description,
        image: `${SITE_URL}/gallery/hero-beers.jpg`,
        location: {
          "@type": "Place",
          name: site.name,
          address: {
            "@type": "PostalAddress",
            streetAddress: site.address.line1,
            addressLocality: site.address.city,
            addressRegion: site.address.state,
            postalCode: site.address.zip,
            addressCountry: "US",
          },
        },
        organizer: {
          "@type": "Organization",
          name: site.name,
          url: SITE_URL,
        },
      };
    })
    .filter((item) => item !== null);

  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
