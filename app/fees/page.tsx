const SESSIONS = [
  { time: "8:00am – 6:00pm", title: "Full Day", price: "£120", desc: "A full day of fun, learning, and delicious meals.", min: "Minimum 3 days a week" },
  { time: "8:00am – 3:00pm", title: "Extended Half Day", price: "£85", desc: "Longer morning & afternoon sessions with tasty food and snacks.", min: "Minimum 2 days a week" },
  { time: "8:00–1pm or 1–6pm", title: "Half Day", price: "£75", desc: "Shorter sessions, still packed with play, learning, and healthy snacks.", min: "Minimum 4 days a week" },
];

const ADMISSION_STEPS = [
  { title: "Book a tour", desc: "Visit during a normal day to see the room your child would join." },
  { title: "Choose your session", desc: "Pick Full Day, Extended Half Day, or Half Day based on your family's schedule." },
  { title: "Submit your forms", desc: "Complete the enrollment, medical, and emergency contact forms — see our Documents page." },
  { title: "Pay your deposit", desc: "A refundable one-month deposit confirms your spot ahead of your child's start date." },
];

const SECURING_STEPS = [
  { icon: "📌", title: "Holding your spot", desc: "Once we offer a place, you have 5 working days to confirm and pay your deposit before it's released to another family." },
  { icon: "🔄", title: "Changing your booking pattern", desc: "Your sessions are agreed in advance. If you'd like to change days or session type later, speak with our Nursery Manager." },
  { icon: "🏛️", title: "Government-funded hours", desc: "If your family is eligible for government-funded childcare hours, our Nursery Manager can talk you through how these are applied." },
];

export default function FeesPage() {
  return (
    <div className="container py-14 sm:py-16">
      <div className="max-w-[720px] mb-9">
        <span className="font-display text-[13px] uppercase tracking-wider text-sage-dark">Fees &amp; Admission</span>
        <h1 className="text-[30px] sm:text-[46px] my-3.5 mb-5">Our nursery sessions &amp; fees.</h1>
        <p className="text-ink-soft text-[17px]">
          We offer flexible care to suit your family&apos;s needs, with healthy meals and snacks
          included in every session.
        </p>
      </div>

      <div className="rounded-2xl border border-line bg-card p-7 mb-11 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-7 items-center">
        <div className="text-center bg-[#E7EFE6] rounded-2xl px-6 py-5">
          <div className="font-display font-bold text-3xl text-sage-dark leading-none">48</div>
          <div className="text-xs text-ink-soft mt-1">weeks open
            <br />per year
          </div>
        </div>
        <div>
          <p className="font-display text-sm mb-2.5">We close:</p>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2.5 text-[14.5px] text-ink-soft">
              <span className="font-display text-[11px] uppercase bg-mustard text-ink px-2.5 py-0.5 rounded-full">Easter</span>1 week in April
            </li>
            <li className="flex items-center gap-2.5 text-[14.5px] text-ink-soft">
              <span className="font-display text-[11px] uppercase bg-mustard text-ink px-2.5 py-0.5 rounded-full">Summer</span>2 weeks in August
            </li>
            <li className="flex items-center gap-2.5 text-[14.5px] text-ink-soft">
              <span className="font-display text-[11px] uppercase bg-mustard text-ink px-2.5 py-0.5 rounded-full">Christmas</span>1 week in December
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        {SESSIONS.map((s) => (
          <div key={s.title} className="rounded-2xl border-2 border-ink bg-card p-7 flex flex-col gap-2.5">
            <span className="self-start font-display text-xs font-semibold bg-[#F1E9D4] px-3 py-1.5 rounded-full">{s.time}</span>
            <h3 className="text-lg mt-1">{s.title}</h3>
            <div className="font-display text-3xl font-bold text-sage-dark">
              {s.price}
              <span className="text-sm font-medium text-ink-soft">/day</span>
            </div>
            <p className="text-[14.5px] text-ink-soft flex-1">{s.desc}</p>
            <span className="font-display text-[12.5px] bg-[#FBEAE3] px-3 py-1.5 rounded-lg self-start">{s.min}</span>
          </div>
        ))}
      </div>

      <div className="mb-14">
        <h2 className="text-[22px] mb-6">How admission works</h2>
        {ADMISSION_STEPS.map((s, i) => (
          <div key={s.title} className={`grid grid-cols-[44px_1fr] gap-5 py-5 border-line ${i === 0 ? "" : "border-t"}`}>
            <div className="w-11 h-11 rounded-full bg-sage text-white flex items-center justify-center font-display font-semibold">{i + 1}</div>
            <div>
              <h3 className="text-base mb-1">{s.title}</h3>
              <p className="text-[14.5px] text-ink-soft">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
        <div className="rounded-2xl p-6 bg-[#FBEAE3]">
          <strong className="block font-display mb-1">Extra charges?</strong>
          <p className="text-[14.5px] text-ink-soft">None for standard hours. Late pickups after closing are charged at £10 per 15 minutes.</p>
        </div>
        <div className="rounded-2xl p-6 bg-[#E6EEF3]">
          <strong className="block font-display mb-1">How to pay</strong>
          <p className="text-[14.5px] text-ink-soft">Bank transfer, direct debit, or card — set up during your enrollment paperwork.</p>
        </div>
      </div>

      <div className="mb-14">
        <h2 className="text-[22px] mb-6">Securing &amp; changing your place</h2>
        {SECURING_STEPS.map((s, i) => (
          <div key={s.title} className={`grid grid-cols-[44px_1fr] gap-5 py-5 border-line ${i === 0 ? "" : "border-t"}`}>
            <div className="w-11 h-11 rounded-full bg-sage text-white flex items-center justify-center text-lg">{s.icon}</div>
            <div>
              <h3 className="text-base mb-1">{s.title}</h3>
              <p className="text-[14.5px] text-ink-soft">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-line bg-card p-6 flex gap-4 items-start">
        <div className="w-[38px] h-[38px] rounded-xl bg-denim flex items-center justify-center text-base flex-none">💬</div>
        <p className="text-[14.5px] text-ink-soft">
          <strong className="block font-display text-ink mb-0.5">Questions about your fees?</strong>
          Our Nursery Manager is happy to talk through sessions, funding, or payment options — reach
          out anytime via our Contact page.
        </p>
      </div>
    </div>
  );
}
