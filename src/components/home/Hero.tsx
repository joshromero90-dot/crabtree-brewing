import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-3">
      {/* Abstract brand glow */}
      <div
        className="pointer-events-none absolute -top-1/3 -right-1/4 h-[600px] w-[600px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-gold), transparent 70%)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-1/3 -left-1/4 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-blue), transparent 70%)" }}
        aria-hidden
      />

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
