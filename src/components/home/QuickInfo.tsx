import { site } from "@/lib/site-config";
import { formatHour } from "@/lib/hours";

export function QuickInfo() {
  const todayHours = site.hours[new Date().getDay()];

  const stats = [
    { label: "Today's Hours", value: todayHours.open === null ? "Closed" : `${formatHour(todayHours.open)}–${formatHour(todayHours.close)}` },
    { label: "Taps Pouring", value: "20+" },
    { label: "Founded", value: `${site.established}` },
    { label: "Location", value: `${site.address.city}, ${site.address.state}` },
  ];

  return (
    <section className="border-b border-ink-3">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden border-x border-ink-3 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-ink-2 px-6 py-8 text-center">
            <div className="font-display text-2xl tracking-wide text-gold uppercase sm:text-3xl">
              {stat.value}
            </div>
            <div className="mt-2 font-sans text-[10px] font-semibold tracking-[0.2em] text-cream/40 uppercase">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
