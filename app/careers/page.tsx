import Link from "next/link";

const PERKS = [
  { icon: "🌱", title: "Paid training", desc: "Early childhood certifications covered in your first 90 days." },
  { icon: "🕐", title: "Predictable hours", desc: "Set shifts, no last-minute schedule changes." },
  { icon: "🍽️", title: "Meals included", desc: "Free breakfast and lunch on every shift you work." },
  { icon: "👶", title: "Staff discount", desc: "upto 20% off enrollment if your own child attends Little Garden Gate." },
];

const JOBS = [
  { title: "Assistant Teacher, Infant Room", meta: "Full-time · Monday–Friday", desc: "Support our lead teacher with feeding, nap routines, and one-on-one play for children aged 1–2.", rotate: "-rotate-1" },
  { title: "Lead Teacher, Preschool Room", meta: "Full-time · ECE certification required", desc: "Plan and lead daily activities for a group of up to 8 children aged 3–5.", rotate: "rotate-1" },
  // { title: "Kitchen Assistant", meta: "Part-time · Mornings", desc: "Help prepare and serve breakfast, lunch, and snacks, and manage allergen labeling.", rotate: "rotate-[1.5deg]" },
  // { title: "Front Desk & Admissions", meta: "Full-time · Weekdays", desc: "First point of contact for families touring, enrolling, or dropping off each morning.", rotate: "-rotate-[1.5deg]" },
];

const PROCESS = [
  { step: 1, title: "Apply", desc: "Send your CV and a short note about why you'd like to work with young children." },
  { step: 2, title: "Meet the team", desc: "A relaxed conversation with our founder and the room lead you'd be working alongside." },
  { step: 3, title: "Trial session", desc: "Spend a paid half-day in the room to see if it's a fit — for you and for us." },
  { step: 4, title: "Checks & offer", desc: "DBS and reference checks, then a formal offer with your start date." },
];

export default function CareersPage() {
  return (
    <div className="container py-14 sm:py-16">
      <div className="max-w-[720px] mb-9">
        <span className="font-display text-[13px] uppercase tracking-wider text-sage-dark">Join Our Team</span>
        <h1 className="text-[30px] sm:text-[46px] my-3.5 mb-5">Work somewhere small enough to matter.</h1>
        <p className="text-ink-soft text-[17px]">
          We hire slowly and keep people long — most of our teachers have been here over three
          years. If you&apos;d rather know every child&apos;s name than manage a roster, you&apos;ll fit right in.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
        {PERKS.map((p) => (
          <div key={p.title} className="rounded-2xl border border-line bg-card p-5">
            <div className="text-xl mb-2">{p.icon}</div>
            <h3 className="text-[15px] mb-1">{p.title}</h3>
            <p className="text-[13.5px] text-ink-soft">{p.desc}</p>
          </div>
        ))}
      </div>

      <div
        className="rounded-3xl p-8 sm:p-9 mb-14"
        style={{ background: "#C9A876", backgroundImage: "radial-gradient(rgba(0,0,0,0.06) 1px, transparent 1px)", backgroundSize: "14px 14px" }}
      >
        <h2 className="text-white text-[22px] mb-5 drop-shadow-sm">Current openings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {JOBS.map((j) => (
            <div key={j.title} className={`bg-card rounded p-5 relative shadow-lg ${j.rotate}`}>
              <div className="w-3.5 h-3.5 rounded-full bg-rose absolute -top-2 left-1/2 -translate-x-1/2 shadow" />
              <h3 className="text-base mb-1">{j.title}</h3>
              <div className="font-display text-xs text-sage-dark mb-2.5">{j.meta}</div>
              <p className="text-[13.5px] text-ink-soft mb-3">{j.desc}</p>
              <Link href="/contact" className="font-display font-semibold text-[13.5px] text-denim">
                Apply now →
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-[22px] mb-6">Our hiring process</h2>
        {PROCESS.map((p, i) => (
          <div key={p.step} className={`grid grid-cols-[44px_1fr] gap-5 py-5 border-line ${i === 0 ? "" : "border-t"}`}>
            <div className="w-11 h-11 rounded-full bg-sage text-white flex items-center justify-center font-display font-semibold">{p.step}</div>
            <div>
              <h3 className="text-base mb-1">{p.title}</h3>
              <p className="text-[14.5px] text-ink-soft">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
