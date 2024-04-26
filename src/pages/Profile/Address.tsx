import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import LocationOnIcon from '@mui/icons-material/LocationOn';
// import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import Avatar from '@mui/material/Avatar';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LocalFloristRoundedIcon from '@mui/icons-material/LocalFloristRounded';
import LinkRoundedIcon from '@mui/icons-material/LinkRounded';
import NearMeRoundedIcon from '@mui/icons-material/NearMeRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';

import Box from '@mui/material/Box';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
// import InputLabel from '@mui/material/InputLabel';
// import TextField, { TextFieldProps } from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
// import { OutlinedInputProps } from '@mui/material/OutlinedInput';

import address from "/address.svg";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    borderRadius: 12,
    backgroundColor: theme.palette.mode === 'light' ? 'transparent' : '#1A2027',
    fontSize: 16,
    width: '100%',
    padding: '6px 12px',
    margin: '8px 0px',
    color: '#898989',
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
  borderRadius: '16px',
} as const;



type AddressProps = {
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function Address({ setValue }: AddressProps) {
  // const location = useLocation();
  // const prevUrl = location.state?.prevurl;

  const navigate = useNavigate();
  const handleNavigate = () => {
    // if(prevUrl === 'home'){
    //   navigate('/home');
    //   setValue('home');
    // }else{
    //   navigate('/profile');
    //   setValue('profile');
    // }   
    navigate('/profile');
    setValue('profile');
  };

  const [hoveredDiv, setHoveredDiv] = useState<number | null>(null);
 

  return (
    <div className="bg-dark w-full min-h-screen">
      <div className='flex flex-col m-auto w-11/12 pt-6'>
        <div className="flex justify-center items-center">
          <span className='absolute top-6.5 left-4'>
            <button onClick={handleNavigate}>
              <ChevronLeftRoundedIcon sx={{ color: 'white', fontSize: 42 }} />
            </button>
          </span>
          <span className='text-white text-2xl font-semibold'>Address Setting</span>          
        </div>
      </div>

      <div className="flex flex-col gap-3 items-start px-6 py-3 w-full mt-4">
        <span className='text-lg text-white'>Current Address</span>
        
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className='flex w-full h-[100px] rounded-2xl border border-light-gray hover:border-green text-white hover:text-green' onMouseEnter={() => setHoveredDiv(0)}
            onMouseLeave={() => setHoveredDiv(null)}>
            <div className='w-[22%] m-auto'>
              {/* avatar  */}
              <Avatar sx={{ bgcolor: 'rgba(50, 53, 58, 0.9)', margin: 'auto', width: 44, height: 44  }}>
                <HomeRoundedIcon sx={{ fontSize: 30, color: hoveredDiv === 0 ? '#32FF9D' : 'white', }}/>
              </Avatar>
            </div>
            <div className='flex flex-col w-[67%] justify-center'>
              <span className='text-green text-xl'>Home</span>
              <span className='text-white text-xxs flex items-center'><LinkRoundedIcon sx={{ color: '#32FF9D', fontSize: 14, marginRight: '4px' }} />#1 / NO.6 FIRST PARCEL LOCKER</span>
              <span className='text-light-gray text-[9px] mt-1'>No. 122, Sec. 1, Chongqing S. Rd., Zhongzheng District</span>
            </div>
            <div className='w-[11%] m-auto'>
              <NavigateNextRoundedIcon sx={{ color: hoveredDiv === 0 ? '#32FF9D' : 'white', fontSize: 36 }} />
            </div>            
          </div>
          {/* another div  */}
          <div className='flex w-full h-[100px] rounded-2xl border border-light-gray hover:border-green text-white hover:text-green' onMouseEnter={() => setHoveredDiv(1)}
            onMouseLeave={() => setHoveredDiv(null)}>
            <div className='w-[22%] m-auto'>
              {/* avatar  */}
              <Avatar sx={{ bgcolor: 'rgba(50, 53, 58, 0.9)', margin: 'auto', width: 44, height: 44 }}>
                <LocalFloristRoundedIcon sx={{ fontSize: 30, color: hoveredDiv === 1 ? '#32FF9D' : 'white', }} />
              </Avatar>
            </div>
            <div className='flex flex-col w-[67%] justify-center'>
              <span className='text-green text-xl'>Garden</span>
              <span className='text-white text-xxs flex items-center'><LinkRoundedIcon sx={{ color: '#32FF9D', fontSize: 14, marginRight: '4px' }} />#1 / NO.6 FIRST PARCEL LOCKER</span>
              <span className='text-light-gray text-[9px] mt-1'>No. 122, Sec. 1, Chongqing S. Rd., Zhongzheng District</span>
            </div>
            <div className='w-[11%] m-auto'>
              <NavigateNextRoundedIcon sx={{ color: hoveredDiv === 1 ? '#32FF9D' : 'white', fontSize: 36 }} />
            </div>
          </div>
          {/* end  */}
        </div>
      </div>
      

      <div className="flex flex-col gap-4 items-start px-6 pb-3 w-full mt-2">
        <span className='text-lg text-white'>Add New Address</span>

        <div className="w-full flex flex-col gap-6">
          
          {/* another div  */}
          <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-around', alignItems: 'center', border: '1px solid #898989', borderRadius: '1rem' }}>
            <LocationOnIcon sx={{ color: '#898989', fontSize: 28 }} />
            <FormControl variant="standard" sx={{ display: 'flex', width: '80%', justifyContent: 'center' }}>
              <BootstrapInput defaultValue="Search location" id="bootstrap-input" />
            </FormControl>
          </Box>

          <div className='w-full min-h-56 rounded-2xl border border-light-gray hover:border-green relative'>
            <div style={containerStyle}>
            </div>
          </div>

          <div className='flex w-full min-h-20 rounded-2xl border border-light-gray hover:border-green'>
            <div className='w-[25%] m-auto'>
              {/* avatar  */}
              <Avatar sx={{ bgcolor: '#FF862E', margin: 'auto', width: 44, height: 44 }}>
                <NearMeRoundedIcon sx={{ fontSize: 30 }} />
              </Avatar>

            </div>
            <div className='flex flex-col w-[75%] justify-center'>
              <span className='text-white text-lg'>Use my current location</span>
              <span className='text-light-gray text-xxs'>No. 123, Section 3, Daxue Road, Douliu City, Yunlin County 64002</span>
            </div>
          </div>
          {/* end  */}

        </div>
      </div>
      <div className="px-6 w-full mt-4 pb-4">
        <button className='w-full text-black font-bold rounded-2xl h-14 bg-green'>
          Add Address
        </button>
      </div>   

    </div>
  );
}