
import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";

import FeaturedPost from "../components/blog/FeaturedPost";
import BlogGrid from "../components/blog/BlogGrid";
import BlogPagination from "../components/blog/BlogPagination";

import { blogPosts } from "../data/blogPosts";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(9);

  // Get the featured article
  const featuredPost = blogPosts.find(
    (post) => post.featured
  );

  // Get unique categories
  const categories = useMemo(() => {
    return [
      "All",
      ...new Set(
        blogPosts
          .map((post) => post.category)
          .filter(Boolean)
      ),
    ];
  }, []);

  // Filter blog posts
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" ||
        post.category === activeCategory;

      const query = searchQuery.toLowerCase().trim();

      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query);

      // Keep the featured article out of the regular grid
      const isNotFeatured = !post.featured;

      return (
        matchesCategory &&
        matchesSearch &&
        isNotFeatured
      );
    });
  }, [activeCategory, searchQuery]);

  // Visible articles
  const visiblePosts = filteredPosts.slice(
    0,
    visibleCount
  );

  const hasMore = visibleCount < filteredPosts.length;

  // Load more articles
  const handleLoadMore = () => {
    setVisibleCount((previous) => previous + 6);
  };

  // Change category
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setVisibleCount(9);
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery("");
    setVisibleCount(9);
  };

  return (
    <main className="min-h-screen bg-dark text-white">

      {/* Blog Hero */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">

          {/* Section Label */}
          <div className="flex items-center gap-3 mb-5">
            {/* <span className="w-8 h-[2px] bg-primary" /> */}
            <span className="text-primary text-sm font-semibold uppercase tracking-[0.2em]">
              CREVOS Journal
            </span>
          </div>

          {/* Heading */}
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
              Insights, Ideas &{" "}
              <span className="text-primary">
                Creative Thinking.
              </span>
            </h1>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl">
              Explore ideas, practical guides and industry
              insights on design, technology, branding and
              digital innovation from the CREVOS team.
            </p>
          </div>

        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="pb-16 md:pb-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <FeaturedPost post={featuredPost} />
          </div>
        </section>
      )}

      {/* Blog Articles */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">

          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">

            <div>
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                Explore Our Articles
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
                Latest Articles
              </h2>
            </div>

            {/* Search */}
            <div className="relative w-full md:max-w-sm">
              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              />

              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(9);
                }}
                placeholder="Search articles..."
                className="w-full h-12 pl-12 pr-11 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm placeholder:text-gray-500 outline-none focus:border-primary transition-colors"
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={clearSearch}
                  aria-label="Clear search"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <X size={18} />
                </button>
              )}
            </div>

          </div>

          {/* Categories */}
          <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-8 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => handleCategoryChange(category)}
                className={`shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-white"
                    : "bg-white/[0.04] border border-white/10 text-gray-400 hover:text-white hover:border-primary/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-500 text-sm">
              Showing {visiblePosts.length} of{" "}
              {filteredPosts.length} articles
            </p>

            {searchQuery && (
              <button
                type="button"
                onClick={clearSearch}
                className="text-primary text-sm hover:underline"
              >
                Clear search
              </button>
            )}
          </div>

          {/* Blog Grid */}
          <BlogGrid posts={visiblePosts} />

          {/* Load More */}
          <BlogPagination
            onLoadMore={handleLoadMore}
            hasMore={hasMore}
          />

        </div>
      </section>

    </main>
  );
}
