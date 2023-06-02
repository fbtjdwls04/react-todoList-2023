import { useTodoOptionDrawerState, useTodosState } from "../Hooks";
import TodoOptionDrawer from "../components/TodoOptionDrawer";
import TodoListItem from "../components/TodoListItem";

export default function TodoList() {
  const todoOptionDrawerStatus = useTodoOptionDrawerState();
  const todosState = useTodosState();
  return (
    <>
      <TodoOptionDrawer status={todoOptionDrawerStatus} />
      <div className="mt-5 px-4">
        <ul>
          {todosState.todos.map((todo, index) => (
            <TodoListItem
              todo={todo}
              index={index}
              openDrawer={todoOptionDrawerStatus.open}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
