"use client";

import { useState } from "react";
import { Mail, CheckCircle2, ArrowRight, Loader2 } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@") || !email.includes(".")) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    // Simulate subscription API
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 800);
  };

  return (
    <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-surface-secondary/70 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mx-auto mb-4">
          <Mail className="w-6 h-6 text-brand" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-content-primary">
          Your Next Adventure Starts Here.
        </h2>

        <p className="mt-3 text-sm sm:text-base text-content-secondary max-w-xl mx-auto leading-relaxed">
          Get secret destination discoveries, seasonal packing tips, and curated
          itineraries delivered once every two weeks. No spam, ever.
        </p>

        {status === "success" ? (
          <div className="mt-8 p-4 rounded-2xl bg-brand/10 border border-brand/20 text-brand inline-flex items-center gap-2 text-sm font-semibold animate-fade-in">
            <CheckCircle2 className="w-5 h-5 text-brand" />
            <span>Thank you for subscribing! Your sample welcome guide is on its way.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
          >
            <div className="relative w-full">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                disabled={status === "loading"}
                className="w-full px-4 py-3 rounded-xl border border-border bg-surface-primary text-content-primary text-sm placeholder:text-content-secondary/60 focus:outline-none focus:ring-2 focus:ring-brand shadow-sm transition-all"
                aria-label="Email address for travel newsletter"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand hover:bg-brand-hover text-white text-sm font-semibold tracking-wide flex items-center justify-center gap-2 shadow-sm transition-all shrink-0 active:scale-95 disabled:opacity-50"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Subscribing...</span>
                </>
              ) : (
                <>
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="text-xs text-red-500 font-medium mt-2">{errorMessage}</p>
        )}

        <p className="text-[11px] text-content-secondary mt-4">
          Demo prototype form. You can unsubscribe at any time with one click.
        </p>
      </div>
    </section>
  );
}
