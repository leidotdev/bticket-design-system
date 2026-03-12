import { useState } from "react";
import { useTokens } from "../hooks/useTokens";

export function DataTable({ columns = [], data = [], striped = true }) {
  const t = useTokens();
  const [sortCol, setSortCol] = useState(null);
  const [sortDir, setSortDir] = useState("asc");

  const handleSort = (key) => {
    if (sortCol === key) setSortDir(sortDir === "asc" ? "desc" : "asc");
    else { setSortCol(key); setSortDir("asc"); }
  };

  const sorted = [...data].sort((a, b) => {
    if (!sortCol) return 0;
    const av = a[sortCol], bv = b[sortCol];
    const cmp = typeof av === "number" ? av - bv : String(av).localeCompare(String(bv));
    return sortDir === "asc" ? cmp : -cmp;
  });

  const cellStyle = { padding: "10px 14px", textAlign: "left", fontSize: t.typography.fontSize.sm, fontFamily: t.typography.fontFamily };

  return (
    <div style={{ border: `1px solid ${t.colors.borderSubtle}`, borderRadius: t.radius.lg, overflow: "hidden" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: t.colors.bgElevated }}>
            {columns.map(col => (
              <th key={col.key} onClick={() => col.sortable !== false && handleSort(col.key)}
                style={{ ...cellStyle, fontWeight: t.typography.fontWeight.semibold, color: t.colors.textSecondary, cursor: col.sortable !== false ? "pointer" : "default", userSelect: "none", fontSize: t.typography.fontSize.xs, letterSpacing: "0.5px", textTransform: "uppercase", borderBottom: `1px solid ${t.colors.borderSubtle}` }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  {col.label}
                  {sortCol === col.key && <span style={{ fontSize: "10px" }}>{sortDir === "asc" ? "↑" : "↓"}</span>}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sorted.map((row, i) => (
            <tr key={i} style={{ backgroundColor: striped && i % 2 ? t.colors.bgHover : t.colors.bgCard, borderBottom: i < sorted.length - 1 ? `1px solid ${t.colors.borderSubtle}` : "none" }}>
              {columns.map(col => (
                <td key={col.key} style={{ ...cellStyle, color: t.colors.textPrimary }}>
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
