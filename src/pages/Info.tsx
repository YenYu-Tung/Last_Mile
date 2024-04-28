import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import Divider from '@mui/material/Divider';

import logo from "/logo.svg";
import infostepper from "/infostepper.svg";

type InfoProps = {
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Goods = ['ESCORT', 'FISHING TOYS', 'TOASTER', 'AIR MASK', 'TRIPOD'];
const Titles = ['#HUT-51136JGV', '#RWQ-51F9711D', '#358-JDG652LI', '#5UR-4FWQFVP3', '#POR-FS5J964R'];
const Imgs = ['escort', 'toys', 'toaster', 'glasses', 'tripod'];

export default function Info({ setValue }: InfoProps) {
  const navigate = useNavigate();

  const location = useLocation();

  const hash = location.hash; 
  let q = '#POR-FS5J964R'; 
  if (hash !== '') {
    q = hash 
  }

  const titleIndex = Titles.indexOf(q); 
  const good = titleIndex !== -1 ? Goods[titleIndex] : 'TRIPOD';
  const imgSrc = titleIndex !== -1 ? Imgs[titleIndex] : 'tripod';

  const handleNavigate = () => {
    navigate('/search');
    setValue('none');
  };

  const handleAsistant = () => {
    navigate('/ai-assistant');
  };

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setSnackbarOpen(true);
      })
      .catch((error) => {
        console.error('Copy Failed!:', error);
      });
  };

  return (
    <div className="flex flex-col bg-dark w-full h-full overflow-auto">
      <Snackbar
        open={snackbarOpen}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={1500}
        onClose={() => setSnackbarOpen(false)}
        message="Successfully copied item number!"
      ></Snackbar>
      <div className='flex flex-col m-auto w-11/12 pt-8'>
        <div className="flex justify-between items-center">
          <span className='text-gray'>
            <button onClick={handleNavigate}>
              <ChevronLeftRoundedIcon sx={{ color: '#898989', fontSize: 48 }} />
            </button>
          </span>
          <img className="w-28" src={logo} alt="Logo" />
          <IconButton aria-label="qrcode" onClick={handleAsistant}>
            <SupportAgentRoundedIcon className='text-white' style={{ fontSize: "2rem" }} />
          </IconButton>
        </div>
      </div>
      <div className='flex m-auto w-full justify-start align-middle px-8 py-5 text-white gap-4'>
        <img src={`/${imgSrc}.svg`} alt={good} className="w-20" />    
        <div className='flex flex-col h-full justify-center gap-1'>
          <span className='flex text-2xl font-bold text-white items-end'>
            <span>{good}</span>
            <CheckCircleRoundedIcon className='text-green ml-1 mb-1' sx={{ fontSize: 12 }} />
          </span>
          <div className='flex items-center'>
            <FiberManualRecordOutlinedIcon className='text-white' style={{ fontSize: "1rem" }} />
            <div className='flex flex-col ml-2'>
              <span className='text-white font-semibold'>New York</span>
              <span className='text-[#676E7A]'>12.02.2023</span>
            </div>
            <img src={`/ship.svg`} alt="ship" className='mx-2 w-6'/>  
            <FiberManualRecordOutlinedIcon className='text-white' style={{ fontSize: "1rem" }} />
            <div className='flex flex-col ml-2'>
              <span className='text-white font-semibold'>Taipei</span>
              <span className='text-green'>01.19.2024</span>
            </div>
          </div>
        </div>     
      </div>
      <div className='flex flex-col bg-[#35393F] flex-1 rounded-t-[35px]'>
        <div className='px-8 pt-6 pb-4 flex justify-between items-center'>
          <span className="text-white font-semibold">Order Number</span>
          <span className='text-light-gray text-sm font-bold'>
            {q}
            <IconButton className='p-0' onClick={() => handleCopy(q)}>
              <ContentCopyRoundedIcon className='text-light-gray' sx={{ fontSize: 12 }} />
            </IconButton> 
          </span>
        </div>
        <Divider variant="middle" sx={{ border: 1, borderColor: '#797979' }} />
        <div className="flex px-12 mt-9">
          {/* <Stepper /> */}
          <img className="w-[18px] pb-11 mt-1.5" src={infostepper} alt="Logo" />
          <div className='ml-4'>
            <div className='flex flex-col h-[125px]'>
              <span className='text-green text-lg'>Clearing customs</span>
              <span className='text-green'>09:11:28  01-19-2024</span>
              <div className='flex mt-4 items-start'>
                <FiberManualRecordIcon className='text-[#676E7A] mt-1.5 mr-1' style={{ fontSize: "0.3rem" }} />
                <span className='text-[#676E7A] text-sm'>
                  Customs clearance is in progress, please wait patiently
                </span>
              </div>              
            </div>
            <div className='flex flex-col h-[85px]'>
              <span className='text-[#676E7A] text-lg'>Clearing customs</span>
              <span className='text-[#676E7A]'>03:53:07  01-19-2024</span>
            </div>
            <div className='flex flex-col h-[178px]'>
              <span className='text-[#676E7A] text-lg'>Transporting</span>
              <span className='text-[#676E7A]'>01:13:07  01-19-2024</span>
              <div className='flex mt-6 items-start'>
                <FiberManualRecordIcon className='text-[#676E7A] mt-1.5 mr-1' style={{ fontSize: "0.3rem" }} />
                <span className='text-[#676E7A] text-sm'>
                  The express parcels are sorted at [Taipei International Parcel Operation Center] and ready to be sent to hte net stop
                </span>
              </div>
            </div>
            <div className='flex flex-col h-[115px]'>
              <span className='text-[#676E7A] text-lg'>Transporting</span>
              <span className='text-[#676E7A]'>00:02:36  01-18-2024</span>
              <div className='flex mt-4 items-start'>
                <FiberManualRecordIcon className='text-[#676E7A] mt-1.5 mr-1' style={{ fontSize: "0.3rem" }} />
                <span className='text-[#676E7A] text-sm'>
                  The express shipment has on its way to Taipei
                </span>
              </div>
            </div>
            <div className='flex flex-col'>
              <span className='text-[#676E7A] text-lg'>Transporting</span>
              <span className='text-[#676E7A]'>00:00:28  01-18-2024</span>
            </div>            
          </div>
        </div>        
      </div>


    </div>
  );
}