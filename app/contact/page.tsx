import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import EnquiryForm from "@/components/EnquiryForm";

const FAQS = [
  { q: "Do I need to book a tour before enrolling?", a: "Yes — every family visits during a real session before we confirm a spot." },
  { q: "How far in advance should I enquire?", a: "Spots fill 2–3 months ahead for popular start dates, especially September." },
  { q: "Can I message on WhatsApp instead of calling?", a: "Yes — the same number works for calls and WhatsApp during office hours." },
];

export default function ContactPage() {
  return (
    <div className="container py-14 sm:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mb-16">
        <div>
          <span className="font-display text-[13px] uppercase tracking-wider text-sage-dark">Get In Touch</span>
          <h1 className="text-[30px] sm:text-[44px] my-3.5 mb-4">Let&apos;s find your child a spot.</h1>
          <p className="text-ink-soft text-base max-w-[44ch] mb-7">
            Send a note or come by — tours run most weekday mornings while the rooms are in full
            swing, so you can see exactly what a real day looks like.
          </p>

          <div className="flex flex-col gap-5 mb-7">
            <div className="flex gap-3.5 items-start">
              <div className="w-[38px] h-[38px] rounded-xl bg-sage flex items-center justify-center text-white flex-none">📍</div>
              <div>
                <strong className="block font-display text-[15px]">Visit us</strong>
                <span className="text-ink-soft text-[14.5px]">St George's Church, Campden Hill, Aubrey Walk, London, UK</span>
              </div>
            </div>
            <div className="flex gap-3.5 items-start">
              <div className="w-[38px] h-[38px] rounded-xl bg-sage flex items-center justify-center text-white flex-none">📞</div>
              <div>
                <strong className="block font-display text-[15px]">Call or WhatsApp</strong>
                <span className="text-ink-soft text-[14.5px]">+44 7774 239579</span>
              </div>
            </div>
            <div className="flex gap-3.5 items-start">
              <div className="w-[38px] h-[38px] rounded-xl bg-sage flex items-center justify-center text-white flex-none">✉️</div>
              <div>
                <strong className="block font-display text-[15px]">Email</strong>
                <span className="text-ink-soft text-[14.5px]">info@littlegardengatenursery.com</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-card p-6">
            <h3 className="text-[15px] mb-2.5">Hours</h3>
            <div className="flex justify-between text-[14px] text-ink-soft py-1.5">
              <span>Monday – Friday</span>
              <span>8:00am – 6:00pm</span>
            </div>
            <div className="flex justify-between text-[14px] text-ink-soft py-1.5 border-t border-dashed border-line">
              <span>Saturday</span>
              <span>Closed</span>
            </div>
            <div className="flex justify-between text-[14px] text-ink-soft py-1.5 border-t border-dashed border-line">
              <span>Sunday</span>
              <span>Closed</span>
            </div>
          </div>
        </div>

        <EnquiryForm
          dark
          submitLabel="Send Message"
          fields={[
            { id: "name", label: "Your name", type: "text", placeholder: "Jhon Doe", required: true },
            { id: "child_age", label: "Child's age", type: "text", placeholder: "e.g. 2 years old", required: true },
            { id: "email", label: "Email", type: "email", placeholder: "you@email.com", required: true },
            { id: "message", label: "Message", type: "textarea", placeholder: "Tell us a bit about what you're looking for..." },
          ]}
        />
      </div>

      <div className="max-w-[760px] mx-auto">
        <h2 className="text-2xl mb-6">Before you reach out</h2>
        <Accordion type="single" collapsible className="rounded-2xl border border-line bg-card overflow-hidden">
          {FAQS.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`}>
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
