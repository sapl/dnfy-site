import { useTranslations } from "next-intl";
import { ChatGptIcon } from "@/components/ui/BrandIcons";
import { ButtonLink } from "@/components/ui/Button";
import { CheckIcon, CrossIcon } from "@/components/ui/Icons";
import { site } from "@/content/site";
import { pricingPlans, yearlyDeal, type PricingPlan } from "@/content/pricing";
import { Emphasis } from "./Emphasis";
import styles from "./PricingCards.module.css";

function Price({ plan }: { plan: PricingPlan }) {
  const t = useTranslations("Pricing");
  const deal = yearlyDeal(plan);
  const monthly = (
    <div className={styles.priceRow}>
      <span className={`hdl ${styles.price}`}>{plan.price}</span>
      {plan.monthly && <span className={styles.period}>{t("perMonth")}</span>}
    </div>
  );
  if (!plan.yearlyPrice || !deal) return monthly;

  // both variants are rendered; CSS shows the one picked in the card's billing switch
  return (
    <>
      <div className={styles.onlyMonthly}>{monthly}</div>
      <div className={styles.onlyYearly}>
        <div className={styles.priceRow}>
          <span className={`hdl ${styles.price}`}>{plan.yearlyPrice}</span>
          <span className={styles.period}>{t("perYear")}</span>
        </div>
        <div className={styles.priceNote}>{t("yearlyNote", { price: deal.perMonth })}</div>
      </div>
    </>
  );
}

/**
 * Compact Monthly / Yearly switch in the corner of a plan that can be paid yearly. It is a pair of radio buttons
 * styled via `:has()`, so it works without JavaScript and keeps the page fully static.
 */
function BillingSwitch({ plan }: { plan: PricingPlan }) {
  const t = useTranslations("Pricing.billing");
  return (
    <fieldset className={styles.billing}>
      <legend className="visually-hidden">{t("label")}</legend>
      <label className={styles.billingOption}>
        <input type="radio" name={`billing-${plan.id}`} value="monthly" defaultChecked />
        {t("monthly")}
      </label>
      <label className={styles.billingOption}>
        <input type="radio" name={`billing-${plan.id}`} value="yearly" />
        {t("yearly")}
      </label>
    </fieldset>
  );
}

export function PricingCards() {
  const t = useTranslations("Pricing");
  return (
    <>
      <div className={styles.grid}>
        {pricingPlans.map((plan) => {
          return (
            <div key={plan.id} className={styles.card}>
              {plan.yearlyPrice && <BillingSwitch plan={plan} />}
              {plan.tag && (
                <span className={styles.tag}>
                  {plan.tag.icon === "chatgpt" && <ChatGptIcon size={14} />}
                  {t(`plans.${plan.id}.tag`)}
                </span>
              )}
              <h3 className={`hdl ${styles.name}`}>{t(`plans.${plan.id}.name`)}</h3>
              <Price plan={plan} />
              <p className={styles.desc}>{t(`plans.${plan.id}.description`)}</p>

              <ul className={styles.features}>
                {(t.raw(`plans.${plan.id}.features`) as string[]).map((text, i) => (
                  <li key={text}>
                    {plan.included[i] ? <CheckIcon size={17} /> : <CrossIcon size={17} />}
                    <span className={plan.included[i] ? undefined : styles.excluded}>{text}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.cta}>
                <ButtonLink href={site.appUrl} variant={plan.id === "base" ? "primary" : "outline"} size="md" block>
                  {t(`plans.${plan.id}.cta`)}
                </ButtonLink>
              </div>
            </div>
          );
        })}
      </div>
      <p className={styles.note}>
        <Emphasis text={t("note")} />
      </p>
    </>
  );
}
