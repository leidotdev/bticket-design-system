import { useTokens } from "../hooks/useTokens";
import { Icon } from "./Icon";

export function Badge({ children, variant = "default", size = "md", dot, removable, onRemove }) {
  const t = useTokens();
  const variants = {
    default: { bg: t.colors.bgElevated, text: t.colors.textPrimary, border: t.colors.borderDefault },
    primary: { bg: t.colors.primaryLight, text: t.colors.primary, border: "transparent" },
    success: { bg: t.colors.primaryLight, text: t.colors.success, border: "transparent" },
    danger:  { bg: t.colors.dangerLight, text: t.colors.danger, border: "transparent" },
    warning: { bg: t.colors.warningLight, text: t.colors.warning, border: "transparent" },
    accent:  { bg: t.colors.accentLight, text: t.colors.accent, border: "transparent" },
    info:    { bg: t.colors.secondaryLight, text: t.colors.info, border: "transparent" },
  };
  const v = variants[variant];
  const sizes = { sm: { p: "1px 6px", f: t.typography.fontSize.xs }, md: { p: "2px 10px", f: t.typography.fontSize.sm }, lg: { p: "4px 14px", f: t.typography.fontSize.base } };
  const s = sizes[size];

  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: "4px", padding: s.p, fontSize: s.f,
      fontWeight: t.typography.fontWeight.medium, fontFamily: t.typography.fontFamily,
      backgroundColor: v.bg, color: v.text, border: `1px solid ${v.border}`,
      borderRadius: t.radius.full, whiteSpace: "nowrap", lineHeight: 1.6,
    }}>
      {dot && <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: v.text, flexShrink: 0 }} />}
      {children}
      {removable && <span onClick={onRemove} style={{ cursor: "pointer", marginLeft: "2px", opacity: 0.7, display: "flex" }}><Icon name="x" size={12} color={v.text} /></span>}
    </span>
  );
}
