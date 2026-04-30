"use client";

import Image from "next/image";

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#111111]">
      {/* Top row */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="Cova Systems"
              width={140}
              height={32}
              className="h-8 w-auto brightness-0 invert"
            />
            <span className="text-md font-semibold text-white tracking-tight">Cova Solutions</span>
          </div>

          {/* Nav */}
          <nav className="flex items-start gap-10">
            {/* Services group */}
            <div className="flex flex-col gap-2">
              <a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="text-sm text-gray-400 hover:text-white transition-colors duration-200">Services</a>
              <a href="#websites" onClick={(e) => handleNavClick(e, "#websites")} className="text-xs text-gray-600 hover:text-gray-400 transition-colors duration-200">Websites</a>
              <a href="#automation" onClick={(e) => handleNavClick(e, "#automation")} className="text-xs text-gray-600 hover:text-gray-400 transition-colors duration-200">Automation</a>
              <a href="#gbp" onClick={(e) => handleNavClick(e, "#gbp")} className="text-xs text-gray-600 hover:text-gray-400 transition-colors duration-200">Google Presence</a>
            </div>
            {/* Standalone links */}
            <div className="flex flex-col gap-2">
              <a href="#why-cova" onClick={(e) => handleNavClick(e, "#why-cova")} className="text-sm text-gray-400 hover:text-white transition-colors duration-200">About</a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="#pricing" onClick={(e) => handleNavClick(e, "#pricing")} className="text-sm text-gray-400 hover:text-white transition-colors duration-200">Pricing</a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="#faq" onClick={(e) => handleNavClick(e, "#faq")} className="text-sm text-gray-400 hover:text-white transition-colors duration-200">FAQ</a>
            </div>
          </nav>

          {/* Email */}
          <a
            href="mailto:tyler@covasolutions.com"
            className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
          >
            tyler@covasolutions.com
          </a>
        </div>
      </div>

      {/* Bottom row */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <p className="text-xs text-gray-600">© 2026 Cova Systems</p>
        </div>
      </div>
    </footer>
  );
}
