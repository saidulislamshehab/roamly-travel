import { Search, Sliders, CheckCircle2 } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: Search,
      title: "Discover Your Destination",
      description:
        "Explore curated destinations and find extraordinary places that match your interests, season, and travel style.",
    },
    {
      step: "02",
      icon: Sliders,
      title: "Build & Customize Your Trip",
      description:
        "Choose flexible travel dates, examine day-by-day itineraries, and organize inclusions for your group.",
    },
    {
      step: "03",
      icon: CheckCircle2,
      title: "Review & Confirm Smoothly",
      description:
        "Transparent pricing with no surprise surcharges. Review your booking summary and prepare for the journey.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-surface-primary dark:bg-surface-primary/40 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand block mb-2">
            Seamless Discovery
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-content-primary">
            Booking Made as Easy as 1-2-3
          </h2>
          <p className="text-sm sm:text-base text-content-secondary mt-2">
            From initial inspiration to the open road, here is how we make travel
            effortless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Subtle horizontal connecting line on desktop */}
          <div className="hidden md:block absolute top-1/3 left-1/6 right-1/6 h-0.5 border-t border-dashed border-border -z-0" />

          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative z-10 flex flex-col items-center text-center p-8 rounded-2xl bg-surface-secondary/50 border border-border/80 hover:bg-surface-secondary transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand text-white flex items-center justify-center mb-5 shadow-sm">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <span className="text-xs font-mono font-bold text-accent mb-2">
                  STEP {item.step}
                </span>
                <h3 className="text-xl font-bold text-content-primary mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-content-secondary leading-relaxed max-w-xs">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
