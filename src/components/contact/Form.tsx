import { useEffect, useRef, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Button from "@/components/ui/Button";
import LoaderSpin from "@/components/ui/LoaderSpin";
import type { Locale } from "@/lib/i18n";

export interface ContactFormLabels {
  name: string;
  email: string;
  company: string;
  service: string;
  timeline: string;
  message: string;
  send: string;
  successTitle: string;
  successDescription: string;
  error: string;
  recaptcha: string;
  services: Record<string, string>;
  timelines: Record<string, string>;
}

interface Props {
  formId: string;
  recaptchaSiteKey?: string;
  labels: ContactFormLabels;
  locale: Locale;
}

declare global {
  interface Window {
    umami?: {
      track: (event: string, data?: Record<string, string>) => void;
    };
  }
}

const serviceValues = [
  "mvp-development",
  "saas-product-development",
  "internal-tools",
  "landing-page-development",
  "unsure",
] as const;
const timelineValues = [
  "under-one-month",
  "one-to-three-months",
  "over-three-months",
  "exploring",
] as const;

export function ContactForm({
  formId,
  recaptchaSiteKey,
  labels,
  locale,
}: Props) {
  const [state, handleSubmit] = useForm(formId);
  const [selectedService, setSelectedService] = useState("");
  const [sourcePage, setSourcePage] = useState("direct");
  const trackedSuccess = useRef(false);

  useEffect(() => {
    const requestedService = new URLSearchParams(window.location.search).get(
      "service",
    );
    if (
      requestedService &&
      serviceValues.includes(requestedService as (typeof serviceValues)[number])
    ) {
      setSelectedService(requestedService);
    }
    if (document.referrer) {
      const referrer = new URL(document.referrer);
      if (referrer.origin === window.location.origin) {
        setSourcePage(referrer.pathname);
      }
    }
  }, []);

  useEffect(() => {
    if (!state.succeeded || trackedSuccess.current) return;
    trackedSuccess.current = true;
    window.umami?.track("Lead Form Submitted", {
      locale,
      service: selectedService || "unsure",
    });
  }, [locale, selectedService, state.succeeded]);

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
      <input type="hidden" name="locale" value={locale} />
      <input type="hidden" name="source_page" value={sourcePage} />
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
        <label htmlFor="company" className="mb-2 block text-sm font-bold">
          {labels.company}
        </label>
        <input
          id="company"
          type="text"
          name="company"
          autoComplete="organization"
          className="border-divider bg-surface text-content focus:border-accent min-h-12 w-full rounded-lg border px-4 py-3"
        />
      </div>
      <div className="mb-5">
        <label htmlFor="service" className="mb-2 block text-sm font-bold">
          {labels.service}
        </label>
        <select
          id="service"
          name="service"
          required
          value={selectedService}
          onChange={(event) => setSelectedService(event.target.value)}
          className="border-divider bg-surface text-content focus:border-accent min-h-12 w-full rounded-lg border px-4 py-3"
        >
          <option value="" disabled>
            {labels.services.placeholder}
          </option>
          {serviceValues.map((value) => (
            <option key={value} value={value}>
              {labels.services[value]}
            </option>
          ))}
        </select>
        <ValidationError
          prefix={labels.service}
          field="service"
          errors={state.errors}
        />
      </div>
      <div className="mb-5">
        <label htmlFor="timeline" className="mb-2 block text-sm font-bold">
          {labels.timeline}
        </label>
        <select
          id="timeline"
          name="timeline"
          defaultValue=""
          className="border-divider bg-surface text-content focus:border-accent min-h-12 w-full rounded-lg border px-4 py-3"
        >
          <option value="">{labels.timelines.placeholder}</option>
          {timelineValues.map((value) => (
            <option key={value} value={value}>
              {labels.timelines[value]}
            </option>
          ))}
        </select>
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
