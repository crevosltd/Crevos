
import { Loader2, ArrowDown } from "lucide-react";

export default function BlogPagination({
  onLoadMore,
  loading = false,
  hasMore = true,
}) {
  if (!hasMore) return null;

  return (
    <div className="flex justify-center mt-14">
      <button
        type="button"
        onClick={onLoadMore}
        disabled={loading}
        className="
          inline-flex
          items-center
          justify-center
          gap-3
          px-7
          py-3.5
          rounded-xl
          bg-primary
          text-white
          text-sm
          font-semibold
          hover:bg-primary/80
          transition-all
          duration-300
          disabled:opacity-50
          disabled:cursor-not-allowed
          shadow-lg
          shadow-primary/10
        "
      >
        {loading ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Loading articles...
          </>
        ) : (
          <>
            Load More Articles
            <ArrowDown size={17} />
          </>
        )}
      </button>
    </div>
  );
}
