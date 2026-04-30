"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, X } from "lucide-react";

const rows = [
  {
    cova: "Live in 14 days",
    alternative: "Waiting months just to see a first draft",
  },
  {
    cova: "Transparent, fixed pricing",
    alternative: "Surprise invoices and scope creep",
  },
  {
    cova: "You own everything — always",
    alternative: "Held hostage to a platform or retainer",
  },
  {
    cova: "Built from scratch for your business",
    alternative: "A template with your logo swapped in",
  },
  {
    cova: "Direct line to your developer",
    alternative: "Chasing updates through account managers",
  },
  {
    cova: "We know this market",
    alternative: "Generic solutions built for nobody specific",
  },
];

export default function WhyCova() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} id="why-cova" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="mb-5 inline-block rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-600">
            Why Cova Systems
          </span>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Why local businesses choose Cova
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-500">
            We built Cova specifically for businesses like yours — here&apos;s
            what that means in practice.
          </p>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-gray-100 border-l-4 border-l-[#054bec] shadow-md transition-shadow duration-300 hover:shadow-[0_8px_40px_rgba(5,75,236,0.10)]"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          {/* Header row */}
          <div className="grid grid-cols-2">
            <div className="bg-[#054bec] px-6 py-4 text-sm font-semibold text-white">
              Cova Systems
            </div>
            <div className="bg-gray-50 px-6 py-4 text-sm font-semibold text-gray-900">
              The Alternative
            </div>
          </div>

          {/* Data rows */}
          <div className="divide-y divide-gray-100">
            {rows.map((row, i) => (
              <div
                key={row.cova}
                className={`grid grid-cols-2 ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                }`}
              >
                <div className="flex items-center gap-3 px-6 py-4">
                  <Check
                    className="h-5 w-5 flex-shrink-0 text-[#054bec]"
                    strokeWidth={2.5}
                  />
                  <span className="text-sm font-bold text-gray-900">
                    {row.cova}
                  </span>
                </div>
                <div className="flex items-center gap-3 px-6 py-4">
                  <X
                    className="h-5 w-5 flex-shrink-0 text-gray-300"
                    strokeWidth={2}
                  />
                  <span className="text-sm text-gray-500">
                    {row.alternative}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
