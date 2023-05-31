import { useRecoilState, atom } from "recoil";
import { Snackbar, Alert as MuiAlert } from "@mui/material";
import React from "react";

const Alert = React.forwardRef((props, ref) => {
  return <MuiAlert {...props} ref={ref} variant="filled" />;
});

const noticeSnackBarInfoAtom = atom({
  key: "app/noticeSnackBarInfoAtom",
  default: {
    opened: false,
    autoHideDuration: 0,
    severity: "",
    msg: "",
  },
});

function useNoticeSnackBarState() {
  const [noticeSnackBarInfo, setNoticeSnackBarInfo] = useRecoilState(
    noticeSnackBarInfoAtom
  );

  const opened = noticeSnackBarInfo.opened;
  const autoHideDuration = noticeSnackBarInfo.autoHideDuration;
  const msg = noticeSnackBarInfo.msg;
  const severity = noticeSnackBarInfo.severity;

  const open = (msg, severity = "success", autoHideDuration = 6000) => {
    setNoticeSnackBarInfo({
      opened: true,
      msg,
      severity,
      autoHideDuration,
    });
  };
  const close = () => {
    setNoticeSnackBarInfo({ ...noticeSnackBarInfo, opened: false });
  };

  return {
    opened,
    open,
    close,
    autoHideDuration,
    severity,
    msg,
  };
}

export default function NoticeSnackBar() {
  const state = useNoticeSnackBarState();
  return (
    <>
      <Snackbar
        open={state.opened}
        autoHideDuration={state.autoHideDuration}
        onClose={state.close}
      >
        <Alert severity={state.severity}>{state.msg}</Alert>
      </Snackbar>
    </>
  );
}
