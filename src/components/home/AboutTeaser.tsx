import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site-config";

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
      <div className="relative mx-auto max-w-7xl px-6 py-20">
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
      </div>
    </section>
  );
}
