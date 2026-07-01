export const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-lg text-sm font-medium transition-all duration-200 ${
    isActive
      ? "bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300"
      : "text-surface-600 hover:text-surface-900 hover:bg-surface-100 dark:text-surface-400 dark:hover:text-surface-100 dark:hover:bg-surface-800"
  }`;

export const userLinkClass = ({ isActive }: { isActive: boolean }) =>
  `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
    isActive
      ? "bg-primary-100 text-primary-700 shadow-sm dark:bg-primary-900/50 dark:text-primary-300"
      : "text-surface-600 hover:bg-surface-100 dark:text-surface-400 dark:hover:bg-surface-800"
  }`;

export type LinkClassFn = typeof navLinkClass;
