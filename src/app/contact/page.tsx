import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Entrivo",
  description: "Reach out to Entrivo and start your ASEAN expansion journey."
};

export default function ContactPage() {
  return (
    <section className="section-container">
      <h1 className="font-heading text-4xl text-navy">Contact Us</h1>
      <p className="mt-4 max-w-2xl text-charcoal">
        Not sure where to start? Let us help you find the right service.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <form className="space-y-4 rounded-2xl border border-sage/35 bg-white p-6">
          <input className="w-full rounded-lg border border-sage/40 px-4 py-2 text-sm" placeholder="Full Name" />
          <input className="w-full rounded-lg border border-sage/40 px-4 py-2 text-sm" placeholder="Email Address" type="email" />
          <input className="w-full rounded-lg border border-sage/40 px-4 py-2 text-sm" placeholder="Business Name" />
          <select className="w-full rounded-lg border border-sage/40 px-4 py-2 text-sm" defaultValue="">
            <option value="" disabled>Select Interested Service</option>
            <option>Market Intelligence and Strategy</option>
            <option>Sales, Retail, and Distribution</option>
            <option>Legal, Compliance, and Regulatory Affairs</option>
            <option>Finance and Trade Support</option>
          </select>
          <textarea className="h-32 w-full rounded-lg border border-sage/40 px-4 py-2 text-sm" placeholder="Your message" />
          <button className="rounded-full bg-navy px-6 py-2 text-sm font-semibold text-white">Send Message</button>
        </form>

        <article className="rounded-2xl bg-light-sage p-6">
          <h2 className="font-heading text-2xl text-navy">Entrivo Contact Information</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Email: hello@entrivo.id</li>
            <li>Phone: +62 811-1234-5678</li>
            <li>Location: Jakarta, Indonesia</li>
            <li>LinkedIn: Entrivo</li>
            <li>Instagram: @entrivo.id</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
