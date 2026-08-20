"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const STORAGE_KEY = "crabtree-21plus-verified";

export function AgeGate() {
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === "true") {
      setVerified(true);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = verified ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [verified]);

  if (verified) return null;

  function handleYes() {
    localStorage.setItem(STORAGE_KEY, "true");
    setVerified(true);
  }

  function handleNo() {
    window.location.href = "https://www.responsibility.org/";
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-ink px-6">
      <div className="flex w-full max-w-sm flex-col items-center text-center">
        <Image
          src="/logo.png"
          alt="Crabtree Brewing Company"
          width={120}
          height={120}
          className="h-28 w-28"
          priority
        />
        <h1 className="mt-6 font-display text-3xl tracking-wide text-cream uppercase">
          Are You 21 or Older?
        </h1>
        <p className="mt-3 font-sans text-sm text-cream/60">
          You must be of legal drinking age to enter this site.
        </p>
        <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row">
          <button
            onClick={handleYes}
            className="flex-1 border-2 border-gold bg-gold px-6 py-3 font-sans text-xs font-bold tracking-[0.15em] text-cream uppercase transition-colors hover:bg-transparent hover:text-gold-dim"
          >
            Yes, I&rsquo;m 21+
          </button>
          <button
            onClick={handleNo}
            className="flex-1 border-2 border-cream/30 px-6 py-3 font-sans text-xs font-bold tracking-[0.15em] text-cream uppercase transition-colors hover:border-gold hover:text-gold-dim"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
