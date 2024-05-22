import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { SwitchProps } from '@mui/material';

type Props = {
  mainPage: string;
  toggleMainPage: () => void;
}


const AntSwitch = styled((props: Omit<SwitchProps, 'thememode'> & { mainPage: string }) => (
  <Switch {...props} />
))(({ theme }) => ({
  width: 68,
  height: 28,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 35,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(28px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 0,
    color: '#A9A9A9',
    '&.Mui-checked': {
      transform: 'translateX(30px)',
      color: '#A9A9A9',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#2E3237',
        color: '#A9A9A9',
        backgroundImage: `url('/receive_gray.svg')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top 50% left 6px",
      },
      '& .MuiSwitch-thumb': {
        backgroundImage: `url('/send_black.svg')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 38,
    height: 28,
    borderRadius: 14,
    transition: theme.transitions.create(['transform'], {
      duration: 200,
    }),
    backgroundImage: `url('/receive.svg')`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  '& .MuiSwitch-track': {
    borderRadius: 28 / 2,
    opacity: 1,
    backgroundColor: '#2E3237',
    boxSizing: 'border-box',
    backgroundImage: `url('/send.svg')`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top 50% right 8px",
  },
}));

export default function CustomizedSwitches({ toggleMainPage, mainPage }: Props) {
  return (
    <AntSwitch checked={mainPage === 'sender-home'} inputProps={{ 'aria-label': 'ant design' }} mainPage={mainPage} onClick={toggleMainPage} />
  );
}
