import { useTokens } from "../hooks/useTokens";

export function Skeleton({ width = "100%", height = "20px", rounded = false }) {
  const t = useTokens();

  return (
    <>
      <div style={{
        width, height, backgroundColor: t.colors.bgElevated,
        borderRadius: rounded ? t.radius.full : t.radius.md,
        animation: "bticket-pulse 1.5s ease-in-out infinite",
      }} />
      <style>{`@keyframes bticket-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }`}</style>
    </>
  );
}
