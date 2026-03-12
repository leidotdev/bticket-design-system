import { useState } from "react";
import { useTokens } from "../hooks/useTokens";
import { Icon } from "./Icon";

export function Alert({ title, children, variant = "info", dismissible, onDismiss }) {
  const t = useTokens();
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  const variants = {
    info:    { bg: t.colors.secondaryLight, border: t.colors.secondary, icon: "info",          color: t.colors.info },
    success: { bg: t.colors.primaryLight,   border: t.colors.primary,   icon: "checkCircle",   color: t.colors.success },
    warning: { bg: t.colors.warningLight,   border: t.colors.warning,   icon: "alertTriangle", color: t.colors.warning },
    danger:  { bg: t.colors.dangerLight,    border: t.colors.danger,    icon: "xCircle",       color: t.colors.danger },
  };
  const v = variants[variant];

  return (
    <div style={{
      display: "flex", gap: t.spacing[3], padding: t.spacing[4], borderRadius: t.radius.md,
      backgroundColor: v.bg, border: `1px solid ${v.border}`, fontFamily: t.typography.fontFamily,
    }}>
      <Icon name={v.icon} size={20} color={v.color} />
      <div style={{ flex: 1 }}>
        {title && <div style={{ fontWeight: t.typography.fontWeight.semibold, fontSize: t.typography.fontSize.base, color: t.colors.textPrimary, marginBottom: "2px" }}>{title}</div>}
        <div style={{ fontSize: t.typography.fontSize.sm, color: t.colors.textSecondary, lineHeight: 1.5 }}>{children}</div>
      </div>
      {dismissible && <span style={{ cursor: "pointer", flexShrink: 0 }} onClick={() => { setVisible(false); onDismiss && onDismiss(); }}><Icon name="x" size={16} color={t.colors.textMuted} /></span>}
    </div>
  );
}
