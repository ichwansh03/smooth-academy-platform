import { brand, copyright, footerColumns, socials } from "@/app/data/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-icon">{brand.icon}</div>
              <div className="logo-text">
                {brand.name}
                <span>{brand.accent}</span>
              </div>
            </div>
            <p>{brand.tagline}</p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title} className="footer-col">
              <h5>{column.title}</h5>
              {column.links.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <span>{copyright}</span>
          <div className="socials">
            {socials.map((social) => (
              <a key={social.label} href={social.href} aria-label={social.label}>
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
