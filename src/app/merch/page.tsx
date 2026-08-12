import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Merch | Crabtree Brewing Company",
};

const CATEGORIES = [
  { name: "Apparel", desc: "Tees, hoodies, tanks" },
  { name: "Headwear", desc: "Hats and beanies" },
  { name: "Drinkware", desc: "Pint glasses, growlers, koozies" },
];

export default function MerchPage() {
  return (
    <>
      <PageHero
        eyebrow="Take It Home"
        title="Merch"
        subtitle="Shop online or grab gear in person at the taproom."
      />

      <div className="mx-auto max-w-7xl px-6 pt-10">
        <Button href={site.shopUrl} external>
          Shop the Online Store
        </Button>
      </div>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-px overflow-hidden border border-ink-3 sm:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.name}
              className="flex flex-col items-center justify-center gap-2 bg-ink-2 px-6 py-16 text-center"
            >
              <span className="font-sans text-[10px] font-bold tracking-[0.3em] text-blue uppercase">
                Available Online
              </span>
              <h2 className="font-display text-3xl tracking-wide text-cream uppercase">
                {cat.name}
              </h2>
              <p className="font-sans text-sm text-cream/40">{cat.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-4 border border-ink-3 bg-ink-2 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-display text-2xl tracking-wide text-cream uppercase">
              Want it now?
            </h3>
            <p className="mt-1 font-sans text-sm text-cream/50">
              Everything&rsquo;s stocked at the taproom bar — stop by during open hours.
            </p>
          </div>
          <Button href={site.address.mapsHref} external>
            Visit the Taproom
          </Button>
        </div>
      </section>
    </>
  );
}
