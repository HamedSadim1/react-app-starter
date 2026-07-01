import useCounter from "./store";

const Counter = () => {
  const { counter, max, increment, reset } = useCounter();
  const percentage = Math.min((counter / max) * 100, 100);

  return (
    <div className="card animate-scale-in space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-surface-900 dark:text-surface-100">Counter</h3>
          <p className="text-sm text-surface-500 dark:text-surface-400">
            Track your progress
          </p>
        </div>
        <span className="badge badge-primary">
          {counter} / {max}
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-2 overflow-hidden rounded-full bg-surface-200 dark:bg-surface-800">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary-500 to-primary-400 transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="flex gap-3 pt-2">
        <button onClick={increment} className="btn-primary flex-1">
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
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          Increment
        </button>
        <button onClick={reset} className="btn-secondary">
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
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
