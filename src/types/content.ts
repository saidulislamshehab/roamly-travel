export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  location: string;
  tripTitle: string;
  comment: string;
  rating: number;
  date: string;
}

export interface SearchCriteria {
  destination?: string;
  startDate?: string;
  endDate?: string;
  adults: number;
  children: number;
}

export interface BookingDraft {
  tripId: string;
  tripTitle: string;
  pricePerPerson: number;
  startDate: string;
  endDate: string;
  adults: number;
  children: number;
  fullName: string;
  email: string;
  phone: string;
  specialRequests?: string;
  totalPrice: number;
}
