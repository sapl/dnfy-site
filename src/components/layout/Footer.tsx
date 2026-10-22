import { useTranslations } from "next-intl";
import { footerNav } from "@/content/site";
import { Logo } from "@/components/ui/Logo";
import { Link } from "@/i18n/navigation";
import { LocaleSwitcher } from "./LocaleSwitcher";
import styles from "./Footer.module.css";

export function Footer() {
  const t = useTranslations("Footer");
  const nav = useTranslations("Nav");
  const meta = useTranslations("Meta");

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.grid}>
          <div>
            <div className={styles.brand}>
              <Logo size={32} fontSize={18} />
            </div>
            <p className={styles.tagline}>{meta("tagline")}</p>
          </div>

          {footerNav.map((group) => (
            <div key={group.title}>
              <div className={styles.title}>{t(group.title)}</div>
              <nav className={styles.links} aria-label={t(group.title)}>
                {group.links.map((link) => (
                  <Link key={link.label} href={link.href}>
                    {nav(link.label)}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <span>{t("rights", { year: new Date().getFullYear() })}</span>
          <div className={styles.bottomEnd}>
            <span>{t("madeFor")}</span>
            <LocaleSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
}
