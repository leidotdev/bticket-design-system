import { useState } from "react";
import { useTokens } from "../hooks/useTokens";
import { Icon } from "./Icon";

export function Accordion({ items = [] }) {
  const t = useTokens();
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div style={{ border: `1px solid ${t.colors.borderSubtle}`, borderRadius: t.radius.lg, overflow: "hidden" }}>
      {items.map((item, i) => (
        <div key={i}>
          <div onClick={() => setOpenIdx(openIdx === i ? null : i)}
            style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "14px 16px", cursor: "pointer", backgroundColor: t.colors.bgCard,
              borderBottom: i < items.length - 1 || openIdx === i ? `1px solid ${t.colors.borderSubtle}` : "none",
              fontFamily: t.typography.fontFamily, fontSize: t.typography.fontSize.base,
              fontWeight: t.typography.fontWeight.medium, color: t.colors.textPrimary,
            }}>
            <span>{item.title}</span>
            <span style={{ transform: openIdx === i ? "rotate(180deg)" : "rotate(0)", transition: `transform ${t.transitions.fast}` }}>
              <Icon name="chevronDown" size={16} color={t.colors.textMuted} />
            </span>
          </div>
          {openIdx === i && (
            <div style={{
              padding: "12px 16px", backgroundColor: t.colors.bgCard, fontSize: t.typography.fontSize.sm,
              color: t.colors.textSecondary, lineHeight: 1.6, fontFamily: t.typography.fontFamily,
              borderBottom: i < items.length - 1 ? `1px solid ${t.colors.borderSubtle}` : "none",
            }}>{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}
