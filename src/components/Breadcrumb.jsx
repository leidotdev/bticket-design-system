import { useTokens } from "../hooks/useTokens";
import { Icon } from "./Icon";

export function Breadcrumb({ items = [] }) {
  const t = useTokens();

  return (
    <div style={{ display: "flex", alignItems: "center", gap: t.spacing[1], fontFamily: t.typography.fontFamily, fontSize: t.typography.fontSize.sm }}>
      {items.map((item, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: t.spacing[1] }}>
          {i > 0 && <Icon name="chevronRight" size={14} color={t.colors.textMuted} />}
          <span style={{
            color: i === items.length - 1 ? t.colors.textPrimary : t.colors.textMuted,
            fontWeight: i === items.length - 1 ? t.typography.fontWeight.medium : t.typography.fontWeight.regular,
            cursor: i === items.length - 1 ? "default" : "pointer",
          }}>{item.label}</span>
        </div>
      ))}
    </div>
  );
}
