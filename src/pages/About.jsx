import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aboutDossier, aboutFaqs, aboutPillars, ascentTimeline, brand, founderTraits } from "../data/content";
import Button from "../components/Button";
import usePageTitle from "../hooks/usePageTitle";

export default function About() {
  const pageRef = useRef(null);
  usePageTitle("About | SRK Zenithvision");

  useLayoutEffect(() => {
    const root = pageRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".about-line > span", {
        yPercent: 120,
        duration: 0.95,
        stagger: 0.16,
        ease: "power3.out",
      });
      gsap.from(".about-piece", {
        y: 32,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        delay: 0.28,
        ease: "power3.out",
      });
      gsap.from(".dossier-card", {
        y: 48,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        delay: 0.4,
        ease: "power3.out",
      });

      const groups = [
        [".founder-grid", ".founder-grid > *"],
        [".pillar-duo", ".pillar-duo article"],
        [".timeline-grid", ".time-card"],
        [".diligence", ".diligence > *"],
      ];
      groups.forEach(([trigger, items]) => {
        gsap.from(items, {
          y: 56,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger, start: "top 82%" },
        });
      });

      gsap.from(".close-band .slide-line > span", {
        yPercent: 120,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: ".close-band", start: "top 84%" },
      });
      gsap.from(".close-piece", {
        y: 28,
        opacity: 0,
        duration: 0.75,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: ".close-band", start: "top 84%" },
      });
    }, root);

    const cards = root.querySelectorAll(".dossier-card, .pillar-duo article, .time-card");
    const cleanups = [];
    cards.forEach((card) => {
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

      <section className="home-block home-block-tight">
        <div className="wrap diligence">
          <article className="nda-card">
            <p className="dot-kicker">Direct founder office inquiry</p>
            <h2>Sovereign protocol & mutual non-disclosure</h2>
            <p>All enterprise advisory begins with an enforceable mutual bilateral NDA. We operate under rigorous confidential compute standards, zero cross-project code contamination, and strict fiduciary non-disclosure.</p>
            <div className="nda-note">
              <strong>Pre-signed executive NDA</strong>
              <p>Available instantly for C-suite and General Counsel review prior to technical disclosure.</p>
            </div>
            <Button to="/contact?service=The%20Zenith&message=Request%20the%20mutual%20NDA%20form.">Request mutual NDA form</Button>
          </article>
          <div>
            <p className="dot-kicker">Due diligence</p>
            <h2 className="display">Frequently addressed inquiries</h2>
            <div className="inquiry-list">
              {aboutFaqs.map((item) => (
                <details key={item.q}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
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
