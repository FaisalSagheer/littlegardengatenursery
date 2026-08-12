import Link from "next/link";
import { Button } from "@/components/ui/button";
import heroBanner from "@/public/images/hero-banner.jpg";
import Image from "next/image";

const FEATURES = [
  { icon: "🌿", bg: "#E7EFE6", title: "Outdoor Play", go: "Outdoor learning →", href: "/about#outdoor-learning" },
  { icon: "🎵", bg: "#FEF3DC", title: "Music & Movement", go: "See amenities →", href: "/about#amenities" },
  { icon: "🍎", bg: "#FBEAE3", title: "Healthy Meals", go: "View menu →", href: "/meals" },
  { icon: "💛", bg: "#E6EEF3", title: "Caring Teachers", go: "Meet the team →", href: "/about" },
];

const SESSIONS = [
  { time: "8:00am – 3:00pm", title: "Extended Half Day", price: "£85", desc: "Longer morning & afternoon sessions with tasty food and snacks.", min: "Minimum 2 days a week" },
  { time: "8:00am – 6:00pm", title: "Full Day", price: "£120", desc: "A full day of fun, learning, and delicious meals.", min: "Minimum 3 days a week", featured: true },
  { time: "8:00–1pm or 1–6pm", title: "Half Day", price: "£75", desc: "Shorter sessions, still packed with play, learning, and healthy snacks.", min: "Minimum 4 days a week" },
];

const WHY = [
  { num: "01", icon: "👩‍🏫", title: "Small Groups", desc: "We follow the required staff-to-child ratios, so every child gets seen and heard." },
  { num: "02", icon: "🎓", title: "Experienced Teachers", desc: "Our team is experienced, dedicated, and passionate about early years care." },
  { num: "03", icon: "😊", title: "Happy Children", desc: "A predictable daily rhythm that helps children feel secure enough to explore." },
];

const STAFF = [
  { initials: "RE", name: "Raneya Erikat", role: "Founder & Lead Teacher", bg: "bg-sage" },
  { initials: "JS", name: "Jedida Sohrab", role: "Infant Room Lead", bg: "bg-rose" },
  { initials: "R", name: "Erikat", role: "Outdoor & Movement", bg: "bg-denim" },
  { initials: "S", name: "Sohrab", role: "Nutrition & Meals", bg: "bg-mustard" },
];

const NEWS = [
  { 
    tag: "Tips", 
    img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=400&fit=crop", 
    bg: "#E7EFE6", 
    title: "5 ways to help your child settle in" 
  },
  { 
    tag: "Learning", 
    img: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=300&h=200&fit=crop", 
    bg: "#FBEAE3", 
    title: "Why outdoor play matters most" 
  },
  { 
    tag: "News", 
    img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=300&h=200&fit=crop", 
    bg: "#FEF3DC", 
    title: "Meet our newest toddler room" 
  },
];

