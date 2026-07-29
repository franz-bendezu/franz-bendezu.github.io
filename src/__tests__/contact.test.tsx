import { render, screen } from "@testing-library/react";
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
  message: "Message",
  send: "Send message",
  successTitle: "Thank you for your message",
  successDescription: "I will get back to you as soon as possible.",
  error: "Unable to send",
  recaptcha: "Complete reCAPTCHA",
};

describe("contact form island", () => {
  beforeEach(() => useFormMock.mockReset());

  it("renders localized fields and submission state", () => {
    useFormMock.mockReturnValue([
      { succeeded: false, submitting: true, errors: null },
      vi.fn(),
    ]);
    render(<ContactForm formId="test" labels={labels} />);
    expect(screen.getByLabelText("Email")).toBeRequired();
    expect(screen.getByRole("button", { name: "submit" })).toBeDisabled();
  });

  it("renders the localized success state", () => {
    useFormMock.mockReturnValue([
      { succeeded: true, submitting: false, errors: null },
      vi.fn(),
    ]);
    render(<ContactForm formId="test" labels={labels} />);
    expect(screen.getByRole("status")).toHaveTextContent(
      "Thank you for your message",
    );
  });
});
