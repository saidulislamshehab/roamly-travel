import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { Destination } from "@/types/destination";
import { cn, formatPrice } from "@/lib/utils";

interface DestinationCardProps {
  destination: Destination;
  className?: string;
}

export function DestinationCard({ destination, className }: DestinationCardProps) {
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className={cn(
        "group relative block aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden shadow-subtle hover:shadow-card transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
        className
      )}
    >
      {/* Background Destination Image */}
      <Image
        src={destination.image}
        alt={`${destination.name}, ${destination.country} — ${destination.tagline}`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Top badges */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-surface-primary/90 backdrop-blur-md text-content-primary shadow-sm border border-white/20">
          from {formatPrice(destination.startingPrice)}
        </span>

        {/* Diagonal arrow badge inspired by reference */}
        <div className="w-9 h-9 rounded-full bg-surface-primary/90 backdrop-blur-md flex items-center justify-center text-content-primary shadow-sm border border-white/20 group-hover:bg-brand group-hover:text-white transition-all duration-300">
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>

      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

      {/* Bottom Information */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-10 text-white">
        <div className="flex items-center gap-1.5 text-xs text-amber-300 font-semibold mb-1.5">
          <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
          <span>{destination.rating.toFixed(1)}</span>
          <span className="text-white/60 font-normal">
            ({destination.reviewCount})
          </span>
        </div>

        <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-amber-200 transition-colors">
          {destination.name}, {destination.country}
        </h3>

        <p className="text-xs text-white/80 font-medium mt-1">
          {destination.category}
        </p>
      </div>
    </Link>
  );
}
