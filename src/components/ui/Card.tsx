import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  dataTestId?: string;
}

export default function Card({
  className = "",
  children,
  dataTestId,
  ...props
}: CardProps) {
  return (
    <article
      {...props}
      data-testid={dataTestId}
      className={`${className} rounded-xl p-3 transition-all duration-200 ease-out`}
    >
      {children}
    </article>
  );
}
