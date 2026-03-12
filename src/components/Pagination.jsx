import { useState } from "react";
import { useTokens } from "../hooks/useTokens";
import { Icon } from "./Icon";

export function Pagination({ totalPages = 5, defaultPage = 1 }) {
  const t = useTokens();
  const [active, setActive] = useState(defaultPage);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const btn = { width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center", border: "none", backgroundColor: t.colors.bgElevated, color: t.colors.textSecondary, fontSize: t.typography.fontSize.sm, cursor: "pointer", fontFamily: t.typography.fontFamily };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: t.spacing[1] }}>
      <button style={{ ...btn, borderRadius: `${t.radius.sm} 0 0 ${t.radius.sm}` }} onClick={() => setActive(Math.max(1, active - 1))}><Icon name="chevronLeft" size={14} /></button>
      {pages.map(p => <button key={p} onClick={() => setActive(p)} style={{ ...btn, backgroundColor: p === active ? t.colors.primary : t.colors.bgElevated, color: p === active ? t.colors.white : t.colors.textSecondary, fontWeight: p === active ? t.typography.fontWeight.bold : t.typography.fontWeight.regular }}>{p}</button>)}
      <button style={{ ...btn, borderRadius: `0 ${t.radius.sm} ${t.radius.sm} 0` }} onClick={() => setActive(Math.min(totalPages, active + 1))}><Icon name="chevronRight" size={14} /></button>
    </div>
  );
}
