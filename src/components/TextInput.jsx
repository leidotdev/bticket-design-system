import { useState } from "react";
import { useTokens } from "../hooks/useTokens";
import { Icon } from "./Icon";

export function TextInput({ placeholder = "Search... Ctrl+K", disabled, hasIcon = true, value, onChange, type = "text" }) {
  const t = useTokens();
  const [focused, setFocused] = useState(false);

  return (
    <div style={{
      display: "flex", alignItems: "center", gap: t.spacing[2], padding: "8px 12px",
      backgroundColor: disabled ? t.colors.bgDisabled : t.colors.bgInput,
      border: `1px solid ${focused ? t.colors.borderFocus : t.colors.borderDefault}`,
      borderRadius: t.radius.md, transition: `border-color ${t.transitions.fast}`,
      opacity: disabled ? 0.7 : 1,
    }}>
      {hasIcon && <Icon name="search" size={16} color={disabled ? t.colors.textDisabled : t.colors.textMuted} />}
      <input
        placeholder={placeholder} disabled={disabled} type={type} value={value} onChange={onChange}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{
          border: "none", outline: "none", background: "transparent",
          color: disabled ? t.colors.textDisabled : t.colors.textPrimary,
          fontSize: t.typography.fontSize.base, fontFamily: t.typography.fontFamily, width: "100%",
        }}
      />
    </div>
  );
}
