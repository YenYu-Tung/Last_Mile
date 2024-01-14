import { useState, useEffect } from "react";

import walk1 from "../assets/walk1.svg";
import walk2 from "../assets/walk2.svg";
import walk3 from "../assets/walk3.svg";
import walk4 from "../assets/walk4.svg";
import people from "../assets/people.svg";

import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import Divider from '@mui/material/Divider';
import QrCodeScannerRoundedIcon from '@mui/icons-material/QrCodeScannerRounded'; 
// import IconButton from '@mui/material/IconButton';
// import NearMeRoundedIcon from '@mui/icons-material/NearMeRounded';

import Chip from '@mui/material/Chip';

import { useNavigate } from 'react-router-dom';
import CircularProgress from "../components/CircularProgressFixed";
import Stepper from "../components/Stepper";

type DeliveryMapProps = {
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function Delivery({ setValue }: DeliveryMapProps) {
  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/') setValue('home');
    else if (path === '/delivery') setValue('delivery');
    else if (path === '/deliverymap') setValue('delivery');
    else if (path === '/locker') setValue('locker');
    else if (path === '/profile') setValue('profile');
    else setValue('none');
  }, [setValue]);
  
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/');
    setValue('home');
  };
  const handleQrcode = () => {
    navigate('/scan');
    setValue('none');
  };

  const [activeStep, setActiveStep] = useState(0);

  const containerStyle = {
    backgroundImage: activeStep === 0
      ? `url(${walk1})`
      : activeStep === 1
        ? `url(${walk2})`
      : activeStep === 2
          ? `url(${walk3})`
        : `url(${walk4})`,
    // backgroundImage: `url(${walk0})`,
    backgroundColor: 'rgba(0, 0, 0, 1)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'cover',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundBlendMode: 'hard-light',
  } as const;
  const bottomDivStyle = {
    height: '40%', 
    position: 'fixed',
    top: '42%',
  } as const;

  useEffect(() => {
    const timer = setInterval(() => {
      if (activeStep <= 2) {
        setActiveStep((prevStep) => prevStep + 1);
        if (activeStep >= 2) {
          setActiveStep(3);
        }
      }
    }, 1700);
    return () => {
      clearInterval(timer);
    };
  }, [activeStep]);

  return (
    <div >
      <div style={containerStyle}>
        <div className="mt-6 ml-6">
          <button className="bg-gray rounded-full" onClick={handleNavigate}>
            <ChevronLeftRoundedIcon sx={{ color: 'white', fontSize: 40 }} />
          </button>
          <Chip label={
            <div className='flex align-middle items-center'>
              {activeStep === 0 ? '1 min' : activeStep === 1 ? '30 sec' : activeStep === 2 ? '10 sec' : '0 sec'}
            </div>
          } variant="outlined" sx={{ color: 'white', border: 2, borderColor: '#32FF9D', bgcolor: '#323232' }} className="absolute top-[6rem] left-[9rem]" />
          <img className="absolute top-[13rem] left-[12.7rem] move-left" src={people} alt="people Image"/>
        </div>
        <div className="flex w-full" style={bottomDivStyle} >
          <div className="w-[85%] sm:w-[50%] mx-auto h-full">
            <div className="w-[80%] sm:w-[40%] flex h-1/6 justify-center z-10 absolute">
              <div className="bg-exdark text-white text-lg w-1/2 rounded-tl-xl rounded-tr-2xl flex justify-center items-center mt-1 border-[1.5px] border-flash no-bottom-border">
                WALK MODE
              </div>
              <div className="w-1/2 m-auto flex items-center align-middle justify-center">
                <button className="bg-green rounded-full w-10/12 py-1.5" onClick={handleQrcode}>
                  <QrCodeScannerRoundedIcon className='text-exdark mr-2' style={{ fontSize: "1.5rem" }} />                
                  <span className="font-bold">SCAN</span>
                </button>
              </div>
            </div>
            <div className="bg-exdark flex flex-col w-full h-5/6 rounded-r-xl rounded-bl-xl border-[1.5px] border-flash relative top-[16.2%]">
              <div className="flex justify-start m-4">
                <CircularProgress />

                <div className="flex flex-col items-start justify-center ml-3">
                  <span className="text-white text-lg">#082-WSDF9128</span>
                  <span className="text-gray">24 Jan, 2024</span>
                </div>
              </div>
              <Divider variant="middle" sx={{ border: 1, borderColor: '#898989', borderRadius: '24px' }} />
              <div className="flex flex-col sm:flex-row justify-start mt-2 mx-4 items-start h-full">
                <div className="flex items-center h-1/4">
                  <span className="text-white text-lg ml-2 sm:mt-8">Walk Directions</span>
                </div>
                <div className="flex w-full min-h-[50%] truncate ... items-center sm:ml-4">
                  <Stepper />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>    
  );
}
