# B-ticket Design System

A token-based, theme-aware React component library with **25 components**, dark/light mode, and a 3-layer architecture.

Built for reuse across projects — change your brand colors in one place, everything updates.

![Components](https://img.shields.io/badge/components-25-green)
![Themes](https://img.shields.io/badge/themes-dark%20%2B%20light-blue)
![Tokens](https://img.shields.io/badge/architecture-token--based-purple)
![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)
![Setup Time](https://img.shields.io/badge/setup-2%20minutes-blue)

---

## ⚡ 2-Minute Setup

```bash
# Clone it
git clone https://github.com/YOUR_USERNAME/bticket-design-system.git

# Copy into your React project
cp -r bticket-design-system/src your-project/bticket-ds

# Or use the setup script
bash bticket-design-system/setup.sh /path/to/your-project
```

Then in your React code — **3 lines and you're done:**

```jsx
import { useState } from "react";
import { buildTokens, ThemeContext, Button, Badge, Modal } from "./bticket-ds";

function App() {
  const [mode, setMode] = useState("dark");
  const tokens = buildTokens(mode);

  return (
    <ThemeContext.Provider value={tokens}>
      <Button variant="primary" icon="search">Search</Button>
      <Badge variant="success" dot>Active</Badge>
    </ThemeContext.Provider>
  );
}
```

**Zero dependencies. Zero build step. Just copy and import.**

> 📖 See [QUICKSTART.md](QUICKSTART.md) for the full developer guide with all 25 component examples.

---

## Architecture

```
Layer 1: Base Palette       → Raw colors (green50–900, red, blue, etc.)
Layer 2: Semantic Tokens    → brand{primary, danger...} + themes{dark, light}
Layer 3: Fixed Tokens       → Typography, spacing, radius (never changes)
         ↓
     Components             → All 25 components read tokens via useTokens()
```

**To rebrand for a new project**, you only change Layer 2:
```javascript
// Project A (B-ticket) — green brand
primary: palette.green500

// Project B (different brand) — blue brand
primary: palette.blue500
```

Every button, card, input, and nav item updates automatically.

---

## Components (25)

### Form Controls
| Component | Description |
|-----------|-------------|
| `Button` | 7 variants, 3 sizes, icon support, disabled |
| `TextInput` | Search input with icon, focus, disabled |
| `Textarea` | Multi-line input |
| `Select` | Dropdown with options |
| `Checkbox` | Check, uncheck, indeterminate |
| `RadioGroup` | Single-choice selection |
| `Toggle` | On/off switch, 3 sizes |

### Feedback
| Component | Description |
|-----------|-------------|
| `Alert` | Info, success, warning, danger banners |
| `Toast` | Temporary notification popups |
| `Modal` | Dialog overlays with header/footer |
| `Progress` | Progress bar with variants |
| `Spinner` | Loading animation |
| `Skeleton` | Loading placeholder shapes |

### Data Display
| Component | Description |
|-----------|-------------|
| `Avatar` | Initials, sizes, status indicators |
| `Badge` | Labels/tags with dot, removable |
| `DataTable` | Sortable, striped data table |
| `StatsCard` | Dashboard metric cards |
| `Tabs` | Tab navigation |
| `Accordion` | Collapsible sections |

### Navigation
| Component | Description |
|-----------|-------------|
| `NavItem` | Sidebar nav with badges |
| `Breadcrumb` | Navigation path |
| `Pagination` | Page navigation |
| `Stepper` | Multi-step indicator |
| `Tooltip` | Hover hints |
| `Divider` | Visual separator |

---

## Quick Start

### Option 1: Copy the component file
Copy `src/bticket-design-system.jsx` into your React project. It's a single self-contained file — no external dependencies required.

### Option 2: Use with Claude AI
Upload the `skill/` folder as a Claude skill. Claude will walk you through a 3-step setup wizard (colors → fonts → icons) before generating code matched to your brand.

---

## Customization

### Change Brand Colors
Edit the `brand` object in the design system file:

```javascript
const brand = {
  primary:      palette.blue500,    // ← change this
  primaryHover: palette.blue600,    // ← one shade darker
  // ...
};
```

### Change Fonts
Edit the `fixed.typography` object:

```javascript
fontFamily: "'Inter', sans-serif",          // ← your font
fontFamilyMono: "'Fira Code', monospace",   // ← your mono font
```

### Add Custom Colors
Add to the palette, then assign:

```javascript
palette.brand = "#FF6B35";
palette.brandDark = "#E55A2B";

// Then in brand:
primary: palette.brand,
primaryHover: palette.brandDark,
```

---

## Dark / Light Mode

All components support both themes. Wrap your app with the theme provider:

```jsx
const [mode, setMode] = useState("dark");
const tokens = buildTokens(mode);

<ThemeContext.Provider value={tokens}>
  <YourApp />
</ThemeContext.Provider>
```

Toggle with:
```jsx
setMode(mode === "dark" ? "light" : "dark");
```

---

## Using Components

Every component uses the `useTokens()` hook internally — no props needed for theming:

```jsx
// Just use them — theming is automatic
<Button variant="primary" icon="search">Search</Button>
<TextInput placeholder="Type here..." />
<Badge variant="success" dot>Active</Badge>
<Avatar name="Jerome H" size="lg" status="online" />
```

---

## File Structure

```
bticket-design-system/
├── README.md
├── src/
│   ├── bticket-design-system.jsx    ← Full design system (single file)
│   ├── tokens/
│   │   └── tokens.js                ← Tokens only (for advanced use)
│   └── components/
│       └── index.js                 ← Component exports (for advanced use)
├── skill/
│   ├── SKILL.md                     ← Claude AI skill definition
│   └── references/
│       ├── component-template.md    ← Full component template
│       └── color-mapping.md         ← Color mapping reference
├── docs/
│   └── setup-guide.md              ← Detailed setup instructions
└── .gitignore
```

---

## Claude AI Skill

The `skill/` folder contains a Claude skill that automates the setup process. When installed in a Claude Project:

1. **Step 1 — Colors** 🎨 Choose your brand colors
2. **Step 2 — Typography** 🔤 Pick your fonts
3. **Step 3 — Icons** 🎯 Choose icon approach

Claude then generates a customized version of the design system matching your brand.

---

## Inspired By

Built by studying patterns from 5 top design systems:

- **Shadcn/ui** — Clean, composable React
- **Material UI** — Google's comprehensive system
- **Ant Design** — Enterprise-grade components
- **Chakra UI** — Developer-friendly, accessible
- **Radix UI** — Unstyled accessible primitives

---

## License

MIT — use freely in personal and commercial projects.
