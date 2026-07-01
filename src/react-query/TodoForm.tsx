import { useRef } from "react";
import useAddTodo from "./hooks/useAddTodo";
import LoadingSpinner from "../components/LoadingSpinner";

const TodoForm = () => {
  const ref = useRef<HTMLInputElement>(null);

  const addTodo = useAddTodo(() => {
    if (ref.current) ref.current.value = "";
  });

  return (
    <div className="animate-fade-in space-y-3">
      {addTodo.error && (
        <div className="flex items-center gap-2 rounded-xl border border-error/30 bg-error/5 px-4 py-3 text-sm text-error dark:border-error/30 dark:bg-error/10">
          <svg
            className="h-4 w-4 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
          {addTodo.error.message}
        </div>
      )}
      <form
        className="flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          if (ref.current && ref.current.value)
            addTodo.mutate({
              id: 0,
              title: ref.current?.value,
              completed: false,
              userId: 1,
            });
        }}
      >
        <input
          ref={ref}
          type="text"
          className="input flex-1"
          placeholder="What needs to be done?"
        />
        <button
          type="submit"
          disabled={addTodo.isPending}
          className="btn-primary shrink-0"
        >
          {" "}
          {addTodo.isPending ? <LoadingSpinner /> : "Add"}
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
