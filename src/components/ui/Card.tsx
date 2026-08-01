import type { HTMLAttributes, ReactNode } from "react";
import styles from "./Card.module.css";

export type CardVariant = "default" | "interactive" | "flat" | "accent";

interface CardProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  dataTestId?: string;
  variant?: CardVariant;
}

export default function Card({
  className = "",
  children,
  dataTestId,
  variant = "default",
  ...props
}: CardProps) {
  return (
    <article
      {...props}
      data-testid={dataTestId}
      className={`${styles.base} ${variant === "default" ? "" : styles[variant]} ${className}`}
    >
      {children}
    </article>
  );
}
