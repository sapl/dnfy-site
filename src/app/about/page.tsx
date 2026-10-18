import type { Metadata } from "next";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: "A note from Alex, one of the two people who made Dinify for their own family.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        <h1 className="visually-hidden">About Dinify</h1>
        <article className={styles.message}>
          <div className={styles.from}>
            <span className={styles.avatar} aria-hidden="true">
              A
            </span>
            <div>
              <div className={styles.name}>Alex</div>
              <div className={styles.meta}>one of the two people behind Dinify</div>
            </div>
          </div>

          <div className={styles.text}>
            <p>Hi, I&apos;m Alex.</p>
            <p>
              I work in IT as a solution architect, building large systems for commercial companies. Dinify is something a colleague
              and I made in our spare time, for ourselves first.
            </p>
            <p>
              In our family neither my wife nor I like cooking. And my wife is one of those people for whom keeping a
              dozen small things in her head is genuinely exhausting: plans slip away, every little decision drains
              energy, and one &quot;what&apos;s for dinner?&quot; can knock the whole evening off track. People like
              her don&apos;t need more willpower — they need a clear schedule that makes the decisions in advance.
            </p>
            <p>
              But you still have to eat, so every day it was the same thing: what&apos;s for dinner, what do we need to
              buy, who&apos;s cooking. Usually at the last minute, with stress and arguments.
            </p>
            <p>
              We can&apos;t afford a cook or a housekeeper. Eating out or ordering food every day doesn&apos;t work
              either. We have a kid, and we want normal home food.
            </p>
            <p>
              So I did what I know how to do and tried to organise it. I started with an Excel sheet: a plan for the
              month, who cooks on which day, which dishes last for two days. Dinify with AI is basically that
              spreadsheet turned into a proper app.
            </p>
            <p>
              It won&apos;t cook for you and it won&apos;t clean the kitchen. But it helps keep both to a minimum, and
              the questions &quot;what&apos;s for dinner?&quot; and &quot;what do we need to buy?&quot; mostly go away.
            </p>
            <p>
              We hope it helps more families than just ours. If you have questions or ideas, write to me at{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
            <p className={styles.sign}>Alex</p>
          </div>
        </article>
      </div>
    </section>
  );
}
