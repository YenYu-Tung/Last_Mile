import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { SwitchProps } from '@mui/material';

type ProfileProps = {
  thememode: string;
  toggleTheme: () => void;
}

const AntSwitch = styled((props: Omit<SwitchProps, 'thememode'> & { thememode: string }) => (
  <Switch {...props} />
))(({ theme, thememode }) => ({
  width: 36,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(16px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    color: '#DEEBFF',
    '&.Mui-checked': {
      transform: 'translateX(20px)',
      color: '#FFEED4',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: thememode === 'dark' ? '#FF862E' : '#FF862E',
        color: '#DEEBFF',
      },
      '& .MuiSwitch-thumb': {
        backgroundImage: `url('/SUN.svg')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['transform'], {
      duration: 200,
    }),
    backgroundImage: `url('/MON.svg')`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: thememode === 'dark' ? '#4B6690' : '#4B6690',
    boxSizing: 'border-box',
  },
}));

export default function CustomizedSwitches({ thememode, toggleTheme }: ProfileProps) {
  return (
    <AntSwitch checked={thememode === 'light'} inputProps={{ 'aria-label': 'ant design' }} thememode={thememode} onClick={toggleTheme}/>
  );
}
