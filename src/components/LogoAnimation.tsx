import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import CircularProgress from "../components/LogoCircularProgress";
import lastmile from "/lastmile.svg";


const LogoAnimation = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      navigate("/login");
    }, 4000);
    return () => clearTimeout(animationTimeout);
  }, [navigate]);

  return (
    <div className='bg-dark flex items-center align-middle justify-center' style={{ height: '100vh' }}>
      <div className="flex flex-col items-center text-center opacity-0 transition-opacity duration-1000 animation-fade-in-out">
        <div className='fixed top-[30%] sm:top-[15%] text-center flex flex-col items-center'>
          <img className="w-48 h-48" src="/icon.svg" alt="Last Mile" />
          <img className="w-50" src={lastmile} alt="Last Mile" />
        </div>        
        <div className='fixed bottom-[15%]'><CircularProgress /></div>
      </div>
    </div>
  );
};

export default LogoAnimation;
