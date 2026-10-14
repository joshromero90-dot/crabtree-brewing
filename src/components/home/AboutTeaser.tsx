import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site-config";
import Image from "next/image";

export function AboutTeaser() {
  return (
    <section className="relative overflow-hidden border-b border-ink-3 bg-ink-2">
      <div
        className="pointer-events-none absolute top-0 right-0 h-full w-1/2 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, var(--color-gold) 0, var(--color-gold) 2px, transparent 2px, transparent 24px)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div className="max-w-2xl">
          <Eyebrow>Since {site.established}</Eyebrow>
          <h2 className="mt-4 font-display text-4xl tracking-wide text-cream uppercase sm:text-5xl">
            Greeley&rsquo;s Original
            <br />
            Production Brewery
          </h2>
          <p className="mt-6 font-sans text-base text-cream/60">
            What started as a homebrewing habit in {site.established} is now Greeley&rsquo;s
            destination brewery — seasonal beers, special releases, and an endless supply of
            great people. Come for the brew, stay for the vibes.
          </p>
          <div className="mt-8">
            <Button href="/about" variant="outline">
              Our Story
            </Button>
          </div>
        </div>
        <figure className="w-full max-w-lg justify-self-center lg:justify-self-end">
          <div className="overflow-hidden border-2 border-ink-3 shadow-lg">
            <Image
              src="/gallery/oktobrewfest-2026-booth.webp"
              alt="Three people raising beers at Crabtree Brewing's autumn-decorated booth at OktoBrewfest 2026"
              width={1400}
              height={1050}
              sizes="(min-width: 1024px) 40vw, (min-width: 640px) 512px, calc(100vw - 48px)"
              className="h-auto w-full"
            />
          </div>
          <figcaption className="mt-3 font-sans text-xs tracking-wide text-cream/60">
            OktoBrewfest 2026
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
