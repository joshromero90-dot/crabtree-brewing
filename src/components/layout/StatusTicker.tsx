"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site-config";
import { getTodayStatus, formatHour } from "@/lib/hours";

const TICKER_ITEMS = [
  "20+ BEERS ON TAP",
  "TRIVIA TUESDAYS · 7PM",
  "LIVE MUSIC FRIDAYS · 7PM",
  `EST. ${site.established} · GREELEY'S ORIGINAL PRODUCTION BREWERY`,
  "FAMILY & DOG FRIENDLY TAPROOM",
];

export function StatusTicker() {
  const [status, setStatus] = useState<{ isOpen: boolean; closesAt: number | null } | null>(
    null,
  );

  useEffect(() => {
    setStatus(getTodayStatus());
    const id = setInterval(() => setStatus(getTodayStatus()), 60_000);
    return () => clearInterval(id);
  }, []);

  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="border-b border-ink-3 bg-ink-2">
      <div className="flex items-stretch">
        <div className="flex shrink-0 items-center gap-2 border-r border-ink-3 bg-gold px-4 py-2">
          <span
            className={`h-2 w-2 rounded-full ${
              status?.isOpen ? "bg-emerald-600" : "bg-ink/50"
            }`}
            aria-hidden
          />
          <span className="whitespace-nowrap font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-cream">
            {status === null
              ? " "
              : status.isOpen
                ? `Open Now · Until ${formatHour(status.closesAt)}`
                : "Closed Now"}
          </span>
        </div>
        <div className="relative flex-1 overflow-hidden">
          <div className="animate-marquee flex w-max items-center gap-10 py-2 whitespace-nowrap">
            {items.map((item, i) => (
              <span
                key={i}
                className="font-sans text-[11px] font-semibold tracking-[0.18em] text-cream/50"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
