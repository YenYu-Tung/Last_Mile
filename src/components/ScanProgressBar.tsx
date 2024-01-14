import { useEffect } from "react";
import { styled } from '@mui/material/styles';
import LinearProgress, { LinearProgressProps, linearProgressClasses } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

type ScanProps = {
  progress: number;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
}

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

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <Box sx={{ minWidth: 35 }}>
        <Typography fontSize={"22px"} color="#32FF9D">{`${Math.round(
          props.value,
        )} %`}</Typography>
      </Box>
      <Box sx={{ width: '100%' }}>
        <BorderLinearProgress variant="determinate" {...props}/>
      </Box>
    </Box>
  );
}

export default function LinearWithValueLabel({ setProgress, progress }: ScanProps) {

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 300);
    return () => {
      clearInterval(timer);
    };
  }, [progress, setProgress]);

  return (
    <Box sx={{ width: '70%' }}>
      <LinearProgressWithLabel value={progress} />
    </Box>
  );
}
