import { Carrot, Citrus, ForkKnife } from "@/components/shared/Decorations";
import { ButtonLink } from "@/components/ui/Button";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className={styles.wrap}>
      <ForkKnife className={styles.fork} />
      <Carrot className={styles.carrot} />
      <div className={styles.inner}>
        <Citrus className={styles.plate} size={110} />
        <div className="eyebrow">404 · Page not found</div>
        <h1 className={`hdl ${styles.title}`}>This dish isn&apos;t on the menu.</h1>
        <p className={styles.text}>The page you&apos;re looking for has moved or never existed.</p>
        <div className={styles.actions}>
          <ButtonLink href="/" size="lg">
            Back to home
          </ButtonLink>
          <ButtonLink href="/faq" variant="outline" size="lg">
            Visit FAQ
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
