import Image from "next/image";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { CheckIcon, CrossIcon } from "@/components/ui/Icons";
import { planningFeatures } from "@/content/features";
import styles from "./IdeaSection.module.css";

export function IdeaSection() {
  return (
    <section className={styles.section} id="about">
      <div className={`container ${styles.inner}`}>
        <div className={styles.intro}>
          <div className="eyebrow">What Dinify is really about</div>
          <h2 className={`hdl ${styles.title}`}>
            It’s not about calories or diets.
            <br /> It’s about <span className={styles.accent}>real family life</span>.
          </h2>
        </div>

        <div className={styles.audience}>
          <div className={`${styles.aud} ${styles.audNo}`}>
            <div className={styles.audPhoto}>
              <Image
                src="/images/cooking-enthusiast.png"
                alt="A woman happily cooking in a bright kitchen"
                fill
                sizes="297px"
                style={{ objectFit: "cover", objectPosition: "center 28%" }}
              />
            </div>
            <div className={styles.audBody}>
              <div className={styles.audLabel}>
                <CrossIcon size={17} />
                Not for
              </div>
              <p>
                People who <em>love</em> cooking and hunting for something new to make.
              </p>
            </div>
          </div>

          <div className={`${styles.aud} ${styles.audYes}`}>
            <div className={styles.audPhoto}>
              <Image
                src="/images/busy-family.png"
                alt="A tired family in the kitchen in the evening"
                fill
                sizes="297px"
                style={{ objectFit: "cover", objectPosition: "center 22%" }}
              />
            </div>
            <div className={styles.audBody}>
              <div className={styles.audLabel}>
                <CheckIcon size={17} />
                Built for
              </div>
              <p>
                <strong>Families</strong> short on time who still want to eat varied and tasty — without the daily
                scramble.
              </p>
            </div>
          </div>
        </div>

        <h3 className={`hdl ${styles.subTitle}`}>How smart planning frees up whole days</h3>
        <div className={styles.features}>
          {planningFeatures.map((f) => (
            <FeatureCard key={f.title} feature={f} />
          ))}
        </div>

      </div>
    </section>
  );
}
