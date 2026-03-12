import { useState } from "react";
import { useTokens } from "../hooks/useTokens";
import { Icon } from "./Icon";

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  disabled,
  onClick,
  style: extraStyle,
}) {
  const t = useTokens();
  const [hovered, setHovered] = useState(false);

  const variants = {
    primary:   { bg: t.colors.primary,     bgH: t.colors.primaryHover,   text: t.colors.white, border: "none" },
    secondary: { bg: t.colors.secondary,   bgH: t.colors.secondaryHover, text: t.colors.white, border: "none" },
    danger:    { bg: t.colors.danger,      bgH: t.colors.dangerHover,    text: t.colors.white, border: "none" },
    warning:   { bg: t.colors.warning,     bgH: t.colors.warningHover,   text: t.colors.white, border: "none" },
    accent:    { bg: t.colors.accent,      bgH: t.colors.accentHover,    text: t.colors.white, border: "none" },
    outline:   { bg: t.colors.transparent, bgH: t.colors.bgHover,        text: t.colors.textPrimary, border: `1px solid ${t.colors.borderDefault}` },
    ghost:     { bg: t.colors.transparent, bgH: t.colors.bgHover,        text: t.colors.textSecondary, border: "none" },
  };

  const sizes = {
    sm: { p: "6px 12px",  f: t.typography.fontSize.sm },
    md: { p: "8px 16px",  f: t.typography.fontSize.base },
    lg: { p: "12px 24px", f: t.typography.fontSize.md },
  };

  const v = variants[variant];
  const s = sizes[size];

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: "6px",
        padding: s.p, fontSize: s.f,
        fontWeight: t.typography.fontWeight.medium,
        fontFamily: t.typography.fontFamily,
        color: disabled ? t.colors.textDisabled : v.text,
        backgroundColor: disabled ? t.colors.bgDisabled : hovered ? v.bgH : v.bg,
        border: v.border, borderRadius: t.radius.md,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
        transition: `all ${t.transitions.fast}`,
        whiteSpace: "nowrap", lineHeight: 1.4,
        ...extraStyle,
      }}
    >
      {icon && <Icon name={typeof icon === "string" ? icon : "search"} size={14} />}
      {children}
      {iconRight && <Icon name={typeof iconRight === "string" ? iconRight : "chevronRight"} size={14} />}
    </button>
  );
}
