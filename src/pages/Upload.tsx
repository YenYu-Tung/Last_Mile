import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

// import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';

import IconButton from '@mui/material/IconButton';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import ContentPasteRoundedIcon from '@mui/icons-material/ContentPasteRounded';


import logo from "/logo.svg";

import QrReader from "../components/Sender_Scanner";

import successicon from "/successicon.svg";


type UploadProps = {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setMainPage: React.Dispatch<React.SetStateAction<string>>;
}

export default function Upload({ setValue, setMainPage }: UploadProps) {

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/sender-home');
    setValue('sender-home');
  };

  useEffect(() => {
    setValue('none');
    setMainPage('sender-home');
  }, [setValue, setMainPage]);
  
  const handleUpload = () => {
    navigate(`/to-ship?q=upload`);
    setValue('sender-home');
  };

  const [data, setData] = useState("ll");

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
          <IconButton aria-label="message">
            <SmsOutlinedIcon className='text-green' style={{ fontSize: "2rem" }} />
          </IconButton>
        </div>
      </div>
      <div className='pt-4 flex flex-col gap-6 pb-24 px-8'>
        <div className='w-full h-[740px] rounded-3xl border border-[#363A40] bg-[#26292E] shadow-5xl py-6 px-8 flex flex-col justify-between'>
          <div className='w-full flex justify-between text-white items-center'>
            <div className='flex gap-2 items-center text-white'>
              <span className='text-base font-bold'>Receiver Information</span>
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
            <AccountCircleOutlinedIcon sx={{ fontSize: 24, color: '#fff' }} />
          </div>
          <div className='w-full flex justify-between text-white items-end'>
            <div className='flex gap-2 items-end text-gray'>
              <ListAltRoundedIcon style={{ fontSize: "1.3rem" }} />
              <span className='text-sm font-bold'>Order number</span>
            </div>
            <span className='text-sm text-white'>#AWE-11871VKU</span>
          </div>
          <Divider sx={{ borderColor: '#737373', borderRadius: '24px' }} />
          <div className='w-full flex justify-between text-white items-end'>
            <div className='flex gap-2 items-end text-gray'>
              <PersonRoundedIcon style={{ fontSize: "1.3rem" }} />
              <span className='text-sm font-bold'>Name</span>
            </div>
            <span className='text-sm text-white'>Tiffany Smith</span>
          </div>
          <Divider sx={{ borderColor: '#737373', borderRadius: '24px' }} />
          <div className='w-full flex justify-between text-white items-end'>
            <div className='flex gap-2 items-end text-gray'>
              <LocalPhoneRoundedIcon style={{ fontSize: "1.3rem" }} />
              <span className='text-sm font-bold'>Phone verify</span>
            </div>
            <span className='text-sm text-white'>Pass</span>
          </div>
          <Divider sx={{ borderColor: '#737373', borderRadius: '24px' }} />
          <div className='w-full flex justify-between text-white items-end'>
            <div className='flex gap-2 items-end text-gray'>
              <EmailRoundedIcon style={{ fontSize: "1.3rem" }} />
              <span className='text-sm font-bold'>Postcode</span>
            </div>
            <span className='text-sm text-white'>LEXXXXX1JF</span>
          </div>
          <Divider sx={{ borderColor: '#737373', borderRadius: '24px' }} />
          <div className='w-full flex justify-between text-white items-start'>
            <div className='flex gap-2 items-center text-gray'>
              <ContentPasteRoundedIcon style={{ fontSize: "1.3rem" }} />
              <span className='text-sm font-bold'>Contents</span>
            </div>
            <span className='w-[55%] text-sm text-white flex flex-col'>
              <ul className='list-disc space-y-2'>
                <li>
                  Sam Album
                  <span className='text-sm ml-2'>
                    x
                    <span className='text-sm ml-1'>5</span>
                  </span>
                </li>
                <li>
                  WH103 Headphone
                  <span className='text-sm ml-2'>
                    x
                    <span className='text-sm ml-1'>2</span>
                  </span>
                </li>
              </ul>
            </span>
          </div>
          <div className='w-72 h-72 mx-auto border border-white border-dashed rounded-[30px] relative'>
            <QrReader setData={setData} />
            {data && <div className="w-full flex justify-center absolute top-20 right-1"><img className="w-28" src={successicon} alt="Success" /></div>}
            <div className='w-full h-full bg-black/15 absolute top-0 left-0 z-20 rounded-[30px]'></div>
          </div>
          <div className='flex justify-center flex-col items-center mt-4'>
            <button className={`flex items-center justify-center w-[250px] text-lg font-bold rounded-[20px] py-3 bg-transparent border border-ligt-gray ${data ? 'border-green text-green' : 'border-light-gray text-light-gray'}`} disabled={!data} onClick={handleUpload}>
              Next
            </button>
            <span className="text-white text-sm mt-3 w-full text-center">
              Cannot Scan?
            </span>
          </div>
          
        </div>
      </div>
      
    </div>
  );
}