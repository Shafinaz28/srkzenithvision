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
      <a
        className="whatsapp-float"
        href={`https://wa.me/${brand.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with SRK Zenithvision on WhatsApp"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true"        >
          <path
            fill="currentColor"
            d="M12.04 2a9.87 9.87 0 0 0-8.48 14.92L2 22l5.23-1.37A9.93 9.93 0 1 0 12.04 2Zm0 18.08a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.1.81.83-3.02-.2-.31a8.08 8.08 0 1 1 6.9 3.83Zm4.44-6.05c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.44-1.34-1.68-.14-.24-.02-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.46-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.1.15 1.52.09.46-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z"
          />
        </svg>
      </a>
    </footer>
  );
}
