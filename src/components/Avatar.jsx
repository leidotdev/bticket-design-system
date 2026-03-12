export function Avatar({ name, src, size = "md", status }) {
  const sizes = { xs: 24, sm: 32, md: 40, lg: 56, xl: 72 };
  const s = sizes[size];
  const initials = name ? name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase() : "?";
  const colors = ["var(--brand-primary)","var(--brand-secondary)","var(--brand-accent)","var(--brand-warning)","var(--brand-danger)"];
  const bg = colors[name ? name.charCodeAt(0) % colors.length : 0];
  const statusColors = { online: "var(--brand-success)", offline: "var(--text-muted)", busy: "var(--brand-danger)", away: "var(--brand-warning)" };
  return (
    <div className="relative shrink-0" style={{ width: s, height: s }}>
      {src ? <img src={src} alt={name} className="rounded-full object-cover" style={{ width: s, height: s }} />
        : <div className="rounded-full flex items-center justify-center text-white font-semibold font-sans" style={{ width: s, height: s, backgroundColor: bg, fontSize: s * 0.38 }}>{initials}</div>}
      {status && <div className="absolute bottom-0 right-0 rounded-full" style={{ width: s * 0.3, height: s * 0.3, backgroundColor: statusColors[status], border: "2px solid var(--bg-card)" }} />}
    </div>
  );
}
