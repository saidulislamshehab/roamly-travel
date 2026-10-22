import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, Calendar, ArrowLeft } from "lucide-react";
import { ARTICLES } from "@/data/content";
import { ArticleCard } from "@/components/journal/ArticleCard";

interface ArticleDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return ARTICLES.map((art) => ({
    slug: art.slug,
  }));
}

export default function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const article = ARTICLES.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = ARTICLES.filter((a) => a.id !== article.id).slice(0, 2);

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Back button */}
      <div className="mb-6">
        <Link
          href="/journal"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-content-secondary hover:text-brand transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Journal</span>
        </Link>
      </div>

      {/* Article Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 text-xs text-content-secondary mb-4">
          <span className="px-3 py-1 rounded-full bg-brand/10 text-brand font-semibold">
            {article.category}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {article.date}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {article.readTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-content-primary leading-tight">
          {article.title}
        </h1>

        <p className="mt-4 text-lg text-content-secondary leading-relaxed">
          {article.excerpt}
        </p>

        {/* Author Bio Row */}
        <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-border">
              <Image
                src={article.author.avatar}
                alt={article.author.name}
                fill
                sizes="44px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-bold text-content-primary">
                {article.author.name}
              </p>
              <p className="text-xs text-content-secondary">
                {article.author.role}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Cover Image */}
      <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-card mb-12 border border-border">
        <Image
          src={article.image}
          alt={article.title}
          fill
          priority
          sizes="(max-width: 896px) 100vw, 896px"
          className="object-cover"
        />
      </div>

      {/* Article Body Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none text-content-primary leading-relaxed space-y-6">
        {article.content.map((paragraph, idx) => (
          <p key={idx} className="text-base sm:text-lg text-content-secondary leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <div className="mt-20 pt-12 border-t border-border">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-content-primary">
              Continue Reading
            </h3>
            <Link
              href="/journal"
              className="text-xs font-semibold uppercase tracking-wider text-brand hover:underline"
            >
              All Articles
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <ArticleCard key={rel.id} article={rel} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
