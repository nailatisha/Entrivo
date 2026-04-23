"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  actionSteps,
  aseanCountries,
  certifications,
  competitionLevels,
  demandLevels,
  employeeCountOptions,
  exportBudgetOptions,
  industries,
  industryPriceRanges,
  productionCapacityOptions,
  serviceModules,
  verdicts,
  yearsInOperationOptions
} from "@/data/exportReadinessData";

type FormData = {
  businessName: string;
  industry: string;
  yearsInOperation: string;
  employees: string;
  targetCountries: string[];
  monthlyCapacity: string;
  exportBudget: string;
  priorExportExperience: "Yes" | "No" | "";
  selectedCertifications: string[];
  onlinePresence: "Yes" | "No" | "";
  financialRecords: "Yes" | "No" | "";
  consultedAgency: "Yes" | "No" | "";
};

type Report = {
  score: number;
  verdict: string;
  demand: string;
  competition: string;
  priceRange: string;
  trend: number[];
  modules: { name: string; reason: string; icon: LucideIcon }[];
  nextSteps: string[];
};

const loadingMessages = [
  "Analyzing your business profile...",
  "Scanning ASEAN market data...",
  "Calculating your export readiness score...",
  "Generating your personalized report..."
];

const initialForm: FormData = {
  businessName: "",
  industry: "",
  yearsInOperation: "",
  employees: "",
  targetCountries: [],
  monthlyCapacity: "",
  exportBudget: "",
  priorExportExperience: "",
  selectedCertifications: [],
  onlinePresence: "",
  financialRecords: "",
  consultedAgency: ""
};

const randomPick = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

