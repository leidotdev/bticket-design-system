import { useState } from "react";
import { useTokens } from "../hooks/useTokens";

export function NavItem({ label, active = false, badge, icon = "📊" }) {
  const t = useTokens();
  const [hovered, setHovered] = useState(false);

  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{
      display: "flex", alignItems: "center", gap: t.spacing[3], padding: "10px 14px", borderRadius: t.radius.md,
      backgroundColor: active ? t.colors.primary : hovered ? t.colors.bgHover : "transparent",
      color: active ? t.colors.white : t.colors.textSecondary, fontFamily: t.typography.fontFamily,
      fontSize: t.typography.fontSize.base, fontWeight: active ? t.typography.fontWeight.semibold : t.typography.fontWeight.regular,
      cursor: "pointer", transition: `all ${t.transitions.fast}`,
    }}>
      <span style={{ fontSize: "16px" }}>{icon}</span><span style={{ flex: 1 }}>{label}</span>
      {badge && <span style={{ backgroundColor: t.colors.badge, color: t.colors.white, fontSize: t.typography.fontSize.xs, fontWeight: t.typography.fontWeight.bold, padding: "2px 6px", borderRadius: t.radius.full, minWidth: "20px", textAlign: "center" }}>{badge}</span>}
    </div>
  );
}
