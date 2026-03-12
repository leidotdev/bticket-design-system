import { useState } from "react";
import { Icon } from "./Icon";
export function Accordion({ items = [] }) {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <div className="rounded-xl overflow-hidden font-sans" style={{ border: "1px solid var(--border-subtle)" }}>
      {items.map((item, i) => (
        <div key={i}>
          <div onClick={() => setOpenIdx(openIdx === i ? null : i)} className="flex items-center justify-between px-4 py-3.5 cursor-pointer text-sm font-medium"
            style={{ backgroundColor: "var(--bg-card)", color: "var(--text-primary)", borderBottom: i < items.length - 1 || openIdx === i ? "1px solid var(--border-subtle)" : "none" }}>
            <span>{item.title}</span>
            <span style={{ transform: openIdx === i ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.15s" }}><Icon name="chevronDown" size={16} color="var(--text-muted)" /></span>
          </div>
          {openIdx === i && <div className="px-4 py-3 text-xs leading-relaxed" style={{ backgroundColor: "var(--bg-card)", color: "var(--text-secondary)", borderBottom: i < items.length - 1 ? "1px solid var(--border-subtle)" : "none" }}>{item.content}</div>}
        </div>
      ))}
    </div>
  );
}
