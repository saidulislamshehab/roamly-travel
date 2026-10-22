"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Plus,
  Minus,
  Loader2,
} from "lucide-react";
import { TRIPS } from "@/data/trips";
import { formatPrice } from "@/lib/utils";

function BookingContent() {
  const searchParams = useSearchParams();
  const tripId = searchParams.get("tripId") || TRIPS[0].id;
  const selectedTrip = TRIPS.find((t) => t.id === tripId) || TRIPS[0];

  const [startDate, setStartDate] = useState(
    new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]
  );
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    specialRequests: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "confirmed">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Price calculations
  const basePrice = selectedTrip.price;
  const adultTotal = adults * basePrice;
  const childTotal = children * Math.round(basePrice * 0.7); // 30% kid discount
  const serviceFee = 45;
  const grandTotal = adultTotal + childTotal + serviceFee;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg("Please fill out all required traveler contact details.");
      return;
    }
    if (!formData.email.includes("@")) {
      setErrorMsg("Please provide a valid email address.");
      return;
    }

    setErrorMsg("");
    setStatus("submitting");

    setTimeout(() => {
      setStatus("confirmed");
    }, 1000);
  };

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {status === "confirmed" ? (
        /* Confirmation Receipt */
        <div className="max-w-2xl mx-auto bg-surface-primary rounded-3xl p-8 sm:p-12 border border-border shadow-card text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-brand/10 text-brand flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10 text-brand" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand">
              Demo Reservation Confirmed
            </span>
            <h1 className="text-3xl font-extrabold text-content-primary">
              You&apos;re Going to {selectedTrip.destination}!
            </h1>
            <p className="text-sm text-content-secondary max-w-md mx-auto">
              Your mock booking reservation code is{" "}
              <strong className="text-content-primary font-mono">
                ROAM-{Math.floor(100000 + Math.random() * 900000)}
              </strong>
              . A sample itinerary summary has been prepared for {formData.fullName}.
            </p>
          </div>

          {/* Receipt Summary Card */}
          <div className="bg-surface-secondary/70 p-6 rounded-2xl border border-border text-left space-y-3 text-sm">
            <div className="flex justify-between border-b border-border/80 pb-2">
              <span className="text-content-secondary">Journey:</span>
              <span className="font-bold text-content-primary">
                {selectedTrip.title}
              </span>
            </div>
            <div className="flex justify-between border-b border-border/80 pb-2">
              <span className="text-content-secondary">Departure Date:</span>
              <span className="font-semibold text-content-primary">{startDate}</span>
            </div>
            <div className="flex justify-between border-b border-border/80 pb-2">
              <span className="text-content-secondary">Travelers:</span>
              <span className="font-semibold text-content-primary">
                {adults} Adult{adults > 1 ? "s" : ""}
                {children > 0 ? `, ${children} Child${children > 1 ? "ren" : ""}` : ""}
              </span>
            </div>
            <div className="flex justify-between border-b border-border/80 pb-2">
              <span className="text-content-secondary">Contact:</span>
              <span className="font-semibold text-content-primary">
                {formData.email} ({formData.phone})
              </span>
            </div>
            <div className="flex justify-between pt-1 text-base font-extrabold text-brand">
              <span>Total Example Price:</span>
              <span>{formatPrice(grandTotal)}</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-accent/10 border border-accent/20 text-xs text-content-secondary">
            <strong>Demonstration Note:</strong> No payment details were collected and no actual charge has been processed. This completes the end-to-end prototype booking validation flow.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/trips"
              className="px-6 py-3 rounded-full bg-brand text-white text-xs font-semibold hover:bg-brand-hover transition-colors"
            >
              Explore More Trips
            </Link>
            <Link
              href="/"
              className="px-6 py-3 rounded-full border border-border bg-surface-secondary text-content-primary text-xs font-semibold hover:bg-border transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      ) : (
        /* Booking Review Form */
        <div>
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-brand block mb-2">
              Step 3 of 3
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-content-primary">
              Review Your Journey &amp; Reserve
            </h1>
            <p className="text-sm text-content-secondary mt-1">
              Transparent breakdown, zero surprise charges, and flexible cancellation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Traveler Details Form */}
            <div className="lg:col-span-7 space-y-8">
              {/* Form container */}
              <form
                onSubmit={handleBooking}
                className="bg-surface-primary p-6 sm:p-8 rounded-3xl border border-border shadow-subtle space-y-6"
              >
                <h2 className="text-xl font-bold text-content-primary border-b border-border/80 pb-3">
                  1. Traveler Information
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-content-secondary mb-1">
                      Lead Traveler Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface-secondary text-content-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-content-secondary mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="eleanor@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface-secondary text-content-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-content-secondary mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 019-2834"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface-secondary text-content-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-content-secondary mb-1">
                    Special Inquiries or Dietary Needs
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Vegetarian meal preference, twin beds, airport transfer flight details, etc..."
                    value={formData.specialRequests}
                    onChange={(e) =>
                      setFormData({ ...formData, specialRequests: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface-secondary text-content-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand resize-none"
                  />
                </div>

                {errorMsg && (
                  <p className="text-xs text-red-500 font-semibold">{errorMsg}</p>
                )}

                <div className="pt-4 border-t border-border">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-4 rounded-2xl bg-brand hover:bg-brand-hover text-white text-sm font-semibold tracking-wide flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 disabled:opacity-50"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Confirming reservation...</span>
                      </>
                    ) : (
                      <>
                        <span>Complete Demo Reservation ({formatPrice(grandTotal)})</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-content-secondary text-center mt-2.5 flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand" />
                    Guaranteed confirmation. No real credit card charge in prototype mode.
                  </p>
                </div>
              </form>
            </div>

            {/* Right Column: Trip Summary & Calculation */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-surface-primary rounded-3xl border border-border shadow-subtle p-6 space-y-6">
                <h3 className="text-lg font-bold text-content-primary border-b border-border/80 pb-3">
                  Trip Overview
                </h3>

                {/* Selected Trip Card Mini */}
                <div className="flex gap-4 items-center">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-border">
                    <Image
                      src={selectedTrip.image}
                      alt={selectedTrip.title}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent block">
                      {selectedTrip.style} • {selectedTrip.duration}
                    </span>
                    <h4 className="text-base font-bold text-content-primary line-clamp-1">
                      {selectedTrip.title}
                    </h4>
                    <p className="text-xs text-content-secondary">
                      {selectedTrip.destination}
                    </p>
                  </div>
                </div>

                {/* Date adjustment */}
                <div className="space-y-1.5 pt-3 border-t border-border/80">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-content-secondary">
                    Select Departure Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={startDate}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full px-3 py-2 text-sm rounded-xl border border-border bg-surface-secondary text-content-primary focus:outline-none focus:ring-1 focus:ring-brand"
                    />
                  </div>
                </div>

                {/* Guest adjusters */}
                <div className="space-y-3 pt-3 border-t border-border/80">
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <span className="font-semibold text-content-primary block">Adults</span>
                      <span className="text-content-secondary">{formatPrice(basePrice)} each</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        type="button"
                        disabled={adults <= 1}
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                        className="w-7 h-7 rounded-full border border-border flex items-center justify-center disabled:opacity-30"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-4 text-center font-bold text-sm">{adults}</span>
                      <button
                        type="button"
                        onClick={() => setAdults(adults + 1)}
                        className="w-7 h-7 rounded-full border border-border flex items-center justify-center"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <span className="font-semibold text-content-primary block">Children (0–12)</span>
                      <span className="text-content-secondary">{formatPrice(Math.round(basePrice * 0.7))} (30% off)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        type="button"
                        disabled={children <= 0}
                        onClick={() => setChildren(Math.max(0, children - 1))}
                        className="w-7 h-7 rounded-full border border-border flex items-center justify-center disabled:opacity-30"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-4 text-center font-bold text-sm">{children}</span>
                      <button
                        type="button"
                        onClick={() => setChildren(children + 1)}
                        className="w-7 h-7 rounded-full border border-border flex items-center justify-center"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Transparent Price Calculation */}
                <div className="space-y-2 pt-4 border-t border-border text-xs text-content-secondary">
                  <div className="flex justify-between">
                    <span>
                      {adults} Adult{adults > 1 ? "s" : ""} × {formatPrice(basePrice)}
                    </span>
                    <span className="font-medium text-content-primary">
                      {formatPrice(adultTotal)}
                    </span>
                  </div>
                  {children > 0 && (
                    <div className="flex justify-between">
                      <span>
                        {children} Child{children > 1 ? "ren" : ""} × {formatPrice(Math.round(basePrice * 0.7))}
                      </span>
                      <span className="font-medium text-content-primary">
                        {formatPrice(childTotal)}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Eco-conservation and park entry fee</span>
                    <span className="font-medium text-content-primary">
                      {formatPrice(serviceFee)}
                    </span>
                  </div>

                  <div className="flex justify-between pt-3 border-t border-border text-base font-extrabold text-content-primary">
                    <span>Total Amount</span>
                    <span className="text-brand text-lg">{formatPrice(grandTotal)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="pt-32 text-center text-sm">Loading booking review...</div>}>
      <BookingContent />
    </Suspense>
  );
}
