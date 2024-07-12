import { Metadata, NextPage } from "next";
import React from "react";
import Script from "next/script";
import { ChatBubbleLeftIcon } from "@heroicons/react/20/solid";
import { ContactForm } from "../../../components/contact/Form";
import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { DEFAULT_LOCALE } from "@/constants/locales";

export const metadata: Metadata = {
  title: {
    absolute: "Contact",
  },
};

type Props = {
  params: { locale?: string };
};

const ContactPage: NextPage<Props> = ({
  params: { locale = DEFAULT_LOCALE },
}) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Contact");
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <h1 className="font-monospace flex flex-row items-center gap-4 text-3xl dark:text-white lg:text-4xl">
        <ChatBubbleLeftIcon className="h-8 w-8" />
        {t("title")}
      </h1>
      <p className="text-center text-lg font-light">
        Estoy interesado en oportunidades de trabajo independiente, proyectos
        increíblemente ambiciosos o grandes. Sin embargo, no dudes en usar el
        formulario si tienes otras solicitudes o preguntas.
      </p>

      <Script
        src="https://www.google.com/recaptcha/api.js"
        async
        defer
      ></Script>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
