import { useState, useEffect, useRef } from "react";
import { useTokens } from "../hooks/useTokens";
import { Icon } from "./Icon";

export function Select({ options = [], placeholder = "Select...", value, onChange, disabled }) {
  const t = useTokens();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(value || null);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selectedLabel = options.find(o => o.value === selected)?.label || placeholder;

  return (
    <div ref={ref} style={{ position: "relative", minWidth: "200px", fontFamily: t.typography.fontFamily }}>
      <div onClick={() => !disabled && setOpen(!open)} style={{
        display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 12px",
        backgroundColor: disabled ? t.colors.bgDisabled : t.colors.bgInput,
        border: `1px solid ${open ? t.colors.borderFocus : t.colors.borderDefault}`,
        borderRadius: t.radius.md, cursor: disabled ? "not-allowed" : "pointer",
        color: selected ? t.colors.textPrimary : t.colors.textMuted,
        fontSize: t.typography.fontSize.base, opacity: disabled ? 0.7 : 1,
        transition: `border-color ${t.transitions.fast}`,
      }}>
        <span>{selectedLabel}</span>
        <Icon name="chevronDown" size={16} color={t.colors.textMuted} />
      </div>
      {open && (
        <div style={{
          position: "absolute", top: "calc(100% + 4px)", left: 0, right: 0, zIndex: 100,
          backgroundColor: t.colors.bgCard, border: `1px solid ${t.colors.borderDefault}`,
          borderRadius: t.radius.md, boxShadow: t.shadows.md, overflow: "hidden", maxHeight: "200px", overflowY: "auto",
        }}>
          {options.map(opt => (
            <div key={opt.value}
              onClick={() => { setSelected(opt.value); setOpen(false); onChange && onChange(opt.value); }}
              style={{
                padding: "8px 12px", cursor: "pointer", fontSize: t.typography.fontSize.base,
                backgroundColor: opt.value === selected ? t.colors.bgHover : "transparent",
                color: opt.value === selected ? t.colors.primary : t.colors.textPrimary,
                fontWeight: opt.value === selected ? t.typography.fontWeight.medium : t.typography.fontWeight.regular,
              }}
              onMouseEnter={e => e.target.style.backgroundColor = t.colors.bgHover}
              onMouseLeave={e => e.target.style.backgroundColor = opt.value === selected ? t.colors.bgHover : "transparent"}
            >{opt.label}</div>
          ))}
        </div>
      )}
    </div>
  );
}
