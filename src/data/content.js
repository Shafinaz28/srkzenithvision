/**
 * All website copy lives in this file.
 * Change words here. Pages only arrange them on screen.
 * Colors live in src/styles/global.css.
 */

export const brand = {
  name: "SRK Zenithvision",
  wordmark: "SRK ZENITHVISION",
  tagline: "Ambitions, Boundless Heights",
  email: "hello@srkzenithvision.com",
  eyebrow: "IT  •  Digital  •  SaaS  •  Creative",
  headlineBefore: "We turn",
  headlineAccent: "bold ideas",
  headlineAfter: "into digital reality.",
  heroText:
    "Technology. Creativity. Limitless possibility. We architect exceptional digital experiences that move ambitious businesses toward their next horizon.",
};

export const year = 2026;

export const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Products", to: "/saas" },
  { label: "Process", to: "/#method", hash: "#method" },
  { label: "Clients", to: "/#trust", hash: "#trust" },
  { label: "Start a project", to: "/contact", cta: true },
];

export const stats = [
  { value: "140+", label: "Delivered engines", tone: "gold" },
  { value: "18+", label: "Sovereign markets", tone: "light" },
  { value: "99.4%", label: "Client retention", tone: "teal" },
  { value: "$48M+", label: "Acquired value", tone: "gold" },
];

export const clients = [
  "Helios Private Bank",
  "Northwind Health",
  "Vanta Commerce",
  "Lumen Freight",
  "Alder & Co",
  "Orbit Ledger",
  "Sable Hospitality",
  "Kite Education",
];

export const pillars = [
  {
    kicker: "Digital",
    title: "Marketing engines",
    text: "Media, search, lifecycle, and creative aimed at one commercial number.",
    to: "/services",
  },
  {
    kicker: "SaaS",
    title: "Products we run",
    text: "Software for signal, creative testing, lifecycle, and the reporting room.",
    to: "/saas",
  },
  {
    kicker: "Creative",
    title: "Work people keep",
    text: "Brand, campaign, and web experiences with a clear point of view.",
    to: "/projects",
  },
];

export const steps = [
  {
    n: "01",
    title: "Listen",
    text: "The commercial goal, the constraint, and the truth about the engine you have now.",
  },
  {
    n: "02",
    title: "Architect",
    text: "Offer, story, channels, and measurement, written on one page a board can read.",
  },
  {
    n: "03",
    title: "Launch",
    text: "Creative, media, and site go live as one system, not three separate vendors.",
  },
  {
    n: "04",
    title: "Compound",
    text: "A weekly rhythm. We keep what pays and stop what does not.",
  },
];

export const services = [
  {
    slug: "performance",
    name: "Performance Marketing",
    line: "Paid media that buys pipeline, not just clicks.",
    text: "Search, paid social, and partner media planned against revenue. Every channel has an owner, a ceiling, and a reason to exist.",
    outcomes: [
      "Account structure a new buyer can understand in a week",
      "Creative tested in sets, not one-off ads",
      "Spend moved weekly toward what creates pipeline",
    ],
  },
  {
    slug: "search",
    name: "Search & Content",
    line: "Demand you do not have to keep renting.",
    text: "Pages, articles, and topic systems that earn attention. Written for a buyer first, and for search second.",
    outcomes: [
      "A map of topics your market already asks about",
      "Pages built to rank and to convert",
      "A publishing rhythm your team can keep",
    ],
  },
  {
    slug: "brand",
    name: "Brand Campaigns",
    line: "The story a market can repeat without you in the room.",
    text: "Identity, campaign platforms, and film. The work has to survive a media auction and a sales call.",
    outcomes: [
      "A narrative sales will actually send",
      "A visual system that stays gold, teal, and exact",
      "Campaign assets cut for every placement that matters",
    ],
  },
  {
    slug: "social",
    name: "Social Growth",
    line: "Organic presence run with the same discipline as paid.",
    text: "We treat social as a publishing desk: point of view, cadence, and a line back to the offer.",
    outcomes: [
      "A content system, not a pile of posts",
      "Community replies with a standard",
      "Organic ideas that can graduate into paid",
    ],
  },
  {
    slug: "lifecycle",
    name: "Lifecycle Marketing",
    line: "The first sale should not be the last.",
    text: "Email, onboarding, and retention. Messages timed to behavior, written in the brand voice, measured on revenue kept.",
    outcomes: [
      "Journeys for new, active, and quiet customers",
      "Offers that match the stage, not the calendar",
      "A retention number on the same page as acquisition",
    ],
  },
  {
    slug: "web",
    name: "Web & Conversion",
    line: "Sites that turn attention into a conversation.",
    text: "Marketing sites, landing systems, and the path from headline to meeting. Fast, clear, and built to be changed.",
    outcomes: [
      "A page structure tied to the offer",
      "Forms and calls to action with one job each",
      "Speed and tracking set up before launch day",
    ],
  },
  {
    slug: "analytics",
    name: "Analytics & Attribution",
    line: "A measurement model finance can trust.",
    text: "We decide what counts before the media starts. Dashboards answer one question: what should we do next week?",
    outcomes: [
      "Definitions agreed with finance up front",
      "A weekly view of spend, pipeline, and retention",
      "Less debate about which report is real",
    ],
  },
  {
    slug: "product-growth",
    name: "Product-Led Growth",
    line: "For SaaS teams who need users to reach value.",
    text: "Activation, expansion, and the loops that keep a product in market. Marketing and product share the same funnel.",
    outcomes: [
      "An activation path with a named owner",
      "In-product moments tied to lifecycle messages",
      "Expansion plays that do not depend on a hero campaign",
    ],
  },
];

