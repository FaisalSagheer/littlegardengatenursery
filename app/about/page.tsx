const APPROACH = [
  { 
    img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=200&h=200&fit=crop", 
    title: "Play-led learning", 
    desc: "Children learn best through hands-on play, not worksheets or drills." 
  },
  { 
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=200&h=200&fit=crop", 
    title: "Real relationships", 
    desc: "Every child is known by name — by their teacher, and by us." 
  },
  { 
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&h=200&fit=crop", 
    title: "Full transparency", 
    desc: "You'll always know what your child ate, learned, and enjoyed each day." 
  },
  { 
    img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=200&h=200&fit=crop", 
    title: "A second home", 
    desc: "Warm, unhurried, and familiar — the opposite of institutional." 
  },
];

const CURRICULUM = ["EYFS", "Reggio Emilia", "Steiner", "Montessori", "Forest School"];
const CHIP_COLORS = ["bg-sage", "bg-denim", "bg-rose", "bg-mustard text-ink", "bg-[#8C6E4E]"];

const TIMELINE = [
  { year: "2016", title: "One room, eight children", desc: "Little Garden Gate opens in a converted house with a single mixed-age classroom." },
  { year: "2019", title: "The garden classroom", desc: "We build our outdoor play yard and start growing vegetables the children eat at lunch." },
  { year: "2022", title: "Second room opens", desc: "A dedicated infant room lets us welcome children from twelve months old." },
  { year: "Today", title: "Four rooms, one philosophy", desc: "Still capped at 8 children per teacher — growth was never the goal, care was." },
];

const TEAM = [
  { initials: "RE", name: "Raneya Erikat", role: "Founder & Lead Teacher", bg: "bg-sage" },
  { initials: "JS", name: "Jedida Sohrab", role: "Infant Room Lead", bg: "bg-rose" },
  { initials: "R", name: "Erikat", role: "Outdoor & Movement", bg: "bg-denim" },
  { initials: "S", name: "Sohrab", role: "Nutrition & Meals", bg: "bg-mustard" },
];

const OUTDOOR = [
  {
    img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop",
    bg: "#E7EFE6",
    title: "Community",
    desc: "Children explore and connect with the world beyond the nursery through everyday outings — building a sense of belonging in the community around them.",
    tags: ["Bus rides", "Library visits", "Local trips", "Post office", "Fire station visits"],
  },
  {
    img: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=400&h=300&fit=crop",
    bg: "#E6EEF3",
    title: "Physical Health",
    desc: "Our outdoor spaces are full of opportunities to climb, balance, ride, and play — helping children move confidently, build strength, and take healthy risks.",
    tags: ["Climbing", "Ball games", "Obstacle courses", "Balance & coordination"],
  },
  {
    img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
    bg: "#FEF3DC",
    title: "Environmentalism",
    desc: "From a young age, we encourage children to connect with the natural world. Our planting stations and vegetable patches let them grow their own food and take pride in caring for it.",
    tags: ["Planting & growing", "Composting", "Caring for wildlife"],
  },
];

const CUBBIES = [
  { 
    img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=200&h=200&fit=crop", 
    bg: "#E7EFE6", 
    title: "Outdoor Play Yard", 
    desc: "A shaded garden with a vegetable patch, sandpit, and climbing frame for gross-motor play, rain or shine.", 
    tag: "Daily, 10–11am" 
  },
  { 
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=200&h=200&fit=crop", 
    bg: "#FBEAE3", 
    title: "Reading Corner", 
    desc: "Floor cushions and a rotating shelf of picture books, sorted low enough for even the youngest to reach.", 
    tag: "Open all day" 
  },
  { 
    img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=200&h=200&fit=crop", 
    bg: "#FEF3DC", 
    title: "Art Studio", 
    desc: "Paint, clay, and collage supplies that wash out — because the mess is the point, not the mistake.", 
    tag: "Daily, 2–3pm" 
  },
  { 
    img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=200&h=200&fit=crop", 
    bg: "#E6EEF3", 
    title: "Nap Room", 
    desc: "A dim, quiet room with individual cots and white noise, kept on the same nap schedule every day.", 
    tag: "12:30–2:30pm" 
  },
  { 
    img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=200&h=200&fit=crop", 
    bg: "#E7EFE6", 
    title: "Meal Program", 
    desc: "Home-style meals cooked fresh on-site each morning, with menus posted a week ahead for allergies.", 
    tag: "Breakfast, lunch, snack" 
  },
  { 
    img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=200&h=200&fit=crop", 
    bg: "#FBEAE3", 
    title: "Music & Movement", 
    desc: "A soft-floored room for singing circles, simple instruments, and dancing off the morning energy.", 
    tag: "Daily, 9–9:30am" 
  },
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
  { 
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop", 
    title: "Secure entry", 
    desc: "Keypad entry and sign-in/sign-out for every drop-off and pickup." 
  },
  { 
    img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=200&h=200&fit=crop", 
    title: "CCTV monitored", 
    desc: "All play and rest rooms are monitored during opening hours." 
  },
  { 
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=200&h=200&fit=crop", 
    title: "First-aid trained", 
    desc: "At least one paediatric first-aid trained staff member on-site at all times." 
  },
  { 
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=200&h=200&fit=crop", 
    title: "Cleaned daily", 
    desc: "Toys, cots, and surfaces are sanitized every evening after closing." 
  },
];

