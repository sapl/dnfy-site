import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { LegalPage } from "@/components/shared/LegalPage";
import type { Locale } from "@/i18n/routing";
import { loadPage, loadSections } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";

// the text is in src/content/pages/<locale>/privacy.mdx

export async function generateMetadata({ params }: PageProps<"/[locale]/privacy">): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const t = await getTranslations({ locale, namespace: "Privacy" });
  return pageMetadata({ locale, title: t("title"), description: t("metaDescription"), path: "/privacy" });
}

export default async function PrivacyPage({ params }: PageProps<"/[locale]/privacy">) {
  const locale = (await params).locale as Locale;
  setRequestLocale(locale);
  const t = await getTranslations("Privacy");

  return (
    <LegalPage
      title={t("title")}
      intro={t("intro")}
      sections={await loadSections("privacy", locale)}
      Content={await loadPage("privacy", locale)}
    />
  );
}
