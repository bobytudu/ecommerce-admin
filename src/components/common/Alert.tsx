import React from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { closeSnack } from "redux/reducers/snack.reducer";

function AlertComponent() {
  const dispatch = useAppDispatch();
  const { open, severity, message } = useAppSelector((state) => state.snack);
  const onClose = (...args: any) => {
    if (args[1] && args[1] === "clickaway") return;
    dispatch(closeSnack());
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={open}
      autoHideDuration={5000}
      onClose={onClose}
    >
      <Alert
        variant="filled"
        severity={severity === "success" ? "success" : "error"}
        sx={{ width: "100%" }}
        onClose={onClose}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

export default AlertComponent;
