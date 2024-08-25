import React, { FC } from "react";
import Image from "next-image-export-optimizer";
import { useTranslations } from "next-intl";
import { HomePresentationDownload } from "./PresentationDownload";
import { CircularPulse } from "../ui/CircularPulse";
import GitHubIcon from "../icon/github";
import LinkedInIcon from "../icon/linkedin";
import GitLabIcon from "../icon/gitlab";

const HomePresentation: FC = () => {
  const t = useTranslations("Home");

  return (
    <section id="presentation" className="relative w-full py-6">
      <div className="z-1 absolute bg-gradient-to-r from-gray-300 to-gray-200 dark:from-slate-800 dark:to-slate-700" />
      <div className="z-2 container mx-auto flex flex-col-reverse items-center gap-3 px-4 text-center lg:flex lg:flex-row lg:space-x-5 lg:text-left">
        <div className="flex max-w-full flex-col items-center space-y-4 lg:items-start">
          <div className="flex flex-col items-center gap-3 lg:items-start">
            <h1 className="text-md font-semibold">{t("greeting")}</h1>
            <h1 className="text-4xl font-semibold">{t("name")}</h1>
            <h2 className="text-3xl font-semibold">
              {t.rich("profession", {
                highlight: (children) => (
                  <span className="bg-slate-400 px-1 dark:bg-slate-500">
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
          <div className="flex flex-row flex-wrap justify-center gap-2 lg:justify-start">
            <a
              href="https://www.linkedin.com/in/franz-bendez/"
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
        <div className="flex max-w-full flex-shrink-0 items-center justify-center">
          <div className="relative flex aspect-square h-auto max-h-[512px] w-[512px] max-w-[512px] items-center justify-center">
            <CircularPulse
              className="aspect-square h-auto max-w-[100%]"
              width="512"
              height="512"
            />
            <Image
              src="/images/profile.webp"
              blurDataURL="/images/profile.webp"
              alt="Profile"
              fetchPriority={"high"}
              className="ma-auto relative z-10 max-h-[50%] max-w-[50%] rounded-full object-cover"
              width="256"
              height="256"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePresentation;
