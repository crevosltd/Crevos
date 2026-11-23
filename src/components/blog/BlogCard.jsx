
import { Link } from "react-router-dom";
import { ArrowUpRight, Clock3 } from "lucide-react";

export default function BlogCard({ post }) {
  const {
    title,
    slug,
    excerpt,
    image,
    category,
    author,
    authorImage,
    publishedAt,
    readingTime,
  } = post;

  const formattedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "Recently published";

  return (
    <article className="group flex flex-col h-full">
      {/* Blog Image */}
      <Link
        to={`/blog/${slug}`}
        className="relative block overflow-hidden rounded-2xl aspect-[16/10] bg-white/5"
      >
        {image ? (
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/30 via-dark to-secondary/20">
            <span className="text-white/40 text-sm font-medium">
              CREVOS INSIGHTS
            </span>
          </div>
        )}

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent opacity-60" />

        {/* Category */}
        {category && (
          <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-dark/75 backdrop-blur-md border border-white/10 text-white text-xs font-medium">
            {category}
          </span>
        )}

        {/* Hover Icon */}
        <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <ArrowUpRight size={20} />
        </div>
      </Link>

      {/* Blog Information */}
      <div className="flex flex-col flex-1 pt-5">
        {/* Date and Reading Time */}
        <div className="flex items-center gap-3 text-gray-500 text-xs mb-3">
          <span>{formattedDate}</span>

          {readingTime && (
            <>
              <span className="w-1 h-1 rounded-full bg-gray-600" />

              <span className="flex items-center gap-1.5">
                <Clock3 size={13} />
                {readingTime} min read
              </span>
            </>
          )}
        </div>

        {/* Title */}
        <Link to={`/blog/${slug}`}>
          <h3 className="text-white text-lg md:text-xl font-semibold leading-snug mb-3 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-5">
          {excerpt}
        </p>

        {/* Author */}
        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/10">
          {authorImage ? (
            <img
              src={authorImage}
              alt={author || "Article author"}
              loading="lazy"
              className="w-9 h-9 rounded-full object-cover"
            />
          ) : (
            <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-semibold">
              {author?.charAt(0) || "C"}
            </div>
          )}

          <span className="text-gray-300 text-sm font-medium">
            {author || "CREVOS Editorial Team"}
          </span>
        </div>
      </div>
    </article>
  );
}
