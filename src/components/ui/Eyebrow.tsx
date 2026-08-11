export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-[2px] w-8 bg-gold" />
      <span className="font-sans text-[11px] font-bold tracking-[0.3em] text-gold-dim uppercase">
        {children}
      </span>
    </div>
  );
}
