"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Export Readiness", href: "/export-readiness" },
  { label: "Our Services", href: "/services" },
  { label: "Contact", href: "/contact" }
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-transparent bg-white/95 backdrop-blur transition-all ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/entrivo-logo.svg" alt="Entrivo logo" width={160} height={52} priority />
          <span className="hidden text-xs font-medium italic text-navy/85 xl:inline">your Bridge to ASEAN</span>
        </Link>

        <ul className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-sm font-medium text-charcoal transition hover:text-navy">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/export-readiness"
          className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition hover:opacity-90"
        >
          Free Assessment
        </Link>
      </nav>
    </header>
  );
}
