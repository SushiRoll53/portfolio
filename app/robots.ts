import type { MetadataRoute } from "next";

const baseUrl = "https://portfolio-henna-nine-zwkjh98b21.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
