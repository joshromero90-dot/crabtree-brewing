import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { events } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Events | Crabtree Brewing Company",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Taproom Calendar"
        title="Events"
        subtitle="Weekly regulars and one-off specials. Check back — this list grows as we lock in the calendar."
      />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <ul className="flex flex-col divide-y divide-ink-3 border-t border-b border-ink-3">
          {events.map((event) => (
            <li key={event.slug} className="flex flex-col gap-3 py-7 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="font-display text-2xl tracking-wide text-cream uppercase">
                    {event.title}
                  </h2>
                  {event.recurring && (
                    <span className="border border-blue px-2 py-0.5 font-sans text-[10px] font-bold tracking-[0.1em] text-blue uppercase">
                      Weekly
                    </span>
                  )}
                </div>
                <p className="mt-2 max-w-lg font-sans text-sm text-cream/50">
                  {event.description}
                </p>
              </div>
              <div className="shrink-0 sm:text-right">
                <div className="font-sans text-sm font-bold tracking-[0.05em] text-gold uppercase">
                  {event.date}
                </div>
                <div className="font-sans text-sm text-cream/40">{event.time}</div>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-8 font-sans text-xs text-cream/30">
          Placeholder calendar — swap in real dates in{" "}
          <code className="text-cream/50">src/lib/site-config.ts</code>, or wire this page up
          to a live calendar feed later.
        </p>
      </section>
    </>
  );
}
