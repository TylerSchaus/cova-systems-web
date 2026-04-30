"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Star, Zap, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Your Online Home",
    description:
      "A fast, modern website built to convert visitors into customers.",
    href: "#websites",
  },
  {
    icon: Star,
    title: "Your Digital Reputation",
    description: "Your Google presence, managed and optimized.",
    href: "#gbp",
  },
  {
    icon: Zap,
    title: "Your Business on Autopilot",
    description:
      "Smart automations that follow up and respond — even when you're off the clock.",
    href: "#automation",
  },
];

export default function ServicesOverview() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "0px" });

  return (
    <section ref={sectionRef} id="services" className="bg-white pb-24 pt-16 max-md:pt-12 max-md:pb-16">
      <div className="max-w-7xl mx-auto px-6 max-md:px-4">
        <motion.div
          className="mb-16 text-center max-md:mb-10"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="mb-5 inline-block rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-600">
              Services
          </span>
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl max-md:text-3xl">
            Everything your business needs to compete
            <br className="hidden md:block" /> online — under one roof.
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-10 max-md:px-0"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(5,75,236,0.10)]"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-[#0066FF] via-[#0551ef] to-[#054bec]" />
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 transition-colors duration-300 group-hover:bg-blue-100">
                  <Icon className="h-5 w-5 text-brand" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500">
                    {service.description}
                  </p>
                </div>
                <a
                  href={service.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(service.href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-brand hover:gap-2 transition-all duration-300"
                >
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
