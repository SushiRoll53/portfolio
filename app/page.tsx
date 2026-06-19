import Image from "next/image";
import Nav from "./components/Nav";
import Reveal from "./components/Reveal";
import {
  ArrowIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PinIcon,
} from "./components/icons";
import {
  education,
  experience,
  principles,
  profile,
  projects,
  skills,
  stats,
} from "./lib/content";

function SectionHeading({
  index,
  kicker,
  title,
}: {
  index: string;
  kicker: string;
  title: string;
}) {
  return (
    <Reveal className="mb-12">
      <div className="flex items-center gap-3">
        <span className="kicker">{index}</span>
        <span className="h-px flex-1 bg-border" />
        <span className="kicker">{kicker}</span>
      </div>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
    </Reveal>
  );
}

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <>
      <Nav />
      <main id="top" className="flex-1">
        {/* ---------------- HERO ---------------- */}
        <section className="relative mx-auto flex min-h-[92vh] max-w-5xl flex-col justify-center px-6 pt-24 pb-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background-soft/60 px-3 py-1 text-xs text-muted">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  Open to senior AI / full-stack engineering roles
                </div>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
                  <span className="text-gradient">{profile.name}</span>
                </h1>
              </Reveal>

              <Reveal delay={140}>
                <p className="mt-5 font-mono text-base text-accent sm:text-lg">
                  {profile.title}
                </p>
              </Reveal>

              <Reveal delay={200}>
                <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted sm:text-xl">
                  {profile.tagline}
                </p>
              </Reveal>

              <Reveal delay={260}>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <a
                    href="#work"
                    className="group inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
                  >
                    View selected work
                    <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a
                    href={profile.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border-strong bg-background-soft px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    <DownloadIcon /> Résumé
                  </a>
                  <div className="ml-1 flex items-center gap-1">
                    <IconLink href={profile.github} label="GitHub">
                      <GitHubIcon />
                    </IconLink>
                    <IconLink href={profile.linkedin} label="LinkedIn">
                      <LinkedInIcon />
                    </IconLink>
                    <IconLink href={`mailto:${profile.email}`} label="Email">
                      <MailIcon />
                    </IconLink>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={160} className="order-first mx-auto lg:order-none lg:mx-0">
              <div className="group relative aspect-[4/5] w-52 overflow-hidden rounded-2xl border border-border bg-background-soft/40 shadow-xl shadow-black/20 sm:w-60 lg:w-72">
                <Image
                  src={profile.photo}
                  alt={`Portrait of ${profile.name}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 15rem, 18rem"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/50 via-transparent to-transparent" />
              </div>
            </Reveal>
          </div>

          <Reveal delay={320}>
            <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-background px-5 py-5">
                  <dt className="font-mono text-2xl font-semibold text-foreground sm:text-3xl">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-xs leading-snug text-muted">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </section>

        {/* ---------------- WORK ---------------- */}
        <section id="work" className="mx-auto max-w-5xl px-6 py-24 scroll-mt-20">
          <SectionHeading index="01" kicker="Selected Work" title="Things I've shipped" />

          <div className="space-y-5">
            {featured.map((p, i) => (
              <Reveal key={p.name} delay={i * 60}>
                <article className="group relative overflow-hidden rounded-2xl border border-border bg-background-soft/40 p-6 transition-colors hover:border-border-strong sm:p-8">
                  <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-linear-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                      {p.name}
                    </h3>
                    <span className="font-mono text-xs text-accent">{p.tag}</span>
                  </div>
                  <p className="mt-3 max-w-3xl text-pretty leading-relaxed text-muted">
                    {p.blurb}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                        <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Secondary projects */}
          <Reveal className="mt-12 mb-6">
            <h3 className="kicker">Also built</h3>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {more.map((p, i) => (
              <Reveal key={p.name} delay={i * 50}>
                <article className="flex h-full flex-col rounded-2xl border border-border bg-background-soft/40 p-6 transition-colors hover:border-border-strong">
                  <div className="flex items-baseline justify-between gap-3">
                    <h4 className="text-lg font-semibold tracking-tight">{p.name}</h4>
                  </div>
                  <span className="mt-1 font-mono text-xs text-accent">{p.tag}</span>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {p.blurb}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------------- EXPERIENCE ---------------- */}
        <section
          id="experience"
          className="mx-auto max-w-5xl px-6 py-24 scroll-mt-20"
        >
          <SectionHeading index="02" kicker="Experience" title="Where I've worked" />

          <div className="relative space-y-12 border-l border-border pl-6 sm:pl-8">
            {experience.map((job, i) => (
              <Reveal key={`${job.company}-${job.role}`} delay={i * 60}>
                <div className="relative">
                  <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-background sm:-left-[39px]" />
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-xl font-semibold tracking-tight">
                      {job.role}{" "}
                      <span className="text-muted">· {job.company}</span>
                    </h3>
                    <span className="font-mono text-xs text-muted">
                      {job.period}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2.5">
                    {job.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex gap-3 text-sm leading-relaxed text-foreground/80"
                      >
                        <span className="mt-2 h-1 w-1 flex-none rounded-full bg-muted-soft" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------------- SKILLS ---------------- */}
        <section id="skills" className="mx-auto max-w-5xl px-6 py-24 scroll-mt-20">
          <SectionHeading index="03" kicker="Stack" title="Tools I reach for" />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((group, i) => (
              <Reveal key={group.label} delay={i * 50}>
                <div className="h-full rounded-2xl border border-border bg-background-soft/40 p-6">
                  <h3 className="kicker">{group.label}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------------- ABOUT ---------------- */}
        <section id="about" className="mx-auto max-w-5xl px-6 py-24 scroll-mt-20">
          <SectionHeading index="04" kicker="About" title="How I work" />

          <div className="max-w-3xl">
            <Reveal className="flex flex-col gap-8">
              <div className="space-y-4 text-pretty text-lg leading-relaxed text-foreground/85">
                {profile.summary.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>

              <div className="space-y-3">
                {principles.map((p) => (
                  <div
                    key={p}
                    className="flex items-center gap-3 rounded-lg border border-border bg-background-soft/40 px-4 py-3"
                  >
                    <span className="font-mono text-xs text-accent">→</span>
                    <span className="text-sm text-foreground/90">{p}</span>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-border bg-background-soft/40 p-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="kicker">Education</h3>
                    <div className="mt-5 space-y-5">
                      {education.map((e) => (
                        <div key={e.school}>
                          <p className="font-medium leading-snug">{e.degree}</p>
                          <p className="mt-1 text-sm text-muted">{e.school}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="sm:border-l sm:border-border sm:pl-6">
                    <h3 className="kicker">Languages</h3>
                    <p className="mt-3 text-sm text-muted">
                      Bilingual — English &amp; Spanish
                    </p>
                    <div className="mt-6 flex items-center gap-2 border-t border-border pt-5 text-sm text-muted">
                      <PinIcon className="h-4 w-4 text-accent" />
                      {profile.location}
                    </div>
                    <a
                      href={`mailto:${profile.email}`}
                      className="mt-3 flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
                    >
                      <MailIcon className="h-4 w-4 text-accent" />
                      {profile.email}
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------------- CONTACT ---------------- */}
        <section id="contact" className="mx-auto max-w-5xl px-6 py-24 scroll-mt-20">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-background-soft/60 px-6 py-16 text-center sm:px-12 sm:py-20">
              <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(40rem_20rem_at_50%_-20%,rgba(94,234,212,0.10),transparent)]" />
              <span className="kicker">Get in touch</span>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
                Let&apos;s build something
                <br className="hidden sm:block" /> that ships for real.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-pretty text-muted">
                I&apos;m always happy to talk about agent architecture, auth and
                identity, or the systems work that makes AI dependable in
                production.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
                >
                  <MailIcon className="h-4 w-4" /> {profile.email}
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border-strong bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <GitHubIcon className="h-4 w-4" /> GitHub
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border-strong bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <LinkedInIcon className="h-4 w-4" /> LinkedIn
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted sm:flex-row">
          <p className="font-mono text-xs">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="font-mono text-xs text-muted-soft">
            Built with Next.js &amp; Tailwind · Deployed on Vercel
          </p>
          <div className="flex items-center gap-1">
            <IconLink href={profile.github} label="GitHub">
              <GitHubIcon className="h-4 w-4" />
            </IconLink>
            <IconLink href={profile.linkedin} label="LinkedIn">
              <LinkedInIcon className="h-4 w-4" />
            </IconLink>
            <IconLink href={`mailto:${profile.email}`} label="Email">
              <MailIcon className="h-4 w-4" />
            </IconLink>
          </div>
        </div>
      </footer>
    </>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-muted">
      {children}
    </span>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="grid h-9 w-9 place-items-center rounded-md text-muted transition-colors hover:bg-background-soft hover:text-accent"
    >
      {children}
    </a>
  );
}