const QUICK_LINKS = [
  { href: "/about", label: "📖 About Us" },
  { href: "/about#amenities", label: "🧸 Amenities" },
  { href: "/meals", label: "🍎 Meals & Snacks" },
  { href: "/policies", label: "🗃️ Policies" },
  { href: "/documents", label: "📋 Documents" },
  { href: "/fees", label: "💳 Fees & Admission" },
  { href: "/careers", label: "💼 Careers" },
  { href: "/contact", label: "✉️ Contact Us" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <div className="relative overflow-hidden">
        <div className="relative h-[520px] sm:h-[560px] lg:h-[600px]">
          <Image
            src={heroBanner}
            alt="Little Garden Gate Nursery — a child waving hello at the garden gate"
            fill
            priority
            placeholder="blur"
            className="object-cover object-center"
          />
          {/* darken/blend overlay for text legibility + fade into page at the bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-[#FBF6EC]" />

          <div className="absolute inset-0 flex items-center justify-center px-7 pb-10">
            <div className="max-w-[640px] text-center bg-white/85 backdrop-blur-sm rounded-[28px] px-7 sm:px-10 py-8 sm:py-10 shadow-xl">
              <span className="inline-flex items-center gap-2 font-display text-[13px] uppercase tracking-wider text-sage-dark">
                <span className="w-[7px] h-[7px] rounded-full bg-mustard inline-block" />
                Nursery &amp; Early Learning · Ages 1–5
              </span>
              <h1 className="text-[32px] sm:text-[44px] lg:text-[50px] my-3.5 mb-4">
                Small steps,
                <br />
                big beginnings.
              </h1>
              <p className="text-base sm:text-lg text-ink-soft max-w-[46ch] mx-auto mb-6">
                A warm, unhurried place for your child to play, wonder, and grow — with small
                groups, a calm daily rhythm, and teachers who know your kid by name.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">Book a Tour</Link>
                </Button>
                <Button asChild variant="ghost" size="lg">
                  <Link href="/fees">See Sessions</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[52px] -mt-[3px] leading-[0]">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-full block">
            <path d="M0,32 C240,64 480,0 720,16 C960,32 1200,64 1440,32 L1440,60 L0,60 Z" fill="#FBF6EC" />
          </svg>
        </div>
      </div>

      <div className="container">
        {/* FEATURES */}
        <div className="pt-14 pb-2.5">
          <div className="text-center mb-8">
            <span className="font-display text-[13px] uppercase tracking-wider text-sage-dark">What We Offer</span>
            <h2 className="text-[26px] mt-2">Providing good care for your loving kids</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {FEATURES.map((f) => (
              <Link
                key={f.title}
                href={f.href}
                className="rounded-2xl border border-line bg-card p-6 text-left hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4" style={{ background: f.bg }}>
                  {f.icon}
                </div>
                <h3 className="text-[15.5px] mb-1.5">{f.title}</h3>
                <span className="font-display text-[13px] font-semibold text-sage-dark">{f.go}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* APPROACH BANNER */}
        <div className="bg-[#EEF2E8] rounded-[32px] mb-16 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-7 items-center p-8 lg:p-11 text-center lg:text-left">
          <div>
            <span className="font-display text-[13px] uppercase tracking-wider text-sage-dark">Our Approach</span>
            <h2 className="text-2xl lg:text-[32px] my-2.5 mb-3.5">A calm place for curious minds.</h2>
            <p className="text-ink-soft text-[15.5px] max-w-[42ch] mb-6 mx-auto lg:mx-0">
              Children learn best through play, not pressure. Every room is built around one kind
              of activity, so your child moves through the day at their own pace.
            </p>
            <Button asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
          <div className="relative h-[220px] max-w-[320px] mx-auto lg:max-w-none" aria-hidden="true">
            <div className="absolute top-2.5 left-10 h-[150px] shadow-lg bg-sage rounded-md w-[150px] -rotate-6 bg-[url(/images/sun.png)] bg-contain bg-center bg-no-repeat" />
            <div className="absolute top-[100px] left-[150px] shadow-lg bg-rose rounded-md h-[130px] w-[130px] rotate-6 bg-[url(/images/butterfly.png)] bg-contain bg-center bg-no-repeat" />
            <div className="absolute top-0 left-[205px] h-[110px] w-[110px] bg-mustard -rotate-3 shadow-lg rounded-md bg-[url(/images/bird.png)] bg-contain bg-center bg-no-repeat" />
          </div>
        </div>

        {/* SESSIONS */}
        <div className="pb-3.5">
          <div className="text-center mb-8">
            <span className="font-display text-[13px] uppercase tracking-wider text-sage-dark">Sessions &amp; Fees</span>
            <h2 className="text-[26px] mt-2">Choose the right session for your family</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-7">
            {SESSIONS.map((s) => (
              <div
                key={s.title}
                className={`rounded-2xl border-2 bg-card p-7 flex flex-col gap-2.5 ${
                  s.featured ? "border-sage shadow-xl" : "border-ink"
                }`}
              >
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
          <div className="text-center mb-16">
            <Button asChild variant="ghost">
              <Link href="/fees">View All Fees &amp; Admission</Link>
            </Button>
          </div>
        </div>

        {/* WHY */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {WHY.map((w) => (
            <div key={w.num} className="relative rounded-2xl border border-line bg-card p-7">
              <span className="absolute top-5 right-6 font-display font-bold text-xl text-line">{w.num}</span>
              <div className="text-xl mb-3">{w.icon}</div>
              <h3 className="text-[17px] mb-1.5">{w.title}</h3>
              <p className="text-[14.5px] text-ink-soft">{w.desc}</p>
            </div>
          ))}
        </div>

        {/* STAFF */}
        {/* <div className="pb-2.5">
          <div className="text-center mb-8">
            <span className="font-display text-[13px] uppercase tracking-wider text-sage-dark">Our Team</span>
            <h2 className="text-[26px] mt-2">Most dedicated staff for your child</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {STAFF.map((s) => (
              <div key={s.name} className="rounded-2xl overflow-hidden text-center bg-card border border-line">
                <div className={`aspect-square flex items-center justify-center font-display font-bold text-2xl text-white ${s.bg}`}>
                  {s.initials}
                </div>
                <div className="py-3.5 px-2.5">
                  <div className="font-display font-semibold text-[15px]">{s.name}</div>
                  <div className="text-[13px] text-ink-soft">{s.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* NEWS */}
        <div className="pb-2.5">
          <div className="text-center mb-8">
            <span className="font-display text-[13px] uppercase tracking-wider text-sage-dark">From Us</span>
            <h2 className="text-[26px] mt-2">Get to know our weekly updates</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {NEWS.map((n) => (
              <div key={n.title} className="rounded-2xl border border-line bg-card overflow-hidden">
                <div className="h-[200px] flex items-center justify-center text-4xl relative" style={{ background: n.bg }}>
                  <Image src={n.img} alt={n.tag} loading="lazy" fill/>
                  <span className="absolute top-3 left-3 font-display text-[11px] uppercase tracking-wider bg-white px-2.5 py-1 rounded-full">
                    {n.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-[15.5px] mb-1.5">{n.title}</h3>
                  <span className="text-[12.5px] text-ink-soft">Updated weekly</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="pb-20">
          <h2 className="text-xl text-center mb-5">Everything About Little Garden Gate</h2>
          <div className="flex flex-row gap-2.5 justify-center">
            {QUICK_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-display text-xs font-medium bg-card border border-line rounded-full px-5 py-2.5 hover:bg-[#F1E9D4] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}