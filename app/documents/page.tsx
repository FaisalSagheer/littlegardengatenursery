import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const CHECKLIST = [
  { title: "Completed enrollment form", desc: "Download below, or fill it out with us during your tour.", req: true },
  { title: "Child's birth certificate (copy)", desc: "Used to confirm age group placement and for our records only.", req: true },
  { title: "Immunization record", desc: "Up-to-date vaccination card or a doctor's printout.", req: true },
  { title: "Emergency contact form", desc: "Two contacts other than parents who can be reached during the day.", req: true },
  { title: "Medical & allergy disclosure", desc: "Any conditions, allergies, or medications our teachers should know about.", req: true },
  { title: "Two passport-size photos", desc: "One for your child's cubby label, one for our attendance book.", req: false },
  { title: "Authorized pickup list", desc: "Names of anyone besides parents who may collect your child.", req: false },
];

// const PARENT_DOCS = [
//   { title: "Childcare Registration & Consent Form", desc: "Child & parent details, program selection, and consent to enrol.", },
//   { title: "Revised Terms & Conditions", desc: "Our current booking, payment, and notice-period terms." },
//   { title: "All About Me Form", desc: "Help your child's keyworker get to know their routines, comforts, and personality." },
//   { title: "Required for Registration", desc: "A one-page checklist of every document needed before your child's start date." },
//   { title: "EY Log Registration & Consent Form", desc: "Early years log details and consent for observations and records." },
//   { title: "GDPR Notice", desc: "How we collect, use, and protect your family's personal data." },
//   { title: "New Parents Checklist", desc: "A friendly guide to what to expect in your child's first weeks with us." },
//   { title: "Ofsted Report", desc: "Our most recent inspection report, published in full.", action: "View report" },
// ];

const POLICY_DOCS = [
  { title: "Admissions Policy", desc: "How places are offered, priority criteria, and funded entitlement eligibility.", file: "/policies/admissions-policy.pdf" },
  { title: "Complaints Policy & Procedure", desc: "Our three-stage process for raising and resolving a concern.", file: "/policies/complaints-policy-and-procedures.pdf" },
  { title: "Data Protection & GDPR Privacy Notice", desc: "What data we hold, why, and your rights under UK GDPR.", file: "/policies/data-protection-gdpr-privacy-notice.pdf" },
  { title: "Equal Opportunities & Inclusion Policy", desc: "Our commitment to equality, diversity, and inclusion for every family.", file: "/policies/equal-opportunities-and-inclusion-policy.pdf" },
  { title: "Health & Safety Policy", desc: "How we keep children, staff, and visitors safe across the nursery.", file: "/policies/health-and-safety-policy.pdf" },
  { title: "Safeguarding & Child Protection Policy", desc: "How we recognise, record, and refer any concern about a child's welfare.", file: "/policies/safeguarding-child-protection-policy.pdf" },
];

const OPS_DOCS = [
  { title: "Settling Record", desc: "Tracks how your child settles in over their first sessions with us.", file: "/documents/settling-record.pdf" },
  { title: "Accident Form", desc: "Our record for any bump, cut, or incident, shared with you the same day.", file: "/documents/accident-form.pdf" },
  { title: "Nursery Risk Assessment Form", desc: "How we identify and control hazards across the nursery.", file: "/documents/risk-assessment-form.pdf" },
  { title: "Opening Risk Assessment Checklist", desc: "Our daily safety check completed before children arrive each morning.", file: "/documents/opening-risk-assessment-checklist.pdf" },
  { title: "Closing Risk Assessment Checklist", desc: "Our daily safety check completed after the nursery closes each evening.", file: "/documents/closing-risk-assessment-checklist.pdf" },
];

const FAQS = [
  { q: "What if my child's immunizations aren't complete?", a: "Let us know during your tour — we can work with a doctor's letter while records catch up." },
  { q: "Can I submit forms after enrollment day?", a: "Required forms should be in before your child's first day; recommended ones can follow within the first week." },
  { q: "Do you accept digital copies?", a: "Yes — email scans or clear phone photos to admissions@littlesprouts.example, or bring paper copies in." },
  { q: "Who can I add to the pickup list later?", a: "Update it anytime by messaging the front desk — changes take effect the same day." },
];

