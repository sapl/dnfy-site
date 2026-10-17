export type DataBlockIcon = "users" | "book" | "calendar" | "cart" | "wallet";

export type DataBlock = {
  icon: DataBlockIcon;
  title: string;
  /** Plain text; `_word_` is rendered as an emphasized word. */
  text: string;
};

export type AiChannelIcon = "dinify" | "chatgpt" | "claude" | "telegram";

/** "You talk to" — any of these reads and updates the same family data. */
export const aiChannels: { name: string; note: string; icon: AiChannelIcon }[] = [
  { name: "Dinify app", note: "built-in", icon: "dinify" },
  { name: "ChatGPT", note: "your own", icon: "chatgpt" },
  { name: "Claude", note: "your own", icon: "claude" },
  { name: "Telegram", note: "Chef bot", icon: "telegram" },
];

export const dataBlocks: DataBlock[] = [
  {
    icon: "users",
    title: "Family profile",
    text: "Who eats, who cooks, likes and allergies, how often you order in — a _short summary_ the AI keeps refining with you.",
  },
  {
    icon: "book",
    title: "Family menu",
    text: "Your own dishes, not a stranger’s database. Name one — recipe, time and nutrition are _filled in_.",
  },
  {
    icon: "calendar",
    title: "Week & month plan",
    text: "Lunches and dinners, _who cooks_ each one, leftover days, takeout and restaurant nights.",
  },
  {
    icon: "cart",
    title: "Shopping list",
    text: "Built from the plan for _today and tomorrow_, grouped by store aisle, shared with everyone.",
  },
  {
    icon: "wallet",
    title: "Spending",
    text: "Groceries, delivery and eating out against a _monthly budget_. Snap a receipt — it’s logged.",
  },
];

export const comparison = {
  chatOnly: {
    title: "Just a chat",
    points: [
      "Forgets last week’s plan and mixes up recipes",
      "A month of meals is a wall of text, not a calendar",
      "Your partner can’t see it or tick off the list",
    ],
  },
  dinify: {
    title: "Chat + Dinify",
    points: [
      "One source of truth that stays consistent all month",
      "A real calendar, list and budget you can glance at",
      "Shared with the whole family, on any device",
    ],
  },
};
