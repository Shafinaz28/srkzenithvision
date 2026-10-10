import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  architecture,
  ascent,
  brand,
  executiveQuotes,
  flagshipFilters,
  flagships,
  orbit,
  practices,
  softwareMetrics,
  softwareProducts,
  trusted,
} from "../data/content";
import Button from "../components/Button";
import usePageTitle from "../hooks/usePageTitle";

function MethodIcon({ name }) {
  const paths = {
    Discover: ["M10.5 10.5m-5.5 0a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0 -11 0", "M15 15l5 5", "M10.5 8.2v4.6", "M8.2 10.5h4.6"],
    Strategize: ["M4 6h16v14H4z", "M4 10h16", "M8 4v4", "M16 4v4", "M8 14h3", "M13 14h3", "M8 17h3"],
    Create: ["M16 4l4 4", "M15 5l4 4-9 9H6v-4z"],
    Build: ["M3 5h18v14H3z", "M3 9h18", "M8 13l-2 2 2 2", "M16 13l2 2-2 2", "M13 12l-2 6"],
    Launch: ["M12 2c2.2 3.2 3.2 6 3.2 8.2a3.2 3.2 0 01-6.4 0C8.8 8 9.8 5.2 12 2z", "M9.2 13.2L6 18l3.4-1.2", "M14.8 13.2L18 18l-3.4-1.2", "M12 15.4V21"],
    Grow: ["M4 19V5", "M4 19h16", "M7 15l4-5 3 2 5-6"],
  };
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {(paths[name] || paths.Discover).map((d) => (
        <path key={d} d={d} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      ))}
    </svg>
  );
}

function PracticeIcon({ name }) {
  const paths = {
    code: "M8 8l-4 4 4 4M16 8l4 4-4 4M13 6l-2 12",
    nodes: "M12 7a2 2 0 100-4 2 2 0 000 4zM6 19a2 2 0 100-4 2 2 0 000 4zM18 19a2 2 0 100-4 2 2 0 000 4zM12 7v4M8 15l3-3 2 2 3-3",
    chart: "M4 19V5M4 19h16M8 15l3-4 3 2 4-6",
    aperture: "M12 16a4 4 0 100-8 4 4 0 000 8zM12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6L17 7M7 17l-1.4 1.4",
    device: "M7 4h10a1 1 0 011 1v12H6V5a1 1 0 011-1zM9 20h6",
    film: "M5 6h14v12H5zM9 6v12M15 6v12M5 10h4M15 10h4M5 14h4M15 14h4",
    stack: "M12 4l8 4-8 4-8-4 8-4zM4 12l8 4 8-4M4 16l8 4 8-4",
    bolt: "M13 3L5 13h6l-1 8 8-10h-6l1-8z",
    shield: "M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z",
  };
  return (
    <svg viewBox="0 0 24 24" className="practice-svg" aria-hidden="true">
      <path d={paths[name]} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Scene({ name }) {
  if (name === "network") {
    return (
      <div className="scene scene-network" aria-hidden="true">
        <svg viewBox="0 0 640 360">
          <g stroke="#F5D77F" strokeOpacity="0.55" fill="none">
            <path d="M80 220 L180 120 L300 180 L420 90 L540 160 L500 260 L320 280 L160 250 Z" />
            <path d="M180 120 L320 280 M300 180 L500 260 M420 90 L320 280" />
          </g>
          {[[80, 220], [180, 120], [300, 180], [420, 90], [540, 160], [500, 260], [320, 280], [160, 250]].map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="7" fill="#D4AF37" />
          ))}
        </svg>
      </div>
    );
  }
  if (name === "car") {
    return (
      <div className="scene scene-car" aria-hidden="true">
        <div className="studio-lights" />
        <svg viewBox="0 0 720 320" className="car-svg">
          <path
            fill="#1a1a22"
            stroke="#D4AF37"
            strokeWidth="2"
            d="M70 210h40l30-20 70-55c30-22 70-28 120-24l150 8c40 4 70 22 90 48l28 36h70c18 0 28 14 22 28H90c-16 0-30-10-20-21z"
          />
          <path fill="#D4AF37" d="M250 140h70l40 40H230z" opacity="0.35" />
          <circle cx="190" cy="230" r="28" fill="#080B10" stroke="#D4AF37" strokeWidth="3" />
          <circle cx="520" cy="230" r="28" fill="#080B10" stroke="#D4AF37" strokeWidth="3" />
          <path d="M600 168h28" stroke="#4FB4C4" strokeWidth="4" strokeLinecap="round" />
        </svg>
        <div className="studio-floor" />
      </div>
    );
  }
  return (
    <div className="scene scene-terminal" aria-hidden="true">
      <div className="skyline" />
      <svg viewBox="0 0 640 280" className="terminal-chart">
        <g stroke="rgba(212,175,55,0.25)">
          {[40, 80, 120, 160, 200].map((y) => (
            <line key={y} x1="30" y1={y} x2="470" y2={y} />
          ))}
        </g>
        <polyline fill="none" stroke="#D4AF37" strokeWidth="3" points="30,190 80,170 130,150 180,160 240,110 300,90 360,120 420,70 470,84" />
        <polyline fill="none" stroke="#4FB4C4" strokeWidth="2" points="30,210 90,200 150,188 220,170 300,176 380,150 470,140" />
        <rect x="500" y="40" width="110" height="70" rx="8" fill="#12121F" stroke="#D4AF37" />
        <text x="555" y="68" fill="#F5D77F" fontSize="16" textAnchor="middle">$1.8B</text>
        <text x="555" y="90" fill="#b7b7c4" fontSize="11" textAnchor="middle">volume</text>
        <rect x="500" y="124" width="110" height="70" rx="8" fill="#12161C" stroke="#F5D77F" />
        <text x="555" y="154" fill="#D4AF37" fontSize="16" textAnchor="middle">+310%</text>
        <text x="555" y="176" fill="#b7b7c4" fontSize="11" textAnchor="middle">velocity</text>
      </svg>
    </div>
  );
}

