import { ThemeProvider } from '@emotion/react';
import { Button, Grid, Paper, Typography } from '@mui/material';
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
  // this is the resultant matrix
  const [resMatrix, setResMatrix] = useState(
    Array(matrixOne.length)
      .fill()
      .map(() => Array(matrixTwo[0].length).fill(''))
  );
  // this is the res colour matrix
  const [resMatrixCol, setResMatrixCol] = useState(
    Array(resMatrix.length * resMatrix[0].length).fill(false)
  );
  // making the pause thingy
  const [isPaused, setIsPaused] = useState(false);
  console.log('gloval variable ', isPaused);
  const startVisualizer = () => {
    // first need to color the
    // doing all stuff in an async
    async function doColor() {
      console.log('starting!!', resMatrix);
      for (let i = 0; i < matrixOne.length; i++) {
        for (let k = 0; k < matrixTwo[0].length; k++) {
          let sum = 0;
          for (let j = 0; j < matrixOne[0].length; j++) {
            console.log(isPaused);
            if (isPaused) {
              // Wait for isPaused to become false
              await new Promise((resolve) => {
                const intervalId = setInterval(() => {
                  if (!isPaused) {
                    clearInterval(intervalId);
                    resolve();
                  }
                }, 100);
              });
            }
            // setting the first mtr
            const dummyMtrOne = [...matrixOneCol];
            dummyMtrOne[i * matrixOne[0].length + j] = true;
            // changing the mtr 2
            const dummyMtrTwo = [...matrixTwoCol];
            dummyMtrTwo[j * matrixTwo[0].length + k] = true;
            // working with res matrix
            const dummyMtrRes = [...resMatrixCol];
            dummyMtrRes[i * matrixTwo[0].length + k] = true;
            setMatrixOneCol(dummyMtrOne); // set color of cell to red
            setMatrixTwoCol(dummyMtrTwo); // set color of cell to red
            setResMatrixCol(dummyMtrRes);
            // when is the element written in the result matrix
            if (j === matrixOne[0].length - 1) {
              console.log('this is the sum', sum);
              const dummyRes = [...resMatrix];
              dummyRes[i][k] = sum;
              setResMatrix(dummyRes);
            } else {
              sum += matrixOne[i][j] * matrixTwo[j][k];
            }
            await new Promise((resolve) => setTimeout(resolve, 1000));
          }
        }
      }
      // when the loop is over turning everything to false again
      setMatrixOneCol(Array(matrixOneCol.length).fill(false));
      setMatrixTwoCol(Array(matrixTwoCol.length).fill(false));
      setResMatrixCol(Array(resMatrixCol.length).fill(false));
      console.log('completed coloring');
    }

    doColor();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      startVisualizer();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Grid
      container
      spacing={0}
      direction='row'
      alignItems='center'
      justifyContent='space-evenly'
      style={{ minHeight: '80vh' }}
    >
      <Grid
        item
        display={'flex'}
        gap={5}
        direction={'column'}
        alignItems={'center'}
      >
        <Typography>Matrix A</Typography>
        <InnerMatrixComp matrix={matrixOne} matrixCol={matrixOneCol} />
        <Button onClick={() => setIsPaused(true)}>Stop</Button>
      </Grid>
      <Grid
        item
        display={'flex'}
        gap={5}
        direction={'column'}
        alignItems={'center'}
      >
        <Typography>Matrix B</Typography>
        <InnerMatrixComp matrix={matrixTwo} matrixCol={matrixTwoCol} />
      </Grid>
      <Grid
        item
        display={'flex'}
        gap={5}
        direction={'column'}
        alignItems={'center'}
      >
        <Typography>Resultant Matrix</Typography>
        <InnerMatrixComp matrix={resMatrix} matrixCol={resMatrixCol} />
      </Grid>
    </Grid>
  );
};
const InnerMatrixComp = ({ matrix, matrixCol }) => {
  return (
    <Paper
      sx={{
        minHeight: 300,
        minWidth: 300,
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'space-evenly',
        justifyContent: 'space-evenly',
      }}
      elevation={1}
      square
    >
      {matrix.map((col, i) => (
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          {col.map((elem, j) => (
            <ThemeProvider theme={theme}>
              {matrixCol[matrix[0].length * i + j] ? (
                <Button sx={{ backgroundColor: 'bisque' }}>{elem}</Button>
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
