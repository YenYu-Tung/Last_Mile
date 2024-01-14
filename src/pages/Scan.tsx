import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";

import QrReader from "../components/Scanner";
import ProgressBar from "../components/ScanProgressBar";

import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import IconButton from '@mui/material/IconButton';

import BGimg from "../assets/Car.svg";
import success from "../assets/successIcon.svg";

type ScanProps = {
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
const containerStyle = {
  backgroundImage: `url(${BGimg})`,
  backgroundColor: 'rgba(20, 21, 22, 0.9)',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundBlendMode: 'multiply',
} as const;

export default function Scan({ setValue }: ScanProps) {

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/') setValue('home');
    else if (path === '/delivery') setValue('delivery');
    else if (path === '/deliverymap') setValue('delivery');
    else if (path === '/locker') setValue('locker');
    else if (path === '/profile') setValue('profile');
    else setValue('none');
  }, [setValue]);

  const [start, setStart] = useState(false);
  const [data, setData] = useState("");
  const [progress, setProgress] = useState(10);

  const navigate = useNavigate();
  
  const handleBack = () => {
    navigate('/');
    setValue('home');
  };

  useEffect(() => {
    if(data){
      setStart(true);
    }
    if (data && progress === 100) {
      const timerId = setTimeout(() => {
        navigate('/success');
        setValue('none');
      }, 280);
      return () => clearTimeout(timerId);      
    }
  }, [data, progress, navigate, setValue]);


  return (
    <div style={containerStyle}>
      {(start && progress === 100) && <div className="absolute top-[26%] w-full flex justify-center"><img className="w-28" src={success} alt="Success" /></div>}

      <div className="flex flex-col h-3/4 p-4">
        <IconButton aria-label="back" onClick={handleBack} sx={{ justifyContent: 'start' }}>
          <ChevronLeftRoundedIcon className='text-white' style={{ fontSize: "3.5rem" }} />
        </IconButton>
        

        <QrReader setData={setData}/>

        <div className="flex flex-col justify-start items-center h-1/4">
          <span className="text-green text-xl font-bold">Receive with QRcode</span>
          <span className="text-white text-lg font-500 mt-2 w-3/4 text-center">Please put the receive qrcode in front of the camera to scan</span>
        </div>
      </div>
      
      <div className="flex flex-col justify-center items-center h-1/5">
        {start && <ProgressBar progress={progress} setProgress={setProgress} /> }
        
        <span className="text-green text-base font-semibold mt-4">         
          {progress === 100 ? "Done" : " Scanning..."}
        </span>
      </div>
    </div>
  );
}