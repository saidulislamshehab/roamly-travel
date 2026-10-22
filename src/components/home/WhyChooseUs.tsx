import { Compass, CalendarCheck, Headphones, ShieldCheck } from "lucide-react";
import { STATS } from "@/data/content";

export function WhyChooseUs() {
  const features = [
    {
      icon: Compass,
      title: "Curated Discoveries",
      description:
        "Find memorable destinations, distinctive places to stay, and experiences suited to your travel style without wading through generic tour listings.",
    },
    {
      icon: CalendarCheck,
      title: "Flexible Trip Planning",
      description:
        "Compare curated trip options, verify detailed daily itineraries, and organize travel dates and group preferences in one transparent place.",
    },
    {
      icon: Headphones,
      title: "Helpful Travel Guidance",
      description:
        "Explore destination guides and practical insider information that help you prepare for the journey ahead with complete peace of mind.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-surface-primary dark:bg-surface-primary/60 border-y border-border/70">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading and Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-bold tracking-widest uppercase">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Travel With Confidence</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-content-primary leading-[1.15]">
              Less Planning Stress. <br />
              <span className="text-brand">More Extraordinary Moments.</span>
            </h2>

            <p className="text-base sm:text-lg text-content-secondary leading-relaxed">
              Discover thoughtfully selected destinations, compare curated travel
              options, and build a journey that fits your pace, curiosity, and
              budget. We filter out the noise so you can savor the road ahead.
            </p>

            {/* Trust Statistics Row (Centralized Mock Metrics) */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-border/80">
              {STATS.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <span className="text-2xl sm:text-3xl font-extrabold text-content-primary tracking-tight">
                    {stat.value}
                  </span>
                  <p className="text-xs font-semibold text-content-primary/90 leading-tight">
                    {stat.label}
                  </p>
                  <p className="text-[11px] text-content-secondary">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 3 Feature Cards Inspired by Reference 2 */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="flex items-start gap-5 p-6 rounded-2xl bg-surface-secondary/70 hover:bg-surface-secondary border border-border/60 transition-all duration-200 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-content-primary mb-1 group-hover:text-brand transition-colors">
                      {idx + 1}. {feature.title}
                    </h3>
                    <p className="text-sm text-content-secondary leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
