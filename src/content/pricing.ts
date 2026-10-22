// Names, descriptions, features and buttons live in the `Pricing.plans` messages under the plan id.

export type PricingPlan = {
  id: "free" | "base";
  price: string;
  /** Billed monthly: shows "/ month" after the price. */
  monthly?: boolean;
  /** Price when paid for a year at once; the plan then follows the Monthly / Yearly switch. */
  yearlyPrice?: string;
  /** Small label in the card's top-right corner (text in `Pricing.plans.<id>.tag`). */
  tag?: { icon?: "chatgpt" };
  /** Whether each feature in `Pricing.plans.<id>.features` is included, in the same order. */
  included: boolean[];
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "free",
    price: "$0",
    tag: { icon: "chatgpt" },
    included: [true, true, false],
  },
  {
    id: "base",
    price: "$3.99",
    monthly: true,
    yearlyPrice: "$39",
    included: [true, true, true],
  },
];

const amount = (price: string) => Number(price.replace(/[^\d.]/g, ""));

/** Monthly equivalent of the yearly price ("$3.25"). */
export function yearlyDeal(plan: PricingPlan) {
  if (!plan.yearlyPrice) return null;
  const year = amount(plan.yearlyPrice);
  return { perMonth: `$${(year / 12).toFixed(2)}` };
}
