import Image from "next/image";
import { Eyebrow } from "./Eyebrow";

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-ink-3 bg-ink-2">
      {/* Signature brand-mark watermark, mirrored into the empty space on
          the right since PageHero content is left-aligned (the homepage
          Hero keeps its own copy on the left). */}
      <div
        className="pointer-events-none absolute top-1/2 -right-24 h-[320px] w-[320px] -translate-y-1/2 opacity-[0.14] sm:-right-32 sm:h-[420px] sm:w-[420px] lg:-right-40 lg:h-[520px] lg:w-[520px]"
        aria-hidden
      >
        <Image src="/logo.png" alt="" fill className="object-contain" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 font-display text-5xl tracking-wide text-cream uppercase sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-balance font-sans text-base text-cream/55 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
