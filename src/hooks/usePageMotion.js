import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const BLOCKS = [
  ".sov-card",
  ".arsenal-grid article",
  ".protocol-grid article",
  ".reason-cards article",
  ".case-grid article",
  ".price-card",
  ".project-card",
  ".post-card",
  ".industry-card",
  ".product-card",
  ".job",
  ".tier",
  ".step",
  ".svc-stats > div",
  ".radar",
  ".contact-aside",
  ".form-grid",
  ".check-list",
  ".steward",
  ".faq details",
  ".detail-copy",
  ".prose",
].join(",");

const HOVER = ".sov-card, .project-card, .post-card, .industry-card, .product-card, .job, .tier, .price-card, .case-grid article, .arsenal-grid article, .protocol-grid article, .reason-cards article, .step";

/** Scroll and entrance motion for every page except Home and About, which have their own scenes. */
export default function usePageMotion(rootRef, pathname) {
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || pathname === "/" || pathname === "/about" || pathname === "/services" || pathname === "/projects") return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    window.scrollTo(0, 0);
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".page-hero .hero-line > span, .svc-hero .hero-line > span, .not-found .hero-line > span", {
        yPercent: 120,
        duration: 0.9,
        stagger: 0.14,
        ease: "power3.out",
      });
      gsap.from(
        ".page-hero .kicker, .page-hero .crumb, .page-hero .deck, .svc-hero .dot-kicker, .svc-hero .about-deck, .svc-hero .hero-actions, .not-found .kicker, .not-found .deck, .not-found .btn",
        {
          y: 28,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          delay: 0.18,
          ease: "power3.out",
        },
      );

      root.querySelectorAll("section").forEach((section) => {
        const head = section.querySelector(".center-head, .home-intro, .section-head");
        if (head) {
          gsap.from(head, {
            y: 36,
            opacity: 0,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: { trigger: head, start: "top 88%" },
          });
        }
        const blocks = section.querySelectorAll(BLOCKS);
        if (!blocks.length) return;
        gsap.from(blocks, {
          y: 52,
          opacity: 0,
          duration: 0.75,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: blocks[0].parentElement || section, start: "top 84%" },
        });
      });

      const cta = root.querySelector(".cta-band .wrap");
      if (cta) {
        gsap.from(cta.children, {
          y: 32,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: cta, start: "top 86%" },
        });
      }
    }, root);

    const cleanups = [];
    root.querySelectorAll(HOVER).forEach((card) => {
      const enter = () => {
        gsap.to(card, { y: -10, scale: 1.02, duration: 0.35, ease: "power2.out", overwrite: "auto" });
      };
      const leave = () => {
        gsap.to(card, { y: 0, scale: 1, duration: 0.4, ease: "power2.out", overwrite: "auto" });
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
  }, [pathname, rootRef]);
}
