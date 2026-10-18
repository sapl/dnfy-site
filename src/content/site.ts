export const site = {
  name: "Dinify",
  tagline: "Family food, organized — fewer decisions, calmer days.",
  description:
    "Dinify organizes your family's meals, shopping and cooking schedule — so everyone knows what's for dinner and who's responsible.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.dinify.me",
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "https://app.dinify.me/",
  telegramBot: "https://t.me/dinify_bot",
  email: "hello@dinify.me",
} as const;

/** Shown as "Last updated" on the Privacy Policy and Terms. */
export const legal = {
  updated: "16 October 2026",
} as const;

export type NavLink = { label: string; href: string };

export const mainNav: NavLink[] = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/faq" },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Pricing", href: "/#pricing" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export const routes = {
  home: "/",
  // Log In and Join both lead to the web app
  login: site.appUrl,
  join: site.appUrl,
  chef: "/#chef",
  howItWorks: "/#how-it-works",
  pricing: "/#pricing",
  about: "/about",
  contact: "/contact",
  privacy: "/privacy",
  terms: "/terms",
} as const;