export const products = [
  {
    slug: "signal",
    name: "Zenith Signal",
    line: "Campaign intelligence",
    text: "Shows which campaigns create pipeline, and which only create traffic. Built for weekly decisions.",
    points: ["Spend against pipeline", "Creative fatigue alerts", "A single weekly brief"],
  },
  {
    slug: "aureum",
    name: "Aureum Studio",
    line: "Creative testing",
    text: "A desk for ads and landing pages. Ideas move through a test, a winner, and a rollout.",
    points: ["Test sets, not orphans", "Message and visual scored apart", "Winners pushed to media"],
  },
  {
    slug: "northline",
    name: "Northline",
    line: "Lifecycle",
    text: "Segments and messages for sales-led and product-led teams. Quiet customers get a reason to return.",
    points: ["Behavior segments", "Onboarding paths", "Retention reporting"],
  },
  {
    slug: "harbor",
    name: "Harbor",
    line: "The reporting room",
    text: "One view of spend, pipeline, and retention. The room where marketing and finance read the same page.",
    points: ["Shared definitions", "Board-ready export", "No second dashboard"],
  },
];

export const projects = [
  {
    slug: "helios",
    client: "Helios Private Bank",
    category: "Performance",
    year: "2026",
    variant: 0,
    summary: "A wealth campaign rebuilt so media, creative, and the private-bank site answered to qualified pipeline.",
    metric: "4.6× qualified pipeline",
    metricLabel: "Across two quarters",
    challenge: "Four agencies, three dashboards, and a brand the advisors would not send. Spend was up. Meetings were not.",
    approach: "One offer, one landing system, and a media plan scored on qualified conversations. Creative was cut into test sets Aureum could judge.",
    outcome: "Pipeline quality became the weekly meeting. The bank kept the system and retired two of the vendor reports.",
  },
  {
    slug: "northwind",
    client: "Northwind Health",
    category: "Content",
    year: "2025",
    variant: 1,
    summary: "A search and content system for patient acquisition, written so clinicians would stand behind it.",
    metric: "62% lower cost per qualified patient",
    metricLabel: "Versus the prior year mix",
    challenge: "Paid social was carrying the number. Search was an afterthought, and the pages did not answer real patient questions.",
    approach: "We mapped the questions, rebuilt the core pages, and pointed media only at pages that could convert.",
    outcome: "Organic began to share the load. Paid spend stayed, but it stopped doing all of the work.",
  },
  {
    slug: "vanta",
    client: "Vanta Commerce",
    category: "Brand",
    year: "2025",
    variant: 2,
    summary: "A brand and campaign relaunch across three markets, timed to a peak trading season.",
    metric: "3 markets in 11 weeks",
    metricLabel: "From narrative to live media",
    challenge: "The company had outgrown its old identity. Regional teams were inventing their own versions of the brand.",
    approach: "A single campaign platform, a visual system, and local cuts that could not drift. Sales received the same story as media.",
    outcome: "The season launched with one brand. Regional teams kept the system instead of rebuilding it.",
  },
  {
    slug: "lumen",
    client: "Lumen Freight",
    category: "Product",
    year: "2026",
    variant: 3,
    summary: "Onboarding and lifecycle for a logistics product whose trial users were stalling before the first shipment.",
    metric: "Activation up 38%",
    metricLabel: "Trial to first shipment",
    challenge: "Marketing could fill the top of the funnel. The product lost people in the first week.",
    approach: "We redesigned the activation path with the product team and wrote the lifecycle around the one action that predicted retention.",
    outcome: "The weekly meeting moved from lead volume to activated accounts. Acquisition finally had somewhere to land.",
  },
  {
    slug: "alder",
    client: "Alder & Co",
    category: "Performance",
    year: "2024",
    variant: 4,
    summary: "A professional-services firm with a strong reputation and no demand system.",
    metric: "11-month pipeline",
    metricLabel: "From a standing start",
    challenge: "Work came from referrals and luck. The partners wanted a pipeline they could see, without looking like a loud advertiser.",
    approach: "A quiet brand campaign, a precise search program, and a site written in the way the partners already speak.",
    outcome: "The firm can now point to a pipeline that does not depend on who had lunch with whom.",
  },
  {
    slug: "orbit",
    client: "Orbit Ledger",
    category: "Product",
    year: "2026",
    variant: 5,
    summary: "Demo-to-close work for a fintech product selling into finance teams.",
    metric: "27% higher demo-to-close",
    metricLabel: "After the new narrative",
    challenge: "Demos were busy. Close rates were flat. The story in the ad and the story in the demo were different products.",
    approach: "We rewrote the narrative once and used it in media, on the site, and in the demo script. Harbor made the drop-off visible.",
    outcome: "Sales stopped rewriting the pitch. Marketing stopped guessing which sentence the buyer remembered.",
  },
];

export const industries = [
  {
    name: "Financial services",
    text: "Banks, wealth, and fintech. Demand systems that can pass a compliance read and still sound like a person.",
    points: ["Pipeline quality", "Advisor-ready stories", "Measured retention"],
  },
  {
    name: "Health",
    text: "Patient and practitioner acquisition with language clinicians will sign and patients can trust.",
    points: ["Search that answers real questions", "Careful paid media", "Clear paths to book"],
  },
  {
    name: "SaaS",
    text: "From first visit to activated account. Marketing and product share one funnel.",
    points: ["Activation", "Expansion", "Product narrative"],
  },
  {
    name: "Commerce",
    text: "Brand and performance for retailers who need a season to work, and a customer to return.",
    points: ["Campaign platforms", "Lifecycle", "Offer testing"],
  },
  {
    name: "Logistics",
    text: "Complex products explained plainly. The buyer is an operator with no time for a metaphor.",
    points: ["Plain offers", "Sales enablement", "Long-cycle pipeline"],
  },
  {
    name: "Hospitality",
    text: "Demand for properties and groups, built around season, place, and direct booking.",
    points: ["Direct demand", "Brand film", "Market launches"],
  },
  {
    name: "Education",
    text: "Enrollment systems for schools and learning products that have to earn trust before they earn a click.",
    points: ["Inquiry quality", "Content systems", "Parent and student paths"],
  },
  {
    name: "Professional services",
    text: "Firms whose best work has been invisible. We build a quiet engine that does not cheapen the practice.",
    points: ["Reputation to pipeline", "Partner-ready creative", "Search with restraint"],
  },
];

