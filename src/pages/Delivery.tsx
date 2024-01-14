import { useState, useEffect } from "react";

import deliverybg from "../assets/deliverybg.svg";
import shopee from "../assets/shopee.svg";
import deliver from "../assets/deliver.svg";
// import Arrival from "../assets/Arrival.svg";
// import Draggable from 'react-draggable';

import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import Divider from '@mui/material/Divider';
import QrCodeScannerRoundedIcon from '@mui/icons-material/QrCodeScannerRounded'; 
// import IconButton from '@mui/material/IconButton';
// import NearMeRoundedIcon from '@mui/icons-material/NearMeRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

import Chip from '@mui/material/Chip';

import { useNavigate } from 'react-router-dom';
import CircularProgress from "../components/CircularProgress";

import MapModal from "../components/MapModal";

type DeliveryProps = {
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function Delivery({ setValue }: DeliveryProps) {
  const navigate = useNavigate();

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/') setValue('home');
    else if (path === '/delivery') setValue('delivery');
    else if (path === '/deliverymap') setValue('delivery');
    else if (path === '/locker') setValue('locker');
    else if (path === '/profile') setValue('profile');
    else setValue('none');
  }, [setValue]);
  
  const handleNavigate = () => {
    navigate('/');
    setValue('home');
  };
  const handleQrcode = () => {
    navigate('/scan');
    setValue('none');
  };


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
  const bottomDivStyle = {
    height: '38%', 
    position: 'fixed',
    top: '45%',
  } as const;
  const DivStyle = {
    width: '80%',
    height: '100%', 
  } as const;


  const [open, setOpen] = useState(false);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setOpen(true);
    }, 3000);
    return () => clearTimeout(timerId);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={containerStyle}>
      <div className="mt-6 ml-6">
        <button className="bg-gray rounded-full" onClick={handleNavigate}> 
          <ChevronLeftRoundedIcon sx={{ color: 'white', fontSize: 40 }} />
        </button>  
        <Chip label={
          <div className='flex align-middle items-center'>
            3 min
          </div>
        } variant="outlined" sx={{ color: 'white', border: 2, borderColor: '#32FF9D', bgcolor: '#323232' }} className="absolute top-[3.5rem] left-[7.5rem]" />
        <div className="w-16 h-16 bg-green/20 fixed top-[13.9%] left-[7.7rem] rounded-full flex justify-center items-center animate-pulse">             
        </div>
        <div className="w-8 h-8 flex justify-center items-center bg-green rounded-full fixed top-[16%] left-[8.7rem]">
          <SendRoundedIcon sx={{ color: 'white', fontSize: 19, transform: 'rotate(60deg)' }} />
        </div>
      </div>
      <div className="flex w-full overflow-y-auto" style={bottomDivStyle} >
        <div className="ml-6" style={DivStyle}>
          <div className="flex w-full h-1/6 justify-center">
            <div className="bg-exdark text-white text-lg w-1/2 rounded-tl-xl rounded-tr-2xl flex justify-center items-center mt-1">
              IN PROCESS
            </div>
            <div className="w-1/2 m-auto flex items-center align-middle justify-center">
              <button className="bg-green rounded-full w-10/12 py-1.5" onClick={handleQrcode}>
                <QrCodeScannerRoundedIcon className='text-exdark mr-2' style={{ fontSize: "1.5rem" }} />
                <span className="font-bold">SCAN</span>
              </button>
            </div>            
          </div>
          <div className="bg-exdark flex flex-col w-full h-5/6 rounded-r-xl rounded-bl-xl">
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
                <img className="w-8" src={shopee} alt="Shopee" />
                <span className="text-white text-lg ml-2">Shopee</span>
              </div>              
              <div className="flex w-full min-h-[50%] truncate ... items-center sm:ml-10">
                <img className="w-3" src={deliver} alt="Deliver" />
                <div className="flex flex-col ml-3 w-full">
                  <div className="flex flex-col">
                    <span className="text-gray text-sm">Deliver from</span>
                    <span className="text-white text-sm">No.122,Sec.1,Chongqing S.Rd.</span>
                  </div>
                  <div className="flex flex-col mt-4 sm:mt-2">
                    <span className="text-gray text-sm">Deliver to</span>
                    <span className="text-sm text-transparent text-white">No.122,Sec.1,Chongqing S.Rd.,Yanham Dist.</span>
                  </div>        
                </div>
              </div>
            </div>
          </div>
        </div>   
        <div className="ml-6" style={DivStyle}>
          <div className="flex w-full h-1/6 justify-center">
            <div className="bg-exdark text-white text-lg w-1/2 rounded-tl-xl rounded-tr-2xl flex justify-center items-center mt-1">
              IN PROCESS
            </div>
            <div className="w-1/2 m-auto flex items-center align-middle justify-center">
              <button className="bg-green rounded-full w-10/12 py-1.5" onClick={handleQrcode}>
                <QrCodeScannerRoundedIcon className='text-exdark mr-2' style={{ fontSize: "1.5rem" }} />
                <span className="font-bold">SCAN</span>
              </button>
            </div>
          </div>
          <div className="bg-exdark flex flex-col w-full h-5/6 rounded-r-xl rounded-bl-xl">
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
                <img className="w-8" src={shopee} alt="Shopee" />
                <span className="text-white text-lg ml-2">Shopee</span>
              </div>
              <div className="flex w-full min-h-[50%] truncate ... items-center sm:ml-10">
                <img className="w-3" src={deliver} alt="Deliver" />
                <div className="flex flex-col ml-3 w-full">
                  <div className="flex flex-col">
                    <span className="text-gray text-sm">Deliver from</span>
                    <span className="text-white text-sm">No.122,Sec.1,Chongqing S.Rd.</span>
                  </div>
                  <div className="flex flex-col mt-4 sm:mt-2">
                    <span className="text-gray text-sm">Deliver to</span>
                    <span className="text-sm text-transparent text-white">No.122,Sec.1,Chongqing S.Rd.,Yanham Dist.</span>
                  </div>
                </div>
              </div>
            </div>
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
