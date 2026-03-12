import { useState } from "react";
export function NavItem({ label, active = false, badge, icon = "📊" }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg cursor-pointer transition-all duration-150 text-sm font-sans"
      style={{ backgroundColor: active ? "var(--brand-primary)" : hovered ? "var(--bg-hover)" : "transparent", color: active ? "white" : "var(--text-secondary)", fontWeight: active ? 600 : 400 }}>
      <span className="text-base">{icon}</span><span className="flex-1">{label}</span>
      {badge && <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center text-white" style={{ backgroundColor: "var(--brand-badge)" }}>{badge}</span>}
    </div>
  );
}
