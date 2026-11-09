import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ascent,
  brand,
  executiveQuotes,
  orbit,
  posts,
  practices,
  testimonials,
  trusted,
} from "../data/content";
import Button from "../components/Button";
import usePageTitle from "../hooks/usePageTitle";

function MethodIcon({ name }) {
  const paths = {
    Discover: ["M10.5 10.5m-5.5 0a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0 -11 0", "M15 15l5 5", "M10.5 8.2v4.6", "M8.2 10.5h4.6"],
    Strategize: ["M4 6h16v14H4z", "M4 10h16", "M8 4v4", "M16 4v4", "M8 14h3", "M13 14h3", "M8 17h3"],
    Create: ["M16 4l4 4", "M15 5l4 4-9 9H6v-4z"],
    Build: ["M3 5h18v14H3z", "M3 9h18", "M8 13l-2 2 2 2", "M16 13l2 2-2 2", "M13 12l-2 6"],
    Launch: ["M12 2c2.2 3.2 3.2 6 3.2 8.2a3.2 3.2 0 01-6.4 0C8.8 8 9.8 5.2 12 2z", "M9.2 13.2L6 18l3.4-1.2", "M14.8 13.2L18 18l-3.4-1.2", "M12 15.4V21"],
    Grow: ["M4 19V5", "M4 19h16", "M7 15l4-5 3 2 5-6"],
  };
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {(paths[name] || paths.Discover).map((d) => (
        <path key={d} d={d} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      ))}
    </svg>
  );
}

function CycleGlyph({ name, className = "" }) {
  const paths = {
    Idea: ["M12 3a5 5 0 00-3 9c.5.5 1 1.3 1 2h4c0-.7.5-1.5 1-2a5 5 0 00-3-9z", "M10 18h4", "M11 21h2"],
    Design: ["M4 20l3.2-.8L19 7.4 16.6 5 4.8 16.8 4 20z", "M14.2 6.4l3.4 3.4"],
    Tech: ["M9 9h6v6H9z", "M12 5v2", "M12 17v2", "M5 12h2", "M17 12h2", "M7 5v2", "M17 5v2", "M7 17v2", "M17 17v2"],
    Product: ["M5 7h2l1.6 9h8.2L19 9H8", "M10 20.2a1.1 1.1 0 100-2.2 1.1 1.1 0 000 2.2z", "M16.5 20.2a1.1 1.1 0 100-2.2 1.1 1.1 0 000 2.2z"],
    Marketing: ["M4 19V5", "M4 19h16", "M8 15l3-4 3 2 5-7"],
    Growth: ["M7 17L17 7", "M10 7h7v7"],
  };
  return (
    <svg className={`cycle-glyph ${className}`} viewBox="0 0 24 24" aria-hidden="true">
      {(paths[name] || paths.Idea).map((d) => (
        <path key={d} d={d} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      ))}
    </svg>
  );
}

