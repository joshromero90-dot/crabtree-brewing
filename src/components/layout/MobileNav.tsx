"use client";

import Link from "next/link";
import { useState } from "react";

const NAV = [
  { href: "/beer", label: "Beer" },
  { href: "/taproom", label: "Taproom" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
  { href: "/merch", label: "Merch" },
  { href: "/contact", label: "Contact" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Toggle menu"
        className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] border border-ink-3"
      >
        <span
          className={`h-[2px] w-4 bg-cream transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
        />
        <span className={`h-[2px] w-4 bg-cream transition-opacity ${open ? "opacity-0" : ""}`} />
        <span
          className={`h-[2px] w-4 bg-cream transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full z-40 border-b border-ink-3 bg-ink px-6 py-6 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
          <nav className="flex flex-col gap-5">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl tracking-wide text-cream uppercase hover:text-gold-dim"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/taproom"
              onClick={() => setOpen(false)}
              className="mt-2 w-fit border-2 border-gold bg-gold px-4 py-2 font-sans text-xs font-bold tracking-[0.15em] text-cream uppercase"
            >
              Visit Taproom
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