export const posts = [
  {
    slug: "systems-not-campaigns",
    title: "Buy a system, not a campaign",
    category: "Strategy",
    date: "September 12, 2026",
    read: "4 min",
    excerpt: "A campaign ends. An engine keeps the number moving after the launch film is gone.",
    paragraphs: [
      "Most marketing problems are ownership problems. The ad team, the site team, and the brand team each have a calendar. None of them have the number.",
      "A system is smaller than it sounds. It is an offer, a story, the places that story runs, and a weekly decision about what to keep. If those four things live in different decks, you do not have a system.",
      "We ask clients to name the number before we name the channels. Pipeline, activation, retention, booked revenue. One of them leads. The others can wait.",
      "Campaigns still matter. They are how a system shows itself in public. They are not a substitute for the machine that should be running in the weeks after.",
    ],
  },
  {
    slug: "the-number-past-roas",
    title: "The number that should sit above ROAS",
    category: "Measurement",
    date: "August 3, 2026",
    read: "5 min",
    excerpt: "Return on ad spend is a useful servant and a poor master. Finance already knows this.",
    paragraphs: [
      "ROAS tells you what the ad account believes. It does not tell you whether the company made money, kept the customer, or filled the right pipeline.",
      "Pick the number the business already manages: qualified pipeline, contribution margin, activated accounts, retained revenue. Then teach the media to report into it.",
      "This is slower in week one. It is faster by week six, because the meeting stops arguing about which dashboard is allowed to speak.",
      "Harbor, our reporting room, exists for this reason. One page. Shared definitions. A decision at the bottom, not another chart.",
    ],
  },
  {
    slug: "creative-that-survives",
    title: "Creative that can survive an auction",
    category: "Creative",
    date: "June 18, 2026",
    read: "4 min",
    excerpt: "Beautiful work that cannot hold attention in a feed is a private pleasure. Build work that can do both.",
    paragraphs: [
      "A film can be gorgeous and still fail the placement it was bought for. The first second has a job. The offer has to be legible. The brand has to be recognizable without the logo doing all the work.",
      "We separate message tests from visual tests. If you change both at once, you learn nothing and you spend more to do it.",
      "Taste is not the opposite of performance. Taste is how you stay recognizable while the auction keeps asking for another version.",
      "The standard we use is simple: would a sales lead send this, and would a stranger stop for it? If the answer is only one of the two, it is not finished.",
    ],
  },
  {
    slug: "do-not-rent-the-audience",
    title: "Do not rent your whole audience",
    category: "Growth",
    date: "April 9, 2026",
    read: "4 min",
    excerpt: "Paid media is a tool. It becomes a risk when it is the only door into the company.",
    paragraphs: [
      "Renting attention is rational. Owning none of it is not. Search, content, lifecycle, and product loops are how a company stops paying full price for every conversation.",
      "This does not mean turning the media off. It means building the pages, the list, and the product moments that make the media cheaper next quarter.",
      "Clients who stay with us are usually the ones who let us build the owned side while the paid side is still working. The ones who wait for a calm quarter wait forever.",
      "99.4% retention is not a mood. It is what happens when the engine is still useful after the first launch.",
    ],
  },
];

export const team = [
  {
    role: "Managing Partner",
    text: "Owns the mandate and the number. The person a board can call when the work needs a decision, not a status meeting.",
  },
  {
    role: "Growth Director",
    text: "Runs media, funnel, and the weekly rhythm. Turns the plan into a list of what changes on Monday.",
  },
  {
    role: "Creative Director",
    text: "Brand, campaign, and the work people remember. Holds the line between taste and the auction.",
  },
  {
    role: "Measurement Lead",
    text: "Builds the model finance will sign. If two reports disagree, this is the person who ends the argument.",
  },
];

export const values = [
  {
    title: "One number",
    text: "Every channel answers to it. If a tactic cannot say how it helps, it does not ship.",
  },
  {
    title: "Plain language",
    text: "If a board cannot read the plan, it is not finished. We do not hide behind channel slang.",
  },
  {
    title: "Taste and math",
    text: "Creative that cannot survive a media auction is a hobby. Reports that ignore the work are noise.",
  },
  {
    title: "Stay",
    text: "We would rather keep a client than restock the roster. Retention is the proof.",
  },
];

export const testimonials = [
  {
    quote: "They replaced four vendors and a monthly argument about which dashboard was real.",
    by: "Chief Marketing Officer, Helios Private Bank",
  },
  {
    quote: "The work is quiet, specific, and hard to argue with. Our sales team finally sends it.",
    by: "Managing Director, Alder & Co",
  },
  {
    quote: "We stopped treating acquisition and activation as two companies. The funnel is one story now.",
    by: "Founder, Orbit Ledger",
  },
];

export const jobs = [
  {
    title: "Growth Lead",
    where: "Remote · Global",
    type: "Full time",
    summary: "Own a client engine: the number, the weekly plan, and the quality of the work that ships.",
  },
  {
    title: "Brand Designer",
    where: "Remote · Global",
    type: "Full time",
    summary: "Campaign systems, identity, and the assets media can actually run. Taste with a commercial brief.",
  },
  {
    title: "Media Buyer",
    where: "Remote · Global",
    type: "Full time",
    summary: "Search and paid social for complex offers. You should be able to explain a budget shift in one paragraph.",
  },
  {
    title: "Analytics Partner",
    where: "Remote · Global",
    type: "Full time",
    summary: "Definitions, tracking, and the weekly page leadership reads. You will sit with finance as often as with media.",
  },
];

