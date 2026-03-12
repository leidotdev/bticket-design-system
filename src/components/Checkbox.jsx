import { useState } from "react";
import { useTokens } from "../hooks/useTokens";
import { Icon } from "./Icon";

export function Checkbox({ checked: init = false, indeterminate = false, label, onChange }) {
  const t = useTokens();
  const [checked, setChecked] = useState(init);
  const toggle = () => { setChecked(!checked); onChange && onChange(!checked); };

  return (
    <label style={{ display: "flex", alignItems: "center", gap: t.spacing[2], cursor: "pointer", color: t.colors.textPrimary, fontSize: t.typography.fontSize.base, fontFamily: t.typography.fontFamily }}>
      <div onClick={toggle} style={{
        width: "20px", height: "20px", borderRadius: t.radius.sm,
        border: `2px solid ${checked || indeterminate ? t.colors.primary : t.colors.borderDefault}`,
        backgroundColor: checked || indeterminate ? t.colors.primary : t.colors.transparent,
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: `all ${t.transitions.fast}`, flexShrink: 0,
      }}>
        {checked && <Icon name="check" size={12} color="white" />}
        {indeterminate && !checked && <div style={{ width: "10px", height: "2px", backgroundColor: "white", borderRadius: "1px" }} />}
      </div>
      {label && <span>{label}</span>}
    </label>
  );
}
