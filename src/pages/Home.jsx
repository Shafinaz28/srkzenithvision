import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
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
  if (name === "route") {
    return (
      <div className="scene scene-route" aria-hidden="true">
        <svg viewBox="0 0 640 360">
          <path
            d="M48 250 C 150 250, 170 100, 290 108 S 430 250, 600 132"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {[[48, 250], [290, 108], [430, 196], [600, 132]].map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="7" fill="#080B10" stroke="#F5D77F" strokeWidth="2" />
          ))}
          <rect x="248" y="168" width="150" height="72" rx="8" fill="#12161C" stroke="#D4AF37" />
          <text x="323" y="198" fill="#F5D77F" fontSize="16" textAnchor="middle">38%</text>
          <text x="323" y="218" fill="#b7b7c4" fontSize="11" textAnchor="middle">activation</text>
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
  const heroRef = useRef(null);
  const flagRef = useRef(null);
  const [filter, setFilter] = useState("All Work");
  const shown = filter === "All Work" ? flagships : flagships.filter((item) => item.categories.includes(filter));

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
    <div className="home-co">
      <section className="hero" ref={heroRef}>
        <div className="container-site hero-content">
          <p className="eyebrow"><span className="status-dot" />{brand.eyebrow}</p>
          <h1>
            <span className="hero-line">
              <span>{brand.headlineBefore} </span>
              <span className="hero-accent">{brand.headlineAccent}</span>
            </span>
            <span className="hero-line">
              <span>{brand.headlineAfter}</span>
            </span>
          </h1>
          <p className="hero-description hero-piece">{brand.heroText}</p>
          <div className="hero-actions hero-piece">
            <Button to="/contact" variant="ghost">Let&apos;s build something bold</Button>
            <Button to="/projects" variant="ghost" className="btn-plain">Explore our work</Button>
          </div>
        </div>
        <div className="hero-sculpture hero-piece" aria-hidden="true">
            <svg viewBox="0 0 640 560">
              <defs>
                <linearGradient id="ribbon" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#f8e7b0" />
                  <stop offset="42%" stopColor="#d4af37" />
                  <stop offset="100%" stopColor="#8c7320" />
                </linearGradient>
              </defs>
              <path fill="url(#ribbon)" d="M150 430 L310 70 L360 70 L230 430 Z" />
              <path fill="url(#ribbon)" opacity="0.85" d="M300 90 L560 390 L490 450 L270 150 Z" />
              <path fill="none" stroke="url(#ribbon)" strokeWidth="34" strokeLinecap="round" d="M120 300 C 230 210, 390 230, 560 340" />
              <ellipse cx="320" cy="490" rx="230" ry="16" fill="rgba(212,175,55,0.22)" />
            </svg>
        </div>
      </section>

      <section className="trust-strip">
        <div className="trust-slider">
          <div className="trust-track">
            {[0, 1].map((copy) =>
              trusted.map((name) => (
                <span className={copy ? "client-logo trust-copy" : "client-logo"} key={`${copy}-${name}`}>{name}</span>
              ))
            )}
          </div>
        </div>
      </section>

      <section className="section pillar-band" id="practices">
        <div className="container-site">
          <div className="band-head">
            <h2>Everything You Need to Lead Digital</h2>
          </div>
          <div className="services-grid" ref={practiceGrid}>
            {practices.map((item, index) => (
              <Link className={`service-card practice tone-${index % 3}`} to={item.to} key={item.n}>
                <span className="practice-icon"><PracticeIcon name={item.icon} /></span>
                <h3>{item.title}</h3>
                <span className="card-rule" aria-hidden="true" />
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section architecture" id="architecture">
        <div className="container-site">
          <div className="band-head">
            <p className="eyebrow">The Zenith architecture</p>
            <h2>One ecosystem. <span className="gradient-text">Boundless possibilities.</span></h2>
            <p className="section-intro">From raw genesis to market dominance. A closed-loop framework that connects strategy, engineering, and cultural impact, so every asset moves your business forward.</p>
          </div>
          <div className="architecture-inner">
            <div className="architecture-copy">
              {architecture.map((item, index) => (
                <article className="principle" key={item.title}>
                  <span className="step-index">{String(index + 1).padStart(2, "0")}</span>
                  <span className="practice-icon"><PracticeIcon name={item.icon} /></span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="architecture-art" aria-hidden="true">
              <div className="orbit" />
              <div className="core">
                <div className="core-inner">
                  <strong>SRK Core</strong>
                  <small>NEXUS V5</small>
                </div>
              </div>
              {orbit.map((node) => (
                <div key={node.n} className="orbit-label" style={{ left: node.x, top: node.y }}>
                  <span>{node.n}</span>{node.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="flagships">
        <div className="container-site">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Flagship engagements</p>
              <h2>Proof of <span className="gradient-text">sovereign execution.</span></h2>
            </div>
          </div>
          <div className="filters" role="group" aria-label="Filter flagship work">
            {flagshipFilters.map((item) => (
              <button
                key={item}
                type="button"
                className="button-filter"
                aria-pressed={filter === item}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="projects-grid" ref={flagRef}>
            {shown.map((item) => (
              <article className="project-card" key={item.id}>
                <div className="project-visual"><Scene name={item.scene} /></div>
                <div className="project-copy">
                  <p className="eyebrow">{item.tag || item.award}</p>
                  <p className="metric">{item.metric || "\u00a0"}</p>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <Button to={item.to} variant="ghost" icon="arrow">{item.cta}</Button>
                </div>
              </article>
            ))}
          </div>
          {shown.length === 0 ? <p className="section-intro">Nothing in this group yet.</p> : null}
          <p className="all-work"><Link to="/projects">View all 140+ sovereign flagships →</Link></p>
        </div>
      </section>

      <section className="section products" id="software">
        <div className="container-site">
          <div className="section-heading">
            <p className="eyebrow">Proprietary software systems</p>
            <h2>Built for businesses <span className="gradient-text">that think ahead.</span></h2>
          </div>
          <div className="products-layout">
          <div>
            {softwareProducts.map((product) => (
              <article className="product-item" key={product.title}>
                <p className="eyebrow">{product.status}</p>
                <h3>{product.title}</h3>
                <p>{product.text}</p>
                <ul className="product-badges">
                  {product.marks.map((mark) => (
                    <li key={mark}>{mark}</li>
                  ))}
                </ul>
              </article>
            ))}
            <Button to="/contact?service=The%20Zenith" variant="ghost">Request enterprise access</Button>
          </div>
          <div className="dashboard">
              <div className="dashboard-head">
                <span>Node: US-East-Central-01 // Production</span>
                <span className="encrypted">Encrypted</span>
              </div>
              <div className="dashboard-stats">
                {softwareMetrics.map((item) => (
                  <div key={item.label}>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                    <em>{item.note}</em>
                  </div>
                ))}
              </div>
              <p className="chart-title">Real-time throughput index</p>
              <svg viewBox="0 0 560 180" className="dash-chart" aria-hidden="true">
                <g stroke="rgba(244,242,234,0.08)">
                  {[30, 70, 110, 150].map((y) => (
                    <line key={y} x1="10" y1={y} x2="540" y2={y} />
                  ))}
                </g>
                <polyline fill="none" stroke="#F5D77F" strokeWidth="2" points="10,140 70,130 120,136 180,100 240,110 300,80 360,90 430,50 500,60 540,40" />
                <polyline fill="none" stroke="#D4AF37" strokeWidth="3" points="10,150 80,120 140,128 200,90 260,96 330,70 400,78 470,46 540,52" />
              </svg>
              <p className="dashboard-foot">Auto-rebalance: EU tier-1 liquidity cluster absorbed · 6.2s ago</p>
          </div>
          </div>
        </div>
      </section>

      <section className="section" id="method">
        <div className="container-site">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Predictable excellence</p>
              <h2>The 6-step <span className="gradient-text">ascent methodology.</span></h2>
            </div>
            <p className="section-intro">A disciplined roadmap from the first conversation to global scale.</p>
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

      <section className="section testimonials" id="trust">
        <div className="container-site">
          <p className="eyebrow">Partners in ambition</p>
          <h2>Great work. <span className="gradient-text">Greater relationships.</span></h2>
          <div className="quote-slider">
            <div className="quote-track">
              {[0, 1].map((copy) =>
                executiveQuotes.map((item) => (
                  <article className="testimonial" key={`${copy}-${item.initials}`} aria-hidden={copy === 1 ? true : undefined}>
                    <p className="stars" aria-label="5 stars">★★★★★</p>
                    <blockquote>{item.quote}</blockquote>
                    <div className="person">
                      <span className="avatar">{item.initials}</span>
                      <div>
                        <strong>{item.name}</strong>
                        <small>{item.role}</small>
                      </div>
                    </div>
                  </article>
                )),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="contact-band">
        <div className="container-site contact-inner">
          <div>
            <p className="eyebrow">Your next horizon starts here</p>
            <h2>Have a bold idea? <span className="gradient-text">Let&apos;s make it real.</span></h2>
            <p>Bring your ambition. We&apos;ll bring the expertise.</p>
          </div>
          <Button to="/contact">Start a conversation</Button>
        </div>
      </section>
    </div>
  );
}
