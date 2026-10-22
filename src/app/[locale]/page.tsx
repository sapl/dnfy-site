import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ChatSection } from "@/components/home/ChatSection";
import { Hero } from "@/components/home/Hero";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { IdeaSection } from "@/components/home/IdeaSection";
import { PricingSection } from "@/components/home/PricingSection";
import { StorySection } from "@/components/home/StorySection";
import { JsonLd } from "@/components/shared/JsonLd";
import type { Locale } from "@/i18n/routing";
import { homeJsonLd, pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[locale]">): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const t = await getTranslations({ locale, namespace: "Meta" });
  return pageMetadata({ locale, title: t("homeTitle"), description: t("description"), path: "/", absoluteTitle: true });
}

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const locale = (await params).locale as Locale;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <IdeaSection />
      <ChatSection />
      <HowItWorksSection />
      <StorySection />
      <PricingSection />
      <JsonLd data={await homeJsonLd(locale)} />
    </>
  );
}
