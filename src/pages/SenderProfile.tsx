import { useState, useEffect } from "react";

import logo from "/logo.svg";


import IconButton from '@mui/material/IconButton';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, Theme, useTheme } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';

import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import MilitaryTechRoundedIcon from '@mui/icons-material/MilitaryTechRounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';

import address from "/company_address.svg";
import avatar from "/vadash.svg";
import message from "/message.svg";

import Switch from "../components/HomeSwitch";



const containerStyle = {
  background: `url(${address})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  position: 'absolute',
  backgroundBlendMode: 'multiply',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  borderRadius: '15px',
} as const;

const customTheme = (outerTheme: Theme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandBorderColor': '#737373',
            '--TextField-brandBorderHoverColor': '#737373',
            '--TextField-brandBorderFocusedColor': '#737373',
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: 'var(--TextField-brandBorderColor)',
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderHoverColor)',
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            '&::before, &::after': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            width: '100%',
            '&::before': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
    },
  });


type ProfileProps = {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setMainPage: React.Dispatch<React.SetStateAction<string>>;
  mainPage: string;
  toggleMainPage: () => void;
}

export default function SenderProfile({ setValue, mainPage, setMainPage, toggleMainPage }: ProfileProps) {

  useEffect(() => {
    setValue('sender-profile');
    setMainPage('sender-home');
  }, [setValue, setMainPage]);

  const outerTheme = useTheme();

  const [isRegistered, setIsRegistered] = useState(false);
  const handleRegister = () => {
    setIsRegistered(true);
  };

  const handleSelect = (role: string) => {
    setSelect(role);
  };

  const [select, setSelect] = useState('person'); 

  return (
    <div className="flex flex-col bg-dark w-full min-h-full">
      {isRegistered && (
        <>
          <div className="flex justify-between align-middle items-center p-4">
            <img className="w-36" src={logo} alt="Last Mile" />
            <div className='flex items-center gap-2'>
              <Switch mainPage={mainPage} toggleMainPage={toggleMainPage} />
              <img className="w-7" src={message} alt="Message" />
            </div>
          </div>

          <div className='flex flex-col justify-center items-center h-[345px] gap-2'>
            <Avatar alt="Avatar" src={avatar} sx={{
              width: '120px', height: '120px',
            }} />
            <div className="w-full flex flex-col gap-2 items-center">
              <span className={'text-xl text-white font-bold'}>Vadash</span>
              <span className='text-base text-light-gray mb-1'>Media Company created in 2015</span>

              <Chip icon={<MilitaryTechRoundedIcon sx={{ color: '#FFB053' }} />} label="Advanced" sx={{ color: '#fff', backgroundColor: '#484D56' }} />

              <div className="w-3/5 flex justify-between items-center mt-1">
                <div className="flex flex-col items-center justify-start">
                  <span className="text-xl font-bold text-white ">
                    1051
                  </span>
                  <span className="text-xs text-light-gray">
                    <StarRateRoundedIcon sx={{ color: '#FFC24C', fontSize: 14 }} />
                    <StarRateRoundedIcon sx={{ color: '#FFC24C', fontSize: 14 }} />
                    <StarRateRoundedIcon sx={{ color: '#FFC24C', fontSize: 14 }} />
                    <StarRateRoundedIcon sx={{ color: '#FFC24C', fontSize: 14 }} />
                    <StarRateRoundedIcon sx={{ color: '#FFC24C', fontSize: 14 }} />
                  </span>
                </div>
                <div className="flex flex-col items-center justify-start">
                  <span className="text-xl font-bold text-white ">
                    319
                  </span>
                  <span className="text-xs text-light-gray">
                    Reviews
                  </span>
                </div>
                <div className="flex flex-col items-center justify-start">
                  <span className="text-xl font-bold text-white ">
                    19
                  </span>
                  <span className="text-xs text-light-gray">
                    Return
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col bg-[#26292E] flex-1 rounded-t-[35px] px-8'>
            <List className='w-full'>
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <KeyboardArrowRightRoundedIcon sx={{ color: '#BCBCBC', fontSize: 32 }} />
                  </IconButton>
                }
                sx={{ paddingY: '19px' }}
              >
                <ListItemAvatar>
                  <LeaderboardRoundedIcon sx={{ color: 'white', fontSize: 44, backgroundColor: '#484D56', borderRadius: '10px', padding: '10px' }} />
                </ListItemAvatar>
                <ListItemText
                  primary="My Statistics"
                  className={'text-[#BCBCBC]'}
                />
              </ListItem>
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <KeyboardArrowRightRoundedIcon sx={{ color: '#BCBCBC', fontSize: 32 }} />
                  </IconButton>
                }
                sx={{ paddingY: '19px' }}
              >
                <ListItemAvatar>
                  <EmailRoundedIcon sx={{ color: 'white', fontSize: 44, backgroundColor: '#484D56', borderRadius: '10px', padding: '10px' }} />
                </ListItemAvatar>
                <ListItemText
                  primary="Email Address"
                  className={'text-[#BCBCBC]'}
                />
              </ListItem>
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <KeyboardArrowRightRoundedIcon sx={{ color: '#BCBCBC', fontSize: 32 }} />
                  </IconButton>
                }
                sx={{ paddingY: '19px' }}
              >
                <ListItemAvatar>
                  <LocationOnRoundedIcon sx={{ color: 'white', fontSize: 44, backgroundColor: '#484D56', borderRadius: '10px', padding: '10px' }} />
                </ListItemAvatar>
                <ListItemText
                  primary="Full Address"
                  className={'text-[#BCBCBC]'}
                />
              </ListItem>
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <KeyboardArrowRightRoundedIcon sx={{ color: '#BCBCBC', fontSize: 32 }} />
                  </IconButton>
                }
                sx={{ paddingY: '19px' }}
                
              >
                <ListItemAvatar>
                  <AccountBalanceWalletRoundedIcon sx={{ color: 'white', fontSize: 44, backgroundColor: '#484D56', borderRadius: '10px', padding: '10px' }} />
                </ListItemAvatar>
                <ListItemText
                  primary="Bank Account"
                  className={'text-[#BCBCBC]'}
                />
              </ListItem>
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <KeyboardArrowRightRoundedIcon sx={{ color: '#BCBCBC', fontSize: 32 }} />
                  </IconButton>
                }
                sx={{ paddingY: '19px' }}
              >
                <ListItemAvatar>
                  <HelpRoundedIcon sx={{ color: 'white', fontSize: 44, backgroundColor: '#484D56', borderRadius: '10px', padding: '10px' }} />
                </ListItemAvatar>
                <ListItemText
                  primary="Help"
                  className={'text-[#BCBCBC]'}
                />
              </ListItem>
            </List>

          </div>

        </>
      )}
      {!isRegistered && (
        <div className="pb-24">
        <div className="flex justify-between align-middle items-center p-4">
        <img className="w-36" src={logo} alt="Last Mile" />
        <div className='flex items-center gap-2'>
          <Switch mainPage={mainPage} toggleMainPage={toggleMainPage} />
          <img className="w-7" src={message} alt="Message" />
        </div>
      </div>

      <div className="flex flex-col items-start px-6 gap-2">
        <span className='text-white text-2xl font-bold mb-1'>Sender Register</span>
        <span className='text-white text-base font-bold mb-3'>Character</span>

        <div className="flex w-full justify-between mb-6 gap-2">
          <button className={`flex flex-col w-44 h-[85px] items-center justify-center rounded-[15px] relative ${select === 'person' ? 'bg-green text-black' : 'text-white hover:bg-green hover:text-black'
            } border border-white`} onClick={() => handleSelect('person')}>
            <PersonRoundedIcon style={{ fontSize: "2.5rem" }} />
            <span className='text-center text-sm mt-1 font-medium'>Personal Store</span>
          </button>
          <button className={`flex flex-col w-44 h-[85px] items-center justify-center rounded-[15px] relative ${select === 'company' ? 'bg-green text-black' : 'text-white hover:bg-green hover:text-black'
            } border border-white`} onClick={() => handleSelect('company')}>
            <BusinessRoundedIcon style={{ fontSize: "2.5rem" }} />
            <span className='text-center text-sm mt-1 font-medium'>Company</span>
          </button>
        </div>
      </div>
      <div className="px-6">
        <Divider sx={{ border: 0.1, borderColor: '#737373', borderRadius: '24px' }} />
      </div>

      <div className="flex flex-col items-start p-6 gap-2 relative">
        <span className='text-white text-base font-bold mb-3'>Basic Details</span>
        <div className="absolute top-6 right-8 flex flex-col justify-center items-center gap-2">
          <div className="w-[70px] h-[70px] border border-white rounded-full bg-[#4B4B4B]/50 flex justify-center items-center">
            <CameraAltOutlinedIcon className='text-white' style={{ fontSize: "1.6rem" }} />
          </div>
          <span className="text-white text-sm">Logo Upload</span>
        </div>
        <ThemeProvider theme={customTheme(outerTheme)}>
          <div className="flex flex-col gap-6 w-full">
            <TextField label="Company Name" variant="standard" focused sx={{
              '&.MuiTextField-root': {
                width: '70%'
              },
            }} />
            <TextField label="Email Address" variant="standard" focused sx={{
              '&.MuiTextField-root': {
                width: '100%'
              },
            }} />
            <TextField label="Full Address" variant="standard" focused sx={{
              '&.MuiTextField-root': {
                width: '100%'
              },
            }} />
            <div className='w-full min-h-20 rounded-2xl border border-light-gray hover:border-green relative'>
              <div style={containerStyle}>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <span className='text-white text-base font-bold'>Bank Accont</span>
              <Box sx={{ width: 120 }}>
                <FormControl fullWidth>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native" sx={{
                    '&.MuiInputLabel-root': {
                      color: '#A3A3A3',
                    },
                    '& .MuiInputBase-input': {
                      borderColor: '#A3A3A3',
                      '&:focus': {
                        borderColor: '#A3A3A3',
                      }
                    },
                  }}>
                    Bank Code
                  </InputLabel>
                  <NativeSelect
                    defaultValue={30}
                    inputProps={{
                      name: 'age',
                      id: 'uncontrolled-native',
                    }}
                    sx={{
                      color: '#A3A3A3',
                      '&.MuiInputLabel-root': {
                        color: '#A3A3A3',
                      },
                      '& .MuiInputBase-input': {
                        borderColor: '#A3A3A3',
                        '&:focus': {
                          borderColor: '#A3A3A3',
                        }
                      },
                    }}
                  >
                    <option value={10}>001</option>
                    <option value={20}>002</option>
                    <option value={30}>003</option>
                  </NativeSelect>
                </FormControl>
              </Box>
            </div>

          </div>
        </ThemeProvider>
      </div>
      <div className="px-6">
        <Divider sx={{ border: 0.1, borderColor: '#737373', borderRadius: '24px' }} />
      </div>
      <div className="flex justify-center mt-6">
        <button className="w-[253px] text-green text-xl font-bold py-2 rounded-[20px] border border-green bg-transparent hover:bg-green hover:text-black" onClick={handleRegister}>
          Register
        </button>
      </div>
      </div>
      )}      

    </div>
  );
}