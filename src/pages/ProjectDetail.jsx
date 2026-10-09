import { Link, useParams } from "react-router-dom";
import { projects } from "../data/content";
import ArtPanel from "../components/ArtPanel";
import Button from "../components/Button";
import usePageTitle from "../hooks/usePageTitle";
import NotFound from "./NotFound";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  usePageTitle(project ? `${project.client} | SRK Zenithvision` : "Page not found | SRK Zenithvision");

  if (!project) return <NotFound />;

  const more = projects.filter((item) => item.slug !== project.slug).slice(0, 3);

  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <p className="crumb">
            <Link to="/">Home</Link> / <Link to="/projects">Projects</Link> / {project.client}
          </p>
          <p className="meta">
            {project.category} · {project.year}
          </p>
          <h1>{project.client}</h1>
          <p className="deck">{project.summary}</p>
        </div>
      </header>

      <section className="section section-tight">
        <div className="wrap detail-grid">
          <ArtPanel variant={project.variant} className="art-lg" />
          <div className="detail-copy">
            <p className="metric">{project.metric}</p>
            <p className="metric-label">{project.metricLabel}</p>
            <div>
              <h2>The problem</h2>
              <p>{project.challenge}</p>
            </div>
            <div>
              <h2>What we did</h2>
              <p>{project.approach}</p>
            </div>
            <div>
              <h2>What changed</h2>
              <p>{project.outcome}</p>
            </div>
            <Button to="/contact">Start a conversation</Button>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="wrap">
          <p className="kicker">More work</p>
          <div className="project-grid">
            {more.map((item) => (
              <Link className="project-card" key={item.slug} to={`/projects/${item.slug}`}>
                <ArtPanel variant={item.variant} />
                <h3>{item.client}</h3>
                <p className="metric">{item.metric}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
