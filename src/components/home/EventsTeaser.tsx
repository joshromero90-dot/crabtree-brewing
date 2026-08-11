import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { events } from "@/lib/site-config";

export function EventsTeaser() {
  return (
    <section className="border-b border-ink-3">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div>
          <Eyebrow>Happening at the Taproom</Eyebrow>
          <h2 className="mt-4 font-display text-4xl tracking-wide text-cream uppercase sm:text-5xl">
            Events
          </h2>
          <p className="mt-6 max-w-sm font-sans text-sm text-cream/50">
            Trivia, live music, and tap takeovers — the taproom calendar, always up to date.
          </p>
          <div className="mt-8">
            <Button href="/events" variant="outline">
              Full Calendar
            </Button>
          </div>
        </div>

        <ul className="flex flex-col divide-y divide-ink-3 border-t border-b border-ink-3">
          {events.map((event) => (
            <li key={event.slug} className="flex items-center justify-between gap-6 py-5">
              <div>
                <h3 className="font-display text-xl tracking-wide text-cream uppercase">
                  {event.title}
                </h3>
                <p className="mt-1 font-sans text-sm text-cream/45">{event.description}</p>
              </div>
              <div className="shrink-0 text-right">
                <div className="font-sans text-xs font-bold tracking-[0.1em] text-gold uppercase">
                  {event.date}
                </div>
                <div className="font-sans text-xs text-cream/40">{event.time}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
