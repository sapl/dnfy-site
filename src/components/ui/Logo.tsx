import Image from "next/image";
import Link from "next/link";
import styles from "./Logo.module.css";

type Props = { size?: number; fontSize?: number };

export function Logo({ size = 38, fontSize = 22 }: Props) {
  return (
    <Link href="/" className={styles.logo} aria-label="Dinify — home">
      <Image src="/images/logo.png" alt="Dinify logo" width={size} height={size} className={styles.mark} priority />
      <span className={`hdl ${styles.word}`} style={{ fontSize }}>
        Dinify
      </span>
    </Link>
  );
}
