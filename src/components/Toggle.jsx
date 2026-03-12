import { useState } from "react";

export function Toggle({ checked: init = false, label, size = "md", disabled = false }) {
  const [on, setOn] = useState(init);
  const sizes = { sm: { w: 32, h: 18, dot: 12 }, md: { w: 44, h: 24, dot: 18 }, lg: { w: 56, h: 30, dot: 24 } };
  const s = sizes[size];
  return (
    <label className={`flex items-center gap-3 text-sm font-sans ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`} style={{ color: "var(--text-primary)" }}>
      <div onClick={() => !disabled && setOn(!on)} className="relative rounded-full transition-all duration-150"
        style={{ width: s.w, height: s.h, backgroundColor: on ? "var(--brand-primary)" : "var(--bg-elevated)", border: `1px solid ${on ? "var(--brand-primary)" : "var(--border-default)"}` }}>
        <div className="absolute rounded-full bg-white shadow transition-all duration-150"
          style={{ width: s.dot, height: s.dot, top: (s.h - s.dot) / 2 - 1, left: on ? s.w - s.dot - (s.h - s.dot) / 2 : (s.h - s.dot) / 2 - 1 }} />
      </div>
      {label && <span>{label}</span>}
    </label>
  );
}
