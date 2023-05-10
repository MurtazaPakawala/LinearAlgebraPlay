import { Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import theme from './colortheme';
import { ThemeProvider } from '@mui/material/styles';
import Matrix from './Matrix';
import CloseIcon from '@mui/icons-material/Close';
import RowCol from './RowCol';
const InnerGrid = ({ setMatrix, showMatrix }) => {
  let col = null;
  let row = null;
  const handleChangeCol = (e) => {
    col = e;
    if (e.length === 0) col = null;
  };
  const handleChangeRow = (e) => {
    row = e;
    if (e.length === 0) row = null;
  };
  const handleCreate = () => {
    if (row && col) {
      const arr = Array(parseInt(row))
        .fill()
        .map(() =>
          Array(parseInt(col))
            .fill()
            .map(() => Math.floor(Math.random() * 100))
        );
      setMatrix(arr);
      showMatrix(true);
    }
  };
  return (
    <>
      <Grid item xs={12} display={'flex'} justifyContent={'center'}>
        <Typography variant='h5'>This is the matrix 1</Typography>
      </Grid>
      <Grid item xs={12} display={'flex'} justifyContent={'space-evenly'}>
        <TextField
          type='number'
          id='outlined-basic'
          label='Number of rows'
          required
          variant='outlined'
          onChange={(e) => handleChangeRow(e.target.value)}
        />
        <TextField
          type='number'
          id='outlined-basic'
          label='Number of cols'
          required
          variant='outlined'
          onChange={(e) => handleChangeCol(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} display={'flex'} justifyContent={'space-evenly'}>
        <ThemeProvider theme={theme}>
          <Button onClick={handleCreate} variant='contained' color='success'>
            create
          </Button>
        </ThemeProvider>
      </Grid>
    </>
  );
};
const Main = () => {
  const [matrixOne, setMatrixOne] = useState([]);
  const [matrixTwo, setMatrixTwo] = useState([]);
  const [showMatrixOne, setShowMatrixOne] = useState(false);
  const [showMatrixTwo, setShowMatrixTwo] = useState(false);
  const [ansMatrix, setAnsMatrix] = useState([]);
  const handleMultiply = () => {
    // cant multuply if teh
    if (matrixOne[0].length !== matrixTwo.length) {
      alert('sorry but cannot multiply these matrices');
      return;
    }
    // doing teh acutal multiplication
    let res = Array(matrixOne.length);
    matrixOne.forEach((row, index) => {
      const resRow = [];
      for (let i = 0; i < matrixTwo[0].length; i++) {
        let sum = 0;
        for (let k = 0; k < matrixTwo.length; k++) {
          console.log(matrixTwo[k][i], row[k]);
          sum += matrixTwo[k][i] * row[k];
        }
        resRow.push(sum);
      }
      res.push(resRow);
    });
    console.log(res, 'this is the result');
    setAnsMatrix(res);
  };
  return (
    <Grid container style={{ marginTop: 50 }}>
      <Grid container xs={6} spacing={3}>
        <InnerGrid setMatrix={setMatrixOne} showMatrix={setShowMatrixOne} />
      </Grid>
      <Grid container xs={6} spacing={3}>
        <InnerGrid setMatrix={setMatrixTwo} showMatrix={setShowMatrixTwo} />
      </Grid>

      <Grid container marginTop={2}>
        {showMatrixOne && (
          <Grid
            item
            xs={5}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Matrix matrix={matrixOne} />
          </Grid>
        )}

        {showMatrixOne && showMatrixTwo && (
          <Grid
            item
            xs={2}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            flexDirection={'column'}
          >
            <CloseIcon sx={{ fontSize: 65 }} />
            <ThemeProvider theme={theme}>
              <RowCol />
            </ThemeProvider>
          </Grid>
        )}
        {showMatrixTwo && (
          <Grid
            item
            xs={5}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Matrix matrix={matrixTwo} />
          </Grid>
        )}

        <Grid
          container
          spacing={2}
          marginTop={2}
          height={300}
          width={300}
          display={'flex'}
          justifyContent={'center'}
          xs={12}
        >
          {ansMatrix.length !== 0 && (
            <Grid
              item
              xs={12}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Matrix matrix={ansMatrix} />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Main;
