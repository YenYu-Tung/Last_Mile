import { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import LinearProgress, { LinearProgressProps, linearProgressClasses } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 6,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 600 : 600],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#32FF9D' : '#32FF9D',
  },
}));

function LinearProgressWithLabel(props: LinearProgressProps & { value: number, time: number }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: 1 }}>
      <Box sx={{ width: '82%' }}>
        <BorderLinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography fontSize={"12px"} color="white">{`${Math.round(
          props.time,
        )} min`}</Typography>
      </Box>
    </Box>
  );
}

export default function LinearWithValueLabel() {
  const [progress, setProgress] = useState(10);
  const [time, setTime] = useState(9);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
      setTime((prevTime) => (prevTime <= 0 ? 10 : prevTime - 1));
    }, 900);
    return () => {
      clearInterval(timer);
    };
  }, [progress, time]);

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabel value={progress} time={time} />
    </Box>
  );
}
