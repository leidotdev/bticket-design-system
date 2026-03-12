import { useState } from "react";
import { useTokens } from "../hooks/useTokens";

export function RadioGroup({ options = [], value, onChange, name = "radio" }) {
  const t = useTokens();
  const [selected, setSelected] = useState(value || options[0]?.value);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: t.spacing[3] }}>
      {options.map(opt => (
        <label key={opt.value}
          onClick={() => { setSelected(opt.value); onChange && onChange(opt.value); }}
          style={{ display: "flex", alignItems: "center", gap: t.spacing[2], cursor: "pointer", fontFamily: t.typography.fontFamily, fontSize: t.typography.fontSize.base, color: t.colors.textPrimary }}>
          <div style={{
            width: "20px", height: "20px", borderRadius: "50%",
            border: `2px solid ${selected === opt.value ? t.colors.primary : t.colors.borderDefault}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: `all ${t.transitions.fast}`,
          }}>
            {selected === opt.value && <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: t.colors.primary }} />}
          </div>
          <span>{opt.label}</span>
        </label>
      ))}
    </div>
  );
}
