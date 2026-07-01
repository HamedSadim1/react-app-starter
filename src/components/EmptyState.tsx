interface EmptyStateProps {
  icon: string;
  message: string;
}

const EmptyState = ({ icon, message }: EmptyStateProps) => (
  <div className="flex flex-col items-center gap-3 py-8 text-center">
    <div className="text-4xl opacity-50">{icon}</div>
    <p className="text-sm text-surface-400 dark:text-surface-500">{message}</p>
  </div>
);

export default EmptyState;
