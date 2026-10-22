"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, ChevronDown, Loader2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does group size work on ROAMLY curated trips?",
      a: "Our trips are intentionally limited to 8–10 travelers to maintain intimacy, reduce environmental impact, and allow spontaneous detours at local spots.",
    },
    {
      q: "What is your reservation and cancellation policy?",
      a: "You can reserve your place with a refundable deposit. Full refunds are provided for cancellations made up to 30 days prior to departure.",
    },
    {
      q: "Are flights included in the package prices?",
      a: "To give travelers maximum freedom regarding arrival timing, frequent flyer miles, and origin cities, packages exclude long-haul flights but include all domestic ground and water transport.",
    },
    {
      q: "Can itineraries be customized for private groups or families?",
      a: "Yes! Any of our curated itineraries can be scheduled as a private departure for your group of 4 or more. Contact our team to coordinate custom dates.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMsg("Please complete all required fields.");
      return;
    }
    if (!formData.email.includes("@")) {
      setStatus("error");
      setErrorMsg("Please provide a valid email address.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 900);
  };

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-bold uppercase tracking-widest mb-3">
          <Mail className="w-3.5 h-3.5" />
          <span>We&apos;re Here to Help</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-content-primary">
          Contact Our Concierge
        </h1>
        <p className="mt-4 text-base sm:text-lg text-content-secondary leading-relaxed">
          Have questions about a specific route, need advice on seasonal timing,
          or want to coordinate a private group departure? Let&apos;s talk.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
        {/* Contact Information & Channels */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-surface-primary p-8 rounded-3xl border border-border shadow-subtle space-y-6">
            <h2 className="text-xl font-bold text-content-primary">
              Direct Communication
            </h2>

            <div className="space-y-4 text-sm text-content-secondary">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-surface-secondary flex items-center justify-center text-brand shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-content-primary">
                    Email Inquiries
                  </p>
                  <p className="text-content-secondary mt-0.5">concierge@roamly.travel</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-surface-secondary flex items-center justify-center text-brand shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-content-primary">
                    Telephone (Travel Hours)
                  </p>
                  <p className="text-content-secondary mt-0.5">+1 (800) 555-ROAM</p>
                  <p className="text-[11px] text-content-secondary/70">Mon–Fri, 9am–6pm EST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-surface-secondary flex items-center justify-center text-brand shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-content-primary">
                    Sanctuary HQ
                  </p>
                  <p className="text-content-secondary mt-0.5">
                    100 Alpine Way, Boulder, CO 80302
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand text-white p-6 rounded-3xl shadow-card">
            <h3 className="text-base font-bold mb-1">Looking for Immediate Answers?</h3>
            <p className="text-xs text-white/80 leading-relaxed mb-4">
              Browse our frequently asked questions below for details on packing,
              payments, and group structures.
            </p>
            <a
              href="#faq"
              className="text-xs font-semibold uppercase tracking-wider text-accent hover:underline"
            >
              Jump to FAQs ↓
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-surface-primary p-8 sm:p-10 rounded-3xl border border-border shadow-subtle">
            <h2 className="text-2xl font-bold text-content-primary mb-2">
              Send a Message
            </h2>
            <p className="text-xs sm:text-sm text-content-secondary mb-8">
              Fill out the form below and one of our destination curators will reply within 24 hours.
            </p>

            {status === "success" ? (
              <div className="p-8 rounded-2xl bg-brand/10 border border-brand/20 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-brand mx-auto" />
                <h3 className="text-lg font-bold text-content-primary">
                  Message Sent Successfully
                </h3>
                <p className="text-sm text-content-secondary max-w-sm mx-auto">
                  Thank you for reaching out! A ROAMLY trip specialist will review your inquiry and follow up shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-4 px-5 py-2 rounded-full bg-brand text-white text-xs font-semibold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-content-secondary mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-surface-secondary text-content-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-content-secondary mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-surface-secondary text-content-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-content-secondary mb-1">
                    Subject / Trip of Interest
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Question regarding Dolomites retreat or private charter"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface-secondary text-content-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-content-secondary mb-1">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Tell us about your preferred travel window, group size, and any specific questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface-secondary text-content-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-xs text-red-500 font-semibold">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3.5 rounded-2xl bg-brand hover:bg-brand-hover text-white text-sm font-semibold tracking-wide flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95 disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-content-secondary text-center mt-2">
                  Demo Prototype: Submissions are processed locally for demonstration.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div id="faq" className="pt-12 border-t border-border scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-content-primary">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-content-secondary mt-1">
            Straightforward answers to common questions about our journeys.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-surface-primary rounded-2xl border border-border overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between font-bold text-content-primary text-sm sm:text-base hover:bg-surface-secondary/40 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-content-secondary transition-transform duration-200 shrink-0 ml-4 ${
                    openFaq === idx ? "rotate-180 text-brand" : ""
                  }`}
                />
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-5 text-sm text-content-secondary leading-relaxed border-t border-border/50 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
