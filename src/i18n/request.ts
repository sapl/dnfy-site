import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { messages } from "./messages";
import { contentLocale, routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;
  // sample dates on the site are fixed calendar days, so render them the same everywhere
  return { locale, messages: messages[contentLocale(locale)], timeZone: "UTC" };
});
