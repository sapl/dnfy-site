import { site } from "./site";

export type PlanFeature = { text: string; included: boolean };

export type PricingPlan = {
  id: "free" | "base";
  name: string;
  price: string;
  period?: string;
  description: string;
  /** Small label in the card's top-right corner. */
  tag?: { text: string; icon?: "chatgpt" };
  features: PlanFeature[];
  cta: { label: string; href: string };
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    description: "Dinify as a base for your AI chat.",
    tag: { text: "ChatGPT Plugin only", icon: "chatgpt" },
    features: [
      { text: "Menu, recipes, weekly & monthly plan, shopping list, spending", included: true },
      { text: "Plan and edit everything from your ChatGPT or Claude", included: true },
      { text: "No chat in the app — open ChatGPT to make changes", included: false },
    ],
    cta: { label: "Start free", href: site.appUrl },
  },
  {
    id: "base",
    name: "Base",
    price: "$3.99",
    period: "/ month",
    description: "Do everything inside Dinify — no switching between apps.",
    features: [
      { text: "Chef chat in the app and Telegram", included: true },
      { text: "Shopping list and spending on the go", included: true },
      { text: "Sharper suggestions — the Chef knows your family", included: true },
    ],
    cta: { label: "Get Base", href: site.appUrl },
  },
];

/** Shown under the plans: why Base isn't free. */
export const pricingNote =
  "**Why Base is paid:** the built-in chat uses a paid AI service, and we cover every request.";
