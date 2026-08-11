import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  external?: boolean;
  className?: string;
  /** Set when placing this button on a dark band (e.g. the blue-deep merch
   * banner) instead of the light paper background — swaps hover text to
   * vivid gold instead of the darkened gold-dim, which would be unreadable
   * against a dark surface. */
  onDark?: boolean;
};

export function Button({
  href,
  children,
  variant = "solid",
  external,
  className = "",
  onDark = false,
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 border-2 px-6 py-3 font-sans text-xs font-bold tracking-[0.15em] uppercase transition-colors";
  const hoverText = onDark ? "hover:text-gold" : "hover:text-gold-dim";
  const outlineText = onDark ? "text-ink border-ink/30" : "text-cream border-cream/30";
  const styles =
    variant === "solid"
      ? `border-gold bg-gold text-cream hover:bg-transparent ${hoverText}`
      : `${outlineText} hover:border-gold ${hoverText}`;

  const props = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Link href={href} className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </Link>
  );
}
