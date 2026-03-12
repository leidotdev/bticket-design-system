# Color Mapping Quick Reference

## Common Brand-to-Palette Mappings

When users describe their brand color in words, map them to the appropriate palette shade:

| User Says | Map To | Hex |
|-----------|--------|-----|
| "Blue" | palette.blue500 | #3B82F6 |
| "Dark blue" | palette.blue700 | #1D4ED8 |
| "Light blue" | palette.blue400 | #60A5FA |
| "Green" | palette.green500 | #22C55E |
| "Dark green" | palette.green700 | #15803D |
| "Red" | palette.red500 | #EF4444 |
| "Orange" | palette.orange500 | #F97316 |
| "Purple" | palette.purple500 | #8B5CF6 |
| "Dark purple" | palette.purple700 | #6D28D9 |

## Custom Hex Colors

If user provides a hex code not in the palette (e.g., "#FF6B35"):

1. Add it to the palette:
```javascript
palette.customBrand = "#FF6B35";
palette.customBrandDark = "#E55A2B";  // darken ~10%
```

2. Compute light variants:
```javascript
// Extract R, G, B from hex
// Dark mode light: rgba(R, G, B, 0.12)
// Light mode solid: mix 8% color with white
```

3. Assign to semantic:
```javascript
brand.primary = palette.customBrand;
brand.primaryHover = palette.customBrandDark;
brand.primaryLight = "rgba(255, 107, 53, 0.12)";
brand.primaryLightSolid = "#FFF0EB";
```

## Hover Color Generation

For any primary color, the hover should be one shade darker:
- X50 → X100 hover
- X100 → X200 hover
- X200 → X300 hover
- X300 → X400 hover
- X400 → X500 hover
- X500 → X600 hover (most common — this is the default)
- X600 → X700 hover
- X700 → X800 hover

## Popular Font Pairings

| Style | Display Font | Body Font | Mono Font |
|-------|-------------|-----------|-----------|
| Modern SaaS | DM Sans | DM Sans | JetBrains Mono |
| Clean Tech | Inter | Inter | Fira Code |
| Elegant | Outfit | Plus Jakarta Sans | Source Code Pro |
| Bold | Sora | Nunito Sans | IBM Plex Mono |
| Friendly | Quicksand | Lato | Inconsolata |
| Editorial | Playfair Display | Source Sans 3 | Courier Prime |
| Minimal | Geist | Geist | Geist Mono |

## Google Fonts Import Template

```html
<link href="https://fonts.googleapis.com/css2?family=FONTNAME:wght@400;500;600;700&display=swap" rel="stylesheet">
```

In React (useEffect):
```javascript
useEffect(() => {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=FONTNAME:wght@400;500;600;700&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
}, []);
```
