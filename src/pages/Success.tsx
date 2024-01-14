import { useNavigate } from 'react-router-dom';

import success from "/success.svg";

type SuccessProps = {
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function Success({ setValue }: SuccessProps){
  
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/');
    setValue('home');
  };
  const handleAsistant = () => {
    navigate('/ai-assistant');
    setValue('none');
  };

  return (
    <div className="bg-dark" style={{ height: "100vh" }}>
      <div className="text-green text-3xl font-bold h-1/3 flex justify-center items-end pb-20">
        Successfully !
      </div>
      <div className="flex flex-col items-center h-1/3">
        <img className="w-24 sm:w-40" src={success} alt="Success" />
        <span className="text-white text-xl font-bold mt-12">Please take package out</span>
        <span className="text-light-gray text-md font-semibold w-3/5 text-center mt-6">Make sure the locker has closed before you leave</span>        
      </div>      
      <div className="h-1/3 flex flex-col justify-center items-center">
        <button className="text-black text-xl font-bold py-5 rounded-[18px] bg-gradient-to-r from-[#7CFFC0] via-[#32FF9D] to-[#00ff85] w-3/4" onClick={handleNavigate}>
          Continue
        </button>
        <button onClick={handleAsistant} className='mt-4'><span className="text-white text-base font-semibold hover:underline focus:underline">Help?</span></button>        
      </div>
    </div>
  );
}