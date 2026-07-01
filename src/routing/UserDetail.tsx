import { useParams, useSearchParams, useLocation } from "react-router-dom";

const UserDetail = () => {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const location = useLocation();

  return (
    <div className="card animate-fade-in space-y-6">
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-primary-400 to-primary-600 text-2xl font-bold text-white shadow-lg">
          {params.id}
        </div>
        <div>
          <h2 className="text-surface-900 dark:text-surface-100">
            User #{params.id}
          </h2>
          <p className="text-sm text-surface-500 dark:text-surface-400">
            User profile details
          </p>
        </div>
      </div>

      <div className="grid gap-4 border-t border-surface-200 pt-4 sm:grid-cols-2 dark:border-surface-800">
        <div className="rounded-xl bg-surface-50 p-4 dark:bg-surface-800/50">
          <p className="mb-1 text-xs font-medium uppercase tracking-wide text-surface-400 dark:text-surface-500">
            Route Path
          </p>
          <p className="text-sm font-medium text-surface-700 dark:text-surface-300">
            {location.pathname}
          </p>
        </div>
        <div className="rounded-xl bg-surface-50 p-4 dark:bg-surface-800/50">
          <p className="mb-1 text-xs font-medium uppercase tracking-wide text-surface-400 dark:text-surface-500">
            Search Params
          </p>
          <p className="text-sm font-medium text-surface-700 dark:text-surface-300">
            {searchParams.toString() || "(none)"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
