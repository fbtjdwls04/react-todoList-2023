import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

export const { persistAtom: persistAtomTodos } = recoilPersist({
  key: "persistAtomTodos",
});

export const { persistAtom: persistAtomLastTodoId } = recoilPersist({
  key: "persistAtomLastTodoId",
});

export const todoAtom = atom({
  key: "app/todoAtom",
  default: [],
  effects_UNSTABLE: [persistAtomTodos],
});

export const lastTodoIdAtom = atom({
  key: "app/lastTodoIdAtom",
  default: 3,
  effects_UNSTABLE: [persistAtomLastTodoId],
});
