import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "es", "de", "fr", "ru", "pt", "ja"],
  defaultLocale: "en",
  // every URL carries its language: /en/faq, /ru/faq
  localePrefix: "always",
  // next-intl would remember any visited locale; we remember only an explicit choice in the switcher (see proxy.ts)
  localeCookie: false,
  // hreflang links live in page metadata and the sitemap, and cover translated locales only
  alternateLinks: false,
});

export type Locale = (typeof routing.locales)[number];

/** Locales with their own texts. The others show the English site for now and stay out of hreflang and the sitemap. */
export const translatedLocales = ["en", "es", "de", "fr", "ru"] as const satisfies readonly Locale[];
export type ContentLocale = (typeof translatedLocales)[number];

export function isTranslated(locale: Locale): locale is ContentLocale {
  return (translatedLocales as readonly Locale[]).includes(locale);
}

/** Language the page content is actually written in. */
export function contentLocale(locale: Locale): ContentLocale {
  return isTranslated(locale) ? locale : "en";
}

/** Shown in the language switcher, each in its own language. */
export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  de: "Deutsch",
  fr: "Français",
  ru: "Русский",
  pt: "Português",
  ja: "日本語",
};

/** Open Graph `og:locale` values. */
export const ogLocales: Record<ContentLocale, string> = {
  en: "en_US",
  es: "es_ES",
  de: "de_DE",
  fr: "fr_FR",
  ru: "ru_RU",
};

/** The switcher saves the chosen language under this key in localStorage and mirrors it to a cookie for the proxy. */
export const LOCALE_STORAGE_KEY = "locale";
export const LOCALE_COOKIE = "NEXT_LOCALE";
