"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, MapPin, Clock, Phone, Star, TrendingUp, Eye } from "lucide-react";

const checklist = [
  "Profile setup and optimization",
  "Review monitoring",
  "Regular updates and posts",
  "Local search visibility",
];

function StarIcon() {
  return <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />;
}

export default function GBPCallout() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "0px" });

  return (
    <section ref={sectionRef} id="gbp" className="bg-white py-24 max-md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-16 max-md:flex-col max-md:gap-10">
          {/* Left — copy */}
          <motion.div
            className="w-[45%] flex-shrink-0 max-md:w-full max-md:text-center"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="mb-5 inline-block rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-600">
              Add-on
            </span>
            <h2 className="mb-5 text-4xl font-bold leading-[1.1] tracking-tight text-gray-900">
              Don&apos;t just have a website — own your Google presence too.
            </h2>
            <p className="mb-7 text-base leading-relaxed text-gray-500">
              Your Google Business Profile is often the first thing a customer
              sees. We set it up right, keep it updated, and make sure your
              reviews and info are always working in your favour.
            </p>
            <ul className="mb-7 space-y-3 max-md:text-left">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                  <Check className="h-4 w-4 flex-shrink-0 text-brand" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-600 max-md:text-left">
              <span className="font-semibold text-gray-900">+ $50/month</span>
              , included with any site management plan.
            </p>
          </motion.div>

          {/* Right — GBP mockup card + floating badges */}
          <div className="relative flex-1 flex justify-center max-md:w-full max-md:px-6">

            {/* Badge 1 — #1 on Google Maps (top right, outside card) */}
            <motion.div
              className="absolute top-8 right-0 flex items-center gap-2 rounded-xl bg-white px-3.5 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] ring-1 ring-black/8 border border-white max-md:hidden"
              style={{ zIndex: 50 }}
              initial={{ opacity: 0, scale: 0.8, y: 8 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 8 }}
              transition={{ duration: 0.5, ease: [0.175, 0.885, 0.32, 1.275], delay: 1.2 }}
            >
              <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50">
                <TrendingUp className="h-3.5 w-3.5 text-brand" strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-900">#1 on Google Maps</p>
                <p className="text-[10px] text-gray-400">Burnaby, BC</p>
              </div>
            </motion.div>

            {/* Badge 2 — 247 Profile Views (bottom left, outside card) */}
            <motion.div
              className="absolute bottom-6 left-0 flex items-center gap-2 rounded-xl bg-white px-3.5 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] ring-1 ring-black/8 border border-white max-md:hidden"
              style={{ zIndex: 50 }}
              initial={{ opacity: 0, scale: 0.8, y: 8 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 8 }}
              transition={{ duration: 0.5, ease: [0.175, 0.885, 0.32, 1.275], delay: 1.4 }}
            >
              <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50">
                <Eye className="h-3.5 w-3.5 text-brand" strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-900">247 Profile Views</p>
                <p className="text-[10px] text-gray-400">This month</p>
              </div>
            </motion.div>

            {/* GBP mockup card */}
            <motion.div
              className="w-full max-w-sm overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg"
              initial={{ opacity: 0, rotate: 8 }}
              animate={inView ? { opacity: 1, rotate: 2 } : { opacity: 0, rotate: 8 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            >
              {/* Top — profile content */}
              <div className="relative p-6">
                {/* Profile header */}
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand text-lg font-bold text-white">
                    S
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      Summit Home Services
                    </p>
                    <p className="text-xs text-gray-500">
                      Home services · Burnaby, BC
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="mb-5 flex items-center gap-2">
                  <span className="font-bold text-gray-900">4.9</span>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">(127 reviews)</span>
                </div>

                {/* Details */}
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2.5 text-gray-700">
                    <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
                    <span>Serving the Lower Mainland · Burnaby, BC</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-gray-700">
                    <Clock className="h-4 w-4 flex-shrink-0 text-green-500" />
                    <span>
                      <span className="font-medium text-green-600">Open</span> ·
                      Closes 6:00 PM
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 text-gray-700">
                    <Phone className="h-4 w-4 flex-shrink-0 text-brand" />
                    <span>(604) 555-0142</span>
                  </div>
                </div>
              </div>

              {/* Bottom — map */}
              <div className="relative h-44 w-full px-4 pb-4">
                <div className="relative h-full w-full overflow-hidden rounded-xl">
                  <img
                    src="/images/map.png"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white to-transparent" />
                  <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent" />
                  <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent" />
                </div>
                <div className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-[radial-gradient(circle,#0066FF,#054bec)] opacity-15 blur-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}