// Single source of truth for site content.
// Pulled from Bryan's 2026 resume and brag document.

export const profile = {
  name: "Bryan R. Figueroa",
  title: "AI Agent & LLM-Orchestration Engineer",
  subtitle: "Full-Stack · Systems-Minded",
  location: "El Paso, TX",
  email: "bryan.r.figueroa@gmail.com",
  github: "https://github.com/SushiRoll53",
  githubHandle: "SushiRoll53",
  linkedin: "https://linkedin.com/in/bryan-f",
  linkedinHandle: "bryan-f",
  resume: "/Bryan_R_Figueroa_Resume.docx",
  photo: "/bryan-portrait.jpg",
  // Hero one-liner
  tagline:
    "I build production AI agents on the load-bearing parts of a codebase — auth and identity, deploy pipelines, and the port/adapter seams — with the eval suites, IaC, and human-in-the-loop design that let them ship for real.",
  summary:
    "Full-stack engineer specializing in AI agent and LLM-orchestration systems. I bring a systems-engineering mindset — Docker, CI/CD, Terraform, and real test and eval suites — to agent work built on LangGraph, LittleHorse, and Temporal, and I gravitate to the load-bearing parts of a codebase: auth and identity, deploy pipelines, port/adapter seams, and the spec-driven plans that come before the code. I've taken systems from zero to one — a customer-support agent for one of the largest payment processors — and led others end to end, like the full-stack RAG platform that feeds and observes our knowledge base. Throughout, I lean on human-in-the-loop patterns that respect the reviewer downstream, ergonomics for the next engineer on the repo, and explaining things clearly — which I sharpened teaching a semester-long coding bootcamp for near-beginners.",
};

export const stats: { value: string; label: string }[] = [
  { value: "2.5+ yrs", label: "Shipping production systems" },
  { value: "0→1", label: "Support agent for a top payment processor" },
  { value: "Full-stack", label: "Frontend, backend, infra & eval suites" },
  { value: "Instructor", label: "Taught a coding bootcamp — students from 0 to shipped web apps" },
];

