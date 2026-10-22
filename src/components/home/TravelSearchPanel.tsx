"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Calendar, Users, Search, ChevronDown, Plus, Minus, X } from "lucide-react";
import { DESTINATIONS } from "@/data/destinations";
import { cn } from "@/lib/utils";

interface TravelSearchPanelProps {
  className?: string;
  initialDestination?: string;
  initialStartDate?: string;
  initialEndDate?: string;
  initialAdults?: number;
  initialChildren?: number;
}

export function TravelSearchPanel({
  className,
  initialDestination = "",
  initialStartDate = "",
  initialEndDate = "",
  initialAdults = 2,
  initialChildren = 0,
}: TravelSearchPanelProps) {
  const router = useRouter();

  // Search States
  const [destination, setDestination] = useState(initialDestination);
  const [isDestOpen, setIsDestOpen] = useState(false);
  const [startDate, setStartDate] = useState(initialStartDate);
  const [endDate, setEndDate] = useState(initialEndDate);
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [adults, setAdults] = useState(initialAdults);
  const [children, setChildren] = useState(initialChildren);
  const [isGuestsOpen, setIsGuestsOpen] = useState(false);

  // References for outside click handling
  const destRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);
  const guestsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (destRef.current && !destRef.current.contains(e.target as Node)) {
        setIsDestOpen(false);
      }
      if (dateRef.current && !dateRef.current.contains(e.target as Node)) {
        setIsDateOpen(false);
      }
      if (guestsRef.current && !guestsRef.current.contains(e.target as Node)) {
        setIsGuestsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredDestinations = DESTINATIONS.filter((d) =>
    `${d.name} ${d.country} ${d.category}`
      .toLowerCase()
      .includes(destination.toLowerCase())
  );

  const totalGuests = adults + children;
  const guestLabel = `${totalGuests} traveler${totalGuests > 1 ? "s" : ""}`;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (destination.trim()) params.set("destination", destination.trim());
    if (startDate) params.set("startDate", startDate);
    if (endDate) params.set("endDate", endDate);
    params.set("adults", adults.toString());
    params.set("children", children.toString());

    router.push(`/search?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className={cn(
        "relative bg-white dark:bg-[#202824] rounded-3xl lg:rounded-full p-2.5 sm:p-3 shadow-xl border border-border/80 transition-all",
        className
      )}
    >
      <div className="flex flex-col lg:flex-row items-center divide-y lg:divide-y-0 lg:divide-x divide-border/70">
        {/* Field 1: Destination */}
        <div
          ref={destRef}
          data-testid="dest-trigger"
          className="relative w-full lg:flex-1 px-4 py-2.5 rounded-2xl lg:rounded-full hover:bg-surface-secondary/60 transition-colors cursor-pointer"
          onClick={() => {
            setIsDestOpen(!isDestOpen);
            setIsDateOpen(false);
            setIsGuestsOpen(false);
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-surface-secondary flex items-center justify-center shrink-0 text-brand">
              <MapPin className="w-4 h-4 text-brand" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-content-secondary">
                Where
              </span>
              <input
                type="text"
                placeholder="Choose a destination"
                value={destination}
                onChange={(e) => {
                  setDestination(e.target.value);
                  setIsDestOpen(true);
                }}
                className="w-full bg-transparent text-sm font-semibold text-content-primary placeholder:text-content-secondary/60 focus:outline-none truncate"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            {destination && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setDestination("");
                }}
                className="p-1 text-content-secondary hover:text-content-primary rounded-full"
                aria-label="Clear destination"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Destination Dropdown */}
          {isDestOpen && (
            <div className="absolute left-0 right-0 top-full mt-3 bg-white dark:bg-[#202824] rounded-2xl shadow-2xl border border-border p-2 z-[100] max-h-72 overflow-y-auto">
              <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-content-secondary border-b border-border/50">
                Popular Destinations
              </div>
              {filteredDestinations.length > 0 ? (
                filteredDestinations.map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setDestination(`${d.name}, ${d.country}`);
                      setIsDestOpen(false);
                    }}
                    className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-surface-secondary flex items-center justify-between text-sm transition-colors group"
                  >
                    <div>
                      <p className="font-semibold text-content-primary group-hover:text-brand">
                        {d.name}, <span className="text-content-secondary font-normal">{d.country}</span>
                      </p>
                      <p className="text-xs text-content-secondary">{d.category}</p>
                    </div>
                    <span className="text-xs text-content-secondary font-medium">
                      from ${d.startingPrice}
                    </span>
                  </button>
                ))
              ) : (
                <div className="px-3 py-4 text-center text-xs text-content-secondary">
                  No destinations match &quot;{destination}&quot;
                </div>
              )}
            </div>
          )}
        </div>

        {/* Field 2: Dates */}
        <div
          ref={dateRef}
          data-testid="dates-trigger"
          className="relative w-full lg:flex-1 px-4 py-2.5 rounded-2xl lg:rounded-full hover:bg-surface-secondary/60 transition-colors cursor-pointer"
          onClick={() => {
            setIsDateOpen(!isDateOpen);
            setIsDestOpen(false);
            setIsGuestsOpen(false);
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-surface-secondary flex items-center justify-center shrink-0 text-brand">
              <Calendar className="w-4 h-4 text-brand" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-content-secondary">
                Dates
              </span>
              <p className="text-sm font-semibold text-content-primary truncate">
                {startDate && endDate
                  ? `${startDate} → ${endDate}`
                  : startDate
                  ? `From ${startDate}`
                  : "Select travel dates"}
              </p>
            </div>
          </div>

          {/* Date Picker Popover */}
          {isDateOpen && (
            <div
              className="absolute left-0 lg:-left-12 right-0 lg:w-80 top-full mt-3 bg-white dark:bg-[#202824] rounded-2xl shadow-2xl border border-border p-4 z-[100]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-border/50">
                <span className="text-xs font-semibold uppercase tracking-wider text-content-secondary">
                  Select Travel Window
                </span>
                {(startDate || endDate) && (
                  <button
                    type="button"
                    onClick={() => {
                      setStartDate("");
                      setEndDate("");
                    }}
                    className="text-xs text-accent hover:underline font-medium"
                  >
                    Reset
                  </button>
                )}
              </div>

              <div className="mt-3 space-y-3">
                <div>
                  <label className="block text-xs text-content-secondary mb-1">
                    Departure Date
                  </label>
                  <input
                    type="date"
                    value={startDate}
                    min={new Date().toISOString().split("T")[0]}
                    onChange={(e) => {
                      setStartDate(e.target.value);
                      if (endDate && e.target.value > endDate) {
                        setEndDate(e.target.value);
                      }
                    }}
                    className="w-full text-sm px-3 py-2 rounded-xl border border-border bg-surface-secondary text-content-primary focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                </div>

                <div>
                  <label className="block text-xs text-content-secondary mb-1">
                    Return Date
                  </label>
                  <input
                    type="date"
                    value={endDate}
                    min={startDate || new Date().toISOString().split("T")[0]}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full text-sm px-3 py-2 rounded-xl border border-border bg-surface-secondary text-content-primary focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => setIsDateOpen(false)}
                  className="w-full mt-2 py-2 text-xs font-semibold uppercase tracking-wider rounded-xl bg-brand text-white hover:bg-brand-hover transition-colors"
                >
                  Apply Dates
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Field 3: Guests */}
        <div
          ref={guestsRef}
          data-testid="guests-trigger"
          className="relative w-full lg:flex-1 px-4 py-2.5 rounded-2xl lg:rounded-full hover:bg-surface-secondary/60 transition-colors cursor-pointer"
          onClick={() => {
            setIsGuestsOpen(!isGuestsOpen);
            setIsDestOpen(false);
            setIsDateOpen(false);
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-surface-secondary flex items-center justify-center shrink-0 text-brand">
              <Users className="w-4 h-4 text-brand" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-content-secondary">
                Guests
              </span>
              <p className="text-sm font-semibold text-content-primary truncate flex items-center justify-between">
                <span>{guestLabel}</span>
                <ChevronDown className="w-4 h-4 text-content-secondary shrink-0 ml-1" />
              </p>
            </div>
          </div>

          {/* Guest Selector Popover */}
          {isGuestsOpen && (
            <div
              className="absolute right-0 top-full mt-3 w-72 bg-white dark:bg-[#202824] rounded-2xl shadow-2xl border border-border p-4 z-[100]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-4">
                {/* Adults */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-content-primary">Adults</p>
                    <p className="text-xs text-content-secondary">Ages 13 and above</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      type="button"
                      disabled={adults <= 1}
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-content-primary disabled:opacity-30 disabled:cursor-not-allowed hover:bg-surface-secondary"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-sm font-semibold w-4 text-center">
                      {adults}
                    </span>
                    <button
                      type="button"
                      disabled={adults >= 10}
                      onClick={() => setAdults(adults + 1)}
                      className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-content-primary disabled:opacity-30 disabled:cursor-not-allowed hover:bg-surface-secondary"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Children */}
                <div className="flex items-center justify-between pt-3 border-t border-border/50">
                  <div>
                    <p className="text-sm font-semibold text-content-primary">Children</p>
                    <p className="text-xs text-content-secondary">Ages 0 to 12</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      type="button"
                      disabled={children <= 0}
                      onClick={() => setChildren(Math.max(0, children - 1))}
                      className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-content-primary disabled:opacity-30 disabled:cursor-not-allowed hover:bg-surface-secondary"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-sm font-semibold w-4 text-center">
                      {children}
                    </span>
                    <button
                      type="button"
                      disabled={children >= 8}
                      onClick={() => setChildren(children + 1)}
                      className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-content-primary disabled:opacity-30 disabled:cursor-not-allowed hover:bg-surface-secondary"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsGuestsOpen(false)}
                  className="w-full py-2 text-xs font-semibold uppercase tracking-wider rounded-xl bg-brand text-white hover:bg-brand-hover transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="w-full lg:w-auto p-1 shrink-0">
          <button
            type="submit"
            className="w-full lg:w-auto h-12 px-7 rounded-2xl lg:rounded-full bg-brand hover:bg-brand-hover text-white flex items-center justify-center gap-2.5 font-semibold shadow-md transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            <Search className="w-4 h-4" />
            <span className="text-sm">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
}
