"use client";

import { useState, useMemo } from "react";
import { Search, Compass, SlidersHorizontal, MapPin } from "lucide-react";
import { DESTINATIONS } from "@/data/destinations";
import { DestinationCard } from "@/components/destinations/DestinationCard";

const CATEGORIES = [
  "All",
  "Coast & culture",
  "Tradition & calm",
  "City & nature",
  "Island escapes",
  "Alpine adventures",
  "Tropical relaxation",
  "Mountain retreats",
];

export default function DestinationsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "rating">("featured");

  const filteredDestinations = useMemo(() => {
    return DESTINATIONS.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.region.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.startingPrice - b.startingPrice;
      if (sortBy === "price-desc") return b.startingPrice - a.startingPrice;
      if (sortBy === "rating") return b.rating - a.rating;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-bold uppercase tracking-widest mb-3">
          <Compass className="w-3.5 h-3.5" />
          <span>Curated Global Portfolio</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-content-primary">
          Places Worth the Journey
        </h1>
        <p className="mt-4 text-base sm:text-lg text-content-secondary leading-relaxed">
          From sun-drenched Atlantic hills to ancient cedar forests and high
          alpine tarns. Browse our handpicked destination sanctuaries.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-surface-primary p-4 sm:p-6 rounded-3xl border border-border shadow-subtle mb-10 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Keyword Search */}
          <div className="md:col-span-8 relative">
            <Search className="w-5 h-5 text-content-secondary absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by city, country or region (e.g. Portugal, Kyoto, Alps)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl border border-border bg-surface-secondary text-content-primary placeholder:text-content-secondary/70 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="md:col-span-4 relative flex items-center">
            <SlidersHorizontal className="w-4 h-4 text-content-secondary absolute left-4" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "featured" | "price-asc" | "price-desc" | "rating")}
              className="w-full pl-11 pr-8 py-3 rounded-2xl border border-border bg-surface-secondary text-content-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand appearance-none cursor-pointer"
            >
              <option value="featured">Sort by: Featured</option>
              <option value="rating">Sort by: Highest Rated</option>
              <option value="price-asc">Sort by: Price (Low to High)</option>
              <option value="price-desc">Sort by: Price (High to Low)</option>
            </select>
          </div>
        </div>

        {/* Category Pill Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-2 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-brand text-white shadow-sm"
                  : "bg-surface-secondary text-content-secondary hover:text-content-primary hover:bg-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Destination Grid */}
      {filteredDestinations.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDestinations.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="py-20 text-center bg-surface-primary rounded-3xl border border-dashed border-border p-8">
          <MapPin className="w-10 h-10 text-content-secondary/40 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-content-primary">
            No destinations found
          </h3>
          <p className="text-sm text-content-secondary mt-1 max-w-sm mx-auto">
            We couldn&apos;t find any destination matching &quot;{searchTerm}&quot;. Try resetting your filters.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("All");
            }}
            className="mt-4 px-4 py-2 rounded-full bg-brand text-white text-xs font-semibold hover:bg-brand-hover transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
}
