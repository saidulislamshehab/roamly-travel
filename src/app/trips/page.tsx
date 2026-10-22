"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search, Compass, SlidersHorizontal, MapPin } from "lucide-react";
import { TRIPS } from "@/data/trips";
import { TripCard } from "@/components/trips/TripCard";
import { TripStyle } from "@/types/trip";

const STYLES: ("All" | TripStyle)[] = [
  "All",
  "Adventure",
  "Culture",
  "Nature",
  "Relaxation",
  "Coastal",
];

function TripsContent() {
  const searchParams = useSearchParams();
  const initialStyle = searchParams.get("style");
  const initialDestination = searchParams.get("destination") || "";

  const [searchTerm, setSearchTerm] = useState(initialDestination);
  const [selectedStyle, setSelectedStyle] = useState<string>("All");
  const [maxPrice, setMaxPrice] = useState<number>(2000);
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "duration">("featured");

  useEffect(() => {
    if (initialStyle) {
      // capitalize first letter if needed
      const matched = STYLES.find(
        (s) => s.toLowerCase() === initialStyle.toLowerCase()
      );
      if (matched) setSelectedStyle(matched);
    }
    if (initialDestination) {
      setSearchTerm(initialDestination);
    }
  }, [initialStyle, initialDestination]);

  const filteredTrips = useMemo(() => {
    return TRIPS.filter((t) => {
      const matchesSearch =
        t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.country.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStyle =
        selectedStyle === "All" || t.style.toLowerCase() === selectedStyle.toLowerCase();
      const matchesPrice = t.price <= maxPrice;

      return matchesSearch && matchesStyle && matchesPrice;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "duration") return a.durationDays - b.durationDays;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [searchTerm, selectedStyle, maxPrice, sortBy]);

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-bold uppercase tracking-widest mb-3">
          <Compass className="w-3.5 h-3.5" />
          <span>Curated Itineraries</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-content-primary">
          Find Your Ideal Travel Package
        </h1>
        <p className="mt-4 text-base sm:text-lg text-content-secondary leading-relaxed">
          From island-hopping lagoons to high-alpine refuges and Kyoto zen gardens.
          Small group travel with zero stress.
        </p>
      </div>

      {/* Filter and Search Panel */}
      <div className="bg-surface-primary p-6 rounded-3xl border border-border shadow-subtle mb-10 space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Keyword Search */}
          <div className="md:col-span-5 relative">
            <Search className="w-5 h-5 text-content-secondary absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by trip name or destination (e.g. Palawan, Dolomites)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl border border-border bg-surface-secondary text-content-primary placeholder:text-content-secondary/70 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>

          {/* Max Budget Slider */}
          <div className="md:col-span-4 bg-surface-secondary px-4 py-2.5 rounded-2xl border border-border">
            <div className="flex items-center justify-between text-xs font-semibold text-content-secondary mb-1">
              <span>Max Budget / Person</span>
              <span className="text-brand font-bold text-sm">${maxPrice}</span>
            </div>
            <input
              type="range"
              min="500"
              max="2000"
              step="50"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-brand cursor-pointer"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="md:col-span-3 relative flex items-center">
            <SlidersHorizontal className="w-4 h-4 text-content-secondary absolute left-4" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "featured" | "price-asc" | "price-desc" | "duration")}
              className="w-full pl-11 pr-8 py-3 rounded-2xl border border-border bg-surface-secondary text-content-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand appearance-none cursor-pointer"
            >
              <option value="featured">Sort by: Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="duration">Trip Duration</option>
            </select>
          </div>
        </div>

        {/* Style Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-none">
          <span className="text-xs font-semibold uppercase tracking-wider text-content-secondary shrink-0 mr-1">
            Travel Style:
          </span>
          {STYLES.map((style) => (
            <button
              key={style}
              type="button"
              onClick={() => setSelectedStyle(style)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedStyle === style
                  ? "bg-brand text-white shadow-sm"
                  : "bg-surface-secondary text-content-secondary hover:text-content-primary hover:bg-border"
              }`}
            >
              {style}
            </button>
          ))}
        </div>
      </div>

      {/* Trips Grid */}
      {filteredTrips.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredTrips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="py-20 text-center bg-surface-primary rounded-3xl border border-dashed border-border p-8">
          <MapPin className="w-10 h-10 text-content-secondary/40 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-content-primary">
            No travel packages found
          </h3>
          <p className="text-sm text-content-secondary mt-1 max-w-sm mx-auto">
            Try adjusting your search terms, increasing your budget limit, or selecting &quot;All&quot; travel styles.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchTerm("");
              setSelectedStyle("All");
              setMaxPrice(2000);
            }}
            className="mt-4 px-4 py-2 rounded-full bg-brand text-white text-xs font-semibold hover:bg-brand-hover transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}

export default function TripsPage() {
  return (
    <Suspense fallback={<div className="pt-32 text-center text-sm">Loading trips...</div>}>
      <TripsContent />
    </Suspense>
  );
}
