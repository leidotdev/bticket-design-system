import { useState } from "react";
import { Icon } from "./Icon";
export function Pagination({ totalPages = 5, defaultPage = 1 }) {
  const [active, setActive] = useState(defaultPage);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const btnCls = "w-8 h-8 flex items-center justify-center border-none text-xs cursor-pointer font-sans";
  return (
    <div className="flex items-center gap-1">
      <button className={btnCls} style={{ backgroundColor: "var(--bg-elevated)", color: "var(--text-secondary)", borderRadius: "4px 0 0 4px" }} onClick={() => setActive(Math.max(1, active - 1))}><Icon name="chevronLeft" size={14} /></button>
      {pages.map(p => <button key={p} onClick={() => setActive(p)} className={btnCls} style={{ backgroundColor: p === active ? "var(--brand-primary)" : "var(--bg-elevated)", color: p === active ? "white" : "var(--text-secondary)", fontWeight: p === active ? 700 : 400 }}>{p}</button>)}
      <button className={btnCls} style={{ backgroundColor: "var(--bg-elevated)", color: "var(--text-secondary)", borderRadius: "0 4px 4px 0" }} onClick={() => setActive(Math.min(totalPages, active + 1))}><Icon name="chevronRight" size={14} /></button>
    </div>
  );
}
