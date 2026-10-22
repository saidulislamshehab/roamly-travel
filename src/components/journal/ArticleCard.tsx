import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { Article } from "@/types/content";
import { cn } from "@/lib/utils";

interface ArticleCardProps {
  article: Article;
  className?: string;
}

export function ArticleCard({ article, className }: ArticleCardProps) {
  return (
    <article
      className={cn(
        "group flex flex-col bg-surface-primary dark:bg-surface-primary rounded-2xl overflow-hidden border border-border hover:border-brand/40 shadow-subtle hover:shadow-card transition-all duration-300",
        className
      )}
    >
      <Link href={`/journal/${article.slug}`} className="block relative aspect-[16/10] overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-surface-primary/90 backdrop-blur-md text-brand shadow-sm">
            {article.category}
          </span>
        </div>
      </Link>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 text-xs text-content-secondary mb-3">
            <span>{article.date}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <h3 className="text-lg font-bold text-content-primary group-hover:text-brand transition-colors line-clamp-2 leading-snug">
            <Link href={`/journal/${article.slug}`}>{article.title}</Link>
          </h3>

          <p className="text-xs sm:text-sm text-content-secondary mt-2 line-clamp-2 leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative w-6 h-6 rounded-full overflow-hidden">
              <Image
                src={article.author.avatar}
                alt={article.author.name}
                fill
                sizes="24px"
                className="object-cover"
              />
            </div>
            <span className="text-xs font-medium text-content-primary">
              {article.author.name}
            </span>
          </div>

          <Link
            href={`/journal/${article.slug}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-brand hover:text-brand-hover transition-colors"
          >
            <span>Read Article</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
