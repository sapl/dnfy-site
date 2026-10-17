import type { ReactNode } from "react";
import { CheckIcon } from "@/components/ui/Icons";
import { PageHeader } from "./PageHeader";
import { Prose } from "./Prose";
import { Section } from "./Section";
import styles from "./LegalPage.module.css";

export type LegalSection = { id: string; title: string; body: ReactNode };

type Props = {
  title: string;
  updated: string;
  intro: string;
  summary: ReactNode[];
  sections: LegalSection[];
};

export function LegalPage({ title, updated, intro, summary, sections }: Props) {
  return (
    <>
      <PageHeader eyebrow={`Legal · Last updated ${updated}`} title={title} lead={intro} />
      <Section tone="plain">
        <div className={styles.layout}>
          <nav className={styles.toc} aria-label="Contents">
            <div className={styles.tocTitle}>Contents</div>
            <ol>
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.title}</a>
                </li>
              ))}
            </ol>
          </nav>

          <div className={styles.content}>
            <div className={styles.summary}>
              <h2 className={`hdl ${styles.summaryTitle}`}>In short</h2>
              <ul>
                {summary.map((item, i) => (
                  <li key={i}>
                    <CheckIcon size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Prose>
              {sections.map((s, i) => (
                <section key={s.id} id={s.id} className={styles.section}>
                  <h2>
                    {i + 1}. {s.title}
                  </h2>
                  {s.body}
                </section>
              ))}
            </Prose>
          </div>
        </div>
      </Section>
    </>
  );
}
