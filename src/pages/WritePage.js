import { TextField, Button } from "@mui/material";
import { useTodosState } from "../Hooks";
import { useNoticeSnackBarState } from "../components/NoticeSnackBar";

export default function WritePage() {
  const noticeSnackBarState = useNoticeSnackBarState();
  const todosState = useTodosState();
  const onSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    if (form.regDate.value.length == 0) {
      alert("날짜를 입력해 주세요");
      form.regDate.focus();
      return;
    }
    if (form.content.value.length == 0) {
      alert("내용을 입력해 주세요");
      form.content.focus();
      return;
    }

    const newTodoId = todosState.addTodo(
      form.regDate.value,
      form.content.value
    );
    noticeSnackBarState.open(`${newTodoId}번 할 일이 추가되었습니다.`);

    form.content.value = "";
    form.content.focus();
  };

  return (
    <>
      <form
        className="flex-1 flex p-10 flex-col gap-7 sm:p-8"
        onSubmit={onSubmit}
      >
        <TextField
          name="regDate"
          id="outlined-basic"
          label="언제 해야 하나요?"
          focused
          type="datetime-local"
        />
        <TextField
          name="content"
          label="무엇을 해야 하나요?"
          className="flex flex-1"
          multiline
          InputProps={{ className: "flex-1 flex-col" }}
          inputProps={{ className: "flex-1" }}
        />

        <Button type="submit" variant="contained">
          <span>
            <i className="fa-solid fa-pen"></i>
          </span>
          <span>&nbsp;</span>
          <span>할 일 추가</span>
        </Button>
      </form>
    </>
  );
}
