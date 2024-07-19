import React, { FC } from "react";
import Image from "next/image";
import profile from "../../public/profile.png";
import { useTranslations } from "next-intl";
import { HomePresentationDownload } from "./PresentationDownload";
import { CircularPulse } from "../ui/CircularPulse";

const HomePresentation: FC = () => {
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
        <div className="relative flex aspect-square h-auto max-h-[500px] w-[500px] max-w-[500px] items-center justify-center">
          <CircularPulse
            className="aspect-square h-auto max-w-[100%]"
            width="500"
            height="500"
          />
          <Image
            src={profile}
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
  );
};

export default HomePresentation;
