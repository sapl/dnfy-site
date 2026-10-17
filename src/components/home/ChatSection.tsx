import { PhoneChat, type ChatMessage } from "@/components/shared/PhoneChat";
import styles from "./ChatSection.module.css";

const messages: ChatMessage[] = [
  { from: "user", text: "Add salmon pasta to menu" },
  { from: "chef", text: "Added it to your family menu — pasta, about 30 minutes. Want it in this week's plan?" },
  { from: "user", text: "Use coconut milk instead of cream, and put it in the plan for dinner tonight" },
  {
    from: "chef",
    text: "Done — coconut milk it is, set for dinner tonight. You're missing salmon and coconut milk. Add them to your cart?",
  },
];

export function ChatSection() {
  return (
    <section className={styles.section} id="chef">
      <div className={`container ${styles.inner}`}>
        <div>
          <div className="eyebrow">Talk, don&apos;t fill forms</div>
          <h2 className={`hdl ${styles.title}`}>Everything happens in a conversation with your Chef.</h2>
          <p className={styles.lead}>
            Add a dish, plan the week, fix a detail — just say it, out loud or in a message. No forms, no ingredient
            lists, no menus to click through.
          </p>
          <div className={styles.memo}>
            <span className={styles.memoBadge}>D</span>
            <p>
              It starts with a short chat about your family — who eats what, who cooks, when you order in. The Chef{" "}
              <strong>remembers every detail</strong> and plans like a member of the household.
            </p>
          </div>
        </div>

        <PhoneChat messages={messages} className={styles.phone} />
      </div>
    </section>
  );
}
