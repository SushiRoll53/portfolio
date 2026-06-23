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
  // Live PDF export of the Google Doc — edit the Doc and this link always serves the latest.
  resume:
    "https://docs.google.com/document/d/1qXcWUC1KBt5qPhA_Q61AbvHGJ8-Hh5ec/export?format=pdf",
  photo: "/bryan-portrait.jpg",
  // Hero one-liner
  tagline:
    "I build production AI agents — and the auth, infra, and eval suites that let them actually ship.",
  summary: [
    "Full-stack engineer who moved into AI agents and LLM orchestration without dropping a production-systems mindset — Docker, CI/CD, Terraform, and real eval suites around everything I ship.",
    "I gravitate to the load-bearing parts of a codebase: auth and identity, deploy pipelines, and the specs that come before the code. I've taken systems 0→1 — a support agent for one of the largest payment processors — and led others end to end, like the RAG platform behind our knowledge base.",
    "I design for the humans downstream — the reviewer and the next engineer on the repo — instincts I sharpened teaching a semester-long coding bootcamp for near-beginners.",
  ],
};

export const stats: { value: string; label: string }[] = [
  { value: "7+ yrs", label: "Shipping production systems" },
  { value: "0→1", label: "Shipped an AI support agent for a top payment processor" },
  { value: "3", label: "Human-in-the-loop agentic workflows automating real work" },
  { value: "Full-stack", label: "Frontend → infra → eval suites" },
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
      "Built to cut time-to-resolution for common questions from hours to minutes, 24/7.",
      "Routes to three specialist experts — RAG over Azure AI Search, Zendesk ticket ops, and a Platform MCP server.",
      "Hardened behind an Azure Prompt Shield pre-filter and RSA-JWT session auth.",
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
      "Backs 3 agentic workflows in production — two automating the accounting team's work, one a memory-driven growth workflow (embeddings + RAG).",
      "Automates routine accounting work across the tools the team already uses, like NetSuite, with human approval in the loop.",
      "Authored the core runtime — approval gates, batch-correction loop, HITL Slack flow, and hexagonal ports that plug in new tools without touching workflow code.",
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
      "Led full-stack — an Angular 21 dashboard over a FastAPI + PostgreSQL backend that feeds and observes the RAG knowledge base.",
      "Dual-strategy crawler (BFS + managed Playwright pool) that honors robots.txt and indexes into Azure AI Search.",
      "One-image-any-environment deploy on Azure Container Apps, with strict mypy/ruff/pytest CI.",
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
    period: "Oct 2023 — Present",
    points: [
      "Promoted from Software Engineer to focus on AI agents, while keeping core systems and software responsibilities.",
      "Own auth/identity and core agent-runtime work across the team's production agents.",
      "Shipped the team's first 0→1 production support agent; authored core pieces of the reusable workflow runtime.",
      "Built the team's MCP servers, multi-tenant OAuth pattern, and eval tooling.",
      "Co-led SEIDE, built the chat-widget security perimeter, and led the full-stack RAG dashboard.",
      "Raised the team baseline: reusable GitHub Actions, Terraform/Terragrunt Azure stacks, pre-push hooks, and a Claude Code Review action.",
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
      "RAG / Azure AI Search",
      "LangSmith",
      "Claude",
    ],
  },
  {
    label: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Java", "Dart", "SQL"],
  },
  {
    label: "Backend & Data",
    items: [
      "FastAPI",
      "async SQLAlchemy 2",
      "NestJS",
      "PostgreSQL",
      "MongoDB",
      "Playwright",
      "Azure AI Search / Blob",
    ],
  },
  {
    label: "Frontend",
    items: ["Next.js", "React", "Angular", "Redux Toolkit", "ng-zorro"],
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
    items: ["pytest", "Vitest", "mypy", "ruff", "pre-commit", "Storybook"],
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
};

export const education: Education[] = [
  {
    school: "University of Texas at El Paso (UTEP)",
    degree: "B.S. Computer Science, Minor in Mathematics",
  },
];
