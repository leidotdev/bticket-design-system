---
name: bticket-design-system
description: "Set up and apply the B-ticket token-based design system to any project. Use this skill whenever the user asks to: create a new UI project, build React components, set up a design system, create a dashboard, build a web app interface, generate frontend code, apply brand tokens, or scaffold a new design. Also trigger when the user shares a Figma link and wants code generated, or says 'use my design system', 'apply my tokens', 'build with my components', or mentions B-ticket. This skill MUST be used before writing any UI code to ensure consistency. Always run the Setup Wizard (Step 1-3) before generating components."
---

# B-ticket Design System Skill

A token-based, theme-aware component library with 25 components, dark/light mode, and a 3-layer architecture: Base Palette → Semantic Tokens → Components.

## When to Use This Skill

- User wants to build any UI (pages, dashboards, components, apps)
- User shares a Figma link and wants code
- User asks for consistent, reusable frontend code
- User mentions "design system", "tokens", "components", or "B-ticket"
- User starts a new project that needs UI

## ⚡ Setup Wizard — ALWAYS Run This First

Before generating any components, you MUST walk the user through these 3 setup steps. This ensures the design system matches their project's brand.

### Step 1: Colors 🎨

Ask the user to define their project's color assignments. Show them the base palette available, then ask which colors map to which roles.

**Base palette available** (full scales from 50-900):
- Green, Red, Orange, Purple, Blue, Neutral

**Semantic roles to assign:**
```
primary      → (default: green500)  — Main action color
secondary    → (default: blue500)   — Secondary actions
danger       → (default: red500)    — Destructive actions
warning      → (default: orange500) — Caution states
accent       → (default: purple500) — Highlight/accent
success      → (default: green500)  — Success states
info         → (default: blue500)   — Informational
badge        → (default: red500)    — Notification badges
```

**How to ask the user:**
1. Ask: "What's your primary brand color?" — If they provide a hex code not in the palette, add it. If they name a color (e.g., "blue"), map to the appropriate palette shade.
2. Ask if they want to customize secondary, danger, warning, accent — or keep defaults.
3. If a Figma link is available, try to pull colors from Figma using `Figma:get_design_context` or `Figma:get_variable_defs` tools.
4. Confirm the final color mapping before proceeding.

**If user says "just use defaults"** → Use the B-ticket defaults and move to Step 2.

### Step 2: Typography 🔤

Ask the user about their font preferences.

**Decisions needed:**
```
fontFamily     → (default: 'DM Sans', 'Segoe UI', sans-serif)
fontFamilyMono → (default: 'JetBrains Mono', monospace)
```

**How to ask:**
1. Ask: "What font does your project use?" — Accept Google Fonts names, system fonts, or custom fonts.
2. If they provide a Google Font, include the import in the generated code.
3. Ask if they need a monospace font for code/data displays.
4. Font sizes, weights, and line heights are FIXED across all projects (do not change):
   - Sizes: xs(10), sm(12), base(14), md(16), lg(20), xl(24), 2xl(32), 3xl(40)
   - Weights: regular(400), medium(500), semibold(600), bold(700)
   - Line heights: tight(1.2), normal(1.5), relaxed(1.75)

**If user says "just use defaults"** → Use DM Sans + JetBrains Mono.

### Step 3: Icons 🎯

Ask the user which icon approach they prefer.

**Options:**
1. **Inline SVG** (default) — Icons are embedded as SVG in the code. Zero dependencies. Best for small projects.
2. **Lucide React** — `import { Icon } from "lucide-react"`. Clean, consistent icon set. Best for React projects.
3. **Custom icons** — User provides their own icon set or Figma icon components.

**Built-in icon names** (available with inline SVG):
search, x, check, chevronDown, chevronRight, chevronLeft, sun, moon, info, alertTriangle, checkCircle, xCircle, home, loader, user, copy, edit, trash, eye, sort

