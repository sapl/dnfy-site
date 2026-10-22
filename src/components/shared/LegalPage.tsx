import type { MDXContent } from "mdx/types";
import type { ReactNode } from "react";
import { useLocale, useTranslations } from "next-intl";
import { legal } from "@/content/site";
import { contentLocale } from "@/i18n/routing";
import { PageHeader } from "./PageHeader";
import { Prose } from "./Prose";
import { Section } from "./Section";
import styles from "./LegalPage.module.css";

type Props = {
  title: string;
  intro: string;
  /** Table of contents, from the `<Section>` tags of the MDX page. */
  sections: { id: string; title: string }[];
  Content: MDXContent;
};

/** "In short" box at the top of a legal page; in MDX: `<Summary>` around a markdown list. */
function Summary({ children }: { children: ReactNode }) {
  const t = useTranslations("Legal");
  return (
    <div className={styles.summary}>
      <h2 className={`hdl ${styles.summaryTitle}`}>{t("inShort")}</h2>
      {children}
    </div>
  );
}

/** Numbered section; in MDX: `<Section id="…" title="…">`. The id is the URL anchor, the same in every language. */
function LegalSection({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className={styles.section}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export function LegalPage({ title, intro, sections, Content }: Props) {
  const t = useTranslations("Legal");
  const updated = new Intl.DateTimeFormat(contentLocale(useLocale()), { dateStyle: "long", timeZone: "UTC" }).format(
    new Date(`${legal.updated}T12:00:00Z`),
  );

  return (
    <>
      <PageHeader eyebrow={t("eyebrow", { date: updated })} title={title} lead={intro} />
      <Section tone="plain">
        <div className={styles.layout}>
          <nav className={styles.toc} aria-label={t("contents")}>
            <div className={styles.tocTitle}>{t("contents")}</div>
            <ol>
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.title}</a>
                </li>
              ))}
            </ol>
          </nav>

          <div className={styles.content}>
            <Prose>
              <Content components={{ Summary, Section: LegalSection }} />
            </Prose>
          </div>
        </div>
      </Section>
    </>
  );
}
