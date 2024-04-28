import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import box from "/box.gif";

import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';

type BoxProps = {
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function Box({ setValue }: BoxProps){
  
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/success');
  };
  const handleAsistant = () => {
    navigate('/ai-assistant');
    setValue('none');
  };

  useEffect(() => {
    setValue('none');
  }, [setValue]);

  return (
    <div className="bg-black" style={{ height: "100%" }}>
      <div className="flex flex-col justify-end items-center h-[70%]">
        <span className="text-white text-2xl font-bold mb-4">Your package is in the</span>
        <span className="text-green text-2xl font-bold flex justify-center items-center"><ArrowCircleUpRoundedIcon sx={{ color: '#32FF9D', fontSize: 30, marginRight: 1 }} />Upper Box</span>
        <img id="close_git" className="w-72 mt-12" src={box} alt="Package in upper box" />
      </div>      
      <div className="h-[30%] flex flex-col justify-start items-center p-12">
        <button className="text-green text-xl font-bold py-3 rounded-[18px] border border-green bg-transparent hover:bg-gradient-to-r from-[#7CFFC0] via-[#32FF9D] to-[#00ff85] hover:text-black w-3/4" onClick={handleNavigate}>
          Continue
        </button>
        <button onClick={handleAsistant} className='mt-4'><span className="text-white text-base font-semibold hover:underline focus:underline">Help?</span></button>        
      </div>
    </div>
  );
}