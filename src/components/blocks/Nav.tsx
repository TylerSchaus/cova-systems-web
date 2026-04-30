"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#why-cova" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative z-50">
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300 ease-in-out relative z-50",
          isScrolled ? "px-4 pt-3" : ""
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-300 ease-in-out will-change-transform",
            isScrolled
              ? "mx-auto max-w-4xl h-14 px-4 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-lg"
              : "mx-auto max-w-7xl h-16 px-6 bg-white border border-transparent"
          )}
        >
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="Cova Systems"
              width={148}
              height={32}
              className="h-8 w-auto"
              priority
            />
            <span className="text-md font-semibold text-gray-900 tracking-tight">Cova Systems</span>
          </div>

          <div className="max-md:hidden flex items-center gap-8">
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="max-md:hidden">
            <Button
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              variant="primary"
              className="rounded-full px-5 py-2.5 text-sm transition-all duration-300 ease-in-out hover:gap-2.5 inline-flex items-center gap-1.5"
            >
              Get Your Free Demo
            </Button>
          </div>

          <div
            onTouchEnd={(e) => {
              e.preventDefault();
              alert('tapped');
              setMobileMenuOpen(true);
            }}
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden flex items-center justify-center p-2 text-gray-700 cursor-pointer"
            role="button"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-[60] md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            {/* Menu panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-[75%] max-w-xs bg-white z-[70] flex flex-col md:hidden shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Menu header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                <span className="text-sm font-semibold text-gray-900">Menu</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-gray-500"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              {/* Nav links */}
              <nav className="flex flex-col px-6 py-6 gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      setTimeout(() => {
                        document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                      }, 300);
                    }}
                    className="py-3 text-base font-medium text-gray-700 border-b border-gray-100 hover:text-brand transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              {/* CTA */}
              <div className="px-6 mt-auto pb-10">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    setTimeout(() => {
                      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                    }, 300);
                  }}
                  className="block w-full text-center rounded-full bg-brand text-white px-6 py-3 text-sm font-semibold"
                >
                  Get Your Free Demo
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
