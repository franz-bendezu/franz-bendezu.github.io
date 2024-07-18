import React from "react";
import Image from "next/image";
import profile from "../../public/profile.png";
import { useTranslations } from "next-intl";
import Styles from "./styles.module.css";
import { HomePresentationDownload } from "./PresentationDownload";
import { unstable_setRequestLocale } from "next-intl/server";
import { DEFAULT_LOCALE } from "@/constants/locales";

const HomePresentation: React.FC = () => {
  const t = useTranslations("Home");

  return (
    <div className="item-center flex flex-col-reverse gap-3 text-center lg:mx-4 lg:flex lg:flex-row lg:space-x-5 lg:text-left">
      <div className="lg:mt-12">
        <div className="mt-6">
          <h1 className="text-md font-semibold">{t("greeting")}</h1>
          <h1 className="mb-2 text-4xl font-semibold">{t("name")}</h1>
          <h2 className="mb-2 text-3xl font-semibold">
            {t.rich("profession", {
              highlight: (children) => (
                <span className="bg-blue-400 px-1 dark:bg-blue-500">
                  {children}
                </span>
              ),
            })}
          </h2>
          <p className="mb-4 text-lg">
            {t.rich("description", {
              GreenHighlight: (children) => (
                <span className="bg-green-300 px-1 dark:bg-green-500">
                  {children}
                </span>
              ),
              GrayHighlight: (children) => (
                <span className="bg-gray-300 px-1 dark:bg-gray-500">
                  {children}
                </span>
              ),
            })}
          </p>
        </div>
        <HomePresentationDownload />
      </div>
      <div className="flex flex-shrink-0 items-center justify-center">
        <div className="relative m-24 flex h-[250px] w-[250px] items-center justify-center">
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
          <Image
            src={profile}
            alt="Profile"
            fetchPriority={"high"}
            className="relative z-10 mx-auto rounded-full object-cover"
            width={250}
            height={250}
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePresentation;
