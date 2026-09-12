import type { MetadataRoute } from "next";

// Keep in sync with the SITE_URL in src/app/layout.tsx and sitemap.ts.
const SITE_URL = "https://crabtree-brewing.netlify.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
