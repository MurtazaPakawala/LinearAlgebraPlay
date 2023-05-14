import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import functionPlot from 'function-plot';
const call = () => {
  console.log('called');
  functionPlot({
    target: '#test2',
    width: 580,
    height: 400,
    yAxis: {
      label: 'y axis',
      domain: [0, 40],
    },
    xAxis: {
      label: 'x axis',
      domain: [0, 30],
    },
    data: [
      {
        fn: '0.01x^2 + 15',
      },
    ],
    disableZoom: true,
    grid: true,
  });
};
function Solution() {
  const [change, setChange] = React.useState('false');
  useEffect(() => {
    call();
  }, []);
  return (
    <div className='App'>
      <div id='test2'></div>
      <Button onClick={() => setChange(!change)}>click me</Button>
    </div>
  );
}

export default Solution;
