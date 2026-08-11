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
    <Link href="/" className={`flex items-center ${className}`}>
      {hasRealLogo ? (
        <Image
          src="/logo.png"
          alt="Crabtree Brewing Company"
          width={176}
          height={176}
          className="h-44 w-44 shrink-0"
          priority
        />
      ) : (
        <span
          className="relative flex h-44 w-44 shrink-0 items-center justify-center rounded-full border-4 border-blue bg-gold text-3xl font-black tracking-tight text-blue"
          role="img"
          aria-label="Crabtree Brewing Company"
        >
          CB
        </span>
      )}
    </Link>
  );
}
