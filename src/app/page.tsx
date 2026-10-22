import { HeroSection } from "@/components/home/HeroSection";
import { PartnerStrip } from "@/components/home/PartnerStrip";
import { FeaturedDestinations } from "@/components/home/FeaturedDestinations";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { FeaturedTrips } from "@/components/home/FeaturedTrips";
import { HowItWorks } from "@/components/home/HowItWorks";
import { TravelStorySection } from "@/components/home/TravelStorySection";
import { ExperienceCategories } from "@/components/home/ExperienceCategories";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { TravelJournalSection } from "@/components/home/TravelJournalSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      {/* 1. Immersive Hero with Integrated Search Panel */}
      <HeroSection />

      {/* 2. Travel Partners & Trust Strip */}
      <PartnerStrip />

      {/* 3. Featured Destinations (Top Places) */}
      <FeaturedDestinations />

      {/* 4. Why Travel with Roamly & Trust Statistics */}
      <WhyChooseUs />

      {/* 5. Thoughtfully Curated Travel Packages */}
      <FeaturedTrips />

      {/* 6. How Booking Works in 3 Steps */}
      <HowItWorks />

      {/* 7. Inspirational Travel Story Section */}
      <TravelStorySection />

      {/* 8. Discover by Travel Style / Categories */}
      <ExperienceCategories />

      {/* 9. Stories from the Road (Testimonials) */}
      <TestimonialsSection />

      {/* 10. Travel Journal & Guides */}
      <TravelJournalSection />

      {/* 11. Newsletter Subscription */}
      <NewsletterSection />

      {/* 12. Final Call to Action */}
      <FinalCTA />
    </>
  );
}
