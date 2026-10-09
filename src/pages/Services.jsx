import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  arsenal,
  crossCases,
  delivery,
  engagementTiers,
  reasons,
  serviceStats,
  sovereignPillars,
} from "../data/content";
import Button from "../components/Button";
import usePageTitle from "../hooks/usePageTitle";

function Radar() {
  return (
    <aside className="radar svc-piece" aria-hidden="true">
      <div className="radar-top">
        <span className="dots"><i /><i /><i /></span>
        <strong>Live telemetry radar</strong>
        <em>Stable</em>
      </div>
      <svg viewBox="0 0 520 160">
        <g stroke="rgba(244,242,234,0.08)">
          {[30, 70, 110, 145].map((y) => (
            <line key={y} x1="16" y1={y} x2="500" y2={y} />
          ))}
        </g>
        <polyline fill="none" stroke="#4FB4C4" strokeWidth="2.5" points="16,110 70,96 120,88 180,100 240,70 300,62 360,84 420,78 500,90" />
        <polyline fill="none" stroke="#D4AF37" strokeWidth="3" points="16,120 70,108 130,100 190,92 250,78 310,54 370,70 430,88 500,74" />
      </svg>
      <p className="radar-latency">Latency: 4.1ms</p>
      <div className="radar-metrics">
        <div>
          <span>Throughput engine</span>
          <strong>9.42 GB/s OK</strong>
        </div>
        <div>
          <span>Pillar synchrony</span>
          <strong>8 / 8 active</strong>
        </div>
      </div>
      <p className="radar-foot"><span>8 node servicing</span><span>Ecosystem synchronized</span><span>Sec-256</span></p>
    </aside>
  );
}

