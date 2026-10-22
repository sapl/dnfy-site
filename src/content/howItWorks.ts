// Texts live in the `HowItWorks` messages; `_word_` there is rendered as an emphasized word.

export type DataBlockIcon = "users" | "book" | "calendar" | "cart" | "wallet";

export type AiChannelIcon = "dinify" | "chatgpt" | "claude" | "telegram";

/** "You talk to" — any of these reads and updates the same family data. Ids are keys in `HowItWorks.channels`. */
export const aiChannels: AiChannelIcon[] = ["dinify", "chatgpt", "claude", "telegram"];

/** Ids are keys in `HowItWorks.blocks`. */
export const dataBlocks: { id: "profile" | "menu" | "plan" | "shopping" | "spending"; icon: DataBlockIcon }[] = [
  { id: "profile", icon: "users" },
  { id: "menu", icon: "book" },
  { id: "plan", icon: "calendar" },
  { id: "shopping", icon: "cart" },
  { id: "spending", icon: "wallet" },
];
