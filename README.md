# Bryan R. Figueroa — Personal Site

A fast, single-page portfolio for an AI Agent & LLM-Orchestration Engineer.
Built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4**,
designed to deploy on **Vercel**.

## Develop

```bash
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
npm run lint
```

## Editing content

All copy lives in one file — **`app/lib/content.ts`**. Profile, stats, projects,
experience, skills, and education are typed data structures; edit there and the
whole page updates. No JSX changes needed for routine content updates.

## Structure

```
app/
  layout.tsx        # fonts + SEO metadata
  page.tsx          # all page sections (server component)
  globals.css       # design system / theme tokens
  icon.svg          # favicon (BF monogram)
  robots.ts         # /robots.txt
  sitemap.ts        # /sitemap.xml
  lib/content.ts    # <- single source of truth for all content
  components/
    Nav.tsx         # sticky nav + scroll-spy (client)
    Reveal.tsx      # scroll-reveal animation wrapper (client)
    icons.tsx       # inline SVG icons
public/
  Bryan_Figueroa_Resume.docx   # downloadable résumé (see note below)
```

## Résumé download

The "Résumé" button links to `/public/Bryan_Figueroa_Resume.docx`.
For a more shareable format, export your résumé to **PDF**, drop it in `public/`,
and update `profile.resume` in `app/lib/content.ts` to point at the `.pdf`.

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel, **Add New → Project** and import the repo.
3. Vercel auto-detects Next.js — no config needed. Click **Deploy**.

Or from the CLI:

```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production deploy
```

Update the production URL in `app/layout.tsx` (`metadataBase`),
`app/robots.ts`, and `app/sitemap.ts` once your domain is live.
