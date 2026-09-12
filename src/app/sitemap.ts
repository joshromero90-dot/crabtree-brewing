import type { MetadataRoute } from "next";

// Keep in sync with the SITE_URL in src/app/layout.tsx — update both once
// crabtreebrewing.com's DNS points here.
const SITE_URL = "https://crabtree-brewing.netlify.app";

const ROUTES = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/beer", priority: 0.9, changeFrequency: "daily" as const },
  { path: "/taproom", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/events", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/shop", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.5, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
