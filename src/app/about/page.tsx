import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Our Story | Crabtree Brewing Company",
};

const TIMELINE = [
  {
    year: "2003",
    title: "A trip to the homebrew shop",
    text: "Jeff and Stephanie Crabtree drive to a homebrew shop in Denver to pick up gear for a new hobby: brewing beer at home.",
  },
  {
    year: "2004",
    title: "“Honey, I want to open a brewery.”",
    text: "Jeff decides the hobby should become a business. The Crabtrees buy equipment from a closing brewpub to get started.",
  },
  {
    year: "2005",
    title: "Jeff graduates UNC",
    text: "Jeff finishes his business degree at the University of Northern Colorado, right in Greeley — the city that would become home to the brewery.",
  },
  {
    year: "2006",
    title: "Doors open",
    text: "After moving the equipment into a permanent facility that February, Crabtree Brewing Company opens for the first time on May 5, 2006 — Greeley's first production brewery.",
  },
  {
    year: "2009",
    title: "Jeff goes full-time",
    text: "Jeff leaves his corporate job to run Crabtree full time as the brewery grows.",
  },
  {
    year: "Today",
    title: "Greeley's original taproom",
    text: `Two decades in, Crabtree is still pouring at ${site.address.line1} — 20+ beers on tap, a taphouse built for the neighborhood.`,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={`Est. ${site.established}`}
        title="Our Story"
        subtitle="Two homebrewers, a hobby that got out of hand, and Greeley's first production brewery."
      />

      <section className="mx-auto max-w-3xl px-6 py-16">
        <p className="font-sans text-lg leading-relaxed text-cream/70">
          Crabtree Brewing Company started the way a lot of good breweries do: as a hobby that
          went too far. In September 2003, Jeff and Stephanie Crabtree drove to a homebrew shop
          in Denver — the closest one they could find — to pick up everything they needed to
          start brewing beer at home. Less than a year later, Jeff turned to Stephanie with the
          idea that would define the next two decades: &ldquo;Honey, I want to open a
          brewery.&rdquo;
        </p>
        <p className="mt-6 font-sans text-lg leading-relaxed text-cream/70">
          They bought equipment from a brewpub that was closing down and spent the next two years
          turning the idea into a real business — while Jeff finished his business degree at the
          University of Northern Colorado, right there in Greeley. The equipment moved into a
          permanent facility in February 2006, and on May 5, 2006, Crabtree Brewing Company
          opened its doors as Greeley&rsquo;s first production brewery. By 2009, the brewery had
          grown enough that Jeff left his corporate job behind to run Crabtree full time.
        </p>
        <p className="mt-6 font-sans text-lg leading-relaxed text-cream/70">
          Since then, Crabtree has grown into the taphouse Greeley knows today — 20+ beers on
          tap, a menu that ranges from crushable blondes to seasonal stouts, and a taproom built
          for regulars. Come for the beer, stay for the community.
        </p>
      </section>

      <section className="border-t border-ink-3 bg-ink-2">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="font-display text-3xl tracking-wide text-cream uppercase">Timeline</h2>
          <ol className="mt-8 flex flex-col divide-y divide-ink-3 border-t border-b border-ink-3">
            {TIMELINE.map((item) => (
              <li key={item.year} className="grid gap-2 py-6 sm:grid-cols-[100px_1fr] sm:gap-8">
                <span className="font-display text-2xl tracking-wide text-gold-dim uppercase">
                  {item.year}
                </span>
                <div>
                  <h3 className="font-sans text-sm font-bold tracking-[0.05em] text-cream uppercase">
                    {item.title}
                  </h3>
                  <p className="mt-1 font-sans text-sm text-cream/50">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-8 font-sans text-xs text-cream/30">
            Assembled from Crabtree&rsquo;s own &ldquo;Our Story&rdquo; page plus BizWest and UNC
            alumni magazine coverage. If you&rsquo;ve got the fuller version — or corrections —
            swap it in at{" "}
            <code className="text-cream/50">src/app/about/page.tsx</code>.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="font-display text-3xl tracking-wide text-cream uppercase">
            Photo Gallery
          </h2>
          <p className="mt-2 font-sans text-sm text-cream/40">
            Placeholder tiles — drop real taproom photos into{" "}
            <code className="text-cream/50">public/gallery/</code> and swap them in here.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {["Taproom bar", "Brewhouse", "Pouring a flight", "Patio", "Can release", "Trivia night crowd"].map(
              (label, i) => (
                <div
                  key={label}
                  className="flex aspect-square items-center justify-center border border-ink-3 bg-ink"
                  style={{
                    backgroundImage:
                      i % 2 === 0
                        ? "radial-gradient(circle at 30% 30%, rgba(243,181,21,0.08), transparent 60%)"
                        : "radial-gradient(circle at 70% 70%, rgba(28,107,160,0.12), transparent 60%)",
                  }}
                >
                  <span className="font-sans text-[11px] font-semibold tracking-[0.15em] text-cream/25 uppercase">
                    {label}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      </section>
    </>
  );
}
