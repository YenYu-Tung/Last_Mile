import { useNavigate } from 'react-router-dom';

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
  position: 'fixed',
  top: '8.9%',
  left: 0,
  width: '100%',
  height: '91%',
  backgroundBlendMode: 'hard-light',
} as const;

export default function AboutUs({ setValue }: AboutProps) {

  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/profile');
    setValue('profile');
  };

  return (
    <div className='h-screen'>
      <div className='w-full flex items-center px-2 h-[9%] bg-exdark fixed'>
        <IconButton aria-label="back" onClick={handleBack}>
          <ChevronLeftRoundedIcon className='text-white mt-2' style={{ fontSize: "2.5rem" }} />
        </IconButton>
        <div className='flex flex-col text-white'>
          <span className='text-xl sm:text-sm'>Lastmile Global Web</span>
          <span className='text-xxs'>https://www.lastmile.global.com.tw</span>
        </div>
      </div>

      <div style={containerStyle}>

        <WebProgressBar />
        <div className="flex flex-col px-4">

          <div className='mt-2 sm:mt-4'>
            <AppBar />
          </div>

          <div className="flex flex-col items-start mt-8 px-2 sm:px-8">
            <span className="text-white text-5xl font-semibold mb-5">City Logistics Solution</span>
            <button className='border border-white rounded-full px-6 py-1 text-white text-xl font-semibold'>More</button>
          </div>
        </div>
      </div>
    </div>
  );
}