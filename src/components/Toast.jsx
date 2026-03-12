import { useState } from "react";
import { useTokens } from "../hooks/useTokens";
import { Icon } from "./Icon";

let toastId = 0;

export function ToastProvider({ children }) {
  const t = useTokens();
  const [toasts, setToasts] = useState([]);

  const addToast = (msg, variant = "default", duration = 3000) => {
    const id = ++toastId;
    setToasts(prev => [...prev, { id, msg, variant }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), duration);
  };

  const variantStyles = {
    default: { bg: t.colors.bgCard, border: t.colors.borderDefault, icon: null },
    success: { bg: t.colors.bgCard, border: t.colors.primary, icon: "checkCircle" },
    danger:  { bg: t.colors.bgCard, border: t.colors.danger, icon: "xCircle" },
    warning: { bg: t.colors.bgCard, border: t.colors.warning, icon: "alertTriangle" },
  };

  return (
    <>
      {typeof children === "function" ? children(addToast) : children}
      <div style={{ position: "fixed", bottom: "20px", right: "20px", display: "flex", flexDirection: "column-reverse", gap: "8px", zIndex: 10000 }}>
        {toasts.map(toast => {
          const vs = variantStyles[toast.variant] || variantStyles.default;
          return (
            <div key={toast.id} style={{
              padding: "12px 16px", backgroundColor: vs.bg, borderRadius: t.radius.md,
              border: `1px solid ${vs.border}`, boxShadow: t.shadows.md, minWidth: "280px",
              display: "flex", alignItems: "center", gap: "10px", fontFamily: t.typography.fontFamily,
              fontSize: t.typography.fontSize.sm, color: t.colors.textPrimary,
              animation: "slideIn 0.25s ease",
            }}>
              {vs.icon && <Icon name={vs.icon} size={18} color={vs.border} />}
              {toast.msg}
            </div>
          );
        })}
      </div>
      <style>{`@keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }`}</style>
    </>
  );
}
