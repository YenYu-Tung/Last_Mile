import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import person from "/person.svg";

type ProgressProps = {
  progress: number;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
  expanded: boolean;
  isStart: boolean;
}

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#2B2B2B',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#FF862E',
  },
}));

const ImageAtProgressEnd = styled('img')<{ progress: number }>(({ progress }) => ({
  position: 'absolute',
  top: 20, 
  left: `${progress*0.6 + 235}px`, 
  transform: 'translateX(-50%)', 
  transition: 'left 0.5s ease', 
  width: '24px', 
}));

export default function LinearDeterminate(props: ProgressProps) {
  const { progress, setProgress, expanded, isStart } = props;

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 300);

    return () => {
      clearInterval(timer);
    };
  }, [setProgress]);

  return (
  <>
      {isStart ?
        <Box sx={{ width: '35%' }}>
          <BorderLinearProgress variant="determinate" value={progress} />
          {expanded &&
            < ImageAtProgressEnd
              src={person}
              alt="person"
              progress={progress}
            />
          }
        </Box>
        :
        <Box sx={{ width: '35%' }}>
          <BorderLinearProgress variant="determinate" value={0} />
        </Box>
      }
  </>    
  );
}
