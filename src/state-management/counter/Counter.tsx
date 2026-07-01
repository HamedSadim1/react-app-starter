import useCounter from "./store";

const Counter = () => {
  const { counter, max, increment, decrement, reset } = useCounter();

  const percentage = Math.min(Math.max((counter / max) * 100, 0), 100);

  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="card animate-scale-in flex flex-col items-center p-6 space-y-8 bg-gradient-to-b from-surface-50 to-white dark:from-surface-900 dark:to-surface-950">
      {/* Header */}
      <div className="flex w-full items-center justify-between">
        <div>
          <h3 className="text-lg font-bold tracking-tight text-surface-900 dark:text-surface-100">
            Engagement
          </h3>
          <p className="text-sm font-medium text-surface-500 dark:text-surface-400">
            Daily Target
          </p>
        </div>
        <span className="badge badge-primary shadow-sm shadow-primary-500/20">
          Target: {max}
        </span>
      </div>

      {/* Circular Progress Ring */}
      <div className="relative flex h-48 w-48 items-center justify-center">
        <svg className="absolute inset-0 h-full w-full -rotate-90 transform">
          {/* Background ring */}
          <circle
            cx="96"
            cy="96"
            r={radius}
            className="stroke-surface-100 dark:stroke-surface-800"
            strokeWidth="12"
            fill="none"
          />
          {/* Progress ring */}
          <circle
            cx="96"
            cy="96"
            r={radius}
            className="stroke-primary-500 transition-all duration-1000 ease-out"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
          />
        </svg>

        {/* Hero Number */}
        <div className="absolute flex flex-col items-center justify-center">
          <span className="text-6xl font-black tracking-tighter text-surface-900 transition-colors duration-300 dark:text-white">
            {counter}
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-surface-400 dark:text-surface-500">
            {percentage === 100 ? "Completed" : "Active"}
          </span>
        </div>
      </div>

      {/* Controls */}
      <div className="w-full space-y-4">
        <div className="flex gap-4">
          <button
            onClick={decrement}
            className="btn-secondary flex-1 text-2xl pb-1"
            disabled={counter === 0}
          >
            −
          </button>
          <button
            onClick={increment}
            className="btn-primary flex-1 text-2xl pb-1 shadow-lg shadow-primary-500/25"
          >
            +
          </button>
        </div>

        <button
          onClick={reset}
          className="group flex w-full items-center justify-center gap-2 rounded-lg py-2 text-sm font-semibold text-surface-500 transition-all hover:bg-surface-100 hover:text-surface-900 dark:text-surface-400 dark:hover:bg-surface-800 dark:hover:text-surface-100"
        >
          <svg
            className="h-4 w-4 transition-transform group-hover:-rotate-180 duration-500"
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
          Reset Challenge
        </button>
      </div>
    </div>
  );
};

export default Counter;
