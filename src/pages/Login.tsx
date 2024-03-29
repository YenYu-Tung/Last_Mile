
import Avatar from '@mui/material/Avatar';

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';


import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import FormControl from '@mui/material/FormControl';
// import { OutlinedInputProps } from '@mui/material/OutlinedInput';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';


type SetValueProps = {
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    borderRadius: 12,
    backgroundColor: theme.palette.mode === 'light' ? 'transparent' : '#1A2027',
    fontSize: 16,
    width: '100%',
    padding: '8px 12px',
    margin: '6px 8px',
    color: '#B8B8B8',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:focus': {
      boxShadow: `${alpha('#898989', 0.25)} 0 0 0 0.2rem`,
      borderColor: '#898989',
    },
  },
}));

export default function Login({ setValue }: SetValueProps): JSX.Element {

  const navigate = useNavigate();

  const [showArrow, setShowArrow] = useState(false);

  const handleSignup = () => {
    navigate('/signup');
    setValue('none');
  };

  const handleLogin = () => {
    navigate('/home');
    setValue('home');
  };

  return (
    <div className="bg-dark w-full h-screen">
      <button className='text-light-gray  absolute top-10 right-10 text-lg font-semibold' onClick={handleSignup}>
        Sign Up
      </button>

      <div className='flex flex-col w-11/12 justify-center align-middle h-[33%] sm:h-[20%] m-auto'>
        <div className="w-full h-full flex flex-col sm:flex-row justify-end sm:justify-center align-middle items-center">
          <img className="w-[150px] h-[150px] sm:w-28 sm:h-28" src="/icon.svg" alt="Last Mile" />
          <span className='text-white text-3xl font-semibold text-center w-full xs:w-1/2'>
            Welcome Back
          </span>
        </div>
      </div>

      <div className='flex flex-col m-auto w-3/4 sm:w-1/2 justify-center align-middle h-[28%] sm:h-[33%] gap-8 sm:gap-4'>
        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#3E4349', borderRadius: '15px', padding: '3px' }}>
          <div className='flex h-full justify-center items-center'>
            <span className='text-exlight-gray text-base text-center mr-1'>
              +886
              <ArrowDropDownRoundedIcon sx={{ margin: 'auto', color: '#898989' }} />
            </span>
            <Divider orientation="vertical" variant="middle" flexItem
              sx={{ border: 1, borderColor: '#898989', borderRadius: '24px' }} />
          </div>
         
          <FormControl variant="standard" sx={{ display: 'flex', width: '70%', justifyContent: 'center' }}>
            <BootstrapInput placeholder='Phone number' id="bootstrap-input" />
          </FormControl>
        </Box>
        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#3E4349', borderRadius: '15px', padding: '3px 0px' }}>
          <FormControl variant="standard" sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
            <BootstrapInput placeholder='Password' id="bootstrap-input" />
          </FormControl>
        </Box>
      </div>

      <div className='flex flex-col w-11/12 justify-center align-middle m-auto'>
        <div className="w-full h-full flex flex-col">
          <div className="flex flex-col justify-center items-center mb-4 xs:mb-10 sm:mb-4">
            <button className="bg-transparent rounded-full w-[220px] py-2.5 text-white border border-white hover:bg-green hover:border-0 hover:text-black" onClick={() =>{
              setShowArrow(true);
              handleLogin();
            }} onMouseEnter={() => setShowArrow(true)} onMouseLeave={() => setShowArrow(false)}>
              <span className="font-bold">Log In</span>
              {showArrow && <ArrowRightAltRoundedIcon sx={{ position: 'static', right: '10px' }} />}
            </button>
            <span className='text-light-gray text-base text-center mt-4'>
              Forgot Password?
            </span>
          </div>
          <div className='w-2/3 m-auto'>
            <Divider variant="middle" sx={{
              color: 'white', '&.MuiDivider-root::before, &.MuiDivider-root::after': {
                borderTop: '1px solid #898989',
              }
            }} >or</Divider>
          </div>
          
          <div className="flex m-auto gap-6 mt-4">
            <Avatar sx={{ border: '0.5px solid white', bgcolor: 'transparent', width: 42, height: 42 }}>
              <AppleIcon />
            </Avatar>
            <Avatar sx={{ border: '0.5px solid white', bgcolor: 'transparent', width: 42, height: 42 }}>
              <GoogleIcon />
            </Avatar>
            <Avatar sx={{ border: '0.5px solid white', bgcolor: 'transparent', width: 42, height: 42 }}>
              <FacebookRoundedIcon />
            </Avatar>

          </div>
        </div>
      </div>
    </div>
  );
}