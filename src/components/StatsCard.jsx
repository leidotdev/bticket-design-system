import { useTokens } from "../hooks/useTokens";

export function StatsCard({ title = "TOTAL INCOME", value = "$284,520", change = "+12.5%", changeLabel = "vs last month", icon = "$" }) {
  const t = useTokens();

  return (
    <div style={{
      backgroundColor: t.colors.bgCard, borderRadius: t.radius.lg, padding: t.spacing[5],
      border: `1px solid ${t.colors.borderSubtle}`, display: "flex", alignItems: "flex-start",
      justifyContent: "space-between", fontFamily: t.typography.fontFamily, minWidth: "220px", boxShadow: t.shadows.sm,
    }}>
      <div>
        <div style={{ fontSize: t.typography.fontSize.xs, color: t.colors.textMuted, fontWeight: t.typography.fontWeight.medium, letterSpacing: "0.5px", marginBottom: t.spacing[1] }}>{title}</div>
        <div style={{ fontSize: t.typography.fontSize["2xl"], color: t.colors.textPrimary, fontWeight: t.typography.fontWeight.bold, marginBottom: t.spacing[1] }}>{value}</div>
        <div style={{ fontSize: t.typography.fontSize.sm }}>
          <span style={{ color: change.startsWith("-") ? t.colors.danger : t.colors.success, fontWeight: t.typography.fontWeight.semibold }}>{change}</span>
          <span style={{ color: t.colors.textMuted, marginLeft: "4px" }}>{changeLabel}</span>
        </div>
      </div>
      <div style={{ width: "36px", height: "36px", borderRadius: t.radius.md, backgroundColor: t.colors.primaryLight, display: "flex", alignItems: "center", justifyContent: "center", color: t.colors.primary, fontWeight: t.typography.fontWeight.bold, fontSize: t.typography.fontSize.md }}>{icon}</div>
    </div>
  );
}
