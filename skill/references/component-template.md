# Component Template Reference

This file contains the complete B-ticket Design System template. When generating the design system for a user, copy this entire template and replace the following based on the Setup Wizard results:

## Customization Points

### 1. Brand Colors (from Step 1)
Replace values in the `brand` object:
```javascript
const brand = {
  primary: palette.____,      // ← User's primary color
  primaryHover: palette.____,  // ← One shade darker
  ...
};
```

### 2. Font Families (from Step 2)
Replace in the `fixed.typography` object:
```javascript
fontFamily: "'____', sans-serif",     // ← User's main font
fontFamilyMono: "'____', monospace",  // ← User's mono font
```

If using Google Fonts, add this import at the top of the file (inside a useEffect or as a link):
```javascript
// Add Google Font import
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=FONTNAME:wght@400;500;600;700&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);
```

### 3. Icons (from Step 3)

**Option A: Inline SVG (default)** — Keep the Icon component as-is.

**Option B: Lucide React** — Replace the Icon component with:
```javascript
import { Search, X, Check, ChevronDown, ChevronRight, ChevronLeft, Sun, Moon, Info, AlertTriangle, CheckCircle, XCircle, Home, Loader, User, Copy, Edit, Trash, Eye, ArrowDownUp } from "lucide-react";

const iconMap = {
  search: Search, x: X, check: Check, chevronDown: ChevronDown,
  chevronRight: ChevronRight, chevronLeft: ChevronLeft, sun: Sun, moon: Moon,
  info: Info, alertTriangle: AlertTriangle, checkCircle: CheckCircle,
  xCircle: XCircle, home: Home, loader: Loader, user: User, copy: Copy,
  edit: Edit, trash: Trash, eye: Eye, sort: ArrowDownUp,
};

const Icon = ({ name, size = 16, color }) => {
  const LucideIcon = iconMap[name];
  if (!LucideIcon) return null;
  return <LucideIcon size={size} color={color} />;
};
```

**Option C: Custom Icons** — Replace the Icon component with the user's custom icon setup. Map the standard icon names (search, x, check, etc.) to their equivalents.

---

## Full Template Code

Below is the complete, production-ready design system. Copy and customize per the rules above.

