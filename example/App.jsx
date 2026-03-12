// ============================================================
// 🚀 QUICK START EXAMPLE
// Copy this file into your React project to see it working
// ============================================================

import { useState } from "react";

// Option A: Import from the design system folder
// import { buildTokens, ThemeContext, Button, TextInput, Badge, Avatar, Toggle, Alert, StatsCard, ThemeToggle } from './bticket-ds/src';

// Option B: If you copied files individually
// import { buildTokens } from './tokens';
// import { ThemeContext } from './hooks/useTokens';
// import { Button } from './components/Button';

// For this example, we'll use Option A
import {
  buildTokens,
  ThemeContext,
  Button,
  TextInput,
  Badge,
  Avatar,
  Toggle,
  Alert,
  StatsCard,
  Modal,
  ThemeToggle,
  Spinner,
} from "./src";

export default function App() {
  const [mode, setMode] = useState("dark");
  const [modalOpen, setModalOpen] = useState(false);
  const tokens = buildTokens(mode);

  return (
    // Step 1: Wrap with ThemeContext — that's it!
    <ThemeContext.Provider value={tokens}>
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: tokens.colors.bgPage,
          color: tokens.colors.textPrimary,
          fontFamily: tokens.typography.fontFamily,
          padding: "32px",
          transition: "background-color 0.25s ease",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
            <h1 style={{ margin: 0, fontSize: "24px" }}>My App</h1>
            <ThemeToggle mode={mode} setMode={setMode} />
          </div>

          {/* Stats */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "24px" }}>
            <StatsCard title="USERS" value="1,234" change="+12%" icon="👤" />
            <StatsCard title="REVENUE" value="$45,678" change="+8.5%" icon="$" />
            <StatsCard title="ORDERS" value="892" change="-2.1%" icon="📦" />
          </div>

          {/* Alert */}
          <div style={{ marginBottom: "24px" }}>
            <Alert variant="success" title="Welcome!">
              Your design system is working. All components inherit the current theme automatically.
            </Alert>
          </div>

          {/* Components demo */}
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px",
            backgroundColor: tokens.colors.bgCard,
            padding: "24px", borderRadius: "12px",
            border: `1px solid ${tokens.colors.borderSubtle}`,
          }}>
            {/* Left column */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <h3 style={{ margin: 0, fontSize: "14px", color: tokens.colors.textMuted, textTransform: "uppercase", letterSpacing: "1px" }}>Buttons</h3>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
              </div>

              <h3 style={{ margin: "8px 0 0", fontSize: "14px", color: tokens.colors.textMuted, textTransform: "uppercase", letterSpacing: "1px" }}>Input</h3>
              <TextInput placeholder="Search anything..." />

              <h3 style={{ margin: "8px 0 0", fontSize: "14px", color: tokens.colors.textMuted, textTransform: "uppercase", letterSpacing: "1px" }}>Toggle</h3>
              <Toggle label="Enable notifications" checked />
            </div>

            {/* Right column */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <h3 style={{ margin: 0, fontSize: "14px", color: tokens.colors.textMuted, textTransform: "uppercase", letterSpacing: "1px" }}>Badges</h3>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                <Badge variant="success" dot>Active</Badge>
                <Badge variant="warning" dot>Pending</Badge>
                <Badge variant="danger" dot>Offline</Badge>
              </div>

              <h3 style={{ margin: "8px 0 0", fontSize: "14px", color: tokens.colors.textMuted, textTransform: "uppercase", letterSpacing: "1px" }}>Avatars</h3>
              <div style={{ display: "flex", gap: "8px" }}>
                <Avatar name="Jerome H" size="md" status="online" />
                <Avatar name="Alice B" size="md" status="busy" />
                <Avatar name="Sam W" size="md" status="away" />
              </div>

              <h3 style={{ margin: "8px 0 0", fontSize: "14px", color: tokens.colors.textMuted, textTransform: "uppercase", letterSpacing: "1px" }}>Modal</h3>
              <Button variant="outline" onClick={() => setModalOpen(true)}>Open Modal</Button>
            </div>
          </div>

          {/* Modal */}
          <Modal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            title="It works!"
            footer={
              <>
                <Button variant="outline" onClick={() => setModalOpen(false)}>Cancel</Button>
                <Button onClick={() => setModalOpen(false)}>Confirm</Button>
              </>
            }
          >
            This modal uses your design tokens. Toggle the dark/light mode and watch everything update, including this modal!
          </Modal>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
