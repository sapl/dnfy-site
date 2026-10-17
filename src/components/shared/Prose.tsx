import type { ReactNode } from "react";
import styles from "./Prose.module.css";

export function Prose({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={className ? `${styles.prose} ${className}` : styles.prose}>{children}</div>;
}
