import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import { styled } from '@mui/material/styles';

import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';
import StraightRoundedIcon from '@mui/icons-material/StraightRounded';
import TurnRightRoundedIcon from '@mui/icons-material/TurnRightRounded';


const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#767676',
      borderLeftWidth: 3,  
      width: 5, 
      minHeight: '18px',
      borderStyle: 'dotted',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#767676',
      borderLeftWidth: 3,
      width: 5, 
      minHeight: '18px',
      borderStyle: 'dotted',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? '#898989' : '#898989',
    borderLeftWidth: 3,
    width: 5, 
    borderRadius: 1,
    minHeight: '18px',
    borderStyle: 'dotted',
  },
}));

const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? '#898989' : '#898989',
    display: 'flex',
    height: 12,
    alignItems: 'center',
    ...(ownerState.active && {
      color: '#32FF9D',
    }),
    '& .QontoStepIcon-completed': {
      width: 10,
      height: 10,
      borderRadius: '50%',
      backgroundColor: '#767676',
      marginLeft: '8px'
    },
    '& .QontoStepIcon-circle': {
      width: 10,
      height: 10,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
      marginLeft: '8px'
    },
  }),
);

function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <div className="QontoStepIcon-completed" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}


const steps = [
  {
    label: 'Go straight for 30m',
    icon: 'StraightRoundedIcon'
  },
  {
    label: 'Turn Right to UFO Road',
    icon: 'TurnRightRoundedIcon',
  },
  {
    label: 'Go straight for 50m',
    icon: 'StraightRoundedIcon'
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {      
      if (activeStep <= steps.length - 1) {
        setActiveStep((prevStep) => prevStep + 1);
        if(activeStep == steps.length - 1){
          setActiveStep(2);
        }
      }
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, [activeStep]);

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical" connector={<QontoConnector />}>
        {steps.map((step) => (
          <Step key={step.label}>
            <StepLabel
              StepIconComponent={QontoStepIcon}
              sx={{ padding: '0px', '&.MuiStep-root .MuiStepLabel-label': { fontSize: '24px' } }}
            >
              {step.icon === 'StraightRoundedIcon' ? <StraightRoundedIcon /> : <TurnRightRoundedIcon />}

              {step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
