import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";

import QrReader from "../components/Scanner";
import ProgressBar from "../components/ScanProgressBar";

import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import IconButton from '@mui/material/IconButton';
import successicon from "/successicon.svg";

type ScanProps = {
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export default function Scan({ setValue }: ScanProps) {
  const [start, setStart] = useState(false);
  const [data, setData] = useState("");
  const [progress, setProgress] = useState(10);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/home');
    setValue('home');
  };

  useEffect(() => {
    if (data) {
      setStart(true);
    }
    if (data && progress === 100) {
      const timerId = setTimeout(() => {
        navigate('/box');
        setValue('none');
      }, 280);
      return () => clearTimeout(timerId);
    }
  }, [data, progress, navigate, setValue]);

  useEffect(() => {
    setValue('none');
  }, [setValue]);

  return (
    <div className='w-full h-full'>

      <div className='w-full h-full bg-black/65 fixed top-0 left-0 z-20'></div>

      <QrReader setData={setData} />
      <div className='relative z-20'>

        <div className="fixed right-5 left-5 flex flex-col h-3/4 py-4">
          <IconButton aria-label="back" onClick={handleBack} sx={{ justifyContent: 'start' }}>
            <ChevronLeftRoundedIcon className='text-white' style={{ fontSize: "3.5rem" }} />
          </IconButton>

          <div className="w-80 h-80 border-[6px] border-white/70 border-dashed rounded-3xl m-auto flex justify-center relative">
            <div className='absolute w-full h-full bg-white/15'></div>
            {(start && progress === 100) && <div className="w-full flex justify-center"><img className="w-28" src={successicon} alt="Success" /></div>}
          </div>
          <div className="flex flex-col justify-start items-center h-1/4">
            <span className="text-green text-xl font-bold">Receive with QRcode</span>
            <span className="text-white text-lg font-medium mt-2 w-[290px] text-center">Please put the receive QR code in front of the camera to scan</span>
          </div>
        </div>

        <div className="fixed bottom-4 flex flex-col right-15 left-15 h-1/5 w-full items-center">
          {start && <ProgressBar progress={progress} setProgress={setProgress} />}
          <span className="text-green text-base font-semibold mt-4 w-full text-center">
            {progress === 100 ? "Done" : "Scanning..."}
          </span>
        </div>
      </div>
    </div>
  );
}
