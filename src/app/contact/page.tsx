import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact | Crabtree Brewing Company",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Contact"
        subtitle="Have a question? Give us a call or send us an email — we'll get back to you."
      />

      <section className="mx-auto max-w-2xl px-6 py-16">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="font-sans text-[11px] font-bold tracking-[0.25em] text-gold-dim uppercase">
              Phone
            </h2>
            <a
              href={site.phoneHref}
              className="mt-2 block font-display text-2xl tracking-wide text-cream hover:text-gold-dim"
            >
              {site.phone}
            </a>
          </div>
          <div>
            <h2 className="font-sans text-[11px] font-bold tracking-[0.25em] text-gold-dim uppercase">
              Email
            </h2>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 block font-display text-2xl tracking-wide text-cream hover:text-gold-dim"
            >
              {site.email}
            </a>
          </div>
          <div>
            <h2 className="font-sans text-[11px] font-bold tracking-[0.25em] text-gold-dim uppercase">
              Taproom
            </h2>
            <address className="mt-2 font-sans text-base text-cream/70 not-italic">
              {site.address.line1}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </address>
          </div>
          <div className="border-t border-ink-3 pt-8">
            <h2 className="font-sans text-[11px] font-bold tracking-[0.25em] text-gold-dim uppercase">
              Parties &amp; Events
            </h2>
            <p className="mt-2 max-w-sm font-sans text-sm text-cream/60">
              Looking to book a special event at the brewery? Email us and a staff member
              will be in touch soon.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
