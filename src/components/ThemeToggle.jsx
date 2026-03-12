import { useTokens } from "../hooks/useTokens";
import { Icon } from "./Icon";

export function ThemeToggle({ mode, setMode }) {
  const t = useTokens();

  return (
    <button onClick={() => setMode(mode === "dark" ? "light" : "dark")} style={{
      display: "flex", alignItems: "center", gap: "8px", padding: "8px 14px", borderRadius: t.radius.full,
      border: `1px solid ${t.colors.borderDefault}`, backgroundColor: t.colors.bgCard, color: t.colors.textPrimary,
      cursor: "pointer", fontFamily: t.typography.fontFamily, fontSize: t.typography.fontSize.sm,
      fontWeight: t.typography.fontWeight.medium, transition: `all ${t.transitions.normal}`,
    }}>
      <Icon name={mode === "dark" ? "sun" : "moon"} size={18} />
      {mode === "dark" ? "Light" : "Dark"}
    </button>
  );
}
