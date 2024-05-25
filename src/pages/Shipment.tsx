import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import message from "/message.svg";

// import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';

import IconButton from '@mui/material/IconButton';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';


import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import CurrencyExchangeRoundedIcon from '@mui/icons-material/CurrencyExchangeRounded';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

import logo from "/logo.svg";
import box from "/box.svg";

import Dialog from '../components/UploadDialog';


import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Badge from '@mui/material/Badge';


import album from "/album.svg";
import headphone from "/headphone.svg";
import purse from "/purse.svg";
import slipper from "/slipper.svg";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const listSxProp = {
  '&.MuiListItemText-root span': {
    fontSize: '16px',
  }
};

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <>
          {children}
        </>
      )}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


type ShipmentProps = {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setMainPage: React.Dispatch<React.SetStateAction<string>>;
  num: number;
  setNum: React.Dispatch<React.SetStateAction<number>>;
}

export default function Shipment({ setValue, setMainPage, num, setNum }: ShipmentProps){

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/sender-home');
    setValue('sender-home');
  };
  const handleToShip = () => {
    navigate('/to-ship');
    setValue('sender-home');
  };
  const handleUpload = () => {
    navigate('/upload');
    setValue('sender-home');
  };

  useEffect(() => {
    setValue('shipment');
    setMainPage('sender-home');
  }, [setValue, setMainPage]);


  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    if (event) {
      setNum(newValue);
    }
  };

  const [isList, setIsList] = useState(true);
  const [uploaded, setUploaded] = useState(false);

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div className="bg-dark w-full min-h-full">
      <div className='flex flex-col m-auto w-11/12 pt-8'>
        <div className="flex justify-between items-center">
          <span className='text-gray'>
            <button onClick={handleNavigate}>
              <ChevronLeftRoundedIcon sx={{ color: '#898989', fontSize: 48 }} />
            </button>
          </span>
          <img className="w-28" src={logo} alt="Logo" />
          <img className="w-7" src={message} alt="Message" />
        </div>
      </div>
      <Box sx={{ paddingX: 3.5, flex: 1 }}>
        <Tabs value={num} onChange={handleChange} aria-label="basic tabs example"
          sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: '#32FF9D',
            },
            '& .MuiTab-textColorPrimary': {
              color: '#898989',
            },
            '& .MuiButtonBase-root.MuiTab-root.Mui-selected': {
              color: '#fff',
            },
            '& .MuiTabs-flexContainer': {
              justifyContent: 'start',
            },
          }}
          variant="scrollable"
          scrollButtons={false}
        >
          <Tab label="In progress" {...a11yProps(0)} />
          <Tab label="Shipped" {...a11yProps(1)} />
          <Tab label="Reserved List" {...a11yProps(2)} />
          <Tab label="Return" {...a11yProps(3)} />
          {/* <button className="flex justify-center items-center text-exlight-gray hover:text-green absolute top-[14px] right-0" onClick={handleNavigate}>
            <span className='text-sm'>See more</span>
            <ChevronRightRoundedIcon style={{ fontSize: "1.2rem" }} />
          </button> */}
        </Tabs>

        <CustomTabPanel value={num} index={0}>
          <div className='pt-4 flex flex-col gap-6 pb-24'>
            <Chip
              avatar={<Avatar alt="box" src={box} />}
              label="15" sx={{
                color: '#C0C0C0',
                bgcolor: 'transparent',
                border: 1,
                borderColor: 'white',
                fontWeight: 'bold',
                fontSize: '12px',
                '& .MuiChip-label': {
                  padding: '0px 2px 0px 6px'
                },
                '& .MuiChip-avatar': {
                  margin: '0',
                  width: '17px',
                  height: '17px'
                },
                '&': {
                  height: '28px'
                },
              }} className="w-[52px]" />
            <div className='w-full h-[420px] rounded-3xl border border-[#363A40] bg-[#26292E] shadow-5xl py-6 px-8 flex flex-col justify-between'>
              <div className='w-full flex justify-between text-white items-center'>
                <div className='flex gap-4 items-center text-white'>
                  <span className='text-base font-bold'>#AWE-11871VKU</span>
                  <Chip label={
                    <div className='flex align-middle items-center font-bold'>
                      <StarRoundedIcon sx={{ color: '#1E2023', marginRight: 0.5, fontSize: '0.8rem' }} />
                      Paid
                    </div>
                  } size="small" sx={{
                    color: 'black', backgroundColor: '#32FF9D', fontSize: '10px', fontWeight: 'medium',
                    '& .MuiChip-label': {
                      padding: '0px 8px'
                    },
                  }} />
                </div>
                <span className='text-base'>05/24</span>
              </div>
              <div className='w-full flex justify-between text-white items-end'>
                <div className='flex gap-2 items-end text-gray'>
                  <PersonRoundedIcon style={{ fontSize: "1.3rem" }} />
                  <span className='text-sm font-bold'>Name</span>
                </div>
                <span className='text-xs text-white'>Tiffany Smith</span>
              </div>
              <Divider sx={{ borderColor: '#737373', borderRadius: '24px' }} />
              <div className='w-full flex justify-between text-white items-end'>
                <div className='flex gap-2 items-end text-gray'>
                  <LocalPhoneRoundedIcon style={{ fontSize: "1.3rem" }} />
                  <span className='text-sm font-bold'>Phone verify</span>
                </div>
                <span className='text-xs text-white'>Pass</span>
              </div>
              <Divider sx={{ borderColor: '#737373', borderRadius: '24px' }} />
              <div className='w-full flex justify-between text-white items-end'>
                <div className='flex gap-2 items-end text-gray'>
                  <EmailRoundedIcon style={{ fontSize: "1.3rem" }} />
                  <span className='text-sm font-bold'>Postcode</span>
                </div>
                <span className='text-xs text-white'>LEXXXXX1JF</span>
              </div>
              <Divider sx={{ borderColor: '#737373', borderRadius: '24px' }} />
              <div className='w-full flex justify-between items-center font-medium text-white'>
                <span className='text-xs'>
                  7
                  <span className='text-xs ml-1'>items</span>
                </span>
                <div className='flex gap-1 items-center'>
                  <PaidOutlinedIcon style={{ fontSize: "1rem", color: '#32FF9D' }} />
                  <span className='text-xs'>Order Total:</span>
                  <span className='text-xs font-bold text-green'>$16,198</span>
                </div>
              </div>
              <div className='flex gap-4 w-full'>
                <img className="w-16" src={album} alt="album" />
                <div className='flex flex-1 flex-col h-full justify-center gap-1'>
                  <span className='flex text-sm font-bold text-white items-end'>
                    Sam Hancy Albums - 2024
                  </span>
                  <span className='text-xs font-bold text-gray'>Yellow Music</span>
                  <div className='w-full flex justify-between items-center'>
                    <span className='flex text-xs font-bold items-end gap-2'>
                      <span className='text-gray line-through'>$3100</span>
                      <span className='text-green'>$2,800</span>
                    </span>
                    <span className='text-xs text-white'>
                      x
                      <span className='text-xs ml-1'>5</span>
                    </span>
                  </div>
                </div>
              </div>
              <Divider sx={{ borderColor: '#737373', borderRadius: '24px', borderStyle: 'dashed' }} />
              <div className='flex gap-4 w-full'>
                <img className="w-16" src={headphone} alt="headphone" />
                <div className='flex flex-1 flex-col h-full justify-center gap-1'>
                  <span className='flex text-sm font-bold text-white items-end'>
                    WH103 Headphone
                  </span>
                  <span className='text-xs font-bold text-gray'>Black 300</span>
                  <div className='w-full flex justify-between items-center'>
                    <span className='flex text-xs font-bold items-end gap-2'>
                      <span className='text-gray line-through'>$1899</span>
                      <span className='text-green'>$1,099</span>
                    </span>
                    <span className='text-xs text-white'>
                      x
                      <span className='text-xs ml-1'>2</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className='flex justify-center mt-2'>
                <button className="flex items-center justify-center w-[190px] text-black text-sm font-bold rounded-full py-2 bg-[#85DAB0] gap-4" onClick={handleUpload}>
                  Upload
                  <button className="w-[65px] text-black text-sm font-bold rounded-full py-1.5 bg-white shadow-xl">
                    <KeyboardArrowRightRoundedIcon sx={{ fontSize: 20, color: 'black' }} />

                  </button>

                </button>
              </div>
            </div>

            <div className='w-full h-[420px] rounded-3xl border border-[#363A40] bg-[#26292E] shadow-5xl py-6 px-8 flex flex-col justify-between'>
              <div className='w-full flex justify-between text-white items-center'>
                <div className='flex gap-4 items-center text-white'>
                  <span className='text-base font-bold'>#JUP-74186KK</span>
                  <Chip label={
                    <div className='flex align-middle items-center font-bold'>
                      <StarRoundedIcon sx={{ color: '#1E2023', marginRight: 0.5, fontSize: '0.8rem' }} />
                      Fee
                    </div>
                  } size="small" sx={{
                    color: 'black', backgroundColor: '#FF9A9A', fontSize: '10px', fontWeight: 'medium',
                    '& .MuiChip-label': {
                      padding: '0px 8px'
                    },
                  }} />
                </div>
                <span className='text-base'>05/26</span>
              </div>
              <div className='w-full flex justify-between text-white items-end'>
                <div className='flex gap-2 items-end text-gray'>
                  <PersonRoundedIcon style={{ fontSize: "1.3rem" }} />
                  <span className='text-sm font-bold'>Name</span>
                </div>
                <span className='text-xs text-white'>Peggy Kuo</span>
              </div>
              <Divider sx={{ borderColor: '#737373', borderRadius: '24px' }} />
              <div className='w-full flex justify-between text-white items-end'>
                <div className='flex gap-2 items-end text-gray'>
                  <LocalPhoneRoundedIcon style={{ fontSize: "1.3rem" }} />
                  <span className='text-sm font-bold'>Phone verify</span>
                </div>
                <span className='text-xs text-white'>Pass</span>
              </div>
              <Divider sx={{ borderColor: '#737373', borderRadius: '24px' }} />
              <div className='w-full flex justify-between text-white items-end'>
                <div className='flex gap-2 items-end text-gray'>
                  <EmailRoundedIcon style={{ fontSize: "1.3rem" }} />
                  <span className='text-sm font-bold'>Postcode</span>
                </div>
                <span className='text-xs text-white'>OURKKGUT8Q</span>
              </div>
              <Divider sx={{ borderColor: '#737373', borderRadius: '24px' }} />
              <div className='w-full flex justify-between items-center font-medium text-white'>
                <span className='text-xs'>
                  7
                  <span className='text-xs ml-1'>items</span>
                </span>
                <div className='flex gap-1 items-center'>
                  <PaidOutlinedIcon style={{ fontSize: "1rem", color: '#32FF9D' }} />
                  <span className='text-xs'>Order Total:</span>
                  <span className='text-xs font-bold text-green'>$10,100</span>
                </div>
              </div>
              <div className='flex gap-4 w-full'>
                <img className="w-16" src={purse} alt="purse" />
                <div className='flex flex-1 flex-col h-full justify-center gap-1'>
                  <span className='flex text-sm font-bold text-white items-end'>
                    Blue Luxury Bags 
                  </span>
                  <span className='text-xs font-bold text-gray'>Blue square</span>
                  <div className='w-full flex justify-between items-center'>
                    <span className='flex text-xs font-bold items-end gap-2'>
                      <span className='text-gray line-through'>$10,000</span>
                      <span className='text-green'>$9,500</span>
                    </span>
                    <span className='text-xs text-white'>
                      x
                      <span className='text-xs ml-1'>5</span>
                    </span>
                  </div>
                </div>
              </div>
              <Divider sx={{ borderColor: '#737373', borderRadius: '24px', borderStyle: 'dashed' }} />
              <div className='flex gap-4 w-full'>
                <img className="w-16" src={slipper} alt="slipper" />
                <div className='flex flex-1 flex-col h-full justify-center gap-1'>
                  <span className='flex text-sm font-bold text-white items-end'>
                    Waterproof Slippers for pool
                  </span>
                  <span className='text-xs font-bold text-gray'>Black 300</span>
                  <div className='w-full flex justify-between items-center'>
                    <span className='flex text-xs font-bold items-end gap-2'>
                      <span className='text-gray line-through'>$500</span>
                      <span className='text-green'>$300</span>
                    </span>
                    <span className='text-xs text-white'>
                      x
                      <span className='text-xs ml-1'>2</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className='flex justify-center mt-2'>
                <button className="flex items-center justify-center w-[190px] text-black text-sm font-bold rounded-full py-2 bg-[#85DAB0] gap-4">
                  Upload
                  <button className="w-[65px] text-black text-sm font-bold rounded-full py-1.5 bg-white shadow-xl">
                    <KeyboardArrowRightRoundedIcon sx={{ fontSize: 20, color: 'black' }} />

                  </button>

                </button>
              </div>
            </div>
          </div>
        </CustomTabPanel>

        <CustomTabPanel value={num} index={1}>
          <div className='pt-4 flex flex-col gap-6 pb-24'>
            <Chip
              avatar={<Avatar alt="box" src={box} />}
              label="10" sx={{
                color: '#C0C0C0',
                bgcolor: 'transparent',
                border: 1,
                borderColor: 'white',
                fontWeight: 'bold',
                fontSize: '12px',
                '& .MuiChip-label': {
                  padding: '0px 2px 0px 6px'
                },
                '& .MuiChip-avatar': {
                  margin: '0',
                  width: '17px',
                  height: '17px'
                },
                '&': {
                  height: '28px'
                },
              }} className="w-[52px]" />
            <div className='w-full h-[360px] rounded-3xl border border-[#363A40] bg-[#26292E] shadow-5xl py-6 px-8 flex flex-col justify-between'>
              <div className='w-full flex justify-between text-white items-center'>
                <div className='flex gap-4 items-center text-white'>
                  <span className='text-base font-bold'>#PF1-147RDHG5</span>
                  <Chip label={
                    <div className='flex align-middle items-center font-bold'>
                      <StarRoundedIcon sx={{ color: '#1E2023', marginRight: 0.5, fontSize: '0.8rem' }} />
                      Paid
                    </div>
                  } size="small" sx={{
                    color: 'black', backgroundColor: '#32FF9D', fontSize: '10px', fontWeight: 'medium',
                    '& .MuiChip-label': {
                      padding: '0px 8px'
                    },
                  }} />
                </div>
                <span className='text-base'>05/22</span>
              </div>
              <div className='w-full flex justify-between text-white items-end'>
                <div className='flex gap-2 items-end text-gray'>
                  <PersonRoundedIcon style={{ fontSize: "1.3rem" }} />
                  <span className='text-sm font-bold'>Name</span>
                </div>
                <span className='text-xs text-white'>John Doe</span>
              </div>
              <Divider sx={{ borderColor: '#737373', borderRadius: '24px' }} />
              <div className='w-full flex justify-between text-white items-end'>
                <div className='flex gap-2 items-end text-gray'>
                  <LocalPhoneRoundedIcon style={{ fontSize: "1.3rem" }} />
                  <span className='text-sm font-bold'>Phone verify</span>
                </div>
                <span className='text-xs text-white'>Pass</span>
              </div>
              <Divider sx={{ borderColor: '#737373', borderRadius: '24px' }} />
              <div className='w-full flex justify-between text-white items-end'>
                <div className='flex gap-2 items-end text-gray'>
                  <EmailRoundedIcon style={{ fontSize: "1.3rem" }} />
                  <span className='text-sm font-bold'>Postcode</span>
                </div>
                <span className='text-xs text-white'>NW20482JKL</span>
              </div>
              <Divider sx={{ borderColor: '#737373', borderRadius: '24px' }} />
              <div className='w-full flex justify-between items-center font-medium text-white'>
                <span className='text-xs'>
                  4
                  <span className='text-xs ml-1'>items</span>
                </span>
                <div className='flex gap-1 items-center'>
                  <PaidOutlinedIcon style={{ fontSize: "1rem", color: '#32FF9D' }} />
                  <span className='text-xs'>Order Total:</span>
                  <span className='text-xs font-bold text-green'>12,450</span>
                </div>
              </div>
              <div className='w-full flex justify-between items-center font-medium text-white'>
                <span className='text-sm'>MX210 Speaker / Made in Germany</span>
                <span className='text-xs'>
                  x
                  <span className='text-xs ml-1'>3</span>
                </span>
              </div>
              <Divider sx={{ borderColor: '#737373', borderRadius: '24px', borderStyle: 'dashed' }} />
              <div className='w-full flex justify-between items-center font-medium text-white'>
                <span className='text-sm'>Laura Smith Books - 2025</span>
                <span className='text-xs'>
                  x
                  <span className='text-xs ml-1'>1</span>
                </span>
              </div>
              <div className='flex justify-center mt-2'>
                <button className="flex items-center justify-center w-[190px] text-black text-sm font-bold rounded-full py-2 bg-[#85D5DA] gap-3" onClick={handleToShip}>
                  Add to List
                  <button className="w-[55px] text-black text-sm font-bold rounded-full py-1.5 bg-white shadow-xl">
                    <KeyboardArrowRightRoundedIcon sx={{ fontSize: 20, color: 'black' }} />
                  </button>
                </button>
              </div>
            </div>

            <div className='w-full h-[360px] rounded-3xl border border-[#363A40] bg-[#26292E] shadow-5xl py-6 px-8 flex flex-col justify-between'>
              <div className='w-full flex justify-between text-white items-center'>
                <div className='flex gap-4 items-center text-white'>
                  <span className='text-base font-bold'>#45I-HFDS525H</span>
                  <Chip label={
                    <div className='flex align-middle items-center font-bold'>
                      <StarRoundedIcon sx={{ color: '#1E2023', marginRight: 0.5, fontSize: '0.8rem' }} />
                      Fee
                    </div>
                  } size="small" sx={{
                    color: 'black', backgroundColor: '#FF9A9A', fontSize: '10px', fontWeight: 'medium',
                    '& .MuiChip-label': {
                      padding: '0px 8px'
                    },
                  }} />
                </div>
                <span className='text-base'>05/23</span>
              </div>
              <div className='w-full flex justify-between text-white items-end'>
                <div className='flex gap-2 items-end text-gray'>
                  <PersonRoundedIcon style={{ fontSize: "1.3rem" }} />
                  <span className='text-sm font-bold'>Name</span>
                </div>
                <span className='text-xs text-white'>Sarah Johnson</span>
              </div>
              <Divider sx={{ borderColor: '#737373', borderRadius: '24px' }} />
              <div className='w-full flex justify-between text-white items-end'>
                <div className='flex gap-2 items-end text-gray'>
                  <LocalPhoneRoundedIcon style={{ fontSize: "1.3rem" }} />
                  <span className='text-sm font-bold'>Phone verify</span>
                </div>
                <span className='text-xs text-white'>Pass</span>
              </div>
              <Divider sx={{ borderColor: '#737373', borderRadius: '24px' }} />
              <div className='w-full flex justify-between text-white items-end'>
                <div className='flex gap-2 items-end text-gray'>
                  <EmailRoundedIcon style={{ fontSize: "1.3rem" }} />
                  <span className='text-sm font-bold'>Postcode</span>
                </div>
                <span className='text-xs text-white'>SE15473BCD</span>
              </div>
              <Divider sx={{ borderColor: '#737373', borderRadius: '24px' }} />
              <div className='w-full flex justify-between items-center font-medium text-white'>
                <span className='text-xs'>
                  5
                  <span className='text-xs ml-1'>items</span>
                </span>
                <div className='flex gap-1 items-center'>
                  <PaidOutlinedIcon style={{ fontSize: "1rem", color: '#32FF9D' }} />
                  <span className='text-xs'>Order Total:</span>
                  <span className='text-xs font-bold text-green'>18,320</span>
                </div>
              </div>
              <div className='w-full flex justify-between items-center font-medium text-white'>
                <span className='text-sm'>Galaxy S Phone - 2024</span>
                <span className='text-xs'>
                  x
                  <span className='text-xs ml-1'>2</span>
                </span>
              </div>
              <Divider sx={{ borderColor: '#737373', borderRadius: '24px', borderStyle: 'dashed' }} />
              <div className='w-full flex justify-between items-center font-medium text-white'>
                <span className='text-sm'>Laura Smith Books - 2025</span>
                <span className='text-xs'>
                  x
                  <span className='text-xs ml-1'>3</span>
                </span>
              </div>
              <div className='flex justify-center mt-2'>
                <button className="flex items-center justify-center w-[190px] text-black text-sm font-bold rounded-full py-2 bg-[#85D5DA] gap-3">
                  Add to List
                  <button className="w-[55px] text-black text-sm font-bold rounded-full py-1.5 bg-white shadow-xl">
                    <KeyboardArrowRightRoundedIcon sx={{ fontSize: 20, color: 'black' }} />

                  </button>

                </button>
              </div>
            </div>
            <div className='w-full h-[360px] rounded-3xl border border-[#363A40] bg-[#26292E] shadow-5xl py-6 px-8 flex flex-col justify-between'>
              <div className='w-full flex justify-between text-white items-center'>
                <div className='flex gap-4 items-center text-white'>
                  <span className='text-base font-bold'>#45I-HFDS525H</span>
                  <Chip label={
                    <div className='flex align-middle items-center font-bold'>
                      <StarRoundedIcon sx={{ color: '#1E2023', marginRight: 0.5, fontSize: '0.8rem' }} />
                      Fee
                    </div>
                  } size="small" sx={{
                    color: 'black', backgroundColor: '#FF9A9A', fontSize: '10px', fontWeight: 'medium',
                    '& .MuiChip-label': {
                      padding: '0px 8px'
                    },
                  }} />
                </div>
                <span className='text-base'>05/23</span>
              </div>
              <div className='w-full flex justify-between text-white items-end'>
                <div className='flex gap-2 items-end text-gray'>
                  <PersonRoundedIcon style={{ fontSize: "1.3rem" }} />
                  <span className='text-sm font-bold'>Name</span>
                </div>
                <span className='text-xs text-white'>Michael Brown</span>
              </div>
              <Divider sx={{ borderColor: '#737373', borderRadius: '24px' }} />
              <div className='w-full flex justify-between text-white items-end'>
                <div className='flex gap-2 items-end text-gray'>
                  <LocalPhoneRoundedIcon style={{ fontSize: "1.3rem" }} />
                  <span className='text-sm font-bold'>Phone verify</span>
                </div>
                <span className='text-xs text-white'>Pass</span>
              </div>
              <Divider sx={{ borderColor: '#737373', borderRadius: '24px' }} />
              <div className='w-full flex justify-between text-white items-end'>
                <div className='flex gap-2 items-end text-gray'>
                  <EmailRoundedIcon style={{ fontSize: "1.3rem" }} />
                  <span className='text-sm font-bold'>Postcode</span>
                </div>
                <span className='text-xs text-white'>H83GHTREW</span>
              </div>
              <Divider sx={{ borderColor: '#737373', borderRadius: '24px' }} />
              <div className='w-full flex justify-between items-center font-medium text-white'>
                <span className='text-xs'>
                  2
                  <span className='text-xs ml-1'>items</span>
                </span>
                <div className='flex gap-1 items-center'>
                  <PaidOutlinedIcon style={{ fontSize: "1rem", color: '#32FF9D' }} />
                  <span className='text-xs'>Order Total:</span>
                  <span className='text-xs font-bold text-green'>8,240</span>
                </div>
              </div>
              <div className='w-full flex justify-between items-center font-medium text-white'>
                <span className='text-sm'>MX210 Speaker / Made in Germany</span>
                <span className='text-xs'>
                  x
                  <span className='text-xs ml-1'>1</span>
                </span>
              </div>
              <Divider sx={{ borderColor: '#737373', borderRadius: '24px', borderStyle: 'dashed' }} />
              <div className='w-full flex justify-between items-center font-medium text-white'>
                <span className='text-sm'>Galaxy S Phone - 2024</span>
                <span className='text-xs'>
                  x
                  <span className='text-xs ml-1'>1</span>
                </span>
              </div>
              <div className='flex justify-center mt-2'>
                <button className="flex items-center justify-center w-[190px] text-black text-sm font-bold rounded-full py-2 bg-[#85D5DA] gap-3">
                  Add to List
                  <button className="w-[55px] text-black text-sm font-bold rounded-full py-1.5 bg-white shadow-xl">
                    <KeyboardArrowRightRoundedIcon sx={{ fontSize: 20, color: 'black' }} />

                  </button>

                </button>
              </div>
            </div>
          </div>
        </CustomTabPanel>

        <CustomTabPanel value={num} index={2}>
          <div className='pt-3 flex flex-col gap-6 pb-24'>
            {isList && (
              <>
                <div className="flex justify-between items-center">
                  <label htmlFor="Toggle" className="inline-flex items-center p-1 cursor-pointer text-sm font-bold border border-[#181A1E] rounded-full bg-[#26292E]">
                    <input id="Toggle" type="checkbox" className="hidden peer" name="Toggle" defaultChecked={true} onChange={() => setIsList(prevMode => (prevMode ? false : true))} />
                    <span className="px-4 py-2 rounded-full text-gray peer-checked:bg-green peer-checked:peer-hover:bg-gradient-to-b peer-checked:text-black">List</span>
                    <span className="px-4 py-2 rounded-full text-black  bg-green peer-checked:bg-[#26292E] peer-checked:peer-hover:bg-[#26292E] peer-checked:text-gray">Reservation</span>
                  </label>
                  <Chip
                    label={
                      <div className='flex align-middle items-center font-bold'>
                        <FormatListBulletedRoundedIcon sx={{ color: '#fff', fontSize: '1rem', marginRight: 0.5 }} />
                        {!uploaded ? '3' : '2'}
                      </div>
                    } sx={{
                      color: '#fff',
                      bgcolor: 'transparent',
                      border: 1,
                      borderColor: 'white',
                      fontWeight: 'bold',
                      fontSize: '14px',
                      '& .MuiChip-label': {
                        padding: '0px 2px'
                      },
                      '& .MuiChip-avatar': {
                        margin: '0',
                        width: '17px',
                        height: '17px'
                      },
                      '&': {
                        height: '28px'
                      },
                    }} className="w-[48px]" />

                </div>
                {!uploaded ? <div className="text-white relative">
                  <button className='absolute -top-3 -right-3' onClick={handleClickOpen}>
                    <Avatar sx={{ bgcolor: '#32FF9D', margin: 'auto', width: 50, height: 50, border: 2, borderColor: '#32FF9D' }}>
                      <SendRoundedIcon sx={{ fontSize: 29, color: '#000' }} />
                    </Avatar>
                  </button>
                  <div className='flex flex-col p-4 rounded-[30px] border border-[#757575] gap-1'>
                    <span className='text-xs text-light-gray ml-4'>Reserved Date</span>
                    <div className='flex gap-4 text-base ml-4'>
                      <span className='text-green'>Wednesday</span>
                      <span className='text-white'>/</span>
                      <span className='text-white'>May.17</span>
                      <span className='text-white'>/</span>
                      <span className='text-white'>17:00</span>
                    </div>
                    <div className='bg-[#26292E] p-4 rounded-[30px] border border-[#757575] mt-2'>
                      <div className='w-full flex justify-between text-white items-center'>
                        <span className='text-xs text-light-gray'>Number of Packages</span>
                        <span className='text-sm'>3</span>
                      </div>
                      <List className='w-full'>
                        <ListItem
                          sx={{ padding: '0px 0px 0.2rem 0px' }}
                        >
                          <ListItemText
                            primary="#AWE-11871VKU"
                            className='text-white text-sm'
                            sx={listSxProp}
                          />
                          <Chip label={
                            <div className='flex align-middle items-center font-bold'>
                              <StarRoundedIcon sx={{ color: '#1E2023', marginRight: 0.5 }} />
                              Paid
                            </div>
                          } variant="outlined" sx={{ color: '#1E2023', border: 0, bgcolor: '#32FF9D' }} size="small" />
                          <div className='flex items-center'>
                            <IconButton edge="end" aria-label="delete">
                              <BorderColorRoundedIcon sx={{ color: '#767676', fontSize: 16 }} />
                            </IconButton>
                          </div>
                        </ListItem>
                        <Divider sx={{ borderColor: '#484848' }} />
                        <ListItem
                          sx={{ padding: '0.2rem 0px' }}
                        >
                          <ListItemText
                            primary="#OW4-I5222GGA"
                            className='text-white text-sm'
                            sx={listSxProp}
                          />
                          <Chip label={
                            <div className='flex align-middle items-center font-bold'>
                              <StarRoundedIcon sx={{ color: '#1E2023', marginRight: 0.5 }} />
                              Fee
                            </div>
                          } variant="outlined" sx={{ color: '#1E2023', border: 0, bgcolor: '#FF9A9A' }} size="small" />
                          <div className='flex items-center'>
                            <IconButton edge="end" aria-label="delete">
                              <BorderColorRoundedIcon sx={{ color: '#767676', fontSize: 16 }} />
                            </IconButton>
                          </div>
                        </ListItem>
                        <Divider sx={{ borderColor: '#484848' }} />
                        <ListItem
                          sx={{ padding: '0.2rem 0px' }}
                        >
                          <ListItemText
                            primary="#541-QAZWSXED"
                            className='text-white text-sm'
                            sx={listSxProp}
                          />
                          <Chip label={
                            <div className='flex align-middle items-center font-bold'>
                              <StarRoundedIcon sx={{ color: '#1E2023', marginRight: 0.5 }} />
                              Paid
                            </div>
                          } variant="outlined" sx={{ color: '#1E2023', border: 0, bgcolor: '#32FF9D' }} size="small" />
                          <div className='flex items-center'>
                            <IconButton edge="end" aria-label="delete">
                              <BorderColorRoundedIcon sx={{ color: '#767676', fontSize: 16 }} />
                            </IconButton>
                          </div>
                        </ListItem>
                        <Divider sx={{ borderColor: '#484848' }} />


                      </List>

                    </div>
                  </div>
                </div> : <></>  }
                

                <div className="text-white relative">
                  <button className='absolute -top-3 -right-3'>
                    <Avatar sx={{ bgcolor: '#32FF9D', margin: 'auto', width: 50, height: 50, border: 2, borderColor: '#32FF9D' }}>
                      <SendRoundedIcon sx={{ fontSize: 29, color: '#000' }} />
                    </Avatar>
                  </button>
                  <div className='flex flex-col p-4 rounded-[30px] border border-[#757575] gap-1'>
                    <span className='text-xs text-light-gray ml-4'>Reserved Date</span>
                    <div className='flex gap-4 text-base ml-4'>
                      <span className='text-green'>Saturday</span>
                      <span className='text-white'>/</span>
                      <span className='text-white'>May.13</span>
                      <span className='text-white'>/</span>
                      <span className='text-white'>10:00</span>
                    </div>
                    <div className='bg-[#26292E] p-4 rounded-[30px] border border-[#757575] mt-2'>
                      <div className='w-full flex justify-between text-white items-center'>
                        <span className='text-xs text-light-gray'>Number of Packages</span>
                        <span className='text-sm'>14</span>
                      </div>
                      <List className='w-full'>
                        <ListItem
                          sx={{ padding: '0px 0px 0.2rem 0px' }}
                        >
                          <ListItemText
                            primary="#5GR-HG84UE36"
                            className='text-white text-sm'
                            sx={listSxProp}
                          />
                          <Chip label={
                            <div className='flex align-middle items-center font-bold'>
                              <StarRoundedIcon sx={{ color: '#1E2023', marginRight: 0.5 }} />
                              Paid
                            </div>
                          } variant="outlined" sx={{ color: '#1E2023', border: 0, bgcolor: '#32FF9D' }} size="small" />
                          <div className='flex items-center'>
                            <IconButton edge="end" aria-label="delete">
                              <BorderColorRoundedIcon sx={{ color: '#767676', fontSize: 16 }} />
                            </IconButton>
                          </div>
                        </ListItem>
                        <Divider sx={{ borderColor: '#484848' }} />
                        <ListItem
                          sx={{ padding: '0.2rem 0px' }}
                        >
                          <ListItemText
                            primary="#FO3-5456HFDY"
                            className='text-white text-sm'
                            sx={listSxProp}
                          />
                          <Chip label={
                            <div className='flex align-middle items-center font-bold'>
                              <StarRoundedIcon sx={{ color: '#1E2023', marginRight: 0.5 }} />
                              Fee
                            </div>
                          } variant="outlined" sx={{ color: '#1E2023', border: 0, bgcolor: '#FF9A9A' }} size="small" />
                          <div className='flex items-center'>
                            <IconButton edge="end" aria-label="delete">
                              <BorderColorRoundedIcon sx={{ color: '#767676', fontSize: 16 }} />
                            </IconButton>
                          </div>
                        </ListItem>
                        <Divider sx={{ borderColor: '#484848' }} />
                        <ListItem
                          sx={{ padding: '0.2rem 0px' }}
                        >
                          <ListItemText
                            primary="#64H-PUDF5567"
                            className='text-white text-sm'
                            sx={listSxProp}
                          />
                          <Chip label={
                            <div className='flex align-middle items-center font-bold'>
                              <StarRoundedIcon sx={{ color: '#1E2023', marginRight: 0.5 }} />
                              Paid
                            </div>
                          } variant="outlined" sx={{ color: '#1E2023', border: 0, bgcolor: '#32FF9D' }} size="small" />
                          <div className='flex items-center'>
                            <IconButton edge="end" aria-label="delete">
                              <BorderColorRoundedIcon sx={{ color: '#767676', fontSize: 16 }} />
                            </IconButton>
                          </div>
                        </ListItem>
                        <Divider sx={{ borderColor: '#484848' }} />
                        <ListItem
                          sx={{ padding: '0.2rem 0px' }}
                        >
                          <ListItemText
                            primary="#H69-WFD6KG48"
                            className='text-white text-sm'
                            sx={listSxProp}
                          />
                          <Chip label={
                            <div className='flex align-middle items-center font-bold'>
                              <StarRoundedIcon sx={{ color: '#1E2023', marginRight: 0.5 }} />
                              Fee
                            </div>
                          } variant="outlined" sx={{ color: '#1E2023', border: 0, bgcolor: '#FF9A9A' }} size="small" />
                          <div className='flex items-center'>
                            <IconButton edge="end" aria-label="delete">
                              <BorderColorRoundedIcon sx={{ color: '#767676', fontSize: 16 }} />
                            </IconButton>
                          </div>
                        </ListItem>
                        <Divider sx={{ borderColor: '#484848' }} />


                      </List>

                    </div>
                  </div>
                </div>

                <div className="text-white relative">
                  <button className='absolute -top-3 -right-3'>
                    <Avatar sx={{ bgcolor: '#32FF9D', margin: 'auto', width: 50, height: 50, border: 2, borderColor: '#32FF9D' }}>
                      <SendRoundedIcon sx={{ fontSize: 29, color: '#000' }} />
                    </Avatar>
                  </button>
                  <div className='flex flex-col p-4 rounded-[30px] border border-[#757575] gap-1'>
                    <span className='text-xs text-light-gray ml-4'>Reserved Date</span>
                    <div className='flex gap-4 text-base ml-4'>
                      <span className='text-green'>Monday</span>
                      <span className='text-white'>/</span>
                      <span className='text-white'>May.08</span>
                      <span className='text-white'>/</span>
                      <span className='text-white'>11:00</span>
                    </div>
                    <div className='bg-[#26292E] p-4 rounded-[30px] border border-[#757575] mt-2'>
                      <div className='w-full flex justify-between text-white items-center'>
                        <span className='text-xs text-light-gray'>Number of Packages</span>
                        <span className='text-sm'>6</span>
                      </div>
                      <List className='w-full'>
                        <ListItem
                          sx={{ padding: '0px 0px 0.2rem 0px' }}
                        >
                          <ListItemText
                            primary="#9EW-JSAOA668"
                            className='text-white text-sm'
                            sx={listSxProp}
                          />
                          <Chip label={
                            <div className='flex align-middle items-center font-bold'>
                              <StarRoundedIcon sx={{ color: '#1E2023', marginRight: 0.5 }} />
                              Paid
                            </div>
                          } variant="outlined" sx={{ color: '#1E2023', border: 0, bgcolor: '#32FF9D' }} size="small" />
                          <div className='flex items-center'>
                            <IconButton edge="end" aria-label="delete">
                              <BorderColorRoundedIcon sx={{ color: '#767676', fontSize: 16 }} />
                            </IconButton>
                          </div>
                        </ListItem>
                        <Divider sx={{ borderColor: '#484848' }} />
                        <ListItem
                          sx={{ padding: '0.2rem 0px' }}
                        >
                          <ListItemText
                            primary="#144-055HSZAQ"
                            className='text-white text-sm'
                            sx={listSxProp}
                          />
                          <Chip label={
                            <div className='flex align-middle items-center font-bold'>
                              <StarRoundedIcon sx={{ color: '#1E2023', marginRight: 0.5 }} />
                              Fee
                            </div>
                          } variant="outlined" sx={{ color: '#1E2023', border: 0, bgcolor: '#FF9A9A' }} size="small" />
                          <div className='flex items-center'>
                            <IconButton edge="end" aria-label="delete">
                              <BorderColorRoundedIcon sx={{ color: '#767676', fontSize: 16 }} />
                            </IconButton>
                          </div>
                        </ListItem>
                        <Divider sx={{ borderColor: '#484848' }} />
                        <ListItem
                          sx={{ padding: '0.2rem 0px' }}
                        >
                          <ListItemText
                            primary="#3IR-5477EXD9"
                            className='text-white text-sm'
                            sx={listSxProp}
                          />
                          <Chip label={
                            <div className='flex align-middle items-center font-bold'>
                              <StarRoundedIcon sx={{ color: '#1E2023', marginRight: 0.5 }} />
                              Fee
                            </div>
                          } variant="outlined" sx={{ color: '#1E2023', border: 0, bgcolor: '#FF9A9A' }} size="small" />
                          <div className='flex items-center'>
                            <IconButton edge="end" aria-label="delete">
                              <BorderColorRoundedIcon sx={{ color: '#767676', fontSize: 16 }} />
                            </IconButton>
                          </div>
                        </ListItem>
                        <Divider sx={{ borderColor: '#484848' }} />
                        <ListItem
                          sx={{ padding: '0.2rem 0px' }}
                        >
                          <ListItemText
                            primary="#ZXC-5WFKG481"
                            className='text-white text-sm'
                            sx={listSxProp}
                          />
                          <Chip label={
                            <div className='flex align-middle items-center font-bold'>
                              <StarRoundedIcon sx={{ color: '#1E2023', marginRight: 0.5 }} />
                              Paid
                            </div>
                          } variant="outlined" sx={{ color: '#1E2023', border: 0, bgcolor: '#32FF9D' }} size="small" />
                          <div className='flex items-center'>
                            <IconButton edge="end" aria-label="delete">
                              <BorderColorRoundedIcon sx={{ color: '#767676', fontSize: 16 }} />
                            </IconButton>
                          </div>
                        </ListItem>
                        <Divider sx={{ borderColor: '#484848' }} />


                      </List>

                    </div>
                  </div>
                </div>
              </>
            )}  
            {!isList && (
              <>
                <div className="flex justify-between items-center">
                  <label htmlFor="Toggle" className="inline-flex items-center p-1 cursor-pointer text-sm font-bold border border-[#181A1E] rounded-full bg-[#26292E]">
                    <input id="Toggle" type="checkbox" className="hidden peer" name="Toggle" defaultChecked={false} onChange={() => setIsList(prevMode => (prevMode ? false : true))} />
                    <span className="px-4 py-2 rounded-full text-gray peer-checked:bg-green peer-checked:peer-hover:bg-gradient-to-b peer-checked:text-black">List</span>
                    {uploaded ? <Badge anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }} badgeContent=" " variant="dot" sx={{
                      '& .MuiBadge-badge': {
                        backgroundColor: '#FF862E',
                        top: 8,
                        right: 4
                      },
                    }} >
                      <span className="px-4 py-2 rounded-full text-black  bg-green peer-checked:bg-[#26292E] peer-checked:peer-hover:bg-[#26292E] peer-checked:text-gray">Reservation</span>
                    </Badge> : <span className="px-4 py-2 rounded-full text-black  bg-green peer-checked:bg-[#26292E] peer-checked:peer-hover:bg-[#26292E] peer-checked:text-gray">Reservation</span>}
                    
                  </label>
                  <Chip
                    label={
                      <div className='flex align-middle items-center font-bold'>
                        <FormatListBulletedRoundedIcon sx={{ color: '#fff', fontSize: '1rem', marginRight: 0.5 }} />
                        {uploaded ? 1 : 0}
                      </div>
                    } sx={{
                      color: '#fff',
                      bgcolor: 'transparent',
                      border: 1,
                      borderColor: 'white',
                      fontWeight: 'bold',
                      fontSize: '14px',
                      '& .MuiChip-label': {
                        padding: '0px 2px'
                      },
                      '& .MuiChip-avatar': {
                        margin: '0',
                        width: '17px',
                        height: '17px'
                      },
                      '&': {
                        height: '28px'
                      },
                    }} className="w-[48px]" />

                </div>
                {uploaded ? <div className="text-white relative">
                  <div className='flex flex-col p-4 rounded-[30px] border border-green gap-1'>
                    <span className='text-xs text-light-gray ml-4'>Reserved Date</span>
                    <div className='flex gap-4 text-base ml-4'>
                      <span className='text-green'>Wednesday</span>
                      <span className='text-white'>/</span>
                      <span className='text-white'>May.17</span>
                      <span className='text-white'>/</span>
                      <span className='text-white'>17:00</span>
                    </div>
                    <div className='bg-[#26292E] p-4 rounded-[30px] border border-[#757575] mt-2'>
                      <div className='w-full flex justify-between text-white items-center'>
                        <span className='text-xs text-light-gray'>Number of Packages</span>
                        <span className='text-sm'>3</span>
                      </div>
                      <List className='w-full'>
                        <ListItem
                          sx={{ padding: '0px 0px 0.2rem 0px' }}
                        >
                          <ListItemText
                            primary="#AWE-11871VKU"
                            className='text-white text-sm'
                            sx={listSxProp}
                          />
                          <Chip label={
                            <div className='flex align-middle items-center font-bold'>
                              <StarRoundedIcon sx={{ color: '#1E2023', marginRight: 0.5 }} />
                              Paid
                            </div>
                          } variant="outlined" sx={{ color: '#1E2023', border: 0, bgcolor: '#32FF9D' }} size="small" />
                          <div className='flex items-center'>
                            <IconButton edge="end" aria-label="delete">
                              <BorderColorRoundedIcon sx={{ color: '#767676', fontSize: 16 }} />
                            </IconButton>
                          </div>
                        </ListItem>
                        <Divider sx={{ borderColor: '#484848' }} />
                        <ListItem
                          sx={{ padding: '0.2rem 0px' }}
                        >
                          <ListItemText
                            primary="#OW4-I5222GGA"
                            className='text-white text-sm'
                            sx={listSxProp}
                          />
                          <Chip label={
                            <div className='flex align-middle items-center font-bold'>
                              <StarRoundedIcon sx={{ color: '#1E2023', marginRight: 0.5 }} />
                              Fee
                            </div>
                          } variant="outlined" sx={{ color: '#1E2023', border: 0, bgcolor: '#FF9A9A' }} size="small" />
                          <div className='flex items-center'>
                            <IconButton edge="end" aria-label="delete">
                              <BorderColorRoundedIcon sx={{ color: '#767676', fontSize: 16 }} />
                            </IconButton>
                          </div>
                        </ListItem>
                        <Divider sx={{ borderColor: '#484848' }} />
                        <ListItem
                          sx={{ padding: '0.2rem 0px' }}
                        >
                          <ListItemText
                            primary="#541-QAZWSXED"
                            className='text-white text-sm'
                            sx={listSxProp}
                          />
                          <Chip label={
                            <div className='flex align-middle items-center font-bold'>
                              <StarRoundedIcon sx={{ color: '#1E2023', marginRight: 0.5 }} />
                              Paid
                            </div>
                          } variant="outlined" sx={{ color: '#1E2023', border: 0, bgcolor: '#32FF9D' }} size="small" />
                          <div className='flex items-center'>
                            <IconButton edge="end" aria-label="delete">
                              <BorderColorRoundedIcon sx={{ color: '#767676', fontSize: 16 }} />
                            </IconButton>
                          </div>
                        </ListItem>
                        <Divider sx={{ borderColor: '#484848' }} />
                      </List>

                    </div>
                  </div>
                </div> : <></>}
                
              </>  
            )}       

          </div>
        </CustomTabPanel>

        <CustomTabPanel value={num} index={3}>
          <div className='py-2 flex flex-col gap-6'>
            <Chip
              avatar={<Avatar alt="box" src={box} />}
              label="1" sx={{
                color: '#C0C0C0',
                bgcolor: 'transparent',
                border: 1,
                borderColor: 'white',
                fontWeight: 'bold',
                fontSize: '12px',
                '& .MuiChip-label': {
                  padding: '0px 2px 0px 12px'
                },
                '& .MuiChip-avatar': {
                  margin: '0',
                  width: '17px',
                  height: '17px'
                },
                '&': {
                  height: '28px'
                },
              }} className="w-[52px]" />
            <div className='w-full h-[360px] rounded-3xl border border-[#363A40] bg-[#26292E] shadow-5xl py-6 px-8 flex flex-col justify-between'>
              <div className='w-full flex justify-between text-white items-center'>
                <div className='flex gap-4 items-center text-white'>
                  <span className='text-base font-bold'>#YRF-541KZKP8</span>
                  <Chip label="Refund" size="small" sx={{
                    color: 'black', backgroundColor: '#FF9432', fontSize: '10px', fontWeight: 'medium', 
                    '& .MuiChip-label': {
                      padding: '0px 8px'
                    }, }}/>
                </div>                
                <span className='text-base'>05/24</span>
              </div>
              <div className='w-full flex justify-between text-white items-end'>
                <div className='flex gap-2 items-end text-gray'>
                  <PersonRoundedIcon style={{ fontSize: "1.3rem" }} />
                  <span className='text-sm font-bold'>Name</span>
                </div>
                <span className='text-xs text-white'>James Anderson</span>
              </div>
              <Divider sx={{ borderColor: '#737373', borderRadius: '24px' }} />
              <div className='w-full flex justify-between text-white items-end'>
                <div className='flex gap-2 items-end text-gray'>
                  <LocalPhoneRoundedIcon style={{ fontSize: "1.3rem" }} />
                  <span className='text-sm font-bold'>Phone verify</span>
                </div>
                <span className='text-xs text-white'>Pass</span>
              </div>
              <Divider sx={{ borderColor: '#737373', borderRadius: '24px' }} />
              <div className='w-full flex justify-between text-white items-end'>
                <div className='flex gap-2 items-end text-gray'>
                  <EmailRoundedIcon style={{ fontSize: "1.3rem" }} />
                  <span className='text-sm font-bold'>Postcode</span>
                </div>
                <span className='text-xs text-white'>SW50984PQR</span>
              </div>
              <Divider sx={{ borderColor: '#737373', borderRadius: '24px' }} />
              <div className='w-full flex justify-between items-center font-medium text-white'>
                <span className='text-xs'>
                  3 
                  <span className='text-xs ml-1'>items</span>
                </span>
                <div className='flex gap-1 items-center'>
                  <CurrencyExchangeRoundedIcon style={{ fontSize: "1rem", color: '#FF862E' }} />
                  <span className='text-xs font-bold'>Ask for Refund</span>
                  <span className='text-xs font-bold text-[#FF862E]'>15,340</span>
                </div>
              </div>
              <div className='flex gap-4 w-full'>
                <img className="w-16" src={album} alt="album" />
                <div className='flex flex-1 flex-col h-full justify-center gap-1'>
                  <span className='flex text-sm font-bold text-white items-end'>
                    Sam Hancy Albums - 2024
                  </span>
                  <span className='text-xs font-bold text-gray'>Yellow Music</span>
                  <div className='w-full flex justify-between items-center'>
                    <span className='flex text-xs font-bold items-end gap-2'>
                      <span className='text-gray line-through'>$3100</span>
                      <span className='text-green'>$2,800</span>
                    </span>
                    <span className='text-xs text-white'>
                      x
                      <span className='text-xs ml-1'>5</span>
                    </span>
                  </div>                  
                </div>
              </div>
              <Divider sx={{ borderColor: '#737373', borderRadius: '24px', borderStyle: 'dashed' }} />
              <div className='flex justify-between mt-2 gap-2'>
                <button className="flex items-center justify-center w-[180px] text-black text-sm font-bold rounded-full py-2 bg-[#F0C0A5] gap-3">
                  Comfirm
                  <button className="w-[65px] text-black text-sm font-bold rounded-full py-1.5 bg-white shadow-xl">
                    <KeyboardArrowRightRoundedIcon sx={{ fontSize: 20, color: 'black' }} />
                  </button>                  
                </button>
                <button className="w-[110px] text-gray text-sm font-bold rounded-full py-2 border border-gray bg-transparent">
                  Appeal
                </button>
              </div>
            </div>

          </div>

        </CustomTabPanel>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        setUploaded={setUploaded}
        setIsList={setIsList}
      />
    </div>
  );
}