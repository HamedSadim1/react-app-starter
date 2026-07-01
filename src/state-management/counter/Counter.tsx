import useCounter from "./store";

const Counter = () => {
  const { counter, max, increment, decrement, reset } = useCounter();

  const percentage = Math.min(Math.max((counter / max) * 100, 0), 100);
  const isCompleted = percentage === 100;

  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="card animate-scale-in flex flex-col items-center p-6 space-y-8 bg-linear-to-b from-surface-50 to-white dark:from-surface-900 dark:to-surface-950">
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
      <div
        className={`relative flex h-48 w-48 items-center justify-center transition-all duration-500 ${
          isCompleted
            ? "scale-105 [animation:pulse_2s_ease-in-out_infinite]"
            : ""
        }`}
      >
        {/* Subtle background concentric circles */}
        <div className="absolute inset-0 rounded-full border border-surface-200/50 scale-[0.75] dark:border-surface-700/50" />
        <div className="absolute inset-0 rounded-full border border-surface-200/30 scale-[0.50] dark:border-surface-700/30" />

        <svg className="absolute inset-0 h-full w-full -rotate-90 transform">
          <defs>
            <linearGradient
              id="progressGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>

          {/* Background ring */}
          <circle
            cx="96"
            cy="96"
            r={radius}
            className="stroke-surface-200 dark:stroke-surface-700/60"
            strokeWidth="12"
            fill="none"
          />

          {/* Progress ring with gradient and glow */}
          <circle
            cx="96"
            cy="96"
            r={radius}
            stroke="url(#progressGradient)"
            className="transition-all duration-1000 ease-out [filter:drop-shadow(0_0_6px_rgba(59,130,246,0.6))]"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
          />
        </svg>

        {/* Hero Number */}
        <div className="absolute flex flex-col items-center justify-center">
          <div className="relative flex items-center justify-center">
            <span className="text-6xl font-black tabular-nums tracking-tighter text-surface-900 transition-colors duration-300 dark:text-white">
              {counter}
            </span>

            {/* Celebration Sparkle ✨ */}
            {isCompleted && (
              <span className="absolute -right-8 -top-2 animate-bounce text-2xl">
                ✨
              </span>
            )}
          </div>

          <span
            className={`mt-1 text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${
              isCompleted
                ? "text-primary-500"
                : "text-surface-400 dark:text-surface-500"
            }`}
          >
            {isCompleted ? "Completed" : "Active"}
          </span>
        </div>
      </div>

      {/* Controls */}
      <div className="w-full space-y-4">
        <div className="flex gap-4">
          <button
            onClick={decrement}
            className="btn-secondary flex-1 pb-1 text-2xl"
            disabled={counter === 0}
          >
            −
          </button>
          <button
            onClick={increment}
            className="btn-primary flex-1 pb-1 text-2xl shadow-lg shadow-primary-500/25"
          >
            +
          </button>
        </div>

        <button
          onClick={reset}
          className="group flex w-full items-center justify-center gap-2 rounded-lg py-2 text-sm font-semibold text-surface-500 transition-all hover:bg-surface-100 hover:text-surface-900 dark:text-surface-400 dark:hover:bg-surface-800 dark:hover:text-surface-100"
        >
          <svg
            className="h-4 w-4 transition-transform duration-500 group-hover:-rotate-180"
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
