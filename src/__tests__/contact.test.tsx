import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { ContactForm } from "@/components/contact/Form";

const { useFormMock } = vi.hoisted(() => ({ useFormMock: vi.fn() }));

vi.mock("@formspree/react", () => ({
  useForm: useFormMock,
  ValidationError: () => null,
}));

const labels = {
  name: "Name",
  email: "Email",
  company: "Company",
  service: "Service",
  timeline: "Timeline",
  message: "Message",
  send: "Send message",
  successTitle: "Thank you for your message",
  successDescription: "I will get back to you as soon as possible.",
  error: "Unable to send",
  recaptcha: "Complete reCAPTCHA",
  services: {
    placeholder: "Select a service",
    "mvp-development": "MVP development",
    "saas-product-development": "SaaS development",
    "internal-tools": "Internal tools",
    "landing-page-development": "Landing page",
    unsure: "Unsure",
  },
  timelines: {
    placeholder: "Select a timeline",
    "under-one-month": "Under one month",
    "one-to-three-months": "One to three months",
    "over-three-months": "Over three months",
    exploring: "Exploring",
  },
};

describe("contact form island", () => {
  beforeEach(() => useFormMock.mockReset());

  it("renders localized fields and submission state", () => {
    useFormMock.mockReturnValue([
      { succeeded: false, submitting: true, errors: null },
      vi.fn(),
    ]);
    render(<ContactForm formId="test" labels={labels} locale="en" />);
    expect(screen.getByLabelText("Email")).toBeRequired();
    expect(screen.getByLabelText("Service")).toBeRequired();
    expect(screen.getByLabelText("Company")).not.toBeRequired();
    expect(screen.getByRole("button", { name: "submit" })).toBeDisabled();
  });

  it("renders the localized success state", () => {
    useFormMock.mockReturnValue([
      { succeeded: true, submitting: false, errors: null },
      vi.fn(),
    ]);
    render(<ContactForm formId="test" labels={labels} locale="en" />);
    expect(screen.getByRole("status")).toHaveTextContent(
      "Thank you for your message",
    );
  });

  it("tracks one successful inquiry without personal form data", async () => {
    let formState = { succeeded: false, submitting: false, errors: null };
    useFormMock.mockImplementation(() => [formState, vi.fn()]);
    const plausible = vi.fn();
    window.plausible = plausible;
    const { rerender } = render(
      <ContactForm formId="test" labels={labels} locale="en" />,
    );
    fireEvent.change(screen.getByLabelText("Service"), {
      target: { value: "mvp-development" },
    });
    formState = { succeeded: true, submitting: false, errors: null };
    rerender(<ContactForm formId="test" labels={labels} locale="en" />);
    rerender(<ContactForm formId="test" labels={labels} locale="en" />);

    await waitFor(() => expect(plausible).toHaveBeenCalledTimes(1));
    expect(plausible).toHaveBeenCalledWith("Lead Form Submitted", {
      props: { locale: "en", service: "mvp-development" },
    });
    expect(JSON.stringify(plausible.mock.calls)).not.toMatch(
      /name|email|company|message/i,
    );
    delete window.plausible;
  });
});
