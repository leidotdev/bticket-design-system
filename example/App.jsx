import { useState } from "react";
import { useTheme, Button, TextInput, Badge, Avatar, Toggle, Alert, StatsCard, Modal, ThemeToggle } from "./src";

export default function App() {
  const { mode, toggle } = useTheme("dark");
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen p-8 transition-colors duration-300" style={{ backgroundColor: "var(--bg-page)", color: "var(--text-primary)", fontFamily: "var(--font-sans)" }}>
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold m-0">My App</h1>
          <ThemeToggle mode={mode} toggle={toggle} />
        </div>

        <div className="flex gap-4 flex-wrap mb-6">
          <StatsCard title="USERS" value="1,234" change="+12%" icon="👤" />
          <StatsCard title="REVENUE" value="$45,678" change="+8.5%" icon="$" />
        </div>

        <div className="mb-6">
          <Alert variant="success" title="It works!">Your Tailwind design system is running. Toggle the theme above!</Alert>
        </div>

        <div className="flex gap-3 flex-wrap mb-6">
          <Button variant="primary" icon="search">Search</Button>
          <Button variant="secondary">Info</Button>
          <Button variant="outline">Cancel</Button>
          <Button variant="danger" icon="trash">Delete</Button>
        </div>

        <div className="max-w-xs mb-6"><TextInput placeholder="Search anything..." /></div>

        <div className="flex gap-3 mb-6">
          <Badge variant="success" dot>Active</Badge>
          <Badge variant="warning" dot>Pending</Badge>
          <Badge variant="danger" dot>Offline</Badge>
        </div>

        <div className="flex gap-3 mb-6">
          <Avatar name="Jerome H" size="lg" status="online" />
          <Avatar name="Alice B" size="lg" status="busy" />
        </div>

        <Toggle label="Dark mode is fun" checked />

        <div className="mt-6">
          <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
          <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Tailwind Modal"
            footer={<><Button variant="outline" onClick={() => setModalOpen(false)}>Cancel</Button><Button onClick={() => setModalOpen(false)}>Confirm</Button></>}>
            Press Escape to close. Toggle the theme while this is open!
          </Modal>
        </div>
      </div>
    </div>
  );
}
