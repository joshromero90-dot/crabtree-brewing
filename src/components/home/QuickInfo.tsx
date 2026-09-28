"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site-config";
import { getTodayStatus, formatHour } from "@/lib/hours";

export function QuickInfo() {
  // This section is statically prerendered at build time, so today's hours
  // can't be baked in server-side — that would freeze on whatever day the
  // site was last deployed. Compute it client-side on mount instead.
  const [todayHours, setTodayHours] = useState<{ open: number | null; close: number | null } | null>(
    null,
  );

  useEffect(() => {
    setTodayHours(getTodayStatus().today);
    const id = setInterval(() => setTodayHours(getTodayStatus().today), 60_000);
    return () => clearInterval(id);
  }, []);

  const stats = [
    {
      label: "Today's Hours",
      value:
        todayHours === null
          ? " "
          : todayHours.open === null
            ? "Closed"
            : `${formatHour(todayHours.open)}–${formatHour(todayHours.close)}`,
    },
    { label: "Taps Pouring", value: "20+" },
    { label: "Founded", value: `${site.established}` },
    { label: "Location", value: `${site.address.city}, ${site.address.state}` },
  ];

  return (
    <section className="border-b border-ink-3 bg-gold">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-gold px-6 py-8 text-center">
            <div className="font-display text-2xl tracking-wide text-cream uppercase sm:text-3xl">
              {stat.value}
            </div>
            <div className="mt-2 font-sans text-[10px] font-semibold tracking-[0.2em] text-cream/60 uppercase">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
