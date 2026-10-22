"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Lock, Mail, User, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setStatus("error");
      setErrorMsg("Please complete all registration fields.");
      return;
    }
    if (!email.includes("@")) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      setStatus("error");
      setErrorMsg("Password must be at least 6 characters.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    setTimeout(() => {
      setStatus("success");
    }, 800);
  };

  return (
    <div className="min-h-screen pt-28 pb-16 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-surface-primary rounded-3xl p-8 sm:p-10 border border-border shadow-card">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <BrandLogo size="md" showTagline />
          </div>
          <h1 className="text-2xl font-extrabold text-content-primary">
            Join the ROAMLY Guild
          </h1>
          <p className="text-xs sm:text-sm text-content-secondary mt-1">
            Unlock secret itineraries, member-only departures, and curated field guides.
          </p>
        </div>

        {status === "success" ? (
          <div className="p-6 rounded-2xl bg-brand/10 border border-brand/20 text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-brand mx-auto" />
            <h3 className="text-base font-bold text-content-primary">
              Registration Successful
            </h3>
            <p className="text-xs text-content-secondary">
              Welcome, <strong className="text-content-primary">{name}</strong>! Your demo traveler account is ready.
            </p>
            <Link
              href="/trips"
              className="mt-3 inline-block px-5 py-2.5 rounded-full bg-brand text-white text-xs font-semibold hover:bg-brand-hover"
            >
              Start Exploring Trips
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-content-secondary mb-1">
                Full Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-content-secondary absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  placeholder="Jane Explorer"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-surface-secondary text-content-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-content-secondary mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-content-secondary absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  placeholder="jane@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-surface-secondary text-content-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-content-secondary mb-1">
                Create Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-content-secondary absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="At least 6 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-border bg-surface-secondary text-content-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-content-secondary hover:text-content-primary p-1"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {status === "error" && (
              <p className="text-xs text-red-500 font-medium">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3 rounded-xl bg-accent hover:bg-accent-hover text-white text-sm font-semibold tracking-wide flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95 disabled:opacity-50"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Creating account...</span>
                </>
              ) : (
                <>
                  <span>Create Free Account</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}

        <div className="mt-6 pt-6 border-t border-border text-center text-xs text-content-secondary">
          Already have an account?{" "}
          <Link href="/sign-in" className="font-semibold text-brand hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
