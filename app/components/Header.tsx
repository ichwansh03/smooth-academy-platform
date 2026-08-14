import Image from "next/image";
import Link from "next/link";
import { brand, headerActions, navLinks } from "@/app/data/content";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <div className="logo-icon">
          <Image
            src="/smooth_logo.jpeg"
            alt={`${brand.name} ${brand.accent} logo`}
            width={48}
            height={48}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
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
          <Link key={action.label} href="/login" className="btn">
            {action.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
