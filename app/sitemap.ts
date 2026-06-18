import type { MetadataRoute } from "next";

const baseUrl = "https://portfolio-henna-nine-zwkjh98b21.vercel.app";

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
