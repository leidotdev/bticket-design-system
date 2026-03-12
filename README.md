# B-ticket Design System — Tailwind CSS Edition

A token-based React + Tailwind component library with **25 components**, dark/light mode, and zero runtime overhead.

![Components](https://img.shields.io/badge/components-25-green)
![Tailwind](https://img.shields.io/badge/tailwind-CSS-blue)
![Dark Mode](https://img.shields.io/badge/dark%20mode-class%20strategy-purple)
![Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)
![Setup](https://img.shields.io/badge/setup-2%20minutes-blue)

---

## ⚡ 2-Minute Setup

### 1. Copy files

```bash
git clone https://github.com/YOUR_USERNAME/bticket-design-system.git
cp -r bticket-design-system/src your-project/bticket-ds
cp bticket-design-system/tailwind.config.js your-project/
```

### 2. Import the CSS

In your main CSS file (e.g., `globals.css` or `index.css`):

```css
@import './bticket-ds/styles/globals.css';
```

### 3. Use components

```jsx
import { useTheme, Button, Badge, ThemeToggle } from "./bticket-ds";

function App() {
  const { mode, toggle } = useTheme("dark");

  return (
    <div className="min-h-screen bg-page text-txt font-sans">
      <ThemeToggle mode={mode} toggle={toggle} />
      <Button variant="primary" icon="search">Search</Button>
      <Badge variant="success" dot>Active</Badge>
    </div>
  );
}
```

**That's it. No context providers. No build step. Just import and use.**

---

## How It Works

```
globals.css          → CSS custom properties (tokens)
  ↓                    .dark class swaps all values
tailwind.config.js   → Maps CSS vars to Tailwind classes
  ↓                    bg-primary → var(--brand-primary)
Components           → Standard Tailwind utility classes
                       No dark: prefix needed!
```

**Why no `dark:` prefix?** Because CSS variables auto-switch when `.dark` is on the root element. Write your styles once, they work in both themes.

---

## Dark Mode

Uses Tailwind's `class` strategy. The `useTheme` hook handles everything:

```jsx
const { mode, toggle, isDark } = useTheme("dark");

// Toggle with a button:
<ThemeToggle mode={mode} toggle={toggle} />

// Or toggle manually:
<button onClick={toggle}>Switch theme</button>
```

---

## Customize Brand Colors

Edit `src/styles/globals.css` — change the brand section:

```css
:root {
  --brand-primary: #3B82F6;       /* was #22C55E (green) → now blue */
  --brand-primary-hover: #2563EB;
}
```

Every component updates instantly. No find-and-replace.

---

## Components (25)

### Form Controls
`Button` · `TextInput` · `Textarea` · `Select` · `Checkbox` · `RadioGroup` · `Toggle`

### Feedback
`Alert` · `ToastProvider` · `Modal` (with Escape key!) · `Progress` · `Spinner` · `Skeleton`

### Data Display
`Avatar` · `Badge` · `DataTable` · `StatsCard` · `Tabs` · `Accordion`

### Navigation
`NavItem` · `Breadcrumb` · `Pagination` · `Stepper` · `Tooltip` · `Divider`

### Utility
`ThemeToggle` · `Icon` (20+ icons) · `useTheme` hook

> See [QUICKSTART.md](QUICKSTART.md) for every component with copy-paste examples.

---

## File Structure

```
bticket-design-system/
├── tailwind.config.js          ← Extend your Tailwind with our tokens
├── src/
│   ├── index.js                ← Import everything from here
│   ├── styles/
│   │   └── globals.css         ← CSS custom properties (tokens + themes)
│   ├── hooks/
│   │   └── useTheme.js         ← Dark/light toggle (no context needed)
│   └── components/
│       ├── Button.jsx           ... 25 components
│       └── index.js            ← All exports
├── example/
│   └── App.jsx                 ← Working demo
├── QUICKSTART.md               ← Developer guide
├── CHEATSHEET.md               ← One-page reference
└── skill/                      ← Claude AI skill
```

---

## vs. v4 (inline styles)

| | v4 (inline) | v5 (Tailwind) |
|---|---|---|
| Styling | `style={{ backgroundColor: t.colors.primary }}` | Tailwind classes + CSS vars |
| Theme | `ThemeContext.Provider` wrapper required | Just add `.dark` class |
| Hook | `useTokens()` in every component | `useTheme()` once at root |
| Bundle | Inline styles in JS | CSS utility classes |
| Developer DX | Custom API to learn | Standard Tailwind |

---

## License

MIT
