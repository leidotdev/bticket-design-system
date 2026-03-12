import { useState } from "react";

export function Textarea({ placeholder = "Type here...", disabled, rows = 3, value, onChange, className = "" }) {
  const [focused, setFocused] = useState(false);
  return (
    <textarea placeholder={placeholder} disabled={disabled} rows={rows} value={value} onChange={onChange}
      onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
      className={`w-full px-3 py-2.5 rounded-lg border outline-none resize-y transition-colors duration-150 text-sm font-sans leading-relaxed ${disabled ? "opacity-60" : ""} ${className}`}
      style={{
        backgroundColor: disabled ? "var(--bg-disabled)" : "var(--bg-input)",
        borderColor: focused ? "var(--border-focus)" : "var(--border-default)",
        color: disabled ? "var(--text-disabled)" : "var(--text-primary)",
        boxSizing: "border-box",
      }}
    />
  );
}
