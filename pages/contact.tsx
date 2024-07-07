import { NextPage } from "next";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Script from "next/script";
import Button from "../components/ui/Button";
import LoaderSpin from "../components/ui/LoaderSpin";
import { ChatBubbleLeftIcon, CheckIcon } from "@heroicons/react/20/solid";

const ContactPage: NextPage = () => {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_SPREE_ID!);

  if (state.succeeded) {
    return (
      <div>
        <CheckIcon className="mx-auto h-12 w-12 rounded-full bg-green-500 p-3 text-white" />
        <h2 className="text-center text-3xl font-semibold">
          Gracias por tu mensaje
        </h2>
        <p className="text-center text-lg font-light">
          Me pondré en contacto contigo lo antes posible.
        </p>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <h1 className="font-monospace flex flex-row items-center gap-4 text-3xl dark:text-white lg:text-4xl">
        <ChatBubbleLeftIcon className="h-8 w-8" />
        Contáctame
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
      <form onSubmit={handleSubmit} className="relative mt-6 h-full w-full">
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium text-gray-700">
            Correo Electrónico
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="focus:ring-primary-500 focus:border-primary-500 w-full rounded-md border border-gray-300 px-4 py-2"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block font-medium text-gray-700">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="focus:ring-primary-500 focus:border-primary-500 w-full rounded-md border border-gray-300 px-4 py-2"
            rows={5}
          />
          <ValidationError
            prefix="Mensaje"
            field="message"
            errors={state.errors}
          />
        </div>
        <div
          className="g-recaptcha"
          data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_ID!}
        ></div>
        <ValidationError
          prefix="Recaptcha"
          field="recaptcha"
          errors={state.errors}
        />
        <div className="align-center mt-4 flex justify-center">
          <Button
            type="submit"
            disabled={state.submitting}
            className="border-slate-500 uppercase transition-colors duration-300 dark:border-slate-100 dark:text-white"
          >
            {state.submitting && (
              <LoaderSpin className="me-3 h-4 w-4 fill-slate-100 dark:fill-slate-500" />
            )}
            Enviar mensaje
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
