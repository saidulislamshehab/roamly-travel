import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-content-secondary hover:text-brand transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="bg-surface-primary p-8 sm:p-12 rounded-3xl border border-border shadow-subtle space-y-6">
        <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mb-4">
          <FileText className="w-6 h-6" />
        </div>
        <h1 className="text-3xl font-extrabold text-content-primary">
          Terms &amp; Conditions
        </h1>
        <p className="text-xs text-content-secondary">
          Last updated: October 2026
        </p>

        <div className="space-y-4 text-sm text-content-secondary leading-relaxed">
          <p>
            Welcome to ROAMLY. By exploring our platform, reviewing itineraries, or engaging with our demonstration booking features, you agree to these Terms and Conditions.
          </p>
          <h2 className="text-base font-bold text-content-primary pt-2">
            1. Platform Purpose &amp; Prototype Nature
          </h2>
          <p>
            ROAMLY is presented as an architectural travel discovery and booking platform prototype. Trip itineraries, ratings, prices, and guide reviews represent illustrative demonstration content for design and architectural review.
          </p>
          <h2 className="text-base font-bold text-content-primary pt-2">
            2. Intellectual Property
          </h2>
          <p>
            All brand elements, layout compositions, code systems, and typography configurations are protected by applicable intellectual property rights.
          </p>
          <h2 className="text-base font-bold text-content-primary pt-2">
            3. Inquiries
          </h2>
          <p>
            For questions about our terms, please contact legal@roamly.travel.
          </p>
        </div>
      </div>
    </div>
  );
}
