import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';

import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';

import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';

import Box from '@mui/material/Box';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import FormControl from '@mui/material/FormControl';
// import { OutlinedInputProps } from '@mui/material/OutlinedInput';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

import roundlogo from "/roundlogo.svg";
import whitelogo from "/whitelogo.svg";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    borderRadius: 12,
    backgroundColor: theme.palette.mode === 'light' ? 'transparent' : '#1A2027',
    fontSize: 16,
    width: '100%',
    padding: '6px 12px',
    margin: '8px 0px 8px 8px',
    color: 'white',
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


type AssistantProps = {
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function Assistant({ setValue }: AssistantProps) {
  
 
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/home');
    setValue('home');
  };

  useEffect(() => {
    setValue('none');
  }, [setValue]);

  return (
    <div className="bg-dark w-full h-full relative" >
      <div className='flex flex-col mx-auto w-11/12 pt-6 mb-4'>
        <div className="flex justify-center items-center">
          <span className='absolute top-6.5 left-4'>
            <button onClick={handleNavigate}>
              <ChevronLeftRoundedIcon sx={{ color: 'white', fontSize: 42 }} />
            </button>
          </span>
          <span className='flex text-white text-2xl font-semibold'><img className="w-8 mr-2" src={roundlogo} alt="Last Mile" />AI Assistant
          </span>
          <span className='absolute top-6.8 right-4'>
            <button>
              <MoreVertRoundedIcon sx={{ color: 'white', fontSize: 32 }} />
            </button>
          </span>
        </div>
      </div>
      <Divider variant="middle" sx={{ border: 0.5, borderColor: 'white', borderRadius: '24px' }} />
      <div className='flex flex-col w-full justify-center items-center px-6'>
        <img className="w-32 mt-12" src={whitelogo} alt="Last Mile" />
        <div className='flex flex-col items-center mt-6 gap-4'>
          <span className='text-white text-3xl font-bold'>Hello, I’m LastAI</span>
          <span className='text-exlight-gray w-[80%] text-center'>Help you quickly deal with problems you encounter</span>
          <span className='text-exlight-gray border border-white px-9 py-1 rounded-full'>Your LastAI is online now</span>
        </div>
      </div>

      <div className="flex flex-col gap-3 px-5 w-full absolute bottom-8">
        <div className="w-full flex items-center">
          <img className="w-8 mr-2" src={roundlogo} alt="Last Mile" />
          <span className='flex text-white text-sm bg-zinc-700/90 px-4 py-2  rounded-lg'>Hi, I’m LastAI. How may I help you?
          </span>
        </div>
        <div className="w-full flex gap-2 overflow-x-auto py-2">
          <Chip label="Package Mistake" sx={{ backgroundColor: 'rgb(63 63 70 / 1)', color: 'white' }} />
          <Chip label="Cannot open my box" sx={{ backgroundColor: 'rgb(63 63 70 / 1)', color: 'white' }} />
          <Chip label="Goods late" sx={{ backgroundColor: 'rgb(63 63 70 / 1)', color: 'white' }} />
        </div>
        <div className="w-full flex justify-between">
          {/* another div  */}
          <Box sx={{ display: 'flex', width: '80%', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgb(113, 113, 122, 1)', borderRadius: '69px', padding: '3px' }}>
            <FormControl variant="standard" sx={{ display: 'flex', width: '85%', justifyContent: 'center' }}>
              <BootstrapInput placeholder="Type your questions..." id="bootstrap-input" />              
            </FormControl>
            <Avatar sx={{ bgcolor: 'rgb(63 63 70 / 0.3)', margin: 'auto', width: 42, height: 42 }}>
              <KeyboardVoiceOutlinedIcon sx={{ fontSize: 28 }} />
            </Avatar>
            
          </Box>
          <button ><Avatar sx={{ bgcolor: 'transparent', margin: 'auto', width: 53, height: 53, border: 2, borderColor: '#32FF9D' }}>
            <SendOutlinedIcon sx={{ fontSize: 29, color: '#32FF9D' }} />
          </Avatar></button>
          
        </div>
      </div>

    </div>
  );
}