export type DestinationCategory =
  | "Coast & culture"
  | "Tradition & calm"
  | "City & nature"
  | "Island escapes"
  | "Alpine adventures"
  | "Tropical relaxation"
  | "Mountain retreats";

export interface Destination {
  id: string;
  slug: string;
  name: string;
  country: string;
  region: string;
  category: DestinationCategory;
  tagline: string;
  description: string;
  image: string;
  gallery: string[];
  startingPrice: number;
  rating: number;
  reviewCount: number;
  bestTimeToVisit: string;
  climate: string;
  highlights: string[];
  activities: string[];
  featured?: boolean;
}
