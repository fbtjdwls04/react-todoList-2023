import { NavLink } from "react-router-dom";
import { useTodosState } from "../Hooks";
import { useNoticeSnackBarState } from "./NoticeSnackBar";
import {
  List,
  ListItem,
  ListItemButton,
  SwipeableDrawer,
  Divider,
} from "@mui/material";

export default function TodoOptionDrawer({ status }) {
  const noticeSnackBarState = useNoticeSnackBarState();
  const todosState = useTodosState();
  const removeTodo = () => {
    if (window.confirm(`${status.todoId}번 할 일을 삭제하시겠습니까?`)) {
      todosState.removeTodoById(status.todoId);
      status.close();
      noticeSnackBarState.open(
        `${status.todoId}번 할 일이 삭제되었습니다.`,
        "info"
      );
    }
  };

  const todo = todosState.findTodoById(status.todoId);

  return (
    <>
      <SwipeableDrawer
        anchor={"bottom"}
        onOpen={() => {}}
        open={status.opened}
        onClose={status.close}
      >
        <List className="!py-0">
          <ListItem className="!p-5 !pt-6">
            <span className="text-[color:var(--mui-color-primary-main)]">
              {todo?.id}번
            </span>
            <span>&nbsp;</span>
            <span>할 일에 대해</span>
          </ListItem>
          <Divider />
          <ListItemButton
            className="!p-5 !pt-6 !items-baseline"
            to={`/edit/${status.todoId}`}
            LinkComponent={NavLink}
          >
            <i className="fa-solid fa-pen"></i>
            &nbsp;수정
          </ListItemButton>
          <ListItemButton
            className="!p-5 !pt-6 !items-baseline"
            onClick={removeTodo}
          >
            <i className="fa-solid fa-trash-can"></i>
            &nbsp;삭제
          </ListItemButton>
        </List>
      </SwipeableDrawer>
    </>
  );
}
