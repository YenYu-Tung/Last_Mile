import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import clsx from 'clsx';

import CircularProgress from "../components/LogoCircularProgress";
import lastmile from "/lastmile.svg";

export default function Animation() {
  const navigate = useNavigate();

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      navigate("/login");
    }, 4000);
    return () => clearTimeout(animationTimeout);
  }, [navigate]);

  return (
    <div className='bg-black w-full h-full flex items-center align-middle justify-center relative'>
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
      <div className="flex flex-col items-center text-center opacity-0 transition-opacity duration-1000 animation-fade-in-out z-20">
        <div className='text-center flex flex-col items-center z-20'>
          <img className="w-28 my-6" src="/pagesicon.svg" alt="Last Mile" />
          <img className="w-32" src={lastmile} alt="Last Mile" />
        </div>
        <div className='mt-16'><CircularProgress /></div>
      </div>
    </div>
  );
}