import Image from "next/image";
import { useTranslations } from "next-intl";
import { Emphasis } from "@/components/shared/Emphasis";
import { Section } from "@/components/shared/Section";
import { ChatGptIcon, ClaudeIcon, TelegramIcon } from "@/components/ui/BrandIcons";
import {
  ArrowDownIcon,
  BookIcon,
  CalendarIcon,
  CartIcon,
  CheckIcon,
  CrossIcon,
  SparkIcon,
  UsersIcon,
  WalletIcon,
} from "@/components/ui/Icons";
import { aiChannels, dataBlocks, type AiChannelIcon, type DataBlockIcon } from "@/content/howItWorks";
import styles from "./HowItWorksSection.module.css";

const icons: Record<DataBlockIcon, typeof UsersIcon> = {
  users: UsersIcon,
  book: BookIcon,
  calendar: CalendarIcon,
  cart: CartIcon,
  wallet: WalletIcon,
};

const channelIcons: Record<Exclude<AiChannelIcon, "dinify">, typeof ChatGptIcon> = {
  chatgpt: ChatGptIcon,
  claude: ClaudeIcon,
  telegram: TelegramIcon,
};

function ChannelIcon({ icon }: { icon: AiChannelIcon }) {
  if (icon === "dinify") return <Image src="/images/logo.png" alt="" width={20} height={20} className={styles.logo} />;
  const Icon = channelIcons[icon];
  return <Icon size={18} />;
}

function Connector({ label }: { label: string }) {
  return (
    <div className={styles.connector} aria-hidden="true">
      <span className={styles.connectorLabel}>
        {label}
        <ArrowDownIcon size={14} />
      </span>
    </div>
  );
}

export function HowItWorksSection() {
  const t = useTranslations("HowItWorks");
  return (
    <Section
      id="how-it-works"
      eyebrow={t("eyebrow")}
      title={t.rich("title", { accent: (chunks) => <span className={styles.accent}>{chunks}</span> })}
      lead={t("lead")}
    >
      <div className={styles.flow}>
        {/* 1. AI layer */}
        <div className={styles.layer}>
          <div className={styles.layerHead}>
            <span className={styles.layerIcon}>
              <SparkIcon size={20} />
            </span>
            <div>
              <div className={styles.layerTitle}>{t("aiTitle")}</div>
              <div className={styles.layerSub}>{t("aiSub")}</div>
            </div>
          </div>
          <div className={styles.chips}>
            {aiChannels.map((c) => (
              <span key={c} className={`${styles.chip} ${c === "dinify" ? styles.chipBrand : ""}`}>
                <ChannelIcon icon={c} />
                {t(`channels.${c}.name`)}
                <span className={styles.chipNote}>{t(`channels.${c}.note`)}</span>
              </span>
            ))}
          </div>
        </div>

        <Connector label={t("connector")} />

        {/* 2. Data */}
        <div className={styles.data}>
          <div className={styles.dataLabel}>{t("dataLabel")}</div>
          <div className={styles.blocks}>
            {dataBlocks.map((b) => {
              const Icon = icons[b.icon];
              return (
                <div key={b.id} className={styles.block}>
                  <span className={styles.blockIcon}>
                    <Icon size={20} />
                  </span>
                  <h3 className={`hdl ${styles.blockTitle}`}>{t(`blocks.${b.id}.title`)}</h3>
                  <p className={styles.blockText}>
                    <Emphasis text={t(`blocks.${b.id}.text`)} emClassName={styles.em} />
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Why not just ChatGPT */}
      <div className={styles.why}>
        <h3 className={`hdl ${styles.whyTitle}`}>{t("whyTitle")}</h3>
        <p className={styles.whyLead}>{t("whyLead")}</p>
        <div className={styles.compare}>
          {[
            { title: t("chatOnly.title"), points: t.raw("chatOnly.points") as string[], good: false },
            { title: t("dinify.title"), points: t.raw("dinify.points") as string[], good: true },
          ].map((col) => (
            <div key={col.title} className={`${styles.col} ${col.good ? styles.colYes : styles.colNo}`}>
              <div className={styles.colTitle}>
                {col.good ? <CheckIcon size={17} /> : <CrossIcon size={17} />}
                {col.title}
              </div>
              <ul className={styles.points}>
                {col.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
