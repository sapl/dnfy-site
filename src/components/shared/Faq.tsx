import { PlusIcon } from "@/components/ui/Icons";
import type { FaqItem } from "@/content/faq";
import styles from "./Faq.module.css";

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className={styles.list}>
      {items.map((item) => (
        <details key={item.q} className={styles.item}>
          <summary className={styles.q}>
            {item.q}
            <span className={styles.icon} aria-hidden="true">
              <PlusIcon size={16} />
            </span>
          </summary>
          <p className={styles.a}>{item.a}</p>
        </details>
      ))}
    </div>
  );
}
