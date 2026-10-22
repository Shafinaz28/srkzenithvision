import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

const CARDS = [
  ".service-card",
  ".project-card",
  ".post-card",
  ".industry-card",
  ".product-card",
  ".dossier-card",
  ".time-card",
  ".nda-card",
  ".enquiry-card",
  ".sov-card",
  ".price-card",
  ".job",
  ".tier",
  ".principle",
  ".method-step",
  ".product-item",
  ".arsenal-grid article",
  ".protocol-grid article",
  ".reason-cards article",
  ".case-grid article",
].join(",");

const TYPE_LINE = ".page-hero .deck, .about-hero .about-deck, .svc-hero .about-deck, .not-found .deck";

/** Text rises in from below, and the intro line types itself, on every page. */
export default function usePageMotion(rootRef, pathname) {
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    gsap.registerPlugin(ScrollTrigger, TextPlugin);

    const ctx = gsap.context(() => {
      const typeLine = root.querySelector(TYPE_LINE);
      if (typeLine) {
        const value = typeLine.textContent.trim();
        if (value) {
          typeLine.textContent = "";
          gsap.to(typeLine, {
            duration: Math.min(2.8, Math.max(1.2, value.length * 0.02)),
            text: value,
            ease: "none",
            delay: 0.35,
          });
        }
      }

      const headings = [...root.querySelectorAll("h1, h2, h3")].filter((el) => !el.closest(CARDS));
      headings.forEach((heading) => {
        const inHero = heading.closest(".hero, .page-hero, .about-hero, .svc-hero, .not-found");
        gsap.from(heading, {
          y: 56,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: inHero ? undefined : { trigger: heading, start: "top 92%" },
        });
      });

      root.querySelectorAll(".hero-description").forEach((line) => {
        gsap.from(line, {
          y: 28,
          opacity: 0,
          duration: 0.75,
          delay: 0.2,
          ease: "power3.out",
        });
      });

      root.querySelectorAll(".section-intro").forEach((line) => {
        gsap.from(line, {
          y: 36,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: line, start: "top 92%" },
        });
      });
    }, root);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, [pathname, rootRef]);
}
