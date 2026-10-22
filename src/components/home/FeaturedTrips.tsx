import Link from "next/link";
import { ArrowRight, Compass, Sparkles } from "lucide-react";
import { TripCard } from "@/components/trips/TripCard";
import { TRIPS } from "@/data/trips";

export function FeaturedTrips() {
  const featuredTrips = TRIPS.filter((t) => t.featured).slice(0, 3);

  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-bg-main">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-accent mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Thoughtfully Curated</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-content-primary">
              Journeys Made for You
            </h2>
            <p className="text-base text-content-secondary mt-2 max-w-xl">
              Explore carefully organized trip itineraries designed around
              different interests, travel styles, and budgets.
            </p>
          </div>

          <Link
            href="/trips"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-surface-primary hover:bg-surface-secondary text-content-primary text-sm font-semibold transition-all shadow-subtle hover:shadow"
          >
            <span>View All Trips</span>
            <ArrowRight className="w-4 h-4 text-brand" />
          </Link>
        </div>

        {/* Mixed Editorial Grid Inspired by Reference 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature Introduction Panel */}
          <div className="lg:col-span-1 rounded-2xl p-7 bg-brand text-white flex flex-col justify-between shadow-card relative overflow-hidden">
            <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-white/5 pointer-events-none" />
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                <Compass className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-3">
                Signature Travel Packages
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Handpicked boutique stays, certified regional guides, and
                all-inclusive logistics so you can simply arrive and immerse.
              </p>
            </div>

            <div className="relative z-10 pt-8 mt-auto border-t border-white/15">
              <p className="text-xs text-white/70 uppercase tracking-widest mb-3">
                What&apos;s included
              </p>
              <ul className="text-xs space-y-2 text-white/90">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Small group departures (Max 8-10)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Zero hidden reservation fees
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Flexible date rescheduling
                </li>
              </ul>

              <Link
                href="/trips"
                className="mt-6 w-full py-2.5 px-4 rounded-xl bg-white text-brand hover:bg-white/90 font-semibold text-xs tracking-wide uppercase text-center block transition-colors"
              >
                Browse All Packages
              </Link>
            </div>
          </div>

          {/* 3 Prominent Featured Trip Cards */}
          {featuredTrips.map((trip) => (
            <div key={trip.id} className="lg:col-span-1">
              <TripCard trip={trip} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
