import { Link } from "react-router-dom";
import { brand, footerColumns, year } from "../data/content";
import Logo from "./Logo";

function SocialIcon({ name }) {
  if (name === "Facebook") {
    return <path fill="currentColor" d="M14.8 8.4h-2V7.3c0-.4.3-.6.6-.6h1.3V4.6l-1.8-.1c-2 0-2.5 1.5-2.5 2.5v1.4H8.6v2.3h1.8V19h2.5v-8.3h1.7l.2-2.3z" />;
  }
  if (name === "X") {
    return <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />;
  }
  if (name === "Instagram") {
    return (
      <>
        <rect x="5" y="5" width="14" height="14" rx="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="3.1" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="16.4" cy="7.6" r="0.8" fill="currentColor" />
      </>
    );
  }
  if (name === "LinkedIn") {
    return <path d="M7 10v7M7 7.1h.01M11 17v-4a2 2 0 114 0v4M11 10v7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />;
  }
  return (
    <>
      <rect x="4" y="7" width="16" height="11" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M11 10.2v4.2l3.6-2.1L11 10.2z" fill="currentColor" />
    </>
  );
}

const socials = ["Facebook", "X", "Instagram", "LinkedIn", "YouTube"];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Link to="/" aria-label="SRK Zenithvision home">
            <Logo />
          </Link>
          <p className="footer-note">
            Architecting sovereign prestige, next-generation enterprise technology, and bespoke intelligence solutions across global ecosystems.
          </p>
          <div className="socials" aria-label="Social">
            {socials.map((name) => (
              <span key={name} aria-label={name} role="img">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <SocialIcon name={name} />
                </svg>
              </span>
            ))}
          </div>
        </div>
        {footerColumns.map((column) => (
          <div className="footer-col" key={column.title}>
            <p className="footer-title">{column.title}</p>
            <div className="footer-links">
              {column.links.map((item) => (
                <Link className={item.accent ? "is-accent" : undefined} key={item.label} to={item.to}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="wrap footer-bottom">
        <span>Copyright© {year} {brand.name}. All rights reserved.</span>
        <span className="footer-legal">
          <Link to="/contact">Term of use</Link>
          <Link to="/contact">Privacy Policy</Link>
          <Link to="/contact">Cookie Policy</Link>
        </span>
      </div>
    </footer>
  );
}
