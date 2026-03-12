import { useState } from "react";
import { Icon } from "./Icon";

let toastId = 0;

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const addToast = (msg, variant = "default", duration = 3000) => {
    const id = ++toastId;
    setToasts(prev => [...prev, { id, msg, variant }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), duration);
  };
  const configs = {
    default: { border: "var(--border-default)", icon: null },
    success: { border: "var(--brand-primary)", icon: "checkCircle" },
    danger:  { border: "var(--brand-danger)",  icon: "xCircle" },
    warning: { border: "var(--brand-warning)", icon: "alertTriangle" },
  };
  return (
    <>
      {typeof children === "function" ? children(addToast) : children}
      <div className="fixed bottom-5 right-5 flex flex-col-reverse gap-2 z-[10000]">
        {toasts.map(toast => {
          const c = configs[toast.variant] || configs.default;
          return (
            <div key={toast.id} className="px-4 py-3 rounded-lg shadow-md min-w-[280px] flex items-center gap-2.5 text-sm font-sans animate-slide-in"
              style={{ backgroundColor: "var(--bg-card)", border: `1px solid ${c.border}`, color: "var(--text-primary)" }}>
              {c.icon && <Icon name={c.icon} size={18} color={c.border} />}
              {toast.msg}
            </div>
          );
        })}
      </div>
      <style>{`@keyframes slide-in { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } } .animate-slide-in { animation: slide-in 0.25s ease; }`}</style>
    </>
  );
}
