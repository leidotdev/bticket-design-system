import { Icon } from "./Icon";
export function Breadcrumb({ items = [] }) {
  return (
    <div className="flex items-center gap-1 text-xs font-sans">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-1">
          {i > 0 && <Icon name="chevronRight" size={14} color="var(--text-muted)" />}
          <span style={{ color: i === items.length - 1 ? "var(--text-primary)" : "var(--text-muted)", fontWeight: i === items.length - 1 ? 500 : 400, cursor: i === items.length - 1 ? "default" : "pointer" }}>{item.label}</span>
        </div>
      ))}
    </div>
  );
}
