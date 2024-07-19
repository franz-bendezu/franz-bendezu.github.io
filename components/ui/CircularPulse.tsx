import { FC } from "react";
import Styles from "./CircularPulse.module.css";

export const CircularPulse: FC = () => {
  return (
    <svg
      className="pointer-events-none absolute inset-0 left-1/2 top-1/2 z-0 block h-auto max-w-[200%] -translate-x-1/2 -translate-y-1/2 transform rounded-full"
      width="800"
      height="800"
      viewBox="0 0 800 800"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="fill-slate-500 opacity-75 dark:fill-blue-300">
        <circle className={Styles.pulse} cx="400" cy="400" r="200" />
        <circle
          className={Styles.pulse + " " + Styles["pulse-1"]}
          cx="400"
          cy="400"
          r="200"
        />
        <circle
          className={Styles.pulse + " " + Styles["pulse-2"]}
          cx="400"
          cy="400"
          r="200"
        />
        <circle
          className={Styles.pulse + " " + Styles["pulse-3"]}
          cx="400"
          cy="400"
          r="200"
        />
      </g>
    </svg>
  );
};
