import type { SVGProps } from "react";

export default function LoaderSpin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 101"
      fill="none"
      {...props}
      className={`animate-spin ${props.className ?? ""}`}
    >
      <path
        d="M100 50.59A50 50 0 1 1 91.27 22.4"
        stroke="currentColor"
        strokeWidth="10"
      />
      <path
        d="M93.97 39.04A45 45 0 0 0 80.9 15.2"
        stroke="currentFill"
        strokeWidth="10"
      />
    </svg>
  );
}
