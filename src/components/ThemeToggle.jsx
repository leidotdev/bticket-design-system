import { Icon } from "./Icon";
export function ThemeToggle({ mode, setMode, toggle }) {
  const handleClick = toggle || (() => setMode?.(mode === "dark" ? "light" : "dark"));
  return (
    <button onClick={handleClick}
      className="flex items-center gap-2 px-3.5 py-2 rounded-full cursor-pointer text-xs font-medium transition-all duration-300 font-sans"
      style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-default)", color: "var(--text-primary)" }}>
      <Icon name={mode === "dark" ? "sun" : "moon"} size={18} />
      {mode === "dark" ? "Light" : "Dark"}
    </button>
  );
}
