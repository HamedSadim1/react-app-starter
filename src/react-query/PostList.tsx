import usePost from "./hooks/usePost";
import React from "react";

const PostList = () => {
  const pageSize = 10;
  const {
    data: posts,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
  } = usePost({ pageSize });

  if (isLoading) return <PostListSkeleton />;

  if (error)
    return (
      <div className="card animate-fade-in border-error/20 bg-error/5 text-center dark:border-error/20 dark:bg-error/10">
        <div className="mb-2 text-4xl">⚠️</div>
        <h3 className="text-error">Failed to load posts</h3>
        <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">
          {error.message}
        </p>
      </div>
    );

  return (
    <div className="animate-fade-in space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-surface-900 dark:text-surface-100">Posts</h2>
          <p className="text-sm text-surface-500 dark:text-surface-400">
            Infinite scroll from JSONPlaceholder API
          </p>
        </div>
        <span className="badge badge-primary">
          {posts?.pages.reduce((sum, page) => sum + page.length, 0)} loaded
        </span>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {posts?.pages.map((page, pageIndex) => (
          <React.Fragment key={pageIndex}>
            {page.map((post, i) => (
              <div
                key={post.id}
                className="card animate-slide-in cursor-default"
                style={{
                  animationDelay: `${(pageIndex * pageSize + i) * 30}ms`,
                }}
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700 dark:bg-primary-900 dark:text-primary-300">
                    {post.id}
                  </span>
                  <span className="text-xs text-surface-400 dark:text-surface-500">
                    Post #{post.id}
                  </span>
                </div>
                <p className="text-sm font-medium leading-snug text-surface-800 dark:text-surface-200">
                  {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
                </p>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>

      <div className="flex justify-center pt-2">
        <button
          disabled={isFetchingNextPage}
          onClick={() => fetchNextPage()}
          className="btn-primary"
        >
          {isFetchingNextPage ? (
            <>
              <svg
                className="h-4 w-4 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Loading more...
            </>
          ) : (
            <>
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              Load More
            </>
          )}
        </button>
      </div>
    </div>
  );
};

const PostListSkeleton = () => (
  <div className="animate-fade-in space-y-4">
    <div className="skeleton h-8 w-48" />
    <div className="grid gap-3 sm:grid-cols-2">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="card space-y-3">
          <div className="skeleton h-4 w-12" />
          <div className="skeleton h-4 w-full" />
          <div className="skeleton h-3 w-3/4" />
        </div>
      ))}
    </div>
  </div>
);

export default PostList;
