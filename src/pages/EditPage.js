import { useNavigate, useParams } from "react-router-dom";
import { useNoticeSnackBarState } from "../components/NoticeSnackBar";
import { useTodosState } from "../Hooks";
import { TextField, Button } from "@mui/material";

export default function EditPage() {
  const noticeSnackBarState = useNoticeSnackBarState();
  const todosState = useTodosState();
  const { id } = useParams();
  const todo = todosState.findTodoById(id);
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    if (form.performDate.value.length == 0) {
      alert("날짜를 입력해주세요");
      form.performDate.focus();
      return;
    }
    if (form.content.value.length == 0) {
      alert("내용을 입력해주세요");
      form.content.focus();
      return;
    }

    const newTodoId = todosState.modifyTodoById(
      todo.id,
      form.performDate.value,
      form.content.value
    );
    noticeSnackBarState.open(`${newTodoId}번 할 일이 수정되었습니다.`, "info");
    navigate("/main");
  };

  return (
    <>
      <form className="flex-1 flex p-10 flex-col gap-7" onSubmit={onSubmit}>
        <TextField
          name="performDate"
          id="outlined-basic"
          label="언제 해야하나요?"
          focused
          type="datetime-local"
          defaultValue={todo.performDate}
        />
        <TextField
          name="content"
          label="무엇을 해야하나요?"
          className="flex flex-1"
          multiline
          InputProps={{ className: "flex-1 flex-col" }}
          inputProps={{ className: "flex-1" }}
          defaultValue={todo.content}
        />

        <Button type="submit" variant="contained">
          <span>
            <i className="fa-solid fa-pen"></i>
          </span>
          <span>&nbsp;</span>
          <span>수정 완료</span>
        </Button>
      </form>
    </>
  );
}
