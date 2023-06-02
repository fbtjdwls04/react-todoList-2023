import { TextField } from "@mui/material";

export default function WritePage() {
  return (
    <>
      <div className="flex-1 flex p-10 flex-col gap-7">
        <TextField
          id="outlined-basic"
          label="언제 해야하나요?"
          variant="outlined"
          focused
          type="datetime-local"
        />
        <TextField
          label="할 일을 입력해주세요"
          variant="outlined"
          className="flex flex-1"
          multiline
        />
      </div>
    </>
  );
}
