import { useState } from "react";
import { Icon } from "./Icon";

export function TextInput({ placeholder = "Search... Ctrl+K", disabled, hasIcon = true, value, onChange, type = "text", className = "" }) {
  const [focused, setFocused] = useState(false);
  return (
    <div
      className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors duration-150 font-sans ${disabled ? "opacity-60" : ""} ${className}`}
      style={{
        backgroundColor: disabled ? "var(--bg-disabled)" : "var(--bg-input)",
        borderColor: focused ? "var(--border-focus)" : "var(--border-default)",
      }}
    >
      {hasIcon && <Icon name="search" size={16} color={disabled ? "var(--text-disabled)" : "var(--text-muted)"} />}
      <input placeholder={placeholder} disabled={disabled} type={type} value={value} onChange={onChange}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        className="border-none outline-none bg-transparent w-full text-sm font-sans"
        style={{ color: disabled ? "var(--text-disabled)" : "var(--text-primary)" }}
      />
    </div>
  );
}
