import { AlertColor } from '@mui/material/Alert';

type MySnackbarProps = {
  severity: AlertColor,
  message: string,
  onClose?: () => void,
};
