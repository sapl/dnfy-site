import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import styles from "./Logo.module.css";

type Props = { size?: number; fontSize?: number };

export function Logo({ size = 38, fontSize = 22 }: Props) {
  const t = useTranslations("Nav");
  return (
    <Link href="/" className={styles.logo} aria-label={t("home")}>
      <Image src="/images/logo.png" alt={t("logoAlt")} width={size} height={size} className={styles.mark} priority />
      <span className={`hdl ${styles.word}`} style={{ fontSize }}>
        Dinify
      </span>
    </Link>
  );
}
