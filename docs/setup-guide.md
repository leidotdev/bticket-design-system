# Setup Guide

## For First-Time Users (No Coding Experience)

### What You Need
- A GitHub account (free at github.com)
- This repo uploaded to GitHub

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** button (top right) → **New repository**
3. Name it: `bticket-design-system`
4. Set to **Public** or **Private** (your choice)
5. Click **Create repository**

### Step 2: Upload Files

**Easiest method (no terminal needed):**
1. On your new repo page, click **"uploading an existing file"**
2. Drag and drop ALL files from this folder
3. Click **Commit changes**

**If using terminal (more advanced):**
```bash
cd bticket-design-system
git init
git add .
git commit -m "Initial commit: B-ticket design system v4"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/bticket-design-system.git
git push -u origin main
```

### Step 3: Use with Claude

1. Go to [claude.ai](https://claude.ai)
2. Create a **new Project** (left sidebar → Projects → New)
3. In the project, click **Add knowledge**
4. Upload the `skill/` folder contents (SKILL.md + references/)
5. Optionally upload `src/bticket-design-system.jsx` too
6. Start a new chat in the project and say: **"Build me a dashboard page"**
7. Claude will run the Setup Wizard (colors → fonts → icons) then generate code using your design system!

---

## For Developers

### Using in a React Project

**Option A: Single file (simplest)**
```bash
# Copy the design system file into your project
cp src/bticket-design-system.jsx your-project/src/design-system.jsx
```

**Option B: Import tokens separately**
```javascript
import { buildTokens, palette, brand } from './tokens/tokens.js';

const tokens = buildTokens("dark"); // or "light"
console.log(tokens.colors.primary); // "#22C55E"
```

**Option C: CSS Custom Properties (non-React)**
```javascript
import { tokensToCSSVars } from './tokens/tokens.js';

const vars = tokensToCSSVars("dark");
// Returns: { "--color-primary": "#22C55E", "--font-family": "DM Sans...", ... }

// Apply to :root
Object.entries(vars).forEach(([key, val]) => {
  document.documentElement.style.setProperty(key, val);
});
```

Then use in CSS:
```css
.button {
  background-color: var(--color-primary);
  font-family: var(--font-family);
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--radius-md);
}
```

### Customizing for Your Brand

1. Open `src/tokens/tokens.js`
2. Change the `brand` object:
```javascript
export const brand = {
  primary: palette.blue500,      // ← your primary color
  primaryHover: palette.blue600,  // ← one shade darker
  // ... rest stays the same
};
```
3. Change fonts in `fixed.typography`:
```javascript
fontFamily: "'Inter', sans-serif",
```

### Adding New Components

Follow this pattern — every component must use `useTokens()`:

```jsx
function MyNewComponent({ label }) {
  const t = useTokens();
  return (
    <div style={{
      backgroundColor: t.colors.bgCard,        // ← token, not hardcoded
      color: t.colors.textPrimary,              // ← token
      padding: t.spacing[4],                     // ← token
      borderRadius: t.radius.md,                 // ← token
      fontFamily: t.typography.fontFamily,        // ← token
      fontSize: t.typography.fontSize.base,       // ← token
      border: `1px solid ${t.colors.borderSubtle}`, // ← token
    }}>
      {label}
    </div>
  );
}
```

**Rules:**
- Never use raw color values (like `"#22C55E"`) — always reference tokens
- Never use raw pixel values for spacing — use `t.spacing[N]`
- Always handle dark + light mode (automatic if using tokens)
- Add disabled states using `t.colors.bgDisabled` and `t.colors.textDisabled`

---

## Updating the Design System

When you change something in Figma and want to update the code:

1. Open a new Claude chat (inside your project)
2. Paste the updated Figma link
3. Say: "Update my design system to match this"
4. Claude will identify what changed and update only the relevant tokens or components
5. Copy the updated file(s) back to this repo
6. Commit and push to GitHub

---

## FAQ

**Q: Do I need Node.js or npm?**
A: No! The design system is a single JSX file with zero dependencies. Just copy it into any React project.

**Q: Can I use this with Vue/Svelte/vanilla JS?**
A: The components are React-specific, but the tokens (`tokens.js`) work anywhere. Use `tokensToCSSVars()` for CSS custom properties in any framework.

**Q: How do I add a color that's not in the palette?**
A: Add it to the palette object:
```javascript
palette.myBrand = "#FF6B35";
palette.myBrandDark = "#E55A2B";
```
Then assign it: `primary: palette.myBrand`

**Q: Will my code auto-update when I change Figma?**
A: Not automatically. But with the token architecture, updates are usually just changing 1-2 values. See "Updating the Design System" above.
