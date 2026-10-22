"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { mainNav, routes } from "@/content/site";
import { Link, usePathname } from "@/i18n/navigation";
import { ButtonLink } from "@/components/ui/Button";
import { CloseIcon, MenuIcon } from "@/components/ui/Icons";
import { Logo } from "@/components/ui/Logo";
import styles from "./Header.module.css";

export function Header() {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // close the mobile menu on navigation
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Logo />

        <nav className={styles.nav} aria-label={t("mainLabel")}>
          {mainNav.map((item) => {
            const active = typeof item.href === "string" && pathname.startsWith(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`${styles.link} ${active ? styles.active : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {t(item.label)}
              </Link>
            );
          })}
          <ButtonLink href={routes.login} variant="dark" size="sm">
            {t("logIn")}
          </ButtonLink>
        </nav>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? t("closeMenu") : t("openMenu")}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
        </button>
      </div>

      <div id="mobile-menu" className={styles.mobile} hidden={!open}>
        <nav className={styles.mobileLinks} aria-label={t("mobileLabel")}>
          {mainNav.map((item) => (
            <Link key={item.label} href={item.href}>
              {t(item.label)}
            </Link>
          ))}
        </nav>
        <div className={styles.mobileCtas}>
          <ButtonLink href={routes.login} variant="dark" size="md">
            {t("logIn")}
          </ButtonLink>
          <ButtonLink href={routes.join} variant="primary" size="md">
            {t("getStarted")}
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
