"use client";

import { useEffect, useRef } from "react";
import { Zap, Code2, Globe, ShieldCheck, Smartphone } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    number: "01",
    title: "Built from Scratch",
    description:
      "No templates. Every site is designed specifically for your business and your customers.",
    graphic: "/images/graphics/graphic-1.png",
    icon: Code2,
  },
  {
    number: "02",
    title: "Mobile-First",
    description:
      "Over 70% of your customers will find you on their phone. We design for that first.",
    graphic: "/images/graphics/graphic-2.png",
    icon: Smartphone,
  },
  {
    number: "03",
    title: "Built to Rank",
    description:
      "Local SEO baked into every page so you show up when people search for what you do.",
    graphic: "/images/graphics/graphic-3.png",
    icon: Globe,
  },
];

const differentiators = [
  { icon: Zap, label: "Live in 14 days" },
  { icon: Code2, label: "You own the code" },
  { icon: Globe, label: "You own the domain" },
  { icon: ShieldCheck, label: "No lock-in contracts" },
];

export default function WebDev() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const c1 = card1Ref.current;
    const c2 = card2Ref.current;
    const c3 = card3Ref.current;
    const wrapper = cardsWrapperRef.current;

    if (!c1 || !c2 || !c3 || !wrapper) return;

    const lockHeight = () => {
      wrapper.style.height = c1.offsetHeight + "px";
    };
    lockHeight();

    const positionCards = () => {
      c2.style.position = "absolute";
      c2.style.left = "0";
      c2.style.right = "0";
      c2.style.top = c1.offsetHeight + 24 + "px";

      c3.style.position = "absolute";
      c3.style.left = "0";
      c3.style.right = "0";
      c3.style.top = c1.offsetHeight + c2.offsetHeight + 24 + "px";
    };
    positionCards();

    window.addEventListener("resize", lockHeight);

    const ctx = gsap.context(() => {
      gsap.set(c1, { zIndex: 1 });
      gsap.set(c2, { zIndex: 2 });
      gsap.set(c3, { zIndex: 3 });

      const tl = gsap.timeline({
        scrollTrigger: {
          // Pin the entire section so both left and right columns stay static
          trigger: sectionRef.current,
          scroller: document.documentElement,
          start: "top top",
          end: "+=1300",
          pin: true,
          pinSpacing: true,
          scrub: 1.5,
          anticipatePin: 1,
          // @ts-expect-error — GSAP types omit `false`, but it disables snap at runtime
          snap: false,
          invalidateOnRefresh: true,
          onRefresh: () => {
            positionCards();
            lockHeight();
          },
        },
      });

      // Use offsetTop relative to the wrapper to get exact distances
      // Card 2 starts at position 0 and travels to card 1's position
      tl.to(
        c2,
        {
          y: () => -(c2.offsetTop - c1.offsetTop),
          ease: "none",
          duration: 1,
        },
        0
      );

      // Card 3 starts at position 0.4 (40% into card 2's travel) so it trails
      // card 2 with a visible gap and only catches up at the final landing
      tl.to(
        c3,
        {
          y: () => -(c3.offsetTop - c1.offsetTop),
          ease: "none",
          duration: 1,
        },
        0.4
      );

      // Differentiator strip rises into frame after the cards have stacked
      gsap.set(stripRef.current, { y: 80, opacity: 0 });
      tl.to(stripRef.current, {
        y: 0,
        opacity: 1,
        ease: "none",
        duration: 0.5,
      });
    }, sectionRef);

    return () => {
      window.removeEventListener("resize", lockHeight);
      ctx.revert();
    };
  }, []);

  return (
    <div className="overflow-hidden">
    <section ref={sectionRef} id="websites" className="bg-surface-muted pb-24 pt-30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main content: split layout */}
        <div className="flex items-start gap-16 mb-12">
          {/* Left */}
          <div className="w-[38%] flex-shrink-0 pt-2">
            <span className="mb-5 inline-block rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-600">
              Websites
            </span>
            <h2 className="mb-5 text-4xl font-bold leading-[1.1] tracking-tight text-gray-900">
              A website that actually works for your business.
            </h2>
            <p className="mb-7 text-base leading-relaxed text-gray-500">
              Most local business websites are slow, outdated, and invisible on
              Google. We fix that — without the agency price tag.
            </p>
            <a
              href="#pricing"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#pricing")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:gap-2.5 transition-all duration-300"
            >
              See pricing
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Right — cards with stacking animation */}
          <div ref={cardsWrapperRef} className="relative flex-1">
            <div
              ref={card1Ref}
              className="relative overflow-hidden rounded-2xl bg-white px-7 py-6 shadow-md"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-[#0066FF] via-[#0551ef] to-[#054bec]" />
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-block rounded-full border border-blue-100 bg-blue-50 px-2.5 py-2.5 text-xs font-semibold uppercase text-blue-600">
                <Code2 className="h-6 w-6 text-brand" strokeWidth={1.75} />
                </span>
                <h3 className="text-xl font-semibold text-gray-900">Built from Scratch</h3>
              </div>
              <p className="text-[15px] leading-relaxed text-gray-500">
                No templates. Every site is designed specifically for your business and your customers.
              </p>
              <div className="mt-4 mx-4 mb-2 w-full overflow-hidden rounded-xl">
                <img src="/images/graphics/graphic-1.png" alt="" className="w-[75%] max-h-[265px] min-h-[265px] mx-auto object-cover" />
              </div>
              <p className="text-right text-2xl font-black text-blue-200 mt-1 pr-1">01</p>
            </div>

            <div
              ref={card2Ref}
              className="relative overflow-hidden rounded-2xl bg-white px-7 py-6 shadow-md"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-[#0066FF] via-[#0551ef] to-[#054bec]" />
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-block rounded-full border border-blue-100 bg-blue-50 px-2.5 py-2.5 text-xs font-semibold uppercase text-blue-600">
                <Smartphone className="h-6 w-6 text-brand" strokeWidth={1.75} />
                </span>
                <h3 className="text-xl font-semibold text-gray-900">Mobile-First</h3>
              </div>
              <p className="text-[15px] leading-relaxed text-gray-500">
                Over 70% of your customers will find you on their phone. We design for that first.
              </p>
              <div className="mt-4 mx-4 mb-2 w-full overflow-hidden rounded-xl">
                <img src="/images/graphics/graphic-2.png" alt="" className="w-[75%] max-h-[265px] min-h-[265px] mx-auto object-cover" />
              </div>
              <p className="text-right text-2xl font-black text-blue-200 mt-1 pr-1">02</p>
            </div>

            <div
              ref={card3Ref}
              className="relative overflow-hidden rounded-2xl bg-white px-7 py-6 shadow-md"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-[#0066FF] via-[#0551ef] to-[#054bec]" />
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-block rounded-full border border-blue-100 bg-blue-50 px-2.5 py-2.5 text-xs font-semibold uppercase text-blue-600">
                <Globe className="h-6 w-6 text-brand" strokeWidth={1.75} />
                </span>
                <h3 className="text-xl font-semibold text-gray-900">Built to Rank</h3>
              </div>
              <p className="text-[15px] leading-relaxed text-gray-500">
                Local SEO baked into every page so you show up when people search for what you do.
              </p>
              <div className="mt-4 mx-4 mb-2 w-full overflow-hidden rounded-xl">
                <img src="/images/graphics/graphic-3.png" alt="" className="w-[75%] max-h-[265px] min-h-[265px] mx-auto object-cover" />
              </div>
              <p className="text-right text-2xl font-black text-blue-200 mt-1 pr-1">03</p>
            </div>
          </div>
        </div>

        {/* Differentiator strip */}
        <div ref={stripRef} className="rounded-2xl bg-white px-8 py-5">
          <div className="flex items-center justify-center divide-x divide-gray-200">
            {differentiators.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-2 px-8 text-sm text-gray-600 first:pl-0 last:pr-0"
                >
                  <Icon className="h-4 w-4 flex-shrink-0 text-brand" strokeWidth={1.75} />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}