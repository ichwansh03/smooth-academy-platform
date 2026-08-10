import { brand, headerActions, navLinks } from "@/app/data/content";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <div className="logo-icon">{brand.icon}</div>
        <div className="logo-text">
          {brand.name}
          <span>{brand.accent}</span>
        </div>
      </div>

      <nav className="nav">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={link.active ? "active" : undefined}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="actions">
        {headerActions.map((action) => (
          <button key={action.label} type="button" className="btn">
            {action.label}
          </button>
        ))}
      </div>
    </header>
  );
}
