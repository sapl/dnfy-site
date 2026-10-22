import { useTranslations } from "next-intl";
import { PricingCards } from "@/components/shared/PricingCards";
import styles from "./PricingSection.module.css";

export function PricingSection() {
  const t = useTranslations("Pricing");
  return (
    <section className={styles.section} id="pricing">
      <div className={`container ${styles.inner}`}>
        <h2 className={`hdl ${styles.title}`}>{t("title")}</h2>
        <PricingCards />
      </div>
    </section>
  );
}
