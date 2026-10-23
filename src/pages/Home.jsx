import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  ascent,
  brand,
  executiveQuotes,
  orbit,
  practices,
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

function CycleGlyph({ name }) {
  const paths = {
    Idea: ["M12 3a5 5 0 00-3 9c.5.5 1 1.3 1 2h4c0-.7.5-1.5 1-2a5 5 0 00-3-9z", "M10 18h4", "M11 21h2"],
    Design: ["M4 20l3.2-.8L19 7.4 16.6 5 4.8 16.8 4 20z", "M14.2 6.4l3.4 3.4"],
    Tech: ["M9 9h6v6H9z", "M12 5v2", "M12 17v2", "M5 12h2", "M17 12h2", "M7 5v2", "M17 5v2", "M7 17v2", "M17 17v2"],
    Product: ["M5 7h2l1.6 9h8.2L19 9H8", "M10 20.2a1.1 1.1 0 100-2.2 1.1 1.1 0 000 2.2z", "M16.5 20.2a1.1 1.1 0 100-2.2 1.1 1.1 0 000 2.2z"],
    Marketing: ["M4 19V5", "M4 19h16", "M8 15l3-4 3 2 5-7"],
    Growth: ["M7 17L17 7", "M10 7h7v7"],
  };
  return (
    <svg className="cycle-glyph" viewBox="0 0 24 24" aria-hidden="true">
      {(paths[name] || paths.Idea).map((d) => (
        <path key={d} d={d} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
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

export default function Home() {
  usePageTitle("SRK Zenithvision | Digital Marketing Company");
  const practiceGrid = useRef(null);
  const heroRef = useRef(null);

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

      <section className="section who-band">
        <div className="container-site who-layout">
          <figure className="who-photo">
            <img src="/who-team.png" alt="Two colleagues reviewing work together on a tablet" />
            <div className="who-badge" aria-hidden="true">
              <svg viewBox="0 0 120 120">
                <defs>
                  <path id="who-ring" d="M60 60m-44 0a44 44 0 1 1 88 0a44 44 0 1 1-88 0" />
                </defs>
                <circle cx="60" cy="60" r="58" fill="#d4af37" />
                <circle cx="60" cy="60" r="46" fill="#080b10" />
                <text fill="#f5d77f" fontSize="7.4" fontWeight="700" letterSpacing="1.4">
                  <textPath href="#who-ring">PREMIUM SERVICES AND SUPPORT • PREMIUM SERVICES AND SUPPORT •</textPath>
                </text>
              </svg>
            </div>
          </figure>
          <div className="who-copy">
            <p className="eyebrow">Who we are</p>
            <h2>Your digital future, held to one standard of excellence.</h2>
            <p>From the first idea to a system the business owns. Strategy, engineering, and creative work stay on one brief, so the work that ships is the work that was promised.</p>
            <Link className="card-more" to="/about">Discover more</Link>
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
                <span className="card-more">Learn more</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section architecture" id="architecture">
        <div className="container-site">
          <div className="cycle-intro">
              <h2>
                <span>One ecosystem.</span>
                <span className="gradient-text">Boundless possibilities.</span>
              </h2>
          </div>
          <div className="eco-layout">
            <div className="cycle">
            <svg className="cycle-core" viewBox="0 0 100 100" aria-hidden="true">
              <path className="flow" d="M50 28 C62 36 40 42 50 50 C62 58 40 66 50 74" />
              <path className="flow flow-gold" d="M28 38 C36 42 42 46 48 50" />
              <path className="flow" d="M72 38 C64 42 58 46 52 50" />
              <path className="flow flow-gold" d="M28 62 C36 58 42 54 48 50" />
              <path className="flow" d="M72 62 C64 58 58 54 52 50" />
              <circle className="joint" cx="50" cy="28" r="1.1" />
              <circle className="joint" cx="50" cy="50" r="1.2" />
              <circle className="joint" cx="50" cy="74" r="1.1" />
              <g className="gear" transform="translate(43 46)">
                <circle r="6.2" />
                <circle r="2.2" />
              </g>
              <g className="gear" transform="translate(58 56)">
                <circle r="4.4" />
                <circle r="1.6" />
              </g>
            </svg>
            <ol className="cycle-nodes">
              {orbit.map((node, index) => {
                const angle = ((-90 + index * 60) * Math.PI) / 180;
                return (
                  <li
                    className={`cycle-node tone-${index}`}
                    key={node.n}
                    style={{
                      left: `${50 + Math.cos(angle) * 36}%`,
                      top: `${50 + Math.sin(angle) * 36}%`,
                    }}
                  >
                    <CycleGlyph name={node.label} />
                    <span>{node.label}</span>
                  </li>
                );
              })}
            </ol>
            </div>
            <div className="cycle-card">
              <p>From raw genesis to market dominance. A closed-loop framework that connects strategy, engineering, and cultural impact, so every asset moves your business forward.</p>
              <svg className="cycle-spark" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M8 0l1.2 5.2L16 8l-6.8 1.2L8 16l-1.2-6.8L0 8l6.8-1.2L8 0z" />
              </svg>
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
