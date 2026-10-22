import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Carrot, Citrus, ForkKnife } from "@/components/shared/Decorations";
import { MailIcon } from "@/components/ui/Icons";
import { site } from "@/content/site";
import type { Locale } from "@/i18n/routing";
import { pageMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export async function generateMetadata({ params }: PageProps<"/[locale]/contact">): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const t = await getTranslations({ locale, namespace: "Contact" });
  return pageMetadata({ locale, title: t("metaTitle"), description: t("metaDescription"), path: "/contact" });
}

export default async function ContactPage({ params }: PageProps<"/[locale]/contact">) {
  setRequestLocale((await params).locale as Locale);
  const t = await getTranslations("Contact");

  return (
    <section className={styles.wrap}>
      <Citrus className={styles.citrus} size={120} />
      <ForkKnife className={styles.fork} />
      <Carrot className={styles.carrot} />
      <div className={styles.inner}>
        <div className="eyebrow">{t("eyebrow")}</div>
        <h1 className={`hdl ${styles.title}`}>{t("title")}</h1>
        <p className={styles.lead}>{t("lead")}</p>
        <a href={`mailto:${site.email}`} className={styles.card}>
          <span className={styles.icon}>
            <MailIcon size={26} />
          </span>
          <span>
            <span className={styles.label}>{t("emailUs")}</span>
            <span className={styles.email}>{site.email}</span>
          </span>
        </a>
      </div>
    </section>
  );
}
