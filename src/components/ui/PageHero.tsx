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
    <section className="border-b border-ink-3 bg-ink-2">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
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
