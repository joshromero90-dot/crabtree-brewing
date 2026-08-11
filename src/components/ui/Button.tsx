import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  external?: boolean;
  className?: string;
};

export function Button({ href, children, variant = "solid", external, className = "" }: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 border-2 px-6 py-3 font-sans text-xs font-bold tracking-[0.15em] uppercase transition-colors";
  const styles =
    variant === "solid"
      ? "border-gold bg-gold text-ink hover:bg-transparent hover:text-gold"
      : "border-cream/30 text-cream hover:border-gold hover:text-gold";

  const props = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Link href={href} className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </Link>
  );
}
