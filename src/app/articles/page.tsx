import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MotionReveal } from "@/components/MotionReveal";
import { articles } from "@/data/articles";

export default function ArticlesPage() {
  return (
    <section className="bg-warm-white">
      <div className="section-container">
        <MotionReveal>
          <div className="rounded-3xl border border-sage/30 bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy/70">Articles & Insights</p>
            <h1 className="mt-3 max-w-4xl font-heading text-4xl leading-tight text-navy md:text-5xl">
              Compliance & Regulatory Intelligence for ASEAN Expansion
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-charcoal">
              Access formal, practitioner-focused insights on compliance risk, legal readiness, and market-entry controls
              across ASEAN jurisdictions.
            </p>
          </div>
        </MotionReveal>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {articles.map((article, idx) => (
            <MotionReveal key={article.slug} delay={0.05 * idx}>
              <article className="h-full rounded-2xl border border-sage/30 bg-white p-6 shadow-sm">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-charcoal/80">
                  <span className="rounded-full bg-light-sage px-2.5 py-1 font-semibold text-navy">{article.category}</span>
                  <span>{article.publishedAt}</span>
                  <span>{article.readTime}</span>
                </div>
                <h2 className="mt-4 font-heading text-2xl leading-snug text-navy">{article.title}</h2>
                <p className="mt-3 text-sm leading-7 text-charcoal">{article.summary}</p>
                <p className="mt-5 border-t border-sage/20 pt-3 text-xs text-charcoal/80">By {article.author}</p>
                <div className="mt-5 flex items-center justify-between">
                  <Link
                    href={`/articles/${article.slug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-navy px-4 py-2 text-xs font-semibold text-white transition hover:opacity-90"
                  >
                    Read Full Brief <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
