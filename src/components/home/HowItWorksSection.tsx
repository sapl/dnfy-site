import Image from "next/image";
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
import {
  aiChannels,
  comparison,
  dataBlocks,
  type AiChannelIcon,
  type DataBlockIcon,
} from "@/content/howItWorks";
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
  return (
    <Section
      id="how-it-works"
      eyebrow="How it works"
      title={
        <>
          Your family’s food as data <span className={styles.accent}>the AI can’t lose</span>.
        </>
      }
      lead="Dinify keeps five living pieces of your family’s food life in one place."
    >
      <div className={styles.flow}>
        {/* 1. AI layer */}
        <div className={styles.layer}>
          <div className={styles.layerHead}>
            <span className={styles.layerIcon}>
              <SparkIcon size={20} />
            </span>
            <div>
              <div className={styles.layerTitle}>You talk to any AI</div>
              <div className={styles.layerSub}>Text, voice or a photo of a receipt</div>
            </div>
          </div>
          <div className={styles.chips}>
            {aiChannels.map((c) => (
              <span key={c.name} className={`${styles.chip} ${c.icon === "dinify" ? styles.chipBrand : ""}`}>
                <ChannelIcon icon={c.icon} />
                {c.name}
                <span className={styles.chipNote}>{c.note}</span>
              </span>
            ))}
          </div>
        </div>

        <Connector label="reads & updates" />

        {/* 2. Data */}
        <div className={styles.data}>
          <div className={styles.dataLabel}>Your family’s data · one source of truth</div>
          <div className={styles.blocks}>
            {dataBlocks.map((b) => {
              const Icon = icons[b.icon];
              return (
                <div key={b.title} className={styles.block}>
                  <span className={styles.blockIcon}>
                    <Icon size={20} />
                  </span>
                  <h3 className={`hdl ${styles.blockTitle}`}>{b.title}</h3>
                  <p className={styles.blockText}>
                    <Emphasis text={b.text} emClassName={styles.em} />
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Why not just ChatGPT */}
      <div className={styles.why}>
        <h3 className={`hdl ${styles.whyTitle}`}>Why not just ask ChatGPT?</h3>
        <p className={styles.whyLead}>
          A chat alone can’t keep a family’s month consistent — and a plain app is too much manual work. Dinify is the
          two together.
        </p>
        <div className={styles.compare}>
          {[
            { ...comparison.chatOnly, good: false },
            { ...comparison.dinify, good: true },
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