export default function Services() {
  const pageRef = useRef(null);
  usePageTitle("Services | SRK Zenithvision");

  useLayoutEffect(() => {
    const root = pageRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".hero-line > span", {
        yPercent: 120,
        duration: 0.95,
        stagger: 0.16,
        ease: "power3.out",
      });
      gsap.from(".svc-piece", {
        y: 32,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        delay: 0.28,
        ease: "power3.out",
      });

      const groups = [
        ["#pillars", ".sov-card"],
        ["#arsenal", ".arsenal-grid article"],
        [".protocol-grid", ".protocol-grid article"],
        [".reason-grid", ".reason-copy, .reason-cards article"],
        [".steward", ".steward"],
        [".case-grid", ".case-grid article"],
        [".tier-price-grid", ".price-card"],
      ];
      groups.forEach(([trigger, items]) => {
        gsap.from(items, {
          y: 56,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger, start: "top 82%" },
        });
      });
    }, root);

    const cleanups = [];
    root.querySelectorAll(".sov-card, .arsenal-grid article, .protocol-grid article, .reason-cards article, .case-grid article, .price-card").forEach((card) => {
      const enter = () => {
        gsap.to(card, {
          y: -10,
          scale: 1.02,
          boxShadow: "0 22px 48px rgba(0, 0, 0, 0.28)",
          duration: 0.35,
          ease: "power2.out",
          overwrite: "auto",
        });
      };
      const leave = () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
          duration: 0.45,
          ease: "power2.out",
          overwrite: "auto",
        });
      };
      card.addEventListener("mouseenter", enter);
      card.addEventListener("mouseleave", leave);
      cleanups.push(() => {
        card.removeEventListener("mouseenter", enter);
        card.removeEventListener("mouseleave", leave);
      });
    });

    return () => {
      ctx.revert();
      cleanups.forEach((remove) => remove());
    };
  }, []);

  return (
    <div className="services-page" ref={pageRef}>
      <section className="svc-hero">
        <div className="wrap svc-hero-grid">
          <div>
            <p className="dot-kicker">SRK Zenithvision // Ecosystem architecture</p>
            <h1 className="display svc-title">
              <span className="hero-line">
                <span>One vision.</span>
              </span>
              <span className="hero-line">
                <span className="accent">Multiple digital possibilities.</span>
              </span>
            </h1>
            <p className="about-deck svc-piece">
              From custom technology and scalable SaaS engines to high-velocity digital growth, cognitive UI/UX, and immersive 3D media, we architect complete sovereign digital ecosystems that propel global enterprises to category dominance.
            </p>
            <div className="hero-actions svc-actions svc-piece">
              <a className="btn btn-gold" href="#pillars">Explore our 8 pillars</a>
              <Button to="/contact" variant="dark">Discuss your vision</Button>
            </div>
          </div>
          <Radar />
        </div>
        <div className="wrap svc-stats svc-piece">
          {serviceStats.map((item) => (
            <div key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="home-block band-light" id="pillars">
        <div className="wrap">
          <div className="center-head">
            <p className="dot-kicker">Core multi-disciplinary framework</p>
            <h2 className="display">The 8 sovereign pillars</h2>
            <p>A fully integrated infrastructure engineered to replace fragmented vendors with a singular, high-precision powerhouse.</p>
          </div>
          <div className="sov-grid">
            {sovereignPillars.map((item) => (
              <article className="sov-card" key={item.n}>
                <p className="flag-tag">Pillar {item.n}</p>
                <h3>{item.title}</h3>
                <p className="sov-line">“{item.line}”</p>
                <p>{item.text}</p>
                {item.chips ? (
                  <ul className="marks">
                    {item.chips.map((chip) => (
                      <li key={chip}>{chip}</li>
                    ))}
                  </ul>
                ) : null}
                {item.metric ? (
                  <div className="sov-metric">
                    <span>{item.metric}</span>
                    <strong>{item.metricValue}</strong>
                  </div>
                ) : null}
                <Link to={item.to}>{item.cta} →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-block home-block-tight" id="arsenal">
        <div className="wrap">
          <div className="home-intro">
            <div>
              <p className="dot-kicker">Architectural infrastructure</p>
              <h2 className="display">Unified technical spine & arsenal</h2>
            </div>
            <p className="home-aside">Standardized enterprise tooling vetted across mission-critical fintech, global marketplaces, and tier-1 media deployments.</p>
          </div>
          <div className="arsenal-grid">
            {arsenal.map((item) => (
              <article key={item.n}>
                <span>{item.n}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <ul className="points">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-block home-block-tight band-light">
        <div className="wrap">
          <div className="center-head">
            <p className="dot-kicker">Synchronized execution</p>
            <h2 className="display">The 5-step delivery protocol</h2>
            <p>Every project adheres to our zero-drift architectural deployment lifecycle.</p>
          </div>
          <div className="protocol-grid">
            {delivery.map((step) => (
              <article key={step.n}>
                <span>{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-block home-block-tight">
        <div className="wrap reason-grid">
          <div className="reason-copy">
            <p className="dot-kicker">Foundational competencies</p>
            <h2 className="display">Why visionaries choose SRK Zenithvision.</h2>
            <p className="about-deck">We operate at the convergence of high-order technical engineering, sovereign aesthetic design, and ruthless customer acquisition mechanics.</p>
            <Link className="protocol-link" to="/about">About the firm →</Link>
            <Link className="protocol-link" to="/#method">Learn more about our methodology →</Link>
          </div>
          <div className="reason-cards">
            {reasons.map((item) => (
              <article key={item.n}>
                <p className="flag-tag">{item.n} / {item.kicker}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="wrap">
          <blockquote className="steward">
            <img src="/suhas-rk.png" alt="Suhas RK" />
            <div>
              <p className="flag-tag">Architectural stewardship</p>
              <p className="steward-quote">“Engineering excellence is not an accident. It is deliberate, uncompromising architecture.”</p>
              <p>At SRK ZenithVision, every line of code, design token, and media asset is crafted under sovereign oversight. We reject the commodity agency model to serve as your dedicated technological vanguard.</p>
              <footer><strong>RK</strong> Founder & Principal Systems Architect</footer>
            </div>
          </blockquote>
        </div>
      </section>

      <section className="home-block home-block-tight band-light">
        <div className="wrap">
          <div className="home-intro">
            <div>
              <p className="dot-kicker">Verified deployments</p>
              <h2 className="display">Cross-pillar case studies</h2>
            </div>
            <p className="home-aside">Proven multi-node deployments combining technology, brand equity, and algorithmic acquisition.</p>
          </div>
          <div className="case-grid">
            {crossCases.map((item) => (
              <article key={item.title}>
                <div className="case-tags">
                  <span>{item.tag}</span>
                  <em>{item.badge}</em>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="case-metrics">
                  {item.metrics.map((metric) => (
                    <div key={metric.label}>
                      <strong>{metric.value}</strong>
                      <span>{metric.label}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-block home-block-tight">
        <div className="wrap">
          <div className="center-head">
            <p className="dot-kicker">Transparent architectural engagements</p>
            <h2 className="display">Institutional engagement tiers</h2>
            <p>Flexible sovereign delivery arrangements designed for scale, velocity, and complete IP security.</p>
          </div>
          <div className="tier-price-grid">
            {engagementTiers.map((tier) => (
              <article className={tier.featured ? "price-card featured" : "price-card"} key={tier.title}>
                {tier.badge ? <p className="price-badge">{tier.badge}</p> : null}
                <p className="flag-tag">{tier.kicker}</p>
                <h3>{tier.title}</h3>
                <p>{tier.text}</p>
                <p className="price-line"><strong>{tier.price}</strong> <span>{tier.cadence}</span></p>
                <ul className="points">
                  {tier.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <Button
                  to={`/contact?service=${encodeURIComponent(tier.featured ? "The Zenith" : "Not sure yet")}&message=${encodeURIComponent("We want the " + tier.title + ".")}`}
                  variant={tier.featured ? "gold" : "ghost"}
                >
                  {tier.cta}
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
