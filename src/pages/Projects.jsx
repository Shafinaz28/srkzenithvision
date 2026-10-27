import { useState } from "react";
import { Link } from "react-router-dom";
import { projectIndustries } from "../data/content";
import Button from "../components/Button";
import PageHero from "../components/PageHero";
import usePageTitle from "../hooks/usePageTitle";

const groups = [
  "All Industries",
  "Healthcare & MedTech",
  "EdTech & E-Learning",
  "FinTech & Banking",
  "E-Commerce & Quick-Commerce",
  "Real Estate & PropTech",
  "Automotive & EV Mobility",
  "Hospitality & Travel Tech",
  "Gaming & Esports Platforms"
];

export default function Projects() {
  usePageTitle("Industries | SRK Zenithvision");
  const [group, setGroup] = useState(groups[0]);
  const visible =
    group === groups[0]
      ? projectIndustries
      : projectIndustries.filter((industry) => industry.name === group);

  return (
    <div className="projects-page industry-projects">
      <PageHero
        crumb={
          <p className="crumb projects-piece">
            <Link to="/">Home</Link> / Projects
          </p>
        }
        kicker="Enterprise industry solutions"
        title="Engineering Mission-Critical Software"
        
        text="From regulated HIPAA healthcare and sub-millisecond fintech trading engines to autonomous logistics and WebRTC streaming platforms—architected for scale, compliance, and zero downtime."
      />

      <section className="projects-work">
        <div className="wrap">
          <div className="filter-row projects-filters" role="group" aria-label="Filter industries">
            {groups.map((item) => {
              const label = item === groups[0] ? `${item} (${projectIndustries.length})` : item;
              return (
                <button
                  key={item}
                  type="button"
                  className={group === item ? "chip active" : "chip"}
                  aria-pressed={group === item}
                  onClick={() => setGroup(item)}
                >
                  {label}
                </button>
              );
            })}
          </div>
          <div className="industry-project-grid">
            {visible.map((industry) => (
              <article className="industry-project-card" key={industry.name}>
                <div className="industry-project-image">
                  <img src={industry.image} alt={`${industry.name} platform`} loading="lazy" />
                </div>
                <div className="industry-project-content">
                  <p className="industry-project-meta">
                    <span>{industry.icon} {industry.category}</span>
                    <span>{industry.badge}</span>
                  </p>
                  <h2>{industry.name}</h2>
                  <p className="industry-project-summary">{industry.summary}</p>
                  <p className="industry-project-capability">⚡ {industry.capability}</p>
                  <ul className="industry-project-tags">
                    {industry.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                  <Button to="/contact" className="industry-project-cta">
                    Explore Architecture Blueprint
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
