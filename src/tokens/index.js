// ============================================================
// 🔗 TOKENS — Main entry point
// Import from here: import { buildTokens, palette, brand } from './tokens'
// ============================================================

export { palette } from './palette';
export { brand } from './brand';
export { themes } from './themes';
export { typography, spacing, radius, transitions } from './fixed';

import { palette } from './palette';
import { brand } from './brand';
import { themes } from './themes';
import { typography, spacing, radius, shadowFns, transitions } from './fixed';

/**
 * Build a complete token set for a given mode ("dark" or "light").
 * Pass this to ThemeContext.Provider.
 *
 * @param {"dark" | "light"} mode
 * @returns {object} Complete token object for components
 */
export function buildTokens(mode = "dark") {
  const theme = themes[mode];
  return {
    colors: {
      ...brand,
      ...theme,
      white: palette.white,
      black: palette.black,
      transparent: palette.transparent,
    },
    typography,
    spacing,
    radius,
    shadows: {
      sm: shadowFns.sm(theme.shadow),
      md: shadowFns.md(theme.shadow),
      lg: shadowFns.lg(theme.shadow),
    },
    transitions,
  };
}

/**
 * Export tokens as CSS custom properties (for non-React use).
 *
 * @param {"dark" | "light"} mode
 * @returns {object} CSS var name → value pairs
 */
export function tokensToCSSVars(mode = "dark") {
  const t = buildTokens(mode);
  const vars = {};

  Object.entries(t.colors).forEach(([key, val]) => {
    if (typeof val === "string") vars[`--color-${key}`] = val;
  });

  vars["--font-family"] = t.typography.fontFamily;
  vars["--font-family-mono"] = t.typography.fontFamilyMono;

  Object.entries(t.typography.fontSize).forEach(([key, val]) => {
    vars[`--font-size-${key}`] = val;
  });
  Object.entries(t.spacing).forEach(([key, val]) => {
    vars[`--spacing-${key}`] = val;
  });
  Object.entries(t.radius).forEach(([key, val]) => {
    vars[`--radius-${key}`] = val;
  });

  return vars;
}