function PracticeIcon({ name }) {
  const paths = {
    code: "M8 8l-4 4 4 4M16 8l4 4-4 4M13 6l-2 12",
    nodes: "M12 7a2 2 0 100-4 2 2 0 000 4zM6 19a2 2 0 100-4 2 2 0 000 4zM18 19a2 2 0 100-4 2 2 0 000 4zM12 7v4M8 15l3-3 2 2 3-3",
    chart: "M4 19V5M4 19h16M8 15l3-4 3 2 4-6",
    aperture: "M12 16a4 4 0 100-8 4 4 0 000 8zM12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6L17 7M7 17l-1.4 1.4",
    device: "M7 4h10a1 1 0 011 1v12H6V5a1 1 0 011-1zM9 20h6",
    film: "M5 6h14v12H5zM9 6v12M15 6v12M5 10h4M15 10h4M5 14h4M15 14h4",
  };
  return (
    <svg viewBox="0 0 24 24" className="practice-svg" aria-hidden="true">
      <path d={paths[name]} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  usePageTitle("SRK Zenithvision | Digital Marketing Company");
  const practiceGrid = useRef(null);
  const heroRef = useRef(null);
  const testimonialSlider = useRef(null);
  const [activeFaq, setActiveFaq] = useState(0);

  const faqs = [
    {
      q: "How soon will we see results?",
      a: "Paid channels usually show signal inside the first two weeks. SEO and content compound over time. We agree on realistic targets up front and share regular reports against them.",
    },
    {
      q: "Do you work with our in-house team?",
      a: "Yes. We work alongside your existing marketing and technical teams, filling expertise gaps and helping everyone move toward the same goals.",
    },
    {
      q: "What does a typical engagement cost?",
      a: "Every engagement is scoped around your goals, team, and timeline. After an initial conversation, we’ll share a clear proposal with deliverables and pricing.",
    },
    {
      q: "Which industries do you specialise in?",
      a: "We work with ambitious businesses across technology, healthcare, finance, real estate, ecommerce, and other sectors where digital can make a measurable difference.",
    },
    {
      q: "How do you report on performance?",
      a: "You’ll get clear reporting on agreed business metrics, along with regular reviews that explain what is working and what we recommend doing next.",
    },
    {
      q: "Can we start with a single project?",
      a: "Absolutely. We can start with a focused project or audit, then discuss ongoing support if it makes sense for your team.",
    },
  ];

  const testimonialItems = [
    ...executiveQuotes.map((item) => ({ ...item, key: item.initials })),
    ...testimonials.map((item, index) => ({
      ...item,
      key: `client-${index}`,
    })),
  ];

  function moveTestimonials(direction) {
    const slider = testimonialSlider.current;
    if (!slider) return;

    const card = slider.querySelector(".testimonial");
    const gap = Number.parseFloat(getComputedStyle(slider.firstElementChild).columnGap) || 16;
    const distance = (card?.getBoundingClientRect().width || slider.clientWidth) + gap;
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    const nextPosition = slider.scrollLeft + direction * distance;

    slider.scrollTo({
      left: direction > 0 && nextPosition >= maxScroll - 1
        ? 0
        : direction < 0 && nextPosition < 0
          ? maxScroll
          : nextPosition,
      behavior: "smooth",
    });
  }

  return (
    <div className="home-co font-sans text-foreground">
      <section className="hero relative flex min-h-screen items-center justify-center overflow-hidden px-4 pb-10 pt-32 text-center md:px-8" ref={heroRef}>
        <div className="container-site hero-content relative z-[3] mx-auto flex w-full max-w-[860px] flex-col items-center px-4 text-center md:px-0">
          <p className="eyebrow mb-7 flex w-fit items-center gap-2.5 rounded-full border border-primary/45 bg-white/[0.04] px-3.5 py-2 text-[11px] uppercase tracking-[0.1em] text-primary">
            <span className="status-dot size-[5px] rounded-full bg-primary" />
            {brand.eyebrow}
          </p>
          <h1 className="mx-auto mb-6 max-w-[920px] text-center text-[clamp(2rem,4vw,2.75rem)] font-medium leading-[1.2]">
            <span className="hero-line block whitespace-normal sm:whitespace-nowrap">
              <span className="bg-gradient-to-r from-tertiary via-primary to-[#8c7320] bg-clip-text text-transparent">{brand.headlineBefore} </span>
              <span className="hero-accent bg-gradient-to-r from-tertiary via-primary to-[#8c7320] bg-clip-text text-transparent">{brand.headlineAccent}</span>
            </span>
            <span className="hero-line block whitespace-normal sm:whitespace-nowrap">
              <span className="bg-gradient-to-r from-tertiary via-primary to-[#8c7320] bg-clip-text text-transparent">{brand.headlineAfter}</span>
            </span>
          </h1>
          <p className="hero-description hero-piece mx-auto mb-7 max-w-[640px] text-base leading-relaxed text-white/70">{brand.heroText}</p>
          <div className="hero-actions hero-piece flex flex-row flex-wrap items-center justify-center gap-2">
            <Button to="/contact" variant="ghost">Let&apos;s build something bold</Button>
            <Button to="/projects" variant="ghost" className="btn-plain">Explore our work</Button>
          </div>
        </div>
        <div className="hero-sculpture hero-piece" aria-hidden="true">
            <svg viewBox="0 0 640 560">
              <defs>
                <linearGradient id="ribbon" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#f8e7b0" />
                  <stop offset="42%" stopColor="#d4af37" />
                  <stop offset="100%" stopColor="#8c7320" />
                </linearGradient>
              </defs>
              <path fill="url(#ribbon)" d="M150 430 L310 70 L360 70 L230 430 Z" />
              <path fill="url(#ribbon)" opacity="0.85" d="M300 90 L560 390 L490 450 L270 150 Z" />
              <path fill="none" stroke="url(#ribbon)" strokeWidth="34" strokeLinecap="round" d="M120 300 C 230 210, 390 230, 560 340" />
              <ellipse cx="320" cy="490" rx="230" ry="16" fill="rgba(212,175,55,0.22)" />
            </svg>
        </div>
      </section>

      <section className="trust-strip border-0 bg-transparent py-6">
        <div className="trust-slider overflow-hidden">
          <div className="trust-track flex w-max items-center gap-14">
            {[0, 1].map((copy) =>
              trusted.map((name) => (
                <span className={`${copy ? "client-logo trust-copy" : "client-logo"} whitespace-nowrap text-lg font-semibold text-muted`} key={`${copy}-${name}`}>{name}</span>
              ))
            )}
          </div>
        </div>
      </section>

      <section className="section who-band px-0 py-16 md:py-20">
        <div className="container-site who-layout mx-auto grid w-[calc(100%-2rem)] max-w-[1280px] items-center gap-8 sm:w-[calc(100%-3.5rem)] md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.9fr)] md:gap-x-16">
          <figure className="who-photo">
            <img className="aspect-[16/11] w-full rounded-[22px] object-cover object-center" src="/who-team.png" alt="Two colleagues reviewing work together on a tablet" />
            <div className="who-badge" aria-hidden="true">
              <svg viewBox="0 0 120 120">
                <defs>
                  <path id="who-ring" d="M60 60m-44 0a44 44 0 1 1 88 0a44 44 0 1 1-88 0" />
                </defs>
                <circle cx="60" cy="60" r="58" fill="#d4af37" />
                <circle cx="60" cy="60" r="46" fill="#080b10" />
                <text fill="#f5d77f" fontSize="7.4" fontWeight="700" letterSpacing="1.4">
                  <textPath href="#who-ring">PREMIUM SERVICES AND SUPPORT • PREMIUM SERVICES AND SUPPORT •</textPath>
                </text>
              </svg>
            </div>
          </figure>
          <div className="who-copy">
            <p className="eyebrow mx-0 mb-0 flex w-fit items-center gap-2.5 rounded-full border border-primary/45 bg-white/[0.04] px-3.5 py-2 text-[11px] uppercase tracking-[0.1em] text-primary">Who we are</p>
            <h2 className="mt-3 max-w-[14ch] text-left text-[clamp(2rem,4vw,2.75rem)] font-medium leading-tight">Your digital future, held to one standard of excellence.</h2>
            <p className="mt-4 max-w-[46ch] text-[15px] leading-[1.7] text-muted">From the first idea to a system the business owns. Strategy, engineering, and creative work stay on one brief, so the work that ships is the work that was promised.</p>
            <Link className="card-more mt-6 inline-flex h-10 items-center justify-center self-start rounded-full bg-gradient-to-r from-tertiary via-primary to-[#8c7320] px-5 text-xs font-bold uppercase tracking-wider text-background" to="/about">Discover more</Link>
          </div>
        </div>
      </section>

      <section className="section pillar-band px-0 py-16 md:py-20" id="practices">
        <div className="container-site mx-auto w-[calc(100%-2rem)] max-w-[1280px] sm:w-[calc(100%-3.5rem)]">
          <div className="band-head mx-auto mb-7 max-w-[760px] text-center">
            <h2 className="mx-auto text-[clamp(2rem,4vw,2.75rem)] font-medium leading-[1.2]">Everything You Need to Lead Digital</h2>
          </div>
          <div className="services-grid grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3" ref={practiceGrid}>
            {practices.map((item, index) => (
              <article className={`service-card practice tone-${index % 3} relative flex min-h-full flex-col overflow-hidden rounded-[26px] border border-white/25 p-6 text-left transition-colors duration-300 hover:border-primary sm:p-7`} key={item.n}>
                <span className="practice-icon mb-4 inline-flex size-12 shrink-0 items-center justify-center self-center rounded-[14px] border border-tertiary/75 bg-secondary/30 shadow-[0_0_14px_oklch(0.766_0.139_91_/_0.45),0_0_28px_oklch(0.766_0.139_91_/_0.18)]">
                  <PracticeIcon name={item.icon} />
                </span>
                <p className="practice-label mb-2.5 text-[10px] font-bold uppercase leading-snug tracking-[0.12em] text-primary">{item.n} - {item.label}</p>
                <h3 className="mb-4 w-full text-center text-[20px] font-semibold leading-tight text-white sm:text-[22px]">{item.title}</h3>
                <span className="card-rule mb-5 block h-0.5 w-full rounded-full bg-gradient-to-r from-[#c9842a] to-tertiary" aria-hidden="true" />
                <p className="practice-description mb-4 text-[13px] leading-relaxed text-white/70">{item.text}</p>
                <div className="practice-tags mt-auto flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span className="inline-flex min-h-[27px] items-center rounded-full border border-white/15 bg-white/[0.04] px-2 py-1 text-[10px] font-semibold leading-tight text-white/80" key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="home-services-action mt-7 flex justify-center">
            <Button to="/services">Explore all services</Button>
          </div>
        </div>
      </section>

      {/* <section className="section architecture px-0 py-16 md:py-20" id="architecture">
        <div className="container-site mx-auto w-[calc(100%-2rem)] max-w-[1280px] sm:w-[calc(100%-3.5rem)]">
          <div className="cycle-intro mx-auto mb-10 text-center">
              <h2>
                <span className="block text-[clamp(2rem,4vw,2.75rem)] font-medium leading-tight">One ecosystem.</span>
                <span className="gradient-text block text-[clamp(2rem,4vw,2.75rem)] font-medium leading-tight">Boundless possibilities.</span>
              </h2>
          </div>
          <div className="eco-layout mx-auto grid w-fit max-w-full items-center justify-center gap-2 md:grid-cols-[minmax(280px,400px)_minmax(260px,380px)] md:gap-x-14">
            <div className="cycle">
            <svg className="cycle-core" viewBox="0 0 100 100" aria-hidden="true">
              <path className="flow" d="M50 28 C62 36 40 42 50 50 C62 58 40 66 50 74" />
              <path className="flow flow-gold" d="M28 38 C36 42 42 46 48 50" />
              <path className="flow" d="M72 38 C64 42 58 46 52 50" />
              <path className="flow flow-gold" d="M28 62 C36 58 42 54 48 50" />
              <path className="flow" d="M72 62 C64 58 58 54 52 50" />
              <circle className="joint" cx="50" cy="28" r="1.1" />
              <circle className="joint" cx="50" cy="50" r="1.2" />
              <circle className="joint" cx="50" cy="74" r="1.1" />
              <g className="gear" transform="translate(43 46)">
                <circle r="6.2" />
                <circle r="2.2" />
              </g>
              <g className="gear" transform="translate(58 56)">
                <circle r="4.4" />
                <circle r="1.6" />
              </g>
            </svg>
            <ol className="cycle-nodes">
              {orbit.map((node, index) => {
                const angle = ((-90 + index * 60) * Math.PI) / 180;
                return (
                      <li
                        className={`cycle-node tone-${index} absolute z-[2] flex aspect-square w-[26%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-1 rounded-full border border-white/20 bg-white/[0.08] px-1.5 text-center text-xs font-bold leading-none text-white backdrop-blur-2xl`}
                    key={node.n}
                    style={{
                      left: `${50 + Math.cos(angle) * 36}%`,
                      top: `${50 + Math.sin(angle) * 36}%`,
                    }}
                  >
                    <CycleGlyph name={node.label} className="size-4" />
                    <span>{node.label}</span>
                  </li>
                );
              })}
            </ol>
            </div>
            <div className="cycle-card relative flex min-h-[210px] items-center justify-center rounded-[18px] border border-white/20 px-8 py-9 text-center shadow-[inset_0_1px_0_#ffffff47,0_16px_36px_#00000047] backdrop-blur-2xl">
              <p className="max-w-[34ch] text-base leading-relaxed text-white">From raw genesis to market dominance. A closed-loop framework that connects strategy, engineering, and cultural impact, so every asset moves your business forward.</p>
              <svg className="cycle-spark" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M8 0l1.2 5.2L16 8l-6.8 1.2L8 16l-1.2-6.8L0 8l6.8-1.2L8 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section> */}

      <section className="section px-0 py-16 md:py-20" id="method">
        <div className="container-site mx-auto w-[calc(100%-2rem)] max-w-[1280px] sm:w-[calc(100%-3.5rem)]">
          <div className="section-heading mb-7 flex flex-col items-center gap-4 text-center">
            <div>
              <p className="eyebrow mx-0 mb-4 flex w-fit items-center gap-2.5 rounded-full border border-primary/45 bg-white/[0.04] px-3.5 py-2 text-[11px] uppercase tracking-[0.1em] text-primary">Predictable excellence</p>
              <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-medium leading-tight">The 6-step <span className="gradient-text">methodology.</span></h2>
            </div>
            <p className="section-intro max-w-[420px] text-xs leading-[1.9] text-muted">A disciplined roadmap from the first conversation to global scale.</p>
          </div>
          <div className="method-flow relative mt-12 grid grid-cols-2 items-start gap-x-4 gap-y-8 sm:gap-x-6 lg:grid-cols-6">
            <svg className="method-wave pointer-events-none absolute left-0 top-0 hidden h-[170px] w-full lg:block" viewBox="0 0 1200 170" preserveAspectRatio="none" aria-hidden="true">
              <path d="M100 46 C200 46 200 124 300 124 C400 124 400 46 500 46 C600 46 600 124 700 124 C800 124 800 46 900 46 C1000 46 1000 124 1100 124" />
            </svg>
            {ascent.map((step, index) => (
              <article className={`method-step relative z-[1] flex min-w-0 flex-col items-center text-center ${index % 2 ? "is-low lg:mt-[78px]" : ""}`} key={step.n}>
                <div className="method-orb grid size-[92px] place-items-center rounded-full border border-tertiary/80 bg-background text-tertiary transition duration-300 hover:-translate-y-2.5 hover:border-primary hover:bg-primary hover:text-background hover:shadow-[0_16px_36px_#d4af3752]">
                  <MethodIcon name={step.title} />
                </div>
                <h3 className="mt-4 text-base font-semibold transition-colors">{step.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">{step.text}</p>
                <strong className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-primary">{step.when}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-0 py-16 md:py-24" aria-labelledby="why-us-title">
        <div className="mx-auto grid w-[calc(100%-2rem)] max-w-[1280px] items-center gap-10 sm:w-[calc(100%-3.5rem)] lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.85fr)] lg:gap-16">
          <div className="order-2 min-w-0 lg:order-1">
            <p className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-primary/45 bg-white/[0.04] px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-primary">
              <span className="size-1.5 animate-pulse rounded-full bg-primary" />
              What sets us apart
            </p>

            <div className="mb-4 h-0.5 w-24 rounded-full bg-primary" aria-hidden="true" />
            <h2 id="why-us-title" className="mb-6 max-w-[48ch] text-left text-[13px] font-normal leading-[1.65] text-white/85 sm:text-sm">
              Most agencies report activity. We report outcomes — and structure every engagement so you can see exactly what your budget returned.
            </h2>

            <div className="divide-y divide-white/10 border-y border-white/10">
              {[
                {
                  title: "Data-Driven Strategy",
                  text: "Every recommendation is backed by your numbers, not agency instinct.",
                  icon: "M4 19V5M4 19h16M8 15l3-4 3 2 4-6",
                },
                {
                  title: "Full-Funnel Integration",
                  text: "Awareness to retention, one connected program instead of channel silos.",
                  icon: "M4 7h16M7 4v6M17 4v6M5 13h14M8 17l3 3 5-6",
                },
                {
                  title: "Transparent Reporting",
                  text: "Live dashboards and plain-English reports — no smoke, no mirrors.",
                  icon: "M4 19V5M4 19h16M8 15v-3M12 15V8M16 15v-5",
                },
              ].map((item) => (
                <article className="group flex items-start gap-4 py-5 transition-colors duration-200" key={item.title}>
                  <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-xl border border-white/15 bg-white/[0.03] text-primary transition-colors duration-300 group-hover:border-primary/50 group-hover:bg-primary/10">
                    <svg className="size-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d={item.icon} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <h3 className="mb-1 text-base font-semibold text-white transition-colors duration-200 group-hover:text-primary">
                      {item.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-white/70 sm:text-sm">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <figure className="relative order-1 mx-auto w-full max-w-[400px] overflow-hidden rounded-[22px] border border-white/15 bg-white/[0.02] shadow-2xl transition-all duration-300 hover:border-primary/40 lg:order-2 lg:justify-self-end">
            <img
              className="aspect-[0.85] w-full object-cover object-center transition-transform duration-700 hover:scale-105"
              src="/who-team.png"
              alt="SRK Zenithvision colleagues collaborating on a project"
              loading="lazy"
            />
            <figcaption className="absolute bottom-4 right-4 max-w-[calc(100%-2rem)] rounded-xl border border-white/20 bg-background/80 px-4 py-3 text-white shadow-xl backdrop-blur-md sm:bottom-5 sm:right-5">
              <span className="mb-1 block text-sm tracking-widest text-primary" aria-label="5 out of 5 stars">★★★★★</span>
              <span className="block text-[11px] font-semibold tracking-wide text-white">Trusted client partnerships</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section testimonials overflow-hidden bg-background px-0 py-14 md:py-20" id="trust">
        <div className="mx-auto w-[calc(100%-2rem)] max-w-[1040px] sm:w-[calc(100%-3.5rem)]">
          <div className="mb-7 flex items-center justify-between">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/80">
              <span className="size-1 rounded-full bg-primary" />
              Testimonials
            </p>
            <div className="flex gap-2">
              {[-1, 1].map((direction) => (
                <button
                  className="grid size-8 place-items-center rounded-full border border-white/15 text-sm text-white/80 transition-colors hover:border-primary hover:text-primary"
                  key={direction}
                  type="button"
                  aria-label={direction < 0 ? "Previous testimonials" : "Next testimonials"}
                  onClick={() => moveTestimonials(direction)}
                >
                  {direction < 0 ? "←" : "→"}
                </button>
              ))}
            </div>
          </div>
          <div className="mx-auto mb-7 h-0.5 w-10 rounded-full bg-primary" aria-hidden="true" />
          <div className="quote-slider mt-0 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" ref={testimonialSlider}>
            <div className="quote-track flex w-max animate-none gap-4">
              {testimonialItems.map((item) => (
                <article className="testimonial flex w-[min(380px,85vw)] shrink-0 flex-col rounded-xl border border-white/[0.06] p-5 transition-colors hover:border-primary/30" key={item.key}>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-lg font-bold leading-none text-primary" aria-hidden="true">❞</span>
                    <span className="text-xs tracking-[0.16em] text-primary" aria-label="5 out of 5 stars">★★★★★</span>
                  </div>
                  <blockquote className="mb-6 flex-1 text-xs leading-relaxed text-white/85">
                    {item.quote}
                  </blockquote>
                  <div className="person flex items-center gap-3">
                    {item.initials ? (
                      <span className="avatar grid size-9 shrink-0 place-items-center rounded-full bg-white/15 text-xs font-semibold text-white">{item.initials}</span>
                    ) : (
                      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/15 text-white/75" aria-hidden="true">
                        <svg className="size-4" viewBox="0 0 24 24" fill="none">
                          <path d="M20 21a8 8 0 0 0-16 0M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </span>
                    )}
                    <div className="min-w-0 flex-1">
                      <strong className="block truncate text-[11px] font-semibold text-white">{item.name || item.by}</strong>
                      {item.role && <small className="block truncate text-[9px] text-white/55">{item.role}</small>}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-0 py-16 md:py-24" aria-labelledby="home-blog-title">
        <div className="mx-auto w-[calc(100%-2rem)] max-w-[1280px] sm:w-[calc(100%-3.5rem)]">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-primary/45 bg-white/[0.04] px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-primary">
                <span className="size-1.5 animate-pulse rounded-full bg-primary" />
                From the blog
              </p>
              <h2 id="home-blog-title" className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-medium leading-tight text-white">
                Ideas for what comes next.
              </h2>
            </div>
            <Link
              className="inline-flex items-center gap-2 pb-1 text-sm font-semibold text-white transition-colors hover:text-primary"
              to="/blogs"
            >
              All Articles <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.slice(0, 3).map((post) => (
              <article className="group min-w-0" key={post.slug}>
                <Link
                  className="relative mb-4 block overflow-hidden rounded-2xl bg-white/[0.04]"
                  to={`/blogs/${post.slug}`}
                  aria-label={`Read ${post.title}`}
                >
                  {post.image && (
                    <img
                      className="aspect-[1.28] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src={post.image}
                      alt={post.imageAlt}
                      loading="lazy"
                    />
                  )}
                  <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-sm">
                    {post.category}
                  </span>
                </Link>
                <p className="mb-2 text-xs font-medium text-white/65">
                  {post.date} <span className="px-1.5 text-primary">·</span> {post.read} read
                </p>
                <h3 className="mb-3 text-lg font-semibold leading-snug text-white transition-colors group-hover:text-primary">
                  <Link to={`/blogs/${post.slug}`}>{post.title}</Link>
                </h3>
                <Link
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-primary"
                  to={`/blogs/${post.slug}`}
                >
                  Read More <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-0 pb-16 pt-8 md:pb-24 md:pt-12" aria-labelledby="growth-cta-title">
        <div className="relative mx-auto w-[calc(100%-2rem)] max-w-[1280px] overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(ellipse_at_top_left,rgba(190,242,100,0.2),transparent_38%),radial-gradient(ellipse_at_bottom_right,rgba(126,34,206,0.28),transparent_42%),#0b0b10] px-6 py-16 text-center sm:w-[calc(100%-3.5rem)] sm:px-10 md:py-20">
          <div className="absolute right-5 top-5 grid size-14 place-items-center rounded-full border border-white/15 text-primary sm:right-8 sm:top-8" aria-hidden="true">
            <svg className="size-6" viewBox="0 0 24 24" fill="none">
              <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="mx-auto mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-black/20 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-white">
            <span className="size-1.5 animate-pulse rounded-full bg-primary" />
            Ready to grow?
          </p>
          <h2 id="growth-cta-title" className="mx-auto mb-5 max-w-[22ch] text-[clamp(1.5rem,3.5vw,2.5rem)] font-semibold leading-tight text-white">
            Find your next growth opportunity.
          </h2>
          <div className="mx-auto mb-6 h-1 w-40 rounded-full bg-primary sm:w-52" aria-hidden="true" />
          <p className="mx-auto mb-8 max-w-[54ch] text-sm leading-relaxed text-white/75 sm:text-base">
            Book a free strategy call — we&apos;ll audit your funnel and show you exactly where the growth is hiding.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-bold text-background transition-colors hover:bg-tertiary"
            >
              Book a Free Strategy Call
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              to="/projects"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-xs font-semibold text-white transition-colors hover:border-primary hover:text-primary"
            >
              See Our Results
            </Link>
          </div>
        </div>
      </section>

      <section className="px-0 py-16 md:py-24" aria-labelledby="home-faq-title">
        <div className="mx-auto grid w-[calc(100%-2rem)] max-w-[1280px] items-start gap-10 sm:w-[calc(100%-3.5rem)] lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:gap-16">
          <div className="lg:pt-1">
            <p className="mb-12 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
              <span className="size-1.5 rounded-full bg-primary" />
              FAQ
            </p>
            <div className="mb-6 h-0.5 w-24 rounded-full bg-primary" aria-hidden="true" />
            <h2 id="home-faq-title" className="mb-6 max-w-[35ch] text-base font-normal leading-relaxed text-white/85">
              The things every founder asks us on the first call — answered upfront, no sales fluff.
            </h2>
            <a
              href="mailto:srkzenithvision@gmail.com"
              className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:border-primary/40"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary text-background" aria-hidden="true">
                <svg className="size-5" viewBox="0 0 24 24" fill="none">
                  <path d="M4 6h16v12H4zM4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="flex flex-col">
                <span className="text-[11px] text-white/60">Still not sure? Ask us directly</span>
                <span className="text-xs font-semibold text-white">srkzenithvision@gmail.com</span>
              </span>
            </a>
          </div>

          <div className="space-y-2.5">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              const answerId = `home-faq-answer-${index}`;
              return (
                <article className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] transition-colors hover:border-white/20" key={faq.q}>
                  <h3>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-xs font-semibold text-white sm:px-5"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => setActiveFaq(isOpen ? -1 : index)}
                    >
                      <span>{faq.q}</span>
                      <span className="shrink-0 text-base font-normal text-white/70" aria-hidden="true">{isOpen ? "×" : "+"}</span>
                    </button>
                  </h3>
                  {isOpen && (
                    <div className="border-t border-white/10 px-4 pb-4 pt-3 text-xs leading-relaxed text-white/70 sm:px-5" id={answerId}>
                      {faq.a}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
