import { Button } from '@mui/material';
import React, { useState } from 'react';

const Matrix = ({ row, col }) => {
  const [matrix, setMatrix] = useState(
    Array(row)
      .fill()
      .map(() => Array(col).fill(Math.floor(Math.random() * 1000)))
  );
  console.log(row, col);
  console.log('see', matrix);
  return matrix.map((col) => col.map((elem) => <Button>{elem}</Button>));
};

export default Matrix;
