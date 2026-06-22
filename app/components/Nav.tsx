"use client";

import { useEffect, useState } from "react";
import { profile } from "../lib/content";
import { asset } from "../lib/site";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a
          href="#top"
          className="group flex items-center gap-2 font-mono text-sm font-medium tracking-tight"
        >
          <span className="grid h-7 w-7 place-items-center rounded-md border border-border-strong bg-background-soft text-accent transition-colors group-hover:border-accent">
            BF
          </span>
          <span className="hidden text-foreground sm:inline">
            {profile.name.split(" ")[0]} {profile.name.split(" ").at(-1)}
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                active === link.href
                  ? "text-foreground"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={asset(profile.resume)}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-md border border-border-strong bg-background-soft px-3 py-1.5 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Résumé
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted md:hidden"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-px w-5 bg-current transition-transform ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-current transition-transform ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-5xl flex-col px-6 py-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm text-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href={asset(profile.resume)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="py-2.5 text-sm text-accent"
            >
              Résumé ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
