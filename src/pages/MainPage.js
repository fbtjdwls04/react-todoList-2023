import { useTodosState } from "../Hooks";
import TodosEmpty from "../components/TodosEmpty";
import TodoList from "./TodoListPage";
export default function MainPage() {
  const todosState = useTodosState();

  const todosEmpty = todosState.todos.length == 0;

  if (todosEmpty) {
    return <TodosEmpty />;
  }
  return (
    <>
      <TodoList />
    </>
  );
}
