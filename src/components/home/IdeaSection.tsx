import Image from "next/image";
import { useTranslations } from "next-intl";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { CheckIcon, CrossIcon } from "@/components/ui/Icons";
import { planningFeatures } from "@/content/features";
import styles from "./IdeaSection.module.css";

export function IdeaSection() {
  const t = useTranslations("Idea");
  return (
    <section className={styles.section} id="about">
      <div className={`container ${styles.inner}`}>
        <div className={styles.intro}>
          <div className="eyebrow">{t("eyebrow")}</div>
          <h2 className={`hdl ${styles.title}`}>
            {t.rich("title", {
              br: () => <br />,
              accent: (chunks) => <span className={styles.accent}>{chunks}</span>,
            })}
          </h2>
        </div>

        <div className={styles.audience}>
          <div className={`${styles.aud} ${styles.audNo}`}>
            <div className={styles.audPhoto}>
              <Image
                src="/images/cooking-enthusiast.png"
                alt={t("notForAlt")}
                fill
                sizes="297px"
                style={{ objectFit: "cover", objectPosition: "center 28%" }}
              />
            </div>
            <div className={styles.audBody}>
              <div className={styles.audLabel}>
                <CrossIcon size={17} />
                {t("notFor")}
              </div>
              <p>{t.rich("notForText", { em: (chunks) => <em>{chunks}</em> })}</p>
            </div>
          </div>

          <div className={`${styles.aud} ${styles.audYes}`}>
            <div className={styles.audPhoto}>
              <Image
                src="/images/busy-family.png"
                alt={t("builtForAlt")}
                fill
                sizes="297px"
                style={{ objectFit: "cover", objectPosition: "center 22%" }}
              />
            </div>
            <div className={styles.audBody}>
              <div className={styles.audLabel}>
                <CheckIcon size={17} />
                {t("builtFor")}
              </div>
              <p>{t.rich("builtForText", { strong: (chunks) => <strong>{chunks}</strong> })}</p>
            </div>
          </div>
        </div>

        <h3 className={`hdl ${styles.subTitle}`}>{t("featuresTitle")}</h3>
        <div className={styles.features}>
          {planningFeatures.map((f) => (
            <FeatureCard key={f.id} feature={f} />
          ))}
        </div>

      </div>
    </section>
  );
}
