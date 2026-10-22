import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/content";
import ArtPanel from "../components/ArtPanel";
import PageHero from "../components/PageHero";
import usePageTitle from "../hooks/usePageTitle";

const groups = ["All", ...new Set(projects.map((project) => project.category))];

export default function Projects() {
  const pageRef = useRef(null);
  const gridRef = useRef(null);
  usePageTitle("Projects | SRK Zenithvision");
  const [group, setGroup] = useState("All");
  const visible = group === "All" ? projects : projects.filter((project) => project.category === group);

  return (
    <div className="projects-page" ref={pageRef}>
      <PageHero
        crumb={
          <p className="crumb projects-piece">
            <Link to="/">Home</Link> / Projects
          </p>
        }
        kicker="Proof"
        title="Selected work."
        accent="Proof, not promises."
      />

      <section className="projects-work">
        <div className="wrap">
          <div className="filter-row projects-filters projects-piece" role="group" aria-label="Filter projects">
            {groups.map((item) => (
              <button
                key={item}
                type="button"
                className={group === item ? "chip active" : "chip"}
                aria-pressed={group === item}
                onClick={() => setGroup(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="project-grid" ref={gridRef}>
            {visible.map((project) => (
              <Link className="project-card" key={project.slug} to={`/projects/${project.slug}`}>
                <ArtPanel variant={project.variant} />
                <p className="meta">
                  {project.category} · {project.year}
                </p>
                <h3>{project.client}</h3>
                <p>{project.summary}</p>
                <p className="metric">{project.metric}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
