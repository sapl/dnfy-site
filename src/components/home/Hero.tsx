import { ButtonLink } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { Carrot, Citrus, ForkKnife, Herb } from "@/components/shared/Decorations";
import { routes } from "@/content/site";
import { WeekPlanCard } from "./WeekPlanCard";
import styles from "./Hero.module.css";

export function Hero() {
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
          <div className={`eyebrow ${styles.eyebrow}`}>Family food, organized</div>
          <h1 className={`hdl ${styles.title}`}>Stop deciding what to cook every day.</h1>
          <p className={styles.lead}>
            Dinify organizes your family&apos;s meals, shopping and cooking schedule — so everyone knows what&apos;s for
            dinner and who&apos;s responsible.
          </p>
          <div className={styles.actions}>
            <ButtonLink href={routes.join} size="lg">
              Join Early Access
            </ButtonLink>
            <ButtonLink href={routes.chef} variant="ghost" size="lg">
              See how it works
              <ArrowRightIcon size={16} />
            </ButtonLink>
          </div>
          <div className={styles.note}>Set up in a 2-minute chat — no long forms, no manual recipes.</div>
        </div>

        <div className={styles.visual}>
          <WeekPlanCard />
        </div>
      </div>
    </section>
  );
}