```jsx
import { useState, useEffect, useRef, createContext, useContext } from "react";

// ============================================================
// 🎨 LAYER 1: BASE PALETTE
// Raw color values — never changes between projects
// ============================================================
const palette = {
  green50: "#F0FDF4", green100: "#DCFCE7", green200: "#BBF7D0", green300: "#86EFAC", green400: "#4ADE80",
  green500: "#22C55E", green600: "#16A34A", green700: "#15803D", green800: "#166534", green900: "#14532D",
  red50: "#FEF2F2", red100: "#FEE2E2", red200: "#FECACA", red300: "#FCA5A5", red400: "#F87171",
  red500: "#EF4444", red600: "#DC2626", red700: "#B91C1C", red800: "#991B1B", red900: "#7F1D1D",
  orange50: "#FFF7ED", orange100: "#FFEDD5", orange200: "#FED7AA", orange300: "#FDBA74", orange400: "#FB923C",
  orange500: "#F97316", orange600: "#EA580C", orange700: "#C2410C", orange800: "#9A3412", orange900: "#7C2D12",
  purple50: "#FAF5FF", purple100: "#F3E8FF", purple200: "#E9D5FF", purple300: "#D8B4FE", purple400: "#C084FC",
  purple500: "#8B5CF6", purple600: "#7C3AED", purple700: "#6D28D9", purple800: "#5B21B6", purple900: "#4C1D95",
  blue50: "#EFF6FF", blue100: "#DBEAFE", blue200: "#BFDBFE", blue300: "#93C5FD", blue400: "#60A5FA",
  blue500: "#3B82F6", blue600: "#2563EB", blue700: "#1D4ED8", blue800: "#1E40AF", blue900: "#1E3A8A",
  neutral0: "#FFFFFF", neutral50: "#FAFAFA", neutral100: "#F5F5F5", neutral200: "#E5E5E5", neutral300: "#D4D4D4",
  neutral400: "#A1A7B5", neutral500: "#6B7280", neutral600: "#3A3F4B", neutral700: "#2F3340",
  neutral800: "#2A2D35", neutral900: "#252830", neutral950: "#1E2A1F", neutral1000: "#1A1D21",
  white: "#FFFFFF", black: "#000000", transparent: "transparent",
};

// If user provides a custom hex not in the palette, add it here:
// palette.customPrimary = "#YOUR_HEX";
// palette.customPrimaryDark = "#DARKER_HEX";

// ============================================================
// 🔀 LAYER 2: SEMANTIC TOKENS — ✅ CUSTOMIZE THIS PER PROJECT
// ============================================================
const brand = {
  // ← REPLACE these assignments based on Setup Step 1
  primary: palette.green500, primaryHover: palette.green600,
  primaryLight: "rgba(34, 197, 94, 0.12)", primaryLightSolid: palette.green50,
  secondary: palette.blue500, secondaryHover: palette.blue600,
  secondaryLight: "rgba(59, 130, 246, 0.12)", secondaryLightSolid: palette.blue50,
  danger: palette.red500, dangerHover: palette.red600,
  dangerLight: "rgba(239, 68, 68, 0.12)", dangerLightSolid: palette.red50,
  warning: palette.orange500, warningHover: palette.orange600,
  warningLight: "rgba(249, 115, 22, 0.12)", warningLightSolid: palette.orange50,
  accent: palette.purple500, accentHover: palette.purple600,
  accentLight: "rgba(139, 92, 246, 0.12)", accentLightSolid: palette.purple50,
  success: palette.green500, info: palette.blue500, badge: palette.red500,
};

// ============================================================
// 🌓 THEME TOKENS — Dark & Light surfaces
// ============================================================
const themes = {
  dark: {
    bgPage: palette.neutral1000, bgSidebar: palette.neutral950, bgCard: palette.neutral900,
    bgInput: palette.neutral800, bgElevated: palette.neutral700, bgDisabled: palette.neutral700,
    bgHover: "rgba(255,255,255,0.05)", bgOverlay: "rgba(0,0,0,0.6)",
    textPrimary: palette.white, textSecondary: palette.neutral400, textMuted: palette.neutral500,
    textDisabled: palette.neutral500, textInverse: palette.neutral1000,
    borderDefault: palette.neutral600, borderSubtle: palette.neutral800, borderFocus: brand.primary,
    shadow: "rgba(0,0,0,0.3)", overlay: "rgba(0,0,0,0.5)",
    primaryLight: brand.primaryLight, secondaryLight: brand.secondaryLight,
    dangerLight: brand.dangerLight, warningLight: brand.warningLight, accentLight: brand.accentLight,
  },
  light: {
    bgPage: palette.neutral50, bgSidebar: palette.white, bgCard: palette.white,
    bgInput: palette.neutral100, bgElevated: palette.neutral200, bgDisabled: palette.neutral300,
    bgHover: "rgba(0,0,0,0.04)", bgOverlay: "rgba(0,0,0,0.4)",
    textPrimary: palette.neutral1000, textSecondary: palette.neutral500, textMuted: palette.neutral400,
    textDisabled: palette.neutral500, textInverse: palette.white,
    borderDefault: palette.neutral300, borderSubtle: palette.neutral200, borderFocus: brand.primary,
    shadow: "rgba(0,0,0,0.08)", overlay: "rgba(0,0,0,0.2)",
    primaryLight: brand.primaryLightSolid, secondaryLight: brand.secondaryLightSolid,
    dangerLight: brand.dangerLightSolid, warningLight: brand.warningLightSolid, accentLight: brand.accentLightSolid,
  },
};

// ============================================================
// 🏗️ LAYER 3: FIXED TOKENS — ← CUSTOMIZE FONTS in Step 2
// ============================================================
const fixed = {
  typography: {
    fontFamily: "'DM Sans', 'Segoe UI', sans-serif",       // ← Step 2
    fontFamilyMono: "'JetBrains Mono', monospace",          // ← Step 2
    fontSize: { xs: "10px", sm: "12px", base: "14px", md: "16px", lg: "20px", xl: "24px", "2xl": "32px", "3xl": "40px" },
    fontWeight: { regular: 400, medium: 500, semibold: 600, bold: 700 },
    lineHeight: { tight: 1.2, normal: 1.5, relaxed: 1.75 },
  },
  spacing: { "0": "0px", "1": "4px", "2": "8px", "3": "12px", "4": "16px", "5": "20px", "6": "24px", "8": "32px", "10": "40px", "12": "48px", "16": "64px" },
  radius: { sm: "4px", md: "8px", lg: "12px", xl: "16px", full: "9999px" },
  shadows: { sm: (c) => `0 1px 2px ${c}`, md: (c) => `0 4px 12px ${c}`, lg: (c) => `0 8px 24px ${c}` },
  transitions: { fast: "150ms ease", normal: "250ms ease", slow: "400ms ease" },
};

// Build tokens — merges all layers
function buildTokens(mode) {
  const theme = themes[mode];
  return {
    colors: { ...brand, ...theme, white: palette.white, black: palette.black, transparent: palette.transparent },
    ...fixed,
    shadows: { sm: fixed.shadows.sm(theme.shadow), md: fixed.shadows.md(theme.shadow), lg: fixed.shadows.lg(theme.shadow) },
  };
}

// Theme Context
const ThemeContext = createContext();
function useTokens() { return useContext(ThemeContext); }
```

