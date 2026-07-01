interface ErrorDisplayProps {
  title: string;
  message: string;
  icon?: string;
}

const ErrorDisplay = ({ title, message, icon = "⚠️" }: ErrorDisplayProps) => (
  <div className="card animate-fade-in border-error/20 bg-error/5 text-center dark:border-error/20 dark:bg-error/10">
    <div className="mb-2 text-4xl">{icon}</div>
    <h3 className="text-error">{title}</h3>
    <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">
      {message}
    </p>
  </div>
);

export default ErrorDisplay;
