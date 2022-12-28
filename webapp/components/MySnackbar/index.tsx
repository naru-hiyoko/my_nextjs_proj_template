import * as React from 'react';
import { Snackbar } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { MySnackbarProps } from '@webapp/types/my_snackbar';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref,) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function MySnackbar(props: MySnackbarProps): React.ReactElement {
  const { severity, message, onClose = () => {}} = props

  const open = message !== '';

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string): void => {
    if (reason === 'clickaway') {
      return;
    }
    onClose();
  };

  return (
    <React.Fragment>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}> {message} </Alert>
      </Snackbar>
    </React.Fragment>
  );
};
