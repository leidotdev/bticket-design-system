import { useTokens } from "../hooks/useTokens";

export function Stepper({ steps = [{ label: "Step 1", active: true }, { label: "Step 2", active: false }, { label: "Step 3", active: false }] }) {
  const t = useTokens();

  return (
    <div style={{ display: "flex", alignItems: "center", gap: t.spacing[2], fontFamily: t.typography.fontFamily }}>
      {steps.map((step, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: t.spacing[2] }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: t.spacing[1] }}>
            <div style={{ width: "28px", height: "28px", borderRadius: t.radius.full, backgroundColor: step.active ? t.colors.primary : t.colors.bgElevated, color: step.active ? t.colors.white : t.colors.textMuted, display: "flex", alignItems: "center", justifyContent: "center", fontSize: t.typography.fontSize.sm, fontWeight: t.typography.fontWeight.semibold }}>{i + 1}</div>
            <span style={{ fontSize: t.typography.fontSize.xs, color: step.active ? t.colors.textPrimary : t.colors.textMuted }}>{step.label}</span>
          </div>
          {i < steps.length - 1 && <div style={{ width: "40px", height: "2px", backgroundColor: steps[i + 1]?.active ? t.colors.primary : t.colors.borderDefault, marginBottom: "18px" }} />}
        </div>
      ))}
    </div>
  );
}
