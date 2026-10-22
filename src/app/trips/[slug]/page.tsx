import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Clock,
  Users,
  CheckCircle2,
  XCircle,
  Star,
  Activity,
  ShieldCheck,
} from "lucide-react";
import { TRIPS } from "@/data/trips";
import { formatPrice } from "@/lib/utils";
import { TripCard } from "@/components/trips/TripCard";

interface TripPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return TRIPS.map((t) => ({
    slug: t.slug,
  }));
}

export default function TripDetailPage({ params }: TripPageProps) {
  const trip = TRIPS.find((t) => t.slug === params.slug);

  if (!trip) {
    notFound();
  }

  const relatedTrips = TRIPS.filter(
    (t) => t.id !== trip.id && (t.style === trip.style || t.country === trip.country)
  ).slice(0, 3);

  return (
    <div className="pb-24">
      {/* 1. Trip Hero Banner */}
      <div className="relative min-h-[55vh] lg:min-h-[65vh] flex items-end pb-16 pt-32 px-4 sm:px-6 lg:px-8">
        <Image
          src={trip.image}
          alt={trip.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl text-white">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-brand text-white text-xs font-semibold uppercase tracking-wider">
                {trip.style}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1 border border-white/20">
                <Clock className="w-3.5 h-3.5 text-accent" />
                {trip.duration}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1 border border-white/20">
                <Users className="w-3.5 h-3.5 text-accent" />
                {trip.groupSize}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3">
              {trip.title}
            </h1>

            <p className="flex items-center gap-1.5 text-base sm:text-lg text-white/90">
              <MapPin className="w-4 h-4 text-accent" />
              {trip.destination}, {trip.country}
            </p>

            <div className="mt-4 flex items-center gap-2 text-sm text-amber-300 font-semibold">
              <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
              <span>{trip.rating.toFixed(2)}</span>
              <span className="text-white/70">
                ({trip.reviewCount} verified traveler reviews)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content & Booking Panel Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Itinerary, Inclusions & Overview */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <div>
              <h2 className="text-2xl font-bold text-content-primary mb-4">
                Journey Overview
              </h2>
              <p className="text-base text-content-secondary leading-relaxed">
                {trip.description}
              </p>
            </div>

            {/* Trip Highlights */}
            <div>
              <h3 className="text-xl font-bold text-content-primary mb-4">
                Signature Experiences
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {trip.highlights.map((h, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-xl bg-surface-primary border border-border shadow-subtle"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                    <span className="text-sm text-content-primary font-medium">
                      {h}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Day-by-Day Detailed Itinerary Timeline */}
            <div>
              <h3 className="text-2xl font-bold text-content-primary mb-6">
                Day-by-Day Itinerary
              </h3>
              <div className="space-y-6 relative before:absolute before:left-5 before:top-4 before:bottom-4 before:w-0.5 before:bg-border">
                {trip.itinerary.map((day) => (
                  <div
                    key={day.day}
                    className="relative pl-12 group"
                  >
                    {/* Number Badge */}
                    <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center font-bold text-sm shadow-sm group-hover:scale-110 transition-transform">
                      {day.day}
                    </div>

                    <div className="bg-surface-primary p-5 rounded-2xl border border-border shadow-subtle group-hover:border-brand/40 transition-colors">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h4 className="text-base font-bold text-content-primary">
                          {day.title}
                        </h4>
                        {day.location && (
                          <span className="text-xs px-2.5 py-0.5 rounded-full bg-surface-secondary text-content-secondary font-medium">
                            {day.location}
                          </span>
                        )}
                      </div>

                      <p className="text-sm text-content-secondary leading-relaxed">
                        {day.description}
                      </p>

                      {(day.meals || day.accommodation) && (
                        <div className="mt-3 pt-3 border-t border-border/60 flex flex-wrap gap-4 text-xs text-content-secondary">
                          {day.accommodation && (
                            <span>
                              <strong>Stay:</strong> {day.accommodation}
                            </span>
                          )}
                          {day.meals && (
                            <span>
                              <strong>Meals:</strong> {day.meals}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Included & Excluded */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {/* Included */}
              <div className="bg-surface-primary p-6 rounded-2xl border border-border">
                <h4 className="text-sm font-bold uppercase tracking-wider text-brand mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  What&apos;s Included
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-content-secondary">
                  {trip.included.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Excluded */}
              <div className="bg-surface-primary p-6 rounded-2xl border border-border">
                <h4 className="text-sm font-bold uppercase tracking-wider text-content-secondary mb-4 flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-content-secondary" />
                  Not Included
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-content-secondary">
                  {trip.excluded.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-content-secondary/40 shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Booking Card */}
          <div className="lg:col-span-4">
            <div className="bg-surface-primary p-6 sm:p-7 rounded-3xl border border-border shadow-card sticky top-24 space-y-6">
              {/* Price header */}
              <div className="border-b border-border pb-4">
                <span className="text-xs uppercase tracking-wider text-content-secondary block">
                  All-Inclusive Package
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl font-extrabold text-content-primary">
                    {formatPrice(trip.price)}
                  </span>
                  {trip.originalPrice && (
                    <span className="text-sm line-through text-content-secondary">
                      {formatPrice(trip.originalPrice)}
                    </span>
                  )}
                  <span className="text-xs text-content-secondary">/ person</span>
                </div>
              </div>

              {/* Quick Trip Metadata */}
              <div className="space-y-3 text-xs text-content-secondary">
                <div className="flex items-center justify-between">
                  <span>Duration</span>
                  <span className="font-semibold text-content-primary">
                    {trip.duration}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Travel Style</span>
                  <span className="font-semibold text-content-primary">
                    {trip.style}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Group Size</span>
                  <span className="font-semibold text-content-primary">
                    {trip.groupSize}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Physical Pace</span>
                  <span className="font-semibold text-brand flex items-center gap-1">
                    <Activity className="w-3.5 h-3.5" />
                    {trip.physicalRating}
                  </span>
                </div>
              </div>

              {/* Booking CTA */}
              <div className="pt-2">
                <Link
                  href={`/booking?tripId=${trip.id}`}
                  className="w-full py-4 px-6 rounded-2xl bg-accent hover:bg-accent-hover text-white text-center font-semibold text-sm tracking-wide shadow-md transition-all block active:scale-95"
                >
                  Proceed to Review &amp; Book
                </Link>

                <p className="text-[11px] text-center text-content-secondary mt-3 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand" />
                  Free cancellation up to 30 days before departure
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Trips */}
        {relatedTrips.length > 0 && (
          <div className="mt-20 pt-12 border-t border-border">
            <h3 className="text-2xl font-bold text-content-primary mb-8">
              Similar Journeys You Might Love
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedTrips.map((related) => (
                <TripCard key={related.id} trip={related} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
