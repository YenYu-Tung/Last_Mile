import { useNavigate } from 'react-router-dom';

import speechbubble from "/SpeechBubble.svg";
import close from "/closeDoor.gif";

type SuccessProps = {
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function Success({ setValue }: SuccessProps) {

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/home');
    setValue('home');
  };

  return (
    <div className="bg-black" style={{ height: "100vh" }}>
      <div className="flex flex-col justify-end items-center h-[75%] lg:h-[65%]">
        <span className="text-green text-5xl font-bold mb-4">Success!</span>

        {/* <div className="relative p-4 mx-auto mt-10 max-w-xs rounded-lg text-white border border-solid border-white text-center">
          <span className="w-0 h-0 absolute bottom-[-30px] right-[50px] border-t-1 border-solid border-white"></span>
          <span className="w-0 h-0 absolute bottom-[-29px] right-[50px] border-t-1 border-solid border-white"></span>
          Make sure the locker has closed before you leave
        </div> */}
        <div className="relative mt-8">
          <img src={speechbubble} alt="Make sure the locker has closed before you leave" className="h-auto" />
          <p className="text-base w-52 top-2 left-8 absolute text-white font-bold">Make sure the locker has closed before you leave</p>
        </div>
        <img className="w-72 mt-3" src={close} alt="Close the door" />
      </div>
      <div className="h-[25%] lg:h-[35%] flex flex-col justify-start items-center p-12">
        <button className="text-green text-xl font-bold py-3 rounded-[18px] border border-green bg-transparent hover:bg-gradient-to-r from-[#7CFFC0] via-[#32FF9D] to-[#00ff85] hover:text-black w-3/4" onClick={handleNavigate}>
          Back to home
        </button>
        <button className='mt-4'><span className="text-green text-base font-semibold hover:underline focus:underline">Check Receipt</span></button>
      </div>
    </div>
  );
}