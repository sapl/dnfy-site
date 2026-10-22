import { useTranslations } from "next-intl";
import { MicIcon } from "@/components/ui/Icons";
import styles from "./PhoneChat.module.css";

export type ChatMessage = { from: "user" | "chef"; text: string };

const WAVE: [number, string][] = [
  [6, "#BEE0C6"],
  [14, "#2F9E5B"],
  [9, "#8FCBA3"],
  [18, "#2F9E5B"],
  [7, "#BEE0C6"],
  [13, "#2F9E5B"],
  [10, "#8FCBA3"],
  [16, "#2F9E5B"],
  [6, "#BEE0C6"],
];

type Props = {
  messages: ChatMessage[];
  subtitle?: string;
  /** Show a full phone (rounded on all sides) instead of the "cut-off" bottom variant. */
  full?: boolean;
  className?: string;
};

export function PhoneChat({ messages, subtitle, full, className }: Props) {
  const t = useTranslations("PhoneChat");
  return (
    <div
      className={[styles.phone, full && styles.full, className].filter(Boolean).join(" ")}
      role="img"
      aria-label={t("ariaLabel")}
    >
      <div className={styles.btnRight} />
      <div className={styles.btnLeft1} />
      <div className={styles.btnLeft2} />
      <div className={styles.screen}>
        <div className={styles.top}>
          <span className={styles.badge}>D</span>
          <div>
            <div className={styles.who}>{t("who")}</div>
            <div className={styles.sub}>{subtitle ?? t("subtitle")}</div>
          </div>
        </div>
        <div className={styles.body}>
          {messages.map((m, i) => (
            <div key={i} className={`${styles.msg} ${m.from === "user" ? styles.user : styles.chef}`}>
              {m.text}
            </div>
          ))}

          <div className={styles.input}>
            <span className={styles.wave}>
              {WAVE.map(([h, c], i) => (
                <i key={i} style={{ height: h, background: c }} />
              ))}
              <span className={styles.listening}>{t("listening")}</span>
            </span>
            <span className={styles.mic}>
              <MicIcon size={17} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
