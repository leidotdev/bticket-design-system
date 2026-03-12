#!/bin/bash

# ============================================================
# B-ticket Design System — Quick Setup
# Run: bash setup.sh /path/to/your/react-project
# ============================================================

set -e

TARGET_DIR="${1:-.}"
DS_DIR="$TARGET_DIR/bticket-ds"

echo ""
echo "🎨 B-ticket Design System — Quick Setup"
echo "========================================="
echo ""

# Check if target exists
if [ ! -d "$TARGET_DIR" ]; then
  echo "❌ Directory not found: $TARGET_DIR"
  echo "   Usage: bash setup.sh /path/to/your/react-project"
  exit 1
fi

# Copy design system
echo "📁 Copying design system to $DS_DIR..."
mkdir -p "$DS_DIR"
cp -r src/* "$DS_DIR/"

echo "✅ Files copied!"
echo ""
echo "📋 Next steps:"
echo ""
echo "   1. Import in your app:"
echo ""
echo "      import { buildTokens, ThemeContext, Button } from './bticket-ds';"
echo ""
echo "   2. Wrap your app:"
echo ""
echo "      const tokens = buildTokens('dark');"
echo "      <ThemeContext.Provider value={tokens}>"
echo "        <YourApp />"
echo "      </ThemeContext.Provider>"
echo ""
echo "   3. Use any of the 25 components:"
echo ""
echo "      <Button variant='primary'>Click me</Button>"
echo ""
echo "🎉 Done! See QUICKSTART.md for full docs."
echo ""
