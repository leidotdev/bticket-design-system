import { useState } from "react";
import { useTokens } from "../hooks/useTokens";

export function Textarea({ placeholder = "Type here...", disabled, rows = 3, value, onChange }) {
  const t = useTokens();
  const [focused, setFocused] = useState(false);

  return (
    <textarea
      placeholder={placeholder} disabled={disabled} rows={rows} value={value} onChange={onChange}
      onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
      style={{
        width: "100%", padding: "10px 12px",
        backgroundColor: disabled ? t.colors.bgDisabled : t.colors.bgInput,
        border: `1px solid ${focused ? t.colors.borderFocus : t.colors.borderDefault}`,
        borderRadius: t.radius.md,
        color: disabled ? t.colors.textDisabled : t.colors.textPrimary,
        fontSize: t.typography.fontSize.base, fontFamily: t.typography.fontFamily,
        outline: "none", resize: "vertical", transition: `border-color ${t.transitions.fast}`,
        opacity: disabled ? 0.7 : 1, lineHeight: 1.5, boxSizing: "border-box",
      }}
    />
  );
}
