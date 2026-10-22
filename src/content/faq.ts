import type { Messages } from "@/i18n/messages";

/** FAQ sections in display order; questions and answers live in the `Faq` messages under the same id. */
export const faqGroupIds = ["general", "start", "chef", "menu", "planning", "shopping", "spending", "channels", "billing"] as const;

export type FaqGroupId = (typeof faqGroupIds)[number];
export type FaqItem = Messages["Faq"][FaqGroupId]["items"][number];