const pickUnique = <T,>(arr: T[], count: number): T[] => {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

const getScoreMeta = (score: number) => {
  if (score <= 59) return { label: "Needs Improvement", color: "#F59E0B", verdict: verdicts.improvement };
  if (score <= 74) return { label: "Developing", color: "#1B3A5C", verdict: verdicts.developing };
  return { label: "Ready", color: "#16A34A", verdict: verdicts.ready };
};

function CircularGauge({ score }: { score: number }) {
  const [animatedScore, setAnimatedScore] = useState(0);
  const radius = 78;
  const circumference = 2 * Math.PI * radius;
  const meta = getScoreMeta(score);

  useEffect(() => {
    const duration = 1200;
    const steps = 30;
    const increment = score / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= score) {
        setAnimatedScore(score);
        clearInterval(timer);
      } else {
        setAnimatedScore(Math.round(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [score]);

  const dashOffset = circumference - (animatedScore / 100) * circumference;

  return (
    <div className="mx-auto flex w-full max-w-sm flex-col items-center rounded-2xl bg-white p-6 shadow-md">
      <div className="relative">
        <svg width="200" height="200" className="-rotate-90">
          <circle cx="100" cy="100" r={radius} stroke="#E5E7EB" strokeWidth="14" fill="transparent" />
          <circle
            cx="100"
            cy="100"
            r={radius}
            stroke={meta.color}
            strokeWidth="14"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 0.5s ease" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-4xl font-bold text-navy">{animatedScore}</p>
          <p className="text-xs text-charcoal">out of 100</p>
        </div>
      </div>
      <p className="mt-4 rounded-full px-3 py-1 text-sm font-semibold" style={{ color: meta.color, backgroundColor: `${meta.color}1A` }}>
        {meta.label}
      </p>
    </div>
  );
}

export default function ExportReadinessPage() {
  const [view, setView] = useState<"landing" | "form" | "loading" | "results">("landing");
  const [step, setStep] = useState(1);
  const [messageIndex, setMessageIndex] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [report, setReport] = useState<Report | null>(null);
  const [error, setError] = useState("");

  const selectedCountry = formData.targetCountries[0] || "your selected country";

  const progress = useMemo(() => (step / 3) * 100, [step]);

  useEffect(() => {
    if (view !== "loading") return;
    const textTimer = setInterval(() => setMessageIndex((prev) => (prev + 1) % loadingMessages.length), 750);
    const finishTimer = setTimeout(() => setView("results"), 3000);
    return () => {
      clearInterval(textTimer);
      clearTimeout(finishTimer);
    };
  }, [view]);

  const updateField = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const toggleMultiValue = (key: "targetCountries" | "selectedCertifications", value: string) => {
    setFormData((prev) => {
      const current = prev[key];

      if (key === "selectedCertifications" && value === "None") {
        return { ...prev, selectedCertifications: current.includes("None") ? [] : ["None"] };
      }

      if (key === "selectedCertifications" && value !== "None") {
        const withoutNone = current.filter((item) => item !== "None");
        const next = withoutNone.includes(value) ? withoutNone.filter((item) => item !== value) : [...withoutNone, value];
        return { ...prev, selectedCertifications: next };
      }

      const next = current.includes(value) ? current.filter((item) => item !== value) : [...current, value];
      return { ...prev, [key]: next };
    });
  };

  const validateCurrentStep = () => {
    if (step === 1) {
      if (!formData.businessName || !formData.industry || !formData.yearsInOperation || !formData.employees) {
        setError("Please complete all fields in Business Profile.");
        return false;
      }
    }
    if (step === 2) {
      if (
        formData.targetCountries.length === 0 ||
        !formData.monthlyCapacity ||
        !formData.exportBudget ||
        !formData.priorExportExperience
      ) {
        setError("Please complete all fields in Export Intent.");
        return false;
      }
    }
    if (step === 3) {
      if (!formData.onlinePresence || !formData.financialRecords || !formData.consultedAgency) {
        setError("Please complete all fields in Business Readiness.");
        return false;
      }
    }
    setError("");
    return true;
  };

  const generateReport = () => {
    const score = Math.floor(Math.random() * 41) + 45;
    const scoreMeta = getScoreMeta(score);
    const ranges = industryPriceRanges[formData.industry] || industryPriceRanges.Other;
    const trend = Array.from({ length: 6 }, () => Math.floor(Math.random() * 50) + 50);
    const modulesCount = Math.floor(Math.random() * 2) + 2;

    const moduleSelection = pickUnique(serviceModules, modulesCount + 1)
      .slice(0, modulesCount)
      .map((module) => ({
        name: module.name,
        reason: module.reasonTemplate.replace("{country}", selectedCountry),
        icon: module.icon
      }));

    const personalizedSteps = pickUnique(actionSteps, 4).map((item) => item.replace("{country}", selectedCountry));

    setReport({
      score,
      verdict: scoreMeta.verdict,
      demand: randomPick([...demandLevels]),
      competition: randomPick([...competitionLevels]),
      priceRange: randomPick(ranges),
      trend,
      modules: moduleSelection,
      nextSteps: personalizedSteps
    });
  };

  const handleNext = () => {
    if (!validateCurrentStep()) return;
    if (step < 3) setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setError("");
    if (step > 1) setStep((prev) => prev - 1);
    else setView("landing");
  };

  const handleGenerate = () => {
    if (!validateCurrentStep()) return;
    generateReport();
    setMessageIndex(0);
    setView("loading");
  };

  const restart = () => {
    setFormData(initialForm);
    setStep(1);
    setReport(null);
    setError("");
    setView("landing");
  };

  return (
    <div className="min-h-screen bg-warm-white">
      {view === "landing" && (
        <section className="section-container flex min-h-[75vh] items-center">
          <div className="w-full rounded-3xl bg-gradient-to-br from-navy to-[#28527e] p-8 text-white shadow-2xl md:p-12">
            <p className="text-sm uppercase tracking-[0.18em] text-gold">AI-Powered Prototype</p>
            <h1 className="mt-4 font-heading text-4xl leading-tight md:text-6xl">Is Your Business Ready for ASEAN?</h1>
            <p className="mt-5 max-w-2xl text-lg text-white/90">
              Get your free Export Readiness Score in under 3 minutes.
            </p>
            <button
              type="button"
              onClick={() => setView("form")}
              className="mt-10 rounded-full bg-gold px-8 py-3 text-sm font-semibold text-navy transition hover:opacity-90"
            >
              Start Free Assessment
            </button>
          </div>
        </section>
      )}

      {view === "form" && (
        <section className="section-container">
          <div className="mx-auto w-full max-w-4xl rounded-3xl bg-white p-6 shadow-lg md:p-8">
            <div className="mb-8">
              <div className="mb-3 flex items-center justify-between text-sm text-charcoal">
                <p className="font-semibold text-navy">Step {step} of 3</p>
                <p>{Math.round(progress)}% completed</p>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-light-sage">
                <div className="h-full rounded-full bg-sage transition-all duration-500" style={{ width: `${progress}%` }} />
              </div>
            </div>

            <div key={step} className="animate-fade-in">
              {step === 1 && (
                <div className="space-y-4">
                  <h2 className="font-heading text-3xl text-navy">Business Profile</h2>
                  <input
                    value={formData.businessName}
                    onChange={(e) => updateField("businessName", e.target.value)}
                    placeholder="Business Name"
                    className="w-full rounded-2xl border border-sage/40 px-4 py-3 focus:border-navy focus:outline-none"
                  />
                  <select
                    value={formData.industry}
                    onChange={(e) => updateField("industry", e.target.value)}
                    className="w-full rounded-2xl border border-sage/40 px-4 py-3 focus:border-navy focus:outline-none"
                  >
                    <option value="">Industry/Sector</option>
                    {industries.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <select
                    value={formData.yearsInOperation}
                    onChange={(e) => updateField("yearsInOperation", e.target.value)}
                    className="w-full rounded-2xl border border-sage/40 px-4 py-3 focus:border-navy focus:outline-none"
                  >
                    <option value="">Years in Operation</option>
                    {yearsInOperationOptions.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <select
                    value={formData.employees}
                    onChange={(e) => updateField("employees", e.target.value)}
                    className="w-full rounded-2xl border border-sage/40 px-4 py-3 focus:border-navy focus:outline-none"
                  >
                    <option value="">Number of Employees</option>
                    {employeeCountOptions.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <h2 className="font-heading text-3xl text-navy">Export Intent</h2>
                  <div>
                    <p className="mb-2 text-sm font-medium text-charcoal">Target ASEAN Country (multi-select)</p>
                    <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                      {aseanCountries.map((country) => (
                        <button
                          type="button"
                          key={country}
                          onClick={() => toggleMultiValue("targetCountries", country)}
                          className={`rounded-xl border px-3 py-2 text-sm transition ${
                            formData.targetCountries.includes(country)
                              ? "border-navy bg-navy text-white"
                              : "border-sage/40 bg-white text-charcoal"
                          }`}
                        >
                          {country}
                        </button>
                      ))}
                    </div>
                  </div>
                  <select
                    value={formData.monthlyCapacity}
                    onChange={(e) => updateField("monthlyCapacity", e.target.value)}
                    className="w-full rounded-2xl border border-sage/40 px-4 py-3 focus:border-navy focus:outline-none"
                  >
                    <option value="">Monthly Production Capacity</option>
                    {productionCapacityOptions.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <select
                    value={formData.exportBudget}
                    onChange={(e) => updateField("exportBudget", e.target.value)}
                    className="w-full rounded-2xl border border-sage/40 px-4 py-3 focus:border-navy focus:outline-none"
                  >
                    <option value="">Estimated Monthly Export Budget</option>
                    {exportBudgetOptions.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <div>
                    <p className="mb-2 text-sm font-medium text-charcoal">Prior Export Experience</p>
                    <div className="flex gap-2">
                      {(["Yes", "No"] as const).map((item) => (
                        <button
                          type="button"
                          key={item}
                          onClick={() => updateField("priorExportExperience", item)}
                          className={`rounded-xl border px-4 py-2 text-sm ${
                            formData.priorExportExperience === item
                              ? "border-navy bg-navy text-white"
                              : "border-sage/40 bg-white text-charcoal"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <h2 className="font-heading text-3xl text-navy">Business Readiness</h2>
                  <div>
                    <p className="mb-2 text-sm font-medium text-charcoal">Do you have product certifications?</p>
                    <div className="grid grid-cols-2 gap-2 md:grid-cols-5">
                      {certifications.map((item) => (
                        <button
                          type="button"
                          key={item}
                          onClick={() => toggleMultiValue("selectedCertifications", item)}
                          className={`rounded-xl border px-3 py-2 text-sm ${
                            formData.selectedCertifications.includes(item)
                              ? "border-navy bg-navy text-white"
                              : "border-sage/40 bg-white text-charcoal"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-medium text-charcoal">Do you have an active online presence?</p>
                    <div className="flex gap-2">
                      {(["Yes", "No"] as const).map((item) => (
                        <button
                          type="button"
                          key={item}
                          onClick={() => updateField("onlinePresence", item)}
                          className={`rounded-xl border px-4 py-2 text-sm ${
                            formData.onlinePresence === item
                              ? "border-navy bg-navy text-white"
                              : "border-sage/40 bg-white text-charcoal"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-medium text-charcoal">
                      Are your financial records formally documented?
                    </p>
                    <div className="flex gap-2">
                      {(["Yes", "No"] as const).map((item) => (
                        <button
                          type="button"
                          key={item}
                          onClick={() => updateField("financialRecords", item)}
                          className={`rounded-xl border px-4 py-2 text-sm ${
                            formData.financialRecords === item
                              ? "border-navy bg-navy text-white"
                              : "border-sage/40 bg-white text-charcoal"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-medium text-charcoal">
                      Have you consulted with any export agency before?
                    </p>
                    <div className="flex gap-2">
                      {(["Yes", "No"] as const).map((item) => (
                        <button
                          type="button"
                          key={item}
                          onClick={() => updateField("consultedAgency", item)}
                          className={`rounded-xl border px-4 py-2 text-sm ${
                            formData.consultedAgency === item
                              ? "border-navy bg-navy text-white"
                              : "border-sage/40 bg-white text-charcoal"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {error && <p className="mt-5 text-sm text-red-600">{error}</p>}

            <div className="mt-8 flex items-center justify-between">
              <button
                type="button"
                onClick={handleBack}
                className="rounded-full border border-navy px-6 py-2 text-sm font-semibold text-navy"
              >
                Back
              </button>
              {step < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="rounded-full bg-navy px-6 py-2 text-sm font-semibold text-white"
                >
                  Next
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleGenerate}
                  className="rounded-full bg-gold px-6 py-2 text-sm font-semibold text-navy"
                >
                  Generate My Report
                </button>
              )}
            </div>
          </div>
        </section>
      )}

      {view === "loading" && (
        <section className="flex min-h-screen flex-col items-center justify-center bg-navy px-6 text-center text-white">
          <Image src="/entrivo-logo.svg" alt="Entrivo logo" width={180} height={60} priority />
          <p className="mt-2 text-sm text-white/80">your Bridge to ASEAN</p>
          <div className="mt-10 h-2 w-full max-w-md overflow-hidden rounded-full bg-white/20">
            <div className="h-full animate-loading-bar rounded-full bg-sage" />
          </div>
          <p className="mt-6 text-lg">{loadingMessages[messageIndex]}</p>
        </section>
      )}

      {view === "results" && report && (
        <section className="section-container">
          <div className="mb-8 rounded-3xl bg-gradient-to-r from-navy to-[#2a4f77] p-6 text-white shadow-xl md:p-8">
            <p className="text-sm uppercase tracking-[0.16em] text-gold">Simulated Readiness Report</p>
            <h1 className="mt-2 font-heading text-3xl md:text-4xl">{formData.businessName}, here is your ASEAN snapshot</h1>
            <p className="mt-3 max-w-3xl text-sm text-white/90">
              This prototype generates simulated insights from realistic local data arrays to demonstrate Entrivo&apos;s
              AI-assisted export advisory experience.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl bg-white p-6 shadow-md">
              <h2 className="font-heading text-3xl text-navy">Export Readiness Score</h2>
              <CircularGauge score={report.score} />
              <p className="mt-4 text-center text-sm text-charcoal">{report.verdict}</p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-md">
              <h2 className="font-heading text-3xl text-navy">Market Opportunity in {selectedCountry}</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-light-sage p-4">
                  <p className="text-xs text-charcoal">Estimated Market Demand</p>
                  <p className="mt-2 font-semibold text-navy">{report.demand}</p>
                </div>
                <div className="rounded-2xl bg-light-sage p-4">
                  <p className="text-xs text-charcoal">Competition Level</p>
                  <p className="mt-2 font-semibold text-navy">{report.competition}</p>
                </div>
                <div className="rounded-2xl bg-light-sage p-4">
                  <p className="text-xs text-charcoal">Recommended Entry Price Range</p>
                  <p className="mt-2 font-semibold text-navy">{report.priceRange}</p>
                </div>
              </div>

              <div className="mt-6">
                <p className="mb-3 text-sm font-semibold text-charcoal">Demand Trend (6 Months)</p>
                <div className="grid grid-cols-6 items-end gap-2">
                  {report.trend.map((value, idx) => (
                    <div key={`month-${idx}`} className="flex flex-col items-center gap-2">
                      <div
                        className="w-full rounded-t-lg bg-sage transition-all duration-500"
                        style={{ height: `${value * 1.4}px`, minHeight: "28px" }}
                        title={`${value}`}
                      />
                      <p className="text-xs text-charcoal">M{idx + 1}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs italic text-charcoal/80">
                  Market data is indicative and based on aggregated regional trends. For a detailed market analysis, consult
                  our Market Intelligence and Strategy module.
                </p>
              </div>
            </article>
          </div>

          <article className="mt-6 rounded-2xl bg-white p-6 shadow-md">
            <h2 className="font-heading text-3xl text-navy">Based on your profile, Entrivo recommends:</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {report.modules.map((module) => (
                <div key={module.name} className="rounded-2xl border border-sage/40 p-4 shadow-sm">
                  <module.icon className="h-6 w-6 text-navy" />
                  <h3 className="mt-3 font-semibold text-navy">{module.name}</h3>
                  <p className="mt-2 text-sm text-charcoal">{module.reason}</p>
                  <button type="button" className="mt-4 rounded-full bg-navy px-4 py-2 text-xs font-semibold text-white">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </article>

          <article className="mt-6 rounded-2xl bg-white p-6 shadow-md">
            <h2 className="font-heading text-3xl text-navy">Your Next Steps to ASEAN</h2>
            <ol className="mt-4 space-y-3">
              {report.nextSteps.map((item, index) => (
                <li key={item} className="flex gap-3 rounded-xl bg-light-sage p-3 text-sm text-charcoal">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold font-semibold text-navy">
                    {index + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </article>

          <article className="mt-6 rounded-2xl bg-white p-6 shadow-md">
            <h2 className="font-heading text-3xl text-navy">Ready to Take the Next Step?</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              <button type="button" className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy">
                Register and Start Your Expansion
              </button>
              <button type="button" className="rounded-full border border-navy px-6 py-3 text-sm font-semibold text-navy">
                Speak to a Consultant
              </button>
              <button type="button" onClick={restart} className="rounded-full border border-sage px-6 py-3 text-sm font-semibold text-charcoal">
                Retake Assessment
              </button>
            </div>
          </article>
        </section>
      )}
    </div>
  );
}
