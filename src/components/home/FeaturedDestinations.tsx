"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Compass } from "lucide-react";
import { DestinationCard } from "@/components/destinations/DestinationCard";
import { DESTINATIONS } from "@/data/destinations";

export function FeaturedDestinations() {
  const [startIndex, setStartIndex] = useState(0);
  const featured = DESTINATIONS;
  const itemsPerPage = 3;

  const maxIndex = Math.max(0, featured.length - itemsPerPage);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const visibleDestinations = featured.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Styled Container Matching Reference Image 3 */}
        <div className="bg-surface-primary dark:bg-surface-secondary/40 rounded-3xl p-6 sm:p-10 lg:p-12 border border-border shadow-subtle">
          {/* Header with Title and Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 lg:mb-10 gap-6">
            <div>
              {/* Terracotta Accent Dash */}
              <div className="w-10 h-1 bg-accent rounded-full mb-3" />
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand mb-1">
                <Compass className="w-3.5 h-3.5" />
                <span>Find Your Next Favorite</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-content-primary">
                Top Places
              </h2>
              <p className="text-sm sm:text-base text-content-secondary mt-1.5 max-w-lg">
                Handpicked places for your next journey. From quiet coastal towns to
                remarkable mountain escapes.
              </p>
            </div>

            {/* Carousel Controls & View All Link */}
            <div className="flex items-center gap-4">
              <Link
                href="/destinations"
                className="text-xs sm:text-sm font-semibold text-brand hover:text-brand-hover tracking-wide uppercase hover:underline mr-2"
              >
                Explore All Destinations
              </Link>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={startIndex === 0}
                  aria-label="Previous destination"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-content-primary disabled:opacity-30 disabled:cursor-not-allowed hover:bg-surface-secondary transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={startIndex >= maxIndex}
                  aria-label="Next destination"
                  className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-brand-hover transition-colors shadow-sm"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Destination Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {visibleDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
