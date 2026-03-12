// ============================================================
// 🌓 THEME CONTEXT + HOOK
// Wrap your app with ThemeProvider, use useTokens() in components
// ============================================================

import { createContext, useContext } from "react";

export const ThemeContext = createContext(null);

/**
 * Access the current theme tokens inside any component.
 *
 * @returns {object} Current token set (colors, typography, spacing, etc.)
 *
 * @example
 * function MyComponent() {
 *   const t = useTokens();
 *   return <div style={{ color: t.colors.textPrimary }}>Hello</div>;
 * }
 */
export function useTokens() {
  const tokens = useContext(ThemeContext);
  if (!tokens) {
    throw new Error("useTokens must be used within a ThemeContext.Provider");
  }
  return tokens;
}
