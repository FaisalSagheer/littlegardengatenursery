"use client";

import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export interface EnquiryFormField {
  id: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea";
  placeholder?: string;
  required?: boolean;
  half?: boolean; // render two fields side-by-side
}

interface EnquiryFormProps {
  fields: EnquiryFormField[];
  submitLabel?: string;
  dark?: boolean;
  className?: string;
}

/**
 * Sends the form via EmailJS (https://www.emailjs.com/).
 *
 * Setup required before this works:
 * 1. Create a free EmailJS account and an Email Service + Email Template.
 * 2. Copy .env.local.example to .env.local and fill in:
 *    NEXT_PUBLIC_EMAILJS_SERVICE_ID
 *    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
 *    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
 * 3. In your EmailJS template, reference the field ids below as {{field_id}}.
 */
export default function EnquiryForm({ fields, submitLabel = "Submit Enquiry", dark = false, className }: EnquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const params: Record<string, string> = {};
    fields.forEach((f) => (params[f.id] = String(formData.get(f.id) ?? "")));

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.warn("EmailJS is not configured — add your keys to .env.local");
      setStatus("error");
      return;
    }

    try {
      await emailjs.send(serviceId, templateId, params, { publicKey });
      setStatus("sent");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className={cn("rounded-2xl border border-line bg-card p-7 text-center", className)}>
        <p className="font-display text-lg font-semibold mb-1">Thanks! 🌱</p>
        <p className="text-ink-soft text-sm">We&apos;ve received your message and will be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        dark
          ? "rounded-2xl bg-ink p-8 shadow-[0_14px_30px_rgba(46,42,36,0.25)]"
          : "rounded-2xl border border-line bg-card p-7 shadow-[0_14px_30px_rgba(46,42,36,0.08)]",
        className
      )}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {fields.map((f) => (
          <div key={f.id} className={cn("space-y-1.5", f.half ? "sm:col-span-1" : "sm:col-span-2")}>
            <Label htmlFor={f.id} className={dark ? "text-[#EDE6D2]" : ""}>
              {f.label}
            </Label>
            {f.type === "textarea" ? (
              <Textarea id={f.id} name={f.id} placeholder={f.placeholder} required={f.required} />
            ) : (
              <Input id={f.id} name={f.id} type={f.type} placeholder={f.placeholder} required={f.required} />
            )}
          </div>
        ))}
      </div>

      <Button type="submit" className="w-full mt-5" disabled={status === "sending"} variant={dark ? "accent" : "primary"}>
        {status === "sending" ? "Sending..." : submitLabel}
      </Button>

      {status === "error" && (
        <p className="mt-3 text-xs text-rose text-center">
          Something went wrong sending your message — please check the EmailJS setup in .env.local, or contact us directly.
        </p>
      )}
    </form>
  );
}
