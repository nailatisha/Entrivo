import Link from "next/link";
import { notFound } from "next/navigation";
import { MotionReveal } from "@/components/MotionReveal";
import { articles } from "@/data/articles";

type ArticlePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug
  }));
}

export default function ArticleDetailPage({ params }: ArticlePageProps) {
  const article = articles.find((item) => item.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <section className="bg-warm-white">
      <div className="section-container max-w-4xl">
        <MotionReveal>
          <Link href="/articles" className="text-xs font-semibold uppercase tracking-[0.14em] text-navy/70 hover:text-navy">
            Articles / Insights
          </Link>
          <div className="mt-4 rounded-3xl border border-sage/30 bg-white p-7 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-navy/70">{article.category}</p>
            <h1 className="mt-3 font-heading text-4xl leading-tight text-navy">{article.title}</h1>
            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-sm text-charcoal/80">
              <p>{article.publishedAt}</p>
              <p>{article.readTime}</p>
              <p>By {article.author}</p>
            </div>
          </div>
        </MotionReveal>

        <div className="mt-8 rounded-3xl border border-sage/25 bg-white p-7 shadow-sm">
          <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-navy/70">Executive Brief</h2>
          <div className="mt-5 space-y-5 text-sm leading-8 text-charcoal">
          {article.content.map((paragraph, idx) => (
            <MotionReveal key={paragraph.slice(0, 25)} delay={0.05 * idx}>
              <p>{paragraph}</p>
            </MotionReveal>
          ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Speak to a Consultant
          </Link>
          <Link
            href="/export-readiness"
            className="rounded-full border border-navy px-6 py-3 text-sm font-semibold text-navy"
          >
            Start Free Assessment
          </Link>
        </div>
      </div>
    </section>
  );
}
