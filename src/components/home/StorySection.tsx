import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Citrus, Herb } from "@/components/shared/Decorations";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { routes } from "@/content/site";
import styles from "./StorySection.module.css";

/** Short founder note on the landing, linking to the full story on /about. */
export function StorySection() {
  const t = useTranslations("Story");
  return (
    <section className={styles.section}>
      <Citrus className={styles.citrus} size={90} rind="#CDE7D4" flesh="#E7F3EA" />
      <Herb className={styles.herb} width={70} stem="#B7DCC0" leaf="#B7DCC0" />
      <Link href={routes.about} className={styles.inner}>
        <div className={styles.figure}>
          <div className={`eyebrow ${styles.eyebrow}`}>{t("eyebrow")}</div>
          <div className={styles.card}>
            <span className={`hdl ${styles.mark}`} aria-hidden="true">
              “
            </span>
            <blockquote className={styles.quote}>
              <p>{t("quote")}</p>
            </blockquote>
            <p className={styles.author}>
              {t.rich("author", { name: (chunks) => <span className={styles.name}>{chunks}</span> })}
            </p>
          </div>
          <span className={styles.link}>
            {t("link")}
            <ArrowRightIcon size={16} />
          </span>
        </div>
      </Link>
    </section>
  );
}
