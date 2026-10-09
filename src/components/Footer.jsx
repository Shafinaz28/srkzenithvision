import { Link } from "react-router-dom";
import { brand, footerColumns, year } from "../data/content";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <Link to="/" aria-label="SRK Zenithvision home">
            <Logo />
          </Link>
          <p className="footer-note">
            Architecting sovereign prestige, next-generation enterprise technology, and bespoke intelligence solutions across global ecosystems.
          </p>
          <p className="live-status">Global infrastructure online</p>
        </div>
        {footerColumns.map((column) => (
          <div key={column.title}>
            <p className="kicker">{column.title}</p>
            <div className="footer-links">
              {column.links.map((item) => (
                <Link key={item.label} to={item.to}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
        <div>
          <p className="kicker">Contact & global HQ</p>
          <p className="footer-address">
            Zenith Apex Tower, Financial District
            <br />
            One Vanguard Plaza, Level 48
          </p>
          <a className="footer-mail" href={`mailto:${brand.email}`}>{brand.email}</a>
          <p className="kicker connect-label">Connect</p>
          <div className="socials" aria-label="Social">
            <span aria-hidden="true">in</span>
            <span aria-hidden="true">ig</span>
            <span aria-hidden="true">f</span>
            <span aria-hidden="true">▶</span>
          </div>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {year} {brand.name}. All rights reserved. Crafted for boundless heights.</span>
        <span className="footer-legal">
          <Link to="/contact">Privacy policy</Link>
          <Link to="/contact">Terms of service</Link>
          <Link to="/contact">Cookie preferences</Link>
          <Link to="/">Sitemap</Link>
        </span>
      </div>
    </footer>
  );
}
