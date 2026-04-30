"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HeadphonesIcon, Banknote, MapPin } from "lucide-react";

const points = [
  {
    icon: HeadphonesIcon,
    label: "Full technical support",
    description:
      "We handle everything from domain setup to ongoing maintenance. You don't need to know anything about tech — that's what we're here for.",
  },
  {
    icon: Banknote,
    label: "Priced for real businesses",
    description:
      "We use AI-powered tooling to build faster and cheaper than traditional agencies, and we pass those savings directly to you.",
  },
  {
    icon: MapPin,
    label: "Built for the Canadian market",
    description:
      "We work exclusively with Canadian small businesses and understand the local landscape — from customer expectations to regional SEO.",
  },
];

export default function BuiltForYou() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "0px" });

  return (
    <section ref={sectionRef} id="built-for-you" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-start gap-16 max-md:flex-col max-md:gap-10">
          {/* Left */}
          <motion.div
            className="w-[45%] flex-shrink-0 max-md:w-full"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="mb-5 inline-block rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-600">
              Who We Serve
            </span>
            <h2 className="mb-5 text-4xl font-bold leading-[1.1] tracking-tight text-gray-900 max-md:text-3xl">
              Built specifically for businesses like yours.
            </h2>
            <p className="text-base leading-relaxed text-gray-500">
              We understand the Canadian local small business market — our
              process and pricing are designed around what you actually need,
              not what a traditional agency wants to sell you.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            className="flex-1 flex flex-col gap-8"
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            {points.map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.label} className="flex items-start gap-4">
                  <div className="flex-shrink-0 rounded-lg bg-blue-50 p-2">
                    <Icon className="h-5 w-5 text-brand" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-gray-900">
                      {point.label}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-gray-500">
                      {point.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
