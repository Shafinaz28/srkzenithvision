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
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const { pathname, hash } = useLocation();
  const navRef = useRef(null);
  const panelRef = useRef(null);
  const lastY = useRef(0);
  const onHome = pathname === "/";

  useEffect(() => {
    setOpen(false);
    setHidden(false);
    setSolid(window.scrollY > 24);
    lastY.current = window.scrollY;
  }, [pathname]);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      const delta = y - lastY.current;
      if (!open) {
        if (y < 40) setHidden(false);
        else if (delta > 6) setHidden(true);
        else if (delta < -6) setHidden(false);
      }
      setSolid(y > 24);
      lastY.current = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

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

  const links = nav.filter((item) => !item.cta);
  const cta = nav.find((item) => item.cta);

  function linkClass(item) {
    return ({ isActive }) => {
      const active = item.hash ? hash === item.hash : isActive;
      return active ? "nav-link active" : "nav-link";
    };
  }

  function linkTo(item) {
    return item.hash ? { pathname: "/", hash: item.hash } : item.to;
  }

  return (
    <>
      <header
        className={[
          "site-header",
          open && "menu-open",
          onHome && "on-home",
          hidden && !open && "is-hidden",
          (!onHome || solid) && "is-solid",
        ].filter(Boolean).join(" ")}
      >
        <div className="header-inner">
          <Link to="/" className="logo-link" aria-label="SRK Zenithvision home">
            <Logo />
          </Link>

          <nav className="nav" aria-label="Primary" ref={navRef}>
            {links.map((item) => (
              <NavLink key={item.label} to={linkTo(item)} end={item.to === "/"} className={linkClass(item)}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <NavLink to={cta.to} className={({ isActive }) => (isActive ? "btn btn-gold nav-contact header-cta active" : "btn btn-gold nav-contact header-cta")}>
            {cta.label}
          </NavLink>

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
          <NavLink key={item.label} to={linkTo(item)} end={item.to === "/"} className={linkClass(item)} onClick={() => setOpen(false)}>
            {item.label}
          </NavLink>
        ))}
        <NavLink to={cta.to} className="btn btn-gold nav-contact" onClick={() => setOpen(false)}>
          {cta.label}
        </NavLink>
      </div>
    </>
  );
}
