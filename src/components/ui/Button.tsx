import { Link } from "@/i18n/navigation";
import type { ComponentProps, ReactNode } from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "dark" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  block?: boolean;
  className?: string;
  children: ReactNode;
};

function cx(variant: Variant, size: Size, block?: boolean, className?: string) {
  return [styles.btn, styles[variant], styles[size], block && styles.block, className].filter(Boolean).join(" ");
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  block,
  className,
  children,
  ...props
}: CommonProps & Omit<ComponentProps<typeof Link>, "className" | "children">) {
  return (
    <Link className={cx(variant, size, block, className)} {...props}>
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  block,
  className,
  children,
  type = "button",
  ...props
}: CommonProps & Omit<ComponentProps<"button">, "className" | "children">) {
  return (
    <button type={type} className={cx(variant, size, block, className)} {...props}>
      {children}
    </button>
  );
}
