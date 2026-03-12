export function Stepper({ steps = [{ label: "Step 1", active: true }, { label: "Step 2", active: false }, { label: "Step 3", active: false }] }) {
  return (
    <div className="flex items-center gap-2 font-sans">
      {steps.map((step, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="flex flex-col items-center gap-1">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold"
              style={{ backgroundColor: step.active ? "var(--brand-primary)" : "var(--bg-elevated)", color: step.active ? "white" : "var(--text-muted)" }}>{i + 1}</div>
            <span className="text-[10px]" style={{ color: step.active ? "var(--text-primary)" : "var(--text-muted)" }}>{step.label}</span>
          </div>
          {i < steps.length - 1 && <div className="w-10 h-0.5 mb-4" style={{ backgroundColor: steps[i + 1]?.active ? "var(--brand-primary)" : "var(--border-default)" }} />}
        </div>
      ))}
    </div>
  );
}
