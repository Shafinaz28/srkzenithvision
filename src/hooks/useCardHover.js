import { useLayoutEffect } from "react";
import gsap from "gsap";

export default function useCardHover(rootRef, selector) {
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const media = gsap.matchMedia();
    media.add("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
      const cards = root.querySelectorAll(selector);
      const cleanups = [];

      cards.forEach((card) => {
        const onEnter = () => {
          gsap.to(card, {
            y: -8,
            scale: 1.015,
            duration: 0.28,
            ease: "power3.out",
            overwrite: "auto",
          });
        };
        const onLeave = () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.38,
            ease: "power3.out",
            overwrite: "auto",
          });
        };

        card.addEventListener("pointerenter", onEnter);
        card.addEventListener("pointerleave", onLeave);
        cleanups.push(() => {
          card.removeEventListener("pointerenter", onEnter);
          card.removeEventListener("pointerleave", onLeave);
          gsap.killTweensOf(card);
        });
      });

      return () => cleanups.forEach((cleanup) => cleanup());
    }, root);

    return () => media.revert();
  }, [rootRef, selector]);
}
