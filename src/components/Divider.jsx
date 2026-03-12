import { useTokens } from "../hooks/useTokens";

export function Divider({ label }) {
  const t = useTokens();

  return (
    <div style={{ display: "flex", alignItems: "center", gap: t.spacing[3], margin: `${t.spacing[3]} 0` }}>
      <div style={{ flex: 1, height: "1px", backgroundColor: t.colors.borderSubtle }} />
      {label && <span style={{ fontSize: t.typography.fontSize.sm, color: t.colors.textMuted, fontFamily: t.typography.fontFamily, whiteSpace: "nowrap" }}>{label}</span>}
      <div style={{ flex: 1, height: "1px", backgroundColor: t.colors.borderSubtle }} />
    </div>
  );
}
