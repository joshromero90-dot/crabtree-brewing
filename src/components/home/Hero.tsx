import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-3">
      {/* Oversized brand mark — bleeds off the corner as a signature graphic device */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 h-[480px] w-[480px] opacity-[0.14] sm:-top-40 sm:-left-40 sm:h-[620px] sm:w-[620px] lg:-top-56 lg:-left-56 lg:h-[820px] lg:w-[820px]"
        aria-hidden
      >
        <Image src="/logo.png" alt="" fill className="object-contain" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 pt-10 pb-12 sm:pt-14 sm:pb-16 lg:grid-cols-[1fr_1.3fr] lg:items-center lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 bg-gold" />
            <span className="font-sans text-[11px] font-bold tracking-[0.3em] text-gold-dim uppercase">
              Est. {site.established} · Greeley, Colorado
            </span>
          </div>

          <h1 className="mt-6 font-display text-[15vw] leading-[0.85] text-cream uppercase sm:text-7xl lg:text-7xl xl:text-8xl">
            Greeley&rsquo;s
            <span className="mt-2 block text-blue">OG Brewery.</span>
          </h1>

          <p className="mt-8 max-w-xl text-balance font-sans text-base text-cream/60 sm:text-lg">
            {site.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/beer">View Beer Menu</Button>
            <Button href="/taproom" variant="outline">
              Get Directions
            </Button>
          </div>
        </div>

        <div className="relative aspect-[3/2] overflow-hidden border-2 border-ink-3 bg-ink-2">
          <Image
            src="/gallery/hero-beers.jpg"
            alt="Three Crabtree beers — a pale ale, a sour, and a lager — poured in etched Crabtree glassware on a taproom table"
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
