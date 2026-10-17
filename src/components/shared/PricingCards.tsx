import { ButtonLink } from "@/components/ui/Button";
import { CheckIcon, CrossIcon } from "@/components/ui/Icons";
import { pricingPlans } from "@/content/pricing";
import { Emphasis } from "./Emphasis";
import styles from "./PricingCards.module.css";

export function PricingCards() {
  return (
    <div className={styles.grid}>
      {pricingPlans.map((plan) => (
        <div key={plan.id} className={`${styles.card} ${plan.recommended ? styles.recommended : ""}`}>
          {plan.recommended && <span className={styles.badge}>Recommended</span>}
          <h3 className={`hdl ${styles.name}`}>{plan.name}</h3>
          <div className={styles.priceRow}>
            <span className={`hdl ${styles.price}`}>{plan.price}</span>
            {plan.period && <span className={styles.period}>{plan.period}</span>}
          </div>
          <p className={styles.desc}>{plan.description}</p>

          <ul className={styles.features}>
            {plan.features.map((f) => (
              <li key={f.text}>
                {f.included ? <CheckIcon size={17} /> : <CrossIcon size={17} />}
                <span className={f.included ? undefined : styles.excluded}>
                  {!f.included && <span className="visually-hidden">Not included: </span>}
                  {f.text}
                </span>
              </li>
            ))}
          </ul>

          {plan.footnote && (
            <p className={styles.footnote}>
              <Emphasis text={plan.footnote} />
            </p>
          )}

          <div className={styles.cta}>
            <ButtonLink href={plan.cta.href} variant={plan.recommended ? "primary" : "outline"} size="md" block>
              {plan.cta.label}
            </ButtonLink>
          </div>
        </div>
      ))}
    </div>
  );
}
