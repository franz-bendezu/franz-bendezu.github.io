import type { ButtonHTMLAttributes } from "react";

export default function Button({
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center rounded-lg border px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-colors duration-150 focus-visible:ring focus-visible:ring-indigo-300 focus-visible:outline-none ${className}`}
    />
  );
}
