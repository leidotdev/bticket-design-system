import { useTokens } from "../hooks/useTokens";

export function Spinner({ size = "md", color }) {
  const t = useTokens();
  const sizes = { sm: 16, md: 24, lg: 36, xl: 48 };
  const s = sizes[size];

  return (
    <>
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" style={{ animation: "bticket-spin 0.8s linear infinite" }}>
        <circle cx="12" cy="12" r="10" stroke={t.colors.bgElevated} strokeWidth="3" />
        <path d="M12 2a10 10 0 0 1 10 10" stroke={color || t.colors.primary} strokeWidth="3" strokeLinecap="round" />
      </svg>
      <style>{`@keyframes bticket-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </>
  );
}
