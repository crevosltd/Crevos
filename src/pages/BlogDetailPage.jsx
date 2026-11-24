import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import {
  ArrowLeft,
  ArrowUpRight,
  Clock3,
  CalendarDays,
  Share2,
  Copy,
} from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

import {
  getBlogPostBySlug,
  getRelatedBlogPosts,
} from "../services/blogService";

import { urlFor } from "../lib/sanity";
import BlogGrid from "../components/blog/BlogGrid";
import SEO from "../components/Seo";

export default function BlogDetailPage() {
  const { slug } = useParams();

  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fetch article and related posts from Sanity
  useEffect(() => {
    let isActive = true;

    const fetchPost = async () => {
      setLoading(true);
      setError(false);
      setPost(null);
      setRelatedPosts([]);

      try {
        const fetchedPost = await getBlogPostBySlug(slug);

        if (!isActive) return;

        if (!fetchedPost) {
          setPost(null);
          setLoading(false);
          return;
        }

        setPost(fetchedPost);

        console.log("FETCHED ARTICLE:", fetchedPost);
        console.log("ARTICLE BODY:", fetchedPost.body);
        console.log("BODY IS ARRAY:", Array.isArray(fetchedPost.body));

        if (fetchedPost.categoryId) {
          const related = await getRelatedBlogPosts(
            slug,
            fetchedPost.categoryId,
          );

          if (isActive) {
            setRelatedPosts(related);
          }
        }
      } catch (err) {
        console.error("Error fetching blog article:", err);

        if (isActive) {
          setError(true);
        }
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    };

    fetchPost();

    return () => {
      isActive = false;
    };
  }, [slug]);

  // Format publication date
  const formattedDate = post?.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Recently published";

  // Current article URL
  const articleUrl = typeof window !== "undefined" ? window.location.href : "";

  const shareText = post ? `${post.title} - CREVOS LTD` : "CREVOS Blog";

  // Social sharing links
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

  // Copy article link
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(articleUrl);
      alert("Article link copied successfully!");
    } catch {
      alert("Unable to copy the link. Please copy it from your browser.");
    }
  };

  // Portable Text rendering components
  const portableTextComponents = {
    block: {
      normal: ({ children }) => (
        <p className="text-gray-300 text-base md:text-lg leading-[1.9] mb-6">
          {children}
        </p>
      ),
      h1: ({ children }) => (
        <h1 className="text-white text-3xl md:text-4xl font-bold mt-10 mb-5">
          {children}
        </h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-white text-2xl md:text-3xl font-bold mt-10 mb-5">
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-white text-xl md:text-2xl font-bold mt-8 mb-4">
          {children}
        </h3>
      ),
      h4: ({ children }) => (
        <h4 className="text-white text-lg md:text-xl font-bold mt-6 mb-3">
          {children}
        </h4>
      ),
      blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-primary pl-6 py-3 my-8 text-white text-xl md:text-2xl font-medium italic">
          {children}
        </blockquote>
      ),
    },

    list: {
      bullet: ({ children }) => (
        <ul className="list-disc pl-7 space-y-3 text-gray-300 text-base md:text-lg leading-relaxed mb-6">
          {children}
        </ul>
      ),
      number: ({ children }) => (
        <ol className="list-decimal pl-7 space-y-3 text-gray-300 text-base md:text-lg leading-relaxed mb-6">
          {children}
        </ol>
      ),
    },

    marks: {
      strong: ({ children }) => (
        <strong className="text-white font-semibold">{children}</strong>
      ),
      em: ({ children }) => <em className="italic">{children}</em>,
      underline: ({ children }) => (
        <span className="underline">{children}</span>
      ),
      "strike-through": ({ children }) => (
        <span className="line-through">{children}</span>
      ),
      code: ({ children }) => (
        <code className="bg-white/10 text-primary px-2 py-1 rounded text-sm">
          {children}
        </code>
      ),
      link: ({ children, value }) => (
        <a
          href={value?.href}
          target={value?.blank ? "_blank" : undefined}
          rel={value?.blank ? "noopener noreferrer" : undefined}
          className="text-primary underline hover:text-white transition"
        >
          {children}
        </a>
      ),
    },

    types: {
      image: ({ value }) => {
        if (!value?.asset) return null;

        return (
          <figure className="my-10">
            <img
              src={urlFor(value).width(1200).auto("format").url()}
              alt={value.alt || post?.title || "CREVOS article image"}
              className="w-full rounded-2xl object-cover"
              loading="lazy"
            />

            {value.caption && (
              <figcaption className="text-center text-gray-500 text-sm mt-3">
                {value.caption}
              </figcaption>
            )}
          </figure>
        );
      },
    },
  };

  // Loading state
  if (loading) {
    return (
      <main className="min-h-screen bg-dark text-white flex items-center justify-center px-5">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-5" />
          <p className="text-gray-400">Loading article...</p>
        </div>
      </main>
    );
  }

  // Error state
  if (error) {
    return (
      <main className="min-h-screen bg-dark text-white flex items-center justify-center px-5">
        <div className="max-w-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Unable to Load Article
          </h2>

          <p className="text-gray-400 mb-8">
            Something went wrong while retrieving this article. Please try
            again.
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

  // Article not found
  if (!post) {
    return (
      <main className="min-h-screen bg-dark text-white flex items-center justify-center px-5">
        <div className="max-w-lg text-center">
          <h1 className="text-5xl font-bold mb-5">404</h1>

          <h2 className="text-2xl font-semibold mb-4">Article Not Found</h2>

          <p className="text-gray-400 mb-8">
            Sorry, the article you are looking for does not exist or may have
            been moved.
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

  const publishedDate = post.publishedAt
    ? new Date(post.publishedAt).toISOString()
    : undefined;

  const modifiedDate = post.dateModified
    ? new Date(post.dateModified).toISOString()
    : undefined;

  return (
    <main className="min-h-screen bg-dark text-white">
      <SEO
        title={`${post.seoTitle || post.title} | CREVOS LTD`}
        description={post.seoDescription || post.excerpt}
        canonical={`https://crevosltd.com.ng/blog/${post.slug}`}
        image={post.image}
        imageAlt={post.imageAlt || post.title}
        type="article"
        articleSchema={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.seoDescription || post.excerpt,
          image: post.image,
          ...(publishedDate && {
            datePublished: publishedDate,
          }),
          author: {
            "@type": "Organization",
            name: post.author || "CREVOS Editorial Team",
            url: "https://crevosltd.com.ng",
          },
          publisher: {
            "@type": "Organization",
            name: "CREVOS LTD",
            url: "https://crevosltd.com.ng",
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://crevosltd.com.ng/blog/${post.slug}`,
          },
        }}
      />
      {/* Article Header */}
      <section className="pt-28 md:pt-36 pb-12">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-10">
            <Link to="/" className="hover:text-primary transition">
              Home
            </Link>

            <span>/</span>

            <Link to="/blog" className="hover:text-primary transition">
              Blog
            </Link>

            <span>/</span>

            <span className="text-primary">{post.category}</span>
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
          {post.excerpt && (
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl mb-8">
              {post.excerpt}
            </p>
          )}

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
      {post.image && (
        <section className="pb-12">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 aspect-[16/9] bg-white/5">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      )}
      {/* Article Content */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_260px] gap-12 lg:gap-16">
            {/* Main Article */}
            <article className="min-w-0">
              <div className="text-gray-300 text-base md:text-lg leading-[1.9]">
                {post.body?.length > 0 ? (
                  <PortableText
                    value={post.body}
                    components={portableTextComponents}
                  />
                ) : (
                  <p className="text-gray-400">
                    The content for this article is not available yet.
                  </p>
                )}
              </div>

              {/* Article Tags */}
              <div className="flex flex-wrap items-center gap-3 border-t border-white/10 mt-12 pt-8">
                <span className="text-gray-500 text-sm">Category:</span>

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

                    <p className="text-gray-500 text-xs mt-1">CREVOS</p>
                  </div>
                </div>

                <div className="text-gray-400 text-sm leading-relaxed mt-5">
                  {Array.isArray(post.authorBio) ? (
                    <PortableText value={post.authorBio} />
                  ) : (
                    post.authorBio ||
                    "Sharing creative ideas, practical knowledge and insights on design, technology and digital innovation."
                  )}
                </div>
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
