import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { BeerCard } from "@/components/home/BeerCard";
import { beers } from "@/lib/site-config";

export function TapListPreview() {
  const featured = beers.filter((b) => b.featured);

  return (
    <section className="border-b border-ink-3 bg-ink-2">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>What&rsquo;s On Tap</Eyebrow>
            <h2 className="mt-4 font-display text-4xl tracking-wide text-cream uppercase sm:text-5xl">
              Best Sellers
            </h2>
          </div>
          <Link
            href="/beer"
            className="font-sans text-xs font-bold tracking-[0.2em] text-gold-dim uppercase hover:underline"
          >
            Full Beer Menu →
          </Link>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden border border-ink-3 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((beer) => (
            <BeerCard key={beer.slug} beer={beer} />
          ))}
        </div>

        <div className="mt-10">
          <Button href="/beer" variant="outline">
            See All 20+ Beers
          </Button>
        </div>
      </div>
    </section>
  );
}
