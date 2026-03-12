// ============================================================
// 🌓 THEME HOOK — Toggles .dark class on document root
// No context provider needed! Just call useTheme().
// ============================================================

import { useState, useEffect } from "react";

/**
 * Toggle dark/light mode by adding/removing .dark class.
 * 
 * @example
 * const { mode, toggle, setMode } = useTheme("dark");
 * <button onClick={toggle}>Switch theme</button>
 */
export function useTheme(defaultMode = "dark") {
  const [mode, setMode] = useState(defaultMode);

  useEffect(() => {
    const root = document.documentElement;
    if (mode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [mode]);

  const toggle = () => setMode(m => m === "dark" ? "light" : "dark");

  return { mode, setMode, toggle, isDark: mode === "dark" };
}
