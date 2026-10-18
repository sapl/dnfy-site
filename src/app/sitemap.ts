import type { MetadataRoute } from "next";
import { site } from "@/content/site";

// Bump `updated` when a page's content changes — it becomes <lastmod> in the sitemap.
const staticRoutes: { path: string; updated: string }[] = [
  { path: "", updated: "2026-10-18" },
  { path: "/about", updated: "2026-10-18" },
  { path: "/faq", updated: "2026-10-18" },
  { path: "/contact", updated: "2026-10-17" },
  { path: "/privacy", updated: "2026-10-16" },
  { path: "/terms", updated: "2026-10-16" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map(({ path, updated }) => ({
    url: `${site.url}${path}`,
    lastModified: updated,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
}
