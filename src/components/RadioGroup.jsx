import { useState } from "react";

export function RadioGroup({ options = [], value, onChange }) {
  const [selected, setSelected] = useState(value || options[0]?.value);
  return (
    <div className="flex flex-col gap-3">
      {options.map(opt => (
        <label key={opt.value} onClick={() => { setSelected(opt.value); onChange?.(opt.value); }}
          className="flex items-center gap-2 cursor-pointer text-sm font-sans" style={{ color: "var(--text-primary)" }}>
          <div className="w-5 h-5 rounded-full flex items-center justify-center transition-all duration-150"
            style={{ border: `2px solid ${selected === opt.value ? "var(--brand-primary)" : "var(--border-default)"}` }}>
            {selected === opt.value && <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "var(--brand-primary)" }} />}
          </div>
          <span>{opt.label}</span>
        </label>
      ))}
    </div>
  );
}
