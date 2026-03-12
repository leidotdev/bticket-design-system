import { useState } from "react";
import { Icon } from "./Icon";

const variantStyles = {
  primary:   { bg: "var(--brand-primary)", bgHover: "var(--brand-primary-hover)", text: "text-white" },
  secondary: { bg: "var(--brand-secondary)", bgHover: "var(--brand-secondary-hover)", text: "text-white" },
  danger:    { bg: "var(--brand-danger)", bgHover: "var(--brand-danger-hover)", text: "text-white" },
  warning:   { bg: "var(--brand-warning)", bgHover: "var(--brand-warning-hover)", text: "text-white" },
  accent:    { bg: "var(--brand-accent)", bgHover: "var(--brand-accent-hover)", text: "text-white" },
  outline:   { bg: "transparent", bgHover: "var(--bg-hover)", text: "" },
  ghost:     { bg: "transparent", bgHover: "var(--bg-hover)", text: "" },
};

const sizeStyles = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

export function Button({ children, variant = "primary", size = "md", icon, iconRight, disabled, onClick, className = "" }) {
  const [hovered, setHovered] = useState(false);
  const v = variantStyles[variant];
  const isOutline = variant === "outline";
  const isGhost = variant === "ghost";

  return (
    <button
      onClick={onClick} disabled={disabled}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      className={`inline-flex items-center gap-1.5 font-medium rounded-lg transition-all duration-150 whitespace-nowrap leading-relaxed font-sans ${sizeStyles[size]} ${v.text} ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ${className}`}
      style={{
        backgroundColor: disabled ? "var(--bg-disabled)" : hovered ? v.bgHover : v.bg,
        color: (isOutline || isGhost) ? (isGhost ? "var(--text-secondary)" : "var(--text-primary)") : undefined,
        border: isOutline ? "1px solid var(--border-default)" : "none",
      }}
    >
      {icon && <Icon name={typeof icon === "string" ? icon : "search"} size={14} />}
      {children}
      {iconRight && <Icon name={typeof iconRight === "string" ? iconRight : "chevronRight"} size={14} />}
    </button>
  );
}
