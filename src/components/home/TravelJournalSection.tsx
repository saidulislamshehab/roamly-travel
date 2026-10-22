import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import { ArticleCard } from "@/components/journal/ArticleCard";
import { ARTICLES } from "@/data/content";

export function TravelJournalSection() {
  const articles = ARTICLES.slice(0, 3);

  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-surface-primary dark:bg-surface-primary/40 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>ROAMLY Journal</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-content-primary">
              Guides &amp; Travel Notes
            </h2>
            <p className="text-sm sm:text-base text-content-secondary mt-1.5 max-w-lg">
              Practical packing tips, slow travel philosophies, and hidden temple
              walks written by passionate field writers.
            </p>
          </div>

          <Link
            href="/journal"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand hover:text-brand-hover tracking-wide uppercase hover:underline"
          >
            <span>Read All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
