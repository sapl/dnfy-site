import type { Messages } from "@/i18n/messages";
import type { Locale } from "@/i18n/routing";

// typed `useTranslations` / `getTranslations` keys and locales
declare module "next-intl" {
  interface AppConfig {
    Locale: Locale;
    Messages: Messages;
  }
}
