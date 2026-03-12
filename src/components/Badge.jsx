import { Icon } from "./Icon";
const configs = {
  default: { bg: "var(--bg-elevated)", text: "var(--text-primary)", border: "var(--border-default)" },
  primary: { bg: "var(--primary-light)", text: "var(--brand-primary)", border: "transparent" },
  success: { bg: "var(--primary-light)", text: "var(--brand-success)", border: "transparent" },
  danger:  { bg: "var(--danger-light)",  text: "var(--brand-danger)",  border: "transparent" },
  warning: { bg: "var(--warning-light)", text: "var(--brand-warning)", border: "transparent" },
  accent:  { bg: "var(--accent-light)",  text: "var(--brand-accent)",  border: "transparent" },
  info:    { bg: "var(--secondary-light)", text: "var(--brand-info)", border: "transparent" },
};
const sizeCls = { sm: "px-1.5 py-0 text-[10px]", md: "px-2.5 py-0.5 text-xs", lg: "px-3.5 py-1 text-sm" };

export function Badge({ children, variant = "default", size = "md", dot, removable, onRemove }) {
  const c = configs[variant];
  return (
    <span className={`inline-flex items-center gap-1 rounded-full font-medium whitespace-nowrap leading-relaxed font-sans ${sizeCls[size]}`}
      style={{ backgroundColor: c.bg, color: c.text, border: `1px solid ${c.border}` }}>
      {dot && <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: c.text }} />}
      {children}
      {removable && <span className="cursor-pointer opacity-70 flex ml-0.5" onClick={onRemove}><Icon name="x" size={12} color={c.text} /></span>}
    </span>
  );
}
