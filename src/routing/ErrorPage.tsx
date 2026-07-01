import { isRouteErrorResponse, useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const isRouteError = isRouteErrorResponse(error);

  return (
    <div className="flex min-h-screen items-center justify-center bg-surface-50 px-4 dark:bg-surface-950">
      <div className="card animate-scale-in max-w-md text-center">
        <div className="mb-4 text-6xl">{isRouteError ? "🔍" : "💥"}</div>
        <h1 className="mb-2 text-2xl font-extrabold text-surface-900 dark:text-surface-100">
          {isRouteError ? "Page Not Found" : "Oops! Something went wrong"}
        </h1>
        <p className="mb-6 text-sm leading-relaxed text-surface-500 dark:text-surface-400">
          {isRouteError
            ? `The page you're looking for doesn't exist (status ${error.status}).`
            : "An unexpected error occurred. Please try again later."}
        </p>
        <Link to="/" className="btn-primary">
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
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
