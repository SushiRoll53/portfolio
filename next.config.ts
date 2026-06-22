import type { NextConfig } from "next";

// Single source of truth for the GitHub Pages project sub-path.
// Served at https://sushiroll53.github.io/portfolio
const basePath = "/portfolio";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix: `${basePath}/`,
  // Expose to the app so public-asset URLs (next/image src, <a href> to files)
  // can be prefixed — next/image and plain anchors don't apply basePath.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
