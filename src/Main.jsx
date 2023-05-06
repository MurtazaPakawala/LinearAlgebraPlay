import { Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import theme from './colortheme';
import { ThemeProvider } from '@mui/material/styles';
import Matrix from './Matrix';
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
      setMatrix({ row, col });
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
  const [matrixOne, setMatrixOne] = useState({ row: null, col: null });
  const [matrixTwo, setMatrixTwo] = useState({ row: null, col: null });
  const [showMatrixOne, setShowMatrixOne] = useState(false);
  const [showMatrixTwo, setShowMatrixTwo] = useState(false);
  return (
    <Grid container style={{ marginTop: 50 }}>
      <Grid container xs={6} spacing={3}>
        <InnerGrid setMatrix={setMatrixOne} showMatrix={setShowMatrixOne} />
      </Grid>
      <Grid container xs={6} spacing={3}>
        <InnerGrid setMatrix={setMatrixOne} showMatrix={setShowMatrixTwo} />
      </Grid>
      {showMatrixOne && (
        <Grid>
          <Matrix row={matrixOne.row} col={matrixOne.col} />
        </Grid>
      )}
    </Grid>
  );
};

export default Main;
