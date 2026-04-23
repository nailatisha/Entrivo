import {
  BarChart3,
  FileCheck,
  Handshake,
  Scale,
  ShieldCheck,
  Wallet
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const industries = [
  "Food and Beverage",
  "Fashion and Apparel",
  "Cosmetics and Beauty",
  "Handicrafts and Home Decor",
  "Electronics and Gadgets",
  "Agriculture and Plantation",
  "Health and Wellness",
  "Other"
] as const;

export const yearsInOperationOptions = [
  "Less than 1 year",
  "1 to 3 years",
  "3 to 5 years",
  "More than 5 years"
] as const;

export const employeeCountOptions = ["1 to 5", "6 to 19", "20 to 99", "100 or more"] as const;

export const aseanCountries = [
  "Malaysia",
  "Singapore",
  "Thailand",
  "Vietnam",
  "Philippines",
  "Cambodia",
  "Myanmar",
  "Brunei"
] as const;

export const productionCapacityOptions = [
  "Less than 100 units",
  "100 to 500 units",
  "500 to 2000 units",
  "More than 2000 units"
] as const;

export const exportBudgetOptions = [
  "Under IDR 5 million",
  "IDR 5 to 20 million",
  "IDR 20 to 50 million",
  "Above IDR 50 million"
] as const;

export const certifications = ["Halal", "SNI", "BPOM", "ISO", "None"] as const;

export const demandLevels = ["High", "Moderate", "Growing"] as const;
export const competitionLevels = ["Low", "Moderate", "High"] as const;

export const verdicts = {
  improvement:
    "Your business has room to grow before ASEAN expansion — but you're closer than you think.",
  developing:
    "Your business is developing well but needs support in key areas before entering ASEAN markets.",
  ready: "Your business shows strong foundational readiness for ASEAN expansion."
};

export type ServiceModule = {
  name: string;
  reasonTemplate: string;
  icon: LucideIcon;
};

export const serviceModules: ServiceModule[] = [
  {
    name: "Market Intelligence and Strategy",
    reasonTemplate: "Helps validate demand patterns and position your offering in {country}.",
    icon: BarChart3
  },
  {
    name: "Sales, Retail, and Distribution",
    reasonTemplate: "Supports channel setup and distributor outreach for your first market entry sprint.",
    icon: Handshake
  },
  {
    name: "Legal, Compliance, and Regulatory Affairs",
    reasonTemplate: "Reduces compliance risk by preparing certifications and market-specific legal requirements.",
    icon: Scale
  },
  {
    name: "Finance and Trade Support",
    reasonTemplate: "Strengthens budgeting, trade documentation, and cash-flow planning for export operations.",
    icon: Wallet
  },
  {
    name: "Product Certification Readiness",
    reasonTemplate: "Accelerates approval readiness for product certifications expected by regional buyers.",
    icon: FileCheck
  },
  {
    name: "Risk and Quality Assurance",
    reasonTemplate: "Builds process consistency and quality controls before scaling into cross-border demand.",
    icon: ShieldCheck
  }
];

export const actionSteps = [
  "Register your product with the relevant certification body in your target country.",
  "Open a dedicated business bank account to manage export revenues.",
  "Identify a local distribution partner in {country}.",
  "Review ATIGA rules of origin to ensure your product qualifies for preferential tariffs.",
  "Prepare a bilingual product catalog for your target market.",
  "Run a pilot shipment plan with clear Incoterms and timeline checkpoints.",
  "Create a simple export compliance checklist for your operations team.",
  "Define a market-entry pricing strategy aligned with local purchasing power."
];

export const industryPriceRanges: Record<string, string[]> = {
  "Food and Beverage": [
    "IDR 28,000 to IDR 52,000 per unit",
    "IDR 45,000 to IDR 85,000 per unit",
    "IDR 85,000 to IDR 150,000 per unit"
  ],
  "Fashion and Apparel": [
    "IDR 120,000 to IDR 240,000 per item",
    "IDR 220,000 to IDR 480,000 per item",
    "IDR 350,000 to IDR 750,000 per item"
  ],
  "Cosmetics and Beauty": [
    "IDR 40,000 to IDR 95,000 per item",
    "IDR 95,000 to IDR 210,000 per item",
    "IDR 180,000 to IDR 380,000 per item"
  ],
  "Handicrafts and Home Decor": [
    "IDR 95,000 to IDR 220,000 per piece",
    "IDR 220,000 to IDR 480,000 per piece",
    "IDR 450,000 to IDR 980,000 per piece"
  ],
  "Electronics and Gadgets": [
    "IDR 280,000 to IDR 620,000 per unit",
    "IDR 600,000 to IDR 1,250,000 per unit",
    "IDR 1,200,000 to IDR 2,500,000 per unit"
  ],
  "Agriculture and Plantation": [
    "IDR 22,000 to IDR 48,000 per kg",
    "IDR 45,000 to IDR 95,000 per kg",
    "IDR 85,000 to IDR 180,000 per kg"
  ],
  "Health and Wellness": [
    "IDR 55,000 to IDR 125,000 per item",
    "IDR 120,000 to IDR 280,000 per item",
    "IDR 250,000 to IDR 520,000 per item"
  ],
  Other: ["IDR 75,000 to IDR 160,000 per unit", "IDR 150,000 to IDR 320,000 per unit"]
};
