import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { pricingPlans } from "@/content/pricing";
import { site } from "@/content/site";
import { contentLocale, ogLocales, translatedLocales, type ContentLocale, type Locale } from "@/i18n/routing";

/** Route path without the language prefix, e.g. "/faq" or "/" for home. */
type RoutePath = "/" | `/${string}`;

/** Path with the language prefix: ("/faq", "ru") → "/ru/faq", ("/", "ru") → "/ru". */
export function localizedPath(path: RoutePath, locale: Locale) {
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

/** hreflang map for a route: every translated locale plus `x-default` (English). */
export function languageAlternates(path: RoutePath, absolute = false) {
  const url = (locale: ContentLocale) => `${absolute ? site.url : ""}${localizedPath(path, locale)}`;
  return {
    ...Object.fromEntries(translatedLocales.map((l) => [l, url(l)])),
    "x-default": url("en"),
  };
}

/** Link preview rendered by `app/[locale]/opengraph-image.tsx`, one per language. */
export function ogImage(locale: Locale, alt: string) {
  return { url: `/${contentLocale(locale)}/opengraph-image`, width: 1200, height: 630, alt };
}

type PageSeo = {
  locale: Locale;
  title: string;
  description: string;
  /** Route path without the language, e.g. "/faq". Resolved against `metadataBase` (www.dinify.me). */
  path: RoutePath;
  /** Use `title` as is instead of the "%s · Dinify" template (home page). */
  absoluteTitle?: boolean;
};

/**
 * Per-page metadata: canonical URL, hreflang alternates, Open Graph and Twitter tags. Next merges metadata shallowly,
 * so a page that sets `openGraph` replaces the layout's one entirely — every page builds the full set here.
 *
 * Untranslated locales (pt, ja) show the English text, so their canonical points to the English page and they
 * don't announce themselves in hreflang — search engines index only real translations.
 */
export async function pageMetadata({ locale, title, description, path, absoluteTitle }: PageSeo): Promise<Metadata> {
  const lang = contentLocale(locale);
  const t = await getTranslations({ locale, namespace: "Meta" });
  const fullTitle = absoluteTitle ? title : `${title} · ${site.name}`;
  const url = localizedPath(path, lang);
  const image = ogImage(locale, t("ogImageAlt"));

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: ogLocales[lang],
      alternateLocale: translatedLocales.filter((l) => l !== lang).map((l) => ogLocales[l]),
      title: fullTitle,
      description,
      url,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

const price = (value: string) => value.replace(/[^\d.]/g, "");

/** Organization, WebSite and SoftwareApplication for the home page. */
export async function homeJsonLd(locale: Locale) {
  const lang = contentLocale(locale);
  const t = await getTranslations({ locale, namespace: "Meta" });
  const tp = await getTranslations({ locale, namespace: "Pricing.plans" });
  const orgId = `${site.url}/#organization`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: site.name,
        url: site.url,
        logo: `${site.url}/images/logo.png`,
        email: site.email,
        sameAs: [site.telegramBot],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        name: site.name,
        url: site.url,
        description: t("description"),
        inLanguage: [...translatedLocales],
        publisher: { "@id": orgId },
      },
      {
        "@type": "SoftwareApplication",
        name: site.name,
        url: site.appUrl,
        description: t("description"),
        inLanguage: lang,
        applicationCategory: "LifestyleApplication",
        operatingSystem: "Web",
        publisher: { "@id": orgId },
        offers: pricingPlans.flatMap((plan) => {
          const offer = (value: string, billingDuration?: "P1M" | "P1Y") => ({
            "@type": "Offer",
            name: tp(`${plan.id}.name`),
            description: tp(`${plan.id}.description`),
            price: price(value),
            priceCurrency: "USD",
            url: site.appUrl,
            ...(billingDuration && {
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: price(value),
                priceCurrency: "USD",
                billingDuration,
              },
            }),
          });
          if (!plan.monthly) return [offer(plan.price)];
          return [offer(plan.price, "P1M"), ...(plan.yearlyPrice ? [offer(plan.yearlyPrice, "P1Y")] : [])];
        }),
      },
    ],
  };
}
