import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import logo from '../static/logo.png';
import theme from '../colortheme';
import { ThemeProvider } from '@emotion/react';

function Navbar() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position='static'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <img
              src={logo}
              alt='logo'
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
              style={{ height: 50, width: 50 }}
            />
            <Typography
              variant='h6'
              noWrap
              component='a'
              href='/'
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Matrix Multiply
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default Navbar;
