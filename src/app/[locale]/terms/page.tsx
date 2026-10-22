import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { LegalPage } from "@/components/shared/LegalPage";
import type { Locale } from "@/i18n/routing";
import { loadPage, loadSections } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";

// the text is in src/content/pages/<locale>/terms.mdx

export async function generateMetadata({ params }: PageProps<"/[locale]/terms">): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const t = await getTranslations({ locale, namespace: "Terms" });
  return pageMetadata({ locale, title: t("title"), description: t("metaDescription"), path: "/terms" });
}

export default async function TermsPage({ params }: PageProps<"/[locale]/terms">) {
  const locale = (await params).locale as Locale;
  setRequestLocale(locale);
  const t = await getTranslations("Terms");

  return (
    <LegalPage
      title={t("title")}
      intro={t("intro")}
      sections={await loadSections("terms", locale)}
      Content={await loadPage("terms", locale)}
    />
  );
}
