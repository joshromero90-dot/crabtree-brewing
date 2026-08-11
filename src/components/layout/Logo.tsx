import Image from "next/image";
import Link from "next/link";
import fs from "node:fs";
import path from "node:path";

// Drop your real logo file at `public/logo.png` (square, transparent bg
// works best) and this automatically swaps from the placeholder badge to
// the real mark — no code changes needed.
const hasRealLogo = fs.existsSync(path.join(process.cwd(), "public", "logo.png"));

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`}>
      {hasRealLogo ? (
        <Image
          src="/logo.png"
          alt={`${"Crabtree Brewing Company"} logo`}
          width={44}
          height={44}
          className="h-11 w-11 shrink-0"
          priority
        />
      ) : (
        <span
          className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-blue bg-gold text-[10px] font-black tracking-tight text-blue"
          aria-hidden
        >
          CB
        </span>
      )}
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg tracking-wide text-cream uppercase">
          Crabtree
        </span>
        <span className="font-sans text-[9px] font-semibold tracking-[0.3em] text-gold uppercase">
          Brewing Co.
        </span>
      </span>
    </Link>
  );
}
