// ============================================================
// 🌓 THEME TOKENS — Dark & Light surface colors
// ============================================================

import { palette } from './palette';
import { brand } from './brand';

export const themes = {
  dark: {
    // Backgrounds
    bgPage:     palette.neutral1000,
    bgSidebar:  palette.neutral950,
    bgCard:     palette.neutral900,
    bgInput:    palette.neutral800,
    bgElevated: palette.neutral700,
    bgDisabled: palette.neutral700,
    bgHover:    "rgba(255,255,255,0.05)",
    bgOverlay:  "rgba(0,0,0,0.6)",

    // Text
    textPrimary:   palette.white,
    textSecondary: palette.neutral400,
    textMuted:     palette.neutral500,
    textDisabled:  palette.neutral500,
    textInverse:   palette.neutral1000,

    // Borders
    borderDefault: palette.neutral600,
    borderSubtle:  palette.neutral800,
    borderFocus:   brand.primary,

    // Effects
    shadow:  "rgba(0,0,0,0.3)",
    overlay: "rgba(0,0,0,0.5)",

    // Brand light variants (transparent for dark bg)
    primaryLight:   brand.primaryLight,
    secondaryLight: brand.secondaryLight,
    dangerLight:    brand.dangerLight,
    warningLight:   brand.warningLight,
    accentLight:    brand.accentLight,
  },

  light: {
    // Backgrounds
    bgPage:     palette.neutral50,
    bgSidebar:  palette.white,
    bgCard:     palette.white,
    bgInput:    palette.neutral100,
    bgElevated: palette.neutral200,
    bgDisabled: palette.neutral300,
    bgHover:    "rgba(0,0,0,0.04)",
    bgOverlay:  "rgba(0,0,0,0.4)",

    // Text
    textPrimary:   palette.neutral1000,
    textSecondary: palette.neutral500,
    textMuted:     palette.neutral400,
    textDisabled:  palette.neutral500,
    textInverse:   palette.white,

    // Borders
    borderDefault: palette.neutral300,
    borderSubtle:  palette.neutral200,
    borderFocus:   brand.primary,

    // Effects
    shadow:  "rgba(0,0,0,0.08)",
    overlay: "rgba(0,0,0,0.2)",

    // Brand light variants (solid for light bg)
    primaryLight:   brand.primaryLightSolid,
    secondaryLight: brand.secondaryLightSolid,
    dangerLight:    brand.dangerLightSolid,
    warningLight:   brand.warningLightSolid,
    accentLight:    brand.accentLightSolid,
  },
};
