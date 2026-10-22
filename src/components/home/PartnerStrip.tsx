import { Compass, Mountain, Sun, Trees, Waves } from "lucide-react";

export function PartnerStrip() {
  const partners = [
    { name: "Terra Travel", label: "TERRA", sub: "TRAVEL", icon: Trees },
    { name: "Horizon Getaways", label: "HORIZON", sub: "GETAWAYS", icon: Waves },
    { name: "Wayfarer Journeys", label: "WAYFARER", sub: "JOURNEYS", icon: Mountain },
    { name: "Solara Travel", label: "SOLARA", sub: "TRAVEL", icon: Sun },
    { name: "Wander More", label: "WANDER", sub: "MORE", icon: Compass },
  ];

  return (
    <section className="py-10 border-b border-border/60 bg-bg-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[11px] font-semibold uppercase tracking-widest text-content-secondary/70 mb-6">
          Curated with Trusted Global Travel Networks & Independent Stays
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16 opacity-70 hover:opacity-100 transition-opacity">
          {partners.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.name}
                className="flex items-center gap-2.5 text-content-secondary hover:text-content-primary transition-colors cursor-default"
                title={`${p.name} (Curated Partner)`}
              >
                <Icon className="w-5 h-5 text-content-secondary/80" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-content-primary/80">
                    {p.label}
                  </span>
                  <span className="text-[9px] font-medium tracking-[0.25em] uppercase text-content-secondary">
                    {p.sub}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
