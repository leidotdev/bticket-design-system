import { useState } from "react";
import { useTokens } from "../hooks/useTokens";

export function Tabs({ tabs, defaultActive = 0 }) {
  const t = useTokens();
  const [active, setActive] = useState(defaultActive);

  return (
    <div>
      <div style={{ display: "flex", borderBottom: `1px solid ${t.colors.borderSubtle}`, gap: 0 }}>
        {tabs.map((tab, i) => (
          <button key={i} onClick={() => setActive(i)} style={{
            padding: "10px 20px", fontSize: t.typography.fontSize.base, fontFamily: t.typography.fontFamily,
            fontWeight: i === active ? t.typography.fontWeight.semibold : t.typography.fontWeight.regular,
            color: i === active ? t.colors.primary : t.colors.textMuted,
            backgroundColor: "transparent", border: "none",
            borderBottom: `2px solid ${i === active ? t.colors.primary : "transparent"}`,
            cursor: "pointer", transition: `all ${t.transitions.fast}`,
          }}>{tab.label}</button>
        ))}
      </div>
      <div style={{ padding: `${t.spacing[4]} 0` }}>{tabs[active]?.content}</div>
    </div>
  );
}
