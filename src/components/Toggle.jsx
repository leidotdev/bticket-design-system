import { useState } from "react";
import { useTokens } from "../hooks/useTokens";

export function Toggle({ checked: init = false, label, size = "md", disabled = false }) {
  const t = useTokens();
  const [on, setOn] = useState(init);
  const sizes = { sm: { w: 32, h: 18, dot: 12 }, md: { w: 44, h: 24, dot: 18 }, lg: { w: 56, h: 30, dot: 24 } };
  const s = sizes[size];

  return (
    <label style={{ display: "flex", alignItems: "center", gap: t.spacing[3], cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.6 : 1, fontFamily: t.typography.fontFamily, fontSize: t.typography.fontSize.base, color: t.colors.textPrimary }}>
      <div onClick={() => !disabled && setOn(!on)} style={{
        width: s.w, height: s.h, borderRadius: s.h,
        backgroundColor: on ? t.colors.primary : t.colors.bgElevated,
        border: `1px solid ${on ? t.colors.primary : t.colors.borderDefault}`,
        position: "relative", transition: `all ${t.transitions.fast}`, flexShrink: 0,
      }}>
        <div style={{
          width: s.dot, height: s.dot, borderRadius: "50%", backgroundColor: t.colors.white,
          position: "absolute", top: (s.h - s.dot) / 2 - 1,
          left: on ? s.w - s.dot - (s.h - s.dot) / 2 : (s.h - s.dot) / 2 - 1,
          transition: `left ${t.transitions.fast}`, boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
        }} />
      </div>
      {label && <span>{label}</span>}
    </label>
  );
}
