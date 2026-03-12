# Quick Start — Tailwind Edition

## Setup

### Step 1: Copy the design system

```bash
cp -r bticket-design-system/src your-project/bticket-ds
```

### Step 2: Extend your Tailwind config

Merge our config into yours, or copy `tailwind.config.js`:

```javascript
// your tailwind.config.js
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: 'var(--brand-primary)', hover: 'var(--brand-primary-hover)', light: 'var(--primary-light)' },
        // ... see tailwind.config.js for full list
      },
      fontFamily: { sans: ['DM Sans', 'sans-serif'], mono: ['JetBrains Mono', 'monospace'] },
    }
  }
}
```

### Step 3: Import the CSS

```css
/* In your main CSS file */
@import './bticket-ds/styles/globals.css';
```

### Step 4: Use it!

```jsx
import { useTheme, Button, Badge } from "./bticket-ds";

function App() {
  const { mode, toggle } = useTheme("dark");
  return (
    <div className="min-h-screen bg-page text-txt">
      <Button variant="primary">Hello!</Button>
    </div>
  );
}
```

---

## All Components — Copy-Paste Examples

### Button
```jsx
<Button variant="primary">Save</Button>
<Button variant="danger" icon="trash">Delete</Button>
<Button variant="outline" size="lg">Cancel</Button>
<Button disabled>Can't click</Button>
```
Variants: `primary` `secondary` `danger` `warning` `accent` `outline` `ghost`
Sizes: `sm` `md` `lg`

### TextInput
```jsx
<TextInput placeholder="Search..." />
<TextInput hasIcon={false} placeholder="No icon" />
<TextInput disabled />
```

### Select
```jsx
<Select options={[{value:'a', label:'Option A'}, {value:'b', label:'Option B'}]} />
```

### Toggle
```jsx
<Toggle label="Enable notifications" checked />
<Toggle size="lg" label="Big toggle" />
```

### Alert
```jsx
<Alert variant="success" title="Saved!">Changes applied.</Alert>
<Alert variant="danger" title="Error" dismissible>Something broke.</Alert>
```

### Modal
```jsx
const [open, setOpen] = useState(false);
<Button onClick={() => setOpen(true)}>Open</Button>
<Modal open={open} onClose={() => setOpen(false)} title="Title"
  footer={<Button onClick={() => setOpen(false)}>OK</Button>}>
  Content here. Press Escape to close!
</Modal>
```

### Toast
```jsx
<ToastProvider>
  {(toast) => (
    <Button onClick={() => toast("Saved!", "success")}>Show Toast</Button>
  )}
</ToastProvider>
```

### Avatar
```jsx
<Avatar name="Jerome H" size="lg" status="online" />
```

### Badge
```jsx
<Badge variant="success" dot>Active</Badge>
<Badge variant="primary" removable>Tag</Badge>
```

### DataTable
```jsx
<DataTable
  columns={[{key:'name', label:'Name'}, {key:'role', label:'Role'}]}
  data={[{name:'Jerome', role:'Admin'}, {name:'Alice', role:'User'}]}
/>
```

### Dark Mode
```jsx
const { mode, toggle, isDark } = useTheme("dark");
<ThemeToggle mode={mode} toggle={toggle} />
```
