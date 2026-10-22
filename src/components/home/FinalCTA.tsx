import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-brand text-white relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/5 pointer-events-none blur-2xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-accent/15 pointer-events-none blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-widest uppercase mb-6">
          <Compass className="w-3.5 h-3.5 text-accent" />
          <span>Begin Your Next Journey</span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
          The World Is Waiting.
        </h2>

        <p className="mt-5 text-base sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
          Start discovering places that inspire you, experiences that excite you,
          and journeys worth remembering for a lifetime.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent hover:bg-accent-hover text-white text-sm font-semibold tracking-wide shadow-lg shadow-black/20 hover:shadow-xl transition-all active:scale-95"
          >
            <span>Explore Destinations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/trips"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white text-sm font-semibold tracking-wide transition-all active:scale-95"
          >
            Browse All Trips
          </Link>
        </div>

        {/* Vintage Stamp Accent Inspired by Reference 3 */}
        <div className="mt-14 inline-flex items-center gap-3 py-2 px-4 rounded-full border border-dashed border-white/30 text-white/80 text-xs">
          <span className="font-serif italic text-sm text-white">
            &ldquo;Good Places, Brighter Days&rdquo;
          </span>
          <span>•</span>
          <span className="font-mono tracking-widest text-[10px] uppercase">
            ROAMLY ADVENTURE CO.
          </span>
        </div>
      </div>
    </section>
  );
}
