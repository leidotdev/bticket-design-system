export function Spinner({ size = "md", color }) {
  const sizes = { sm: 16, md: 24, lg: 36, xl: 48 };
  const s = sizes[size];
  return (
    <>
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" style={{ animation: "btspin 0.8s linear infinite" }}>
        <circle cx="12" cy="12" r="10" stroke="var(--bg-elevated)" strokeWidth="3" />
        <path d="M12 2a10 10 0 0 1 10 10" stroke={color || "var(--brand-primary)"} strokeWidth="3" strokeLinecap="round" />
      </svg>
      <style>{`@keyframes btspin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </>
  );
}
