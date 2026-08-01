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
    <form onSubmit={handleSubmit} className="relative w-full">
      {state.errors && (
        <p className="mb-4 text-red-700 dark:text-red-300" role="alert">
          {labels.error}
        </p>
      )}
      <div className="mb-5">
        <label htmlFor="email" className="mb-2 block text-sm font-bold">
          {labels.email}
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          autoComplete="email"
          className="border-divider bg-surface text-content focus:border-accent min-h-12 w-full rounded-lg border px-4 py-3"
        />
        <ValidationError
          prefix={labels.email}
          field="email"
          errors={state.errors}
        />
      </div>
      <div className="mb-5">
        <label htmlFor="name" className="mb-2 block text-sm font-bold">
          {labels.name}
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          autoComplete="name"
          className="border-divider bg-surface text-content focus:border-accent min-h-12 w-full rounded-lg border px-4 py-3"
        />
        <ValidationError
          prefix={labels.name}
          field="name"
          errors={state.errors}
        />
      </div>
      <div className="mb-5">
        <label htmlFor="message" className="mb-2 block text-sm font-bold">
          {labels.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          className="border-divider bg-surface text-content focus:border-accent w-full rounded-lg border px-4 py-3"
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
      <div className="mt-6 flex">
        <Button
          type="submit"
          disabled={state.submitting || !formId}
          aria-label="submit"
          fullWidth
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