## Icon Component (Default — Inline SVG)

```jsx
const Icon = ({ name, size = 16, color }) => {
  const icons = {
    search: <><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></>,
    x: <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>,
    check: <polyline points="20 6 9 17 4 12" />,
    chevronDown: <polyline points="6 9 12 15 18 9" />,
    chevronRight: <polyline points="9 18 15 12 9 6" />,
    chevronLeft: <polyline points="15 18 9 12 15 6" />,
    sun: <><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></>,
    moon: <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>,
    info: <><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></>,
    alertTriangle: <><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></>,
    checkCircle: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></>,
    xCircle: <><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></>,
    home: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>,
    loader: <><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></>,
    user: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>,
    copy: <><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></>,
    edit: <><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></>,
    trash: <><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></>,
    eye: <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>,
    sort: <><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {icons[name]}
    </svg>
  );
};
```

## Components

After the token setup and Icon component, include ALL 25 components from the v4 design system. Each component:
- Uses `useTokens()` hook for ALL color/spacing/typography values
- Never uses hardcoded values
- Supports dark and light mode automatically
- Has proper disabled/hover/focus states

The full component implementations are in the v4 design system file (`bticket-design-system-v4.jsx`). When generating, include all components exactly as they appear in v4, only modifying the token values and icon approach per the user's setup choices.

## Helper: Computing Light/Transparent Variants

When user provides a custom hex color for primary (e.g., `#3B82F6`):

```javascript
// Generate light variant (12% opacity for dark mode)
primaryLight: "rgba(59, 130, 246, 0.12)"

// Generate light solid variant (for light mode) — use the 50 shade
// If custom color: lighten to ~95% lightness
primaryLightSolid: "#EFF6FF"
```

Formula for rgba: Take the hex RGB values, use 0.12 opacity for dark mode backgrounds.
Formula for solid light: Mix the color at ~8% with white.

## Checklist Before Delivering

- [ ] Colors assigned from user's brand
- [ ] Font family matches user's typography
- [ ] Icon approach matches user's preference
- [ ] All 25 components included
- [ ] Dark mode works
- [ ] Light mode works
- [ ] Disabled states use `bgDisabled` + `textDisabled` tokens
- [ ] No hardcoded color/spacing values in components
- [ ] ThemeContext.Provider wraps the root
- [ ] Theme toggle included
