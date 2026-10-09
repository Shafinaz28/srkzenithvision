import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import gsap from "gsap";
import { nav } from "../data/content";
import Logo from "./Logo";
import { CloseIcon, MenuIcon } from "./Icons";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const navRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(event) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const ctx = gsap.context(() => {
      gsap.from(".nav-link", {
        y: -32,
        opacity: 0,
        duration: 0.7,
        stagger: 0.07,
        ease: "power3.out",
      });
    }, navRef);
    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    if (!open || prefersReducedMotion()) return undefined;
    const ctx = gsap.context(() => {
      gsap.from(".nav-link", {
        y: -28,
        opacity: 0,
        duration: 0.45,
        stagger: 0.06,
        ease: "power3.out",
      });
    }, panelRef);
    return () => ctx.revert();
  }, [open]);

  const links = nav.filter((item) => item.to !== "/contact");

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <Link to="/" className="logo-link" aria-label="SRK Zenithvision home">
            <Logo />
          </Link>

          <nav className="nav" aria-label="Primary" ref={navRef}>
            {links.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "btn btn-gold nav-contact active" : "btn btn-gold nav-contact")}>
              Contact
            </NavLink>
          </nav>

          <div className="header-actions">
            <button
              type="button"
              className="menu-btn"
              aria-expanded={open}
              aria-controls="site-menu"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>

      <div id="site-menu" className={open ? "nav-panel open" : "nav-panel"} aria-hidden={!open} ref={panelRef}>
        {links.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
        <NavLink to="/contact" className="btn btn-gold nav-contact" onClick={() => setOpen(false)}>
          Contact
        </NavLink>
      </div>
    </>
  );
}
