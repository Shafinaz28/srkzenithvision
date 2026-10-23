import { useRef } from "react";
import { Link } from "react-router-dom";
import { aboutDossier, aboutFaqs, aboutPillars, ascentTimeline, brand, founderTraits } from "../data/content";
import Button from "../components/Button";
import usePageTitle from "../hooks/usePageTitle";

function ImpactIcon({ index }) {
  const paths = [
    "M8 14a3 3 0 100-6 3 3 0 000 6zM16 15a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM8 14v1.5A3.5 3.5 0 0011.5 19h1M16 15v.5a3 3 0 01-3 3",
    "M5 16l4-8 3 5 2-3 5 6",
    "M12 4a8 8 0 100 16 8 8 0 000-16zM4 12h16M12 4c2.2 2.4 3.2 5.2 3.2 8s-1 5.6-3.2 8c-2.2-2.4-3.2-5.2-3.2-8s1-5.6 3.2-8z",
    "M12 4l6 2.5v5c0 3.6-2.4 6.2-6 7.5-3.6-1.3-6-3.9-6-7.5v-5L12 4z",
  ];
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={paths[index] || paths[0]} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function About() {
  const pageRef = useRef(null);
  usePageTitle("About | SRK Zenithvision");

  return (
    <div className="about-page" ref={pageRef}>
      <section className="about-hero">
        <div className="wrap">
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
        </div>
      </section>

      <section className="dossier-band">
        <div className="wrap">
          <div className="dossier-grid impact-grid">
            {aboutDossier.map((item, index) => (
              <article className={`impact-ring tone-${index}`} key={item.kicker}>
                <svg className="impact-arc" viewBox="0 0 200 200" aria-hidden="true">
                  <circle cx="100" cy="100" r="84" />
                  <circle className="impact-progress" cx="100" cy="100" r="84" />
                </svg>
                <span className="impact-badge" aria-hidden="true">
                  <ImpactIcon index={index} />
                </span>
                <div className="impact-copy">
                  <p>{item.kicker}</p>
                  <strong>{item.value}</strong>
                  <span>{item.text}</span>
                </div>
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
          <div className="home-intro is-center">
            <div>
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
          
        </div>
      </section>
    </div>
  );
}
