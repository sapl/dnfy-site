import type { Metadata } from "next";
import { FaqList } from "@/components/shared/Faq";
import { PageHeader } from "@/components/shared/PageHeader";
import { Section } from "@/components/shared/Section";
import { ButtonLink } from "@/components/ui/Button";
import { faqGroups } from "@/content/faq";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about Dinify — the Chef, planning, shopping lists, pricing and your account.",
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqGroups.flatMap((g) =>
      g.items.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
    ),
  };

  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Questions, answered."
        lead="Everything you might want to know before handing dinner decisions to the Chef."
      />

      <Section tone="sand">
        <div className={styles.layout}>
          <nav className={styles.toc} aria-label="FAQ sections">
            {faqGroups.map((g) => (
              <a key={g.id} href={`#${g.id}`}>
                {g.title}
              </a>
            ))}
          </nav>

          <div>
            {faqGroups.map((g) => (
              <section key={g.id} id={g.id} className={styles.group}>
                <h2 className={`hdl ${styles.groupTitle}`}>{g.title}</h2>
                <FaqList items={g.items} />
              </section>
            ))}

            <div className={styles.contact}>
              <div>
                <h2 className={`hdl ${styles.contactTitle}`}>Still have a question?</h2>
                <p className={styles.contactText}>Write to us — a real person replies, usually within a day.</p>
              </div>
              <ButtonLink href="/contact" variant="dark">
                Contact us
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    </>
  );
}
