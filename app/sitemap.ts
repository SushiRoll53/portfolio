import type { MetadataRoute } from "next";
import { siteUrl } from "./lib/site";

export const dynamic = "force-static";

const baseUrl = siteUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
