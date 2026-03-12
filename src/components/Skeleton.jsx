export function Skeleton({ width = "100%", height = "20px", rounded = false }) {
  return (
    <>
      <div className="animate-pulse-fade" style={{ width, height, backgroundColor: "var(--bg-elevated)", borderRadius: rounded ? "9999px" : "8px" }} />
      <style>{`@keyframes pulse-fade { 0%,100% { opacity:1; } 50% { opacity:0.4; } } .animate-pulse-fade { animation: pulse-fade 1.5s ease-in-out infinite; }`}</style>
    </>
  );
}
