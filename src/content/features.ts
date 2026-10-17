export type FeatureIcon = "people" | "check" | "bag" | "box";

export type Feature = {
  icon: FeatureIcon;
  title: string;
  /** Plain text; `_word_` is rendered as an emphasized word. */
  text: string;
  tags?: string[];
  /** Shown as a "+N" chip after the tags. */
  moreTags?: number;
};

export const planningFeatures: Feature[] = [
  {
    icon: "people",
    title: "Fair split of the load",
    text: "Every cooking meal is assigned — you always see who’s cooking.",
  },
  {
    icon: "check",
    title: "Cook once, eat for days",
    text: "Leftovers planned _on purpose_ — one pot eaten over two or three days, so nothing gets cooked in vain or forgotten.",
  },
  {
    icon: "bag",
    title: "Eat-out & delivery days",
    text: "Restaurants and deliveries booked in advance.",
  },
  {
    icon: "box",
    title: "Meal-kit services",
    text: "A shared directory — the community suggests and adds new services to delegate even more.",
    tags: ["HelloFresh", "Factor", "Gousto"],
    moreTags: 12,
  },
];
