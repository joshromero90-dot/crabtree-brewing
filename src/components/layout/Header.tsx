import Link from "next/link";
import { Logo } from "./Logo";
import { StatusTicker } from "./StatusTicker";
import { MobileNav } from "./MobileNav";

const NAV = [
  { href: "/beer", label: "Beer" },
  { href: "/taproom", label: "Taproom" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
  { href: "/merch", label: "Merch" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50">
      <StatusTicker />
      <div className="border-b border-ink-3 bg-ink/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <Logo />
          <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-sans text-xs font-semibold tracking-[0.18em] text-cream/60 uppercase transition-colors hover:text-gold-dim"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/taproom"
            className="hidden shrink-0 border-2 border-gold bg-gold px-4 py-2 font-sans text-xs font-bold tracking-[0.15em] text-cream uppercase transition-colors hover:bg-transparent hover:text-gold-dim lg:block"
          >
            Visit Taproom
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
