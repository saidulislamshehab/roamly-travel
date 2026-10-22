import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Star, ArrowRight } from "lucide-react";
import { Trip } from "@/types/trip";
import { cn, formatPrice } from "@/lib/utils";

interface TripCardProps {
  trip: Trip;
  className?: string;
}

export function TripCard({ trip, className }: TripCardProps) {
  return (
    <div
      className={cn(
        "group flex flex-col bg-surface-primary dark:bg-surface-primary rounded-2xl overflow-hidden border border-border hover:border-brand/40 shadow-subtle hover:shadow-card transition-all duration-300",
        className
      )}
    >
      {/* Image with Badges */}
      <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden">
        <Image
          src={trip.image}
          alt={trip.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-brand text-white shadow-sm">
            {trip.style}
          </span>
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-md text-white">
            <Clock className="w-3.5 h-3.5 text-accent" />
            <span>{trip.duration}</span>
          </div>
        </div>

        {/* Destination Location on Image */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
          <span className="flex items-center gap-1 font-medium drop-shadow">
            <MapPin className="w-3.5 h-3.5 text-accent" />
            {trip.destination}
          </span>
          <div className="flex items-center gap-1 font-semibold text-amber-300">
            <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
            <span>{trip.rating.toFixed(2)}</span>
            <span className="text-white/70">({trip.reviewCount})</span>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-content-primary group-hover:text-brand transition-colors line-clamp-1">
            {trip.title}
          </h3>
          <p className="text-xs text-content-secondary mt-1.5 line-clamp-2 leading-relaxed">
            {trip.shortDescription}
          </p>

          {/* Highlights */}
          <div className="mt-3.5 pt-3 border-t border-border/60 space-y-1">
            {trip.highlights.slice(0, 2).map((highlight, idx) => (
              <p
                key={idx}
                className="text-[11px] text-content-secondary flex items-center gap-1.5 truncate"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <span className="truncate">{highlight}</span>
              </p>
            ))}
          </div>
        </div>

        {/* Footer with Price & Action */}
        <div className="mt-5 pt-3.5 border-t border-border/80 flex items-center justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-content-secondary block">
              Starting from
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl font-extrabold text-content-primary">
                {formatPrice(trip.price)}
              </span>
              {trip.originalPrice && (
                <span className="text-xs line-through text-content-secondary">
                  {formatPrice(trip.originalPrice)}
                </span>
              )}
              <span className="text-[11px] text-content-secondary">/ person</span>
            </div>
          </div>

          <Link
            href={`/trips/${trip.slug}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-surface-secondary hover:bg-brand hover:text-white text-content-primary text-xs font-semibold transition-all group/btn"
          >
            <span>View Trip</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
