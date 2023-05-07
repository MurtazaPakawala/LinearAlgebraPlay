import { Button, Paper, ThemeProvider } from '@mui/material';
import React, { useState } from 'react';
import theme from './colortheme';

const Matrix = ({ row, col }) => {
  const arr = Array(parseInt(row))
    .fill()
    .map(() =>
      Array(parseInt(col))
        .fill()
        .map(() => Math.floor(Math.random() * 100))
    );

  const [matrix, setMatrix] = useState(arr);
  console.log(row, col);
  console.log('see', matrix);
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
