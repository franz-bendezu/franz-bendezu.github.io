import React, { FC } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { HomePresentationDownload } from "./PresentationDownload";
import { CircularPulse } from "../ui/CircularPulse";
import GitHubIcon from "../icon/github";
import LinkedInIcon from "../icon/linkedin";
import GitLabIcon from "../icon/gitlab";

const HomePresentation: FC = () => {
  const t = useTranslations("Home");

  return (
    <section id="presentation" className="w-full py-6 relative">
      <div className="absolute z-1 bg-gradient-to-r from-gray-300 to-gray-200 dark:from-blue-800 dark:to-blue-700" />
      <div className="container z-2 mx-auto flex flex-col-reverse items-center gap-3 px-4 text-center lg:flex lg:flex-row lg:space-x-5 lg:text-left">
        <div className="flex flex-col items-center space-y-4 lg:items-start max-w-full ">
          <div className="flex flex-col items-center gap-3 lg:items-start">
            <h1 className="text-md font-semibold">{t("greeting")}</h1>
            <h1 className="text-4xl font-semibold">{t("name")}</h1>
            <h2 className="text-3xl font-semibold">
              {t.rich("profession", {
                highlight: (children) => (
                  <span className="bg-blue-400 px-1 dark:bg-blue-500">
                    {children}
                  </span>
                ),
              })}
            </h2>
            <p className="text-lg">
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
          <div className="flex flex-row gap-2 flex-wrap justify-center lg:justify-start">
            <a
              href="https://www.linkedin.com/in/franz-antony-bendezu-isidro/"
              className="flex items-center gap-3 rounded-md px-3 py-1 transition-colors hover:bg-gray-300 dark:text-white dark:hover:bg-gray-700"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon className="h-5 w-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/franz-bendezu"
              className="flex items-center gap-3 rounded-md px-3 py-1 transition-colors hover:bg-gray-300 dark:text-white dark:hover:bg-gray-700"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon className="h-5 w-5" />
              GitHub
            </a>
            <a
              href="https://gitlab.com/franz-bendezu"
              className="flex items-center gap-3 rounded-md px-3 py-1 transition-colors hover:bg-gray-300 dark:text-white dark:hover:bg-gray-700"
              target="_blank"
              rel="noreferrer"
            >
              <GitLabIcon className="h-5 w-5" />
              GitLab
            </a>
          </div>
          <div>
            <HomePresentationDownload />
          </div>
        </div>
        <div className="flex flex-shrink-0 items-center justify-center max-w-full">
          <div className="relative flex aspect-square h-auto max-h-[500px] w-[500px] max-w-[500px] items-center justify-center">
            <CircularPulse
              className="aspect-square h-auto max-w-[100%]"
              width="500"
              height="500"
            />
            <Image
              src={"/profile.webp"}
              blurDataURL="/profile.webp"
              alt="Profile"
              fetchPriority={"high"}
              className="ma-auto relative z-10 max-h-[50%] max-w-[50%] rounded-full object-cover"
              width={250}
              height={250}
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePresentation;
