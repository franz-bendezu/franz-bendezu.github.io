import { useForm, ValidationError } from "@formspree/react";
import Button from "@/components/ui/Button";
import LoaderSpin from "@/components/ui/LoaderSpin";

export interface ContactFormLabels {
  name: string;
  email: string;
  message: string;
  send: string;
  successTitle: string;
  successDescription: string;
  error: string;
  recaptcha: string;
}

interface Props {
  formId: string;
  recaptchaSiteKey?: string;
  labels: ContactFormLabels;
}

export function ContactForm({ formId, recaptchaSiteKey, labels }: Props) {
  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return (
      <div role="status" className="py-8 text-center">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-2xl text-white">
          ✓
        </div>
        <h2 className="text-3xl font-semibold">{labels.successTitle}</h2>
        <p className="text-lg font-light">{labels.successDescription}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative mt-6 h-full w-full">
      {state.errors && (
        <p className="mb-4 text-red-700 dark:text-red-300" role="alert">
          {labels.error}
        </p>
      )}
      <div className="mb-4">
        <label htmlFor="email" className="block font-medium">
          {labels.email}
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-black"
        />
        <ValidationError
          prefix={labels.email}
          field="email"
          errors={state.errors}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block font-medium">
          {labels.name}
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-black"
        />
        <ValidationError
          prefix={labels.name}
          field="name"
          errors={state.errors}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block font-medium">
          {labels.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-black"
          rows={5}
        />
        <ValidationError
          prefix={labels.message}
          field="message"
          errors={state.errors}
        />
      </div>
      {recaptchaSiteKey && (
        <>
          <div className="g-recaptcha" data-sitekey={recaptchaSiteKey}></div>
          <ValidationError
            prefix={labels.recaptcha}
            field="recaptcha"
            errors={state.errors}
          />
        </>
      )}
      <div className="mt-4 flex justify-center">
        <Button
          type="submit"
          disabled={state.submitting || !formId}
          aria-label="submit"
          className="border-slate-500 px-4 py-2 uppercase disabled:cursor-not-allowed disabled:opacity-60 dark:border-slate-100"
        >
          {state.submitting && (
            <LoaderSpin className="mr-2 h-4 w-4 fill-slate-500" />
          )}
          {labels.send}
        </Button>
      </div>
    </form>
  );
}
