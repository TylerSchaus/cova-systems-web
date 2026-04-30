"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Star, Users, Zap, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

const cards = [
  {
    icon: Phone,
    title: "Missed Call Recovery",
    description:
      "A customer calls, you're on a job. Our system texts them back instantly so you never lose a lead.",
  },
  {
    icon: Star,
    title: "Review Generation",
    description:
      "After every job, an automated sequence asks happy customers to leave a Google review.",
  },
  {
    icon: Users,
    title: "Client Reactivation",
    description:
      "Automatically re-engage past customers with timely, personal outreach.",
  },
];

export default function Automation() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} id="automation" className="bg-surface-muted py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="mb-5 inline-block rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-600">
            Automation
          </span>
          <h2 className="mb-5 text-4xl font-bold leading-[1.1] tracking-tight text-gray-900 md:text-5xl">
            Your business shouldn&apos;t stop
            <br className="hidden md:block" /> working when you do.
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-500">
            We build automations that handle the follow-up, re-engagement, and
            customer communication that falls through the cracks —
            automatically.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="mb-6 grid grid-cols-1 gap-5 md:grid-cols-3"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="relative overflow-hidden flex flex-col gap-4 rounded-2xl bg-white p-7 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-[#0066FF] via-[#0551ef] to-[#054bec]" />
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                  <Icon className="h-5 w-5 text-brand" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="mb-2 text-base font-semibold text-gray-900">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Full Package callout */}
        <motion.div
          className="relative overflow-hidden rounded-2xl bg-white px-8 py-7 shadow-md"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-[#0066FF] via-[#0551ef] to-[#054bec]" />
          <div className="flex items-center justify-between gap-8">
            <div className="flex-1">
              <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
                <Zap className="h-3 w-3" />
                Most Popular
              </div>
              <h3 className="mb-2 text-2xl font-bold text-gray-900">
                The Full Package
              </h3>
              <p className="mb-1.5 text-sm leading-relaxed text-gray-600">
                All three automations + Airtable CRM setup + monthly check-in
                call.
              </p>
              <p className="text-sm text-gray-400">
                Prefer just one workflow? We build custom automations too — get
                in touch.
              </p>
            </div>
            <div className="flex-shrink-0 flex flex-col items-end gap-4">
              <div className="text-right">
                <p className="text-5xl font-normal tracking-tight text-gray-900">
                  $750
                </p>
                <p className="text-sm text-gray-400">per month</p>
              </div>
              <Button
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                variant="primary"
                className="rounded-full px-6 py-2.5 text-sm inline-flex items-center gap-1.5 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
          <p className="mt-5 border-t border-gray-100 pt-4 text-center text-xs text-gray-400">
            All prices in CAD
          </p>
        </motion.div>
      </div>
    </section>
  );
}