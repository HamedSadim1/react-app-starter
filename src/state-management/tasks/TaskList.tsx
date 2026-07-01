import { useContext, useState } from "react";
import TasksContext from "./taskContext";

const useTask = () => useContext(TasksContext);

const TaskList = () => {
  const { tasks, dispatch } = useTask();
  const [taskTitle, setTaskTitle] = useState("");

  const handleAdd = () => {
    if (!taskTitle.trim()) return;
    dispatch({
      type: "ADD",
      task: { id: Date.now(), title: taskTitle.trim() },
    });
    setTaskTitle("");
  };

  return (
    <div className="card animate-scale-in space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-surface-900 dark:text-surface-100">Tasks</h3>
          <p className="text-sm text-surface-500 dark:text-surface-400">
            {tasks.length} {tasks.length === 1 ? "task" : "tasks"} remaining
          </p>
        </div>
      </div>

      {/* Add task form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAdd();
        }}
        className="flex gap-2"
      >
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Add a new task..."
          className="input flex-1"
        />
        <button type="submit" className="btn-primary shrink-0">
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
              d="M12 4v16m8-8H4"
            />
          </svg>
          Add
        </button>
      </form>

      {/* Task list */}
      {tasks.length === 0 ? (
        <div className="flex flex-col items-center gap-3 py-8 text-center">
          <div className="text-4xl opacity-50">📋</div>
          <p className="text-sm text-surface-400 dark:text-surface-500">
            No tasks yet. Add one above!
          </p>
        </div>
      ) : (
        <ul className="space-y-2">
          {tasks.map((task, i) => (
            <li
              key={task.id}
              className="animate-slide-in group flex items-center gap-3 rounded-xl border border-surface-200 bg-surface-50 px-4 py-3 transition-all duration-200 hover:border-surface-300 hover:shadow-sm dark:border-surface-800 dark:bg-surface-800/50 dark:hover:border-surface-700"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <span className="flex-1 text-sm font-medium text-surface-700 dark:text-surface-300">
                {task.title}
              </span>
              <button
                onClick={() => dispatch({ type: "DELETE", taskId: task.id })}
                className="rounded-lg p-1.5 text-surface-400 opacity-0 transition-all duration-200 hover:bg-error/10 hover:text-error group-hover:opacity-100"
                aria-label="Delete task"
              >
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
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
