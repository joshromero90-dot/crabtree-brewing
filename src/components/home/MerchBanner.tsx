import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site-config";

export function MerchBanner() {
  return (
    <section className="border-b-4 border-gold bg-blue-deep">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="font-sans text-[11px] font-bold tracking-[0.3em] text-ink/60 uppercase">
            Shirts · Hats · Glassware
          </span>
          <h2 className="mt-3 font-display text-3xl tracking-wide text-ink uppercase sm:text-4xl">
            Take the Taproom Home
          </h2>
        </div>
        <Button href={site.shopUrl} onDark external>
          Shop Merch
        </Button>
      </div>
    </section>
  );
}
