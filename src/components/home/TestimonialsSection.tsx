import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/content";

export function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-bg-main border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-2">
            Real Travelers, Real Perspectives
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-content-primary">
            Stories from the Road
          </h2>
          <p className="text-sm sm:text-base text-content-secondary mt-2">
            Read reflections from travelers who discovered memorable places with
            ROAMLY.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-surface-primary dark:bg-surface-primary rounded-2xl p-7 border border-border/80 shadow-subtle hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-brand/20" />
                </div>

                <p className="text-sm text-content-primary leading-relaxed italic mb-6">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-border/60 flex items-center gap-3.5">
                <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-border">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-content-primary">
                    {item.name}
                  </h4>
                  <p className="text-xs text-content-secondary">
                    {item.location} • <span className="text-brand">{item.tripTitle}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
