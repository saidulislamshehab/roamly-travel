export type TripStyle = "Adventure" | "Culture" | "Nature" | "Relaxation" | "Coastal";

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  location?: string;
  accommodation?: string;
  meals?: string;
}

export interface Trip {
  id: string;
  slug: string;
  title: string;
  destination: string;
  destinationSlug: string;
  country: string;
  duration: string;
  durationDays: number;
  style: TripStyle;
  price: number;
  originalPrice?: number;
  description: string;
  shortDescription: string;
  image: string;
  gallery: string[];
  groupSize: string;
  physicalRating: "Easy" | "Moderate" | "Challenging";
  highlights: string[];
  included: string[];
  excluded: string[];
  itinerary: ItineraryDay[];
  featured?: boolean;
  rating: number;
  reviewCount: number;
}
