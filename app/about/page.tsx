import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const APPROACH = [
  { icon: "🌱", title: "Play-led learning", desc: "Children learn best through hands-on play, not worksheets or drills." },
  { icon: "🤝", title: "Real relationships", desc: "Every child is known by name — by their teacher, and by us." },
  { icon: "🔍", title: "Full transparency", desc: "You'll always know what your child ate, learned, and enjoyed each day." },
  { icon: "🏡", title: "A second home", desc: "Warm, unhurried, and familiar — the opposite of institutional." },
];

const CURRICULUM = ["EYFS", "Reggio Emilia", "Steiner", "Montessori", "Forest School"];
const CHIP_COLORS = ["bg-sage", "bg-denim", "bg-rose", "bg-mustard text-ink", "bg-[#8C6E4E]"];

const TIMELINE = [
  { year: "2016", title: "One room, eight children", desc: "Little Sprouts opens in a converted house with a single mixed-age classroom." },
  { year: "2019", title: "The garden classroom", desc: "We build our outdoor play yard and start growing vegetables the children eat at lunch." },
  { year: "2022", title: "Second room opens", desc: "A dedicated infant room lets us welcome children from twelve months old." },
  { year: "Today", title: "Four rooms, one philosophy", desc: "Still capped at 8 children per teacher — growth was never the goal, care was." },
];

const TEAM = [
  { initials: "SH", name: "Sana H.", role: "Founder & Lead Teacher", bg: "bg-sage" },
  { initials: "RA", name: "Rabia A.", role: "Infant Room Lead", bg: "bg-rose" },
  { initials: "BK", name: "Bilal K.", role: "Outdoor & Movement", bg: "bg-denim" },
  { initials: "NF", name: "Nida F.", role: "Nutrition & Meals", bg: "bg-mustard text-ink" },
];

const OUTDOOR = [
  {
    icon: "🚌",
    bg: "#E7EFE6",
    title: "Community",
    desc: "Children explore and connect with the world beyond the nursery through everyday outings — building a sense of belonging in the community around them.",
    tags: ["Bus rides", "Library visits", "Local trips", "Post office", "Fire station visits"],
  },
  {
    icon: "🤸",
    bg: "#E6EEF3",
    title: "Physical Health",
    desc: "Our outdoor spaces are full of opportunities to climb, balance, ride, and play — helping children move confidently, build strength, and take healthy risks.",
    tags: ["Climbing", "Ball games", "Obstacle courses", "Balance & coordination"],
  },
  {
    icon: "🌻",
    bg: "#FEF3DC",
    title: "Environmentalism",
    desc: "From a young age, we encourage children to connect with the natural world. Our planting stations and vegetable patches let them grow their own food and take pride in caring for it.",
    tags: ["Planting & growing", "Composting", "Caring for wildlife"],
  },
];

