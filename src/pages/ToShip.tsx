import { useNavigate, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

// import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';

import IconButton from '@mui/material/IconButton';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';

import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';

import logo from "/logo.svg";
import message from "/message.svg";

import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';

const listSxProp = {
  '&.MuiListItemText-root span': {
    fontSize: '16px',
  }
};


type ToShipProps = {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setMainPage: React.Dispatch<React.SetStateAction<string>>;
}

export default function ToShip({ setValue, setMainPage }: ToShipProps) {

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/sender-home');
    setValue('sender-home');
  };

  useEffect(() => {
    setValue('none');
    setMainPage('sender-home');
  }, [setValue, setMainPage]);


  const [added, setIsAdded] = useState(false);

  const location = useLocation();

  const hash = location.search;
  let q = '';

  if (hash !== '') {
    q = hash
  }
  

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
      <Box sx={{ paddingX: 3.5, paddingY: 1, flex: 1 }}>
        {added && <span className='text-white text-base font-bold '>Reserved Sucessfully!</span>} 
        {q === '?q=upload' && <span className='text-white text-base font-bold '>Finish Upload!</span>}       

        <div className='w-full h-24 rounded-[25px] border border-[#363A40] flex justify-center bg-[#26292E] shadow-xl flex-col my-4'>
          <div className='w-full flex'>
            <div className="flex flex-col px-4 w-[70%] my-auto gap-3">
              <div className='flex gap-3 items-center text-white'>
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
              <div className='w-full flex justify-between items-center font-medium text-gray'>
                <span className='text-sm'>
                  4
                  <span className='text-sm ml-1'>items</span>
                </span>
                <div className='flex gap-1 items-center'>
                  <PaidOutlinedIcon style={{ fontSize: "1rem", color: '#32FF9D' }} />
                  <span className='text-sm'>Order Total:</span>
                  <span className='text-sm font-bold text-green'>12,450</span>
                </div>
              </div>
            </div>
            <Divider orientation="vertical" flexItem
              sx={{ border: 1, borderColor: '#8A8A8A', borderRadius: '24px' }} />
            <div className='flex flex-col items-start ml-4 justify-center w-[28%]'>
              <span className='text-sm text-gray'>State</span>
              <span className='text-base font-bold text-white'>{added ? 'Reserved List ': 'To Ship'}</span>
              
            </div>
          </div>
        </div>
        <span className='text-white text-base font-bold mt-4'>Suggest to add</span>
        <div className='flex flex-col gap-6 my-4'>
          <div className="text-white relative">
            <button className='absolute -top-3 -right-3' onClick={() => setIsAdded(true)}>
              <Avatar sx={{ bgcolor: '#26292E', margin: 'auto', width: 50, height: 50, border: 2, borderColor: '#32FF9D' }}>
                {added ? <DoneOutlineRoundedIcon sx={{ fontSize: 29, color: '#32FF9D' }} /> : <AddRoundedIcon sx={{ fontSize: 29, color: '#32FF9D' }} />}
                
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
                  <span className='text-sm'>{added ? 4 : 3}</span>
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
                  {added && <><ListItem
                    sx={{ padding: '0.2rem 0px' }}
                  >
                    <ListItemText
                      primary="#PF1-147RDHG5"
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
                    <Divider sx={{ borderColor: '#484848' }} /></>} 

                </List>

              </div>
            </div>
          </div>

          <div className="text-white relative">
            <button className='absolute -top-3 -right-3' onClick={() => setIsAdded(true)}>
              {added ? <Avatar sx={{ bgcolor: '#26292E', margin: 'auto', width: 50, height: 50, border: 2, borderColor: '#B2B2B2' }}>
                <AddRoundedIcon sx={{ fontSize: 29, color: '#B2B2B2' }} />
              </Avatar> : <Avatar sx={{ bgcolor: '#26292E', margin: 'auto', width: 50, height: 50, border: 2, borderColor: '#32FF9D' }}>
                <AddRoundedIcon sx={{ fontSize: 29, color: '#32FF9D' }} />
              </Avatar>}
              
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

        </div>
        <button className='w-full px-6 py-4 border border-white border-dashed flex justify-between text-white items-center rounded-full text-base my-4'>
          Add New Reserved List
          <AddRoundedIcon sx={{ fontSize: 24, color: 'white' }} />
        </button>
      </Box>
    </div>
  );
}