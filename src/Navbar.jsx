import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import logo from './static/logo.png';
import theme from './colortheme';

// src for image
const imgSrc =
  'https://www.vhv.rs/dpng/d/436-4369452_lime-green-pi-svg-clip-arts-math-symbol.png';
function Navbar() {
  console.log(theme.palette.primary.light);
  return (
    <AppBar position='static'>
      <Container
        sx={{ backgroundColor: theme.palette.primary.main }}
        maxWidth='xl'
      >
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
  );
}
export default Navbar;
