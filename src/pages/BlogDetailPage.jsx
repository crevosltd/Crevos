
import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Clock3,
  CalendarDays,
  Share2,
  Copy,
} from "lucide-react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import { blogPosts } from "../data/blogPosts";
import BlogGrid from "../components/blog/BlogGrid";
import SEO from "../components/Seo";

export default function BlogDetailPage() {
  const { slug } = useParams();

  // Find the selected article
  const post = blogPosts.find(
    (item) => item.slug === slug
  );

  // Find related articles
  const relatedPosts = useMemo(() => {
    if (!post) return [];

    return blogPosts
      .filter(
        (item) =>
          item.slug !== post.slug &&
          item.category === post.category
      )
      .slice(0, 3);
  }, [post]);

  // Format publication date
  const formattedDate = post?.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString(
        "en-GB",
        {
          day: "numeric",
          month: "long",
          year: "numeric",
        }
      )
    : "Recently published";

  // Share article
  const articleUrl =
    typeof window !== "undefined"
      ? window.location.href
      : "";

  const shareText = post
    ? `${post.title} - CREVOS LTD`
    : "CREVOS Blog";

 const shareLinks = [
  {
    name: "Facebook",
    icon: FaFacebookF,
    url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`,
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`,
  },
  {
    name: "X",
    icon: FaXTwitter,
    url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(shareText)}`,
  },
];

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(articleUrl);
      alert("Article link copied successfully!");
    } catch {
      alert("Unable to copy the link. Please copy it from your browser.");
    }
  };

  // Article not found
  if (!post) {
    return (
      <main className="min-h-screen bg-dark text-white flex items-center justify-center px-5">
        <div className="max-w-lg text-center">
          <h1 className="text-5xl font-bold mb-5">
            404
          </h1>

          <h2 className="text-2xl font-semibold mb-4">
            Article Not Found
          </h2>

          <p className="text-gray-400 mb-8">
            Sorry, the article you are looking for
            does not exist or may have been moved.
          </p>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/80 transition"
          >
            <ArrowLeft size={18} />
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-dark text-white">

        <SEO
  title={`${post.title} | CREVOS LTD`}
  description={post.excerpt}
  canonical={`https://crevosltd.com.ng/blog/${post.slug}`}
  image={post.image}
  type="article"
  articleSchema={{
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.publishedAt,
    author: {
      "@type": "Organization",
      name: post.author || "CREVOS Editorial Team",
    },
    publisher: {
      "@type": "Organization",
      name: "CREVOS LTD",
    },
    mainEntityOfPage: `https://crevosltd.com.ng/blog/${post.slug}`,
  }}
/>

      {/* Article Header */}
      <section className="pt-28 md:pt-36 pb-12">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">

          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-10">
            <Link
              to="/"
              className="hover:text-primary transition"
            >
              Home
            </Link>

            <span>/</span>

            <Link
              to="/blog"
              className="hover:text-primary transition"
            >
              Blog
            </Link>

            <span>/</span>

            <span className="text-primary">
              {post.category}
            </span>
          </div>

          {/* Category */}
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
            {post.category}
          </span>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl mb-8">
            {post.excerpt}
          </p>

          {/* Author and Date */}
          <div className="flex flex-wrap items-center justify-between gap-6 border-y border-white/10 py-6">

            <div className="flex items-center gap-4">

              {post.authorImage ? (
                <img
                  src={post.authorImage}
                  alt={post.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  {post.author?.charAt(0) || "C"}
                </div>
              )}

              <div>
                <p className="text-white text-sm font-semibold">
                  {post.author}
                </p>

                <p className="text-gray-500 text-xs mt-1">
                  CREVOS Editorial Team
                </p>
              </div>

            </div>

            <div className="flex flex-wrap items-center gap-5 text-gray-400 text-xs sm:text-sm">

              <span className="flex items-center gap-2">
                <CalendarDays size={16} />
                {formattedDate}
              </span>

              <span className="flex items-center gap-2">
                <Clock3 size={16} />
                {post.readingTime} min read
              </span>

            </div>

          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">

          <div className="overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 aspect-[16/9] bg-white/5">

            {post.image ? (
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                CREVOS INSIGHTS
              </div>
            )}

          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_260px] gap-12 lg:gap-16">

            {/* Main Article */}
            <article className="min-w-0">

              <div className="text-gray-300 text-base md:text-lg leading-[1.9] space-y-6">

                <p>
                  {post.excerpt}
                </p>

                <p>
                  This article explores important ideas,
                  practical approaches and insights related
                  to {post.category?.toLowerCase()}.
                  At CREVOS, we believe that thoughtful
                  creativity and technology can help
                  businesses communicate better and
                  achieve meaningful results.
                </p>

                <h2 className="text-white text-2xl md:text-3xl font-bold pt-6">
                  Understanding the Bigger Picture
                </h2>

                <p>
                  Every successful digital experience
                  starts with understanding the needs
                  of the people it serves. The right
                  strategy combines creativity, clarity
                  and functionality to deliver solutions
                  that make a difference.
                </p>

                <h2 className="text-white text-2xl md:text-3xl font-bold pt-6">
                  Why This Matters for Your Business
                </h2>

                <p>
                  Businesses need to continuously improve
                  how they communicate, present their
                  products and connect with their
                  audiences. Investing in the right
                  creative and digital solutions can
                  create opportunities for sustainable
                  growth.
                </p>

                <blockquote className="border-l-4 border-primary pl-6 py-3 my-8 text-white text-xl md:text-2xl font-medium italic">
                  Great ideas become valuable when
                  they are transformed into meaningful
                  experiences.
                </blockquote>

                <h2 className="text-white text-2xl md:text-3xl font-bold pt-6">
                  Final Thoughts
                </h2>

                <p>
                  Whether you are building a brand,
                  developing a website or improving
                  your digital presence, the goal
                  should always be to create something
                  purposeful, effective and memorable.
                </p>

              </div>

              {/* Article Tags */}
              <div className="flex flex-wrap items-center gap-3 border-t border-white/10 mt-12 pt-8">
                <span className="text-gray-500 text-sm">
                  Category:
                </span>

                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-sm">
                  {post.category}
                </span>
              </div>

              {/* Share Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-5 border-t border-white/10 mt-8 pt-8">

                <div className="flex items-center gap-2 text-white font-semibold">
                  <Share2 size={18} />
                  Share Article
                </div>

                <div className="flex items-center gap-3">

                  {shareLinks.map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.name}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Share on ${item.name}`}
                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition"
                      >
                        <Icon size={17} />
                      </a>
                    );
                  })}

                  <button
                    type="button"
                    onClick={handleCopyLink}
                    aria-label="Copy article link"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition"
                  >
                    <Copy size={17} />
                  </button>

                </div>
              </div>

            </article>

            {/* Sidebar */}
            <aside className="space-y-8">

              {/* Author Card */}
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">

                <span className="text-primary text-xs font-semibold uppercase tracking-widest">
                  About the Author
                </span>

                <div className="mt-5 flex items-center gap-3">

                  {post.authorImage ? (
                    <img
                      src={post.authorImage}
                      alt={post.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      {post.author?.charAt(0) || "C"}
                    </div>
                  )}

                  <div>
                    <h3 className="text-white font-semibold text-sm">
                      {post.author}
                    </h3>

                    <p className="text-gray-500 text-xs mt-1">
                      CREVOS
                    </p>
                  </div>

                </div>

                <p className="text-gray-400 text-sm leading-relaxed mt-5">
                  Sharing creative ideas, practical
                  knowledge and insights on design,
                  technology and digital innovation.
                </p>

              </div>

              {/* Back to Blog */}
              <Link
                to="/blog"
                className="flex items-center justify-between gap-3 bg-primary/10 border border-primary/20 rounded-2xl p-5 text-white hover:bg-primary/20 transition group"
              >
                <span className="font-medium text-sm">
                  Explore More Articles
                </span>

                <ArrowUpRight
                  size={20}
                  className="text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                />
              </Link>

            </aside>

          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-white/10 py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">

            <div className="flex items-end justify-between gap-5 mb-10">

              <div>
                <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                  Keep Exploring
                </span>

                <h2 className="text-3xl md:text-4xl font-bold mt-3">
                  Related Articles
                </h2>
              </div>

              <Link
                to="/blog"
                className="hidden sm:flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
              >
                View All
                <ArrowUpRight size={17} />
              </Link>

            </div>

            <BlogGrid posts={relatedPosts} />

          </div>
        </section>
      )}

    </main>
  );
}
