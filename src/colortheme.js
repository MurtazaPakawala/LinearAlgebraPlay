import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    secondary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    primary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    nav: {
      light: '#ff7961',
    },
    textCol: {
      dark: '#ba000d',
    },
    success: {
      main: '#ba000d',
    },
  },
});
export default theme;
