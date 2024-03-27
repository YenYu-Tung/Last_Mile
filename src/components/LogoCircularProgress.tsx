import { useState, useEffect } from "react";

import Box from '@mui/material/Box';
import CircularProgress, {
  circularProgressClasses,
  CircularProgressProps,
} from '@mui/material/CircularProgress';

// Inspired by the former Facebook spinners.
function FacebookCircularProgress(props: CircularProgressProps & { value: number },) {
  return (
    <Box sx={{ position: 'relative' }}>
      <CircularProgress
        sx={{
          color: (theme) =>
            theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        }}
        size={40}
        thickness={6}
        {...props}
      />
      <CircularProgress
        disableShrink
        sx={{
          color: (theme) => (theme.palette.mode === 'light' ? 'white' : '#1E2023'),
          animationDuration: '550ms',
          position: 'absolute',
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round',
          },
        }}
        size={40}
        thickness={6}
        {...props}
      />
    </Box>
  );
}


export default function CustomizedProgressBars() {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress + 10));
    }, 250);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <FacebookCircularProgress value={progress} />
  );
}
