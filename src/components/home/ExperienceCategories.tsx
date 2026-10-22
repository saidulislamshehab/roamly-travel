import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES } from "@/data/content";

export function ExperienceCategories() {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-surface-primary dark:bg-surface-primary/60 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand block mb-2">
              Tailored To Your Passions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-content-primary">
              Discover by Travel Style
            </h2>
            <p className="text-sm sm:text-base text-content-secondary mt-1.5 max-w-lg">
              Whether you crave steep alpine trails or quiet coastal meditation,
              explore journeys matched to your spirit.
            </p>
          </div>

          <Link
            href="/experiences"
            className="text-xs sm:text-sm font-semibold text-brand hover:text-brand-hover tracking-wide uppercase hover:underline"
          >
            Explore All Categories →
          </Link>
        </div>

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

              <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-brand group-hover:text-white transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </div>

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
    </section>
  );
}
