"use client";

import { useEffect, useState } from "react";
import { slugify } from "@/lib/slugify";

export function CategoryNav({ categories }: { categories: string[] }) {
  const [active, setActive] = useState(slugify(categories[0] ?? ""));

  useEffect(() => {
    const sections = categories
      .map((c) => document.getElementById(slugify(c)))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top of the viewport among those
        // currently intersecting — keeps the active pill in sync while
        // scrolling past several short sections at once.
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;
        const topMost = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b,
        );
        setActive(topMost.target.id);
      },
      { rootMargin: "-250px 0px -70% 0px", threshold: 0 },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [categories]);

  return (
    <nav
      aria-label="Jump to beer category"
      className="border-b border-ink-3 bg-ink py-6"
    >
      <div className="mx-auto max-w-7xl px-6">
        <ul className="flex flex-wrap gap-3">
          {categories.map((category) => {
            const slug = slugify(category);
            const isActive = active === slug;
            return (
              <li key={slug}>
                <a
                  href={`#${slug}`}
                  className={`inline-block border px-4 py-2 font-sans text-xs font-bold tracking-[0.1em] uppercase transition-colors ${
                    isActive
                      ? "border-gold bg-gold text-cream"
                      : "border-ink-3 text-cream/60 hover:border-gold hover:text-gold-dim"
                  }`}
                >
                  {category}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
