"use client";

import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion, useInView } from "framer-motion";

const faqs = [
  {
    question: "Is my website built from a template?",
    answer:
      "No. Every site is designed and built from scratch for your specific business.",
  },
  {
    question: "What do I actually own at the end?",
    answer:
      "Everything. Your domain, your hosting account, your code. If you ever want to move on, you take it all with you.",
  },
  {
    question: "What does AI-powered development mean for me?",
    answer:
      "It means we build faster than a traditional agency, which means lower cost and a shorter timeline — without cutting corners on quality.",
  },
  {
    question: "Do I need to be tech-savvy to work with you?",
    answer:
      "Not even slightly. We handle everything and explain things in plain language at every step.",
  },
  {
    question: "What if I want changes after the site is live?",
    answer:
      "One round of revisions is included. After that, small updates are covered under the management plan, or we can quote larger changes separately.",
  },
  {
    question: "Are you really local?",
    answer:
      "Yes — based in Burnaby, BC. We work with businesses across Canada with a focus on the Lower Mainland.",
  },
  {
    question: "Can I start with just a website and add automation later?",
    answer:
      "Absolutely. Most clients start with a site and add on when they're ready. There's no pressure to do everything at once.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} id="faq" className="bg-white py-24">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="mb-5 inline-block rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-600">
            FAQ
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Good questions. Here are the answers.
          </h2>
        </motion.div>

        <motion.div
          className="flex flex-col gap-3"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                className={`relative overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 ${
                  isOpen
                    ? "border-blue-100 shadow-[0_8px_40px_rgba(5,75,236,0.08)]"
                    : "border-gray-100 hover:shadow-[0_8px_40px_rgba(5,75,236,0.06)]"
                }`}
              >
                {/* Top blue accent bar — only visible when open */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-[#0066FF] via-[#0551ef] to-[#054bec] transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                />
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                >
                  <span
                    className={`text-base font-medium transition-colors duration-200 ${
                      isOpen ? "text-brand" : "text-gray-700"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-colors duration-200 ${
                        isOpen ? "text-brand" : "text-gray-400"
                      }`}
                    />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-gray-500">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}