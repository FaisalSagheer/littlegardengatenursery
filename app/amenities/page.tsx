const CUBBIES = [
  { bg: "#E7EFE6", icon: "🌿", title: "Outdoor Play Yard", desc: "A shaded garden with a vegetable patch, sandpit, and climbing frame for gross-motor play, rain or shine.", tag: "Daily, 10–11am" },
  { bg: "#FBEAE3", icon: "📚", title: "Reading Corner", desc: "Floor cushions and a rotating shelf of picture books, sorted low enough for even the youngest to reach.", tag: "Open all day" },
  { bg: "#FEF3DC", icon: "🎨", title: "Art Studio", desc: "Paint, clay, and collage supplies that wash out — because the mess is the point, not the mistake.", tag: "Daily, 2–3pm" },
  { bg: "#E6EEF3", icon: "🌙", title: "Nap Room", desc: "A dim, quiet room with individual cots and white noise, kept on the same nap schedule every day.", tag: "12:30–2:30pm" },
  { bg: "#E7EFE6", icon: "🍎", title: "Meal Program", desc: "Home-style meals cooked fresh on-site each morning, with menus posted a week ahead for allergies.", tag: "Breakfast, lunch, snack" },
  { bg: "#FBEAE3", icon: "🎵", title: "Music & Movement", desc: "A soft-floored room for singing circles, simple instruments, and dancing off the morning energy.", tag: "Daily, 9–9:30am" },
];

const DAY: [string, string][] = [
  ["8:00", "Drop-off & free play"],
  ["9:00", "Music & movement"],
  ["10:00", "Outdoor yard time"],
  ["12:00", "Lunch together"],
  ["12:30", "Rest & nap"],
  ["2:30", "Story & quiet play"],
  ["3:00", "Art studio time"],
  ["4:00", "Afternoon snack"],
  ["4:30", "Free play & garden"],
  ["5:30", "Wind-down & pickup"],
];

const SAFETY = [
  { icon: "🔐", title: "Secure entry", desc: "Keypad entry and sign-in/sign-out for every drop-off and pickup." },
  { icon: "📹", title: "CCTV monitored", desc: "All play and rest rooms are monitored during opening hours." },
  { icon: "🩹", title: "First-aid trained", desc: "At least one paediatric first-aid trained staff member on-site at all times." },
  { icon: "🧴", title: "Cleaned daily", desc: "Toys, cots, and surfaces are sanitized every evening after closing." },
];

const ENRICHMENT = [
  { icon: "🧘", title: "Yoga", desc: "Gentle movement and breathing to help children settle and focus." },
  { icon: "🧁", title: "Cooking & Baking", desc: "Simple, hands-on recipes that build fine motor skills and confidence." },
  { icon: "💃", title: "Doodle Dance", desc: "Free-movement dance sessions that mix music, art, and imagination." },
  { icon: "🇪🇸", title: "Spanish", desc: "Playful, song-based introduction to a second language each week." },
];

export default function AmenitiesPage() {
  return (
    <div className="container py-14 sm:py-16">
      <div className="max-w-[720px] mb-9">
        <span className="font-display text-[13px] uppercase tracking-wider text-sage-dark">What&apos;s Here</span>
        <h1 className="text-[30px] sm:text-[46px] my-3.5 mb-5">Every corner has a job to do.</h1>
        <p className="text-ink-soft text-[17px]">
          Each room is built around one kind of play, so children learn to move between quiet and
          active, messy and calm, on their own.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-2 border-ink rounded-2xl overflow-hidden mb-16">
        {CUBBIES.map((c, i) => (
          <div
            key={c.title}
            className={`p-7 relative bg-card border-ink ${(i + 1) % 3 !== 0 ? "lg:border-r-2" : ""} ${
              i < 3 ? "border-b-2 lg:border-b-2" : "border-b-2 lg:border-b-0"
            }`}
          >
            <div className="w-3.5 h-3.5 rounded-full bg-ink absolute top-4 left-6" />
            <div className="w-[46px] h-[46px] rounded-xl flex items-center justify-center text-[22px] mt-5 mb-4" style={{ background: c.bg }}>
              {c.icon}
            </div>
            <h3 className="text-lg mb-1.5">{c.title}</h3>
            <p className="text-ink-soft text-[14.5px]">{c.desc}</p>
            <span className="inline-block mt-3.5 font-display text-[11px] uppercase tracking-wider text-sage-dark bg-[#EEF3EA] px-2.5 py-1 rounded-full">
              {c.tag}
            </span>
          </div>
        ))}
      </div>

      <div className="bg-[#F1E9D4] rounded-3xl p-8 sm:p-9 mb-16">
        <h2 className="text-[22px] mb-5">A typical day</h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3.5">
          {DAY.map(([time, label]) => (
            <div key={time} className="text-sm">
              <span className="font-display font-semibold text-sage-dark block mb-0.5">{time}</span>
              {label}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-[22px] mb-5">Safety &amp; care</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SAFETY.map((s) => (
            <div key={s.title} className="rounded-2xl border border-line bg-card p-5">
              <div className="text-xl mb-2">{s.icon}</div>
              <h3 className="text-[15px] mb-1">{s.title}</h3>
              <p className="text-[13.5px] text-ink-soft">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-[22px] mb-2">Enrichment activities</h2>
        <p className="text-ink-soft text-[15px] mb-5">
          Beyond the daily routine, weekly specialist sessions round out each child&apos;s week —
          because quality care means a rich curriculum, not just supervised hours.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ENRICHMENT.map((e) => (
            <div key={e.title} className="rounded-2xl border border-line bg-card p-5">
              <div className="text-xl mb-2">{e.icon}</div>
              <h3 className="text-[15px] mb-1">{e.title}</h3>
              <p className="text-[13.5px] text-ink-soft">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
