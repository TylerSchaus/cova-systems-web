"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const inputClasses =
  "w-full rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all duration-200";

const labelClasses = "text-xs font-medium text-gray-500 mb-1";

export default function FinalCTA() {
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, businessName, email, phone, details }),
      });
      if (!res.ok) throw new Error("Request failed");
      const data = await res.json();
      if (!data.success) throw new Error(data.error || "Request failed");
      setStatus("success");
      setName("");
      setBusinessName("");
      setEmail("");
      setPhone("");
      setDetails("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-brand py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-16">
          {/* Left column */}
          <div className="w-[40%] flex-shrink-0">
            <h2 className="mb-5 text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl">
              See what we&apos;d build for your business — for free.
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-blue-200">
              We&apos;ll put together a custom demo site before we ever ask for
              anything. No commitment, no pressure.
            </p>
            <a
              href="mailto:tyler@covasolutions.com"
              className="inline-flex items-center gap-2 rounded-full border border-white px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-brand"
            >
              <Mail className="h-4 w-4" />
              Email Us Directly
            </a>
          </div>

          {/* Right column — form card */}
          <div className="flex-1">
            <form
              onSubmit={handleSubmit}
              className="relative overflow-hidden flex flex-col gap-4 rounded-2xl bg-white p-8 shadow-xl"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-[#0066FF] via-[#0551ef] to-[#054bec]" />

              <div className="mb-2">
                <h3 className="text-xl font-bold text-gray-900">Get in Touch</h3>
                <p className="text-xs text-gray-400">Reach out for a free consultation or to book a demo.</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className={labelClasses}>Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputClasses}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className={labelClasses}>Email</label>
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className={labelClasses}>Business Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Business Name"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className={inputClasses}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className={labelClasses}>Phone (optional)</label>
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className={labelClasses}>Details</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your business and what you need"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className={inputClasses}
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-xl bg-brand py-3 text-sm font-semibold text-white shadow-md hover:shadow-[0_8px_30px_rgba(5,75,236,0.35)] hover:scale-[1.02] active:scale-100 transition-all duration-200"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-center text-sm font-medium text-green-600">
                  Thanks! We&apos;ll be in touch shortly.
                </p>
              )}
              {status === "error" && (
                <p className="text-center text-sm font-medium text-red-600">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