export type Project = {
  name: string;
  tag: string;
  blurb: string;
  highlights: string[];
  stack: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Customer-Support Agent (0→1)",
    tag: "Signature project · for one of the largest payment processors",
    blurb:
      "Designed and built a 24/7 support agent from scratch so clients resolve FAQs in minutes instead of waiting hours on a human agent.",
    highlights: [
      "FastAPI + langgraph-supervisor topology routing to three specialist experts: RAG over Azure AI Search, Zendesk ticket ops (zenpy), and a Platform expert calling a portal MCP server.",
      "Hardened for production behind an Azure AI Content Safety / Prompt Shield pre-filter, RSA-JWT session auth, and PyMuPDF file ingestion.",
      "Built to cut time-to-resolution for common questions from hours to minutes with round-the-clock coverage.",
    ],
    stack: [
      "FastAPI",
      "LangGraph",
      "Azure AI Search",
      "Zendesk / zenpy",
      "MCP",
      "Azure Content Safety",
      "Python",
    ],
    featured: true,
  },
  {
    name: "Internal Agentic Workflow Runtime",
    tag: "Core authorship · durable HITL platform",
    blurb:
      "Authored core pieces of the reusable runtime that now underpins the team's durable, human-in-the-loop agentic workflows.",
    highlights: [
      "Wrote the AP-invoice approval gate, batch correction loop, verbatim source-excerpt ingestion path, and HITL Slack approval flow with per-signal thread routing.",
      "Designed hexagonal port interfaces (ApprovalGate, ApprovalNotification, ContinuationRouter, WorkflowRunner) so new channels and gates plug in without touching workflow code.",
      "In production it backs 4 accounting workflows — AP-vendor and billable-transaction approval flows.",
    ],
    stack: ["Python 3.13", "LittleHorse", "pydantic-ai", "Azure", "Slack"],
    featured: true,
  },
  {
    name: "Production-Quality Eval Suite",
    tag: "Quality gates for the support agent",
    blurb:
      "An agent that routes and takes Zendesk actions can't ship on vibes — so I gave it measurable quality gates.",
    highlights: [
      "LangSmith eval suite with custom evaluators for expert routing, response completeness, scope handling, and Zendesk-action correctness.",
      "Catches regressions before they ship: flags when a tweak degrades behavior so the team can iterate without quietly breaking what worked.",
    ],
    stack: ["LangSmith", "Custom evaluators", "Python"],
    featured: true,
  },
  {
    name: "Custom Zendesk & NetSuite MCP Servers",
    tag: "Identity-aware tooling for agents",
    blurb:
      "Built our own MCP servers when off-the-shelf offerings didn't cover what the agents needed.",
    highlights: [
      "Two FastMCP servers exposing typed tools to LLM agents, with JWT-claim-based per-request identity passthrough.",
      "Each tool call acts as the right end user — no shared service-account blurring of who did what in Zendesk and NetSuite.",
    ],
    stack: ["Python", "FastMCP", "JWT", "Zendesk", "NetSuite"],
    featured: true,
  },
  {
    name: "Dynamic Multi-Tenant OAuth Pattern",
    tag: "Auth0 Token Vault connection manager",
    blurb:
      "Providers like NetSuite have account-specific token URLs that don't fit a static OAuth setup. I designed around it.",
    highlights: [
      "Auth0 Management API connection manager that idempotently provisions per-provider-instance connections.",
      "Serves LLM tool calls through Auth0 Token Vault — multi-tenant provider auth with no bespoke token store to build and secure.",
    ],
    stack: ["Auth0", "Token Vault", "OAuth", "Python"],
  },
  {
    name: "SEIDE Installer/Dealer Portal",
    tag: "Co-led · security spine",
    blurb:
      "A full-stack, Auth0-protected portal for installers and dealers needing tenant-scoped access control.",
    highlights: [
      "Co-led the project and authored the security spine: Auth0 edge middleware, JWKS guard, organization-scoped CASL ABAC, and Mongo session transactions for multi-document atomicity.",
      "A complete, reusable tenant-scoped security architecture that informed later auth/identity work.",
    ],
    stack: [
      "Next.js 14",
      "Redux Toolkit",
      "MUI",
      "NestJS 8",
      "MongoDB",
      "CASL",
      "Auth0",
    ],
  },
  {
    name: "Embeddable Chat Widget",
    tag: "Security perimeter design",
    blurb:
      "A chat widget that drops into merchant portals via a single <script> tag — without ever leaking a backend key to the browser.",
    highlights: [
      "Next.js API routes act as a security perimeter: RSA-signed JWT sessions, per-partner hashed API keys, rate limiting, and a CORS allow-list.",
      "esbuild-bundled modular JS. Partners integrate with one script tag; secrets stay server-side.",
    ],
    stack: ["Next.js", "esbuild", "JWT", "Python"],
  },
  {
    name: "RAG Admin Dashboard",
    tag: "Led · full-stack",
    blurb:
      "Led the full stack of the platform that feeds and observes a RAG knowledge base — an Angular dashboard over a FastAPI backend for registering sources, running syncs, and watching retrieval.",
    highlights: [
      "Led the engineers to take an earlier KB crawler I'd built (Scrapy + Selenium, OpenAI summaries on a monthly cron) and extend it into a dual-strategy crawler — a BFS crawler plus a managed Playwright browser pool for JS-rendered pages — that honors robots.txt and sitemaps, sanitizes HTML, and indexes into Azure AI Search and Blob storage.",
      "Layered FastAPI backend (Python 3.11, async SQLAlchemy 2 on PostgreSQL, Alembic) with JWT/MSAL auth, scheduled syncs, a Zendesk article-ingestion pipeline, and query-logging analytics so the team can see what's asked and how retrieval performs.",
      "Angular 21 dashboard (ng-zorro, MSAL/Entra, Storybook, Vitest) on a one-image-any-environment runtime-config pattern — config generated at container start, so one artifact promotes across environments.",
      "Engineering rigor end to end: strict mypy, ruff, pre-commit, pytest-asyncio, dependency safety scanning, and CI + staging deploy on Azure Container Apps.",
    ],
    stack: [
      "Angular 21",
      "FastAPI",
      "async SQLAlchemy 2",
      "PostgreSQL",
      "Azure AI Search",
      "Playwright",
      "MSAL / Entra",
      "Docker",
    ],
    featured: true,
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    company: "El Paso Labs",
    role: "AI Agent Engineer",
    period: "Mar 2024 — Present",
    points: [
      "Built a customer-support agent from zero to one for one of the largest payment processors: FastAPI + langgraph-supervisor topology routing to three specialist experts behind an Azure Content Safety / Prompt Shield pre-filter with RSA-JWT session auth.",
      "Authored core pieces of the internal agentic workflow runtime (Python 3.13 + LittleHorse + pydantic-ai on Azure): the AP-invoice approval gate, batch correction loop, HITL Slack approval flow, and hexagonal port interfaces that let new channels plug in without touching workflow code.",
      "Built custom Zendesk and NetSuite MCP servers (FastMCP) with JWT-claim-based per-request identity passthrough, so each tool call acts as the right end user.",
      "Designed a dynamic multi-tenant OAuth pattern via Auth0 Management API + Token Vault — idempotent per-provider connections for account-specific token URLs without custom token storage.",
      "Built a LangSmith eval suite with custom evaluators for routing, completeness, scope handling, and Zendesk-action correctness.",
    ],
  },
  {
    company: "El Paso Labs",
    role: "Software Engineer",
    period: "Oct 2023 — Jun 2025",
    points: [
      "Co-led SEIDE, an Auth0-protected installer/dealer portal (Next.js 14 + Redux Toolkit + MUI / NestJS 8 + MongoDB + CASL). Authored the security spine: Auth0 edge middleware, JWKS guard, org-scoped CASL ABAC, and Mongo session transactions.",
      "Built an embeddable chat widget dropping into merchant portals via a single <script> tag, with Next.js API routes as a security perimeter — RSA-signed JWT sessions, hashed per-partner API keys, rate limiting, and a CORS allow-list.",
      "Led the full stack of the RAG knowledge-base admin dashboard — an Angular 21 frontend over a FastAPI + Azure AI Search backend with a dual-strategy (BFS + Playwright) crawler, query-logging analytics, and a one-image-any-environment deploy on Azure Container Apps.",
      "Raised team engineering ergonomics: reusable GitHub Actions workflows, Terraform/Terragrunt Azure stacks, Husky pre-push hooks, PR templates, and a Claude Code Review action.",
    ],
  },
  {
    company: "Parabeac",
    role: "Lead Software Developer / App Developer",
    period: "2019 — 2023",
    points: [
      "Led engineering on a low-code Design-File-to-Flutter tool through its open-source launch — docs, contributor relations, and community challenges.",
      "Built client mobile apps in Flutter/Dart with Firebase auth, database, and cloud functions.",
    ],
  },
];

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    label: "AI / Agents & Orchestration",
    items: [
      "LangGraph",
      "LittleHorse",
      "Temporal",
      "MCP (FastMCP)",
      "pydantic-ai",
      "Azure OpenAI",
      "Claude",
      "RAG / Azure AI Search",
      "LangSmith",
      "Langfuse",
      "Supermemory",
    ],
  },
  {
    label: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Java", "Dart", "SQL"],
  },
  {
    label: "Backend",
    items: ["FastAPI", "async SQLAlchemy 2", "Pydantic v2", "NestJS", "Node.js"],
  },
  {
    label: "Frontend",
    items: ["Next.js", "React", "Redux Toolkit", "Angular", "MUI", "ng-zorro"],
  },
  {
    label: "Data & Storage",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Supabase",
      "Firebase",
      "Azure AI Search",
      "Azure Blob",
    ],
  },
  {
    label: "Crawling & Ingestion",
    items: ["Scrapy", "Selenium", "Playwright", "BeautifulSoup"],
  },
  {
    label: "Infra / DevOps",
    items: [
      "Docker",
      "GitHub Actions",
      "Terraform + Terragrunt",
      "Azure (Container Apps, AI Foundry, Front Door)",
      "Auth0",
      "MSAL / Entra",
    ],
  },
  {
    label: "Testing & Quality",
    items: ["pytest", "Vitest", "mypy", "ruff", "Storybook", "pre-commit"],
  },
];

export const principles: string[] = [
  "Specs before code.",
  "HITL designs that respect the reviewer downstream.",
  "Ergonomics for the next engineer on the repo.",
];

export type Education = {
  school: string;
  degree: string;
  detail: string;
};

export const education: Education[] = [
  {
    school: "University of Texas at El Paso (UTEP)",
    degree: "B.S. Computer Science, Minor in Mathematics",
    detail: "GPA 3.73",
  },
  {
    school: "El Paso Community College (EPCC)",
    degree: "A.A. Computer Science",
    detail: "GPA 3.92",
  },
];
