import EnquiryForm from "@/components/EnquiryForm";

export default function ContactPage() {
  return (
    <div className="container py-14 sm:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mb-16">
        <div>
          <span className="font-display text-[13px] uppercase tracking-wider text-sage-dark">
            Get In Touch
          </span>
          <h1 className="text-[30px] sm:text-[44px] my-3.5 mb-4">
            Let&apos;s find your child a spot.
          </h1>
          <p className="text-ink-soft text-base max-w-[44ch] mb-7">
            Send a note or come by — tours run most weekday mornings while the rooms are in full
            swing, so you can see exactly what a real day looks like.
          </p>

          <div className="flex flex-col gap-5 mb-7">
            <div className="flex gap-3.5 items-start">
              <div className="w-[38px] h-[38px] rounded-xl bg-sage flex items-center justify-center text-white flex-none">
                📍
              </div>
              <div>
                <strong className="block font-display text-[15px]">Visit us</strong>
                <span className="text-ink-soft text-[14.5px]">
                  St George&apos;s Church, Campden Hill, Aubrey Walk, London, W8 7JG
                </span>
              </div>
            </div>
            <div className="flex gap-3.5 items-start">
              <div className="w-[38px] h-[38px] rounded-xl bg-sage flex items-center justify-center text-white flex-none">
                📞
              </div>
              <div>
                <strong className="block font-display text-[15px]">Call or WhatsApp</strong>
                <span className="text-ink-soft text-[14.5px]">07510992963</span>
              </div>
            </div>
            <div className="flex gap-3.5 items-start">
              <div className="w-[38px] h-[38px] rounded-xl bg-sage flex items-center justify-center text-white flex-none">
                ✉️
              </div>
              <div>
                <strong className="block font-display text-[15px]">Email</strong>
                <span className="text-ink-soft text-[14.5px]">info@littlegardengatenursery.com</span>
              </div>
            </div>
          </div>

          {/* Small map */}
          <div className="rounded-2xl overflow-hidden border border-line mb-7 aspect-[16/10]">
            <iframe
              title="Little Garden Gate Nursery location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5!2d-0.2005!3d51.5055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760ffb8b8b8b8b%3A0x0!2sSt%20George%27s%20Church%2C%20Campden%20Hill%2C%20Aubrey%20Walk%2C%20London%20W8%207JG!5e0!3m2!1sen!2suk!4v1710000000000!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
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
            { id: "name", label: "Your name", type: "text", placeholder: "John Doe", required: true },
            { id: "child_age", label: "Child's age", type: "text", placeholder: "e.g. 2 years old", required: true },
            { id: "email", label: "Email", type: "email", placeholder: "you@email.com", required: true },
            {
              id: "message",
              label: "Message",
              type: "textarea",
              placeholder: "Tell us a bit about what you're looking for...",
            },
          ]}
        />
      </div>
    </div>
  );
}