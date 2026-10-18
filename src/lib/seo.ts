import type { Metadata } from "next";
import { pricingPlans } from "@/content/pricing";
import { site } from "@/content/site";

/** Link preview rendered by `app/opengraph-image.tsx`. */
export const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Dinify — Stop deciding what to cook every day",
};

type PageSeo = {
  title: string;
  description: string;
  /** Route path, e.g. "/faq". Resolved against `metadataBase` (www.dinify.me). */
  path: string;
  /** Use `title` as is instead of the "%s · Dinify" template (home page). */
  absoluteTitle?: boolean;
};

/**
 * Per-page metadata: canonical URL plus Open Graph and Twitter tags. Next merges metadata shallowly, so a page
 * that sets `openGraph` replaces the layout's one entirely — every page builds the full set here.
 * For the same reason the preview image is listed explicitly: the file convention only covers the root segment.
 */
export function pageMetadata({ title, description, path, absoluteTitle }: PageSeo): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} · ${site.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_US",
      title: fullTitle,
      description,
      url: path,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}

const price = (value: string) => value.replace(/[^\d.]/g, "");

/** Organization, WebSite and SoftwareApplication for the home page. */
export function homeJsonLd() {
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
        description: site.description,
        inLanguage: "en",
        publisher: { "@id": orgId },
      },
      {
        "@type": "SoftwareApplication",
        name: site.name,
        url: site.appUrl,
        description: site.description,
        applicationCategory: "LifestyleApplication",
        operatingSystem: "Web",
        publisher: { "@id": orgId },
        offers: pricingPlans.map((plan) => ({
          "@type": "Offer",
          name: plan.name,
          description: plan.description,
          price: price(plan.price),
          priceCurrency: "EUR",
          url: plan.cta.href,
          ...(plan.period && {
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: price(plan.price),
              priceCurrency: "EUR",
              billingDuration: "P1M",
            },
          }),
        })),
      },
    ],
  };
}
