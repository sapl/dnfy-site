import { site } from "./site";

export type PlanFeature = { text: string; included: boolean };

export type PricingPlan = {
  id: "free" | "base";
  name: string;
  price: string;
  period?: string;
  description: string;
  features: PlanFeature[];
  footnote?: string;
  cta: { label: string; href: string };
  recommended?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    price: "€0",
    description: "The full app to see and run your family's food.",
    features: [
      { text: "Menu & recipes", included: true },
      { text: "Weekly & monthly plan, print it out", included: true },
      { text: "Shopping list — tick off & pull from the plan", included: true },
      { text: "Add & edit by words inside Dinify", included: false },
    ],
    footnote: "Editing goes through **your own AI chat** — the ChatGPT app or Claude, connected to your Dinify.",
    cta: { label: "Get started free", href: site.appUrl },
  },
  {
    id: "base",
    name: "Base",
    price: "€3.99",
    period: "/ month",
    description: "Adds the built-in Dinify Chef — do everything in one chat, right inside the app.",
    features: [
      { text: "Built-in Chef chat — no external AI needed", included: true },
      { text: "Edit the menu & shopping list right in the chat", included: true },
      { text: "Knows your family — better-tuned than external AI", included: true },
      { text: "Smart weekly planning with the Chef", included: true },
    ],
    cta: { label: "Get started", href: site.appUrl },
    recommended: true,
  },
];
