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
      className={`${className} rounded-xl p-3 shadow-lg transition-all duration-100 ease-in-out hover:scale-105 hover:transform hover:shadow-xl`}
    >
      {children}
    </article>
  );
}
