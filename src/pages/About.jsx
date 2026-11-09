import { useRef } from "react";
import { Link } from "react-router-dom";
import { aboutDossier, aboutFaqs, brand, team } from "../data/content";
import Button from "../components/Button";
import usePageTitle from "../hooks/usePageTitle";
import useCardHover from "../hooks/useCardHover";

const aboutValues = [
  {
    title: "Radical Transparency",
    text: "You see what we see — live dashboards, honest numbers, and straight answers when something isn't working.",
    icon: "eye",
  },
  {
    title: "Outcomes Over Activity",
    text: "Busy isn't a metric. We measure ourselves on the revenue, pipeline and growth we create — nothing else.",
    icon: "target",
  },
  {
    title: "Partners, Not Vendors",
    text: "We embed with your team, share your targets, and win or lose by the same scoreboard you do.",
    icon: "partners",
  },
];

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
  useCardHover(
    pageRef,
    ".mission-card, .team-card, .about-value-card"
  );

  return (
    <div className="about-page" ref={pageRef}>
      <section className="about-hero">
        <div className="wrap">
          <p className="crumb about-hero-crumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">›</span>
            About us
          </p>
          <h1 className="display about-title">
            <span className="about-line">
              <span>The architects behind</span>
            </span>
            
          </h1>
          <p className="about-deck about-piece">
            Founded in 2023, we build sovereign digital systems that help ambitious businesses move faster, own their technology, and grow with confidence.
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

      <section className="home-block home-block-tight band-light founder-section">
        <div className="wrap founder-grid">
          <figure className="founder-photo">
            <img src="/suhas-rk.png" alt="Suhas RK" />
          </figure>
          <div className="founder-copy">
            <div className="founder-story">
              <p className="dot-kicker">Foundational directive</p>
              <blockquote className="founder-quote">
                “We engineer sovereign technological architecture that grants enterprises decisive velocity and market dominance.”
              </blockquote>
              <p className="quote-by">— Suhas RK · Founder & CEO</p>
              <p className="prose-lead">
                Suhas RK founded SRK ZenithVision in 2023 as an elite sovereign skunkworks—uniting mathematical rigor with sculptural digital luxury to liberate enterprises from legacy constraints.
              </p>
              <p className="founder-detail">
                That founding belief shapes how we work: begin with the outcome, bring strategy, design, and engineering together, and build technology clients can understand, own, and continue to evolve. The goal is not simply to deliver software, but to give every business a stronger foundation for what comes next.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="home-block home-block-tight mission-vision-section">
        <div className="wrap mission-vision-wrap">
          <div className="mission-intro">
            <div className="mission-intro-copy">
              <p className="dot-kicker">Mission & vision</p>
              <h2 className="display">Built for growth. <span>Guided by conviction.</span></h2>
              <p>
                We believe ambitious enterprises should never have to trade speed for sovereignty. We build elegant systems that turn strategic intent into lasting operational advantage.
              </p>
            </div>
          </div>
          <div className="mission-cards">
            <article className="mission-card">
              <span><i>01</i> Our mission</span>
              <h3>Make growth a system, not a gamble.</h3>
              <p>Unite strategic thinking, engineering discipline, and creative execution so growth becomes a system instead of a gamble.</p>
            </article>
            <article className="mission-card">
              <span><i>02</i> Our vision</span>
              <h3>Build what comes next.</h3>
              <p>Build the next generation of category-defining institutions through disciplined innovation and uncompromising craft.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="home-block home-block-tight band-light">
        <div className="wrap leadership-wrap">
          <div className="leadership-heading">
            <p className="dot-kicker">Leadership, built to deliver</p>
            <h2 className="display">The team & leadership</h2>
            <p>A compact leadership group that combines strategic clarity, craft, and operating discipline.</p>
          </div>
          <div className="leadership-layout">
            <div className="leadership-intro">
              <h3>One team.<br />Four disciplines.</h3>
              <p className="leadership-description">
                Senior owners bring commercial clarity, creative conviction, and measurement together at every stage of the work.
              </p>
              <div className="leadership-summary">
                <strong>04</strong>
                <span>senior disciplines<br />one accountable team</span>
              </div>
            </div>
            <div className="leadership-grid">
              {team.map((person, index) => (
                <article className="team-card" key={person.role}>
                  <span className="team-index">0{index + 1}<i aria-hidden="true" /></span>
                  <h3>{person.role}</h3>
                  <p>{person.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-values-section">
        <div className="wrap">
          <div className="about-values-heading">
            <p className="about-values-kicker"><span aria-hidden="true" />Our values</p>
            <h2>What we <span>stand for</span></h2>
          </div>
          <div className="about-values-grid">
            {aboutValues.map((item) => (
              <article className="about-value-card" key={item.title}>
                <span className="about-value-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    {item.icon === "eye" && (
                      <>
                        <path d="M2.5 12s3.3-6.5 9.5-6.5 9.5 6.5 9.5 6.5-3.3 6.5-9.5 6.5S2.5 12 2.5 12Z" />
                        <circle cx="12" cy="12" r="3" />
                      </>
                    )}
                    {item.icon === "target" && (
                      <>
                        <circle cx="11" cy="13" r="7.5" />
                        <circle cx="11" cy="13" r="3.5" />
                        <path d="m9.5 13.5 2 2L21 6" />
                        <path d="M17 6h4v4" />
                      </>
                    )}
                    {item.icon === "partners" && (
                      <>
                        <circle cx="9" cy="8" r="3" />
                        <path d="M3.5 19c.5-3 2.4-4.5 5.5-4.5s5 1.5 5.5 4.5M16 5.5a3 3 0 0 1 0 5.8M16.5 14.5c2.4.4 3.8 1.8 4 4.5" />
                      </>
                    )}
                  </svg>
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="close-band band-light about-close-cta">
        <div className="wrap">
          <p className="about-cta-kicker"><span aria-hidden="true" />Ready to build?</p>
          <h2 className="display">
            <span>Ready to architect{" "}<span className="about-cta-accent">what comes next?</span></span>
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
