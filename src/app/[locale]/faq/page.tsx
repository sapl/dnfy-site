import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { FaqList } from "@/components/shared/Faq";
import { JsonLd } from "@/components/shared/JsonLd";
import { PageHeader } from "@/components/shared/PageHeader";
import { Section } from "@/components/shared/Section";
import { ButtonLink } from "@/components/ui/Button";
import { faqGroupIds, type FaqItem } from "@/content/faq";
import type { Locale } from "@/i18n/routing";
import { pageMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export async function generateMetadata({ params }: PageProps<"/[locale]/faq">): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const t = await getTranslations({ locale, namespace: "FaqPage" });
  return pageMetadata({ locale, title: t("metaTitle"), description: t("metaDescription"), path: "/faq" });
}

export default async function FaqPage({ params }: PageProps<"/[locale]/faq">) {
  setRequestLocale((await params).locale as Locale);
  const t = await getTranslations("FaqPage");
  const tf = await getTranslations("Faq");
  const faqGroups = faqGroupIds.map((id) => ({ id, title: tf(`${id}.title`), items: tf.raw(`${id}.items`) as FaqItem[] }));

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
        eyebrow={t("eyebrow")}
        title={t("title")}
        lead={t("lead")}
      />

      <Section tone="sand">
        <div className={styles.layout}>
          <nav className={styles.toc} aria-label={t("tocLabel")}>
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
                <h2 className={`hdl ${styles.contactTitle}`}>{t("stillTitle")}</h2>
                <p className={styles.contactText}>{t("stillText")}</p>
              </div>
              <ButtonLink href="/contact" variant="dark">
                {t("contactCta")}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <JsonLd data={jsonLd} />
    </>
  );
}
