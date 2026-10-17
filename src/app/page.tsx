import { ChatSection } from "@/components/home/ChatSection";
import { Hero } from "@/components/home/Hero";
import { IdeaSection } from "@/components/home/IdeaSection";
import { PricingSection } from "@/components/home/PricingSection";
import { TimeSection } from "@/components/home/TimeSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ChatSection />
      <IdeaSection />
      <TimeSection />
      <PricingSection />
    </>
  );
}
