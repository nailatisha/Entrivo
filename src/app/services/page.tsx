import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Entrivo",
  description: "Explore Entrivo's modular ASEAN expansion consulting services for Indonesian MSMEs."
};

const modules = [
  {
    title: "Market Intelligence and Strategy",
    items: ["Market potential assessment by country", "Competitor mapping and positioning", "Market-entry strategy and roadmap"]
  },
  {
    title: "Sales, Retail, and Distribution",
    items: ["Channel partner identification", "Retail and distributor matchmaking", "Go-to-market execution planning"]
  },
  {
    title: "Legal, Compliance, and Regulatory Affairs",
    items: ["Legal entity and licensing advisory", "Product compliance and certification guidance", "Cross-border regulatory support"]
  },
  {
    title: "Finance and Trade Support",
    items: ["Trade documentation readiness", "Funding and expansion capital planning", "Payment and trade risk advisory"]
  }
];

export default function ServicesPage() {
  return (
    <section className="section-container">
      <h1 className="font-heading text-4xl text-navy">Our Services</h1>
      <p className="mt-4 max-w-3xl text-charcoal">
        Every module is designed to be practical, scalable, and MSME-friendly. Mix and match services based on your needs and budget.
      </p>

      <div className="mt-10 space-y-6">
        {modules.map((module) => (
          <article key={module.title} className="rounded-2xl border border-sage/35 bg-white p-6 shadow-sm">
            <h2 className="font-heading text-2xl text-navy">{module.title}</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm">
              {module.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <button className="mt-6 rounded-full bg-gold px-5 py-2 text-sm font-semibold text-navy">
              Request This Service
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
