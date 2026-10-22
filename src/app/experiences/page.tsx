import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Home, ShieldCheck } from "lucide-react";
import { CATEGORIES } from "@/data/content";

export default function ExperiencesPage() {
  const stays = [
    {
      title: "Alpine Mountain Rifugios",
      location: "Dolomites & Alps",
      description: "High-altitude cliffside refuges offering warm timber interiors, wood-fired hearths, and sunrise panoramas over pale limestone peaks.",
      image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Historic Kyoto Machiya Townhouses",
      location: "Kyoto, Japan",
      description: "Centuries-old preserved artisan residences with private tatami courtyards, hinoki cedar soaking tubs, and traditional sliding shoji screens.",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Eco Beachfront Sanctuaries",
      location: "Palawan & Southeast Asia",
      description: "Sustainably engineered open-air bamboo pavilions and solar-powered oceanfront cottages nestled between limestone karsts and turquoise waters.",
      image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-bold uppercase tracking-widest mb-3">
          <Compass className="w-3.5 h-3.5" />
          <span>Curated Travel Experiences</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-content-primary">
          Experiences &amp; Unique Stays
        </h1>
        <p className="mt-4 text-base sm:text-lg text-content-secondary leading-relaxed">
          We believe where you rest your head is as memorable as the trail you
          walk. Discover travel styles and handpicked independent dwellings.
        </p>
      </div>

      {/* Section 1: Travel Categories */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold text-content-primary mb-6">
          Explore by Travel Style
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/trips?style=${cat.id}`}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-end p-6 border border-border"
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

              <div className="relative z-10 text-white">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold mb-2">
                  {cat.count}
                </span>
                <h3 className="text-xl font-bold tracking-tight mb-1 text-white group-hover:text-amber-200 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs text-white/80 line-clamp-2 leading-relaxed">
                  {cat.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Section 2: Distinctive Stays Philosophy */}
      <div className="bg-surface-primary rounded-3xl p-8 sm:p-12 border border-border shadow-subtle mb-16">
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-accent mb-2">
            <Home className="w-3.5 h-3.5" />
            <span>The ROAMLY Stays Standard</span>
          </div>
          <h2 className="text-3xl font-extrabold text-content-primary">
            Character, Craft &amp; Sense of Place
          </h2>
          <p className="text-sm sm:text-base text-content-secondary mt-2">
            Every stay included in our itineraries is independently owned,
            ecologically responsible, and architecturally rooted in its landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stays.map((stay) => (
            <div
              key={stay.title}
              className="group bg-surface-secondary/40 rounded-2xl overflow-hidden border border-border hover:border-brand/40 transition-colors"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={stay.image}
                  alt={stay.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold text-brand block mb-1">
                  {stay.location}
                </span>
                <h3 className="text-lg font-bold text-content-primary mb-2">
                  {stay.title}
                </h3>
                <p className="text-xs text-content-secondary leading-relaxed">
                  {stay.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-content-secondary">
            <ShieldCheck className="w-4 h-4 text-brand" />
            <span>Vetted for authentic hospitality and sustainable footprint</span>
          </div>
          <Link
            href="/trips"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand text-white text-xs font-semibold hover:bg-brand-hover transition-colors"
          >
            <span>Explore Packages with Stays</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
