import { useTokens } from "../hooks/useTokens";

export function Avatar({ name, src, size = "md", status }) {
  const t = useTokens();
  const sizes = { xs: 24, sm: 32, md: 40, lg: 56, xl: 72 };
  const s = sizes[size];
  const initials = name ? name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase() : "?";
  const bgColors = [t.colors.primary, t.colors.secondary, t.colors.accent, t.colors.warning, t.colors.danger];
  const bgColor = bgColors[name ? name.charCodeAt(0) % bgColors.length : 0];
  const statusColors = { online: t.colors.success, offline: t.colors.textMuted, busy: t.colors.danger, away: t.colors.warning };

  return (
    <div style={{ position: "relative", width: s, height: s, flexShrink: 0 }}>
      {src ? (
        <img src={src} alt={name} style={{ width: s, height: s, borderRadius: t.radius.full, objectFit: "cover" }} />
      ) : (
        <div style={{ width: s, height: s, borderRadius: t.radius.full, backgroundColor: bgColor, display: "flex", alignItems: "center", justifyContent: "center", color: t.colors.white, fontSize: s * 0.38, fontWeight: t.typography.fontWeight.semibold, fontFamily: t.typography.fontFamily }}>{initials}</div>
      )}
      {status && <div style={{ position: "absolute", bottom: 0, right: 0, width: s * 0.3, height: s * 0.3, borderRadius: "50%", backgroundColor: statusColors[status] || t.colors.textMuted, border: `2px solid ${t.colors.bgCard}` }} />}
    </div>
  );
}
