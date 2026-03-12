import { useTokens } from "../hooks/useTokens";
import { Icon } from "./Icon";

export function Modal({ open, onClose, title, children, footer, size = "md" }) {
  const t = useTokens();
  if (!open) return null;
  const widths = { sm: "400px", md: "520px", lg: "680px", xl: "860px" };

  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, backgroundColor: t.colors.bgOverlay, display: "flex",
      alignItems: "center", justifyContent: "center", zIndex: 9999, padding: t.spacing[4],
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        backgroundColor: t.colors.bgCard, borderRadius: t.radius.lg, width: "100%", maxWidth: widths[size],
        border: `1px solid ${t.colors.borderSubtle}`, boxShadow: t.shadows.lg,
        fontFamily: t.typography.fontFamily, maxHeight: "85vh", display: "flex", flexDirection: "column",
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderBottom: `1px solid ${t.colors.borderSubtle}` }}>
          <h3 style={{ margin: 0, fontSize: t.typography.fontSize.md, fontWeight: t.typography.fontWeight.semibold, color: t.colors.textPrimary }}>{title}</h3>
          <span style={{ cursor: "pointer", padding: "4px", borderRadius: t.radius.sm }} onClick={onClose}><Icon name="x" size={18} color={t.colors.textMuted} /></span>
        </div>
        <div style={{ padding: "20px", flex: 1, overflowY: "auto", fontSize: t.typography.fontSize.base, color: t.colors.textSecondary, lineHeight: 1.6 }}>{children}</div>
        {footer && <div style={{ padding: "12px 20px", borderTop: `1px solid ${t.colors.borderSubtle}`, display: "flex", justifyContent: "flex-end", gap: t.spacing[2] }}>{footer}</div>}
      </div>
    </div>
  );
}
