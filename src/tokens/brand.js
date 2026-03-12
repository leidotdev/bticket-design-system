// ============================================================
// 🔀 LAYER 2: SEMANTIC TOKENS
// ✅ CHANGE THESE PER PROJECT to rebrand
// ============================================================

import { palette } from './palette';

export const brand = {
  // Primary — Main action color
  primary:          palette.green500,
  primaryHover:     palette.green600,
  primaryLight:     "rgba(34, 197, 94, 0.12)",
  primaryLightSolid: palette.green50,

  // Secondary
  secondary:          palette.blue500,
  secondaryHover:     palette.blue600,
  secondaryLight:     "rgba(59, 130, 246, 0.12)",
  secondaryLightSolid: palette.blue50,

  // Danger
  danger:          palette.red500,
  dangerHover:     palette.red600,
  dangerLight:     "rgba(239, 68, 68, 0.12)",
  dangerLightSolid: palette.red50,

  // Warning
  warning:          palette.orange500,
  warningHover:     palette.orange600,
  warningLight:     "rgba(249, 115, 22, 0.12)",
  warningLightSolid: palette.orange50,

  // Accent
  accent:          palette.purple500,
  accentHover:     palette.purple600,
  accentLight:     "rgba(139, 92, 246, 0.12)",
  accentLightSolid: palette.purple50,

  // Status
  success: palette.green500,
  info:    palette.blue500,
  badge:   palette.red500,
};
