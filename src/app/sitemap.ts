import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { translatedLocales } from "@/i18n/routing";
import { languageAlternates, localizedPath } from "@/lib/seo";

// Bump `updated` when a page's content changes — it becomes <lastmod> in the sitemap.
const staticRoutes: { path: "/" | `/${string}`; updated: string }[] = [
  { path: "/", updated: "2026-10-22" },
  { path: "/about", updated: "2026-10-22" },
  { path: "/faq", updated: "2026-10-22" },
  { path: "/contact", updated: "2026-10-22" },
  { path: "/privacy", updated: "2026-10-22" },
  { path: "/terms", updated: "2026-10-22" },
];

/** One entry per page and translated language, each listing all its language versions (hreflang). */
export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.flatMap(({ path, updated }) =>
    translatedLocales.map((locale) => ({
      url: `${site.url}${localizedPath(path, locale)}`,
      lastModified: updated,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.7,
      alternates: { languages: languageAlternates(path, true) },
    })),
  );
}
