import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import logo from "/logo.svg";
import inprogress from "/inprogress.svg";
import popularservices from "/popularservices.svg";
import delivery from "/delivery.svg";
import shopee from "/shopee.svg";
// import momo from "/momo.svg";
import pchome from "/pchome.svg";
import home from "/home.svg";

import Divider from '@mui/material/Divider';
import QrCodeScannerRoundedIcon from '@mui/icons-material/QrCodeScannerRounded';
import IconButton from '@mui/material/IconButton';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';


import SendRoundedIcon from '@mui/icons-material/SendRounded';
// import SignpostRoundedIcon from '@mui/icons-material/SignpostRounded';
import EditLocationOutlinedIcon from '@mui/icons-material/EditLocationOutlined';
// import EditLocationRoundedIcon from '@mui/icons-material/EditLocationRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';

import DialogList from "../components/DialogList";
import ProgressBar from "../components/ProgressBar";

const containerStyle = {
  background: `url(${home}), linear-gradient(to right, rgba(31, 31, 31, 1), transparent)`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right',
  position: 'absolute',
  backgroundBlendMode: 'color-dodge',
  top: 0,
  left: '40%',
  width: '60%',
  height: '100%',
  borderTopRightRadius: '24px',
  borderBottomRightRadius: '24px',
  opacity: 0.6,
} as const;



