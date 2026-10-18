import { ChatGptIcon } from "@/components/ui/BrandIcons";
import { ButtonLink } from "@/components/ui/Button";
import { CheckIcon, CrossIcon } from "@/components/ui/Icons";
import { pricingNote, pricingPlans } from "@/content/pricing";
import { Emphasis } from "./Emphasis";
import styles from "./PricingCards.module.css";

export function PricingCards() {
  return (
    <>
      <div className={styles.grid}>
        {pricingPlans.map((plan) => (
          <div key={plan.id} className={styles.card}>
            {plan.tag && (
              <span className={styles.tag}>
                {plan.tag.icon === "chatgpt" && <ChatGptIcon size={14} />}
                {plan.tag.text}
              </span>
            )}
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
                  <span className={f.included ? undefined : styles.excluded}>{f.text}</span>
                </li>
              ))}
            </ul>

            <div className={styles.cta}>
              <ButtonLink href={plan.cta.href} variant={plan.id === "base" ? "primary" : "outline"} size="md" block>
                {plan.cta.label}
              </ButtonLink>
            </div>
          </div>
        ))}
      </div>
      <p className={styles.note}>
        <Emphasis text={pricingNote} />
      </p>
    </>
  );
}
