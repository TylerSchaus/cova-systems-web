"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Zap, Clock, TrendingUp } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

const demos = [
  { src: "/images/demos/demo-2.png", alt: "Demo site 1" },
  { src: "/images/demos/demo-3.png", alt: "Demo site 2" },
  { src: "/images/demos/demo-1.png", alt: "Demo site 3" },
];

function BrowserFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-xl bg-white">
      <div className="flex items-center gap-1.5 border-b border-gray-100 bg-gray-50 px-3 py-2.5">
        <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
        <div className="mx-3 h-4 flex-1 rounded-full bg-gray-200" />
      </div>
      <div className="relative aspect-[16/10] bg-gray-100">
        <Image src={src} alt={alt} fill className="object-cover object-top" />
      </div>
    </div>
  );
}

export default function Hero() {
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const cardTopRef = useRef<HTMLDivElement>(null);
  const cardBottomLeftRef = useRef<HTMLDivElement>(null);
  const cardBottomRightRef = useRef<HTMLDivElement>(null);
  const blurbLeftRef = useRef<HTMLDivElement>(null);
  const blurbRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const scrollTriggers: gsap.core.Tween[] = [];

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => {
        const scrollConfig = {
          trigger: sectionRef.current,
          start: isMobile ? "bottom 40%" : "bottom bottom",
          end: "bottom -20%",
          scrub: true,
        };
        if (!isMobile) {
          scrollTriggers.push(
            gsap.to(orbRef.current, { y: -40, immediateRender: false, scrollTrigger: scrollConfig })
          );
        }
        scrollTriggers.push(
          gsap.to(cardTopRef.current, { y: -50, rotate: -5, xPercent: -50, immediateRender: false, scrollTrigger: scrollConfig }),
          gsap.to(cardBottomLeftRef.current, { y: -80, rotate: -7, immediateRender: false, scrollTrigger: scrollConfig }),
          gsap.to(cardBottomRightRef.current, { y: -25, rotate: 6, immediateRender: false, scrollTrigger: scrollConfig }),
          gsap.to(blurbLeftRef.current, { rotate: -12, opacity: 0.4, y: -20, immediateRender: false, scrollTrigger: scrollConfig }),
          gsap.to(blurbRightRef.current, { rotate: 12, opacity: 0.4, y: -20, immediateRender: false, scrollTrigger: scrollConfig })
        );
      },
    });

    // Initial hidden states
    gsap.set([eyebrowRef.current, headlineRef.current, subheadlineRef.current, ctaRef.current, trustRef.current], { opacity: 0, y: 24 });
    if (!isMobile) gsap.set(orbRef.current, { opacity: 0, scale: 0.3 });
    gsap.set(cardTopRef.current, { opacity: 0, y: 40, rotate: -8, xPercent: -50, left: "50%" });
    gsap.set(cardBottomLeftRef.current, { opacity: 0, y: 40, rotate: -10 });
    gsap.set(cardBottomRightRef.current, { opacity: 0, y: 40, rotate: 9 });
    gsap.set(blurbLeftRef.current, { opacity: 0, scale: 0.8, y: 8 });
    gsap.set(blurbRightRef.current, { opacity: 0, scale: 0.8, y: 8 });

    // Mobile position overrides — applied after initial sets
    if (isMobile) {
      gsap.set(cardTopRef.current, { width: "76%", left: "50%", xPercent: -50, top: "0px" });
      gsap.set(cardBottomLeftRef.current, { width: "56%", left: "2%", bottom: "0px" });
      gsap.set(cardBottomRightRef.current, { width: "56%", right: "2%", bottom: "0px" });
      gsap.set(orbRef.current, { width: "220px", height: "220px", top: "8%", left: "50%", xPercent: -50, right: "auto" });
      gsap.set(blurbLeftRef.current, { top: "0%", left: "0%" });
      gsap.set(blurbRightRef.current, { bottom: "-4%", right: "-2%" });
    }

    // Entrance timeline
    tl.to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.9 }, 0.15)
      .to(headlineRef.current, { opacity: 1, y: 0, duration: 1.05 }, 0.38)
      .to(subheadlineRef.current, { opacity: 1, y: 0, duration: 0.9 }, 0.6)
      .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.9 }, 0.83)
      .to(trustRef.current, { opacity: 1, y: 0, duration: 0.75 }, 1.02)
      .to(orbRef.current, { opacity: 0.75, scale: 1, duration: 1.8, ease: "power2.out" }, 1.6)
      .to(cardTopRef.current, { opacity: 1, y: 0, rotate: -2, xPercent: -50, duration: 1.35, ease: "power2.out" }, 0.65)
      .to(cardBottomRightRef.current, { opacity: 1, y: 0, rotate: 3, duration: 1.35, ease: "power2.out" }, 1.0)
      .to(cardBottomLeftRef.current, { opacity: 1, y: 0, rotate: -4, duration: 1.35, ease: "power2.out" }, 1.35)
      .to(blurbLeftRef.current, { opacity: 1, scale: isMobile ? 0.85 : 1, y: 0, duration: 0.5, ease: "back.out(1.4)" }, 1.8)
      .to(blurbRightRef.current, { opacity: 1, scale: isMobile ? 0.85 : 1, y: 0, duration: 0.5, ease: "back.out(1.4)" }, 1.95);

    return () => {
      tl.kill();
      scrollTriggers.forEach((st) => st.kill());
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white pt-16">
      <div className="max-w-7xl mx-auto flex min-h-[calc(100vh-4rem)] items-center px-6 max-md:flex-col max-md:min-h-0 max-md:pt-2 max-md:pb-12">

        {/* Text content */}
        <div className="w-[45%] flex-shrink-0 py-20 pr-12 max-md:w-full max-md:py-8 max-md:pr-0 max-md:text-center">
          <p ref={eyebrowRef} className="mb-5 text-xs font-semibold uppercase tracking-widest text-gray-400">
            Built for Local Businesses
          </p>
          <h1 ref={headlineRef} className="mb-5 text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 max-md:text-3xl">
            Digital solutions that work as hard as you do.
          </h1>
          <p ref={subheadlineRef} className="mb-8 text-lg leading-relaxed text-gray-500 max-md:text-base">
            We build websites, manage your Google presence, and automate your follow-ups — so you can stay focused on the job.
          </p>
          <div ref={ctaRef} className="mb-8 flex items-center gap-3 max-md:w-full">
            <Button
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
              variant="primary"
              size="lg"
              className="rounded-full max-md:w-full max-md:justify-center max-md:text-s max-md:px-4"
            >
              Free Demo
            </Button>
            <Button
              href="#services"
              onClick={(e) => { e.preventDefault(); document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" }); }}
              variant="outline"
              size="lg"
              className="rounded-full max-md:w-full max-md:justify-center max-md:text-s max-md:px-4"
            >
              Learn More
            </Button>
          </div>
          <div ref={trustRef} className="flex items-center gap-2 text-sm text-gray-400 max-md:justify-center max-md:flex-wrap">
            <span>Live in 14 days</span>
            <span className="mx-1">·</span>
            <span>100% yours</span>
            <span className="mx-1">·</span>
            <span>No lock-in contracts</span>
          </div>
        </div>

        {/* Demo stack */}
        <div className="relative flex-1 self-stretch overflow-visible max-md:w-full max-md:self-auto max-md:overflow-visible max-md:px-3">
          {/* Blue orb */}
          <div
            ref={orbRef}
            className="pointer-events-none absolute top-[12%] h-[525px] w-[650px] rounded-full bg-[radial-gradient(circle,#0066FF_0%,#054bec_45%,transparent_70%)] blur-2xl max-md:hidden"
          />

          {/* Mockup stack */}
          <div className="relative z-10 h-[480px] mt-26 w-full max-md:h-[300px] max-md:mt-8 max-md:overflow-visible">

            {/* Bottom left */}
            <div
              ref={cardBottomLeftRef}
              className="absolute shadow-xl ring-1 ring-black/5 rounded-xl"
              style={{ width: "70%", bottom: "0px", left: "0px", zIndex: 10 }}
            >
              <BrowserFrame src={demos[1].src} alt={demos[1].alt} />
            </div>

            {/* Top center */}
            <div
              ref={cardTopRef}
              className="absolute shadow-2xl ring-1 ring-black/5 rounded-xl"
              style={{ width: "82%", top: "0px", zIndex: 20 }}
            >
              <BrowserFrame src={demos[0].src} alt={demos[0].alt} />
            </div>

            {/* Bottom right */}
            <div
              ref={cardBottomRightRef}
              className="absolute shadow-2xl ring-1 ring-black/5 rounded-xl"
              style={{ width: "70%", bottom: "0px", right: "0px", zIndex: 30, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.18)" }}
            >
              <BrowserFrame src={demos[2].src} alt={demos[2].alt} />
            </div>

            {/* Badge 1 — 24/7 Support */}
            <div
              ref={blurbLeftRef}
              className="absolute flex items-center gap-2 rounded-xl bg-white px-3.5 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] ring-1 ring-black/8 border border-white"
              style={{ top: "-3%", left: "-5%", zIndex: 40 }}
            >
              <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50">
                <Clock className="h-3.5 w-3.5 text-brand" strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-900">24/7 Support</p>
                <p className="text-[10px] text-gray-400">Always available</p>
              </div>
            </div>

            {/* Badge 2 — SEO Optimized */}
            <div
              ref={blurbRightRef}
              className="absolute flex items-center gap-2 rounded-xl bg-white px-3.5 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] ring-1 ring-black/8 border border-white"
              style={{ bottom: "8%", right: "-6%", zIndex: 40 }}
            >
              <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50">
                <TrendingUp className="h-3.5 w-3.5 text-brand" strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-900">SEO Optimized</p>
                <p className="text-[10px] text-gray-400">Rank on Google</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}