import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import vehicle2 from "/vehicle2.svg";

type ProgressProps = {
  progress: number;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
  expanded: boolean;
  isDone: boolean;
}

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#2B2B2B',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#32FF9D',
  },
}));
const ImageAtProgressEnd = styled('img')<{ progress: number }>(({ progress }) => ({
  position: 'absolute',
  top: 10, 
  left: `${progress + 113}px`, 
  transform: 'translateX(-50%)', 
  transition: 'left 0.5s ease', 
  width: '48px', 
}));

export default function LinearDeterminate(props: ProgressProps) {
  const { progress, setProgress, expanded, isDone } = props;

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, [setProgress]);

  return (
    <>
      {!isDone ?
        <Box sx={{ width: '60%' }}>
          <BorderLinearProgress variant="determinate" value={progress} />
          {expanded && 
            < ImageAtProgressEnd
              src={vehicle2} 
              alt="vehicle2"
              progress={progress}
            />
          }      
        </Box>
        :
        <Box sx={{ width: '60%' }}>
          <BorderLinearProgress variant="determinate" value={100} />
        </Box>
      }
  </>   
  );
}
