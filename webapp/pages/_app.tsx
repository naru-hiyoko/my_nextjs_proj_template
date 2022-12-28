import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";
import { Box } from "@mui/material";

const theme = createTheme();

function WebApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={ theme } >
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Component {...pageProps} />
      </Box>
    </ThemeProvider>
  );
}

export default WebApp
