import { Citrus, Herb } from "@/components/shared/Decorations";
import styles from "./TimeSection.module.css";

export function TimeSection() {
  return (
    <section className={styles.section}>
      <Citrus className={styles.citrus} size={90} rind="#CDE7D4" flesh="#E7F3EA" />
      <Herb className={styles.herb} width={70} stem="#B7DCC0" leaf="#B7DCC0" />
      <div className={styles.inner}>
        <div className={`eyebrow ${styles.eyebrow}`}>How much time can you save?</div>
        <p className={`hdl ${styles.text}`}>
          Families spend hours every week deciding what to cook, shopping and coordinating meals. Dinify turns those
          daily decisions into a single monthly plan.
        </p>
      </div>
    </section>
  );
}
