import clsx from 'clsx';

import Avatar from '@mui/material/Avatar';

import { useNavigate } from "react-router-dom";
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';


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

export default function Signup({ setValue }: SetValueProps): JSX.Element {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
    setValue('none');
  };

  const handleSignup = () => {
    navigate('/home');
    setValue('home');
  };

  return (
    <div className="bg-black w-full h-full relative">
      <div className="absolute w-full h-full overflow-hidden">
        <div className={clsx(
          'absolute h-[380px] w-[450px] left-[-120px] top-[-150px] rounded-full z-10',
          'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]',
          'from-[#32FF9D]/20 from-0% to-black to-80%'
        )} />
        <div className={clsx(
          'absolute h-[380px] w-[440px] right-[-140px] bottom-[-150px] rounded-full z-10',
          'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]',
          'from-[#32FF9D]/20 from-0% to-black to-80%'
        )} />
      </div>


      <button className='text-light-gray  absolute text-lg font-semibold z-20 top-10 right-10' onClick={handleLogin}>
        Log In
      </button>

      <div className='flex flex-col w-11/12 justify-center align-middle h-[35%] m-auto'>
        <div className="w-full h-full flex flex-col justify-end align-middle items-center">
          <img className="w-[108px] my-6 z-20" src="/pagesicon.svg" alt="Last Mile" />
          <span className='text-white text-3xl font-semibold text-center w-[75%] z-20'>
            Create Your Account
          </span>
        </div>
      </div>

      <div className='flex flex-col m-auto w-3/4 justify-center align-middle h-[35%] gap-6'>
        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#2C2F33', borderRadius: '15px', padding: '3px', zIndex: 20 }}>
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
        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#2C2F33', borderRadius: '15px', padding: '3px 0px', zIndex: 20 }}>
          <FormControl variant="standard" sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
            <BootstrapInput placeholder='User Name' id="bootstrap-input" />
          </FormControl>
        </Box>
        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#2C2F33', borderRadius: '15px', padding: '3px 0px', zIndex: 20 }}>
          <FormControl variant="standard" sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
            <BootstrapInput placeholder='Password' id="bootstrap-input" />
          </FormControl>
        </Box>
      </div>

      <div className='flex flex-col w-11/12 justify-center align-middle m-auto'>
        <div className="w-full h-full flex flex-col">
          <div className="flex flex-col justify-center items-center xs:mb-8 mb-10">
            <button className="bg-transparent rounded-full w-[220px] py-2.5 text-white border border-white hover:bg-green hover:border-0 hover:text-black z-20" onClick={handleSignup}>
              <span className="font-bold">Sign Up</span>
            </button>
          </div>
          <div className='w-2/3 m-auto z-20'>
            <Divider variant="middle" sx={{
              color: 'white', '&.MuiDivider-root::before, &.MuiDivider-root::after': {
                borderTop: '1px solid #898989',
              }
            }} >or</Divider>
          </div>

          <div className="flex m-auto gap-6 mt-4 z-20">
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