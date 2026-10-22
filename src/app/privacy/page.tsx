import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export default function PrivacyPage() {
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
          <Shield className="w-6 h-6" />
        </div>
        <h1 className="text-3xl font-extrabold text-content-primary">
          Privacy Policy
        </h1>
        <p className="text-xs text-content-secondary">
          Last updated: October 2026
        </p>

        <div className="space-y-4 text-sm text-content-secondary leading-relaxed">
          <p>
            At ROAMLY (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;), protecting your personal information and travel privacy is fundamental to our values. This Privacy Policy outlines how sample information collected through our travel discovery website is handled.
          </p>
          <h2 className="text-base font-bold text-content-primary pt-2">
            1. Information We Collect
          </h2>
          <p>
            When utilizing our search, newsletter, contact, or simulated booking features, you may optionally provide contact details such as name, email address, telephone number, and travel window preferences.
          </p>
          <h2 className="text-base font-bold text-content-primary pt-2">
            2. Demonstration and Prototype Notice
          </h2>
          <p>
            This website is currently operating as a demonstration prototype. Data submitted via interactive forms is evaluated client-side for demonstration and design verification purposes and is not transmitted to third-party ad networks or sold to data brokers.
          </p>
          <h2 className="text-base font-bold text-content-primary pt-2">
            3. Contact
          </h2>
          <p>
            If you have questions regarding our privacy practices, please contact us at concierge@roamly.travel.
          </p>
        </div>
      </div>
    </div>
  );
}
