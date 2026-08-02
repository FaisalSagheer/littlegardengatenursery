import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const MENU = [
  { day: "Monday", breakfast: "Vegetable daal & roti", lunch: "Chicken pulao & salad", snack: "Banana & milk" },
  { day: "Tuesday", breakfast: "Boiled eggs & toast", lunch: "Lentil soup & bread", snack: "Apple slices" },
  { day: "Wednesday", breakfast: "Oatmeal & berries", lunch: "Vegetable khichdi", snack: "Yogurt cup" },
  { day: "Thursday", breakfast: "Paratha & yogurt", lunch: "Fish & rice", snack: "Cheese & crackers" },
  { day: "Friday", breakfast: "Pancakes & fruit", lunch: "Vegetable pasta", snack: "Carrot sticks & hummus" },
];

const NOTES = [
  { title: "Allergy-aware kitchen", desc: "Every dish is labeled for common allergens, and substitutes are made on request at no extra cost." },
  { title: "No added sugar before 2", desc: "Meals for our youngest room skip added sugar and salt entirely, per pediatric guidance." },
  { title: "Bring your own, if you prefer", desc: "Happy to warm and serve home-packed lunches alongside our own menu — just label the container." },
];

const PHILOSOPHY = [
  { icon: "👩‍🍳", title: "Cooked from scratch", desc: "No pre-packaged or reheated meals — everything is made in our kitchen each morning." },
  { icon: "💧", title: "Water all day", desc: "Water bottles are refilled and offered throughout the day, not just at mealtimes." },
  { icon: "🥦", title: "Whole ingredients", desc: "Fresh vegetables, whole grains, and lean proteins — no artificial colors or flavors." },
  { icon: "📝", title: "Menus shared weekly", desc: "Full menus posted a week in advance so you can flag allergies or preferences ahead of time." },
];

const FAQS = [
  { q: "Will my child's meals be provided?", a: "Yes — breakfast, lunch, and two snacks are included in every session at no extra cost, freshly prepared in our on-site kitchen each day." },
  { q: "Who is the food provided by?", a: "All meals are cooked in-house by our own kitchen team, using fresh ingredients delivered daily — nothing is outsourced or reheated from a central supplier." },
  { q: "Do you provide formula milk?", a: "We can prepare formula using milk you provide and label with your instructions. Please discuss your brand and feeding schedule with your child's keyworker before their start date." },
  { q: "Can I provide expressed breast milk?", a: "Yes. Bring clearly labelled bottles with your child's name and the date expressed, and our team will store and warm it according to your instructions." },
  { q: "How do you manage dietary requirements?", a: "As part of our sign-up process, we capture your child's individual dietary requirements. We recognise these may be due to a medical condition, cultural preference, or weaning stage, and ask that you notify us immediately in writing if anything changes, so our records stay up to date." },
  { q: "How do you encourage good eating habits?", a: "Mealtimes are a relaxed, social experience where children are encouraged to sit, enjoy their food, and try new flavours. A team member joins the table to promote positive habits and conversation. We respect cultural differences in eating practices, and you'll receive updates on your child's meals at pickup or via our nursery app." },
];

export default function MealsPage() {
  return (
    <div className="container py-14 sm:py-16">
      <div className="max-w-[720px] mb-9">
        <span className="font-display text-[13px] uppercase tracking-wider text-sage-dark">Daily Meals &amp; Snacks</span>
        <h1 className="text-[30px] sm:text-[46px] my-3.5 mb-5">Cooked fresh, eaten together.</h1>
        <p className="text-ink-soft text-[17px]">
          Every meal is prepared on-site each morning — no reheated trays. Menus rotate weekly and
          are posted a week ahead so you always know what&apos;s coming.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
        {MENU.map((m) => (
          <div key={m.day} className="rounded-2xl border border-line bg-card p-5">
            <div className="font-display font-semibold text-sage-dark text-sm mb-2.5">{m.day}</div>
            {(["Breakfast", "Lunch", "Snack"] as const).map((label, i) => (
              <div key={label} className="border border-dashed border-line rounded-lg px-2.5 py-2 mb-2 last:mb-0 text-[13px]">
                <span className="block text-[10px] uppercase tracking-wider text-ink-soft mb-0.5">{label}</span>
                {[m.breakfast, m.lunch, m.snack][i]}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16">
        {NOTES.map((n) => (
          <div key={n.title} className="rounded-2xl p-6 bg-[#F1E9D4]">
            <h3 className="text-base mb-1.5">{n.title}</h3>
            <p className="text-[14.5px] text-ink-soft">{n.desc}</p>
          </div>
        ))}
      </div>

      <div className="mb-16">
        <h2 className="text-[22px] mb-5">Our food philosophy</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PHILOSOPHY.map((p) => (
            <div key={p.title} className="rounded-2xl border border-line bg-card p-5">
              <div className="text-xl mb-2">{p.icon}</div>
              <h3 className="text-[15px] mb-1">{p.title}</h3>
              <p className="text-[13.5px] text-ink-soft">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-[22px] mb-5">Nutrition FAQs</h2>
        <Accordion type="multiple" defaultValue={["item-4", "item-5"]} className="rounded-2xl border border-line bg-card overflow-hidden">
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