export const tiers = [
  {
    name: "Orbit",
    price: "One quarter",
    badge: "Focused",
    text: "One growth problem. One squad. A finished system you can keep running.",
    points: ["A single commercial number", "Creative and media in one plan", "Weekly working session", "A handover your team can use"],
    featured: false,
  },
  {
    name: "Meridian",
    price: "Retained",
    badge: "Full funnel",
    text: "The marketing engine, held. Brand, demand, site, and measurement under one lead.",
    points: ["Full-funnel plan", "Always-on media and content", "Lifecycle in scope", "Monthly board note"],
    featured: false,
  },
  {
    name: "Zenith",
    price: "Annual partnership",
    badge: "Private",
    text: "Category ownership. A council, a creative system, and the mandate to move the market.",
    points: ["Partner-level council", "Category narrative", "Product and marketing together", "Harbor reporting room"],
    featured: true,
  },
];

export const zenithIncludes = [
  "A named partner, not a rotating account team",
  "One commercial number, reviewed every week",
  "Brand, media, site, and measurement in the same plan",
  "Access to Zenith Signal, Aureum, Northline, and Harbor",
  "A quarterly board narrative written in plain language",
  "A seat limited on purpose. We do not staff this like a factory",
];

export const faqs = [
  {
    q: "Who is this for?",
    a: "Companies with a real offer and a number that has to move. We are a poor fit for a one-week poster or a channel with no owner.",
  },
  {
    q: "Do we have to buy every service?",
    a: "No. Orbit is one problem. Meridian is the engine. Zenith is the whole mandate. Start where the pain is.",
  },
  {
    q: "Can our team stay involved?",
    a: "Yes. The work is built to be understood. Your people sit in the weekly session. We do not disappear into a black box.",
  },
  {
    q: "How do we start?",
    a: "Write to us. Tell us the market and the number. We reply with a point of view, then a scope. There is no automated sequence.",
  },
];

export const referSteps = [
  {
    n: "01",
    title: "Introduce",
    text: "Tell us who they are and why the conversation is worth having. A note is enough.",
  },
  {
    n: "02",
    title: "We meet",
    text: "We take the meeting, qualify the fit, and do the work of scoping. You do not manage the project.",
  },
  {
    n: "03",
    title: "You are paid",
    text: "If the introduction becomes a signed engagement, you receive 10% of the first-year fee.",
  },
];

export const closing = {
  title: "Let us build the engine.",
  text: "Tell us the market you intend to lead. We will come back with a point of view, not a menu.",
};

export const aboutDossier = [
  { kicker: "Value generation", value: "48M+", text: "Enterprise value created across client portfolios", note: "Audited portfolio impact" },
  { kicker: "Systems deployed", value: "140+", text: "Production engines and sovereign platforms shipped", note: "Zero-defect SLA delivery" },
  { kicker: "Infrastructure", value: "18+", text: "Sovereign global cloud mesh nodes operating", note: "Multi-region high resilience" },
  { kicker: "High assurance", value: "99.998%", text: "Uptime protocol across fault-tolerant meshes", note: "Deterministic realtime mesh" },
];

export const founderTraits = [
  { title: "Absolute precision", text: "Deterministic design down to the nanosecond level." },
  { title: "Algorithmic velocity", text: "Compressed delivery without sacrificing architecture." },
  { title: "Sovereign rights", text: "100% unconditional transfer of IP and source protocols." },
];

export const aboutPillars = [
  { n: "01", title: "Sovereign autonomy", text: "We reject hostage architectures. Clients retain outright, unconditional ownership of every source line, infrastructure blueprint, neural model, and dataset. Zero proprietary lock-in.", note: "Complete cryptographic handover" },
  { n: "02", title: "Relentless craft", text: "Industrial-strength software engineering paired with tactile luxury aesthetics. We uphold an unforgiving zero-slop standard across micro-interactions, responsive states, and kernel latency.", note: "Surgical aesthetic precision" },
  { n: "03", title: "Speed as a moat", text: "Utilizing our battle-tested pre-hardened core architectures and modular engines, we compress 18-month legacy development cycles into 12 weeks of relentless, production-ready velocity.", note: "4.5x rapid market deployment" },
  { n: "04", title: "Institutional integrity", text: "Military-grade non-disclosure, air-gapped confidential compute environments, and strict reputational discretion ensure our enterprise partners can innovate securely away from public scrutiny.", note: "Bilateral non-disclosure standard" },
];

export const ascentTimeline = [
  { year: "2023", phase: "Genesis", title: "Foundational kernel", text: "Inception of SRK ZenithVision. Development of sovereign algorithmic modules and deployment of mission-critical systems for first-tier enterprise consortiums.", marks: ["Latency: <1.2 ms", "Validated"] },
  { year: "2024", phase: "Expansion", title: "Zenith Core & Cloud Matrix", text: "Geographic expansion to London, Singapore, and New York. Onboarding 40+ specialized systems architects; infrastructure processing over $14M in daily throughput.", marks: ["Throughput: $14M/day", "Synchronized"] },
  { year: "2024", phase: "Global scale", title: "Vanguard infrastructure", text: "Deployment of multi-cloud mesh networks spanning 18+ international points of presence. Milestone of 140+ production engines delivered without SLA breaches.", marks: ["Global nodes: 18+", "Expanded"] },
  { year: "2025 // Apex", phase: "Current era", title: "Autonomous intelligence", text: "Proprietary multi-agent neural orchestration layer rolled out across sovereign clouds. Direct cumulative client valuation impact crosses $48M.", marks: ["Client impact: $48M+", "Active"], current: true },
];

