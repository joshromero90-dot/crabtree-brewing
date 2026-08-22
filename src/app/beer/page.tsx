import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CategoryNav } from "@/components/beer/CategoryNav";
import { BackToTop } from "@/components/ui/BackToTop";
import { beers, beerCategoryOrder } from "@/lib/site-config";
import { slugify } from "@/lib/slugify";

export const metadata: Metadata = {
  title: "Beer Menu | Crabtree Brewing Company",
};

export default function BeerPage() {
  const categories = beerCategoryOrder
    .map((category) => ({
      category,
      items: beers.filter((b) => b.category === category),
    }))
    .filter((c) => c.items.length > 0);

  return (
    <>
      <PageHero
        eyebrow="20+ On Tap"
        title="Beer Menu"
        subtitle="Tap into over 20+ beer and not-beer options. Pulled from the current tap list — always double check with the taproom for what's actually pouring today."
      />

      <CategoryNav categories={categories.map((c) => c.category)} />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col gap-16">
          {categories.map(({ category, items }) => (
            <div key={category} id={slugify(category)} className="scroll-mt-[250px]">
              <h2 className="font-display text-2xl tracking-wide text-gold-dim uppercase">
                {category}
              </h2>
              <div className="mt-6 grid gap-px overflow-hidden border border-ink-3 sm:grid-cols-2">
                {items.map((beer) => (
                  <div key={beer.slug} className="flex flex-col justify-between bg-ink-2 p-7">
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-display text-2xl tracking-wide text-cream uppercase">
                          {beer.name}
                        </h3>
                        <span className="shrink-0 font-sans text-xs font-bold text-gold-dim">
                          {beer.abv}
                        </span>
                      </div>
                      <span className="mt-1 block font-sans text-[11px] font-bold tracking-[0.15em] text-blue uppercase">
                        {beer.style}
                      </span>
                      <p className="mt-4 font-sans text-sm text-cream/50">{beer.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 font-sans text-xs text-cream/30">
          Sourced from crabtreebrewing.com&rsquo;s beer menu — taps rotate, so treat this as a
          starting point. Edit the list any time in{" "}
          <code className="text-cream/50">src/lib/site-config.ts</code>.
        </p>
      </section>

      <BackToTop />
    </>
  );
}