export default function AboutPage() {
  return (
    <div className="container py-14 sm:py-16">
      <div className="max-w-[760px]">
        <span className="font-display text-[13px] uppercase tracking-wider text-sage-dark">Our Story</span>
        <h1 className="text-[30px] sm:text-[46px] my-3.5 mb-5">Started at a kitchen table, not a boardroom.</h1>
        <p className="text-[17px] text-ink-soft">
          Little Sprouts began in 2016 when two former kindergarten teachers got tired of watching
          good children&apos;s programs get bigger, louder, and less personal. So they opened one
          small room with eight cubbies and a promise: every child would be known, not just tracked.
        </p>
      </div>

      {/* ETHOS */}
      <div className="mt-10 mb-2.5 rounded-2xl bg-[#E7EFE6] p-6 flex gap-4 items-start">
        <div className="w-[38px] h-[38px] rounded-xl bg-sage flex items-center justify-center text-base flex-none">🌱</div>
        <p className="text-[14.5px] text-ink-soft">
          <strong className="block font-display text-ink mb-0.5">Our Ethos</strong>
          Every child arrives as a seed, not a finished plant. We don&apos;t rush growth or compare
          one child&apos;s pace to another&apos;s — we give each one the light, room, and steady
          care they need to unfold in their own time.
        </p>
      </div>

      {/* APPROACH */}
      <div className="mt-11 mb-2.5">
        <h2 className="text-[22px] mb-5">Our Approach</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {APPROACH.map((a) => (
            <div key={a.title} className="rounded-2xl border border-line bg-card p-6">
              <div className="text-xl mb-3">{a.icon}</div>
              <h3 className="text-[15px] mb-1.5">{a.title}</h3>
              <p className="text-[14px] text-ink-soft">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CURRICULUM */}
      <div className="mt-11 mb-2.5">
        <h2 className="text-[22px] mb-2">Our Curriculum</h2>
        <p className="text-ink-soft text-[15px] max-w-[64ch] mb-1">
          Built on the Early Years Foundation Stage (EYFS), and shaped by early-years experts, our
          curriculum blends influences from several respected approaches to childhood learning.
        </p>
        <div className="flex flex-wrap gap-2.5 mt-5">
          {CURRICULUM.map((c, i) => (
            <span key={c} className={`font-display font-semibold text-[13.5px] text-white px-5 py-2.5 rounded-full ${CHIP_COLORS[i]}`}>
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* TIMELINE */}
      <div className="mt-14 mb-11">
        {TIMELINE.map((t, i) => (
          <div key={t.year} className={`grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] gap-4 sm:gap-6 py-6 border-line ${i === 0 ? "" : "border-t"}`}>
            <div className="font-display font-semibold text-sage-dark text-[15px]">{t.year}</div>
            <div>
              <h3 className="text-[17px] mb-1">{t.title}</h3>
              <p className="text-ink-soft text-[15px]">{t.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* OUTDOOR LEARNING (merged from the former dedicated page) */}
      <div id="outdoor-learning" className="scroll-mt-24 mb-11">
        <span className="font-display text-[13px] uppercase tracking-wider text-sage-dark">Outdoor Learning</span>
        <h2 className="text-2xl sm:text-[32px] my-3.5 mb-5 max-w-[720px]">
          The world outside is part of the classroom.
        </h2>
        <p className="text-ink-soft text-[17px] max-w-[720px] mb-9">
          Fresh air, real dirt, and small everyday adventures — we believe children learn as much
          from a walk to the post office as they do from a lesson plan.
        </p>

        <div className="flex flex-col">
          {OUTDOOR.map((o, i) => (
            <div key={o.title} className={`grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-4 sm:gap-7 items-center py-7 border-line ${i === 0 ? "" : "border-t"}`}>
              <div className="h-[150px] rounded-2xl flex items-center justify-center text-4xl" style={{ background: o.bg }}>
                {o.icon}
              </div>
              <div>
                <h3 className="text-[19px] mb-2">{o.title}</h3>
                <p className="text-ink-soft text-[15px] mb-2.5">{o.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {o.tags.map((tag) => (
                    <span key={tag} className="font-display text-xs bg-[#F1E9D4] px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-9 bg-[#EEF2E8] rounded-3xl p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-7 items-center">
          <div>
            <span className="font-display text-[13px] uppercase tracking-wider text-sage-dark">Growing Through Nature</span>
            <h3 className="text-2xl my-2 mb-3">An introduction to Forest School.</h3>
            <p className="text-ink-soft text-[15px]">
              With roots in Scandinavian outdoor education, Forest School places nature at the
              centre of discovery. Children are encouraged to explore, take measured risks, and
              build independence in a safe, supportive environment.
            </p>
          </div>
          <div className="h-[180px] rounded-2xl bg-[#DDE6D4] flex items-center justify-center text-5xl" aria-hidden="true">
            🌳
          </div>
        </div>
      </div>

      {/* TEAM */}
      <div className="mb-11">
        <h2 className="text-2xl mb-1.5">Our Team — the people your child will actually know</h2>
        <p className="text-ink-soft mb-7">
          Every teacher here has stayed longer than the industry average — familiar faces matter to little ones.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((t) => (
            <div key={t.name} className="rounded-2xl overflow-hidden text-center bg-card border border-line">
              <div className={`aspect-square flex items-center justify-center font-display font-bold text-2xl text-white ${t.bg}`}>
                {t.initials}
              </div>
              <div className="py-3.5 px-2.5">
                <div className="font-display font-semibold text-[15px]">{t.name}</div>
                <div className="text-[13px] text-ink-soft">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* REGISTERED NOTE */}
      <div className="rounded-2xl border border-line bg-card p-6 flex gap-4 items-start">
        <div className="w-[38px] h-[38px] rounded-xl bg-sage flex items-center justify-center text-base flex-none">🛡️</div>
        <p className="text-[14.5px] text-ink-soft">
          <strong className="block font-display text-ink mb-0.5">Registered &amp; inspected</strong>
          Little Sprouts is a registered childcare provider, DBS-checked staff throughout,
          first-aid trained teachers in every room, and inspected annually against national
          early-years standards.
        </p>
      </div>
    </div>
  );
}
