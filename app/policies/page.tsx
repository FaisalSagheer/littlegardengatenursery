const GROUPS = [
  { cat: "Food", items: ["Allergy & dietary requirements policy", "Mealtime procedure"] },
  {
    cat: "Environment",
    items: [
      "Behaviour policy",
      "Biting policy",
      "Concerns & complaints procedure",
      "Lost or missing child procedure",
      "No smoking / vaping policy",
      "Outing procedure",
      "Sleep procedure",
      "SEND & disabilities policy",
    ],
  },
  { cat: "Security", items: ["Fire prevention & emergency evacuation procedure", "Health & safety policy", "Visitor policy"] },
  {
    cat: "Safeguarding",
    items: [
      "Safeguarding children policy",
      "Safe recruitment policy & procedure",
      "Absence & attendance policy",
      "CCTV policy",
      "Equality & diversity policy",
      "Failure to collect procedure",
      "Nappy changing & toileting procedure",
      "Team induction procedures",
    ],
  },
  { cat: "Medicine & Illness", items: ["Illness & infection procedure", "Medication administration procedure"] },
  { cat: "General", items: ["Privacy notice", "Complaints procedure", "Working in partnership with parents", "British values statement"] },
];

const OPS_DOCS = [
  { title: "Safeguarding Child Protection Policy", desc: "", file: "/policies/safeguarding-child-protection-policy.pdf" },
  { title: "Compliants Policy and procedure", desc: "", file: "/policies/compliants-policy-and-procedures.pdf" },
  { title: "Admissions Policy", desc: "", file: "/policies/admissions-policy.pdf" },
  { title: "Health & Safety Policy", desc: "", file: "/policies/health-and-safety-policy.pdf" },
  { title: "Equal Opportunities and Inclusion Policy", desc: "", file: "/policies/equal-opportunities-and-inclusion-policy.pdf" },
  { title: "Data Protection & GDPR Privacy", desc: "", file: "/policies/data-protection.pdf" },
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

export default function PoliciesPage() {
  return (
    <div className="container py-14 sm:py-16">
      <div className="max-w-[720px] mb-9">
        <span className="font-display text-[13px] uppercase tracking-wider text-sage-dark">Policies &amp; Procedures</span>
        <h1 className="text-[30px] sm:text-[46px] my-3.5 mb-5">Everything we do, written down.</h1>
        <p className="text-ink-soft text-[17px]">
          Full copies of every policy are available on request from our Nursery Manager — here&apos;s
          what each category covers.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-11">
        {GROUPS.map((g) => (
          <div key={g.cat} className="rounded-2xl border border-line bg-card p-6 pb-2">
            <span className="inline-block font-display text-xs uppercase tracking-wider bg-[#E7EFE6] text-sage-dark px-3 py-1.5 rounded-full mb-3.5">
              {g.cat}
            </span>
            <ul>
              {g.items.map((item, i) => (
                <li key={item} className={`py-2.5 text-[14.5px] flex justify-between items-center gap-2.5 ${i === 0 ? "" : "border-t border-dashed border-line"}`}>
                  {item}
                  <span className="text-ink-soft text-xs flex-none">↓</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <h2 className="text-[22px] mb-1.5">Policies & Procedures forms</h2>
        <p className="text-ink-soft text-sm mb-5">
          These are ready to download right now — real forms we use day to day.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {OPS_DOCS.map((d) => (
            <DocCard key={d.title} {...d} />
          ))}
        </div>
      </div>
      <div className="rounded-2xl bg-[#E6EEF3] p-7">
        <strong className="block font-display mb-1">Want the full document?</strong>
        <p className="text-[14.5px] text-ink-soft">
          Every <span className="capitalize font-bold">policy and procedure </span>above is available in full as a PDF
        </p>
      </div>
    </div>
  );
}
