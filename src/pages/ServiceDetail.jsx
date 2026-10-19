import { Link, useParams } from "react-router-dom";
import { sovereignPillars } from "../data/content";
import Button from "../components/Button";
import usePageTitle from "../hooks/usePageTitle";
import NotFound from "./NotFound";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = sovereignPillars.find((item) => item.slug === slug);
  usePageTitle(service ? `${service.title} | SRK Zenithvision` : "Page not found | SRK Zenithvision");

  if (!service) return <NotFound />;

  const others = sovereignPillars.filter((item) => item.slug !== service.slug);

  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <p className="crumb">
            <Link to="/">Home</Link> / <Link to="/services">Services</Link> / {service.title}
          </p>
          <p className="kicker">Pillar {service.n}</p>
          <h1>
            <span className="hero-line"><span>{service.title}</span></span>
            <span className="hero-line"><span className="gradient-text">{service.line}</span></span>
          </h1>
          <p className="deck">{service.line}</p>
        </div>
      </header>

      <section className="section section-tight">
        <div className="wrap detail-grid">
          <div className="detail-copy">
            <div>
              <h2>What this covers</h2>
              <p>{service.text}</p>
            </div>
            <ul className="points">
              {service.covers.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              <Link to="/about">About the firm →</Link>
            </p>
          </div>
          <aside className="detail-copy">
            {service.metric ? (
              <div className="sov-metric">
                <span>{service.metric}</span>
                <strong>{service.metricValue}</strong>
              </div>
            ) : null}
            {service.chips ? (
              <ul className="marks">
                {service.chips.map((chip) => (
                  <li key={chip}>{chip}</li>
                ))}
              </ul>
            ) : null}
            <Button to={service.contactTo}>Discuss this service</Button>
            <Link to="/services">All services →</Link>
          </aside>
        </div>
      </section>

      <section className="section section-tight">
        <div className="wrap">
          <p className="kicker">Other services</p>
          <div className="project-grid">
            {others.map((item) => (
              <Link className="post-card" key={item.slug} to={`/services/${item.slug}`}>
                <p className="meta">Pillar {item.n}</p>
                <h2>{item.title}</h2>
                <p>{item.line}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