export const aboutFaqs = [
  { q: "What does SRK ZenithVision specialize in?", a: "Sovereign enterprise architecture, SaaS product engines, digital growth, spatial creative systems, ultra-fast web and mobile, and executive media. One engine, owned by the client, aimed at category leadership." },
  { q: "How does the 6-Step Ascent Methodology ensure project success?", a: "Discover, Strategize, Create, Build, Launch, and Grow run on a fixed clock. Each step has an owner, a deliverable, and a gate. Nothing opens the next step until the current one is signed." },
  { q: "How do you structure intellectual property and sovereign code ownership?", a: "You keep the source, the infrastructure blueprints, the models, and the datasets. There is no lock-in. Transfer is written into the handover, after a mutual NDA." },
  { q: "What is the typical engagement timeline and executive onboarding process?", a: "Executive alignment happens in the first ten days. A standard ascent reaches production in about twelve weeks. Retained and annual seats continue from there." },
  { q: "How do we get started or request an enterprise NDA consultation?", a: "Schedule a discovery session or write the founder office. A pre-signed executive NDA is available for counsel review before any technical disclosure." },
];

export const contactOptions = [
  "Digital growth and SEO",
  ...services.map((service) => service.name),
  "The Zenith",
  "Not sure yet",
];

export const practices = [
  {
    n: "01",
    icon: "code",
    label: "WEB APPLICATION DEVELOPMENT",
    title: "Web Application Development",
    text: "Launch a polished web product with the speed, accessibility, and flexible architecture to serve customers today and grow with your business.",
    tags: ["Next.js", "React 19", "TypeScript", "Tailwind CSS"],
  },
  {
    n: "02",
    icon: "nodes",
    label: "MOBILE APP DEVELOPMENT",
    title: "Mobile App Development",
    text: "Turn your product into a thoughtful iOS and Android experience, with intuitive navigation, reliable performance, and the features your users need.",
    tags: ["Flutter", "React Native", "Swift (iOS)", "Kotlin (Android)"],
  },
  {
    n: "03",
    icon: "chart",
    label: "CUSTOM SOFTWARE & ERP",
    title: "Custom Software & ERP Systems",
    text: "Bring your teams and operations together with software shaped around your processes, from internal tools and approval flows to full ERP platforms.",
    tags: ["Python", "Node.js", "PostgreSQL", "Enterprise Cloud"],
  },
  {
    n: "04",
    icon: "aperture",
    label: "UI/UX & PRODUCT DESIGN",
    title: "UI/UX & Product Design",
    text: "Give your product a clear visual direction and an easy-to-use experience through research, interface design, and interactive prototypes.",
    tags: ["Figma", "Framer", "Prototyping", "UX Research"],
  },
  {
    n: "05",
    icon: "device",
    label: "CLOUD & DEVOPS INFRASTRUCTURE",
    title: "Cloud Hosting & DevOps",
    text: "Build a dependable cloud foundation with deployment automation, observability, and infrastructure practices tailored to your team and workload.",
    tags: ["AWS", "Google Cloud", "Docker", "CI/CD Pipelines"],
  },
  {
    n: "06",
    icon: "film",
    label: "AI & AUTOMATION SOLUTIONS",
    title: "AI & Smart Automation",
    text: "Put AI and automation to work on practical tasks—from knowledge assistants and support workflows to integrations that reduce repetitive effort.",
    tags: ["OpenAI GPT-4", "Google Gemini", "LangChain", "n8n Automation"],
  },
];

export const orbit = [
  { n: "01", label: "Idea", x: "50%", y: "10%" },
  { n: "02", label: "Design", x: "84%", y: "28%" },
  { n: "03", label: "Tech", x: "84%", y: "72%" },
  { n: "04", label: "Product", x: "50%", y: "90%" },
  { n: "05", label: "Marketing", x: "16%", y: "72%" },
  { n: "06", label: "Growth", x: "16%", y: "28%" },
];

export const architecture = [
  {
    icon: "stack",
    title: "Singular Unified Data Backbone",
    text: "Zero fragmentation between user interface telemetries, predictive marketing signals, and enterprise ERP backbones.",
  },
  {
    icon: "bolt",
    title: "Adaptive Algorithmic Velocity",
    text: "Continuous AI-driven optimization loops that calibrate UX, conversion paths, and multi-cloud loads in real time.",
  },
  {
    icon: "shield",
    title: "Institutional Sovereign Trust",
    text: "Enterprise-grade cryptography, SOC2 Type II compliances, and immutable digital ownership built into foundational code.",
  },
];

export const flagshipFilters = ["All Work", "SaaS Engines", "AI Systems", "Creative 3D", "Fintech"];

