export function Progress({ value = 0, variant = "primary", size = "md", showLabel }) {
  const colors = { primary: "var(--brand-primary)", danger: "var(--brand-danger)", warning: "var(--brand-warning)", secondary: "var(--brand-secondary)" };
  const heights = { sm: "4px", md: "8px", lg: "12px" };
  const clamped = Math.min(100, Math.max(0, value));
  return (
    <div className="flex items-center gap-2 w-full font-sans">
      <div className="flex-1 rounded-full overflow-hidden" style={{ height: heights[size], backgroundColor: "var(--bg-elevated)" }}>
        <div className="h-full rounded-full transition-all duration-300" style={{ width: `${clamped}%`, backgroundColor: colors[variant] }} />
      </div>
      {showLabel && <span className="text-xs min-w-[36px] text-right" style={{ color: "var(--text-secondary)" }}>{clamped}%</span>}
    </div>
  );
}
