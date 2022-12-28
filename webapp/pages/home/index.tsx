import * as React from 'react';
import { Button, TextField } from '@mui/material';
import MySnackbar from "@webapp/components/MySnackbar";
import { postHello } from "@webapp/repository/frontend/hello";
import { MySnackbarProps } from '@webapp/types/my_snackbar';

export default function Home() {
  const [snackbar, setSnackbar] = React.useState<MySnackbarProps>({ severity: "info", message: "" });
  const [inputText, setInputText] = React.useState<string>("");

  const handleTextFieldChange = async ({ target }) => {
    setInputText(target.value);
  };

  const handleButtonClick = async () => {
    const [resultOk, respData] = await postHello({ yearMonth: inputText });
    if (resultOk) {
      setSnackbar({ severity: "info", message: "成功" });
    } else {
      setSnackbar({ severity: "error", message: respData as string });
    }
  };

  const handleSnackbarClose = async () => {
    setSnackbar({ severity: "info", message: "" });
  };

  return (
    <>
      <TextField onChange={handleTextFieldChange} inputProps={{ 'data-testid': 'test-text-field' }}/>
      <Button onClick={handleButtonClick}  data-testid="test-button" >
        メッセージを表示　
      </Button>
      {/**
       * {...snackbar} は下記の表現と同じ
       * <MySnackbar severity={snackbar.severity} message={snackbar.message} onClose={handleSnackbarClose}>
       */}
      <MySnackbar {...snackbar} onClose={handleSnackbarClose} />
    </>
  );
};
