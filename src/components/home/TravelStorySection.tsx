import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

export function TravelStorySection() {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-bg-main">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-brand text-white shadow-floating min-h-[500px] flex items-center">
          {/* Scenic Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=85"
              alt="Peaceful alpine lake reflection at sunrise"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-[center_60%]"
            />
            {/* Gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
          </div>

          {/* Content Over Background */}
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-widest uppercase mb-6">
              <Compass className="w-3.5 h-3.5 text-accent" />
              <span>Traveler Stories</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
              Some Journeys <br />
              Stay With You Forever.
            </h2>

            <p className="mt-6 text-base sm:text-lg text-white/85 leading-relaxed font-light">
              Follow winding roads, wake up beside quiet emerald lakes, and
              discover the small, unscripted moments that turn a simple journey
              into a lifelong memory.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/trips"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-accent hover:bg-accent-hover text-white text-sm font-semibold tracking-wide transition-all shadow-lg active:scale-95"
              >
                <span>Find Your Journey</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/journal"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white text-sm font-semibold tracking-wide transition-colors"
              >
                Read Traveler Stories
              </Link>
            </div>

            {/* Subtle Editorial Handwritten Note Stamp */}
            <div className="mt-12 pt-6 border-t border-white/20 flex items-center justify-between text-xs text-white/70">
              <span className="italic font-serif text-sm text-white/90">
                &ldquo;The world reveals itself to those who travel slowly.&rdquo;
              </span>
              <span className="font-mono uppercase tracking-widest text-[10px]">
                ROAMLY DISPATCH
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
