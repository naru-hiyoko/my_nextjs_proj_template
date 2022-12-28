import * as React from 'react';
import moment from 'moment';
import { Button } from '@mui/material';
import MySnackbar from "@webapp/components/MySnackbar";

export default function Home() {
  const [message, setMessage] = React.useState<string>("こんにちは");

  const handleButtonClick = async () => {
    setMessage("ボタンが押されました");
  };

  const handleSnackbarClose = async () => {
    setMessage("");
  };

  return (
    <>
      <Button onClick={handleButtonClick} >
        メッセージを表示　
      </Button>
      <MySnackbar severity="info" message={message} onClose={handleSnackbarClose} />
    </>
  );
};
