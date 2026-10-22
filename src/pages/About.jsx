import { useRef } from "react";
import { Link } from "react-router-dom";
import { aboutDossier, aboutFaqs, aboutPillars, ascentTimeline, brand, founderTraits } from "../data/content";
import Button from "../components/Button";
import usePageTitle from "../hooks/usePageTitle";

export default function About() {
  const pageRef = useRef(null);
  usePageTitle("About | SRK Zenithvision");

  return (
    <div className="about-page" ref={pageRef}>
      <section className="about-hero">
        <div className="wrap">
          <div className="about-top">
            <p className="dot-kicker">Enterprise strategic dossier // Apex grade 2026</p>
            <p className="crumb">
              <Link to="/">Zenith</Link> / Governance / About us
            </p>
          </div>
          <h1 className="display about-title">
            <span className="about-line">
              <span>The architects of</span>
            </span>
            <span className="about-line">
              <span className="gradient-text">digital sovereignty</span>
            </span>
          </h1>
          <p className="about-deck about-piece">
            Founded in 2023 on the unshakeable conviction that generational visions demand uncompromising engineering. We synthesize surgical enterprise architecture, sovereign cloud protocols, and hyper-aesthetic intelligence engines to propel category leaders to boundless market dominance.
          </p>
          <div className="dossier-grid">
            {aboutDossier.map((item) => (
              <article className="dossier-card" key={item.kicker}>
                <p className="flag-tag">{item.kicker}</p>
                <strong>{item.value}</strong>
                <p>{item.text}</p>
                <span>{item.note}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-block home-block-tight band-light">
        <div className="wrap founder-grid">
          <figure className="founder-photo">
            <img src="/suhas-rk.png" alt="Suhas RK, Founder and Chief Executive Officer" />
          </figure>
          <div>
            <p className="dot-kicker">Foundational directive</p>
            <blockquote className="founder-quote">
              “We do not build software to follow existing paradigms. We engineer sovereign technological architecture that grants enterprises decisive velocity and boundless market dominance.”
            </blockquote>
            <p className="quote-by">— Suhas RK · Founder keynote</p>
            <div className="prose">
              <p>
                As an enterprise systems architect and venture strategist, Suhas RK established SRK ZenithVision in 2023 with a singular directive: to liberate high-tier institutions from sluggish legacy frameworks and cookie-cutter SaaS limitations.
              </p>
              <p>
                With deep roots spanning distributed systems, high-throughput algorithmic backbones, and bespoke visual command interfaces, his engineering ethos unites extreme mathematical rigor with sculptural digital luxury. Under his stewardship, ZenithVision operates not as a conventional agency, but as an elite sovereign skunkworks.
              </p>
            </div>
            <div className="trait-grid">
              {founderTraits.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
            <div className="protocol-row">
              <Link to="/the-zenith">Explore protocol →</Link>
              <span>Authority hash: SHA-256:4CBE…89A1</span>
            </div>
          </div>
        </div>
      </section>

      <section className="home-block home-block-tight">
        <div className="wrap">
          <div className="center-head">
            <p className="dot-kicker">Core operational values</p>
            <h2 className="display">The four architectural pillars</h2>
            <p>Our structural doctrines define every system specification, deployment blueprint, and client covenant.</p>
          </div>
          <div className="pillar-duo">
            {aboutPillars.map((item) => (
              <article key={item.n}>
                <span>{item.n}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <strong>{item.note}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-block home-block-tight band-light">
        <div className="wrap">
          <div className="home-intro">
            <div>
              <p className="dot-kicker">Trajectory roadmap</p>
              <h2 className="display">The ascent timeline</h2>
            </div>
            <p className="home-aside">A chronological testament of rapid institutional scaling, infrastructural maturation, and value acceleration.</p>
          </div>
          <div className="timeline-grid">
            {ascentTimeline.map((item) => (
              <article className={item.current ? "time-card current" : "time-card"} key={item.title}>
                <p><span>{item.year}</span> {item.phase}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div>
                  {item.marks.map((mark) => (
                    <strong key={mark}>{mark}</strong>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-block home-block-tight about-faq">
        <div className="wrap">
          <p className="faq-pill">FAQ</p>
          <h2>Frequently Asked Questions</h2>
          <p className="faq-lead">Answers to the questions clients ask before we start.</p>
          <div className="inquiry-list">
            {aboutFaqs.map((item, index) => (
              <details key={item.q} open={index === 0}>
                <summary>
                  <span>{item.q}</span>
                  <span className="faq-icon" aria-hidden="true" />
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="close-band band-light">
        <div className="wrap">
          <p className="dot-kicker">Private client advisory 2026</p>
          <h2 className="display">
            <span className="slide-line">
              <span>Ready to architect</span>
            </span>
            <span className="slide-line">
              <span className="accent">what comes next?</span>
            </span>
          </h2>
          <p className="close-piece">Directly engage SRK and the senior engineering vanguard. Elevate your infrastructure from tactical burden to unassailable sovereign advantage.</p>
          <div className="close-actions close-piece">
            <Button to="/contact">Schedule discovery</Button>
            <Button to="/services" variant="dark">Explore services</Button>
            <a className="btn btn-dark" href={`mailto:${brand.email}`}>Founder office</a>
          </div>
          <ul className="assure close-piece">
            <li>ISO 27001 prepared</li>
            <li>Strict bilateral NDA</li>
            <li>Zero vendor-lock</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
