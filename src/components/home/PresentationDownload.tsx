"use client";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import LoaderSpin from "../ui/LoaderSpin";
import Button from "../ui/Button";
import { useTranslations } from "next-intl";

export const HomePresentationDownload: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const t = useTranslations("Home");
  const handleCVDownload = async () => {
    setLoading(true);
    const data = await fetch(t("cvPath").toString());
    const blob = await data.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Franz Bendezu CV.pdf";
    a.click();
    window.URL.revokeObjectURL(url);
    setLoading(false);
  };
  return (
    <Button
      onClick={handleCVDownload}
      className="border-slate-500 bg-slate-600 text-white hover:bg-slate-700 focus-visible:ring-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-900 dark:focus-visible:ring-slate-600"
    >
      {loading ? (
        <LoaderSpin className="me-3 h-4 w-4 fill-slate-100 dark:fill-slate-500" />
      ) : (
        <ArrowDownTrayIcon className="mr-2 h-4 w-4 fill-slate-100 dark:fill-slate-500" />
      )}
      <span
      className="text-sm font-semibold"
      >{t("downloadCV")}</span>
    </Button>
  );
};
