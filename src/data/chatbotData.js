const fallbackResponse =
  "I'm sorry, I didn't quite catch that. You can ask me about Entrivo's services, ASEAN markets, export regulations, pricing, or how to get started. Or, click the button below to speak directly with one of our consultants!";

export const chatbotKnowledgeBase = [
  // Category 1 - About Entrivo
  {
    keywords: ["what is entrivo", "entrivo", "about entrivo"],
    response:
      "Entrivo is a website-based digital consulting ecosystem that helps Indonesian MSMEs expand their businesses into ASEAN markets. We provide modular support across strategy, sales, legal, and finance so businesses can scale regionally with confidence."
  },
  {
    keywords: ["who are you", "about", "what do you do"],
    response:
      "I am Entrivo AI Assistant, your virtual guide on the Entrivo platform. I can help explain our services, ASEAN market options, pricing model, and export preparation steps for Indonesian MSMEs."
  },
  {
    keywords: ["your bridge to asean", "tagline", "mission"],
    response:
      "Entrivo's tagline is 'your Bridge to ASEAN'. Our mission is to make regional expansion simpler, faster, and more affordable for Indonesian MSMEs through practical digital consulting tools."
  },
  // Category 2 - Services
  {
    keywords: ["services", "what do you offer", "modules"],
    response: [
      "Entrivo offers four core service modules:",
      "1) Market Intelligence and Strategy, 2) Sales and Distribution, 3) Legal and Compliance, and 4) Finance and Trade Support. You can choose one module or combine them based on your needs."
    ]
  },
  {
    keywords: ["market intelligence", "strategy", "market research"],
    response:
      "Our Market Intelligence and Strategy module helps you evaluate demand, competitor landscape, pricing benchmarks, and entry strategy before launching in an ASEAN country."
  },
  {
    keywords: ["sales", "distribution", "channel partner"],
    response:
      "Our Sales and Distribution module supports channel mapping, distributor outreach, lead generation planning, and go-to-market execution for your target ASEAN market."
  },
  {
    keywords: ["legal service", "compliance service", "legal"],
    response:
      "The Legal and Compliance module helps you navigate product registration, labeling rules, market-entry permits, and contract/legal risk checks in each ASEAN market."
  },
  {
    keywords: ["finance", "trade support", "payment", "trade finance"],
    response:
      "Finance and Trade Support covers export costing, payment terms, trade documentation readiness, and support to improve transaction security and cash-flow planning."
  },
  // Category 3 - Pricing and Modularity
  {
    keywords: ["price", "cost", "how much", "pricing"],
    response:
      "Entrivo uses a modular pricing model, so you only pay for the service modules you actually need. There are no mandatory all-in bundles, making it more affordable for MSMEs at different growth stages."
  },
  {
    keywords: ["affordable", "budget", "cheap", "expensive"],
    response:
      "Entrivo is designed to stay MSME-friendly. You can start with your highest-priority module first, control spending, and expand your support package as your export journey progresses."
  },
  {
    keywords: ["modular", "package", "pay", "subscription"],
    response:
      "Our model is pay-for-what-you-need, not locked subscription bundles. You can begin with one module and add more only when needed for your ASEAN expansion milestones."
  },
  // Category 4 - ASEAN Market Questions
  {
    keywords: ["which country", "best market", "target market", "asean market"],
    response:
      "The best ASEAN market depends on your product category, pricing, and distribution readiness. In general, Malaysia is often a practical first step for Indonesian MSMEs, while Singapore is ideal for premium and digital-first positioning."
  },
  {
    keywords: ["asean", "regional", "southeast asia"],
    response:
      "ASEAN gives MSMEs access to diverse consumer bases with strong growth potential. Entrivo helps you compare market attractiveness, entry barriers, and operational requirements before choosing your first destination."
  },
  {
    keywords: ["malaysia"],
    response:
      "Malaysia is often attractive for Indonesian MSMEs due to cultural and language proximity, halal ecosystem maturity, and relatively familiar consumer preferences."
  },
  {
    keywords: ["singapore"],
    response:
      "Singapore offers high purchasing power and strong e-commerce penetration. It is suitable for businesses with quality differentiation and clear premium value positioning."
  },
  {
    keywords: ["thailand"],
    response:
      "Thailand has a large domestic market and vibrant retail ecosystem. It can be attractive for food, lifestyle, and consumer goods with localized branding strategies."
  },
  {
    keywords: ["vietnam"],
    response:
      "Vietnam is known for rapid growth, rising middle-class consumption, and expanding modern trade channels, making it promising for scalable MSME expansion."
  },
  {
    keywords: ["philippines"],
    response:
      "The Philippines has strong digital adoption and a large young population. It can be a good market for online-first products and social-commerce friendly brands."
  },
  {
    keywords: ["cambodia"],
    response:
      "Cambodia is a developing market with growing urban demand and improving retail channels. It may suit MSMEs seeking early-mover opportunities in selected categories."
  },
  {
    keywords: ["myanmar"],
    response:
      "Myanmar has long-term potential but requires careful assessment of current business conditions and regulatory considerations before entry."
  },
  {
    keywords: ["brunei"],
    response:
      "Brunei is a smaller but high-income market where premium, halal-compliant, and quality-assured products can perform well in focused segments."
  },
  // Category 5 - Export Regulations and Compliance
  {
    keywords: ["regulation", "rules", "legal requirement"],
    response:
      "Export regulations differ by destination and product category. Entrivo's Legal and Compliance module helps identify the right permits, labeling standards, and product-specific obligations before launch."
  },
  {
    keywords: ["tariff", "atiga", "duty"],
    response:
      "ATIGA (ASEAN Trade in Goods Agreement) can reduce or eliminate tariffs for eligible products traded within ASEAN, as long as origin and documentation requirements are met."
  },
  {
    keywords: ["halal", "certification", "sni", "bpom"],
    response:
      "Common certifications may include halal certification, SNI standards, and BPOM-related documentation depending on product type and target market requirements."
  },
  {
    keywords: ["customs", "import", "export", "document", "license"],
    response:
      "Typical export readiness includes customs documents, product specs, invoice/packing details, and destination-specific licensing checks. Entrivo can help map the exact documentation path."
  },
  // Category 6 - Getting Started
  {
    keywords: ["how to start", "get started", "begin", "first step"],
    response:
      "Getting started with Entrivo is simple. Begin with our free AI-Powered Export Readiness Assessment, review your readiness profile, then choose the service modules that match your current needs."
  },
  {
    keywords: ["register", "sign up", "create account"],
    response:
      "You can register through the Entrivo platform and complete your business profile. After that, you can access the readiness tools and request support from the module that fits your expansion goal."
  },
  {
    keywords: ["new", "beginner", "first time exporter"],
    response:
      "If you are new to export, Entrivo is built for you. Start with assessment and market intelligence first, then continue to legal and sales execution once your target country is validated."
  },
  // Category 7 - AI and Technology Features
  {
    keywords: ["ai", "artificial intelligence", "smart", "technology"],
    response:
      "Entrivo includes AI-enabled features to make decision making faster, such as readiness scoring, market comparison insights, and practical recommendations for your expansion journey."
  },
  {
    keywords: ["assessment", "readiness", "readiness calculator"],
    response:
      "Our AI Market Readiness Assessment Tool and Export Readiness Calculator help you evaluate your current capability and identify priority improvements before entering new ASEAN markets."
  },
  {
    keywords: ["dashboard", "data", "market intelligence dashboard", "tool"],
    response:
      "The ASEAN Market Intelligence Dashboard provides structured market snapshots so MSMEs can compare countries, opportunities, and potential entry barriers more confidently."
  },
  {
    keywords: ["chatbot", "assistant"],
    response:
      "I am Entrivo AI Assistant, a browser-based rule chatbot designed to answer common questions about services, market selection, pricing, compliance, and getting started."
  },
  // Category 8 - Contact and Support
  {
    keywords: ["contact", "reach", "email", "call"],
    response:
      "You can reach the Entrivo team through the Contact page on this platform. Share your business profile and target market, and our team will follow up with relevant next steps."
  },
  {
    keywords: ["speak", "consultant", "talk", "human"],
    response:
      "If you want direct assistance, click 'Speak to a Consultant' and our team will get back to you within one business day."
  },
  {
    keywords: ["help", "support", "customer service"],
    response:
      "I can help with common guidance right now. For detailed business-specific advice, our consultants are available through the Contact page and consultation request form."
  },
  // Category 9 - MSME Eligibility
  {
    keywords: ["msme", "umkm", "small business"],
    response:
      "Entrivo is built for Indonesian MSMEs, from micro enterprises to medium-sized businesses. Whether you are a first-time exporter or scaling regionally, our modules are designed to fit your stage."
  },
  {
    keywords: ["eligible", "who can", "qualify"],
    response:
      "Any Indonesian MSME aiming to enter or grow in ASEAN markets can use Entrivo. We support businesses across different sectors with flexible module selection."
  },
  {
    keywords: ["size", "micro", "medium"],
    response:
      "Entrivo supports micro, small, and medium businesses. You can begin with lightweight support and gradually expand your service scope as your business grows."
  }
];

export function findChatbotResponse(userMessage) {
  const normalizedMessage = userMessage.toLowerCase();

  const matchedItem = chatbotKnowledgeBase.find((item) =>
    item.keywords.some((keyword) => normalizedMessage.includes(keyword.toLowerCase()))
  );

  if (!matchedItem) {
    return {
      response: fallbackResponse,
      isFallback: true
    };
  }

  return {
    response: matchedItem.response,
    isFallback: false
  };
}