const ENRICHMENT = [
  { 
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=200&h=200&fit=crop", 
    title: "Yoga", 
    desc: "Gentle movement and breathing to help children settle and focus." 
  },
  { 
    img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=200&h=200&fit=crop", 
    title: "Cooking & Baking", 
    desc: "Simple, hands-on recipes that build fine motor skills and confidence." 
  },
  { 
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=200&h=200&fit=crop", 
    title: "Doodle Dance", 
    desc: "Free-movement dance sessions that mix music, art, and imagination." 
  },
  { 
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&h=200&fit=crop", 
    title: "Spanish", 
    desc: "Playful, song-based introduction to a second language each week." 
  },
];

export default function AboutPage() {
  return (
    <div className="container py-14 sm:py-16">
      <div className="max-w-[760px]">
        <span className="font-display text-[13px] uppercase tracking-wider text-sage-dark">Our Story</span>
        <h1 className="text-[30px] sm:text-[46px] my-3.5 mb-5">Started at a kitchen table, not a boardroom.</h1>
        <p className="text-[17px] text-ink-soft">
          Little Garden Gate began in 2016 when two former kindergarten teachers got tired of watching
          good children&apos;s programs get bigger, louder, and less personal. So they opened one
          small room with eight cubbies and a promise: every child would be known, not just tracked.
        </p>
      </div>

      {/* ETHOS */}
      <div className="mt-10 mb-2.5 rounded-2xl bg-[#E7EFE6] p-6 flex gap-4 items-start">
        <div className="w-[38px] h-[38px] rounded-xl overflow-hidden flex-none">
          <img 
            src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=100&h=100&fit=crop" 
            alt="Ethos" 
            className="w-full h-full object-cover"
          />
        </div>
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
              <div className="w-12 h-12 rounded-xl overflow-hidden mb-3">
                <img src={a.img} alt={a.title} className="w-full h-full object-cover" />
              </div>
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

      {/* OUTDOOR LEARNING */}
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
              <div className="h-[150px] rounded-2xl overflow-hidden">
                <img src={o.img} alt={o.title} className="w-full h-full object-cover" />
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
          <div className="h-[180px] rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=360&fit=crop" 
              alt="Forest School" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* AMENITIES */}
      <div id="amenities" className="scroll-mt-24 mb-11">
        <span className="font-display text-[13px] uppercase tracking-wider text-sage-dark">What&apos;s Here</span>
        <h2 className="text-2xl sm:text-[32px] my-3.5 mb-5 max-w-[720px]">Every corner has a job to do.</h2>
        <p className="text-ink-soft text-[17px] max-w-[720px] mb-9">
          Each room is built around one kind of play, so children learn to move between quiet and
          active, messy and calm, on their own.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-2 border-ink rounded-2xl overflow-hidden mb-10">
          {CUBBIES.map((c, i) => (
            <div
              key={c.title}
              className={`p-7 relative bg-card border-ink ${(i + 1) % 3 !== 0 ? "lg:border-r-2" : ""} ${
                i < 3 ? "border-b-2 lg:border-b-2" : "border-b-2 lg:border-b-0"
              }`}
            >
              <div className="w-3.5 h-3.5 rounded-full bg-ink absolute top-4 left-6" />
              <div className="w-[46px] h-[46px] rounded-xl overflow-hidden mt-5 mb-4">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg mb-1.5">{c.title}</h3>
              <p className="text-ink-soft text-[14.5px]">{c.desc}</p>
              <span className="inline-block mt-4 font-display text-[11px] uppercase tracking-wider text-sage-dark bg-[#EEF3EA] px-2.5 py-1 rounded-full">
                {c.tag}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-[#F1E9D4] rounded-3xl p-8 sm:p-9 mb-10">
          <h3 className="text-xl mb-5">A typical day</h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {DAY.map(([time, label]) => (
              <div key={time} className="text-sm">
                <span className="font-display font-semibold text-sage-dark block mb-0.5">{time}</span>
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-xl mb-5">Safety &amp; care</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SAFETY.map((s) => (
              <div key={s.title} className="rounded-2xl border border-line bg-card p-5">
                <div className="w-10 h-10 rounded-xl overflow-hidden mb-2">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-[15px] mb-1">{s.title}</h4>
                <p className="text-[13.5px] text-ink-soft">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl mb-2">Enrichment activities</h3>
          <p className="text-ink-soft text-[15px] mb-5">
            Beyond the daily routine, weekly specialist sessions round out each child&apos;s week —
            because quality care means a rich curriculum, not just supervised hours.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ENRICHMENT.map((e) => (
              <div key={e.title} className="rounded-2xl border border-line bg-card p-5">
                <div className="w-10 h-10 rounded-xl overflow-hidden mb-2">
                  <img src={e.img} alt={e.title} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-[15px] mb-1">{e.title}</h4>
                <p className="text-[13.5px] text-ink-soft">{e.desc}</p>
              </div>
            ))}
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
        <div className="w-[38px] h-[38px] rounded-xl overflow-hidden flex-none">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=100&h=100&fit=crop" 
            alt="Registered" 
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-[14.5px] text-ink-soft">
          <strong className="block font-display text-ink mb-0.5">Registered &amp; inspected</strong>
          Little Garden Gate is a registered childcare provider, DBS-checked staff throughout,
          first-aid trained teachers in every room, and inspected annually against national
          early-years standards.
        </p>
      </div>
    </div>
  );
}