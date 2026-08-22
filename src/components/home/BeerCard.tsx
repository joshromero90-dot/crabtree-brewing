"use client";

import Image from "next/image";
import { useState } from "react";
import type { Beer } from "@/lib/site-config";

// Real can photos, matched to the specific best-seller they belong to.
const BEER_IMAGES: Record<string, string> = {
  dearfield: "/gallery/taproom-01.jpg",
  "strawberry-rhubarb": "/gallery/taproom-02.jpg",
  "chela-vida": "/gallery/taproom-03.jpg",
  "chronic-haze": "/gallery/taproom-04.jpg",
};

export function BeerCard({ beer }: { beer: Beer }) {
  const [flipped, setFlipped] = useState(false);
  const image = BEER_IMAGES[beer.slug];

  return (
    <button
      type="button"
      onClick={() => setFlipped((f) => !f)}
      aria-expanded={flipped}
      className="group relative aspect-[3/4] w-full overflow-hidden bg-ink-2 text-left"
    >
      {image && (
        <Image
          src={image}
          alt={`${beer.name} can`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      )}

      <div
        className={`absolute inset-0 flex flex-col justify-between bg-gold p-6 transition-opacity duration-300 ${
          flipped ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      >
        <div>
          <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-blue uppercase">
            {beer.style}
          </span>
          <h3 className="mt-2 font-display text-2xl tracking-wide text-cream uppercase">
            {beer.name}
          </h3>
          <p className="mt-3 font-sans text-sm text-cream/70">{beer.description}</p>
        </div>
        <span className="mt-6 font-sans text-xs font-bold tracking-[0.15em] text-cream">
          {beer.abv} ABV
        </span>
      </div>
    </button>
  );
}
