
import { Link } from "react-router-dom";
import { ArrowUpRight, Clock3 } from "lucide-react";

export default function FeaturedPost({ post }) {
  if (!post) return null;

  const {
    title,
    slug,
    excerpt,
    image,
    category,
    publishedAt,
    readingTime,
  } = post;

  const formattedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <section className="w-full">
      <Link
        to={`/blog/${slug}`}
        className="group relative block w-full min-h-[420px] md:min-h-[520px] lg:min-h-[580px] overflow-hidden rounded-2xl md:rounded-3xl bg-dark border border-white/10"
      >
        {/* Background Image */}
        {image ? (
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-dark to-secondary/30" />
        )}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/55 to-dark/10" />

        {/* Additional Side Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark/50 via-transparent to-transparent" />

        {/* Featured Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 md:p-12 lg:p-14">
          
          {/* Featured Label */}
          <div className="mb-5">
            <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Featured Article
            </span>
          </div>

          {/* Category */}
          {category && (
            <span className="text-gray-300 text-sm mb-3">
              {category}
            </span>
          )}

          {/* Title */}
          <h1 className="max-w-4xl text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-5">
            {title}
          </h1>

          {/* Description */}
          <p className="max-w-2xl text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed mb-6 line-clamp-3">
            {excerpt}
          </p>

          {/* Article Information */}
          <div className="flex flex-wrap items-center gap-4 text-gray-300 text-xs sm:text-sm">
            {formattedDate && (
              <span>{formattedDate}</span>
            )}

            {readingTime && (
              <span className="flex items-center gap-2">
                <Clock3 size={15} />
                {readingTime} min read
              </span>
            )}
          </div>
        </div>

        {/* Arrow Button */}
        <div className="absolute top-6 right-6 sm:top-8 sm:right-8 md:top-12 md:right-12 w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-white/40 bg-black/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:rotate-45">
          <ArrowUpRight size={28} strokeWidth={1.5} />
        </div>
      </Link>
    </section>
  );
}
