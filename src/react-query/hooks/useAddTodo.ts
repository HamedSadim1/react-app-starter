import { useMutation, useQueryClient } from "@tanstack/react-query";
import todoService, { Todo } from "../services/todoService";
import { CACHE_KEY_TODOS } from "../constants";

interface AddTodoContext {
  previousTodos: Todo[];
}

const useAddTodo = (onAdd: () => void) => {
  // function body
  const queryClient = useQueryClient();
  return useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: todoService.post,
    onMutate: (newTodo: Todo) => {
      const previousTodos = queryClient.getQueryData<Todo[]>(["todos"]) || [];
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (oldTodos = []) => [
        newTodo,
        ...oldTodos,
      ]);
      // if (ref.current) ref.current.value = "";
      return { previousTodos };
    },
    onSuccess: (savedTodo, newTodo) => {
      // APPROACH : Invalidating the cache
      // queryClient.invalidateQueries({
      //   queryKey: ["todos"],
      // });
      // APPROACH 2: updating data in the cache
      //   queryClient.setQueryData<Todo[]>(["todos"], (oldTodos) => [
      //     savedTodo,
      //     ...oldTodos!,
      //   ]);

      // },
      onAdd();
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
    },
    onError: (error, newTodo, context) => {
      if (!context) return;
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos);
    },
  });
};

export default useAddTodo;
