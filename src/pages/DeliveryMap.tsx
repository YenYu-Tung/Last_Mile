import { useState, useEffect } from "react";

import walk1 from "/walk1.svg";
import walk2 from "/walk2.svg";
import walk3 from "/walk3.svg";
import walk4 from "/walk4.svg";
import people from "/people.svg";

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

export default function DeliveryMap({ setValue }: DeliveryMapProps) {

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/home');
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
    height: '36%',
    position: 'fixed',
    top: '48%',
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
          <img className="absolute top-[15rem] left-[14rem] move-left" src={people} alt="people Image" />
        </div>
        <div className="flex w-full" style={bottomDivStyle} >
          <div className="w-[85%] sm:w-[50%] mx-auto h-full">
            <div className="w-[85%] sm:w-1/2 flex h-1/6 sm:h-[25%] justify-center z-10 absolute">
              <div className="bg-exdark text-white text-lg w-1/2 rounded-tl-xl rounded-tr-2xl flex justify-center items-center border-[1.5px] border-flash no-bottom-border">
                WALK MODE
              </div>
              <div className="w-1/2 m-auto flex items-center align-middle justify-center">
                <button className="bg-green rounded-full w-10/12 py-2" onClick={handleQrcode}>
                  <QrCodeScannerRoundedIcon className='text-exdark mr-2' style={{ fontSize: "1.5rem" }} />
                  <span className="font-bold">SCAN</span>
                </button>
              </div>
            </div>
            <div className="bg-exdark flex flex-col w-full h-5/6 sm:h-[80%] rounded-r-xl rounded-bl-xl border-[1.5px] border-flash relative top-[16%] sm:top-[24%] overflow-y-auto">
              <div className="flex justify-start m-4">
                <CircularProgress />

                <div className="flex flex-col items-start justify-center ml-3">
                  <span className="text-white text-lg">#CAR-985</span>
                  <span className="text-gray">24 Jan, 2024</span>
                </div>
              </div>
              <Divider variant="middle" sx={{ border: 1, borderColor: '#898989', borderRadius: '24px' }} />
              <div className="flex flex-col sm:flex-row justify-start mt-2 mx-4 items-start h-full pb-2">
                <div className="flex items-center h-1/4">
                  <span className="text-white text-lg ml-2 sm:mt-8">Walk Directions</span>
                </div>
                <div className="flex w-full min-h-[50%]  items-center sm:ml-4">
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
