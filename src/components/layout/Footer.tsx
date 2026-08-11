import Link from "next/link";
import { site } from "@/lib/site-config";
import { formatHour } from "@/lib/hours";

export function Footer() {
  return (
    <footer className="border-t-4 border-gold bg-ink-2">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="font-display text-2xl tracking-wide text-cream uppercase">
              Crabtree
            </span>
            <p className="mt-3 max-w-xs font-sans text-sm text-cream/50">
              Greeley&rsquo;s original production brewery — proud to pour quality beer and
              genuine community since {site.established}.
            </p>
          </div>

          <div>
            <h3 className="font-sans text-[11px] font-bold tracking-[0.25em] text-gold-dim uppercase">
              Taproom
            </h3>
            <address className="mt-3 flex flex-col gap-1 font-sans text-sm text-cream/60 not-italic">
              <a href={site.address.mapsHref} className="hover:text-cream" target="_blank">
                {site.address.line1}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </a>
              <a href={site.phoneHref} className="mt-2 hover:text-cream">
                {site.phone}
              </a>
            </address>
          </div>

          <div>
            <h3 className="font-sans text-[11px] font-bold tracking-[0.25em] text-gold-dim uppercase">
              Hours
            </h3>
            <ul className="mt-3 flex flex-col gap-1 font-sans text-sm text-cream/60">
              {site.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-6">
                  <span>{h.day}</span>
                  <span>
                    {h.open === null
                      ? "Closed"
                      : `${formatHour(h.open)}–${formatHour(h.close)}`}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-[11px] font-bold tracking-[0.25em] text-gold-dim uppercase">
              Explore
            </h3>
            <ul className="mt-3 flex flex-col gap-2 font-sans text-sm text-cream/60">
              {[
                ["/beer", "Beer Menu"],
                ["/events", "Events"],
                ["/merch", "Merch"],
                ["/about", "Our Story"],
                ["/contact", "Contact"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-cream">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex gap-4">
              <a
                href={site.social.instagram}
                target="_blank"
                className="font-sans text-[11px] font-semibold tracking-[0.15em] text-cream/50 uppercase hover:text-gold-dim"
              >
                Instagram
              </a>
              <a
                href={site.social.untappd}
                target="_blank"
                className="font-sans text-[11px] font-semibold tracking-[0.15em] text-cream/50 uppercase hover:text-gold-dim"
              >
                Untappd
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-ink-3 pt-6 font-sans text-xs text-cream/30 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {site.name}. Est. {site.established}. Drink
            responsibly.
          </span>
          <span>Greeley, Colorado</span>
        </div>
      </div>
    </footer>
  );
}
