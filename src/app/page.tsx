import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Handshake,
  Coins
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { MotionReveal } from "@/components/MotionReveal";

const advantages: { title: string; text: string; icon: LucideIcon }[] = [
  { title: "Fully Digital", text: "Access services through one integrated website platform.", icon: Building2 },
  { title: "Modular & Affordable", text: "Pay only for the services your business actually needs.", icon: Coins },
  { title: "ASEAN Expert Network", text: "Work with trusted local partners in every key ASEAN market.", icon: Handshake },
  { title: "Single Point of Accountability", text: "One partner guiding your full expansion journey.", icon: BadgeCheck }
];

export default function HomePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-sage/45 via-light-sage to-warm-white">
        <div className="section-container grid items-center gap-8 lg:grid-cols-2">
          <MotionReveal>
            <h1 className="font-heading text-4xl font-semibold leading-tight text-navy sm:text-5xl">
              Your Bridge to ASEAN Starts Here
            </h1>
            <p className="mt-6 max-w-xl text-lg text-charcoal">
              Entrivo helps Indonesian MSMEs expand into Southeast Asian markets through professional, affordable, and fully
              digital consulting services.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/export-readiness" className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy">
                Start Free Assessment
              </Link>
              <Link href="/services" className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white">
                Explore Our Services
              </Link>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.2}>
            <div className="rounded-3xl border border-sage/40 bg-white/70 p-8 shadow-lg">
              <p className="font-heading text-2xl text-navy">Get Clarity in 3 Minutes</p>
              <p className="mt-2 text-sm text-charcoal">
                Take our free Export Readiness Assessment and receive a simulated ASEAN market snapshot tailored to your profile.
              </p>
              <div className="mt-6 grid grid-cols-5 gap-2">
                {Array.from({ length: 20 }).map((_, idx) => (
                  <div key={idx} className="h-4 rounded-full bg-gradient-to-r from-navy/30 to-sage/60" />
                ))}
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="bg-light-sage" id="why-entrivo">
        <div className="section-container">
          <MotionReveal>
            <h2 className="font-heading text-3xl text-navy">Why Choose Entrivo</h2>
          </MotionReveal>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {advantages.map((item) => (
              <article key={item.title} className="rounded-2xl border border-sage/30 bg-white p-6 shadow-sm">
                <item.icon className="h-5 w-5 text-gold" />
                <h3 className="mt-3 font-heading text-2xl text-navy">{item.title}</h3>
                <p className="mt-2 text-sm">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services-preview">
        <div className="section-container">
          <MotionReveal>
            <h2 className="font-heading text-3xl text-navy">What You Can Do Here</h2>
          </MotionReveal>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-sage/30 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-navy">1. Assess Readiness</p>
              <p className="mt-2 text-sm">Get a fast export score and market snapshot for your target ASEAN country.</p>
            </article>
            <article className="rounded-2xl border border-sage/30 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-navy">2. Pick Services</p>
              <p className="mt-2 text-sm">Choose only the consulting modules relevant to your business stage.</p>
            </article>
            <article className="rounded-2xl border border-sage/30 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-navy">3. Start Expansion</p>
              <p className="mt-2 text-sm">Work with Entrivo experts to execute a practical market-entry plan.</p>
            </article>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/services" className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white">
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="rounded-full border border-navy px-6 py-3 text-sm font-semibold text-navy">
              Talk to Consultant
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-navy text-center text-white">
        <div className="section-container">
          <h2 className="font-heading text-4xl">Ready to Take Your Business to ASEAN?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/90">
            Start with a quick assessment, then get the right support from Entrivo.
          </p>
          <Link href="/export-readiness" className="mt-6 inline-flex items-center rounded-full bg-gold px-8 py-3 font-semibold text-navy">
            Start Free Assessment
          </Link>
        </div>
      </section>
    </>
  );
}