function DocCard({ title, desc, file, action = "Download form" }: { title: string; desc: string; file?: string; action?: string }) {
  return (
    <div className="border-2 border-ink rounded-2xl bg-card p-6 flex flex-col gap-2.5">
      <span className="self-start font-display text-[11px] uppercase tracking-wider bg-ink text-white px-2.5 py-1 rounded -mt-6 -ml-0.5">
        PDF
      </span>
      <h3 className="text-[16.5px]">{title}</h3>
      <p className="text-sm text-ink-soft flex-1">{desc}</p>
      {file ? (
        <a href={file} download className="font-display font-semibold text-sm text-sage-dark inline-flex items-center gap-1.5">
          {action} ↓
        </a>
      ) : (
        <span className="font-display font-semibold text-sm text-ink-soft/60 inline-flex items-center gap-1.5" title="Connect a real file to enable this download">
          {action} ↓
        </span>
      )}
    </div>
  );
}

export default function DocumentsPage() {
  return (
    <div className="container py-14 sm:py-16">
      <div className="max-w-[720px] mb-9">
        <span className="font-display text-[13px] uppercase tracking-wider text-sage-dark">Before You Enroll</span>
        <h1 className="text-[30px] sm:text-[46px] my-3.5 mb-5">Everything to bring, in one place.</h1>
        <p className="text-ink-soft text-[17px]">
          A spot is only confirmed once we have these on file. Most families finish the whole list
          in one visit — bring copies if you can, we&apos;ll photocopy anything you forget.
        </p>
      </div>

      <div className="rounded-2xl border border-line bg-card mb-11 overflow-hidden">
        {CHECKLIST.map((c, i) => (
          <div key={c.title} className={`flex items-start gap-4 px-6 sm:px-7 py-5 ${i === 0 ? "" : "border-t border-dashed border-line"}`}>
            <div className="w-[22px] h-[22px] rounded-md border-2 border-sage text-sage flex items-center justify-center text-xs font-bold flex-none mt-0.5">✓</div>
            <div className="flex-1">
              <h3 className="text-[16.5px] mb-0.5">{c.title}</h3>
              <p className="text-[14.5px] text-ink-soft">{c.desc}</p>
            </div>
            <span className={`font-display text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full flex-none whitespace-nowrap ${c.req ? "bg-[#FBEAE3] text-[#A24B3E]" : "bg-[#E7EFE6] text-sage-dark"}`}>
              {c.req ? "Required" : "Recommended"}
            </span>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <h2 className="text-[22px] mb-1.5">Nursery operations forms</h2>
        <p className="text-ink-soft text-sm mb-5">
          These are ready to download right now — real forms we use day to day.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {OPS_DOCS.map((d) => (
            <DocCard key={d.title} {...d} />
          ))}
        </div>
      </div>

      {/* <div className="mt-14 mb-11">
        <h2 className="text-[22px] mb-1.5">Parent &amp; enrollment documents</h2>
        <p className="text-ink-soft text-sm mb-5">
          Templates for your paperwork — connect real files to these before launch.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PARENT_DOCS.map((d) => (
            <DocCard key={d.title} {...d} action={d.action} />
          ))}
        </div>
      </div> */}

<div className="mt-14 mb-11">
  <h2 className="text-[22px] mb-1.5">Policies</h2>
  <p className="text-ink-soft text-sm mb-5">
    Our full policies, ready to download documents.
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
    {POLICY_DOCS.map((d) => (
      <DocCard key={d.title} {...d} />
    ))}
  </div>
</div>

      <div className="rounded-2xl bg-[#F1E9D4] p-6 flex gap-4 items-start mb-11">
        <div className="w-[38px] h-[38px] rounded-xl bg-mustard flex items-center justify-center text-base flex-none">💡</div>
        <p className="text-[14.5px] text-ink-soft">
          <strong className="block font-display text-ink mb-0.5">No printer at home?</strong>
          That&apos;s fine — every form is also available on paper at the front desk, and we&apos;re
          happy to walk through them with you during your tour.
        </p>
      </div>

      <div>
        <h2 className="text-[22px] mb-5">Common questions</h2>
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
