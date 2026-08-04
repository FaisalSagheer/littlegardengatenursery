import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container flex flex-wrap items-center justify-start gap-3.5 py-8">
        <p className="text-[13.5px] text-ink-soft">
          © {new Date().getFullYear()} Little Garden Gate Nursery. All rights reserved.
        </p>
        {/* <p className="text-[13.5px] text-ink-soft">Designed with care.</p> */}
      </div>

      {/* Lower footer: secondary/legal links live here, not in the main nav */}
      <div className="bg-[#F1E9D4]">
        <div className="container flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-3 text-[12.5px] text-ink-soft">
          <Link href="/policies" className="hover:text-ink hover:underline">
            Policies &amp; Procedures
          </Link>
          <span className="hidden sm:inline">·</span>
          <Link href="/documents" className="hover:text-ink hover:underline">
            Documents
          </Link>
          <span className="hidden sm:inline">·</span>
          <Link href="/contact" className="hover:text-ink hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
