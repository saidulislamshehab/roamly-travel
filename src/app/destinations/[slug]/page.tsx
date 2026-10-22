import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Calendar,
  SunMedium,
  CheckCircle2,
  ArrowRight,
  Star,
  Compass,
} from "lucide-react";
import { DESTINATIONS } from "@/data/destinations";
import { TRIPS } from "@/data/trips";
import { TripCard } from "@/components/trips/TripCard";
import { formatPrice } from "@/lib/utils";

interface DestinationPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return DESTINATIONS.map((dest) => ({
    slug: dest.slug,
  }));
}

export default function DestinationDetailPage({ params }: DestinationPageProps) {
  const destination = DESTINATIONS.find((d) => d.slug === params.slug);

  if (!destination) {
    notFound();
  }

  // Related trips for this destination
  const relatedTrips = TRIPS.filter(
    (t) => t.destinationSlug === destination.slug || t.country === destination.country
  );

  return (
    <div className="pb-24">
      {/* 1. Destination Hero Banner */}
      <div className="relative min-h-[60vh] lg:min-h-[70vh] flex items-end pb-16 pt-32 px-4 sm:px-6 lg:px-8">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/30" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider mb-4 border border-white/20">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              <span>
                {destination.country} • {destination.region}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-3">
              {destination.name}
            </h1>

            <p className="text-lg sm:text-xl text-white/90 font-light leading-relaxed">
              {destination.tagline}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-1.5 text-amber-300 font-semibold">
                <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
                <span>{destination.rating.toFixed(2)}</span>
                <span className="text-white/70">
                  ({destination.reviewCount} reviews)
                </span>
              </div>
              <span>•</span>
              <div>
                Starting from{" "}
                <span className="font-bold text-white text-lg">
                  {formatPrice(destination.startingPrice)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Details, Highlights & Gallery */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <div>
              <h2 className="text-2xl font-bold text-content-primary mb-4">
                About {destination.name}
              </h2>
              <p className="text-base text-content-secondary leading-relaxed">
                {destination.description}
              </p>
            </div>

            {/* Photo Gallery */}
            <div>
              <h3 className="text-lg font-bold text-content-primary mb-4">
                Visual Impressions
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {destination.gallery.map((imgUrl, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-subtle border border-border"
                  >
                    <Image
                      src={imgUrl}
                      alt={`${destination.name} view ${idx + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="text-xl font-bold text-content-primary mb-4">
                Destination Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {destination.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-xl bg-surface-primary border border-border shadow-subtle"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                    <span className="text-sm text-content-primary font-medium">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Activities */}
            <div>
              <h3 className="text-xl font-bold text-content-primary mb-4">
                Recommended Activities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {destination.activities.map((activity, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-surface-secondary/70 border border-border text-sm font-medium text-content-primary"
                  >
                    <Compass className="w-4 h-4 text-accent shrink-0" />
                    <span>{activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Travel Planning Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-surface-primary p-6 sm:p-7 rounded-3xl border border-border shadow-subtle space-y-6 sticky top-24">
              <h3 className="text-lg font-bold text-content-primary border-b border-border/80 pb-3">
                Trip Essentials
              </h3>

              {/* Best Time to Visit */}
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-content-secondary">
                    Best Time to Visit
                  </h4>
                  <p className="text-sm font-semibold text-content-primary mt-0.5">
                    {destination.bestTimeToVisit}
                  </p>
                </div>
              </div>

              {/* Climate */}
              <div className="flex items-start gap-3">
                <SunMedium className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-content-secondary">
                    Climate &amp; Weather
                  </h4>
                  <p className="text-sm font-medium text-content-primary mt-0.5">
                    {destination.climate}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-border">
                <Link
                  href={`/trips?destination=${encodeURIComponent(destination.name)}`}
                  className="w-full py-3.5 px-4 rounded-2xl bg-brand hover:bg-brand-hover text-white text-sm font-semibold tracking-wide flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <span>Explore Available Trips</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Trips Section */}
        {relatedTrips.length > 0 && (
          <div className="mt-20 pt-12 border-t border-border">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand block mb-1">
                  Ready to Go?
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-content-primary">
                  Curated Trips In &amp; Around {destination.name}
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedTrips.map((trip) => (
                <TripCard key={trip.id} trip={trip} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
