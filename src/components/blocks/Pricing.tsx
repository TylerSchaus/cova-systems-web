"use client";

import { useState, useRef, useEffect, type ReactNode } from "react";
import { Check } from "lucide-react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Button from "@/components/ui/Button";

type TabId = "websites" | "management" | "automation";

const tabs: { id: TabId; label: string }[] = [
  { id: "websites", label: "Websites" },
  { id: "management", label: "Management" },
  { id: "automation", label: "Automation" },
];

interface PricingContent {
  headline: ReactNode;
  bullets: string[];
  note?: string;
  addon?: string;
  primaryCta: string;
  secondaryCta: string;
}

const content: Record<TabId, PricingContent> = {
  websites: {
    headline: (
      <span>
        From <span className="text-brand">$499</span> — fully custom,
        <br />
        built for your business.
      </span>
    ),
    bullets: [
      "Built from scratch",
      "Mobile-first",
      "Local SEO included",
      "Delivered in 14 days",
      "One revision round included",
    ],
    primaryCta: "Get a Quote",
    secondaryCta: "Get Your Free Demo",
  },
  management: {
    headline: (
      <span>
        From <span className="text-brand">$99/month</span> — we handle
        <br />
        the maintenance so you don&apos;t have to.
      </span>
    ),
    bullets: [
      "Hosting included",
      "Security updates",
      "Content changes on request",
      "Domain management",
    ],
    addon: "+ $49/month to include Google Business Profile management",
    primaryCta: "Learn More",
    secondaryCta: "Get Your Free Demo",
  },
  automation: {
    headline: (
      <span>
        Full package from <span className="text-brand">$749/month</span>.
      </span>
    ),
    bullets: [
      "Missed call recovery",
      "Review generation",
      "Client reactivation",
      "Airtable CRM setup",
      "Monthly check-in call",
    ],
    note: "Prefer a single module or custom workflow? Let's talk.",
    primaryCta: "Get in Touch",
    secondaryCta: "Get Your Free Demo",
  },
};

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<TabId>("websites");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<Record<TabId, HTMLButtonElement | null>>({
    websites: null,
    management: null,
    automation: null,
  });
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const active = content[activeTab];

  // Measure and update the sliding indicator position
  useEffect(() => {
    const el = tabRefs.current[activeTab];
    if (!el) return;
    setIndicatorStyle({
      left: el.offsetLeft,
      width: el.offsetWidth,
    });
  }, [activeTab]);

  return (
    <section ref={sectionRef} id="pricing" className="bg-surface-muted py-24 max-md:py-16">
      <div className="max-w-7xl mx-auto px-6 max-md:px-4">
        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="mb-5 inline-block rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-600">
            Pricing
          </span>
          <h2 className="mb-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl max-md:text-3xl">
            Straightforward pricing. No surprises.
          </h2>
          <p className="text-base text-gray-400">All prices in CAD.</p>
        </motion.div>

        {/* Tab selector with sliding indicator */}
        <motion.div
          className="mb-6 flex justify-center"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          <div className="relative inline-flex items-center gap-1 rounded-xl bg-white p-1.5 shadow-sm max-md:w-full max-md:flex">
            {/* Sliding background indicator */}
            <motion.div
              className="absolute rounded-lg bg-brand"
              animate={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 35 }}
              style={{
                top: 6,
                bottom: 6,
              }}
            />
            {tabs.map((tab) => (
              <button
                key={tab.id}
                ref={(el) => { tabRefs.current[tab.id] = el; }}
                onClick={() => setActiveTab(tab.id)}
                className={`relative z-10 rounded-lg px-6 py-2.5 text-sm font-medium transition-colors duration-200 max-md:flex-1 max-md:px-2 max-md:text-xs ${
                  activeTab === tab.id
                    ? "text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content card */}
        <motion.div
          className="rounded-2xl bg-white p-10 overflow-hidden shadow-md max-md:p-5"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="flex items-start gap-12 max-md:flex-col max-md:gap-6"
            >
              {/* Left: headline + bullets */}
              <div className="flex-1 max-md:w-full">
                <h3 className="mb-7 text-3xl font-bold leading-snug text-gray-900 max-md:text-2xl">
                  {active.headline}
                </h3>

                <ul className="grid grid-cols-2 gap-x-8 gap-y-3 max-md:grid-cols-1">
                  {active.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-center gap-2.5 text-sm text-gray-700"
                    >
                      <Check
                        className="h-4 w-4 flex-shrink-0 text-brand"
                        strokeWidth={2.5}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {active.addon && (
                  <p className="mt-5 text-sm text-gray-500">
                    <span className="font-medium text-gray-700">Add-on:</span>{" "}
                    {active.addon}
                  </p>
                )}
                {active.note && (
                  <p className="mt-5 text-sm text-gray-500">{active.note}</p>
                )}
              </div>

              {/* Right: CTAs */}
              <div className="flex w-56 flex-shrink-0 flex-col gap-3 max-md:w-full">
                <Button
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  variant="primary"
                  size="lg"
                  className="w-full rounded-xl"
                >
                  {active.primaryCta}
                </Button>
                <Button
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  variant="outline"
                  size="lg"
                  className="w-full rounded-xl border-brand text-brand hover:bg-blue-50"
                >
                  {active.secondaryCta}
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}