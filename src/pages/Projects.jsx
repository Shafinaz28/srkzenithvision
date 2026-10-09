import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
      gsap.from(".page-hero .kicker, .page-hero .deck, .projects-piece", {
        y: 28,
        opacity: 0,
        duration: 0.75,
        stagger: 0.12,
        delay: 0.24,
        ease: "power3.out",
      });
    }, root);
    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        y: 52,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: grid, start: "top 84%" },
      });
    }, grid);

    const cleanups = [];
    grid.querySelectorAll(".project-card").forEach((card) => {
      const enter = () => {
        gsap.to(card, {
          y: -10,
          scale: 1.02,
          boxShadow: "0 22px 48px rgba(11, 11, 29, 0.14)",
          duration: 0.35,
          ease: "power2.out",
          overwrite: "auto",
        });
      };
      const leave = () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          boxShadow: "0 12px 32px rgba(11, 11, 29, 0.06)",
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
  }, [group]);

  return (
    <div className="projects-page" ref={pageRef}>
      <PageHero
        crumb={
          <p className="crumb projects-piece">
            <Link to="/">Home</Link> / Projects
          </p>
        }
        kicker="Proof"
        title="Selected work"
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
