"use client";

import { useSearchParams } from "next/navigation";
import { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import { Search, MapPin, Calendar, Users, SlidersHorizontal, ArrowLeft } from "lucide-react";
import { TRIPS } from "@/data/trips";
import { TripCard } from "@/components/trips/TripCard";
import { TravelSearchPanel } from "@/components/home/TravelSearchPanel";

function SearchResultsContent() {
  const searchParams = useSearchParams();
  const destQuery = searchParams.get("destination") || "";
  const startDate = searchParams.get("startDate") || "";
  const endDate = searchParams.get("endDate") || "";
  const adults = Number(searchParams.get("adults") || "2");
  const children = Number(searchParams.get("children") || "0");

  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc">("featured");
  const [showEditSearch, setShowEditSearch] = useState(false);

  const results = useMemo(() => {
    return TRIPS.filter((trip) => {
      if (!destQuery) return true;
      const q = destQuery.toLowerCase();
      return (
        trip.title.toLowerCase().includes(q) ||
        trip.destination.toLowerCase().includes(q) ||
        trip.country.toLowerCase().includes(q)
      );
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [destQuery, sortBy]);

  const totalGuests = adults + children;

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Back button */}
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-content-secondary hover:text-brand transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Homepage</span>
        </Link>
      </div>

      {/* Results Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-content-primary">
            {destQuery ? `Journeys in "${destQuery}"` : "All Available Journeys"}
          </h1>
          <p className="text-sm text-content-secondary mt-1">
            Found {results.length} curated trip{results.length === 1 ? "" : "s"} matching your criteria
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowEditSearch(!showEditSearch)}
          className="px-4 py-2 rounded-xl border border-border bg-surface-primary hover:bg-surface-secondary text-content-primary text-xs font-semibold tracking-wide flex items-center gap-2 self-start md:self-auto shadow-subtle"
        >
          <Search className="w-3.5 h-3.5 text-brand" />
          <span>{showEditSearch ? "Hide Search Editor" : "Modify Search"}</span>
        </button>
      </div>

      {/* Active Search Pills */}
      <div className="flex flex-wrap items-center gap-2.5 mb-8">
        {destQuery && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-semibold border border-brand/20">
            <MapPin className="w-3.5 h-3.5" />
            {destQuery}
          </span>
        )}
        {startDate && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-primary text-content-primary text-xs font-semibold border border-border">
            <Calendar className="w-3.5 h-3.5 text-accent" />
            {startDate} {endDate ? `→ ${endDate}` : ""}
          </span>
        )}
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-primary text-content-primary text-xs font-semibold border border-border">
          <Users className="w-3.5 h-3.5 text-brand" />
          {totalGuests} Traveler{totalGuests > 1 ? "s" : ""} ({adults} Adult{adults > 1 ? "s" : ""}{children > 0 ? `, ${children} Kid${children > 1 ? "s" : ""}` : ""})
        </span>

        <div className="ml-auto flex items-center gap-2">
          <SlidersHorizontal className="w-3.5 h-3.5 text-content-secondary" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as "featured" | "price-asc" | "price-desc")}
            className="text-xs bg-surface-primary border border-border rounded-lg px-2.5 py-1.5 font-medium text-content-primary focus:outline-none focus:ring-1 focus:ring-brand"
          >
            <option value="featured">Sort: Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Collapsible Search Editor */}
      {showEditSearch && (
        <div className="mb-10 p-6 bg-surface-secondary/60 rounded-3xl border border-border animate-fade-in">
          <h3 className="text-sm font-bold uppercase tracking-wider text-content-primary mb-3">
            Update Travel Search
          </h3>
          <TravelSearchPanel
            initialDestination={destQuery}
            initialStartDate={startDate}
            initialEndDate={endDate}
            initialAdults={adults}
            initialChildren={children}
          />
        </div>
      )}

      {/* Results Grid */}
      {results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {results.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="py-20 text-center bg-surface-primary rounded-3xl border border-dashed border-border p-8">
          <Search className="w-12 h-12 text-content-secondary/40 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-content-primary">
            No journeys match your exact query
          </h3>
          <p className="text-sm text-content-secondary mt-1 max-w-sm mx-auto">
            Try searching for broader regions like &quot;Portugal&quot;, &quot;Italy&quot;, &quot;Japan&quot;, or &quot;Philippines&quot;.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <Link
              href="/trips"
              className="px-4 py-2 rounded-full bg-brand text-white text-xs font-semibold hover:bg-brand-hover transition-colors"
            >
              Browse All Trips
            </Link>
            <Link
              href="/destinations"
              className="px-4 py-2 rounded-full bg-surface-secondary text-content-primary text-xs font-semibold hover:bg-border transition-colors border border-border"
            >
              Explore Destinations
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="pt-32 text-center text-sm">Searching trips...</div>}>
      <SearchResultsContent />
    </Suspense>
  );
}