type HomeProps = {
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function Home({ setValue }: HomeProps) {
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
    navigate('/list');
    setValue('none');
  };
  const handleNavigateToDelivery = () => {
    navigate('/delivery');
    setValue('delivery');
  };
  const handleQrcode = () => {
    navigate('/scan');
    setValue('none');
  };
  const handleAddress = () => {
    navigate('/profile/address-setting', { state: { prevurl: 'home' } });
    setValue('none');
  };
  const handleAssistant = () => {
    navigate('/ai-assistant');
    setValue('none');
  };

  const [hoveredDiv, setHoveredDiv] = useState('');

  return (
    <div className="bg-dark pb-24 md:px-8" style={{ minHeight: "100vh" }}>
      <div className="flex justify-between align-middle items-center p-4">
        <img className="w-36 sm:w-50" src={logo} alt="Last Mile" />
        <IconButton aria-label="qrcode" onClick={handleQrcode}>
          <QrCodeScannerRoundedIcon className='text-green' style={{ fontSize: "2rem" }} />
        </IconButton>
        
      </div>
      <div className="flex flex-col items-start px-6 pb-4 ">
        <img className="w-28 sm:w-40" src={inprogress} alt="In Progress" />
        <div className="border border-green mt-4 w-full rounded-3xl h-52 shadow-3xl relative" >  
          <div className='w-full h-full bg-gradient-to-r from-gray/20 via-dark-gray/5 to-dark-gray/10 rounded-3xl z-20'></div>  
          <div className='w-full h-full z-0' style={containerStyle}>
          </div>   
          <div className='w-full flex flex-col h-full absolute top-0 left-0 gap-3 items-start px-2 py-4 z-30'>
            <div className='flex flex-col h-1/4 pl-4'>
              <span className='text-light-gray ml-1 text-sm w-full'>Current Tracking</span>
              <p className="text-lg text-white font-bold">#RWQ-51F9711D</p>
            </div>
            <div className='flex flex-col w-full h-1/2 pl-4 gap-1 justify-end pb-2'>
              <span className='text-light-gray ml-1 text-xs w-full'>Destination</span>
              <p className='text-white text-xs sm:text-sm flex w-full items-center'>
                <LocationOnIcon className='text-green mr-1' sx={{ fontSize: 14 }} />No. 122, Sec. 1, Chongqing S. Rd., Zhongzheng District </p>
            </div>
            <div className='flex w-full h-1/4 pl-4 gap-1'>
              <div className='flex flex-col w-1/2'>
                <span className='text-light-gray ml-1 text-xs w-full'>Time Left</span>
                <ProgressBar />
              </div>
              <div className='w-1/2 flex justify-end items-end absolute bottom-0 right-0'>
                <button className={`w-28 sm:w-36 h-8 text-center rounded-tl-3xl rounded-br-[22px] font-bold text-xs sm:text-sm flex justify-center items-center bg-green`} onClick={handleNavigateToDelivery}>
                  Check
                  <ArrowRightAltRoundedIcon sx={{ fontSize: 20, fontWeight: 'bold' }} className='ml-0.5' />
                </button>   

              </div>
              
            </div>
          </div>
        </div>
      </div> 
      <div className="flex flex-col items-start px-6 py-4">
        <img className="w-40 sm:w-60" src={popularservices} alt="Popular Services" />
        <div className="flex mt-4 w-full gap-3">
          <div className='flex flex-col w-1/3 items-center justify-center px-3 py-4 border border-green rounded-t-3xl xs:rounded-t-[30px] rounded-bl-3xl xs:rounded-bl-[30px] rounded-br-[32px] xs:rounded-br-[50px] relative shadow-3xl'>
            <SendRoundedIcon className='text-green' style={{ fontSize: "3.5rem" }} />
            <span className='w-3/4 text-green text-center text-sm mt-2'>Wait for Delivery</span>
            <div className='absolute top-[9.2rem] xs:top-32 sm:top-[6.5rem]  right-0 bg-green rounded-full w-2 h-2'></div>
          </div>
          <button className='flex flex-col w-1/3 items-center justify-center px-3 py-4 border border-green rounded-3xl xs:rounded-[30px] shadow-3xl text-white hover:text-green hover:rounded-br-[32px] xs:hover:rounded-br-[50px]' onClick={handleAddress}>
            <EditLocationOutlinedIcon className='' style={{ fontSize: "3.5rem" }} />
            <span className='w-3/4 text-center text-sm mt-2'>Address Setting</span>
          </button>
          <button className='flex flex-col w-1/3 items-center justify-center px-3 py-4 border border-green rounded-3xl xs:rounded-[30px] shadow-3xl text-white hover:text-green hover:rounded-br-[32px] xs:hover:rounded-br-[50px] ' onClick={handleAssistant}>
            <SupportAgentRoundedIcon className='' style={{ fontSize: "3.5rem" }} />
            <span className='w-3/4 text-center text-sm mt-2'>AI Assistant</span>
          </button>
        </div>
      </div> 
      <div className="flex flex-col items-start px-6 py-4">
        <div className="flex w-full justify-between">
          <img className="w-40 sm:w-60" src={delivery} alt="Wait For Delivery" />
          <button className="flex justify-center items-center text-white hover:text-green" onClick={handleNavigate}>
            <span className='text-base'>See all</span>
            <ChevronRightRoundedIcon  style={{ fontSize: "1.5rem" }} />
          </button>
        </div>
        
        <div className="flex flex-col mt-4 w-full gap-y-5">
          <div className='w-full h-24 rounded-3xl border border-green hover:bg-green text-white hover:border-exdark hover:text-exdark' onMouseEnter={() => setHoveredDiv('#RWQ-51F9711D')}
            onMouseLeave={() => setHoveredDiv('')}>
            <div className='w-full flex flex-col h-full relative'>
              <div className='h-1/3 text-xl font-bold mt-2 ml-4'>
                #RWQ-51F9711D
              </div>
              <div className="flex flex-col h-2/3 w-full justify-end">
                <span className="text-xs ml-4">Package ETA</span>
                <DialogList num={0} title="#RWQ-51F9711D" avatar="PChome" hoveredDiv={hoveredDiv} />           
                
              </div>
              <Chip
                avatar={<Avatar alt="PChome" src={pchome} />}
                label={
                  <div className='flex align-middle items-center text-xs'>
                    PChome
                  </div>
                } variant="outlined" sx={{
                  color: hoveredDiv === '#RWQ-51F9711D' ? '#141516' : '#32FF9D',
                  border: 1,
                  borderColor: hoveredDiv === '#RWQ-51F9711D' ? '#141516' : '#32FF9D',
                  bgcolor: 'transparent',
                  fontWeight: 'bold'
                }} className="absolute top-2 right-2" />
            </div>
          </div>

          <div className='w-full h-24 rounded-3xl border border-green hover:bg-green text-white hover:border-exdark hover:text-exdark' onMouseEnter={() => setHoveredDiv('#OUR-PFU1IG8')}
            onMouseLeave={() => setHoveredDiv('')}>
            <div className='w-full flex flex-col h-full relative'>
              <div className='h-1/3 text-xl font-bold mt-2 ml-4'>
                #OUR-PFU1IG8
              </div>
              <div className="flex flex-col h-2/3 w-full justify-end">
                <span className="text-xs ml-4">Package ETA</span>
                <DialogList num={1} title="#OUR-PFU1IG8" avatar="Shopee" hoveredDiv={hoveredDiv} />           

              </div>
              <Chip
                avatar={<Avatar alt="shopee" src={shopee} />}
                label={
                  <div className='flex align-middle items-center text-xs'>
                    Shopee
                  </div>
                } variant="outlined" sx={{
                  color: hoveredDiv === '#OUR-PFU1IG8' ? '#141516' : '#32FF9D',
                  border: 1,
                  borderColor: hoveredDiv === '#OUR-PFU1IG8' ? '#141516' : '#32FF9D',
                  bgcolor: 'transparent',
                  fontWeight: 'bold'
                }} className="absolute top-2 right-2" />
            </div>
          </div>
          <div className='w-full h-24 rounded-3xl border border-green text-white'>
            <div className='w-full flex flex-col h-full relative'>
              <div className='h-1/3 text-xl font-bold mt-2 ml-4'>
                #IDW-8JUGF89
              </div>
              <div className="flex flex-col h-2/3 w-full justify-end">
                <span className=" text-xs ml-4">Package ETA</span>
                <div className='flex justify-between items-end'>
                  <div className='mb-1 ml-4'>
                    {/* <span className="text-white text-xl">14 : 59</span> */}
                    <span className="text-xs font-bold">On the way to transfer</span>
                  </div>
                  {/* <button className={`w-[6.5rem] xs:w-36 h-8 text-center rounded-tl-3xl rounded-br-[22px] font-bold text-xs sm:text-sm flex justify-center items-center  ${hoveredDiv === '#IDW-8JUGF89' ? 'text-white bg-exdark border border-green' : 'text-exdark bg-green'}`} >
                    Change time
                    <ArrowRightAltRoundedIcon sx={{ fontSize: 18 }}  className='ml-0.5' />
                  </button> */}
                </div>

              </div>
              <Chip
                avatar={<Avatar alt="shopee" src={shopee} />}
                label={
                  <div className='flex align-middle items-center text-xs'>
                    Shopee
                  </div>
                } variant="outlined" sx={{
                  color: hoveredDiv === '#IDW-8JUGF89' ? '#141516' : '#32FF9D',
                  border: 1,
                  borderColor: hoveredDiv === '#IDW-8JUGF89' ? '#141516' : '#32FF9D',
                  bgcolor: 'transparent',
                  fontWeight: 'bold'
                }} className="absolute top-2 right-2" />
            </div>
          </div>
        </div>
      </div> 
      
      <Divider variant="middle"  sx={{
        color: '#898989', '&.MuiDivider-root::before, &.MuiDivider-root::after': {
          borderTop: '1px solid #898989', 
        } }} >No more</Divider>
    </div>
  );
}