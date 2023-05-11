import { ThemeProvider } from '@emotion/react';
import { Button, Grid, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import theme from '../colortheme';
const RowCol = () => {
  const location = useLocation();
  const matrixOne = location.state?.matrixOne;
  const matrixTwo = location.state?.matrixTwo;
  const [matrixOneCol, setMatrixOneCol] = useState(
    Array(matrixOne.length * matrixOne[0].length).fill(false)
  );
  const [matrixTwoCol, setMatrixTwoCol] = useState(
    Array(matrixTwo.length * matrixTwo[0].length).fill(false)
  );
  const startVisualizer = () => {
    // first need to color the
    console.log('starting!!');
    let delay = 1000;
    for (let i = 0; i < matrixOne.length; i++) {
      for (let j = 0; j < matrixOne[0].length; j++) {
        setTimeout(() => {
          const dummy = [...matrixOneCol];
          dummy[i * matrixOne.length + j] = true;
          setMatrixOneCol(dummy); // set color of cell to red
        }, delay);
        delay += 1000;
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      startVisualizer();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Grid container>
      <Grid item>
        <InnerMatrixComp matrix={matrixOne} matrixCol={matrixOneCol} />
      </Grid>
      <Grid item>
        <InnerMatrixComp matrix={matrixTwo} matrixCol={matrixTwoCol} />
      </Grid>
    </Grid>
  );
};

const InnerMatrixComp = ({ matrix, matrixCol }) => {
  return (
    <Paper elevation={1} square>
      {matrix.map((col, i) => (
        <div>
          {col.map((elem, j) => (
            <ThemeProvider theme={theme}>
              {matrixCol[matrix[0].length * i + j] ? (
                <Button sx={{ backgroundColor: 'HighlightText' }}>
                  {elem}
                </Button>
              ) : (
                <Button sx={{ backgroundColor: 'aliceblue' }}>{elem}</Button>
              )}
            </ThemeProvider>
          ))}
        </div>
      ))}
    </Paper>
  );
};

export default RowCol;
