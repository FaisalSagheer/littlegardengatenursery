"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/amenities", label: "Amenities" },
  { href: "/meals", label: "Meals & Snacks" },
  { href: "/documents", label: "Documents" },
  { href: "/careers", label: "Careers" },
  { href: "/fees", label: "Fees & Admission" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-sm">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2.5 font-display text-lg font-bold">
          <svg width="34" height="34" viewBox="0 0 40 40" fill="none" aria-hidden="true">
            <circle cx="20" cy="20" r="19" fill="#7E9B7E" />
            <path d="M20 27V15" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M20 18C20 13 15 12 12 13C12 17 15 20 20 18Z" fill="#E8AF3F" />
            <path d="M20 18C20 13 25 12 28 13C28 17 25 20 20 18Z" fill="#D98A93" />
          </svg>
          Little Sprouts
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5 overflow-x-auto max-w-[640px]">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "whitespace-nowrap rounded-full px-3.5 py-2 font-display text-sm font-medium text-ink-soft transition-colors hover:bg-[#F1E9D4] hover:text-ink",
                pathname === link.href && "bg-sage text-white hover:bg-sage hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild size="sm">
            <Link href="/contact">Book a Tour</Link>
          </Button>
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden container flex flex-wrap gap-2 pb-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "whitespace-nowrap rounded-full bg-[#F1E9D4] px-3.5 py-2 font-display text-sm font-medium text-ink-soft",
                pathname === link.href && "bg-sage text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
