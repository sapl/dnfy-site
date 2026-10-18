import type { Metadata } from "next";
import { ChatSection } from "@/components/home/ChatSection";
import { Hero } from "@/components/home/Hero";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { IdeaSection } from "@/components/home/IdeaSection";
import { PricingSection } from "@/components/home/PricingSection";
import { StorySection } from "@/components/home/StorySection";
import { JsonLd } from "@/components/shared/JsonLd";
import { site } from "@/content/site";
import { homeJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Dinify — Stop deciding what to cook every day",
  description: site.description,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <IdeaSection />
      <ChatSection />
      <HowItWorksSection />
      <StorySection />
      <PricingSection />
      <JsonLd data={homeJsonLd()} />
    </>
  );
}
