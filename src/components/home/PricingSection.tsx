import { PricingCards } from "@/components/shared/PricingCards";
import styles from "./PricingSection.module.css";

export function PricingSection() {
  return (
    <section className={styles.section} id="pricing">
      <div className={`container ${styles.inner}`}>
        <div className="eyebrow">Simple pricing</div>
        <h2 className={`hdl ${styles.title}`}>Pricing</h2>
        <PricingCards />
      </div>
    </section>
  );
}