**How to ask:**
1. Ask: "Do you want to use inline SVG icons (no dependencies), Lucide React, or your own custom icons?"
2. If Lucide: ensure `lucide-react` is in their dependencies.
3. If custom: ask for the icon names/components they use for common actions (search, close, check, arrow, etc.)

**If user says "just use defaults"** → Use inline SVG.

---

## After Setup: Generate the Design System

Once Steps 1-3 are confirmed, generate the design system file using the template in `references/component-template.md`.

**Generation rules:**
1. Replace ALL color values in `brand` object with user's choices from Step 1
2. Replace font families in `fixed.typography` with user's choices from Step 2
3. Replace the Icon component approach based on user's choice from Step 3
4. Keep ALL other values (spacing, radius, shadows, transitions) exactly as-is
5. Keep ALL 25 components exactly as they are — they reference tokens, not raw values
6. Output as a single `.jsx` file

**The 3-layer token architecture (never change this structure):**
```
Layer 1: Base Palette      → Raw color values (never changes)
Layer 2: Semantic Tokens   → brand{} + themes{dark, light} (changes per project)
Layer 3: Fixed Tokens      → typography, spacing, radius (never changes)
```

## Component Reference

The full component template with 25 components is in `references/component-template.md`. Read this file when generating the design system.

**Component inventory (25 total):**

### Form Controls (7)
| Component | Props | Inspired By |
|-----------|-------|-------------|
| Button | variant, size, icon, iconRight, disabled | Shadcn + Radix |
| TextInput | placeholder, disabled, hasIcon, type | Shadcn + Chakra |
| Textarea | placeholder, disabled, rows | Chakra + Shadcn |
| Select | options, placeholder, value, disabled | Shadcn + Radix |
| Checkbox | checked, indeterminate, label | Shadcn |
| RadioGroup | options, value, name | Radix + Shadcn |
| Toggle | checked, label, size, disabled | Shadcn + Radix |

### Feedback (6)
| Component | Props | Inspired By |
|-----------|-------|-------------|
| Alert | title, children, variant, dismissible | Shadcn + Chakra |
| ToastProvider | children(addToast) | Sonner |
| Modal | open, onClose, title, children, footer, size | Shadcn + Radix |
| Progress | value, variant, size, showLabel | Chakra + Ant |
| Spinner | size, color | MUI + Chakra |
| Skeleton | width, height, rounded | Shadcn + MUI |

### Data Display (6)
| Component | Props | Inspired By |
|-----------|-------|-------------|
| Avatar | name, src, size, status | Chakra + MUI |
| Badge | children, variant, size, dot, removable | Shadcn + Ant |
| DataTable | columns, data, striped | Ant + MUI + Shadcn |
| StatsCard | title, value, change, changeLabel, icon | Original |
| Tabs | tabs, defaultActive | Radix + Shadcn |
| Accordion | items | Shadcn + Radix |

### Navigation (6)
| Component | Props | Inspired By |
|-----------|-------|-------------|
| NavItem | label, active, badge, icon | Original |
| Breadcrumb | items | Ant + MUI |
| Pagination | — | Original |
| Stepper | steps | Original |
| Tooltip | children, text, position | Radix |
| Divider | label | Chakra + MUI |

## Building Pages

When the user asks to build a page (dashboard, settings, login, etc.):

1. **Check if setup is done** — If the token file hasn't been generated yet, run the Setup Wizard first.
2. **Import from the design system** — All pages should use the components above. Never write raw HTML/CSS for elements that have a component equivalent.
3. **Use tokens for any custom styling** — Any page-specific styles should reference `useTokens()`, never hardcoded values.
4. **Theme support** — All pages must work in both dark and light mode. Use `ThemeContext.Provider` at the root.

## Quick Start (for experienced users)

If the user says "skip setup" or "use defaults":
- Colors: green primary, blue secondary, standard danger/warning/accent
- Fonts: DM Sans + JetBrains Mono
- Icons: Inline SVG
- Generate the full design system immediately from the template.
