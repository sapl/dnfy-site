import { useTranslations } from "next-intl";
import { PhoneChat, type ChatMessage } from "@/components/shared/PhoneChat";
import styles from "./ChatSection.module.css";

export function ChatSection() {
  const t = useTranslations("Chat");
  // the conversation alternates: user, Chef, user, Chef
  const messages: ChatMessage[] = t
    .raw("messages")
    .map((text: string, i: number) => ({ from: i % 2 ? "chef" : "user", text }));

  return (
    <section className={styles.section} id="chef">
      <div className={`container ${styles.inner}`}>
        <div>
          <div className="eyebrow">{t("eyebrow")}</div>
          <h2 className={`hdl ${styles.title}`}>{t("title")}</h2>
          <p className={styles.lead}>{t("lead")}</p>
          <div className={styles.memo}>
            <span className={styles.memoBadge}>D</span>
            <p>{t.rich("memo", { strong: (chunks) => <strong>{chunks}</strong> })}</p>
          </div>
        </div>

        <PhoneChat messages={messages} className={styles.phone} />
      </div>
    </section>
  );
}
