import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact | Crabtree Brewing Company",
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Get In Touch" title="Contact" />

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-16 lg:grid-cols-2">
        <ContactForm />

        <div className="flex flex-col gap-8">
          <div>
            <h2 className="font-sans text-[11px] font-bold tracking-[0.25em] text-gold-dim uppercase">
              Phone
            </h2>
            <a href={site.phoneHref} className="mt-2 block font-display text-2xl tracking-wide text-cream hover:text-gold-dim">
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
        </div>
      </section>
    </>
  );
}
