import { useRef } from "react";
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
import useCardHover from "../hooks/useCardHover";

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

const engineeringCatalog = [
  "All Services (12)",
  "Web & SaaS (4)",
  "Mobile & Streaming (3)",
  "Custom Software & ERP (4)",
  "AI & Automation (2)",
  "Cloud & DevOps (3)",
  "UI/UX Design (2)",
  "Security & Data (3)",
];

const focusAreas = [
  {
    id: "01",
    label: "Web application development",
    title: "Web Application Development",
    text: "Launch a polished web product with the speed, accessibility, and flexible architecture to serve customers today and grow with your business.",
    tags: ["Next.js", "React 19", "TypeScript", "Tailwind CSS"],
    cta: "Explore Service",
  },
  {
    id: "02",
    label: "Mobile app development",
    title: "Mobile App Development",
    text: "Turn your product into a thoughtful iOS and Android experience, with intuitive navigation, reliable performance, and the features your users need.",
    tags: ["Flutter", "React Native", "Swift (iOS)", "Kotlin (Android)"],
    cta: "Explore Service",
  },
  {
    id: "03",
    label: "Custom software & ERP",
    title: "Custom Software & ERP Systems",
    text: "Bring your teams and operations together with software shaped around your processes, from internal tools and approval flows to full ERP platforms.",
    tags: ["Python", "Node.js", "PostgreSQL", "Enterprise Cloud"],
    cta: "Explore Service",
  },
  {
    id: "04",
    label: "UI/UX & product design",
    title: "UI/UX & Product Design",
    text: "Give your product a clear visual direction and an easy-to-use experience through research, interface design, and interactive prototypes.",
    tags: ["Figma", "Framer", "Prototyping", "UX Research"],
    cta: "Explore Service",
  },
  {
    id: "05",
    label: "Cloud & DevOps infrastructure",
    title: "Cloud Hosting & DevOps",
    text: "Build a dependable cloud foundation with deployment automation, observability, and infrastructure practices tailored to your team and workload.",
    tags: ["AWS", "Google Cloud", "Docker", "CI/CD Pipelines"],
    cta: "Explore Service",
  },
  {
    id: "06",
    label: "AI & automation solutions",
    title: "AI & Smart Automation",
    text: "Put AI and automation to work on practical tasks—from knowledge assistants and support workflows to integrations that reduce repetitive effort.",
    tags: ["OpenAI GPT-4", "Google Gemini", "LangChain", "n8n Automation"],
    cta: "Explore Service",
  },
  {
    id: "07",
    label: "Real-time live streaming",
    title: "Live Video & Audio Streaming",
    text: "Create live video and audio experiences with interactive rooms, real-time communication, and streaming infrastructure designed for your audience.",
    tags: ["WebRTC", "Zego Cloud", "Agora", "Flutter Streaming"],
    cta: "Explore Service",
  },
  {
    id: "08",
    label: "Growth & technical SEO",
    title: "Digital Growth & Technical SEO",
    text: "Make your site easier to discover and navigate with technical SEO, structured content, performance improvements, and focused landing pages.",
    tags: ["Technical SEO", "Google Console", "Schema.org", "Conversion CRO"],
    cta: "Explore Service",
  },
  {
    id: "09",
    label: "Cybersecurity & compliance",
    title: "Cybersecurity & Compliance",
    text: "Strengthen your security posture through architecture reviews, data-protection practices, risk assessments, and support for compliance readiness.",
    tags: ["HIPAA Ready", "SOC-2 Type II", "Data Encryption", "Penetration Audit"],
    cta: "Explore Service",
  },
  {
    id: "10",
    label: "Dedicated engineering squads",
    title: "Dedicated Developer Teams",
    text: "Extend your delivery capacity with a focused engineering team that works alongside your people, shares progress, and supports your roadmap.",
    tags: ["Dedicated Devs", "Full-Stack Squad", "Mobile Teams", "Agile Sprints"],
    cta: "Explore Service",
  },
  {
    id: "11",
    label: "High-speed APIs & integrations",
    title: "API Development & Integrations",
    text: "Connect your product to the services you rely on with well-documented APIs and integrations for payments, CRM, logistics, and internal systems.",
    tags: ["RESTful APIs", "GraphQL", "Node.js", "Payment Gateways"],
    cta: "Explore Service",
  },
  {
    id: "12",
    label: "Database & data analytics",
    title: "Database & Real-Time Analytics",
    text: "Organize and understand your data with resilient database design, dependable backup strategies, and dashboards that make key metrics easier to act on.",
    tags: ["PostgreSQL", "MongoDB", "Live Dashboards", "Data Pipelines"],
    cta: "Explore Service",
  },
];

export default function Services() {
  const pageRef = useRef(null);
  usePageTitle("Services | SRK Zenithvision");
  useCardHover(pageRef, ".focus-card");

  return (
    <div className="services-page" ref={pageRef}>
      <section className="svc-hero">
        <div className="wrap svc-hero-centered">
          <div className="engineering-catalog svc-piece">
            <p className="catalog-kicker">ENGINEERING CATALOG</p>
            <h1 className="display svc-title">
              <span className="hero-line">
                From First Idea to Full-Scale Product
              </span>
            </h1>
            <p className="catalog-description">
              Strategy, design, software, and infrastructure—one experienced team to help you shape, launch, and grow your digital product.
            </p>
            <div className="catalog-tags" aria-label="Engineering categories">
              {engineeringCatalog.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="home-block home-block-tight focus-section" id="focus">
        <div className="wrap">
          <div className="focus-grid">
            {focusAreas.map((item) => (
              <article className="focus-card" key={item.id}>
                <div className="focus-topline">
                  <span className="focus-dot" aria-hidden="true" />
                  <span>{item.id} - {item.label.toUpperCase()}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="focus-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <button className="focus-cta" type="button">
                  {item.cta} <span aria-hidden="true">→</span>
                </button>
                <span className="focus-number">{item.id}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="idea-cta-band">
        <div className="wrap">
          <div className="idea-cta-shell">
            <div className="idea-cta-copy">
              <p className="eyebrow">Have An Idea?</p>
              <h2>Let&apos;s Build It Together.</h2>
              <p>
                Partner with senior engineers to design, build, and scale your digital product from concept to store release.
              </p>
            </div>
            <div className="idea-cta-actions">
              <Button to="/contact" className="idea-cta-btn" icon="arrow">
                ⚡ Estimate Your Project
              </Button>
              <Button to="/contact" variant="ghost" className="idea-cta-btn idea-cta-btn-secondary" icon="none">
                📞 Book A Call
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
