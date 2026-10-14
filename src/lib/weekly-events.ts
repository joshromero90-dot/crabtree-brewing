import type { BrewEvent } from "./site-config";

/** Monday–Sunday in Greeley, including earlier events in the current week. */
export function eventsThisWeek(events: BrewEvent[], now = new Date()): BrewEvent[] {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Denver",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);
  const part = (type: string) => Number(parts.find((p) => p.type === type)!.value);
  // UTC here is only a way to do calendar arithmetic, not event time conversion.
  const today = new Date(Date.UTC(part("year"), part("month") - 1, part("day")));
  const monday = new Date(today);
  monday.setUTCDate(today.getUTCDate() - (today.getUTCDay() + 6) % 7);
  const nextMonday = new Date(monday);
  nextMonday.setUTCDate(monday.getUTCDate() + 7);
  const start = monday.toISOString().slice(0, 10);
  const end = nextMonday.toISOString().slice(0, 10);

  return events.filter((event) => event.recurring || (
    event.startsOn >= start && event.startsOn < end
  ));
}
