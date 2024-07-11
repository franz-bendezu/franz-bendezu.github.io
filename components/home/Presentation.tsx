import React, { useState } from "react";
import Image from "next/image";
import profile from "../../public/profile.png";
import Button from "../ui/Button";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import { useTranslations } from "next-intl";
import Styles from "./styles.module.css";
import LoaderSpin from "../ui/LoaderSpin";
import { useRouter } from "next/router";

const HomePresentation: React.FC = () => {
  const t = useTranslations("Home");
  const { locale } = useRouter();
  const [loading, setLoading] = useState(false);
  const handleCVDownload = async () => {
    setLoading(true);
    const data = await fetch("/cv.pdf");
    const blob = await data.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Franz-Bendezu-CV.pdf";
    a.click();
    window.URL.revokeObjectURL(url);
    setLoading(false);
  };

  return (
    <div className="item-center flex flex-col-reverse gap-3 text-center lg:mx-4 lg:flex lg:flex-row lg:space-x-5 lg:text-left">
      <div className="lg:mt-12">
        <div className="mt-6">
          <h1 className="text-md font-semibold">{t("greeting")}</h1>
          <h1 className="mb-2 text-4xl font-semibold">{t("name")}</h1>
          <h2 className="mb-2 text-3xl font-semibold">
            {t("profession", {
              highlight: (children) => (
                <span className="bg-blue-400 px-1 dark:bg-blue-500">
                  {children}
                </span>
              ),
            })}
          </h2>
          <p className="mb-4 text-lg">
            {t("description", {
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
        <Button
          onClick={handleCVDownload}
          className="border-blue-500 bg-blue-500 text-white hover:bg-blue-600 focus-visible:ring-blue-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-900 dark:focus-visible:ring-slate-600"
        >
          {loading ? (
            <LoaderSpin className="me-3 h-4 w-4 fill-slate-100 dark:fill-slate-500" />
          ) : (
            <ArrowDownTrayIcon className="mr-2 h-4 w-4 fill-slate-100 dark:fill-slate-500" />
          )}
          <span>{t("downloadCV")}</span>
        </Button>
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
