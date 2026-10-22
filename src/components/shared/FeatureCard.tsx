import { useTranslations } from "next-intl";
import { Avatar } from "@/components/ui/Avatar";
import { BagIcon, BoxIcon, CheckIcon } from "@/components/ui/Icons";
import type { Feature } from "@/content/features";
import { Emphasis } from "./Emphasis";
import styles from "./FeatureCard.module.css";

function FeatureIcon({ icon }: { icon: Feature["icon"] }) {
  if (icon === "people")
    return (
      <div className={styles.people}>
        <Avatar person="anna" size={34} radius={11} />
        <Avatar person="david" size={34} radius={11} />
      </div>
    );
  return (
    <div className={styles.iconBox}>
      {icon === "check" && <CheckIcon size={20} />}
      {icon === "bag" && <BagIcon size={20} />}
      {icon === "box" && <BoxIcon size={20} />}
    </div>
  );
}

export function FeatureCard({ feature }: { feature: Feature }) {
  const t = useTranslations("Idea.features");
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <FeatureIcon icon={feature.icon} />
      </div>
      <h3 className={`hdl ${styles.title}`}>{t(`${feature.id}.title`)}</h3>
      <p className={styles.text}>
        <Emphasis text={t(`${feature.id}.text`)} emClassName={styles.em} />
      </p>
      {feature.tags && (
        <div className={styles.tags}>
          {feature.tags.map((t) => (
            <span key={t} className={styles.tag}>
              {t}
            </span>
          ))}
          {feature.moreTags && <span className={`${styles.tag} ${styles.tagMore}`}>+{feature.moreTags}</span>}
        </div>
      )}
    </div>
  );
}
