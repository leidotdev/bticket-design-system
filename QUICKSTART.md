# Quick Start — 2 Minutes Setup

## Option 1: Copy into existing React project (fastest)

```bash
# 1. Clone or download
git clone https://github.com/YOUR_USERNAME/bticket-design-system.git

# 2. Copy the src/ folder into your project
cp -r bticket-design-system/src your-project/bticket-ds
```

Then in your code:

```jsx
import { useState } from "react";
import { buildTokens, ThemeContext, Button, Badge, Modal } from "./bticket-ds";

function App() {
  const [mode, setMode] = useState("dark");
  const tokens = buildTokens(mode);

  return (
    <ThemeContext.Provider value={tokens}>
      <div style={{ backgroundColor: tokens.colors.bgPage, minHeight: "100vh" }}>
        <Button variant="primary">Hello World</Button>
      </div>
    </ThemeContext.Provider>
  );
}
```

**That's it. Three lines to set up, then use any of the 25 components.**

---

## Option 2: Install as dependency (for multi-project reuse)

```bash
# From your project root
npm install github:YOUR_USERNAME/bticket-design-system
```

Then import:

```jsx
import { buildTokens, ThemeContext, Button } from "bticket-design-system/src";
```

---

## The 3 things you need to know

### 1. Wrap once with ThemeContext

At your app root, wrap everything with the theme provider:

```jsx
import { buildTokens, ThemeContext } from "./bticket-ds";

const tokens = buildTokens("dark"); // or "light"

<ThemeContext.Provider value={tokens}>
  <YourApp />
</ThemeContext.Provider>
```

### 2. Import and use components

Every component works out of the box — no extra config:

```jsx
import { Button, TextInput, Badge, Modal, Avatar, DataTable } from "./bticket-ds";

// Just use them
<Button variant="primary" icon="search">Search</Button>
<TextInput placeholder="Type here..." />
<Badge variant="success" dot>Active</Badge>
<Avatar name="John Doe" size="lg" status="online" />
```

### 3. Switch themes with one line

```jsx
const [mode, setMode] = useState("dark");
const tokens = buildTokens(mode); // rebuilds all tokens for that mode

// Toggle:
setMode(mode === "dark" ? "light" : "dark");
```

---

## Customize for your brand (optional)

Edit `src/tokens/brand.js` — change 2 lines:

```javascript
// Before (B-ticket green)
primary: palette.green500,
primaryHover: palette.green600,

// After (your brand blue)
primary: palette.blue500,
primaryHover: palette.blue600,
```

Every component updates automatically. No find-and-replace needed.

---

## All 25 components

### Form Controls
| Import | Usage |
|--------|-------|
| `Button` | `<Button variant="primary" icon="search">Click</Button>` |
| `TextInput` | `<TextInput placeholder="Search..." />` |
| `Textarea` | `<Textarea placeholder="Write..." rows={4} />` |
| `Select` | `<Select options={[{value:'a', label:'Option A'}]} />` |
| `Checkbox` | `<Checkbox label="Agree to terms" />` |
| `RadioGroup` | `<RadioGroup options={[{value:'a', label:'A'}]} />` |
| `Toggle` | `<Toggle label="Enable" checked />` |

### Feedback
| Import | Usage |
|--------|-------|
| `Alert` | `<Alert variant="success" title="Done!">Saved.</Alert>` |
| `ToastProvider` | `<ToastProvider>{(toast) => <Button onClick={() => toast('Hi!')}>Toast</Button>}</ToastProvider>` |
| `Modal` | `<Modal open={isOpen} onClose={close} title="Title">Content</Modal>` |
| `Progress` | `<Progress value={65} showLabel />` |
| `Spinner` | `<Spinner size="md" />` |
| `Skeleton` | `<Skeleton width="200px" height="20px" />` |

### Data Display
| Import | Usage |
|--------|-------|
| `Avatar` | `<Avatar name="John" size="lg" status="online" />` |
| `Badge` | `<Badge variant="success" dot>Active</Badge>` |
| `DataTable` | `<DataTable columns={cols} data={rows} />` |
| `StatsCard` | `<StatsCard title="USERS" value="1,234" change="+5%" />` |
| `Tabs` | `<Tabs tabs={[{label:'Tab 1', content: <div/>}]} />` |
| `Accordion` | `<Accordion items={[{title:'Q', content:'A'}]} />` |

### Navigation
| Import | Usage |
|--------|-------|
| `NavItem` | `<NavItem label="Dashboard" active badge="5" />` |
| `Breadcrumb` | `<Breadcrumb items={[{label:'Home'}, {label:'Page'}]} />` |
| `Pagination` | `<Pagination totalPages={10} />` |
| `Stepper` | `<Stepper steps={[{label:'Step 1', active:true}]} />` |
| `Tooltip` | `<Tooltip text="Hint"><Button>Hover</Button></Tooltip>` |
| `Divider` | `<Divider label="OR" />` |

### Utility
| Import | Usage |
|--------|-------|
| `ThemeToggle` | `<ThemeToggle mode={mode} setMode={setMode} />` |
| `Icon` | `<Icon name="search" size={20} />` |

---

## Available icons

search, x, check, chevronDown, chevronRight, chevronLeft, sun, moon, info, alertTriangle, checkCircle, xCircle, home, loader, user, copy, edit, trash, eye, sort

---

## Token access (for custom components)

```jsx
import { useTokens } from "./bticket-ds/hooks";

function MyCustomComponent() {
  const t = useTokens();

  return (
    <div style={{
      backgroundColor: t.colors.bgCard,
      color: t.colors.textPrimary,
      padding: t.spacing[4],
      borderRadius: t.radius.md,
      fontFamily: t.typography.fontFamily,
    }}>
      Custom component using design tokens
    </div>
  );
}
```

---

## File structure

```
src/
├── index.js            ← import everything from here
├── tokens/
│   ├── palette.js      ← raw colors (don't edit)
│   ├── brand.js        ← semantic roles (edit to rebrand)
│   ├── themes.js       ← dark/light surfaces
│   └── fixed.js        ← typography, spacing, radius
├── hooks/
│   └── useTokens.js    ← ThemeContext + useTokens()
└── components/
    ├── Button.jsx
    ├── Modal.jsx
    ├── ... (25 total)
    └── index.js         ← all component exports
```
