
import BlogCard from "./BlogCard";

export default function BlogGrid({ posts = [] }) {
  if (!posts.length) {
    return (
      <div className="w-full py-20 text-center">
        <h3 className="text-white text-xl font-semibold mb-3">
          No articles found
        </h3>

        <p className="text-gray-400 text-sm">
          There are currently no articles in this category.
          Check back soon for new insights.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
      {posts.map((post) => (
        <BlogCard
          key={post.slug}
          post={post}
        />
      ))}
    </div>
  );
}
