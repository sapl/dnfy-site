import { useTranslations } from "next-intl";
import { Carrot, Citrus, ForkKnife } from "@/components/shared/Decorations";
import { ButtonLink } from "@/components/ui/Button";
import styles from "./not-found.module.css";

export default function NotFound() {
  const t = useTranslations("NotFound");
  return (
    <section className={styles.wrap}>
      <title>{`${t("metaTitle")} · Dinify`}</title>
      <meta name="robots" content="noindex" />
      <ForkKnife className={styles.fork} />
      <Carrot className={styles.carrot} />
      <div className={styles.inner}>
        <Citrus className={styles.plate} size={110} />
        <div className="eyebrow">{t("eyebrow")}</div>
        <h1 className={`hdl ${styles.title}`}>{t("title")}</h1>
        <p className={styles.text}>{t("text")}</p>
        <div className={styles.actions}>
          <ButtonLink href="/" size="lg">
            {t("home")}
          </ButtonLink>
          <ButtonLink href="/faq" variant="outline" size="lg">
            {t("faq")}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
