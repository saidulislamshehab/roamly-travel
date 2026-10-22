import Link from "next/link";
import { Compass, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 pb-16">
      <div className="max-w-md w-full bg-surface-primary rounded-3xl p-8 sm:p-10 border border-border shadow-card text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-brand/10 text-brand flex items-center justify-center mx-auto">
          <Compass className="w-8 h-8 animate-spin-slow" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-accent tracking-widest uppercase">
            Error 404 — Off the Map
          </span>
          <h1 className="text-3xl font-extrabold text-content-primary">
            Destination Not Found
          </h1>
          <p className="text-sm text-content-secondary leading-relaxed">
            The trail you are looking for might have moved or doesn&apos;t exist. Let&apos;s guide you back to familiar coordinates.
          </p>
        </div>

        <div className="pt-2 flex flex-col gap-3">
          <Link
            href="/"
            className="w-full py-3.5 rounded-full bg-brand hover:bg-brand-hover text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
          >
            <span>Return to Homepage</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/destinations"
            className="w-full py-3 rounded-full border border-border bg-surface-secondary text-content-primary text-xs font-semibold hover:bg-border transition-colors"
          >
            Explore All Destinations
          </Link>
        </div>
      </div>
    </div>
  );
}