export const flagships = [
  {
    id: "aurapay",
    layout: "card",
    scene: "terminal",
    categories: ["SaaS Engines", "Fintech"],
    tag: "Fintech SaaS · Institutional",
    metric: "+310% velocity acceleration",
    facts: [
      { label: "Result", value: "+310% velocity" },
      { label: "Sector", value: "Fintech" },
      { label: "Volume", value: "$1.8B+ / mo" },
      { label: "Reach", value: "24 markets" },
    ],
    title: "AuraPay Global Sovereign Rail",
    text: "Next-generation distributed liquidity network with ultra-low latency settlement, processing $1.8B+ monthly volume across 24 tier-1 jurisdictions.",
    cta: "View case study",
    to: "/projects/helios",
  },
  {
    id: "novus",
    layout: "card",
    scene: "network",
    categories: ["AI Systems"],
    tag: "AI Platform · $48M acquisition",
    metric: "Autonomous intelligence",
    facts: [
      { label: "Result", value: "$48M acquisition" },
      { label: "Sector", value: "AI systems" },
      { label: "Mark", value: "Autonomous" },
      { label: "Speed", value: "Milliseconds" },
    ],
    title: "Novus Deep Intelligence Cloud",
    text: "Self-calibrating neural model orchestrator, scaling enterprise decision engines from weeks to milliseconds.",
    cta: "Examine architecture",
    to: "/projects/orbit",
  },
  {
    id: "vanguard",
    layout: "feature",
    scene: "car",
    categories: ["Creative 3D"],
    award: "Automotive Design Award 2024",
    facts: [
      { label: "Award", value: "Design 2024" },
      { label: "Sector", value: "Creative 3D" },
      { label: "Frame", value: "60 FPS" },
      { label: "Sold", value: "100% batch" },
    ],
    title: "Vanguard 3D WebGL Configurator",
    text: "A real-time raytraced browser configurator delivering zero-latency paint customization, telemetry simulator, and direct multi-signature smart contract deposit integrations.",
    stats: [
      { value: "60 FPS", label: "WebGL native" },
      { value: "4.8s", label: "Avg dwell, 14M" },
      { value: "100%", label: "Batch sold" },
    ],
    cta: "Launch interactive experience",
    to: "/projects/vanta",
  },
  {
    id: "lumen",
    layout: "card",
    scene: "route",
    categories: ["SaaS Engines"],
    tag: "Logistics SaaS · Product",
    metric: "Activation up 38%",
    facts: [
      { label: "Result", value: "+38% activation" },
      { label: "Sector", value: "Logistics" },
      { label: "Product", value: "SaaS rail" },
      { label: "Focus", value: "First load" },
    ],
    title: "Lumen Freight Activation Rail",
    text: "A trial-to-shipment system that carries new accounts through the first live load, with lifecycle timing tied to the one action that predicts retention.",
    cta: "View case study",
    to: "/projects/lumen",
  },
];

export const softwareProducts = [
  {
    status: "Enterprise engine · Live",
    title: "ZenithFlow CRM · Omnichannel Engine",
    text: "Autonomous sales pipeline synthesizer with real-time lead telemetry, multi-entity invoicing, and AI conversational routing.",
    marks: ["+300% Engagement", "12ms Query Speed", "99.99% Uptime"],
  },
  {
    status: "Predictive intelligence · V1.2",
    title: "ApexAnalytics Predictive Machine",
    text: "Distributed big-data stream analyzer running on sovereign cloud nodes with sub-second statistical inferences and churn forecasting.",
    marks: ["800M Events/sec", "Zero-ETL Fabric"],
  },
];

export const softwareMetrics = [
  { label: "Global net volume", value: "$14,892,450", note: "+18.4% WoW" },
  { label: "Active pipelines", value: "3,492", note: "Optimal flow" },
  { label: "Latency vector", value: "11.8 ms", note: "Global edge" },
];

export const ascent = [
  { n: "01", title: "Discover", text: "Deep telemetry audit, market gap forensics, and executive stakeholder alignment.", when: "Days 1–10" },
  { n: "02", title: "Strategize", text: "Sovereign architecture blueprints, IP defenses, and unit economic models.", when: "Days 11–20" },
  { n: "03", title: "Create", text: "Couture spatial 3D systems, responsive Figma design tokens, and prototype validation.", when: "Days 21–40" },
  { n: "04", title: "Build", text: "Microservices code generation, multi-cloud staging, and automated QA suites.", when: "Days 41–75" },
  { n: "05", title: "Launch", text: "Global blue-green deployment, stress tests, and high-impact cinematic PR.", when: "Day 76 & live" },
  { n: "06", title: "Grow", text: "Programmatic SEO, telemetry-driven conversion lifting, and recurring equity acceleration.", when: "Infinite scale" },
];

export const trusted = ["Vanguard Group", "AuraPay", "Novus Intel", "Valiant Capital", "Zenith Dynamics"];

export const executiveQuotes = [
  {
    initials: "AK",
    quote: "ZenithVision overhauled our fragmented tech stack into an ultra-low latency sovereign engine. Our transaction processing speed tripled within 90 days of launch.",
    name: "Alexander Krause",
    role: "Managing Director, Vanguard Apex Fund",
  },
  {
    initials: "SM",
    quote: "The sheer caliber of their 3D WebGL configurator set a benchmark across the entire automotive sector. It wasn't just aesthetic — our pre-orders sold out in 48 hours.",
    name: "Sophia Moreau",
    role: "Chief Brand Officer, Novus HyperMotors",
  },
  {
    initials: "DV",
    quote: "Finding a technological partner that marries deep high-load architectural mastery with bespoke haute-couture creative flair is exceptionally rare. ZenithVision is sovereign.",
    name: "David Vance",
    role: "EVP Technology, AuraPay International",
  },
];

