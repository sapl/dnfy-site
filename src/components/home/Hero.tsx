import { useTranslations } from "next-intl";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { Carrot, Citrus, ForkKnife, Herb } from "@/components/shared/Decorations";
import { routes } from "@/content/site";
import { WeekPlanCard } from "./WeekPlanCard";
import styles from "./Hero.module.css";

export function Hero() {
  const t = useTranslations("Hero");
  return (
    <section className={styles.hero}>
      <div className={styles.decor} aria-hidden="true">
        <Citrus className={styles.citrus} />
        <Herb className={styles.herb} />
        <ForkKnife className={styles.fork} />
        <Carrot className={styles.carrot} />
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <div className={`eyebrow ${styles.eyebrow}`}>{t("eyebrow")}</div>
          <h1 className={`hdl ${styles.title}`}>{t("title")}</h1>
          <p className={styles.lead}>{t("lead")}</p>
          <div className={styles.actions}>
            <ButtonLink href={routes.join} size="lg">
              {t("cta")}
            </ButtonLink>
            <ButtonLink href={routes.howItWorks} variant="ghost" size="lg">
              {t("secondary")}
              <ArrowRightIcon size={16} />
            </ButtonLink>
          </div>
          <div className={styles.note}>{t("note")}</div>
        </div>

        <div className={styles.visual}>
          <WeekPlanCard />
        </div>
      </div>
    </section>
  );
}
