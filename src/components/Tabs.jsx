import { useState } from "react";
export function Tabs({ tabs, defaultActive = 0 }) {
  const [active, setActive] = useState(defaultActive);
  return (
    <div className="font-sans">
      <div className="flex" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
        {tabs.map((tab, i) => (
          <button key={i} onClick={() => setActive(i)}
            className="px-5 py-2.5 text-sm bg-transparent border-none cursor-pointer transition-all duration-150"
            style={{ fontWeight: i === active ? 600 : 400, color: i === active ? "var(--brand-primary)" : "var(--text-muted)", borderBottom: `2px solid ${i === active ? "var(--brand-primary)" : "transparent"}` }}>
            {tab.label}
          </button>
        ))}
      </div>
      <div className="py-4">{tabs[active]?.content}</div>
    </div>
  );
}
