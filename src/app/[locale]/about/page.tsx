import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { loadPage } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";
import styles from "./page.module.css";

// the letter itself is in src/content/pages/<locale>/about.mdx

export async function generateMetadata({ params }: PageProps<"/[locale]/about">): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const t = await getTranslations({ locale, namespace: "About" });
  return pageMetadata({ locale, title: t("metaTitle"), description: t("metaDescription"), path: "/about" });
}

export default async function AboutPage({ params }: PageProps<"/[locale]/about">) {
  const locale = (await params).locale as Locale;
  setRequestLocale(locale);
  const t = await getTranslations("About");
  const Letter = await loadPage("about", locale);

  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        <h1 className="visually-hidden">{t("heading")}</h1>
        <article className={styles.message}>
          <div className={styles.from}>
            <span className={styles.avatar} aria-hidden="true">
              {t("name").charAt(0)}
            </span>
            <div>
              <div className={styles.name}>{t("name")}</div>
              <div className={styles.meta}>{t("byline")}</div>
            </div>
          </div>

          <div className={styles.text}>
            <Letter />
            <p className={styles.sign}>{t("name")}</p>
          </div>
        </article>
      </div>
    </section>
  );
}
