export function StatsCard({ title = "TOTAL INCOME", value = "$284,520", change = "+12.5%", changeLabel = "vs last month", icon = "$" }) {
  return (
    <div className="rounded-xl p-5 flex items-start justify-between min-w-[220px] shadow-sm font-sans"
      style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-subtle)" }}>
      <div>
        <div className="text-[10px] font-medium tracking-wide mb-1" style={{ color: "var(--text-muted)" }}>{title}</div>
        <div className="text-3xl font-bold mb-1" style={{ color: "var(--text-primary)" }}>{value}</div>
        <div className="text-xs">
          <span className="font-semibold" style={{ color: change.startsWith("-") ? "var(--brand-danger)" : "var(--brand-success)" }}>{change}</span>
          <span className="ml-1" style={{ color: "var(--text-muted)" }}>{changeLabel}</span>
        </div>
      </div>
      <div className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-base"
        style={{ backgroundColor: "var(--primary-light)", color: "var(--brand-primary)" }}>{icon}</div>
    </div>
  );
}
