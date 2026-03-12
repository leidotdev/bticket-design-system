import { useState } from "react";
export function DataTable({ columns = [], data = [], striped = true }) {
  const [sortCol, setSortCol] = useState(null);
  const [sortDir, setSortDir] = useState("asc");
  const handleSort = (key) => { if (sortCol === key) setSortDir(d => d === "asc" ? "desc" : "asc"); else { setSortCol(key); setSortDir("asc"); } };
  const sorted = [...data].sort((a, b) => { if (!sortCol) return 0; const av = a[sortCol], bv = b[sortCol]; const cmp = typeof av === "number" ? av - bv : String(av).localeCompare(String(bv)); return sortDir === "asc" ? cmp : -cmp; });
  return (
    <div className="rounded-xl overflow-hidden font-sans" style={{ border: "1px solid var(--border-subtle)" }}>
      <table className="w-full border-collapse">
        <thead><tr style={{ backgroundColor: "var(--bg-elevated)" }}>
          {columns.map(col => (
            <th key={col.key} onClick={() => col.sortable !== false && handleSort(col.key)}
              className="px-3.5 py-2.5 text-left text-[10px] font-semibold uppercase tracking-wide select-none"
              style={{ color: "var(--text-secondary)", cursor: col.sortable !== false ? "pointer" : "default", borderBottom: "1px solid var(--border-subtle)" }}>
              <span className="inline-flex items-center gap-1">{col.label}{sortCol === col.key && <span className="text-[10px]">{sortDir === "asc" ? "↑" : "↓"}</span>}</span>
            </th>
          ))}
        </tr></thead>
        <tbody>{sorted.map((row, i) => (
          <tr key={i} style={{ backgroundColor: striped && i % 2 ? "var(--bg-hover)" : "var(--bg-card)", borderBottom: i < sorted.length - 1 ? "1px solid var(--border-subtle)" : "none" }}>
            {columns.map(col => <td key={col.key} className="px-3.5 py-2.5 text-sm" style={{ color: "var(--text-primary)" }}>{col.render ? col.render(row[col.key], row) : row[col.key]}</td>)}
          </tr>
        ))}</tbody>
      </table>
    </div>
  );
}
