import { useRef, useState, useMemo } from "react";
import { useRecoilState } from "recoil";
import { lastTodoIdAtom, todoAtom } from "./Atoms";
import { dateToStr } from "./util";

export function useTodosState() {
  const [todos, SetTodos] = useRecoilState(todoAtom);
  const [lastTodoId, setLastTodoId] = useRecoilState(lastTodoIdAtom);
  const lastTodoIdRef = useRef(lastTodoId);

  lastTodoIdRef.current = lastTodoId;

  const addTodo = (performDate, content) => {
    const id = ++lastTodoIdRef.current;
    setLastTodoId(id);

    const newTodo = {
      id,
      content,
      regDate: dateToStr(new Date()),
      performDate: dateToStr(new Date(performDate)),
    };
    SetTodos((todos) => [newTodo, ...todos]);

    return id;
  };

  const modifyTodo = (index, performDate, newContent) => {
    const newTodos = todos.map((todo, _index) =>
      _index != index
        ? todo
        : {
            ...todo,
            content: newContent,
            performDate: dateToStr(new Date(performDate)),
          }
    );
    SetTodos(newTodos);
  };

  const modifyTodoById = (id, performDate, newContent) => {
    const index = findTodoIndexById(id);

    if (index == -1) {
      return;
    }
    modifyTodo(index, performDate, newContent);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, _index) => _index != index);
    SetTodos(newTodos);
  };

  const removeTodoById = (id) => {
    const index = todos.findIndex((todo) => todo.id == id);

    if (index != -1) {
      removeTodo(index);
    }
  };

  const findTodoIndexById = (id) => {
    return todos.findIndex((todo) => todo.id == id);
  };

  const findTodoById = (id) => {
    const index = findTodoIndexById(id);

    if (index == -1) {
      return null;
    }

    return todos[index];
  };

  const check = (id) => {
    const newTodo = todos.map((todo) =>
      todo.id == id ? { ...todo, check: !todo.check } : todo
    );
    SetTodos(newTodo);
  };

  return {
    todos,
    addTodo,
    modifyTodo,
    removeTodo,
    removeTodoById,
    findTodoIndexById,
    findTodoById,
    modifyTodoById,
    check,
  };
}

export function useTodoOptionDrawerState() {
  const [todoId, SetTodoId] = useState(null);
  const opened = useMemo(() => todoId !== null, [todoId]);
  const close = () => SetTodoId(null);
  const open = (id) => SetTodoId(id);

  return {
    todoId,
    opened,
    close,
    open,
  };
}
