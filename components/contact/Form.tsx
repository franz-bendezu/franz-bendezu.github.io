import { TUseForm, ValidationError } from "@formspree/react";
import { FC } from "react";
import Button from "../ui/Button";
import LoaderSpin from "../ui/LoaderSpin";
import { CheckIcon } from "@heroicons/react/20/solid";

type FieldValues = Record<string, string | number | boolean | null | undefined>;

export const ContactForm = <T extends FieldValues>({
  handleSubmit,
  state,
}: {
  handleSubmit: TUseForm<T>[1];
  state: TUseForm<T>[0];
}) => {
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
          aria-label="submit"
          className="border-slate-500 uppercase transition-colors duration-300 dark:border-slate-100 dark:text-white"
        >
          {state.submitting && (
            <LoaderSpin className="me-3 h-4 w-4 fill-slate-100 dark:fill-slate-500" />
          )}
          Enviar mensaje
        </Button>
      </div>
    </form>
  );
};
