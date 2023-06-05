import { Tab, Tabs } from "@mui/material";
import { useTodoOptionDrawerState, useTodosState } from "../Hooks";
import TodoOptionDrawer from "../components/TodoOptionDrawer";
import TodoListItem from "../components/TodoListItem";
import { TodoList__filterCompletedIndexAtom } from "../Atoms";
import { useRecoilState } from "recoil";

export default function TodoList() {
  const todoOptionDrawerStatus = useTodoOptionDrawerState();
  const todosState = useTodosState();
  const [filterCompletedIndex, setFilterCompletedIndex] = useRecoilState(
    TodoList__filterCompletedIndexAtom
  );

  const getFiltererdTodos = () => {
    if (filterCompletedIndex == 1) {
      return todosState.todos.filter((todo) => !todo.check);
    }

    if (filterCompletedIndex == 2) {
      return todosState.todos.filter((todo) => todo.check);
    }

    return todosState.todos;
  };

  const filteredTodos = getFiltererdTodos();

  return (
    <>
      <TodoOptionDrawer status={todoOptionDrawerStatus} />

      <Tabs
        variant="fullWidth"
        value={filterCompletedIndex}
        onChange={(event, newValue) => setFilterCompletedIndex(newValue)}
      >
        <Tab
          label={
            <span className="flex">
              <i className="fa-solid fa-list-ul"></i>
              <span className="ml-2">전체</span>
            </span>
          }
          value={0}
        />
        <Tab
          label={
            <span className="flex">
              <i className="fa-regular fa-square"></i>
              <span className="ml-2">미완료</span>
            </span>
          }
          value={1}
        />
        <Tab
          label={
            <span className="flex">
              <i className="fa-regular fa-square-check"></i>
              <span className="ml-2">완료</span>
            </span>
          }
          value={2}
        />
      </Tabs>
      <div className="mt-5 px-4 overflow-y-auto">
        <ul>
          {filteredTodos.map((todo, index) => (
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
