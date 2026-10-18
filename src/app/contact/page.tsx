import type { Metadata } from "next";
import { Carrot, Citrus, ForkKnife } from "@/components/shared/Decorations";
import { MailIcon } from "@/components/ui/Icons";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "Questions or feedback? Write to the Dinify team at hello@dinify.me.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className={styles.wrap}>
      <Citrus className={styles.citrus} size={120} />
      <ForkKnife className={styles.fork} />
      <Carrot className={styles.carrot} />
      <div className={styles.inner}>
        <div className="eyebrow">Contact</div>
        <h1 className={`hdl ${styles.title}`}>We&apos;d love to hear from you.</h1>
        <p className={styles.lead}>
          Questions, feedback, help with your account or an idea for Dinify — just write to us. A real person replies.
        </p>
        <a href={`mailto:${site.email}`} className={styles.card}>
          <span className={styles.icon}>
            <MailIcon size={26} />
          </span>
          <span>
            <span className={styles.label}>Email us</span>
            <span className={styles.email}>{site.email}</span>
          </span>
        </a>
      </div>
    </section>
  );
}
