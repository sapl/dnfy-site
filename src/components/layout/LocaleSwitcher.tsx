"use client";

import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
import { ChevronDownIcon, GlobeIcon } from "@/components/ui/Icons";
import { Link, usePathname } from "@/i18n/navigation";
import { LOCALE_COOKIE, LOCALE_STORAGE_KEY, localeNames, routing, type Locale } from "@/i18n/routing";
import styles from "./LocaleSwitcher.module.css";

const YEAR = 60 * 60 * 24 * 365;

/** Remembers an explicit choice: localStorage for the browser, a cookie so the proxy can redirect `/` to it. */
function remember(locale: Locale) {
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    // storage blocked (private mode) — the cookie still works
  }
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=${YEAR}; samesite=lax`;
}

/**
 * Footer language menu. Options are real links to the same page in each language, so crawlers can follow them
 * and the menu works before hydration.
 */
export function LocaleSwitcher() {
  const t = useTranslations("Footer");
  const locale = useLocale();
  const pathname = usePathname();
  const ref = useRef<HTMLDetailsElement>(null);

  // localStorage is the source of truth: restore the cookie if it was cleared or expired
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCALE_STORAGE_KEY);
      const cookie = document.cookie.match(new RegExp(`(?:^|; )${LOCALE_COOKIE}=([^;]*)`))?.[1];
      if (saved && saved !== cookie && (routing.locales as readonly string[]).includes(saved)) remember(saved as Locale);
    } catch {
      // storage unavailable
    }
  }, []);

  // close on outside click and Escape
  useEffect(() => {
    const close = (e: Event) => {
      const el = ref.current;
      if (!el?.open) return;
      if (e instanceof KeyboardEvent ? e.key === "Escape" : !el.contains(e.target as Node)) el.open = false;
    };
    document.addEventListener("click", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("click", close);
      document.removeEventListener("keydown", close);
    };
  }, []);

  return (
    <details ref={ref} className={styles.switcher}>
      <summary className={styles.button} aria-label={`${t("language")}: ${localeNames[locale]}`}>
        <GlobeIcon size={16} />
        {localeNames[locale]}
        <ChevronDownIcon size={14} className={styles.chevron} />
      </summary>
      <ul className={styles.menu} aria-label={t("language")}>
        {routing.locales.map((l) => (
          <li key={l}>
            <Link
              href={pathname}
              locale={l}
              hrefLang={l}
              lang={l}
              aria-current={l === locale ? "true" : undefined}
              className={styles.option}
              onClick={() => {
                remember(l);
                if (ref.current) ref.current.open = false;
              }}
            >
              {localeNames[l]}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}
