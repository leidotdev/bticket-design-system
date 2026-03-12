import { useEffect } from "react";
import { Icon } from "./Icon";

export function Modal({ open, onClose, title, children, footer, size = "md" }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose?.(); };
    if (open) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;
  const widths = { sm: "400px", md: "520px", lg: "680px", xl: "860px" };

  return (
    <div onClick={onClose} className="fixed inset-0 flex items-center justify-center z-50 p-4" style={{ backgroundColor: "var(--bg-overlay)" }}>
      <div onClick={e => e.stopPropagation()} className="w-full rounded-xl max-h-[85vh] flex flex-col shadow-lg font-sans"
        style={{ maxWidth: widths[size], backgroundColor: "var(--bg-card)", border: "1px solid var(--border-subtle)" }}>
        <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
          <h3 className="m-0 text-base font-semibold" style={{ color: "var(--text-primary)" }}>{title}</h3>
          <span className="cursor-pointer p-1 rounded" onClick={onClose}><Icon name="x" size={18} color="var(--text-muted)" /></span>
        </div>
        <div className="p-5 flex-1 overflow-y-auto text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{children}</div>
        {footer && <div className="px-5 py-3 flex justify-end gap-2" style={{ borderTop: "1px solid var(--border-subtle)" }}>{footer}</div>}
      </div>
    </div>
  );
}
