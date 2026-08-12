import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const MENU = [
  { day: "Monday", breakfast: "Porridge with banana & raisins", lunch: "Chicken casserole with mash & seasonal veg", snack: "Apple slices & milk" },
  { day: "Tuesday", breakfast: "Toast with scrambled egg", lunch: "Lentil dhal with rice & cucumber sticks", snack: "Yoghurt & berries" },
  { day: "Wednesday", breakfast: "Weetabix with milk & fruit", lunch: "Vegetable pasta bake & mixed salad", snack: "Carrot sticks & hummus" },
  { day: "Thursday", breakfast: "Wholemeal toast with soft cheese", lunch: "Fish fingers, new potatoes & peas", snack: "Cheese & crackers" },
  { day: "Friday", breakfast: "Pancakes with fruit purée", lunch: "Jacket potato with beans & salad", snack: "Banana & water" },
];

const NOTES = [
  { title: "Allergy-aware kitchen", desc: "Every dish is clearly labelled for common allergens. Suitable substitutes are always available on request at no extra cost." },
  { title: "No added sugar before 2", desc: "Meals for our under-twos contain no added sugar or salt, in line with NHS and Early Years Foundation Stage guidance." },
  { title: "if you prefer", desc: "We're happy to warm and serve home-packed lunches alongside our menu — just label the container clearly with your child's name." },
];

const PHILOSOPHY = [
  { icon: "👩‍🍳", title: "Catering & Meals", desc: "We don't have an on-site kitchen. Instead, we partner with a catering company, Zebeedes, who provides our food." },
  { icon: "💧", title: "Water throughout the day", desc: "Fresh drinking water is freely available and offered regularly, not just at mealtimes." },
  { icon: "🥦", title: "Whole, fresh ingredients", desc: "We use fresh vegetables, wholegrains and lean proteins. No artificial colours, flavours or additives." },
  { icon: "📝", title: "Menus shared weekly", desc: "Full menus are posted a week in advance so you can flag any allergies or preferences in good time." },
];

const FAQS = [
  {
    q: "Will my child’s meals be provided?",
    a: "Yes — breakfast, lunch and one snack are included in every session at no extra cost. All food is freshly prepared and delivered each day by our specialist nursery catering partners.",
  },
  {
    q: "Who provides the food?",
    a: "Our meals are supplied by Zebedees, one of the UK’s leading nursery catering companies. They have more than 25 years’ experience providing nutritious, balanced, EYFS-compliant meals for young children across London and the South East. Everything is freshly cooked and delivered hot each day, with menus designed to support healthy growth and a wide variety of tastes and textures.",
  },
  {
    q: "Do you provide formula milk?",
    a: "We can prepare formula using milk that you supply, following your written instructions. Please discuss your preferred brand and feeding schedule with your child’s key person before their start date.",
  },
  {
    q: "Can I provide expressed breast milk?",
    a: "Yes. Please bring clearly labelled bottles with your child’s name and the date expressed. Our team will store and warm it according to your instructions.",
  },
  {
    q: "How do you manage dietary requirements?",
    a: "As part of our registration process we record your child’s individual dietary needs, whether medical, cultural or related to weaning stage. Please notify us in writing immediately if anything changes so our records remain accurate.",
  },
  {
    q: "How do you encourage good eating habits?",
    a: "Mealtimes are relaxed and social. Children are encouraged to sit together, enjoy their food and try new flavours. A member of the team sits with them to model positive habits and conversation. We respect cultural differences in eating practices, and you’ll receive updates on your child’s meals at collection or via our nursery app.",
  },
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