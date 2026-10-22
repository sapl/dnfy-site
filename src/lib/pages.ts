import { readFile } from "node:fs/promises";
import { join } from "node:path";
import type { MDXContent } from "mdx/types";
import { contentLocale, type Locale } from "@/i18n/routing";

/** Long-form pages written in MDX, one file per language: src/content/pages/<locale>/<slug>.mdx. */
export type PageSlug = "about" | "privacy" | "terms";

export async function loadPage(slug: PageSlug, locale: Locale): Promise<MDXContent> {
  const mod = await import(`@/content/pages/${contentLocale(locale)}/${slug}.mdx`);
  return mod.default;
}

/**
 * Table of contents of a legal page, read from its `<Section id="…" title="…">` tags.
 * Pages are prerendered, so the source is read once at build time.
 */
export async function loadSections(slug: PageSlug, locale: Locale) {
  const file = join(process.cwd(), "src/content/pages", contentLocale(locale), `${slug}.mdx`);
  const source = await readFile(file, "utf8");
  return [...source.matchAll(/<Section id="([^"]+)" title="([^"]+)">/g)].map(([, id, title]) => ({ id, title }));
}
