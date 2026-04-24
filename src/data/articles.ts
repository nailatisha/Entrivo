export type Article = {
  slug: string;
  title: string;
  category: string;
  publishedAt: string;
  author: string;
  readTime: string;
  summary: string;
  content: string[];
};

export const articles: Article[] = [
  {
    slug: "compliance-risk-asean-market-entry",
    title: "Understanding Compliance Risk for ASEAN Market Entry",
    category: "Compliance & Regulation",
    publishedAt: "April 2026",
    author: "Entrivo Research Team",
    readTime: "6 min read",
    summary:
      "A practical guide to identifying licensing, tax, and product regulation risks when Indonesian businesses expand across ASEAN.",
    content: [
      "Entering ASEAN can unlock major growth opportunities, but every country has a different compliance landscape. A strategy that works in Indonesia may not be acceptable in Singapore, Vietnam, or Thailand without local adjustments.",
      "The first risk area is licensing and legal entity structure. Some sectors require foreign businesses to partner with local entities, while others permit full ownership but require specific permits before commercial activity starts.",
      "The second area is tax and reporting obligations. VAT/GST registration thresholds, withholding rules, and documentation standards differ by country. Late registration or inaccurate filings can quickly lead to penalties and reputational damage.",
      "The third area is product and consumer protection regulation. Labeling language, safety certifications, and marketing claims often need adaptation. This is especially critical for food, health, and consumer goods categories.",
      "To reduce compliance risk, businesses should map obligations by market before launch, assign clear internal ownership for each requirement, and work with local advisors who can interpret regulatory updates early.",
      "Compliance should be treated as a growth enabler, not only a legal checklist. Companies that invest in robust compliance from day one enter markets faster and build stronger long-term trust with customers and partners."
    ]
  },
  {
    slug: "building-asean-regulatory-playbook",
    title: "How to Build an ASEAN Regulatory Playbook for MSMEs",
    category: "Market Expansion Strategy",
    publishedAt: "April 2026",
    author: "Entrivo Advisory Team",
    readTime: "5 min read",
    summary:
      "Learn how MSMEs can standardize cross-border compliance workflows and stay audit-ready while scaling to multiple ASEAN countries.",
    content: [
      "Many MSMEs treat compliance as a one-time setup task, but cross-border expansion requires a repeatable operating model. A regulatory playbook helps teams execute market entry with fewer delays and lower risk.",
      "Start by creating a country-by-country requirement matrix that covers incorporation rules, permits, tax registrations, labor obligations, and data protection standards. Keep this matrix simple, versioned, and easy for business teams to use.",
      "Next, define a compliance timeline aligned with go-to-market milestones. For each country, identify what must be completed before signing partners, before first shipment, and before commercial launch.",
      "Then establish a monitoring cadence. ASEAN regulations can change quickly, so assign a review owner and schedule periodic checks with legal and tax advisors in each market.",
      "Finally, build an audit trail. Store permits, filings, and advisor memos in one structured repository. This improves internal decision-making and reduces stress during partner due diligence or government inspection.",
      "A strong regulatory playbook helps MSMEs scale confidently across ASEAN. Instead of reinventing processes market by market, teams can focus on execution while maintaining compliance discipline."
    ]
  }
];
