import { useState, useEffect, useRef } from "react";
import { Icon } from "./Icon";

export function Select({ options = [], placeholder = "Select...", value, onChange, disabled, className = "" }) {
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
    <div ref={ref} className={`relative min-w-[200px] font-sans ${className}`}>
      <div onClick={() => !disabled && setOpen(!open)}
        className={`flex items-center justify-between px-3 py-2 rounded-lg border text-sm transition-colors duration-150 ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
        style={{
          backgroundColor: disabled ? "var(--bg-disabled)" : "var(--bg-input)",
          borderColor: open ? "var(--border-focus)" : "var(--border-default)",
          color: selected ? "var(--text-primary)" : "var(--text-muted)",
        }}
      >
        <span>{selectedLabel}</span>
        <Icon name="chevronDown" size={16} color="var(--text-muted)" />
      </div>
      {open && (
        <div className="absolute top-[calc(100%+4px)] left-0 right-0 z-50 rounded-lg shadow-md overflow-hidden max-h-[200px] overflow-y-auto"
          style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-default)" }}>
          {options.map(opt => (
            <div key={opt.value}
              onClick={() => { setSelected(opt.value); setOpen(false); onChange?.(opt.value); }}
              className="px-3 py-2 text-sm cursor-pointer transition-colors duration-150"
              style={{
                backgroundColor: opt.value === selected ? "var(--bg-hover)" : "transparent",
                color: opt.value === selected ? "var(--brand-primary)" : "var(--text-primary)",
                fontWeight: opt.value === selected ? 500 : 400,
              }}
              onMouseEnter={e => e.target.style.backgroundColor = "var(--bg-hover)"}
              onMouseLeave={e => e.target.style.backgroundColor = opt.value === selected ? "var(--bg-hover)" : "transparent"}
            >{opt.label}</div>
          ))}
        </div>
      )}
    </div>
  );
}
