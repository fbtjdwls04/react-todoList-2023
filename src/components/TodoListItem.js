import { Chip, Button } from "@mui/material";
import classNames from "classnames";
import { useTodosState } from "../Hooks";

export default function TodoListItem({ todo, index, openDrawer }) {
  const todosState = useTodosState();
  return (
    <>
      <li key={todo.id} className="mt-10">
        <div className="flex gap-2">
          <Chip
            label={`번호 : ${todo.id}`}
            variant="outlined"
            className="!pt-2"
          />
          <Chip
            label={todo.performDate}
            variant="outlined"
            color="primary"
            className="!pt-2"
          />
        </div>
        <div className="mt-4 shadow rounded-[20px] flex">
          <Button
            className="flex-shrink-0 !items-start !rounded-[20px_0_0_20px]"
            color="inherit"
            onClick={() => todosState.check(todo.id)}
          >
            <span
              className={classNames(
                "flex",
                "items-center",
                "text-4xl",
                {
                  "text-[color:var(--mui-color-primary-main)]": todo.check,
                },
                { "text-[#dfdfdf]": !todo.check }
              )}
            >
              <i className="fa-solid fa-check"></i>
            </span>
          </Button>

          <div className="flex-shrink-0 my-3 mr-4 w-[2px] bg-[#dfdfdf]"></div>

          <div className="whitespace-pre-wrap leading-relaxed hover:text-[color:var(--mui-color-primary-main)] flex-grow my-5">
            <p
              className={classNames({
                "line-through": todo.check,
              })}
            >
              {todo.content}
            </p>
          </div>

          <div className="flex-shrink-0 my-3 w-[2px] bg-[#dfdfdf]"></div>

          <Button
            onClick={() => openDrawer(todo.id)}
            className="flex-shrink-0 !rounded-[0_20px_20px_0] !items-start"
            color="inherit"
          >
            <span className="text-[#dfdfdf] text-2xl flex items-center">
              <i className="fa-solid fa-ellipsis"></i>
            </span>
          </Button>
        </div>
      </li>
    </>
  );
}
