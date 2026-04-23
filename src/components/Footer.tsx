import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="section-container grid gap-8 py-12 md:grid-cols-3">
        <div>
          <Image src="/entrivo-logo.svg" alt="Entrivo logo" width={170} height={56} />
          <p className="mt-3 text-sm text-zinc-300">your Bridge to ASEAN</p>
        </div>

        <div>
          <p className="mb-3 font-semibold">Quick Links</p>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/export-readiness">Export Readiness</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Our Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="mb-3 font-semibold">Contact Us</p>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li>hello@entrivo.id</li>
            <li>+62 811-1234-5678</li>
            <li>LinkedIn: Entrivo</li>
            <li>Instagram: @entrivo.id</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-zinc-700 py-4 text-center text-xs text-zinc-400">
        © {new Date().getFullYear()} Entrivo. All rights reserved.
      </div>
    </footer>
  );
}
