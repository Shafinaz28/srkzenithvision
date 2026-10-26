import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CARDS = [
  ".service-card",
  ".project-card",
  ".post-card",
  ".industry-card",
  ".product-card",
  ".dossier-card",
  ".mission-card",
  ".team-card",
  ".focus-card",
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

const GROUPS = [
  ".services-grid",
  ".projects-grid",
  ".project-grid",
  ".post-grid",
  ".industry-grid",
  ".product-grid",
  ".dossier-grid",
  ".mission-cards",
  ".leadership-grid",
  ".focus-grid",
  ".founder-grid",
  ".timeline-grid",
  ".pillar-duo",
  ".trait-grid",
  ".sov-grid",
  ".arsenal-grid",
  ".protocol-grid",
  ".reason-cards",
  ".case-grid",
  ".tier-grid",
  ".tier-price-grid",
  ".method-flow",
  ".careers-list",
  ".steps",
  ".inquiry-list",
  ".svc-stats",
  ".detail-grid",
  ".faq",
  ".check-list",
  ".prose",
  ".products-layout > div:first-child",
  ".architecture-copy",
].join(",");

const LOOSE = [
  ".hero-description",
  ".section-intro",
  ".deck",
  ".about-deck",
  ".catalog-description",
  ".catalog-tags",
  ".prose-lead",
  ".quote-by",
  ".mission-intro > p:not(.dot-kicker)",
  ".mission-intro .story-badges",
  ".faq-lead",
  ".close-piece",
  ".home-aside",
  ".center-head > p",
  ".contact-inner p",
  ".cta-band p",
  ".hero-actions",
  ".hero-sculpture",
  ".radar",
  ".trust-strip",
  ".quote-slider",
  ".filters",
  ".filter-row",
  ".dashboard",
  ".architecture-art",
  ".founder-photo",
  ".founder-quote",
  ".protocol-row",
  ".faq-pill",
  ".steward",
  ".all-work",
  ".kicker",
  ".dot-kicker",
  ".eyebrow",
  ".crumb",
  ".meta",
  "form",
  ".cta-band .btn",
  ".contact-inner .btn",
  ".not-found .btn",
].join(",");

const HERO = ".hero, .page-hero, .about-hero, .svc-hero, .not-found";

function inHero(el) {
  return Boolean(el.closest(HERO));
}

/** Rise and stagger on every route. Copy stays on the page. */
export default function usePageMotion(rootRef, pathname) {
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    gsap.registerPlugin(ScrollTrigger);

    const animated = new Set();

    function covered(el) {
      for (const unit of animated) {
        if (unit === el || unit.contains(el)) return true;
      }
      return Boolean(el.closest(".trust-track, .quote-track"));
    }

    const ctx = gsap.context(() => {
      function rise(targets, { trigger, y = 44, delay = 0, stagger = 0, duration = 0.75 } = {}) {
        const list = [...targets].filter((el) => el && !covered(el));
        if (!list.length) return;
        list.forEach((el) => animated.add(el));
        const below = trigger && trigger.getBoundingClientRect().top > window.innerHeight * 0.92;
        gsap.from(list, {
          y,
          opacity: 0,
          duration,
          delay,
          stagger,
          ease: "power3.out",
          clearProps: "opacity,transform",
          scrollTrigger: below
            ? { trigger, start: "top 92%", toggleActions: "play none none none" }
            : undefined,
        });
      }

      root.querySelectorAll(GROUPS).forEach((group) => {
        if (covered(group) || group.closest(".dossier-band")) return;
        rise([...group.children], {
          trigger: inHero(group) ? undefined : group,
          y: 42,
          stagger: 0.07,
          duration: 0.7,
        });
      });

      root.querySelectorAll(CARDS).forEach((card) => {
        if (card.closest(".dossier-band")) return;
        rise([card], {
          trigger: inHero(card) ? undefined : card,
          y: 42,
          duration: 0.7,
        });
      });

      root.querySelectorAll("h1, h2, h3").forEach((heading) => {
        const lines = [...heading.children].filter((child) =>
          child.matches?.(".hero-line, .about-line, .slide-line")
        );
        const hero = inHero(heading);
        rise(lines.length > 1 ? lines : [heading], {
          trigger: hero ? undefined : heading,
          y: hero ? 58 : 46,
          stagger: lines.length > 1 ? 0.1 : 0,
          delay: hero ? 0.06 : 0,
        });
      });

      root.querySelectorAll(LOOSE).forEach((el) => {
        const hero = inHero(el);
        let delay = 0;
        if (hero && el.matches(".hero-description, .deck, .about-deck, .faq-lead")) delay = 0.22;
        else if (hero && el.matches(".hero-actions, .hero-sculpture, .radar, .svc-stats")) delay = 0.32;
        rise([el], {
          trigger: hero ? undefined : el,
          y: hero ? 28 : 36,
          delay,
          duration: 0.7,
        });
      });

      const footer = document.querySelector(".site-footer .footer-grid");
      if (footer) {
        rise([...footer.children], { trigger: footer, y: 28, stagger: 0.06, duration: 0.65 });
      }
    }, root);

    ScrollTrigger.refresh();
    let alive = true;
    document.fonts?.ready.then(() => {
      if (alive) ScrollTrigger.refresh();
    });

    return () => {
      alive = false;
      ctx.revert();
    };
  }, [pathname, rootRef]);
}
