import { useState } from "react";
import { Icon } from "./Icon";

export function Checkbox({ checked: init = false, indeterminate = false, label, onChange }) {
  const [checked, setChecked] = useState(init);
  const toggle = () => { setChecked(!checked); onChange?.(!checked); };
  return (
    <label className="flex items-center gap-2 cursor-pointer text-sm font-sans" style={{ color: "var(--text-primary)" }}>
      <div onClick={toggle} className="w-5 h-5 rounded flex items-center justify-center transition-all duration-150 shrink-0"
        style={{ border: `2px solid ${checked || indeterminate ? "var(--brand-primary)" : "var(--border-default)"}`, backgroundColor: checked || indeterminate ? "var(--brand-primary)" : "transparent" }}>
        {checked && <Icon name="check" size={12} color="white" />}
        {indeterminate && !checked && <div className="w-2.5 h-0.5 bg-white rounded-sm" />}
      </div>
      {label && <span>{label}</span>}
    </label>
  );
}
