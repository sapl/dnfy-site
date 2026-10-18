import Link from "next/link";
import { Citrus, Herb } from "@/components/shared/Decorations";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { routes } from "@/content/site";
import styles from "./StorySection.module.css";

/** Short founder note on the landing, linking to the full story on /about. */
export function StorySection() {
  return (
    <section className={styles.section}>
      <Citrus className={styles.citrus} size={90} rind="#CDE7D4" flesh="#E7F3EA" />
      <Herb className={styles.herb} width={70} stem="#B7DCC0" leaf="#B7DCC0" />
      <Link href={routes.about} className={styles.inner}>
        <div className={styles.figure}>
          <div className={`eyebrow ${styles.eyebrow}`}>Why we built it</div>
          <div className={styles.card}>
            <span className={`hdl ${styles.mark}`} aria-hidden="true">
              “
            </span>
            <blockquote className={styles.quote}>
              <p>
                Every day it was the same: what’s for dinner, what to buy, who’s cooking — at the last minute, with
                stress and arguments. So I turned our family’s meal spreadsheet into Dinify.
              </p>
            </blockquote>
            <p className={styles.author}>
              <span className={styles.name}>Alex</span> · dad, IT engineer, one of the two people behind Dinify
            </p>
          </div>
          <span className={styles.link}>
            Read our story
            <ArrowRightIcon size={16} />
          </span>
        </div>
      </Link>
    </section>
  );
}
