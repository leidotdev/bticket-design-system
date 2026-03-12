// ============================================================
// 🏗️ LAYER 3: FIXED TOKENS
// Typography, spacing, radius — same across ALL projects & themes
// ============================================================

export const typography = {
  fontFamily:     "'DM Sans', 'Segoe UI', sans-serif",
  fontFamilyMono: "'JetBrains Mono', monospace",
  fontSize: {
    xs:   "10px",
    sm:   "12px",
    base: "14px",
    md:   "16px",
    lg:   "20px",
    xl:   "24px",
    "2xl": "32px",
    "3xl": "40px",
  },
  fontWeight: {
    regular:  400,
    medium:   500,
    semibold: 600,
    bold:     700,
  },
  lineHeight: {
    tight:   1.2,
    normal:  1.5,
    relaxed: 1.75,
  },
};

export const spacing = {
  "0":  "0px",
  "1":  "4px",
  "2":  "8px",
  "3":  "12px",
  "4":  "16px",
  "5":  "20px",
  "6":  "24px",
  "8":  "32px",
  "10": "40px",
  "12": "48px",
  "16": "64px",
};

export const radius = {
  sm:   "4px",
  md:   "8px",
  lg:   "12px",
  xl:   "16px",
  full: "9999px",
};

export const shadowFns = {
  sm: (c) => `0 1px 2px ${c}`,
  md: (c) => `0 4px 12px ${c}`,
  lg: (c) => `0 8px 24px ${c}`,
};

export const transitions = {
  fast:   "150ms ease",
  normal: "250ms ease",
  slow:   "400ms ease",
};
