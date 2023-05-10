import { Button, Paper, ThemeProvider } from '@mui/material';
import React, { useState } from 'react';
import theme from '../colortheme';

const Matrix = ({ matrix }) => {
  return (
    <Paper elevation={1} square>
      {matrix.map((col) => (
        <div>
          {col.map((elem) => (
            <ThemeProvider theme={theme}>
              <Button>{elem}</Button>
            </ThemeProvider>
          ))}
        </div>
      ))}
    </Paper>
  );
};

export default Matrix;
