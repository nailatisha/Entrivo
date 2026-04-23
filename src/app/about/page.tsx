import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Entrivo",
  description: "Learn about Entrivo's vision, mission, and purpose in helping Indonesian MSMEs expand across ASEAN."
};

export default function AboutPage() {
  return (
    <section className="section-container">
      <h1 className="font-heading text-4xl text-navy">About Entrivo</h1>
      <p className="mt-4 max-w-3xl text-charcoal">
        Entrivo was founded to close the gap between MSME ambition and cross-border execution. We believe Indonesian businesses of every size deserve clear access to ASEAN opportunities.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <article className="rounded-2xl border border-sage/35 bg-white p-6">
          <h2 className="font-heading text-2xl text-navy">Vision</h2>
          <p className="mt-3 text-sm">
            To become the most trusted digital bridge for Indonesian MSMEs entering Southeast Asian markets.
          </p>
        </article>
        <article className="rounded-2xl border border-sage/35 bg-white p-6">
          <h2 className="font-heading text-2xl text-navy">Mission</h2>
          <p className="mt-3 text-sm">
            Deliver modular, affordable, and expert-led consulting that transforms regional expansion into a practical growth path.
          </p>
        </article>
      </div>

      <article className="mt-6 rounded-2xl bg-light-sage p-6">
        <h2 className="font-heading text-2xl text-navy">Noble Purpose</h2>
        <p className="mt-3 text-sm">
          We exist to empower business owners with confidence, clarity, and trusted support, so expanding beyond borders feels possible, not overwhelming.
        </p>
      </article>

      <section className="mt-8">
        <h2 className="font-heading text-3xl text-navy">Our Team</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["Strategy Lead", "Market Analyst", "Regulatory Specialist", "Partnership Manager"].map((role) => (
            <article key={role} className="rounded-2xl border border-sage/35 bg-white p-5 text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-sage/40" />
              <p className="mt-4 font-semibold text-navy">{role}</p>
              <p className="text-xs text-charcoal">Team Member Placeholder</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
