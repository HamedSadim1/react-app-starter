import usePost from "./hooks/usePost";
import React from "react";
import ErrorDisplay from "../components/ErrorDisplay";
import LoadingSpinner from "../components/LoadingSpinner";

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
      <ErrorDisplay title="Failed to load posts" message={error.message} />
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
              <LoadingSpinner />
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
