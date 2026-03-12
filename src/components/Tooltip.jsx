import { useState } from "react";
export function Tooltip({ children, text, position = "top" }) {
  const [show, setShow] = useState(false);
  const pos = { top: { bottom: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)" }, bottom: { top: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)" } };
  return (
    <div className="relative inline-flex" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      {show && <div className="absolute px-2.5 py-1.5 rounded text-xs whitespace-nowrap z-50 pointer-events-none shadow-md font-sans" style={{ ...pos[position], backgroundColor: "var(--text-primary)", color: "var(--text-inverse)" }}>{text}</div>}
    </div>
  );
}
