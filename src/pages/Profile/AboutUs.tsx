import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import IconButton from '@mui/material/IconButton';

import web from "/web.svg";

import AppBar from "../../components/AppBar";
import WebProgressBar from "../../components/WebProgressBar"

type AboutProps = {
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
const containerStyle = {
  background: `url(${web}), linear-gradient(to bottom, rgba(20, 21, 22, 1), transparent)`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'bottom',
  position: 'relative',
  top: '-0.5%',
  left: 0,
  width: '100%',
  height: '90.5%',
  backgroundBlendMode: 'hard-light',
} as const;

export default function AboutUs({ setValue }: AboutProps) {

  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/profile');
    setValue('profile');
  };

  useEffect(() => {
    setValue('none');
  }, [setValue]);

  return (
    <div className='w-full h-full'>
      <div className='w-full flex items-center h-[8%] bg-exdark'>
        <IconButton aria-label="back" onClick={handleBack}>
          <ChevronLeftRoundedIcon className='text-white mt-1' style={{ fontSize: "2.5rem" }} />
        </IconButton>
        <div className='flex flex-col text-white'>
          <span className='text-xl'>Lastmile Global Web</span>
          <span className='text-xxs'>https://www.lastmile.global.com.tw</span>
        </div>
      </div>

      <div style={containerStyle}>

        <WebProgressBar />
        <div className='pt-2'>
          <AppBar />
        </div>
        <div className="flex flex-col px-4">        
          <div className="flex flex-col items-start mt-8 px-2">
            <span className="text-white text-5xl font-semibold mb-5">City Logistics Solution</span>
            <button className='border border-white rounded-full px-6 py-1 text-white text-xl font-semibold'>More</button>
          </div>
        </div>
      </div>
    </div>
  );
}