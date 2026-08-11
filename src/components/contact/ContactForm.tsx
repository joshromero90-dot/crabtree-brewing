"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site-config";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const message = form.get("message");

    const subject = encodeURIComponent(`Message from ${name} via crabtreebrewing.com`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label className="font-sans text-[11px] font-bold tracking-[0.15em] text-cream/50 uppercase">
          Name
        </label>
        <input
          name="name"
          required
          className="mt-2 w-full border border-ink-3 bg-ink-2 px-4 py-3 font-sans text-sm text-cream outline-none focus:border-gold"
        />
      </div>
      <div>
        <label className="font-sans text-[11px] font-bold tracking-[0.15em] text-cream/50 uppercase">
          Email
        </label>
        <input
          name="email"
          type="email"
          required
          className="mt-2 w-full border border-ink-3 bg-ink-2 px-4 py-3 font-sans text-sm text-cream outline-none focus:border-gold"
        />
      </div>
      <div>
        <label className="font-sans text-[11px] font-bold tracking-[0.15em] text-cream/50 uppercase">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={5}
          className="mt-2 w-full border border-ink-3 bg-ink-2 px-4 py-3 font-sans text-sm text-cream outline-none focus:border-gold"
        />
      </div>
      <button
        type="submit"
        className="w-fit border-2 border-gold bg-gold px-6 py-3 font-sans text-xs font-bold tracking-[0.15em] text-ink uppercase transition-colors hover:bg-transparent hover:text-gold"
      >
        Send Message
      </button>
      {sent && (
        <p className="font-sans text-sm text-gold">
          Opening your email client to finish sending — thanks!
        </p>
      )}
      <p className="font-sans text-xs text-cream/30">
        This form opens your email client for now (no backend yet). Swap in a real form
        handler (Formspree, Resend, etc.) whenever you&rsquo;re ready.
      </p>
    </form>
  );
}
