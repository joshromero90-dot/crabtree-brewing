import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { site } from "@/lib/site-config";

// Real taproom/taphouse photos pulled from crabtreebrewing.com on 2026-08-10.
const GALLERY_PHOTOS = [
  { src: "/gallery/taphouse-01.jpg", alt: "Guests holding Crabtree beer and merch in the taphouse" },
  { src: "/gallery/taproom-01.jpg", alt: "Crabtree Dearfield Strawberry Blonde Ale cans" },
  { src: "/gallery/taphouse-02.jpg", alt: "Inside the Crabtree taphouse" },
  { src: "/gallery/taproom-02.jpg", alt: "Crabtree Brewing taproom" },
  { src: "/gallery/taphouse-03.jpg", alt: "Crabtree taphouse seating area" },
  { src: "/gallery/taproom-03.jpg", alt: "Crabtree Brewing taproom" },
  { src: "/gallery/taphouse-04.jpg", alt: "Crabtree taphouse interior" },
  { src: "/gallery/taproom-04.jpg", alt: "Crabtree Brewing taproom" },
  { src: "/gallery/taphouse-05.jpg", alt: "Crabtree taphouse bar" },
  { src: "/gallery/taphouse-06.jpg", alt: "Crabtree taphouse" },
];

export const metadata: Metadata = {
  title: "Our Story | Crabtree Brewing Company",
};

const TIMELINE = [
  {
    year: "2003",
    title: "A trip to the homebrew shop",
    text: "Jeff and his wife, Stephanie, trek to the nearest homebrew shop in the Denver area for a new hobby: brewing beer at home. Jeff's studying business at UNC, and brewing starts finding its way into every school project.",
  },
  {
    year: "2004",
    title: "“Honey, I want to open a brewery.”",
    text: "Jeff's entrepreneurial spirit blooms. A brewpub in town is closing, and the Crabtrees snap up its equipment for a steal — with no space to put it yet, it all goes into the garage.",
  },
  {
    year: "2005",
    title: "Jeff graduates UNC",
    text: "Jeff finishes his degree. Two months later, the first brewery site is chosen and the equipment finally moves out of the garage.",
  },
  {
    year: "2006",
    title: "Doors open",
    text: "Crabtree opens its doors for the first time on May 5, 2006 — just two years after those seven magic words — as Greeley's first production brewery.",
  },
  {
    year: "2009",
    title: "Jeff quits the cubicle",
    text: "After years of running the brewery alongside a full-time corporate job, Jeff finally quits the cubicle for good and starts fully living the brewer's dream.",
  },
  {
    year: "Today",
    title: "Greeley's destination brewery",
    text: `Two decades in, Crabtree is still pouring at ${site.address.line1} — seasonal beers, special releases, and an endless supply of great people.`,
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
          In September 2003, Jeff and his wife, Stephanie, trekked to the nearest homebrew shop
          in the Denver area to buy what they needed to start a new hobby of brewing beer at
          home. Jeff was studying business at UNC, and brewing quickly found its way into all of
          his school projects — business ideas for a brewery and beer-making concepts started
          popping up in each assignment.
        </p>
        <p className="mt-6 font-sans text-lg leading-relaxed text-cream/70">
          His entrepreneurial spirit bloomed in June 2004, when Jeff said the seven most magical
          words a man can ever offer his wife: &ldquo;Honey, I want to open a brewery.&rdquo; A
          brewpub in town was closing its doors, and even after the auction, some of the
          equipment was still there for the taking. Jeff and Stephanie jumped on it for a steal —
          they just didn&rsquo;t have a space for a brewery yet, so it all went into the garage
          while Jeff finished his degree and hunted for a location.
        </p>
        <p className="mt-6 font-sans text-lg leading-relaxed text-cream/70">
          In December 2005, Jeff graduated from UNC. Two months later, the first brewery site
          was chosen and the equipment finally moved out of the garage. Crabtree opened its
          doors for the first time on May 5, 2006 — just two years after Jeff first said those
          seven words. He kept working his full-time, benefit-paying corporate job right
          alongside running the brewery, until 2009, when he was finally able to quit the
          cubicle. He&rsquo;s been fully living the brewer&rsquo;s dream ever since.
        </p>
        <p className="mt-6 font-sans text-sm text-cream/40">
          This story is adapted from Stephanie Crabtree&rsquo;s blog,{" "}
          <em>The Hobbyless Brewer&rsquo;s Wife</em> — for a much more passionate telling from
          her side of it, that&rsquo;s the place to go.
        </p>

        <div className="mt-10 overflow-hidden border-2 border-ink-3">
          <video
            src="/video/crabtree-slideshow.mp4"
            controls
            muted
            loop
            playsInline
            preload="metadata"
            className="block w-full"
          >
            Your browser doesn&rsquo;t support embedded video —{" "}
            <a href="/video/crabtree-slideshow.mp4" className="underline">
              download it here
            </a>
            .
          </video>
        </div>
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
            Pulled straight from Crabtree&rsquo;s own &ldquo;Our Story&rdquo; page. Got an
            update or a correction? Swap it in at{" "}
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
            From the taphouse — pulled from crabtreebrewing.com.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {GALLERY_PHOTOS.map((photo) => (
              <div
                key={photo.src}
                className="relative aspect-square overflow-hidden border border-ink-3 bg-ink-2"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
