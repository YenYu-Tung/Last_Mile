import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import logo from "/logo.svg";
import message from "/message.svg";


import IconButton from '@mui/material/IconButton';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import Avatar from '@mui/material/Avatar';
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';
import LocalGasStationRoundedIcon from '@mui/icons-material/LocalGasStationRounded';

import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import Badge from '@mui/material/Badge';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Chip from '@mui/material/Chip';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

import Switch from "../components/HomeSwitch";
import { Navigate } from 'react-router-dom';

const listSxProp = {
  '&.MuiListItemText-root span': {
    fontSize: '16px',
  }
};

type Props = {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setMainPage: React.Dispatch<React.SetStateAction<string>>;
  mainPage: string;
  toggleMainPage: () => void;
  setNum: React.Dispatch<React.SetStateAction<number>>;
}

export default function SenderProfile({ setValue, setMainPage, mainPage, toggleMainPage, setNum }: Props) {

  useEffect(() => {
    setValue('sender-home');
    setMainPage('sender-home')
  }, [setValue, setMainPage]);


  // const navigate = useNavigate();
  // const handleNavigate = () => {
  //   navigate('/list');
  //   setValue('none');
  // };
  // const handleNavigateToDelivery = () => {
  //   navigate('/delivery');
  //   setValue('delivery');
  // };


  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const navigate = useNavigate();
  const handleNavigate = (index: number) => {
    setNum(index);
    navigate('/shipment');
  }


  return (
    <div className="bg-dark w-full min-h-full">
      <div className="flex justify-between align-middle items-center p-4">
        <img className="w-36" src={logo} alt="Last Mile" />
        <div className='flex items-center gap-2'>
          <Switch mainPage={mainPage} toggleMainPage={toggleMainPage} />
          <img className="w-7" src={message} alt="Message" />
        </div>
      </div>


      <div className="flex flex-col items-start px-6">
        <span className='text-white text-2xl font-bold'>WELCOME BACK,</span>
      </div>

      <div className="relative flex items-center justify-center mb-3 bg-contain bg-center w-full h-32" style={{ backgroundImage: `url(/sender_home.svg)`, backgroundRepeat: 'no-repeat' }}>
        <div className="relative flex z-10 justify-start items-center w-full px-6 pb-2 gap-2 xs:gap-6">
          <img className="w-16" src="/vadash.svg" alt="vadash" />
          <div className='flex flex-col gap-2'>
            <span className='text-white text-base xs:text-lg font-bold'>Vandash Media Company</span>
            <span className='text-white text-xs xs:text-sm'>Epinal Way, Loughborough LE11 3TU
              <EditRoundedIcon className='text-white ml-1' sx={{ fontSize: 12 }} />
            </span>
          </div>
        </div>
      </div>




      <div className="flex flex-col items-start px-6">
        <div className="flex items-center w-full mb-4 overflow-auto gap-4">
          <button
            className={`text-nowrap text-sm font-bold px-4 py-3 rounded-full ${activeTab === 0 ? 'bg-[#E0E0E0] text-black' : 'bg-transparent text-gray border border-gray'}`}
            onClick={() => handleTabClick(0)}
          >
            My Dashboard
          </button>
          <Badge anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }} badgeContent=" " variant="dot" sx={{
            '& .MuiBadge-badge': {
              backgroundColor: '#32FF9D',
              top: 8,
              right: 4
            },
          }} >
            <button
              className={`text-sm font-bold px-4 py-3 rounded-full ${activeTab === 1 ? 'bg-[#E0E0E0] text-black' : 'bg-transparent text-gray border border-gray'}`}
              onClick={() => handleTabClick(1)}
            >
              Reservation
            </button>
          </Badge>

          <Badge anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }} badgeContent=" " variant="dot" sx={{
            '& .MuiBadge-badge': {
              backgroundColor: '#FF862E',
              top: 8,
              right: 4
            },
          }} >
            <button
              className={`text-sm font-bold px-4 py-3 rounded-full ${activeTab === 2 ? 'bg-[#E0E0E0] text-black' : 'bg-transparent text-gray border border-gray'}`}
              onClick={() => handleTabClick(2)}
            >
              Notice
            </button>
          </Badge>

        </div>
        <div className="w-full my-3">
          {activeTab === 0 && (
            <div className='w-full flex flex-col'>
              {/* Content for Tab 1 */}
              <span className='text-white text-base font-bold mb-3'>My Dashboard</span>
              <div className='w-full flex gap-3'>
                <div className='w-1/2 flex flex-col gap-3 items-end'>
                  <img className="w-44" src="/reserved_time.svg" alt="reserved time" onClick={() => handleNavigate(2) }/>
                  <img className="w-44" src="/return_refund.svg" alt="return refund" onClick={() => handleNavigate(3)} />
                </div>
                <div className='w-1/2 flex flex-col mt-6 gap-3'>
                  <img className="w-44" src="/performance.svg" alt="performance" />
                  <img className="w-44" src="/pending_order.svg" alt="pending order" onClick={() => handleNavigate(0)} />
                </div>

              </div>
            </div>
          )}
          {activeTab === 1 && (
            <div className="text-white">
              {/* Content for Tab 2 */}
              <div className='flex flex-col p-4 rounded-[30px] border border-[#757575] gap-1'>
                <span className='text-xs text-light-gray'>Reserved Date</span>
                <div className='flex gap-4 text-base'>
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
                    <Divider sx={{ border: 1, borderColor: '#484848' }} />
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
                    <Divider sx={{ border: 1, borderColor: '#484848' }} />
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
                    <Divider sx={{ border: 1, borderColor: '#484848' }} />


                  </List>

                </div>
              </div>
            </div>
          )}
          {activeTab === 2 && (
            <div className='flex flex-col w-full gap-5'>
              {/* Content for Tab 3 */}

              <div className='flex flex-col w-full bg-[#26292E] rounded-3xl p-5 gap-2'>
                <div className='w-full flex justify-between text-white items-center'>
                  <span className='text-base font-bold flex items-center gap-2'>
                    <Avatar sx={{ bgcolor: 'transparent', margin: 'auto', width: 28, height: 28, border: 2, borderColor: '#32FF9D' }}>
                      <PaidRoundedIcon sx={{ fontSize: 16, color: '#32FF9D' }} />
                    </Avatar>
                    Box Price Increase</span>
                  <span className='text-xs'>04.30</span>
                </div>
                <span className='text-xxs text-white'>Due to rising raw material costs, we will increase box prices by 8% starting June 1, 2024. This adjustment ensures we continue to provide quality packaging solutions. We appreciate your understanding and support. </span>
              </div>

              <div className='flex flex-col w-full bg-[#26292E] rounded-3xl p-5 gap-2'>
                <div className='w-full flex justify-between text-white items-center'>
                  <span className='text-base font-bold flex items-center gap-2'>
                    <Avatar sx={{ bgcolor: 'transparent', margin: 'auto', width: 28, height: 28, border: 2, borderColor: '#32FF9D' }}>
                      <LocalGasStationRoundedIcon sx={{ fontSize: 16, color: '#32FF9D' }} />
                    </Avatar>
                    Fuel Surcharge Adjustment</span>
                  <span className='text-xs'>04.01</span>
                </div>
                <span className='text-xxs text-white'>Due to rising fuel costs, a 5% fuel surcharge will be applied to all shipments starting July 1, 2024. This helps us maintain service standards. We appreciate your understanding. For questions, contact logistics support. </span>
              </div>

            </div>
          )}
        </div>
      </div>


      <div className="flex flex-col items-start px-6 pt-4 pb-20">
        <div className='w-full flex justify-between items-center'>
          <span className='text-white text-base font-bold'>More Funtions</span>
          <button className="flex justify-center items-center text-exlight-gray hover:text-green">
            <span className='text-sm'>See more</span>
            <ChevronRightRoundedIcon style={{ fontSize: "1.2rem" }} />
          </button>
        </div>

        <div className="flex w-full justify-between p-4">
          <div className='flex flex-col items-center gap-2 text-white hover:text-green'>
            <button className='flex flex-col w-20 h-20 items-center justify-center rounded-full relative shadow-3xl'>
              <img className="w-14" src="/bx_area.svg" alt="service area icon" />
            </button>
            <span className='w-full text-center text-xs mt-2'>Service Area</span>
          </div>

          <div className='flex flex-col items-center gap-2 text-white hover:text-green'>
            <button className='flex flex-col w-20 h-20 items-center justify-center rounded-full relative shadow-3xl'>
              <img className="w-12" src="/uiw_pay.svg" alt="payment icon" />
            </button>
            <span className='w-full text-center text-xs mt-2'>Payment</span>
          </div>

          <div className='flex flex-col items-center gap-2 text-white hover:text-green'>
            <button className='flex flex-col w-20 h-20 items-center justify-center rounded-full relative shadow-3xl'>
              <img className="w-14" src="/icomoon-free_feed.svg" alt="monitoring icon" />
            </button>
            <span className='text-center text-xs mt-2'>Monitoring</span>
          </div>

        </div>
      </div>

    </div>
  );
}