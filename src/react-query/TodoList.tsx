import useTodos from "./hooks/useTodos";

const TodoList = () => {
  const { data, error, isLoading } = useTodos();

  if (isLoading) return <TodoListSkeleton />;

  if (error)
    return (
      <div className="card animate-fade-in border-error/20 bg-error/5 text-center dark:border-error/20 dark:bg-error/10">
        <h3 className="text-error">Failed to load todos</h3>
        <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">
          {error.message}
        </p>
      </div>
    );

  return (
    <div className="animate-fade-in space-y-2">
      <h3 className="text-surface-900 dark:text-surface-100">Todos</h3>
      {data?.length === 0 ? (
        <p className="text-sm text-surface-400 dark:text-surface-500">
          No todos found.
        </p>
      ) : (
        <ul className="space-y-2">
          {data?.map((todo, i) => (
            <li
              key={todo.id}
              className="animate-slide-in flex items-center gap-3 rounded-xl border border-surface-200 bg-white px-4 py-3 transition-all duration-200 hover:shadow-sm dark:border-surface-800 dark:bg-surface-900"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 text-xs ${
                  todo.completed
                    ? "border-success bg-success text-white"
                    : "border-surface-300 dark:border-surface-600"
                }`}
              >
                {todo.completed ? "✓" : ""}
              </span>
              <span
                className={`text-sm ${
                  todo.completed
                    ? "text-surface-400 line-through dark:text-surface-500"
                    : "font-medium text-surface-700 dark:text-surface-300"
                }`}
              >
                {todo.title}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const TodoListSkeleton = () => (
  <div className="space-y-2">
    <div className="skeleton mb-3 h-6 w-24" />
    {Array.from({ length: 5 }).map((_, i) => (
      <div
        key={i}
        className="flex items-center gap-3 rounded-xl border border-surface-200 px-4 py-3 dark:border-surface-800"
      >
        <div className="skeleton h-5 w-5 rounded-full" />
        <div className="skeleton h-4 flex-1" />
      </div>
    ))}
  </div>
);

export default TodoList;
