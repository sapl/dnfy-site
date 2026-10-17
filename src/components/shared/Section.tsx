import type { ReactNode } from "react";
import styles from "./Section.module.css";

type Props = {
  id?: string;
  tone?: "plain" | "mint" | "sand";
  eyebrow?: string;
  title?: ReactNode;
  lead?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function Section({ id, tone = "plain", eyebrow, title, lead, children, className }: Props) {
  return (
    <section id={id} className={`${styles.section} ${styles[tone]}`}>
      <div className={`container ${styles.inner} ${className ?? ""}`}>
        {(eyebrow || title) && (
          <div className={styles.head}>
            {eyebrow && <div className="eyebrow">{eyebrow}</div>}
            {title && <h2 className={`hdl ${styles.title}`}>{title}</h2>}
            {lead && <p className={styles.lead}>{lead}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
