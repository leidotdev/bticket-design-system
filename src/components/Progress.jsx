import { useTokens } from "../hooks/useTokens";

export function Progress({ value = 0, variant = "primary", size = "md", showLabel = false }) {
  const t = useTokens();
  const colors = { primary: t.colors.primary, danger: t.colors.danger, warning: t.colors.warning, accent: t.colors.accent, secondary: t.colors.secondary };
  const heights = { sm: "4px", md: "8px", lg: "12px" };
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div style={{ display: "flex", alignItems: "center", gap: t.spacing[2], fontFamily: t.typography.fontFamily, width: "100%" }}>
      <div style={{ flex: 1, height: heights[size], backgroundColor: t.colors.bgElevated, borderRadius: t.radius.full, overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${clamped}%`, backgroundColor: colors[variant], borderRadius: t.radius.full, transition: `width ${t.transitions.normal}` }} />
      </div>
      {showLabel && <span style={{ fontSize: t.typography.fontSize.sm, color: t.colors.textSecondary, minWidth: "36px", textAlign: "right" }}>{clamped}%</span>}
    </div>
  );
}
