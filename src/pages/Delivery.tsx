import { useState, useEffect } from "react";

import deliverybg from "/deliverybg.svg";

import escort from "/escort.svg";
import location from "/location.svg";
import store from "/store.svg";
import getitem from "/getitem.svg";
import santa from "/santa.svg";

import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import Divider from '@mui/material/Divider';
import QrCodeScannerRoundedIcon from '@mui/icons-material/QrCodeScannerRounded'; 
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

import Chip from '@mui/material/Chip';

import { useNavigate } from 'react-router-dom';

import MapLinearProgressBar from "../components/MapLinearProgressBar";
import CarLinearProgressBar from "../components/CarLinearProgressBar";

import MapModal from "../components/MapModal";

import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';


type DeliveryProps = {
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function Delivery({ setValue }: DeliveryProps) {
  const navigate = useNavigate();
  
  const handleNavigate = () => {
    navigate('/home');
    setValue('home');
  };
  const handleQrcode = () => {
    navigate('/scan');
    setValue('none');
  };

  const [expanded, setExpanded] = useState(true);
  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  const [carProgress, setCarProgress] = useState(0);
  const [mapProgress, setMapProgress] = useState(0);

  const containerStyle = {
    backgroundImage: `url(${deliverybg})`,
    backgroundColor: 'rgba(0, 0, 0, 1)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundBlendMode: 'hard-light'
  } as const;

  const [open, setOpen] = useState(false);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setOpen(true);
    }, 4800);
    return () => clearTimeout(timerId);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={containerStyle} className="flex justify-center">
      <div className="w-full mt-6 ml-6">
        <button className="bg-gray rounded-full" onClick={handleNavigate}> 
          <ChevronLeftRoundedIcon sx={{ color: 'white', fontSize: 40 }} />
        </button>  
        <Chip label={
          <div className='flex align-middle items-center'>
            3 min
          </div>
        } variant="outlined" sx={{ color: 'white', border: 2, borderColor: '#32FF9D', bgcolor: '#323232' }} className="absolute top-[3.5rem] left-[7.5rem]" />
        <div className="w-16 h-16 bg-green/20 fixed top-[14.2%] left-[8.4rem] rounded-full flex justify-center items-center animate-pulse">             
        </div>
        <div className="w-8 h-8 flex justify-center items-center bg-green rounded-full fixed top-[16%] left-[9.5rem]">
          <SendRoundedIcon sx={{ color: 'white', fontSize: 19, transform: 'rotate(60deg)' }} />
        </div>
      </div>

      <div className={`fixed bottom-[18%] w-[354px] bg-black rounded-t-[50px] rounded-b-[40px]`}>  
        <button
          onClick={toggleAccordion}
            className={`flex justify-between items-center w-full p-4 rounded-t-[50px]  bg-black ${expanded ? 'h-[75px]' : 'h-[45px]'}`}
        >
          {expanded ? 
            <div className="flex w-full items-center">
              <div className="w-[30%]">
                <p className='text-xxs text-white'>Distance Left</p>
                <p className='text-3xl text-exlight-gray'>
                  {200 - (Math.floor(carProgress * 1.5)) } 
                  <span className='text-xs text-white ml-1'>m</span>
                </p>
              </div>
              <div className="flex flex-grow justify-between">
                <CarLinearProgressBar progress={carProgress} setProgress={setCarProgress} expanded={expanded} isDone={false} />
                <MapLinearProgressBar progress={mapProgress} setProgress={setMapProgress} expanded={expanded} isStart={false}/>
              </div>   
            </div>
          : 
            <div className="flex gap-1 w-full items-center pl-2">
              <div className="flex flex-grow justify-between">
                <CarLinearProgressBar progress={carProgress} setProgress={setCarProgress} expanded={expanded} isDone={false}/>
                <MapLinearProgressBar progress={mapProgress} setProgress={setMapProgress} expanded={expanded} isStart={false} />
              </div>
            </div>
          }
          <ArrowDropDownRoundedIcon sx={{ fontSize: 40, transform: !expanded ? 'rotate(180deg)' : 'rotate(0deg)', color: !expanded ? 'white' : '#32FF9D' }} />
      </button>


        <div className="w-[354px] h-[275px] bg-[#151515] rounded-[40px] border border-[#303030]">
          <div className='w-full flex h-[70%] py-4'>
            <div className='w-[30%] text-white text-5xl align-middle my-auto pl-5'>
              <p className='text-xs'>Delivery by</p>
              <p className='text-5xl'>02</p>
            </div>
            <Divider orientation="vertical" variant="middle" flexItem
              sx={{ border: 1, borderColor: 'white', borderRadius: '24px' }} />
            <div className="flex flex-col ml-4 w-[70%] my-auto">
              <div className='flex flex-col h-full justify-center gap-2'>
                <div className="flex gap-4">
                  <img className="w-14" src={escort} alt="escort" />
                  <div className='flex flex-col text-2xl font-bold text-white items-start gap-1'>
                    <span className='max-w-28 truncate'>
                      ESCORT
                      <CheckCircleRoundedIcon className='text-green ml-1' sx={{ fontSize: 12 }} />
                    </span>
                    <span className='text-light-gray text-xs font-bold'>
                      #HUT-51136JGV
                    </span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex gap-2">
                    <img className="w-6" src={getitem} alt="getitem" />
                    <div className='flex flex-col text-2xl font-bold text-white items-start gap-1'>
                      <span className='text-xxs text-gray'>
                        Pickup Way
                      </span>
                      <span className='text-xs font-medium'>
                        Personally
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <img className="w-6" src={store} alt="store" />
                    <div className='flex flex-col text-2xl font-bold text-white items-start gap-1'>
                      <span className='text-xxs text-gray'>
                        Platform
                      </span>
                      <span className='text-xs flex gap-1 font-medium'>
                        <img className="w-4" src={santa} alt="santa" />
                        Santa
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <img className="w-6" src={location} alt="location" />
                  <div className='flex flex-col text-2xl font-bold text-white items-start gap-1'>
                    <span className='text-xxs text-gray'>
                      Address
                    </span>
                    <span className='text-xs font-medium'>
                      No.122,Sec.1,Chongqing S.Rd.,Yanham Dist.
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className='w-full flex justify-center'>
            <button className='text-green border-2 border-green rounded-full px-4 py-3 w-11/12 sm:w-3/4 font-bold shadow-3xl text-2xl hover:bg-green hover:border-0 hover:text-black' onClick={handleQrcode}>
              <QrCodeScannerRoundedIcon style={{ fontSize: "1.7rem" }} /> Scan
            </button>
          </div>
        </div>
      </div>
      
      <MapModal
        open={open}
        onClose={handleClose}    
        setValue={setValue}  
      />     
    </div>
  );
}
