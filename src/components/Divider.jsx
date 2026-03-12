export function Divider({ label }) {
  return (
    <div className="flex items-center gap-3 my-3">
      <div className="flex-1 h-px" style={{ backgroundColor: "var(--border-subtle)" }} />
      {label && <span className="text-xs whitespace-nowrap font-sans" style={{ color: "var(--text-muted)" }}>{label}</span>}
      <div className="flex-1 h-px" style={{ backgroundColor: "var(--border-subtle)" }} />
    </div>
  );
}
