"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { brand, headerActions, navLinks } from "@/app/data/content";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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

      <nav className={menuOpen ? "nav open" : "nav"}>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={link.active ? "active" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="header-right">
        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div className="actions">
          {headerActions.map((action) => (
            <Link
              key={action.label}
              href="/login"
              className="btn"
              onClick={() => setMenuOpen(false)}
            >
              {action.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}