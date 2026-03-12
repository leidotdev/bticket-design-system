import { useState } from "react";
import { useTokens } from "../hooks/useTokens";

export function Tooltip({ children, text, position = "top" }) {
  const t = useTokens();
  const [show, setShow] = useState(false);
  const posStyles = {
    top:    { bottom: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)" },
    bottom: { top: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)" },
    left:   { right: "calc(100% + 8px)", top: "50%", transform: "translateY(-50%)" },
    right:  { left: "calc(100% + 8px)", top: "50%", transform: "translateY(-50%)" },
  };

  return (
    <div style={{ position: "relative", display: "inline-flex" }} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      {show && (
        <div style={{
          position: "absolute", ...posStyles[position], padding: "6px 10px",
          backgroundColor: t.colors.textPrimary, color: t.colors.textInverse,
          fontSize: t.typography.fontSize.sm, fontFamily: t.typography.fontFamily,
          borderRadius: t.radius.sm, whiteSpace: "nowrap", zIndex: 1000, pointerEvents: "none",
          boxShadow: t.shadows.md,
        }}>{text}</div>
      )}
    </div>
  );
}
