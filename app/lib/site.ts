// Deployment-aware site helpers. `NEXT_PUBLIC_BASE_PATH` is injected from
// next.config.ts so there is one source of truth for the GitHub Pages sub-path.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// Absolute origin the site is served from (used for metadata, sitemap, robots).
export const siteUrl = `https://sushiroll53.github.io${basePath}`;

// Prefix a public-folder asset path with the basePath.
// next/image `src` and plain `<a href>` do NOT get basePath applied automatically.
export const asset = (path: string) => `${basePath}${path}`;
