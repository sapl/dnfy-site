export type FeatureIcon = "people" | "check" | "bag" | "box";

/** Texts live in the `Idea.features` messages under the same id; `_word_` there is rendered as an emphasized word. */
export type Feature = {
  id: "split" | "leftovers" | "eatOut" | "mealKits";
  icon: FeatureIcon;
  tags?: string[];
  /** Shown as a "+N" chip after the tags. */
  moreTags?: number;
};

export const planningFeatures: Feature[] = [
  { id: "split", icon: "people" },
  { id: "leftovers", icon: "check" },
  { id: "eatOut", icon: "bag" },
  { id: "mealKits", icon: "box", tags: ["HelloFresh", "Factor", "Gousto"], moreTags: 12 },
];