export default function Home() {
  usePageTitle("SRK Zenithvision | Digital Marketing Company");
  const practiceGrid = useRef(null);
  const titleRef = useRef(null);
  const heroRef = useRef(null);
  const flagRef = useRef(null);
  const [filter, setFilter] = useState("All Work");
  const shown = filter === "All Work" ? flagships : flagships.filter((item) => item.categories.includes(filter));

  useLayoutEffect(() => {
    const root = practiceGrid.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    gsap.registerPlugin(ScrollTrigger);
    const cards = root.querySelectorAll(".practice");
    const cleanups = [];
    const ctx = gsap.context(() => {
      gsap.from(".practice", {
        y: 56,
        opacity: 0,
        duration: 0.75,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: root, start: "top 82%" },
      });
    }, root);

    cards.forEach((card) => {
      const icon = card.querySelector(".practice-icon");
      const enter = () => {
        gsap.to(card, {
          y: -12,
          scale: 1.03,
          boxShadow: "0 22px 48px rgba(11, 11, 29, 0.14)",
          duration: 0.35,
          ease: "power2.out",
          overwrite: "auto",
        });
        if (icon) {
          gsap.to(icon, {
            scale: 1.12,
            rotation: -8,
            duration: 0.35,
            ease: "back.out(2)",
            overwrite: "auto",
          });
        }
      };
      const leave = () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          boxShadow: "0 12px 32px rgba(11, 11, 29, 0.06)",
          duration: 0.45,
          ease: "power2.out",
          overwrite: "auto",
        });
        if (icon) {
          gsap.to(icon, {
            scale: 1,
            rotation: 0,
            duration: 0.4,
            ease: "power2.out",
            overwrite: "auto",
          });
        }
      };
      card.addEventListener("mouseenter", enter);
      card.addEventListener("mouseleave", leave);
      cleanups.push(() => {
        card.removeEventListener("mouseenter", enter);
        card.removeEventListener("mouseleave", leave);
      });
    });

    const titleTween = gsap.context(() => {
      gsap.from(".slide-line > span", {
        yPercent: 120,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: titleRef.current, start: "top 88%" },
      });
    }, titleRef);

    const heroTween = gsap.context(() => {
      gsap.from(".hero-line > span", {
        yPercent: 120,
        duration: 0.95,
        stagger: 0.16,
        ease: "power3.out",
      });
      gsap.from(".hero-piece", {
        y: 32,
        opacity: 0,
        duration: 0.8,
        stagger: 0.14,
        delay: 0.28,
        ease: "power3.out",
      });
    }, heroRef);

    const restTween = gsap.context(() => {
      const groups = [
        ["#architecture", "#architecture .orbit, #architecture .arch > div:last-child"],
        ["#software", "#software .soft-card, #software .dash"],
        ["#method", "#method .method-step"],
        ["#trust", "#trust .trust-logos, #trust .exec-quote"],
      ];
      groups.forEach(([trigger, items]) => {
        gsap.from(items, {
          y: 52,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger, start: "top 82%" },
        });
      });
    });

    return () => {
      ctx.revert();
      titleTween.revert();
      heroTween.revert();
      restTween.revert();
      cleanups.forEach((remove) => remove());
    };
  }, []);

  useLayoutEffect(() => {
    const root = flagRef.current;
    if (!root) return undefined;
    root.scrollLeft = 0;
    let locked = false;
    const onWheel = (event) => {
      const slides = root.querySelectorAll(".proof-slide");
      if (slides.length < 2) return;
      const gap = parseFloat(getComputedStyle(root).columnGap) || 0;
      const step = slides[0].getBoundingClientRect().width + gap;
      const max = root.scrollWidth - root.clientWidth;
      const goingNext = event.deltaY > 0;
      if ((goingNext && root.scrollLeft >= max - 4) || (!goingNext && root.scrollLeft <= 4)) return;
      event.preventDefault();
      if (locked) return;
      locked = true;
      const index = Math.round(root.scrollLeft / step) + (goingNext ? 1 : -1);
      root.scrollTo({ left: Math.max(0, Math.min(max, index * step)), behavior: "smooth" });
      window.setTimeout(() => {
        locked = false;
      }, 520);
    };
    root.addEventListener("wheel", onWheel, { passive: false });
    return () => root.removeEventListener("wheel", onWheel);
  }, [filter]);

  return (
    <>
      <section className="hero" ref={heroRef}>
        <div className="hero-inner">
          <p className="eyebrow">{brand.eyebrow}</p>
          <h1>
            <span className="hero-line">
              <span>
                {brand.headlineBefore} <span className="accent">{brand.headlineAccent}</span>
              </span>
            </span>
            <span className="hero-line">
              <span>{brand.headlineAfter}</span>
            </span>
          </h1>
          <p className="hero-lead hero-piece">{brand.heroText}</p>
          <div className="hero-actions hero-piece">
            <Button to="/contact">Let&apos;s build something bold</Button>
            <Button to="/projects" variant="ghost" icon="eye">
              Explore our work
            </Button>
          </div>
        </div>
      </section>

      <section className="home-block band-light" id="practices">
        <div className="wrap">
          <div className="center-head">
            <h2 className="display slide-title" ref={titleRef}>
              <span className="slide-line">
                <span>We don&apos;t just build digital experiences.</span>
              </span>
              <span className="slide-line">
                <span className="accent">We build what comes next.</span>
              </span>
            </h2>
            <p>
              Six synchronized specialized practices delivering end-to-end sovereignty from core algorithmic architecture to hyper-scale market adoption.
            </p>
          </div>
          <div className="practice-grid" ref={practiceGrid}>
            {practices.map((item) => (
              <article className="practice" key={item.n}>
                <span className="practice-icon">
                  <PracticeIcon name={item.icon} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <ul className="points">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <Link to={item.to}>View this service →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-block home-block-tight" id="architecture">
        <div className="wrap arch">
          <div className="orbit" aria-hidden="true">
            <svg viewBox="0 0 100 100" className="orbit-lines">
              <circle cx="50" cy="50" r="34" fill="none" stroke="#D4AF37" strokeOpacity="0.35" />
              <line x1="50" y1="50" x2="50" y2="14" stroke="#D4AF37" strokeOpacity="0.7" />
              <line x1="50" y1="50" x2="82" y2="30" stroke="#D4AF37" strokeOpacity="0.7" />
              <line x1="50" y1="50" x2="82" y2="70" stroke="#D4AF37" strokeOpacity="0.7" />
              <line x1="50" y1="50" x2="50" y2="86" stroke="#D4AF37" strokeOpacity="0.7" />
              <line x1="50" y1="50" x2="18" y2="70" stroke="#D4AF37" strokeOpacity="0.7" />
              <line x1="50" y1="50" x2="18" y2="30" stroke="#D4AF37" strokeOpacity="0.7" />
            </svg>
            <div className="orbit-core">
              <strong>SRK Core</strong>
              <span>Nexus V5</span>
            </div>
            {orbit.map((node) => (
              <span key={node.n} className="orbit-node" style={{ left: node.x, top: node.y }}>
                {node.n} {node.label}
              </span>
            ))}
          </div>
          <div>
            <p className="dot-kicker">The Zenith architecture</p>
            <h2 className="display">From raw genesis to sovereign market dominance.</h2>
            <p className="home-aside">
              A closed-loop systemic framework designed to eliminate friction between capital, engineering, and cultural impact. Every asset created amplifies the overarching enterprise valuation.
            </p>
            <div className="arch-list">
              {architecture.map((item) => (
                <article key={item.title}>
                  <span className="practice-icon">
                    <PracticeIcon name={item.icon} />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="home-block home-block-tight band-light proof" id="flagships">
        <div className="wrap">
          <div className="center-head">
            <p className="dot-kicker">Flagship engagements</p>
            <h2 className="display">Proof of sovereign execution.</h2>
          </div>
          <div className="filter-row proof-filters" role="group" aria-label="Filter flagship work">
              {flagshipFilters.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={filter === item ? "chip active" : "chip"}
                  aria-pressed={filter === item}
                  onClick={() => setFilter(item)}
                >
                  {item}
                </button>
              ))}
            </div>

          <div className="proof-scroller" ref={flagRef}>
            {shown.map((item) => (
              <article className="flag-card proof-slide" key={item.id}>
                <Scene name={item.scene} />
                <div className="flag-body">
                  <p className="flag-tag">{item.tag || item.award}</p>
                  <p className="metric">{item.metric || "\u00a0"}</p>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  {item.stats ? (
                    <div className="metric-pills">
                      {item.stats.map((stat) => (
                        <div key={stat.label}>
                          <strong>{stat.value}</strong>
                          <span>{stat.label}</span>
                        </div>
                      ))}
                    </div>
                  ) : null}
                  <Button to={item.to} variant="ghost" className="btn-small">
                    {item.cta}
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {shown.length === 0 ? <p className="home-aside">Nothing in this group yet.</p> : null}

          <p className="view-all">
            <Link to="/projects">View all 140+ sovereign flagships →</Link>
          </p>
        </div>
      </section>

      <section className="home-block home-block-tight" id="software">
        <div className="wrap">
          <p className="dot-kicker">Proprietary software systems</p>
          <h2 className="display">Built for businesses that think ahead.</h2>
          <p className="home-aside">
            Modular, turnkey cloud platforms crafted by ZenithVision engineering and licensed globally to high-velocity enterprises.
          </p>
          <div className="soft-grid">
            <div>
              {softwareProducts.map((product) => (
                <article className="soft-card" key={product.title}>
                  <p className="flag-tag">{product.status}</p>
                  <h3>{product.title}</h3>
                  <p>{product.text}</p>
                  <ul className="marks">
                    {product.marks.map((mark) => (
                      <li key={mark}>{mark}</li>
                    ))}
                  </ul>
                </article>
              ))}
              <Button to="/contact?service=The%20Zenith" variant="ghost">
                Request tier-1 enterprise access
              </Button>
            </div>
            <div className="dash">
              <div className="dash-top">
                <span>Node: US-East-Central-01 // Production</span>
                <span>Encrypted</span>
              </div>
              <div className="dash-metrics">
                {softwareMetrics.map((item) => (
                  <div key={item.label}>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                    <em>{item.note}</em>
                  </div>
                ))}
              </div>
              <p className="dash-label">Real-time throughput index</p>
              <svg viewBox="0 0 560 180" className="dash-chart" aria-hidden="true">
                <g stroke="rgba(244,242,234,0.08)">
                  {[30, 70, 110, 150].map((y) => (
                    <line key={y} x1="10" y1={y} x2="540" y2={y} />
                  ))}
                </g>
                <polyline fill="none" stroke="#F5D77F" strokeWidth="2" points="10,140 70,130 120,136 180,100 240,110 300,80 360,90 430,50 500,60 540,40" />
                <polyline fill="none" stroke="#D4AF37" strokeWidth="3" points="10,150 80,120 140,128 200,90 260,96 330,70 400,78 470,46 540,52" />
              </svg>
              <p className="dash-note">Auto-rebalance: EU tier-1 liquidity cluster absorbed · 6.2s ago</p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-block home-block-tight band-light" id="method">
        <div className="wrap">
          <div className="center-head">
            <p className="dot-kicker">Predictable excellence</p>
            <h2 className="display">The 6-step ascent methodology.</h2>
            <p>A disciplined, battle-hardened roadmap guaranteeing surgical execution from Day 1 to global saturation.</p>
          </div>
          <div className="method-flow">
            <svg className="method-wave" viewBox="0 0 1200 170" preserveAspectRatio="none" aria-hidden="true">
              <path d="M100 46 C200 46 200 124 300 124 C400 124 400 46 500 46 C600 46 600 124 700 124 C800 124 800 46 900 46 C1000 46 1000 124 1100 124" />
            </svg>
            {ascent.map((step, index) => (
              <article className={index % 2 ? "method-step is-low" : "method-step"} key={step.n}>
                <div className="method-orb">
                  <MethodIcon name={step.title} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                <strong>{step.when}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-block home-block-tight" id="trust">
        <div className="wrap">
          <p className="trust-kicker">Trusted by visionary executives · Global enterprises</p>
          <div className="trust-logos">
            {trusted.map((name) => (
              <span key={name}>{name}</span>
            ))}
          </div>
          <div className="exec-grid">
            {executiveQuotes.map((item) => (
              <blockquote className="exec-quote" key={item.initials}>
                <p className="stars" aria-label="5 stars">★★★★★</p>
                <p>{item.quote}</p>
                <footer>
                  <span className="avatar">{item.initials}</span>
                  <span>
                    <strong>{item.name}</strong>
                    {item.role}
                  </span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