export const footerColumns = [
  {
    title: "Services",
    links: [
      { label: "Technology", to: "/services/technology" },
      { label: "SaaS applications", to: "/services/saas" },
      { label: "Digital marketing", to: "/services/digital-marketing" },
      { label: "Design", to: "/services/design" },
      { label: "Motion", to: "/services/motion" },
      { label: "Search engine optimization", to: "/services/seo", accent: true },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", to: "/contact" },
      { label: "Careers", to: "/careers" },
      { label: "Journal", to: "/blogs" },
      { label: "Partner program", to: "/refer" },
      { label: "The Zenith", to: "/the-zenith" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Projects", to: "/projects" },
      { label: "Industries", to: "/industries" },
      { label: "Products", to: "/saas" },
      { label: "Insights", to: "/blogs" },
    ],
  },
];

export const serviceStats = [
  { value: "$48M+", label: "Client valuation impact" },
  { value: "140+", label: "Deployed production engines" },
  { value: "99.998%", label: "High-assurance SLA core" },
  { value: "< 8ms", label: "Algorithmic edge execution" },
];

export const sovereignPillars = [
  {
    n: "01",
    slug: "technology",
    title: "Technology",
    line: "Build. Automate. Scale.",
    text: "Custom software, mobile apps, enterprise systems, business automation, APIs, CRM/ERP, billing systems, cloud infrastructure.",
    covers: ["Custom software", "Mobile apps", "Enterprise systems", "Business automation", "APIs", "CRM and ERP", "Billing systems", "Cloud infrastructure"],
    chips: ["Rust", "Go", "TypeScript", "Kafka", "K8s"],
    cta: "Explore technology",
    to: "/services/technology",
    contactTo: "/contact?service=Not%20sure%20yet&message=We%20want%20to%20talk%20about%20Technology.",
  },
  {
    n: "02",
    slug: "saas",
    title: "SaaS Products",
    line: "Ideas into scalable products.",
    text: "Product strategy, SaaS UI/UX, MVP development, subscription and billing, dashboards, horizontal scaling.",
    covers: ["Product strategy", "SaaS UI/UX", "MVP development", "Subscription and billing", "Dashboards", "Horizontal scaling"],
    metric: "Impact metric",
    metricValue: "$38M+ ARR scaled across engines",
    cta: "Explore SaaS",
    to: "/services/saas",
    contactTo: "/contact?service=Not%20sure%20yet&message=We%20want%20to%20talk%20about%20SaaS%20products.",
  },
  {
    n: "03",
    slug: "digital-marketing",
    title: "Digital Marketing",
    line: "Get seen. Chosen. Remembered.",
    text: "Omnichannel strategy, social governance, high-intent lead gen, WhatsApp commerce, performance marketing, analytics.",
    covers: ["Omnichannel strategy", "Social governance", "High-intent lead generation", "WhatsApp commerce", "Performance marketing", "Analytics"],
    chips: ["Omnichannel", "Lead engine", "Attribution"],
    cta: "Explore digital growth",
    to: "/services/digital-marketing",
    contactTo: "/contact?service=Performance%20Marketing&message=We%20want%20to%20talk%20about%20digital%20marketing.",
  },
  {
    n: "04",
    slug: "seo",
    title: "Search Engine Opt.",
    line: "Be where buyers search.",
    text: "Technical SEO, semantic topical graphs, digital PR, local SEO, keyword intent mapping, knowledge graph schema.",
    covers: ["Technical SEO", "Semantic topical graphs", "Digital PR", "Local SEO", "Keyword intent mapping", "Knowledge graph schema"],
    metric: "Organic reach",
    metricValue: "+320% top 3 rank velocity",
    cta: "Explore SEO",
    to: "/services/seo",
    contactTo: "/contact?service=Search%20%26%20Content&message=We%20want%20to%20talk%20about%20search.",
  },
  {
    n: "05",
    slug: "advertising",
    title: "Digital Advertising",
    line: "Turn attention into action.",
    text: "Google Search, Meta Ads, YouTube video, programmatic DSP, high-velocity retargeting, landing page CRO.",
    covers: ["Google Search", "Meta Ads", "YouTube video", "Programmatic DSP", "High-velocity retargeting", "Landing page CRO"],
    metric: "Benchmark performance",
    metricValue: "4.8x average efficiency ROAS",
    cta: "Explore advertising",
    to: "/services/advertising",
    contactTo: "/contact?service=Performance%20Marketing&message=We%20want%20to%20talk%20about%20digital%20advertising.",
  },
  {
    n: "06",
    slug: "design",
    title: "UI/UX & Design",
    line: "Make every interaction matter.",
    text: "Cognitive ergonomics, design token frameworks, mobile UI/UX, complex SaaS dashboards, interactive prototyping.",
    covers: ["Cognitive ergonomics", "Design token frameworks", "Mobile UI/UX", "Complex SaaS dashboards", "Interactive prototyping"],
    chips: ["Figma tokens", "Micro-UX", "Design systems"],
    cta: "Explore design",
    to: "/services/design",
    contactTo: "/contact?service=Web%20%26%20Conversion&message=We%20want%20to%20talk%20about%20UI%20and%20UX.",
  },
  {
    n: "07",
    slug: "motion",
    title: "Motion, Video & 3D",
    line: "Bring ideas to life.",
    text: "Kinetic motion graphics, 2D/3D animation, cinematic explainer films, 3D hard-surface modeling, Unreal Engine 5.",
    covers: ["Kinetic motion graphics", "2D and 3D animation", "Cinematic explainer films", "3D hard-surface modeling", "Unreal Engine 5"],
    chips: ["Unreal 5", "Cinema 4D", "After Effects"],
    cta: "Explore motion & 3D",
    to: "/services/motion",
    contactTo: "/contact?service=Brand%20Campaigns&message=We%20want%20to%20talk%20about%20motion%20and%203D.",
  },
  {
    n: "08",
    slug: "print",
    title: "Print & Media",
    line: "Create. Communicate. Connect.",
    text: "Executive investor dossiers, luxury packaging, bespoke stationery, outdoor billboards, interactive ESG reports.",
    covers: ["Executive investor dossiers", "Luxury packaging", "Bespoke stationery", "Outdoor billboards", "Interactive ESG reports"],
    chips: ["Spot UV", "Gmund cotton", "Foil stamping"],
    cta: "Explore media",
    to: "/services/print",
    contactTo: "/contact?service=Brand%20Campaigns&message=We%20want%20to%20talk%20about%20print%20and%20media.",
  },
];

export const arsenal = [
  {
    n: "01",
    title: "Engineering & Infra",
    text: "Ultra-resilient microservices and distributed databases.",
    points: ["Rust & Go core engines", "Python & FastAPI ML", "PostgreSQL & Redis clusters", "Apache Kafka pipelines", "Kubernetes & AWS EKS"],
  },
  {
    n: "02",
    title: "Design & Spatial Tech",
    text: "Precision human interface and photorealistic real-time 3D.",
    points: ["Figma design tokens", "Spline 3D realtime WebGL", "Unreal Engine 5 Lumen", "Cinema 4D & Octane", "After Effects rigging"],
  },
  {
    n: "03",
    title: "Growth & Ad Infra",
    text: "Attribution telemetry and programmatic acquisition pipes.",
    points: ["Google Ads Premier API", "Meta Conversions CAPI", "LinkedIn DSP Direct", "Google BigQuery warehouse", "Looker Studio Enterprise"],
  },
  {
    n: "04",
    title: "Print & Tactile Standards",
    text: "Precision color science and tactile production.",
    points: ["Pantone PMS color standards", "Gmund cotton substrates", "Foil emboss & micro-deboss", "Enfocus PitStop preflight", "ISO 12647 print proofing"],
  },
];

export const delivery = [
  { n: "01", title: "Discover", text: "Full diagnostic audit, legacy architecture dissection, tech-stack profiling, and market moats." },
  { n: "02", title: "Strategize", text: "Technical blueprinting, RFC specifications, UX design systems, and algorithmic KPI mapping." },
  { n: "03", title: "Create", text: "High-fidelity prototypes, 3D render pipelines, copywriting dossiers, and interface motion passes." },
  { n: "04", title: "Execute", text: "Staged engineering sprints, CI/CD pipeline automation, automated testing, and zero-downtime release." },
  { n: "05", title: "Optimize", text: "Continuous real-time CRO, telemetry surveillance, automated SEO crawling, and ARR scaling loops." },
];

export const reasons = [
  { n: "01", kicker: "Strategy", title: "Sovereign roadmaps", text: "We design long-term market dominance roadmaps that de-risk technical debt and maximize institutional valuation." },
  { n: "02", kicker: "Creativity", title: "Uncompromising polish", text: "From cinematic 3D renders to high-end tactile print, we forge brand experiences that command immediate industry authority." },
  { n: "03", kicker: "Technology", title: "Zero-lag architectures", text: "Built on compiled, type-safe, distributed backends tuned for sub-second responses and enterprise stability." },
  { n: "04", kicker: "Growth", title: "Performance engines", text: "Ruthless algorithmic ad buying and topical semantic SEO that transform pipeline visitors into accredited capital." },
];

export const crossCases = [
  {
    tag: "Fintech & wealth engine",
    badge: "Tech + UI/UX",
    title: "ApexCore High-Frequency Financial Engine",
    text: "Re-architected core settlement pipeline to Rust and Go microservices with sub-4ms internal event execution, coupled with a dark-mode cognitive trading terminal.",
    metrics: [
      { value: "< 4ms", label: "Order latency" },
      { value: "$1.2B+", label: "Processed vol." },
      { value: "99.999%", label: "Uptime SLA" },
    ],
  },
  {
    tag: "B2B enterprise SaaS",
    badge: "SaaS + ad growth",
    title: "CloudMetrics Enterprise Analytics Suite",
    text: "Built an autonomous enterprise multi-tenant telemetry dashboard while deploying programmatic LinkedIn and Google search acquisition funnels.",
    metrics: [
      { value: "$12M", label: "ARR scaled" },
      { value: "5.2x", label: "Ad ROAS" },
      { value: "−38%", label: "CAC reduction" },
    ],
  },
  {
    tag: "Healthtech network",
    badge: "SEO + marketing",
    title: "Global HealthTech Sovereign Inbound Graph",
    text: "Engineered automated topical knowledge graph schema across 12,000+ medical reference paths, driving high-intent practitioner acquisition without paid ad fatigue.",
    metrics: [
      { value: "+418%", label: "Organic inbound" },
      { value: "#1", label: "Top 300 keywords" },
      { value: "4.2M", label: "Monthly impressions" },
    ],
  },
  {
    tag: "Sovereign wealth",
    badge: "Print + 3D media",
    title: "Sovereign Wealth Investor Dossier & Cinematic Reel",
    text: "Produced 300gsm Japanese cotton investor annual portfolios with micro-gold foil embossing, matched with an Unreal Engine 5 cinematic spatial projection.",
    metrics: [
      { value: "300gsm", label: "Custom substrate" },
      { value: "166%", label: "Investor buy-in" },
      { value: "4K 60fps", label: "Cinema spatial" },
    ],
  },
];

export const engagementTiers = [
  {
    kicker: "Sprint deployment",
    title: "Sovereign Sprint",
    price: "$35,000",
    cadence: "/ 3-week sprint",
    text: "Rapid architectural audit, MVP system sprint, or high-urgency media package.",
    points: ["Dedicated 4-person architectural squad", "1 selected sovereign pillar core focus", "Daily asynchronous engineering updates", "Full GitHub source & design token export"],
    cta: "Commence sprint",
    featured: false,
  },
  {
    kicker: "Full ecosystem synchrony",
    title: "Enterprise Cohort",
    price: "$85,000",
    cadence: "/ milestone cadence",
    text: "Complete multi-pillar digital engine deployment with continuous oversight.",
    points: ["Full 8-pillar capability access", "Dedicated principal architect & tech lead", "Custom SaaS, web & cloud deployment", "Integrated SEO, performance ads & 3D assets", "99.998% high-availability SLA signoff"],
    cta: "Engage enterprise cohort",
    featured: true,
    badge: "Most popular architecture",
  },
  {
    kicker: "Strategic embed",
    title: "Vanguard Retainer",
    price: "$20,000",
    cadence: "/ month",
    text: "Continuous fractional leadership, ongoing optimization, and emergency SLA access.",
    points: ["Fractional CTO & creative director allocation", "Weekly telemetry & ROAS CRO loops", "Continuous feature roadmap release", "Guaranteed sub-2hr response SLA"],
    cta: "Join Vanguard retainer",
    featured: false,
  },
];
