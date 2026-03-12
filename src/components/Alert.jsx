import { useState } from "react";
import { Icon } from "./Icon";

const configs = {
  info:    { bg: "var(--secondary-light)", border: "var(--brand-secondary)", icon: "info",          color: "var(--brand-info)" },
  success: { bg: "var(--primary-light)",   border: "var(--brand-primary)",   icon: "checkCircle",   color: "var(--brand-success)" },
  warning: { bg: "var(--warning-light)",   border: "var(--brand-warning)",   icon: "alertTriangle", color: "var(--brand-warning)" },
  danger:  { bg: "var(--danger-light)",    border: "var(--brand-danger)",    icon: "xCircle",       color: "var(--brand-danger)" },
};

export function Alert({ title, children, variant = "info", dismissible, onDismiss }) {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  const c = configs[variant];
  return (
    <div className="flex gap-3 p-4 rounded-lg font-sans" style={{ backgroundColor: c.bg, border: `1px solid ${c.border}` }}>
      <Icon name={c.icon} size={20} color={c.color} />
      <div className="flex-1">
        {title && <div className="font-semibold text-sm mb-0.5" style={{ color: "var(--text-primary)" }}>{title}</div>}
        <div className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{children}</div>
      </div>
      {dismissible && <span className="cursor-pointer shrink-0" onClick={() => { setVisible(false); onDismiss?.(); }}><Icon name="x" size={16} color="var(--text-muted)" /></span>}
    </div>
  );
}
