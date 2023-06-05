import { Tab, Tabs } from "@mui/material";
import { useTodoOptionDrawerState, useTodosState } from "../Hooks";
import TodoOptionDrawer from "../components/TodoOptionDrawer";
import TodoListItem from "../components/TodoListItem";
import {
  TodoList__filterCompletedIndexAtom,
  TodoList__sortIndexAtom,
} from "../Atoms";
import { useRecoilState } from "recoil";

export default function TodoList() {
  const todoOptionDrawerStatus = useTodoOptionDrawerState();
  const todosState = useTodosState();
  const [filterCompletedIndex, setFilterCompletedIndex] = useRecoilState(
    TodoList__filterCompletedIndexAtom
  );
  const [sortIndex, setSortIndex] = useRecoilState(TodoList__sortIndexAtom);

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
  const sortedTodos = [...filteredTodos].sort((a, b) => {
    if (a.performDate == b.performDate) return 0;
    return a.performDate > b.performDate ? 1 : -1;
  });
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
      <Tabs
        variant="scrollable"
        value={sortIndex}
        onChange={(event, newValue) => setSortIndex(newValue)}
      >
        <Tab
          className="flex-grow !max-w-[none]"
          label={
            <span className="flex">
              <i class="fa-regular fa-clock"></i>
              <span className="mx-2 whitespace-nowrap">급해요</span>
              <i class="fa-solid fa-sort-up relative top-[3px]"></i>
            </span>
          }
          value={0}
        />
        <Tab
          className="flex-grow !max-w-[none]"
          label={
            <span className="flex">
              <i class="fa-regular fa-clock"></i>
              <span className="mx-2 whitespace-nowrap">널널해요</span>
              <i class="fa-solid fa-sort-down relative bottom-[3px]"></i>
            </span>
          }
          value={1}
        />
        <Tab
          className="flex-grow !max-w-[none]"
          label={
            <span className="flex">
              <i class="fa-solid fa-pen"></i>
              <span className="mx-2 whitespace-nowrap">작성 순</span>
              <i class="fa-solid fa-sort-up relative top-[3px]"></i>
            </span>
          }
          value={2}
        />
        <Tab
          className="flex-grow !max-w-[none]"
          label={
            <span className="flex">
              <i class="fa-solid fa-pen"></i>
              <span className="mx-2 whitespace-nowrap">작성 순</span>
              <i class="fa-solid fa-sort-down relative bottom-[3px]"></i>
            </span>
          }
          value={3}
        />
      </Tabs>

      <div className="mt-5 px-4 overflow-y-auto">
        <ul>
          {sortedTodos.map((todo, index) => (
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
