import { BookOpen } from "lucide-react";
import { ARTICLES } from "@/data/content";
import { ArticleCard } from "@/components/journal/ArticleCard";

export default function JournalPage() {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-bold uppercase tracking-widest mb-3">
          <BookOpen className="w-3.5 h-3.5" />
          <span>ROAMLY Journal &amp; Guides</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-content-primary">
          Stories, Field Notes &amp; Guidance
        </h1>
        <p className="mt-4 text-base sm:text-lg text-content-secondary leading-relaxed">
          Deep dives into slow travel philosophies, alpine route planning,
          cultural etiquette, and packing checklists written by our travelers and
          regional curators.
        </p>
      </div>

      {/* Featured Lead Article */}
      {ARTICLES.length > 0 && (
        <div className="mb-14">
          <ArticleCard article={ARTICLES[0]} className="lg:grid lg:grid-cols-2 lg:items-center" />
        </div>
      )}

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ARTICLES.slice(1).map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
