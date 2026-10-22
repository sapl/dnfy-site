export const site = {
  name: "Dinify",
  url: "https://www.dinify.me",
  appUrl: "https://app.dinify.me/",
  telegramBot: "https://t.me/dinify_bot",
  email: "hello@dinify.me",
  // Google Analytics 4 measurement ID
  gaId: "G-VJK3Q1DXVY",
} as const;

/** Shown as "Last updated" on the Privacy Policy and Terms, formatted for each language. */
export const legal = {
  updated: "2026-10-22",
} as const;

/** Section of the home page; an object so the i18n `Link` builds `/ru#pricing`, not `/ru/#pricing`. */
const homeSection = (hash: string) => ({ pathname: "/", hash }) as const;

/** Labels are keys in the `Nav` messages; hrefs get the language prefix from the i18n `Link`. */
export type NavLink = {
  label: "howItWorks" | "about" | "pricing" | "faq" | "contact" | "privacy" | "terms";
  href: string | ReturnType<typeof homeSection>;
};

export const mainNav: NavLink[] = [
  { label: "howItWorks", href: homeSection("how-it-works") },
  { label: "about", href: "/about" },
  { label: "pricing", href: homeSection("pricing") },
  { label: "faq", href: "/faq" },
];

export const footerNav: { title: "product" | "company" | "legal"; links: NavLink[] }[] = [
  {
    title: "product",
    links: [
      { label: "pricing", href: homeSection("pricing") },
      { label: "faq", href: "/faq" },
    ],
  },
  {
    title: "company",
    links: [
      { label: "about", href: "/about" },
      { label: "contact", href: "/contact" },
    ],
  },
  {
    title: "legal",
    links: [
      { label: "privacy", href: "/privacy" },
      { label: "terms", href: "/terms" },
    ],
  },
];

export const routes = {
  home: "/",
  // Log In and Join both lead to the web app
  login: site.appUrl,
  join: site.appUrl,
  chef: homeSection("chef"),
  howItWorks: homeSection("how-it-works"),
  pricing: homeSection("pricing"),
  about: "/about",
  contact: "/contact",
  privacy: "/privacy",
  terms: "/terms",
} as const;
