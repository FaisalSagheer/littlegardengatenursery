"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/fees", label: "Fees & Admission" },
  { href: "/meals", label: "Meals & Snacks" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-sm">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2.5 font-display text-lg font-bold">
          <Image src={"/images/logo.png"} alt={"Logo"} priority width={50} height={50} className="size-10" />
          Little Garden Gate Nursery
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
