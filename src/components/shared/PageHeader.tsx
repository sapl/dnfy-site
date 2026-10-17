import type { ReactNode } from "react";
import { Citrus, Herb } from "./Decorations";
import styles from "./PageHeader.module.css";

type Props = {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  tone?: "plain" | "mint" | "sand";
  align?: "left" | "center";
  children?: ReactNode;
};

export function PageHeader({ eyebrow, title, lead, tone = "plain", align = "center", children }: Props) {
  return (
    <section className={`${styles.header} ${styles[tone]}`}>
      <Citrus className={styles.citrus} size={120} />
      <Herb className={styles.herb} width={100} />
      <div className={`container ${styles.inner} ${align === "center" ? styles.center : ""}`}>
        <div className="eyebrow">{eyebrow}</div>
        <h1 className={`hdl ${styles.title}`}>{title}</h1>
        {lead && <p className={styles.lead}>{lead}</p>}
        {children && <div className={styles.extra}>{children}</div>}
      </div>
    </section>
  );
}
